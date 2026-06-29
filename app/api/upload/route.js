import { NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

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
