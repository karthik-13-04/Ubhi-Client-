import { NextResponse } from 'next/server';
import { store } from '../../../lib/db';
import { getAuthUser } from '../../../lib/authMiddleware';

export async function POST(request) {
  try {
    const { email } = await request.json();
    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    const existing = await store.find('newsletter_signups', { email: email.toLowerCase() });
    if (existing.length > 0) {
      return NextResponse.json({ message: 'Already subscribed' });
    }

    await store.insert('newsletter_signups', { email: email.toLowerCase(), status: 'active' });
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const user = await getAuthUser(request);
    if (!user || (user.role !== 'owner' && user.role !== 'staff')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
    
    const subs = await store.all('newsletter_signups');
    return NextResponse.json(subs);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
