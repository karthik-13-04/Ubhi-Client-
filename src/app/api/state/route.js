import { NextResponse } from 'next/server';
import { store } from '../../../lib/db';

const ALLOWED_KEYS = new Set([
  'gallery-items', 'art-pieces', 'workshops', 'workshops-capacities',
  'shop-catalog', 'journal-posts', 'snail-plans', 'snail-photos',
  'snail-reviews', 'site-settings', 'text-overrides', 'text-content',
  'email-updates'
]);

export async function GET() {
  try {
    const rows = await store.all('app_state');
    const out = {};
    for (const r of rows) {
      if (ALLOWED_KEYS.has(r.key)) out[r.key] = r.value;
    }
    return NextResponse.json(out);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
