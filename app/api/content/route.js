import { NextResponse } from 'next/server';
import { getDb } from '../../../src/lib/db';

export async function GET() {
  try {
    const db = await getDb();
    const profile = await db.collection('siteContent').findOne({ type: 'siteProfile' });
    if (!profile) {
      return NextResponse.json({ text: {}, styles: {}, sectionStyles: {} });
    }
    return NextResponse.json(profile.data || { text: {}, styles: {}, sectionStyles: {} });
  } catch (error) {
    console.error('[/api/content GET]', error);
    return NextResponse.json({ error: 'Failed to fetch site content' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const db = await getDb();
    await db.collection('siteContent').updateOne(
      { type: 'siteProfile' },
      { $set: { data, updatedAt: new Date() } },
      { upsert: true }
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[/api/content POST]', error);
    return NextResponse.json({ error: 'Failed to update site content' }, { status: 500 });
  }
}
