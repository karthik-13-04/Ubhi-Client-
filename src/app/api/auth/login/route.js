import { NextResponse } from 'next/server';
import { store } from '../../../../lib/db';
import { comparePassword, signToken } from '../../../../lib/auth';

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }

    const users = await store.find('admin_users', { email: email.toLowerCase() });
    const user = users[0];

    if (!user || user.active === false) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const valid = await comparePassword(password, user.password_hash);
    if (!valid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = signToken(user);
    const { password_hash, ...safeUser } = user;
    
    return NextResponse.json({ token, user: safeUser });
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
