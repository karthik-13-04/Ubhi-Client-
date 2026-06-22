const bcrypt = require('bcryptjs');
const stripe = require('../../../src/server/services/stripe');
const mailer = require('../../../src/server/services/mailer');
const storage = require('../../../src/server/services/storage');
const config = require('../../../src/server/config');
const {
  isEmail,
  requireFields,
  cleanString,
  coerceBool,
  coerceInt,
  coerceNumber,
} = require('../../../src/server/middleware/validate');
const {
  badRequest,
  ensureStore,
  errorResponse,
  json,
  notFound,
  readJson,
  requireAuth,
  requirePermission,
  requireRole,
  signToken,
  store,
  forbidden,
  unauthorized,
} = require('../../../src/server/api/next-api');

const DEFAULT_STAFF_PERMISSIONS = [
  'workshops',
  'shop',
  'subscribers',
  'orders',
  'bookings',
];

const OWNER_ONLY_SECTIONS = [
  'overview',
  'customers',
  'settings',
  'users',
  'journal',
  'gallery',
];

export const runtime = 'nodejs';

const PUBLIC_READABLE_KEYS = new Set([
  'shipping',
  'announcement',
  'storefront',
  'site_profile',
  'site_assets',
]);
const PUBLIC_WRITABLE_KEYS = new Set(['site_profile']);

function publicUser(user) {
  if (!user) return null;
  const { password_hash, ...safe } = user;
  return safe;
}

function publicCustomer(customer) {
  if (!customer) return null;
  const { password_hash, ...safe } = customer;
  return safe;
}

function normalizePermissions(input) {
  if (input === undefined) return undefined;
  if (!Array.isArray(input)) {
    throw badRequest('permissions must be an array of section keys');
  }
  return Array.from(
    new Set(
      input
        .map((value) => cleanString(value))
        .filter(Boolean)
        .filter((value) => !OWNER_ONLY_SECTIONS.includes(value))
    )
  );
}

function normalizeItems(input) {
  if (input === undefined || input === null) return [];
  if (!Array.isArray(input)) {
    throw badRequest('items must be an array');
  }
  return input.map((raw) => {
    const item = raw && typeof raw === 'object' ? raw : {};
    const price = coerceNumber(item.price, 0);
    const qty = Math.max(1, Math.trunc(coerceNumber(item.qty, 1)));
    return {
      id: cleanString(item.id) || null,
      name: cleanString(item.name) || 'Item',
      price: price < 0 ? 0 : price,
      qty,
    };
  });
}

function makeOrderRef() {
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `UBHI-${rand}`;
}

function normalizeStatus(value, fallback) {
  const valid = ['Active', 'Inactive'];
  if (value === undefined || value === null || value === '') return fallback;
  return valid.includes(value) ? value : fallback;
}

function normalizeKey(raw) {
  const key = cleanString(raw);
  if (!key) throw badRequest('A settings key is required');
  if (!/^[a-zA-Z0-9_.-]{1,64}$/.test(key)) {
    throw badRequest('Invalid settings key');
  }
  return key;
}

