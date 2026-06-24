import { NextResponse } from 'next/server';
import { getAuthUser } from '../../../lib/authMiddleware';
import { uploadImage } from '../../../lib/s3';

export async function POST(request) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const body = await request.json();
    const { image, filename } = body;
    
    if (!image) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }
    
    const matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return NextResponse.json({ error: 'Invalid base64 image data' }, { status: 400 });
    }
    
    const mimeType = matches[1];
    const buffer = Buffer.from(matches[2], 'base64');
    
    const safeFilename = filename || `${Date.now()}-${Math.round(Math.random() * 1000)}.jpg`;
    
    const url = await uploadImage(buffer, safeFilename, mimeType);
    
    return NextResponse.json({ ok: true, url, key: url });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
