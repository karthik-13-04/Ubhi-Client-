import { NextResponse } from 'next/server';
import { store } from '../../../../lib/db';
import { getAuthUser } from '../../../../lib/authMiddleware';

const ALLOWED = new Set(['gallery-items', 'art-pieces', 'workshops', 'workshops-capacities', 'shop-catalog', 'journal-posts', 'snail-plans', 'snail-photos', 'snail-reviews', 'site-settings', 'text-overrides', 'text-content', 'email-updates']);

export async function GET(request, { params }) {
  try {
    const key = (await params).key;
    if (!ALLOWED.has(key)) return NextResponse.json({ error: 'Unknown key' }, { status: 404 });
    const row = await store.findOne('app_state', { key });
    return NextResponse.json({ key, value: row ? row.value : null });
  } catch (err) { return NextResponse.json({ error: err.message }, { status: 500 }); }
}

export async function PUT(request, { params }) {
  try {
    const user = await getAuthUser(request);
    if (!user || (user.role !== 'owner' && user.role !== 'staff')) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    const key = (await params).key;
    if (!ALLOWED.has(key)) return NextResponse.json({ error: 'Unknown key' }, { status: 400 });
    const body = await request.json();
    const value = body.value !== undefined ? body.value : body;
    const existing = await store.findOne('app_state', { key });
    const updated_at = new Date().toISOString();
    let row;
    if (existing) {
      row = await store.update('app_state', existing.id, { value, updated_at });
    } else {
      row = await store.insert('app_state', { key, value, updated_at });
    }
    return NextResponse.json({ key, value: row.value, ok: true });
  } catch (err) { return NextResponse.json({ error: err.message }, { status: 500 }); }
}
