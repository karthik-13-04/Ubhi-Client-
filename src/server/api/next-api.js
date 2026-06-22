'use strict';

const jwt = require('jsonwebtoken');
const config = require('../config');
const { store } = require('../db/store');
const {
  badRequest,
  unauthorized,
  forbidden,
  notFound,
} = require('../middleware/errors');

let initialized;

async function ensureStore() {
  if (!initialized) {
    initialized = Promise.resolve(store.initialize());
  }
  await initialized;
  return store;
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function errorResponse(error) {
  const status = error && error.status ? error.status : 500;
  return json(
    { error: error && error.message ? error.message : 'Server error' },
    status
  );
}

async function readJson(request) {
  const text = await request.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch (error) {
    throw badRequest('Invalid JSON body');
  }
}

function signToken(user) {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
      permissions: Array.isArray(user.permissions) ? user.permissions : [],
      email: user.email,
    },
    config.JWT_SECRET,
    { expiresIn: config.JWT_EXPIRES_IN }
  );
}

function getBearer(request) {
  const header = request.headers.get('authorization') || '';
  const match = /^Bearer\s+(.+)$/i.exec(header);
  return match ? match[1].trim() : null;
}

async function requireAuth(request) {
  await ensureStore();
  const token = getBearer(request);
  if (!token) {
    throw unauthorized('Missing or malformed Authorization header');
  }
  let decoded;
  try {
    decoded = jwt.verify(token, config.JWT_SECRET);
  } catch (error) {
    throw unauthorized('Invalid or expired token');
  }
  const user = await store.get('admin_users', decoded.id);
  if (!user || user.active === false) {
    throw unauthorized('Account is inactive or no longer exists');
  }
  return {
    id: user.id,
    role: user.role,
    permissions: Array.isArray(user.permissions) ? user.permissions : [],
    email: user.email,
    active: user.active !== false,
  };
}

function requireRole(user, ...roles) {
  if (!user) throw unauthorized('Authentication required');
  if (!roles.includes(user.role)) {
    throw forbidden('Insufficient role');
  }
}

function requirePermission(user, section) {
  if (!user) throw unauthorized('Authentication required');
  if (user.role === 'owner') return;
  if (
    user.role === 'staff' &&
    Array.isArray(user.permissions) &&
    user.permissions.includes(section)
  ) {
    return;
  }
  throw forbidden(`No access to section "${section}"`);
}

module.exports = {
  badRequest,
  notFound,
  ensureStore,
  errorResponse,
  forbidden,
  json,
  readJson,
  requireAuth,
  requirePermission,
  requireRole,
  signToken,
  store,
  unauthorized,
};
