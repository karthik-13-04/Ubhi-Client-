import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { getDb } from '../../../src/lib/db';

/**
 * POST /api/orders
 * Creates a new shop order in MongoDB and decrements product stock.
 * Body: { orderId, items, subtotal, shipping, total, customerName, customerEmail, customerMobile, shippingAddress }
 */
export async function POST(request) {
  try {
    const data = await request.json();
    const db = await getDb();

    const order = {
      ...data,
      type: 'shop',
      status: data.status || 'preparing',
      createdAt: new Date(),
    };

    await db.collection('shopOrders').insertOne(order);

    // Decrement stock for each item
    if (Array.isArray(data.items)) {
      for (const item of data.items) {
        await db.collection('products').updateOne(
          { name: item.name, remainingStock: { $gt: 0 } },
          { $inc: { remainingStock: -item.quantity } }
        );
      }
    }

    return NextResponse.json({ success: true, orderId: data.orderId }, { status: 201 });
  } catch (error) {
    console.error('[/api/orders POST]', error);
    return NextResponse.json({ error: 'Failed to place order' }, { status: 500 });
  }
}

/**
 * GET /api/orders
 * Returns all shop orders (admin only).
 */
export async function GET() {
  try {
    const db = await getDb();
    const orders = await db.collection('shopOrders').find({}).sort({ createdAt: -1 }).toArray();
    return NextResponse.json(orders);
  } catch (error) {
    console.error('[/api/orders GET]', error);
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
  }
}

/**
 * PUT /api/orders
 * Update order status (admin only).
 * Body: { id, status }
 */
export async function PUT(request) {
  try {
    const { id, status } = await request.json();
    if (!id || !status) return NextResponse.json({ error: 'id and status are required' }, { status: 400 });
    const db = await getDb();
    await db.collection('shopOrders').updateOne(
      { _id: new ObjectId(id) },
      { $set: { status, updatedAt: new Date() } }
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[/api/orders PUT]', error);
    return NextResponse.json({ error: 'Failed to update order' }, { status: 500 });
  }
}
