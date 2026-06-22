'use strict';

const fs = require('fs');
const path = require('path');
const { store } = require('../src/server/db/store');
const storage = require('../src/server/services/storage');

const ASSET_DIR = path.join(process.cwd(), 'public', 'assets');
const IMAGE_EXTENSIONS = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.gif',
  '.svg',
  '.avif',
]);

function isImageFile(name) {
  return IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase());
}

function contentTypeFor(fileName) {
  switch (path.extname(fileName).toLowerCase()) {
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.webp':
      return 'image/webp';
    case '.gif':
      return 'image/gif';
    case '.svg':
      return 'image/svg+xml';
    case '.avif':
      return 'image/avif';
    default:
      return 'application/octet-stream';
  }
}

async function upsertSetting(key, value) {
  const existing = await store.findOne('settings', { key });
  if (existing) {
    return store.update('settings', existing.id, { value });
  }
  return store.insert('settings', { key, value });
}

async function recordFile(uploaded, fileName, localPath) {
  const existing = await store.findOne('files', {
    entity_type: 'site_assets',
    entity_id: localPath,
  });
  const row = {
    key: uploaded.key,
    bucket: uploaded.bucket,
    url: uploaded.url,
    original_name: fileName,
    content_type: uploaded.content_type,
    size: uploaded.size,
    kind: 'site-asset-migration',
    entity_type: 'site_assets',
    entity_id: localPath,
    uploaded_by: 'migration-script',
  };

  if (existing) {
    await store.update('files', existing.id, row);
    return;
  }
  await store.insert('files', row);
}

async function main() {
  storage.ensureConfigured();
  await store.initialize();

  const overwrite = process.argv.includes('--overwrite');
  const assetNames = fs.readdirSync(ASSET_DIR).filter(isImageFile).sort();
  const existingSetting = await store.findOne('settings', { key: 'site_assets' });
  const assetMap =
    existingSetting && existingSetting.value && typeof existingSetting.value === 'object'
      ? { ...existingSetting.value }
      : {};

  let uploadedCount = 0;
  let skippedCount = 0;

  for (const fileName of assetNames) {
    const absolutePath = path.join(ASSET_DIR, fileName);
    const localPath = `/assets/${fileName}`;

    if (!overwrite && assetMap[localPath]) {
      skippedCount += 1;
      continue;
    }

    const buffer = fs.readFileSync(absolutePath);
    const uploaded = await storage.uploadBuffer({
      buffer,
      originalName: fileName,
      contentType: contentTypeFor(fileName),
      contentLength: buffer.length,
      metadata: {
        source: 'site-asset-migration',
        local_path: localPath,
      },
    });

    assetMap[localPath] = uploaded.url;
    await recordFile(uploaded, fileName, localPath);
    uploadedCount += 1;
    console.log(`Uploaded ${localPath} -> ${uploaded.url}`);
  }

  await upsertSetting('site_assets', assetMap);

  if (typeof store.close === 'function') {
    await store.close();
  }

  console.log(
    `Migration complete. Uploaded ${uploadedCount} file(s), skipped ${skippedCount}, total mapped ${Object.keys(assetMap).length}.`
  );
}

main().catch(async (error) => {
  console.error(error && error.stack ? error.stack : error);
  if (typeof store.close === 'function') {
    try {
      await store.close();
    } catch (closeError) {
      // Ignore shutdown errors after a failed migration.
    }
  }
  process.exit(1);
});
