'use strict';

const crypto = require('crypto');
const path = require('path');
const { S3Client, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const { Upload } = require('@aws-sdk/lib-storage');
const config = require('../config');

let s3Client;

function ensureConfigured() {
  const required = [
    'AWS_BUCKET_NAME',
    'AWS_ACCESS_KEY_ID',
    'AWS_SECRET_ACCESS_KEY',
    'AWS_S3_ENDPOINT',
    'AWS_S3_PUBLIC_BASE_URL',
  ];
  const missing = required.filter((key) => !config[key]);
  if (missing.length) {
    throw new Error(
      `Object storage is not fully configured. Missing: ${missing.join(', ')}`
    );
  }
}

function getClient() {
  ensureConfigured();
  if (s3Client) return s3Client;
  s3Client = new S3Client({
    region: config.AWS_REGION || 'us-east-1',
    endpoint: config.AWS_S3_ENDPOINT,
    forcePathStyle: true,
    credentials: {
      accessKeyId: config.AWS_ACCESS_KEY_ID,
      secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
    },
  });
  return s3Client;
}

function sanitizeName(value) {
  return String(value || 'file')
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-+$/g, '') || 'file';
}

function buildObjectKey(originalName) {
  const ext = path.extname(originalName || '').toLowerCase();
  const base = path.basename(originalName || 'file', ext);
  const safeBase = sanitizeName(base).slice(0, 80);
  const unique = crypto.randomUUID();
  const date = new Date().toISOString().slice(0, 10);
  return `uploads/${date}/${unique}-${safeBase || 'file'}${ext}`;
}

function buildPublicUrl(key) {
  return `${config.AWS_S3_PUBLIC_BASE_URL.replace(/\/+$/, '')}/${key}`;
}

async function uploadBuffer({
  buffer,
  originalName,
  contentType,
  contentLength,
  metadata = {},
}) {
  const key = buildObjectKey(originalName);
  const upload = new Upload({
    client: getClient(),
    params: {
      Bucket: config.AWS_BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: contentType || 'application/octet-stream',
      Metadata: Object.fromEntries(
        Object.entries(metadata)
          .filter(([, value]) => value !== undefined && value !== null)
          .map(([name, value]) => [name, String(value)])
      ),
    },
  });

  await upload.done();

  return {
    key,
    bucket: config.AWS_BUCKET_NAME,
    url: buildPublicUrl(key),
    content_type: contentType || 'application/octet-stream',
    size: Number(contentLength) || Buffer.byteLength(buffer || Buffer.alloc(0)),
  };
}

async function deleteObject(key) {
  if (!key) return;
  await getClient().send(
    new DeleteObjectCommand({
      Bucket: config.AWS_BUCKET_NAME,
      Key: key,
    })
  );
}

module.exports = {
  uploadBuffer,
  deleteObject,
  ensureConfigured,
};
