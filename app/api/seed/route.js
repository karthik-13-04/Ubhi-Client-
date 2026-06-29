import { NextResponse } from 'next/server';
import { getDb } from '../../../src/lib/db';
import {
  defaultWorkshops,
  defaultShopCatalog,
} from '../../../src/lib/defaultData';

/**
 * POST /api/seed
 * Seeds MongoDB with default workshops and products if collections are empty.
 * Safe to call multiple times — only inserts if empty.
 */
export async function POST() {
  try {
    const db = await getDb();
    const results = {};

    // Seed workshops
    const workshopCount = await db.collection('workshops').countDocuments();
    if (workshopCount === 0) {
      const workshopsToSeed = defaultWorkshops.map(w => ({
        ...w,
        booked: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
      await db.collection('workshops').insertMany(workshopsToSeed);
      results.workshops = `Seeded ${workshopsToSeed.length} workshops`;
    } else {
      results.workshops = `Skipped — ${workshopCount} workshops already exist`;
    }

    // Seed products
    const productCount = await db.collection('products').countDocuments();
    if (productCount === 0) {
      const productsToSeed = defaultShopCatalog.map(p => ({
        ...p,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
      await db.collection('products').insertMany(productsToSeed);
      results.products = `Seeded ${productsToSeed.length} products`;
    } else {
      results.products = `Skipped — ${productCount} products already exist`;
    }

    return NextResponse.json({ success: true, results });
  } catch (error) {
    console.error('[/api/seed POST]', error);
    return NextResponse.json({ error: 'Failed to seed database', detail: error.message }, { status: 500 });
  }
}