function slugify(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function buildWorkshopPatch(body) {
  const patch = {};
  if (body.title !== undefined) patch.title = cleanString(body.title) || '';
  if (body.blurb !== undefined) patch.blurb = cleanString(body.blurb) || '';
  if (body.session_date !== undefined) patch.session_date = cleanString(body.session_date) || '';
  if (body.price !== undefined) patch.price = coerceNumber(body.price, 0);
  if (body.spots !== undefined) patch.spots = coerceInt(body.spots, 0);
  if (body.image !== undefined) patch.image = cleanString(body.image) || '';
  if (body.published !== undefined) patch.published = coerceBool(body.published, false);
  return patch;
}

function buildShopPatch(body) {
  const patch = {};
  if (body.name !== undefined) patch.name = cleanString(body.name) || '';
  if (body.blurb !== undefined) patch.blurb = cleanString(body.blurb) || '';
  if (body.price !== undefined) patch.price = coerceNumber(body.price, 0);
  if (body.stock !== undefined) patch.stock = coerceInt(body.stock, 0);
  if (body.image !== undefined) patch.image = cleanString(body.image) || '';
  if (body.published !== undefined) patch.published = coerceBool(body.published, false);
  return patch;
}

function buildGalleryPatch(body) {
  const patch = {};
  if (body.image !== undefined) patch.image = cleanString(body.image) || '';
  if (body.caption !== undefined) patch.caption = cleanString(body.caption) || '';
  if (body.published !== undefined) patch.published = coerceBool(body.published, false);
  return patch;
}

function buildJournalPatch(body) {
  const patch = {};
  if (body.title !== undefined) patch.title = cleanString(body.title) || '';
  if (body.slug !== undefined) patch.slug = slugify(body.slug) || slugify(body.title) || '';
  if (body.body !== undefined) patch.body = cleanString(body.body) || '';
  if (body.author !== undefined) patch.author = cleanString(body.author) || '';
  if (body.published !== undefined) patch.published = coerceBool(body.published, false);
  return patch;
}

async function handleHealth() {
  await ensureStore();
  return json({ ok: true, store: store.kind });
}

async function findActiveAdminByPasscode(passcode) {
  const secret = String(passcode || '');
  if (!secret) return null;

  const users = await store.all('admin_users');
  for (const user of users) {
    if (!user || user.active === false) continue;
    const ok = await bcrypt.compare(secret, user.password_hash || '');
    if (ok) return user;
  }
  return null;
}

async function handleAuth(method, request) {
  if (
    method === 'POST' &&
    (request.nextUrl.pathname === '/api/auth/login' || request.nextUrl.pathname === '/api/auth')
  ) {
    const body = await readJson(request);
    let user = null;

    if (body && Object.prototype.hasOwnProperty.call(body, 'passcode')) {
      user = await findActiveAdminByPasscode(body.passcode);
    } else {
      requireFields(body, ['email', 'password']);
      user = await store.findOne('admin_users', {
        email: String(body.email).trim().toLowerCase(),
      });
    }

    if (!user || user.active === false) {
      throw unauthorized('Invalid email or password');
    }

    if (!Object.prototype.hasOwnProperty.call(body, 'passcode')) {
      const ok = await bcrypt.compare(String(body.password), user.password_hash || '');
      if (!ok) {
        throw unauthorized('Invalid email or password');
      }
    }

    return json({ token: signToken(user), user: publicUser(user) });
  }

  const user = await requireAuth(request);

  if (method === 'GET' && request.nextUrl.pathname === '/api/auth/me') {
    const fresh = await store.get('admin_users', user.id);
    if (!fresh) throw notFound('User not found');
    return json({ user: publicUser(fresh) });
  }

  if (method === 'POST' && request.nextUrl.pathname === '/api/auth/change-password') {
    const body = await readJson(request);
    requireFields(body, ['current', 'next']);
    if (String(body.next).length < 8) {
      throw badRequest('New password must be at least 8 characters');
    }
    const fresh = await store.get('admin_users', user.id);
    if (!fresh) throw notFound('User not found');
    const ok = await bcrypt.compare(String(body.current), fresh.password_hash || '');
    if (!ok) throw badRequest('Current password is incorrect');
    const password_hash = await bcrypt.hash(String(body.next), config.BCRYPT_ROUNDS);
    await store.update('admin_users', user.id, { password_hash });
    return json({ ok: true });
  }

  throw notFound('Not found');
}

async function handleUsers(method, request, segments) {
  const user = await requireAuth(request);
  requireRole(user, 'owner');

  if (segments.length === 1 && method === 'GET') {
    const users = await store.all('admin_users');
    return json(users.map(publicUser));
  }

  if (segments.length === 1 && method === 'POST') {
    const body = await readJson(request);
    requireFields(body, ['email', 'password', 'role']);
    const email = String(body.email).trim().toLowerCase();
    if (!isEmail(email)) throw badRequest('A valid email is required');
    if (String(body.password).length < 8) {
      throw badRequest('Password must be at least 8 characters');
    }
    if (body.role !== 'owner' && body.role !== 'staff') {
      throw badRequest("role must be 'owner' or 'staff'");
    }
    const role = body.role;
    const existing = await store.findOne('admin_users', { email });
    if (existing) throw badRequest('A user with that email already exists');
    const permissions =
      role === 'owner'
        ? []
        : normalizePermissions(body.permissions) || DEFAULT_STAFF_PERMISSIONS.slice();
    const password_hash = await bcrypt.hash(String(body.password), config.BCRYPT_ROUNDS);
    const created = await store.insert('admin_users', {
      email,
      password_hash,
      role,
      permissions,
      name: cleanString(body.name) || '',
      active: coerceBool(body.active, true),
    });
    return json(publicUser(created), 201);
  }

  const targetId = segments[1];
  const target = await store.get('admin_users', targetId);
  if (!target) throw notFound('User not found');

  if (segments.length === 2 && method === 'PATCH') {
    const body = await readJson(request);
    const patch = {};
    if (body.name !== undefined) patch.name = cleanString(body.name) || '';
    if (body.role !== undefined) {
      if (body.role !== 'owner' && body.role !== 'staff') {
        throw badRequest("role must be 'owner' or 'staff'");
      }
      if (target.role === 'owner' && body.role !== 'owner') {
        const owners = await store.find('admin_users', { role: 'owner' });
        if (owners.length <= 1) throw forbidden('Cannot demote the last owner');
      }
      patch.role = body.role;
    }
    const effectiveRole = patch.role || target.role;
    if (body.permissions !== undefined || patch.role) {
      patch.permissions =
        effectiveRole === 'owner' ? [] : normalizePermissions(body.permissions);
    }
    if (body.active !== undefined) {
      const active = coerceBool(body.active, undefined);
      if (active === undefined) throw badRequest('active must be a boolean');
      if (target.role === 'owner' && active === false) {
        const owners = await store.find('admin_users', { role: 'owner' });
        const activeOwners = owners.filter((ownerRow) => ownerRow.active !== false);
        if (activeOwners.length <= 1) {
          throw forbidden('Cannot deactivate the last active owner');
        }
      }
      patch.active = active;
    }
    const updated = await store.update('admin_users', target.id, patch);
    return json(publicUser(updated));
  }

  if (segments.length === 3 && segments[2] === 'password' && method === 'POST') {
    const body = await readJson(request);
    requireFields(body, ['password']);
    if (String(body.password).length < 8) {
      throw badRequest('Password must be at least 8 characters');
    }
    const password_hash = await bcrypt.hash(String(body.password), config.BCRYPT_ROUNDS);
    await store.update('admin_users', target.id, { password_hash });
    return json({ ok: true });
  }

  if (segments.length === 2 && method === 'DELETE') {
    if (target.id === user.id) throw forbidden('You cannot delete your own account');
    if (target.role === 'owner') {
      const owners = await store.find('admin_users', { role: 'owner' });
      if (owners.length <= 1) throw forbidden('Cannot delete the last owner');
    }
    await store.remove('admin_users', target.id);
    return json({ ok: true });
  }

  throw notFound('Not found');
}

async function handleCustomers(method, request, segments) {
  if (segments.length === 1 && method === 'POST') {
    const body = await readJson(request);
    requireFields(body, ['email', 'password']);
    const email = String(body.email).trim().toLowerCase();
    if (!isEmail(email)) throw badRequest('A valid email is required');
    if (String(body.password).length < 8) {
      throw badRequest('Password must be at least 8 characters');
    }
    const existing = await store.findOne('customers', { email });
    if (existing) throw badRequest('An account with that email already exists');
    const password_hash = await bcrypt.hash(String(body.password), config.BCRYPT_ROUNDS);
    const customer = await store.insert('customers', {
      email,
      password_hash,
      name: cleanString(body.name) || '',
      phone: cleanString(body.phone) || '',
      address: cleanString(body.address) || '',
      city: cleanString(body.city) || '',
      postcode: cleanString(body.postcode) || '',
      country: cleanString(body.country) || '',
      marketing_opt_in: coerceBool(body.marketing_opt_in, false),
      active: true,
    });
    return json(publicCustomer(customer), 201);
  }

  const user = await requireAuth(request);
  requirePermission(user, 'customers');

  if (segments.length === 1 && method === 'GET') {
    const customers = await store.all('customers');
    return json(customers.map(publicCustomer));
  }

  const customer = await store.get('customers', segments[1]);
  if (!customer) throw notFound('Customer not found');

  if (segments.length === 2 && method === 'PATCH') {
    const body = await readJson(request);
    const patch = {};
    if (body.name !== undefined) patch.name = cleanString(body.name) || '';
    if (body.phone !== undefined) patch.phone = cleanString(body.phone) || '';
    if (body.address !== undefined) patch.address = cleanString(body.address) || '';
    if (body.city !== undefined) patch.city = cleanString(body.city) || '';
    if (body.postcode !== undefined) patch.postcode = cleanString(body.postcode) || '';
    if (body.country !== undefined) patch.country = cleanString(body.country) || '';
    if (body.email !== undefined) {
      const email = String(body.email).trim().toLowerCase();
      if (!isEmail(email)) throw badRequest('A valid email is required');
      patch.email = email;
    }
    if (body.marketing_opt_in !== undefined) {
      const optIn = coerceBool(body.marketing_opt_in, undefined);
      if (optIn === undefined) throw badRequest('marketing_opt_in must be a boolean');
      patch.marketing_opt_in = optIn;
    }
    if (body.active !== undefined) {
      const active = coerceBool(body.active, undefined);
      if (active === undefined) throw badRequest('active must be a boolean');
      patch.active = active;
    }
    if (body.password !== undefined) {
      if (String(body.password).length < 8) {
        throw badRequest('Password must be at least 8 characters');
      }
      patch.password_hash = await bcrypt.hash(String(body.password), config.BCRYPT_ROUNDS);
    }
    const updated = await store.update('customers', segments[1], patch);
    return json(publicCustomer(updated));
  }

  if (segments.length === 2 && method === 'DELETE') {
    return json({ ok: await store.remove('customers', segments[1]) });
  }

  throw notFound('Not found');
}

async function handleOrders(method, request, segments) {
  if (segments.length === 1 && method === 'POST') {
    const body = await readJson(request);
    const customer_email = String(body.customer_email || '').trim().toLowerCase();
    if (!customer_email) throw badRequest('customer_email is required');
    if (!isEmail(customer_email)) {
      throw badRequest('A valid customer_email is required');
    }
    const items = normalizeItems(body.items);
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    let shipping = 0;
    if (subtotal > 0 && subtotal < config.FREE_SHIP_THRESHOLD) {
      shipping = config.SHIPPING_FLAT;
    }
    const total = Number((subtotal + shipping).toFixed(2));
    const row = await store.insert('orders', {
      order_ref: makeOrderRef(),
      customer_name: cleanString(body.customer_name) || '',
      customer_email,
      phone: cleanString(body.phone) || '',
      items,
      subtotal: Number(subtotal.toFixed(2)),
      shipping: Number(shipping.toFixed(2)),
      total,
      status: 'Preparing with care',
      ship_street: cleanString(body.ship_street) || '',
      ship_city: cleanString(body.ship_city) || '',
      ship_postcode: cleanString(body.ship_postcode) || '',
      ship_country: cleanString(body.ship_country) || '',
      stripe_session_id: cleanString(body.stripe_session_id) || null,
      paid: false,
    });
    return json(row, 201);
  }

  const user = await requireAuth(request);
  requirePermission(user, 'orders');

  if (segments.length === 1 && method === 'GET') {
    return json(await store.all('orders'));
  }

  const row = await store.get('orders', segments[1]);
  if (!row) throw notFound('order not found');

  if (segments.length === 2 && method === 'GET') {
    return json(row);
  }

  if (segments.length === 2 && method === 'PATCH') {
    const body = await readJson(request);
    const patch = {};
    const patchable = [
      'status',
      'customer_name',
      'phone',
      'ship_street',
      'ship_city',
      'ship_postcode',
      'ship_country',
    ];
    patchable.forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(body, key)) {
        patch[key] = cleanString(body[key]);
      }
    });
    const statuses = ['Preparing with care', 'Shipped', 'Delivered', 'Cancelled'];
    if (patch.status !== undefined && !statuses.includes(patch.status)) {
      throw badRequest('invalid status');
    }
    const updated = await store.update('orders', segments[1], patch);
    return json(updated);
  }

  if (segments.length === 2 && method === 'DELETE') {
    return json({ ok: await store.remove('orders', segments[1]) });
  }

  throw notFound('Not found');
}

