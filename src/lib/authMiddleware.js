import { verifyToken } from './auth';
import { store } from './db';

export function getBearerToken(request) {
  const header = request.headers.get('authorization') || '';
  const match = /^Bearer\s+(.+)$/i.exec(header);
  return match ? match[1].trim() : null;
}

export async function getAuthUser(request) {
  const token = getBearerToken(request);
  if (!token) return null;
  
  const decoded = verifyToken(token);
  if (!decoded) return null;
  
  try {
    const user = await store.get('admin_users', decoded.id);
    if (!user || user.active === false) return null;
    
    return {
      id: user.id,
      role: user.role,
      permissions: Array.isArray(user.permissions) ? user.permissions : [],
      email: user.email,
      active: user.active !== false,
    };
  } catch (err) {
    return null;
  }
}
