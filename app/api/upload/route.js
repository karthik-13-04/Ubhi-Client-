import { NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import jwt from 'jsonwebtoken';

/**
 * Contabo S3 uses a custom endpoint.
 * AWS_S3_DOMAIN = sin1.contabostorage.com/<bucket>
 * We derive the endpoint as https://sin1.contabostorage.com
 */
const S3_DOMAIN = process.env.AWS_S3_DOMAIN || '';
const BUCKET = process.env.AWS_BUCKET_NAME || '';
// Contabo endpoint is just the host, without the bucket path
const S3_ENDPOINT = S3_DOMAIN ? `https://${S3_DOMAIN.split('/')[0]}` : '';

const s3 = new S3Client({
  region: process.env.AWS_REGION || 'SIN',
  endpoint: S3_ENDPOINT,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
  forcePathStyle: true, // Required for Contabo S3
});

/**
 * GET /api/upload?filename=myfile.jpg&contentType=image/jpeg
 * Returns a pre-signed upload URL and the final public URL.
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');
    const contentType = searchParams.get('contentType') || 'image/jpeg';

    if (!filename) {
      return NextResponse.json({ error: 'filename is required' }, { status: 400 });
    }

    // Create a unique key with a timestamp prefix
    const key = `uploads/${Date.now()}-${filename.replace(/[^a-zA-Z0-9._-]/g, '_')}`;

    const command = new PutObjectCommand({
      Bucket: BUCKET.split('/').pop(), // handle "tenantid:bucket" format
      Key: key,
      ContentType: contentType,
      ACL: 'public-read',
    });

    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 600 }); // 10 min
    const publicUrl = `https://${S3_DOMAIN}/${key}`;

    return NextResponse.json({ uploadUrl: signedUrl, publicUrl });
  } catch (error) {
    console.error('[/api/upload GET]', error);
    return NextResponse.json({ error: 'Failed to generate upload URL' }, { status: 500 });
  }
}

/**
 * POST /api/upload
 * Accepts a base64 dataUrl, uploads it to S3, and returns the public URL.
 */
export async function POST(request) {
  try {
    // 1. Authenticate (optional but recommended to secure uploads)
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized: No token provided' }, { status: 401 });
    }
    const token = authHeader.substring(7);
    try {
      jwt.verify(token, process.env.JWT_SECRET || '34e0ad7923ab2dacb8a84d1f30026843a6aa2566239bf3fec62456accd6488ca');
    } catch (e) {
      return NextResponse.json({ error: 'Unauthorized: Invalid token' }, { status: 401 });
    }

    // 2. Parse payload
    const { dataUrl } = await request.json();
    if (!dataUrl) {
      return NextResponse.json({ error: 'dataUrl is required' }, { status: 400 });
    }

    const matches = dataUrl.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,(.+)$/);
    if (!matches) {
      return NextResponse.json({ error: 'Invalid dataUrl format' }, { status: 400 });
    }

    const contentType = matches[1];
    const base64Data = matches[2];
    const buffer = Buffer.from(base64Data, 'base64');

    // Generate filename based on mime type
    let extension = 'png';
    if (contentType.includes('jpeg') || contentType.includes('jpg')) {
      extension = 'jpg';
    } else if (contentType.includes('gif')) {
      extension = 'gif';
    } else if (contentType.includes('svg')) {
      extension = 'svg';
    } else if (contentType.includes('webp')) {
      extension = 'webp';
    }

    const filename = `upload-${Date.now()}.${extension}`;
    const key = `uploads/${filename}`;

    // Upload to S3
    const command = new PutObjectCommand({
      Bucket: BUCKET.split('/').pop(),
      Key: key,
      Body: buffer,
      ContentType: contentType,
      ACL: 'public-read',
    });

    await s3.send(command);
    const publicUrl = `https://${S3_DOMAIN}/${key}`;

    return NextResponse.json({ url: publicUrl });
  } catch (error) {
    console.error('[/api/upload POST]', error);
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
  }
}
