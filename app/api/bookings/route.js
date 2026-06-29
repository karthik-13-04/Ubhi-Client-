import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { getDb } from '../../../src/lib/db';

/**
 * POST /api/bookings
 * Creates a new workshop booking in MongoDB and increments the workshop's booked count.
 * Body: { orderId, itemName, price, customerName, customerEmail, customerMobile, shippingAddress }
 */
export async function POST(request) {
  try {
    const data = await request.json();
    const db = await getDb();

    // Check capacity first
    const workshop = await db.collection('workshops').findOne({ title: data.itemName });
    if (workshop) {
      const remaining = (workshop.capacity || 10) - (workshop.booked || 0);
      if (remaining <= 0) {
        return NextResponse.json({ error: 'This workshop is sold out.' }, { status: 409 });
      }
    }

    const booking = {
      ...data,
      type: 'booking',
      status: data.status || 'booked',
      createdAt: new Date(),
    };

    await db.collection('bookings').insertOne(booking);

    // Atomically increment the workshop's booked count
    if (data.itemName) {
      await db.collection('workshops').updateOne(
        { title: data.itemName },
        { $inc: { booked: 1 }, $set: { updatedAt: new Date() } }
      );
    }

    return NextResponse.json({ success: true, orderId: data.orderId }, { status: 201 });
  } catch (error) {
    console.error('[/api/bookings POST]', error);
    return NextResponse.json({ error: 'Failed to place booking' }, { status: 500 });
  }
}

/**
 * GET /api/bookings
 * Returns all bookings (admin only).
 */
export async function GET() {
  try {
    const db = await getDb();
    const bookings = await db.collection('bookings').find({}).sort({ createdAt: -1 }).toArray();
    return NextResponse.json(bookings);
  } catch (error) {
    console.error('[/api/bookings GET]', error);
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
  }
}

/**
 * PUT /api/bookings
 * Update booking status (admin only).
 * Body: { id, status }
 */
export async function PUT(request) {
  try {
    const { id, status } = await request.json();
    if (!id || !status) return NextResponse.json({ error: 'id and status are required' }, { status: 400 });
    const db = await getDb();
    await db.collection('bookings').updateOne(
      { _id: new ObjectId(id) },
      { $set: { status, updatedAt: new Date() } }
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[/api/bookings PUT]', error);
    return NextResponse.json({ error: 'Failed to update booking' }, { status: 500 });
  }
}