async function handleBookings(method, request, segments) {
  if (segments.length === 1 && method === 'POST') {
    const body = await readJson(request);
    const name = cleanString(body.name);
    if (!name) throw badRequest('name is required');
    const email = String(body.email || '').trim().toLowerCase();
    if (!email) throw badRequest('email is required');
    if (!isEmail(email)) throw badRequest('A valid email is required');
    let workshop_id = cleanString(body.workshop_id) || null;
    let workshop_title = cleanString(body.workshop_title) || '';
    let session_date = cleanString(body.session_date) || '';
    let price = coerceNumber(body.price, 0);
    if (workshop_id) {
      const workshop = await store.get('workshops', workshop_id);
      if (workshop) {
        if (!workshop_title) workshop_title = workshop.title || '';
        if (!session_date) session_date = workshop.session_date || '';
        if (body.price === undefined) price = coerceNumber(workshop.price, 0);
      }
    }
    const row = await store.insert('bookings', {
      name,
      email,
      phone: cleanString(body.phone) || '',
      workshop_id,
      workshop_title,
      session_date,
      price: price < 0 ? 0 : price,
      note: cleanString(body.note) || '',
      status: 'Reserved',
    });
    return json(row, 201);
  }

  const user = await requireAuth(request);
  requirePermission(user, 'bookings');

  if (segments.length === 1 && method === 'GET') {
    return json(await store.all('bookings'));
  }

  const row = await store.get('bookings', segments[1]);
  if (!row) throw notFound('booking not found');

  if (segments.length === 2 && method === 'GET') return json(row);

  if (segments.length === 2 && method === 'PATCH') {
    const body = await readJson(request);
    const patch = {};
    const patchable = ['status', 'name', 'phone', 'note', 'session_date', 'workshop_title'];
    patchable.forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(body, key)) {
        patch[key] = cleanString(body[key]);
      }
    });
    const statuses = ['Reserved', 'Confirmed', 'Attended', 'Cancelled'];
    if (patch.status !== undefined && !statuses.includes(patch.status)) {
      throw badRequest('invalid status');
    }
    return json(await store.update('bookings', segments[1], patch));
  }

  if (segments.length === 2 && method === 'DELETE') {
    return json({ ok: await store.remove('bookings', segments[1]) });
  }

  throw notFound('Not found');
}

