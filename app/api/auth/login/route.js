import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getDb } from '../../../../src/lib/db';

const JWT_SECRET = process.env.JWT_SECRET || '34e0ad7923ab2dacb8a84d1f30026843a6aa2566239bf3fec62456accd6488ca';

/**
 * POST /api/auth/login
 * Body: { email, password }
 * Validates admin credentials and returns a JWT.
 * Automatically seeds a default owner admin if none exist.
 */
export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const db = await getDb();
    const usersCollection = db.collection('users');

    // Automatically seed default admin if no users exist
    const userCount = await usersCollection.countDocuments();
    if (userCount === 0) {
      const defaultPasswordHash = bcrypt.hashSync('admin123', 10);
      await usersCollection.insertOne({
        email: 'hello@ubhi.in',
        password: defaultPasswordHash,
        role: 'owner',
        createdAt: new Date(),
      });
      console.log('Seeded default admin user: hello@ubhi.in / admin123');
    }

    const user = await usersCollection.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Generate JWT token valid for 7 days
    const token = jwt.sign(
      { id: user._id.toString(), email: user.email, role: user.role || 'owner' },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return NextResponse.json({
      token,
      user: {
        email: user.email,
        role: user.role || 'owner',
      }
    });
  } catch (error) {
    console.error('[/api/auth/login POST]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
