import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { getDb } from '../../../src/lib/db';

/**
 * GET /api/workshops
 * Returns all workshops with live capacity data.
 */
export async function GET() {
  try {
    const db = await getDb();
    const workshops = await db.collection('workshops').find({}).sort({ date: 1 }).toArray();
    return NextResponse.json(workshops);
  } catch (error) {
    console.error('[/api/workshops GET]', error);
    return NextResponse.json({ error: 'Failed to fetch workshops' }, { status: 500 });
  }
}

/**
 * POST /api/workshops
 * Create a new workshop (admin only).
 * Body: { title, eyebrow, desc, time, place, price, capacity, image, date }
 */
export async function POST(request) {
  try {
    const data = await request.json();
    if (!data.title || data.price == null) {
      return NextResponse.json({ error: 'title and price are required' }, { status: 400 });
    }
    const db = await getDb();
    const result = await db.collection('workshops').insertOne({
      ...data,
      price: Number(data.price),
      capacity: Number(data.capacity || 10),
      booked: Number(data.booked || 0),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return NextResponse.json({ success: true, id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('[/api/workshops POST]', error);
    return NextResponse.json({ error: 'Failed to create workshop' }, { status: 500 });
  }
}

/**
 * PUT /api/workshops
 * Update a workshop (admin only).
 * Body: { id, ...fields }
 */
export async function PUT(request) {
  try {
    const { id, ...data } = await request.json();
    if (!id) return NextResponse.json({ error: 'id is required' }, { status: 400 });
    const db = await getDb();
    await db.collection('workshops').updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...data, updatedAt: new Date() } }
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[/api/workshops PUT]', error);
    return NextResponse.json({ error: 'Failed to update workshop' }, { status: 500 });
  }
}

/**
 * DELETE /api/workshops?id=...
 */
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'id is required' }, { status: 400 });
    const db = await getDb();
    await db.collection('workshops').deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[/api/workshops DELETE]', error);
    return NextResponse.json({ error: 'Failed to delete workshop' }, { status: 500 });
  }
}