async function handleCrudWithPermission({
  request,
  method,
  segments,
  section,
  table,
  publicFilter,
  createRequired = [],
  createData,
  patchBuilder,
  notFoundLabel,
}) {
  if (segments.length === 1 && method === 'GET' && publicFilter) {
    return json(await store.find(table, publicFilter));
  }

  const user = await requireAuth(request);
  requirePermission(user, section);

  if (segments.length === 2 && segments[1] === 'all' && method === 'GET') {
    return json(await store.all(table));
  }

  if (segments.length === 1 && method === 'POST') {
    const body = await readJson(request);
    requireFields(body, createRequired);
    return json(await store.insert(table, createData(body)), 201);
  }

  if (segments.length === 2 && method === 'PATCH') {
    const body = await readJson(request);
    const row = await store.update(table, segments[1], patchBuilder(body));
    if (!row) throw notFound(`${notFoundLabel} not found`);
    return json(row);
  }

  if (segments.length === 2 && method === 'DELETE') {
    return json({ ok: await store.remove(table, segments[1]) });
  }

  throw notFound('Not found');
}

async function handleSubscribers(method, request, segments) {
  if (segments.length === 1 && method === 'POST') {
    const body = await readJson(request);
    requireFields(body, ['name', 'email']);
    const email = String(body.email).trim().toLowerCase();
    if (!isEmail(email)) throw badRequest('A valid email is required');
    const row = await store.insert('snail_subscribers', {
      name: cleanString(body.name) || '',
      email,
      contact: cleanString(body.contact) || '',
      status: 'Active',
      plan: cleanString(body.plan) || '',
      price: coerceNumber(body.price, 0),
      address: cleanString(body.address) || '',
      date_subscribed: cleanString(body.date_subscribed) || new Date().toISOString(),
      last_sent_cycle: cleanString(body.last_sent_cycle) || '',
    });
    return json(row, 201);
  }

  const user = await requireAuth(request);
  requirePermission(user, 'subscribers');

  if (segments.length === 1 && method === 'GET') {
    return json(await store.all('snail_subscribers'));
  }

  if (segments.length === 2 && method === 'PATCH') {
    const existing = await store.get('snail_subscribers', segments[1]);
    if (!existing) throw notFound('Subscriber not found');
    const body = await readJson(request);
    const patch = {};
    if (body.name !== undefined) patch.name = cleanString(body.name) || '';
    if (body.contact !== undefined) patch.contact = cleanString(body.contact) || '';
    if (body.plan !== undefined) patch.plan = cleanString(body.plan) || '';
    if (body.address !== undefined) patch.address = cleanString(body.address) || '';
    if (body.last_sent_cycle !== undefined) patch.last_sent_cycle = cleanString(body.last_sent_cycle) || '';
    if (body.date_subscribed !== undefined) patch.date_subscribed = cleanString(body.date_subscribed) || '';
    if (body.email !== undefined) {
      const email = String(body.email).trim().toLowerCase();
      if (!isEmail(email)) throw badRequest('A valid email is required');
      patch.email = email;
    }
    if (body.price !== undefined) patch.price = coerceNumber(body.price, 0);
    if (body.status !== undefined) {
      const status = normalizeStatus(body.status, undefined);
      if (status === undefined) throw badRequest("status must be 'Active' or 'Inactive'");
      patch.status = status;
    }
    return json(await store.update('snail_subscribers', segments[1], patch));
  }

  if (segments.length === 2 && method === 'DELETE') {
    return json({ ok: await store.remove('snail_subscribers', segments[1]) });
  }

  throw notFound('Not found');
}

