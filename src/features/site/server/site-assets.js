import { store } from '../../../server/db/store';

let initPromise;

async function ensureStore() {
  if (!initPromise) {
    initPromise = Promise.resolve(store.initialize());
  }
  await initPromise;
}

export async function loadSiteAssetMap() {
  try {
    await ensureStore();
    const row = await store.findOne('settings', { key: 'site_assets' });
    const value = row && row.value && typeof row.value === 'object' ? row.value : {};
    return value && !Array.isArray(value) ? value : {};
  } catch (error) {
    return {};
  }
}

export function resolveSiteAsset(src, assetMap = {}) {
  if (!src) return src;
  return assetMap[src] || src;
}
