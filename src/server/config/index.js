'use strict';

const DEFAULT_JWT_SECRET = 'ubhi-dev-insecure-secret-change-me';

function num(value, fallback) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

const JWT_SECRET = process.env.JWT_SECRET || DEFAULT_JWT_SECRET;

if (JWT_SECRET === DEFAULT_JWT_SECRET) {
  console.warn(
    '[config] WARNING: JWT_SECRET is not set - using an insecure default. ' +
      'Set JWT_SECRET in your environment before deploying to production.'
  );
}

const config = {
  PORT: num(process.env.PORT, 8090),
  NODE_ENV: process.env.NODE_ENV || 'development',

  JWT_SECRET,
  JWT_EXPIRES_IN: '7d',
  BCRYPT_ROUNDS: 10,

  MONGODB_URL: process.env.MONGODB_URL || '',
  MONGODB_DB_NAME: process.env.MONGODB_DB_NAME || '',

  CORS_ORIGIN: process.env.CORS_ORIGIN || '*',

  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || '',
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET || '',

  SMTP_HOST: process.env.SMTP_HOST || '',
  SMTP_PORT: num(process.env.SMTP_PORT, 587),
  SMTP_USER: process.env.SMTP_USER || '',
  SMTP_PASS: process.env.SMTP_PASS || '',
  FROM_EMAIL: process.env.FROM_EMAIL || 'hello@ubhi.example',

  AWS_REGION: process.env.AWS_REGION || 'us-east-1',
  AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME || '',
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || '',
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || '',
  AWS_S3_DOMAIN: process.env.AWS_S3_DOMAIN || '',
  MAX_UPLOAD_BYTES: num(process.env.MAX_UPLOAD_BYTES, 100 * 1024 * 1024),

  OWNER_EMAIL: process.env.OWNER_EMAIL || 'owner@ubhi.example',
  OWNER_PASSWORD: process.env.OWNER_PASSWORD || 'change-me-now',

  SHIPPING_FLAT: num(process.env.SHIPPING_FLAT, 3.95),
  FREE_SHIP_THRESHOLD: num(process.env.FREE_SHIP_THRESHOLD, 50),
};

const rawS3Domain = String(config.AWS_S3_DOMAIN || '')
  .trim()
  .replace(/^https?:\/\//, '');
const slashIndex = rawS3Domain.indexOf('/');
const s3Host = slashIndex === -1 ? rawS3Domain : rawS3Domain.slice(0, slashIndex);
const s3BasePath = slashIndex === -1 ? '' : rawS3Domain.slice(slashIndex + 1);

config.AWS_S3_ENDPOINT = s3Host ? `https://${s3Host}` : '';
config.AWS_S3_PUBLIC_BASE_URL =
  s3Host && s3BasePath
    ? `https://${s3Host}/${s3BasePath}`
    : s3Host
      ? `https://${s3Host}`
      : '';

config.USE_MONGO = Boolean(config.MONGODB_URL);

const skipProductionValidation =
  process.env.SKIP_RUNTIME_ENV_VALIDATION === '1' ||
  process.env.NEXT_PHASE === 'phase-production-build';

if (config.NODE_ENV === 'production' && !skipProductionValidation) {
  const problems = [];
  if (!process.env.JWT_SECRET || config.JWT_SECRET === DEFAULT_JWT_SECRET) {
    problems.push('JWT_SECRET must be set to a strong, unique value (never the default).');
  } else if (config.JWT_SECRET.length < 32) {
    problems.push('JWT_SECRET must be at least 32 characters long.');
  }
  if (!config.MONGODB_URL) {
    problems.push('MONGODB_URL must be set in production.');
  }
  if (config.CORS_ORIGIN === '*') {
    console.warn(
      '[config] WARNING: CORS_ORIGIN is "*" in production - set it to your real ' +
        'site origin(s) (comma-separated) so only your storefront can call the API.'
    );
  }
  if (problems.length) {
    throw new Error(
      '[config] Refusing to start with an insecure production configuration:\n  - ' +
        problems.join('\n  - ')
    );
  }
}

module.exports = config;