async function handleUpdates(method, request, segments) {
  if (segments.length === 1 && method === 'POST') {
    const body = await readJson(request);
    requireFields(body, ['email']);
    const email = String(body.email).trim().toLowerCase();
    if (!isEmail(email)) throw badRequest('A valid email is required');
    return json(
      await store.insert('newsletter_signups', {
        name: cleanString(body.name) || '',
        email,
        interest: cleanString(body.interest) || '',
      }),
      201
    );
  }

  const user = await requireAuth(request);
  requirePermission(user, 'subscribers');

  if (segments.length === 1 && method === 'GET') {
    return json(await store.all('newsletter_signups'));
  }

  if (segments.length === 2 && method === 'DELETE') {
    return json({ ok: await store.remove('newsletter_signups', segments[1]) });
  }

  throw notFound('Not found');
}

async function handleSettings(method, request, segments) {
  const key = normalizeKey(segments[1]);

  if (method === 'GET') {
    if (PUBLIC_READABLE_KEYS.has(key)) {
      const row = await store.findOne('settings', { key });
      if (!row) {
        if (key === 'site_profile') {
          return json({ key, value: {} });
        }
        throw notFound('Setting not found');
      }
      return json({ key: row.key, value: row.value });
    }
    const user = await requireAuth(request);
    requireRole(user, 'owner');
    const row = await store.findOne('settings', { key });
    if (!row) throw notFound('Setting not found');
    return json({ key: row.key, value: row.value });
  }

  if (method === 'PUT') {
    const body = await readJson(request);
    if (!Object.prototype.hasOwnProperty.call(body, 'value')) {
      throw badRequest('value is required');
    }
    if (!PUBLIC_WRITABLE_KEYS.has(key)) {
      const user = await requireAuth(request);
      requireRole(user, 'owner');
    }
    const existing = await store.findOne('settings', { key });
    const row = existing
      ? await store.update('settings', existing.id, { value: body.value })
      : await store.insert('settings', { key, value: body.value });
    return json({ key: row.key, value: row.value });
  }

  throw notFound('Not found');
}

