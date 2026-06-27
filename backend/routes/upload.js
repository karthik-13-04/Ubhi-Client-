// routes/upload.js — image hosting.
//
//   POST /api/upload   body: { dataUrl }   -> { url }   (ADMIN auth required)
//
// The storefront converts a chosen file to a base64 data URL (it already does
// this for the admin image pickers); we decode it, write it to disk under
// backend/uploads/, and return a URL the storefront stores INSTEAD of the giant
// base64 string. This is what keeps localStorage / the DB from bloating, and is
// the local-disk default. To move to S3/Cloudinary later, swap the write below
// for an SDK put and return the CDN URL — the storefront contract is unchanged.

'use strict';

const express = require('express');
const crypto = require('crypto');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { store } = require('../db/store');

const router = express.Router();
const { requireAuth } = require('../middleware/auth');
const config = require('../config');

const bigJson = express.json({ limit: '16mb' });
const storageHost = (config.AWS_S3_DOMAIN || '').split('/')[0];
const s3Client = new S3Client({
  region: config.AWS_REGION || 'us-east-1',
  endpoint: `https://${storageHost}`,
  forcePathStyle: true,
  credentials: {
    accessKeyId: config.AWS_ACCESS_KEY_ID,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  },
});

const EXT = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/webp': 'webp',
  'image/gif': 'gif',
  'image/svg+xml': 'svg',
};

router.post('/', requireAuth, bigJson, async (req, res, next) => {
  try {
    const dataUrl = req.body && req.body.dataUrl;
    const m = /^data:([^;]+);base64,(.+)$/s.exec(String(dataUrl || ''));
    if (!m) return res.status(400).json({ error: 'Expected a base64 data URL in { dataUrl }' });
    const mime = m[1].toLowerCase();
    const ext = EXT[mime];
    if (!ext) return res.status(415).json({ error: `Unsupported image type: ${mime}` });
    const buf = Buffer.from(m[2], 'base64');
    if (!buf.length) return res.status(400).json({ error: 'Empty image data' });
    if (buf.length > 8 * 1024 * 1024) return res.status(413).json({ error: 'Image too large (max 8MB)' });
    const name = `${crypto.randomUUID()}.${ext}`;
    await s3Client.send(
      new PutObjectCommand({
        Bucket: config.AWS_BUCKET_NAME,
        Key: `uploads/${name}`,
        Body: buf,
        ContentType: mime,
      })
    );
    const url = `https://${storageHost}/${config.AWS_BUCKET_NAME}/uploads/${name}`;
    const media = await store.insert('media_library', {
      kind: 'image',
      url,
      storage_key: `uploads/${name}`,
      mime_type: mime,
      size_bytes: buf.length,
      original_name: req.body && req.body.originalName ? String(req.body.originalName).trim() : name,
      alt_text: req.body && req.body.altText ? String(req.body.altText).trim() : '',
      title: req.body && req.body.title ? String(req.body.title).trim() : '',
      uploaded_by: req.user && req.user.id ? req.user.id : null,
    });
    res.json({
      url,
      media,
      ok: true,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
