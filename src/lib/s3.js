import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: process.env.AWS_REGION || 'SIN',
  endpoint: 'https://sin1.contabostorage.com',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  forcePathStyle: true,
});

const BUCKET = process.env.AWS_BUCKET_NAME;

export async function uploadImage(buffer, filename, mimeType) {
  const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: `uploads/${filename}`,
    Body: buffer,
    ContentType: mimeType,
    ACL: 'public-read',
  });
  
  await s3.send(command);
  
  return `/uploads/${filename}`;
}

export async function deleteImage(filename) {
  const command = new DeleteObjectCommand({
    Bucket: BUCKET,
    Key: `uploads/${filename}`,
  });
  await s3.send(command);
}

export function getImageUrl(key) {
  if (!key) return '';
  if (key.startsWith('http')) return key;
  if (key.startsWith('/')) key = key.slice(1);
  return `${process.env.NEXT_PUBLIC_S3_BASE_URL}/${key}`;
}