async function handleCheckout(method, request, segments) {
  if (method !== 'POST' || segments[1] !== 'session') throw notFound('Not found');
  const body = await readJson(request);
  const orderId = cleanString(body.order_id);
  if (!orderId) throw badRequest('order_id is required');
  const order = await store.get('orders', orderId);
  if (!order) throw notFound('order not found');
  const result = await stripe.createCheckoutSession(order);
  if (!result || result.configured === false) {
    return json({ configured: false });
  }
  if (result.id) {
    await store.update('orders', order.id, { stripe_session_id: result.id });
  }
  return json({ configured: true, id: result.id, url: result.url });
}

async function handleStripe(method, request, segments) {
  if (method !== 'POST' || segments[1] !== 'webhook') throw notFound('Not found');
  const signature = request.headers.get('stripe-signature');
  const rawBody = Buffer.from(await request.arrayBuffer());
  let event;
  try {
    event = stripe.verifyWebhook(rawBody, signature);
  } catch (error) {
    return json({ error: 'Webhook verification failed: ' + error.message }, 400);
  }
  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data && event.data.object ? event.data.object : {};
      const orderId = (session.metadata && session.metadata.order_id) || session.client_reference_id;
      if (orderId) {
        const order = await store.get('orders', orderId);
        if (order && !order.paid) {
          await store.update('orders', order.id, {
            paid: true,
            status: 'Preparing with care',
            stripe_session_id: session.id || order.stripe_session_id || null,
          });
          mailer
            .sendMail({
              to: order.customer_email,
              subject: 'Your Ubhi order is confirmed - ' + (order.order_ref || ''),
              text:
                'Thank you. We have received your payment and your order ' +
                (order.order_ref || '') +
                ' is now being prepared with care.',
            })
            .catch(() => {});
        }
      }
    }
  } catch (error) {
    console.error('[stripe] webhook processing error:', error.message);
  }
  return json({ received: true });
}

