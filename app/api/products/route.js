import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { getDb } from '../../../src/lib/db';

/**
 * GET /api/products
 * Returns all shop products. Falls back to defaultShopCatalog if DB is empty.
 */
export async function GET() {
  try {
    const db = await getDb();
    const products = await db.collection('products').find({}).sort({ _id: -1 }).toArray();
    return NextResponse.json(products);
  } catch (error) {
    console.error('[/api/products GET]', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

/**
 * POST /api/products
 * Create a new product (admin only).
 * Body: { name, price, category, description, totalStock, remainingStock, image, vector }
 */
export async function POST(request) {
  try {
    const data = await request.json();
    if (!data.name || data.price == null) {
      return NextResponse.json({ error: 'name and price are required' }, { status: 400 });
    }
    const db = await getDb();
    const result = await db.collection('products').insertOne({
      ...data,
      price: Number(data.price),
      totalStock: Number(data.totalStock || 0),
      remainingStock: Number(data.remainingStock || data.totalStock || 0),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return NextResponse.json({ success: true, id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('[/api/products POST]', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}

/**
 * PUT /api/products
 * Update an existing product.
 * Body: { id, ...fields }
 */
export async function PUT(request) {
  try {
    const { id, ...data } = await request.json();
    if (!id) return NextResponse.json({ error: 'id is required' }, { status: 400 });
    const db = await getDb();
    await db.collection('products').updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...data, updatedAt: new Date() } }
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[/api/products PUT]', error);
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  }
}

/**
 * DELETE /api/products?id=...
 */
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'id is required' }, { status: 400 });
    const db = await getDb();
    await db.collection('products').deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[/api/products DELETE]', error);
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
