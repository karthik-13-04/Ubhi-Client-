import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const SECRET = process.env.JWT_SECRET;
if (!SECRET) {
  console.warn('JWT_SECRET is not set');
}

export function signToken(user) {
  const payload = {
    id: user.id,
    role: user.role,
    permissions: Array.isArray(user.permissions) ? user.permissions : [],
    email: user.email,
  };
  return jwt.sign(payload, SECRET || 'fallback-secret', { expiresIn: '7d' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET || 'fallback-secret');
  } catch (err) {
    return null;
  }
}

export async function hashPassword(password) {
  return bcrypt.hash(String(password), 10);
}

export async function comparePassword(password, hash) {
  return bcrypt.compare(String(password), hash || '');
}