function toPublicFile(row) {
  if (!row) return null;
  return {
    id: row.id,
    url: row.url,
    key: row.key,
    bucket: row.bucket,
    original_name: row.original_name,
    content_type: row.content_type,
    size: row.size,
    kind: row.kind,
    entity_type: row.entity_type || '',
    entity_id: row.entity_id || '',
    created_at: row.created_at,
  };
}

async function handleUploads(method, request, segments) {
  const user = await requireAuth(request);

  if (segments.length === 1 && method === 'GET') {
    return json((await store.all('files')).map(toPublicFile));
  }

  if (segments.length === 1 && method === 'POST') {
    storage.ensureConfigured();
    const form = await request.formData();
    const file = form.get('file');
    if (!file || typeof file.arrayBuffer !== 'function') {
      throw badRequest('file is required');
    }
    const uploaded = await storage.uploadBuffer({
      buffer: Buffer.from(await file.arrayBuffer()),
      originalName: file.name,
      contentType: file.type,
      contentLength: file.size,
      metadata: {
        uploader_id: user.id,
        uploader_role: user.role,
      },
    });
    const row = await store.insert('files', {
      key: uploaded.key,
      bucket: uploaded.bucket,
      url: uploaded.url,
      original_name: file.name,
      content_type: uploaded.content_type,
      size: uploaded.size,
      kind: cleanString(form.get('kind')) || 'generic',
      entity_type: cleanString(form.get('entity_type')) || '',
      entity_id: cleanString(form.get('entity_id')) || '',
      uploaded_by: user.id,
    });
    return json(toPublicFile(row), 201);
  }

  if (segments.length === 2 && method === 'DELETE') {
    const row = await store.get('files', segments[1]);
    if (!row) throw notFound('file not found');
    await storage.deleteObject(row.key);
    await store.remove('files', row.id);
    return json({ ok: true });
  }

  throw notFound('Not found');
}

async function handleApi(request, { params }) {
  await ensureStore();
  const method = request.method.toUpperCase();
  const resolvedParams = await params;
  const segments = Array.isArray(resolvedParams?.path) ? resolvedParams.path : [];

  if (!segments.length) throw notFound('Not found');
  if (segments[0] === 'health') return handleHealth();
  if (segments[0] === 'auth') return handleAuth(method, request);
  if (segments[0] === 'users') return handleUsers(method, request, segments);
  if (segments[0] === 'customers') return handleCustomers(method, request, segments);
  if (segments[0] === 'orders') return handleOrders(method, request, segments);
  if (segments[0] === 'bookings') return handleBookings(method, request, segments);
  if (segments[0] === 'workshops') {
    return handleCrudWithPermission({
      request,
      method,
      segments,
      section: 'workshops',
      table: 'workshops',
      publicFilter: { published: true },
      createRequired: ['title'],
      createData: (body) => ({
        title: cleanString(body.title) || '',
        blurb: cleanString(body.blurb) || '',
        session_date: cleanString(body.session_date) || '',
        price: coerceNumber(body.price, 0),
        spots: coerceInt(body.spots, 0),
        image: cleanString(body.image) || '',
        published: coerceBool(body.published, false),
      }),
      patchBuilder: buildWorkshopPatch,
      notFoundLabel: 'workshop',
    });
  }
  if (segments[0] === 'shop') {
    return handleCrudWithPermission({
      request,
      method,
      segments,
      section: 'shop',
      table: 'products',
      publicFilter: { published: true },
      createRequired: ['name'],
      createData: (body) => ({
        name: cleanString(body.name) || '',
        blurb: cleanString(body.blurb) || '',
        price: coerceNumber(body.price, 0),
        stock: coerceInt(body.stock, 0),
        image: cleanString(body.image) || '',
        published: coerceBool(body.published, false),
      }),
      patchBuilder: buildShopPatch,
      notFoundLabel: 'product',
    });
  }
  if (segments[0] === 'gallery') {
    return handleCrudWithPermission({
      request,
      method,
      segments,
      section: 'gallery',
      table: 'gallery_items',
      publicFilter: { published: true },
      createRequired: ['image'],
      createData: (body) => ({
        image: cleanString(body.image) || '',
        caption: cleanString(body.caption) || '',
        published: coerceBool(body.published, false),
      }),
      patchBuilder: buildGalleryPatch,
      notFoundLabel: 'gallery item',
    });
  }
  if (segments[0] === 'journal') {
    return handleCrudWithPermission({
      request,
      method,
      segments,
      section: 'journal',
      table: 'journal_posts',
      publicFilter: { published: true },
      createRequired: ['title'],
      createData: (body) => {
        const title = cleanString(body.title) || '';
        return {
          title,
          slug: slugify(body.slug) || slugify(title),
          body: cleanString(body.body) || '',
          author: cleanString(body.author) || '',
          published: coerceBool(body.published, false),
        };
      },
      patchBuilder: buildJournalPatch,
      notFoundLabel: 'journal post',
    });
  }
  if (segments[0] === 'subscribers') return handleSubscribers(method, request, segments);
  if (segments[0] === 'updates') return handleUpdates(method, request, segments);
  if (segments[0] === 'settings') return handleSettings(method, request, segments);
  if (segments[0] === 'checkout') return handleCheckout(method, request, segments);
  if (segments[0] === 'stripe') return handleStripe(method, request, segments);
  if (segments[0] === 'uploads') return handleUploads(method, request, segments);

  throw notFound('Not found');
}

export async function GET(request, context) {
  try {
    return await handleApi(request, context);
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request, context) {
  try {
    return await handleApi(request, context);
  } catch (error) {
    return errorResponse(error);
  }
}

export async function PATCH(request, context) {
  try {
    return await handleApi(request, context);
  } catch (error) {
    return errorResponse(error);
  }
}

export async function PUT(request, context) {
  try {
    return await handleApi(request, context);
  } catch (error) {
    return errorResponse(error);
  }
}

export async function DELETE(request, context) {
  try {
    return await handleApi(request, context);
  } catch (error) {
    return errorResponse(error);
  }
}
