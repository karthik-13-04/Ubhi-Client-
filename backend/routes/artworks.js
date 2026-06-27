'use strict';

const express = require('express');

const { store } = require('../db/store');
const { requireAuth, requirePermission } = require('../middleware/auth');
const { asyncWrap, badRequest, notFound } = require('../middleware/errors');
const {
  requireFields,
  cleanString,
  coerceBool,
  coerceInt,
  coerceNumber,
} = require('../middleware/validate');

const router = express.Router();

const SECTION = 'gallery';
const ARTWORKS = 'artworks';
const IMAGES = 'artwork_images';
const COLLECTIONS = 'artwork_collections';
const COLLECTION_MAP = 'artwork_collection_map';
const TAGS = 'artwork_tags';
const INQUIRIES = 'artwork_inquiries';
const REVISIONS = 'artwork_revisions';

const PUBLIC_STATUSES = new Set(['published', 'featured', 'sold', 'reserved', 'coming-soon']);
const ADMIN_STATUSES = new Set([
  'draft',
  'published',
  'featured',
  'sold',
  'reserved',
  'archived',
  'coming-soon',
]);

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function ensureUniqueSlug(baseSlug, excludeId, table = ARTWORKS) {
  const cleanBase = slugify(baseSlug);
  if (!cleanBase) throw badRequest('A valid slug or title is required');

  let slug = cleanBase;
  let suffix = 2;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const existing = await store.findOne(table, { slug });
    if (!existing || existing.id === excludeId) return slug;
    slug = `${cleanBase}-${suffix++}`;
  }
}

function normalizeStringArray(value) {
  if (Array.isArray(value)) {
    return value
      .map((item) => cleanString(item))
      .filter(Boolean);
  }
  const single = cleanString(value);
  if (!single) return [];
  return single
    .split(',')
    .map((item) => cleanString(item))
    .filter(Boolean);
}

function normalizeStatus(value, fallback = 'draft') {
  const candidate = cleanString(value) || fallback;
  if (!ADMIN_STATUSES.has(candidate)) {
    throw badRequest(`Invalid artwork status "${candidate}"`);
  }
  return candidate;
}

function toIsoOrNull(value) {
  const text = cleanString(value);
  if (!text) return null;
  const date = new Date(text);
  if (Number.isNaN(date.getTime())) throw badRequest(`Invalid date: ${text}`);
  return date.toISOString();
}

function buildArtworkPayload(body, { partial = false } = {}) {
  const source = body && typeof body === 'object' ? body : {};
  const title = cleanString(source.title);
  if (!partial && !title) {
    throw badRequest('Missing required field(s): title');
  }

  const out = {};
  if (title !== undefined) out.title = title;
  if (source.slug !== undefined || source.title !== undefined) {
    out.slug = slugify(cleanString(source.slug) || title || source.title || '');
  }
  if (source.summary !== undefined) out.summary = cleanString(source.summary) || '';
  if (source.description !== undefined) out.description = cleanString(source.description) || '';
  if (source.medium !== undefined) out.medium = cleanString(source.medium) || '';
  if (source.dimensions !== undefined) out.dimensions = cleanString(source.dimensions) || '';
  if (source.year !== undefined) out.year = coerceInt(source.year, null);
  if (source.price !== undefined) out.price = coerceNumber(source.price, null);
  if (source.currency !== undefined) out.currency = cleanString(source.currency) || 'GBP';
  if (source.availability_label !== undefined) out.availability_label = cleanString(source.availability_label) || '';
  if (source.status !== undefined || !partial) out.status = normalizeStatus(source.status, partial ? 'draft' : 'draft');
  if (source.is_featured !== undefined) out.is_featured = coerceBool(source.is_featured, false);
  if (source.featured_slot !== undefined) out.featured_slot = cleanString(source.featured_slot) || '';
  if (source.sort_order !== undefined) out.sort_order = coerceInt(source.sort_order, 0);
  if (source.cover_image_id !== undefined) out.cover_image_id = cleanString(source.cover_image_id) || null;
  if (source.hero_image_id !== undefined) out.hero_image_id = cleanString(source.hero_image_id) || null;
  if (source.seo_title !== undefined) out.seo_title = cleanString(source.seo_title) || '';
  if (source.seo_description !== undefined) out.seo_description = cleanString(source.seo_description) || '';
  if (source.seo_image !== undefined) out.seo_image = cleanString(source.seo_image) || '';
  if (source.primary_collection_id !== undefined) out.primary_collection_id = cleanString(source.primary_collection_id) || null;
  if (source.search_keywords !== undefined) out.search_keywords = normalizeStringArray(source.search_keywords);
  if (source.palette !== undefined) out.palette = normalizeStringArray(source.palette);
  if (source.publish_at !== undefined) out.publish_at = toIsoOrNull(source.publish_at);
  if (source.unpublish_at !== undefined) out.unpublish_at = toIsoOrNull(source.unpublish_at);
  if (source.published_at !== undefined) out.published_at = toIsoOrNull(source.published_at);
  if (source.story !== undefined) out.story = cleanString(source.story) || '';
  if (source.inquiry_enabled !== undefined) out.inquiry_enabled = coerceBool(source.inquiry_enabled, true);
  if (source.allow_purchase !== undefined) out.allow_purchase = coerceBool(source.allow_purchase, false);
  return out;
}

function buildImagePayload(body, { partial = false } = {}) {
  const source = body && typeof body === 'object' ? body : {};
  if (!partial) requireFields(source, ['url']);

  const out = {};
  if (source.url !== undefined) out.url = cleanString(source.url) || '';
  if (source.alt_text !== undefined) out.alt_text = cleanString(source.alt_text) || '';
  if (source.caption !== undefined) out.caption = cleanString(source.caption) || '';
  if (source.role !== undefined) out.role = cleanString(source.role) || 'gallery';
  if (source.media_id !== undefined) out.media_id = cleanString(source.media_id) || null;
  if (source.width !== undefined) out.width = coerceInt(source.width, null);
  if (source.height !== undefined) out.height = coerceInt(source.height, null);
  if (source.sort_order !== undefined) out.sort_order = coerceInt(source.sort_order, 0);
  if (source.focal_x !== undefined) out.focal_x = coerceNumber(source.focal_x, null);
  if (source.focal_y !== undefined) out.focal_y = coerceNumber(source.focal_y, null);
  if (source.is_cover !== undefined) out.is_cover = coerceBool(source.is_cover, false);
  return out;
}

async function setArtworkTags(artworkId, tags) {
  const existing = await store.find(TAGS, { artwork_id: artworkId });
  for (const row of existing) {
    await store.remove(TAGS, row.id);
  }
  for (const value of normalizeStringArray(tags)) {
    await store.insert(TAGS, {
      artwork_id: artworkId,
      value,
      slug: slugify(value),
    });
  }
}

async function setArtworkCollections(artworkId, collectionIds) {
  const existing = await store.find(COLLECTION_MAP, { artwork_id: artworkId });
  for (const row of existing) {
    await store.remove(COLLECTION_MAP, row.id);
  }
  const uniqueIds = Array.from(new Set(normalizeStringArray(collectionIds)));
  for (let index = 0; index < uniqueIds.length; index += 1) {
    await store.insert(COLLECTION_MAP, {
      artwork_id: artworkId,
      collection_id: uniqueIds[index],
      sort_order: index,
    });
  }
}

async function snapshotArtworkRevision(artworkId, actorId, reason) {
  const artwork = await store.get(ARTWORKS, artworkId);
  if (!artwork) return;
  const images = await store.find(IMAGES, { artwork_id: artworkId });
  const collectionMap = await store.find(COLLECTION_MAP, { artwork_id: artworkId });
  const tags = await store.find(TAGS, { artwork_id: artworkId });
  await store.insert(REVISIONS, {
    artwork_id: artworkId,
    actor_id: actorId || null,
    reason: reason || 'update',
    snapshot: {
      artwork,
      images,
      collection_map: collectionMap,
      tags,
    },
  });
}

async function hydrateArtwork(artwork) {
  if (!artwork) return null;
  const [images, collectionMap, tagRows] = await Promise.all([
    store.find(IMAGES, { artwork_id: artwork.id }),
    store.find(COLLECTION_MAP, { artwork_id: artwork.id }),
    store.find(TAGS, { artwork_id: artwork.id }),
  ]);
  const allCollections = collectionMap.length
    ? await Promise.all(collectionMap.map((row) => store.get(COLLECTIONS, row.collection_id)))
    : [];

  return {
    ...artwork,
    images: images.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0)),
    tags: tagRows.map((row) => row.value),
    collections: allCollections.filter(Boolean),
    collection_ids: collectionMap.map((row) => row.collection_id),
  };
}

function isPublicArtwork(artwork) {
  if (!artwork || !PUBLIC_STATUSES.has(artwork.status)) return false;
  const now = Date.now();
  if (artwork.publish_at && Date.parse(artwork.publish_at) > now) return false;
  if (artwork.unpublish_at && Date.parse(artwork.unpublish_at) <= now) return false;
  return true;
}

async function listHydratedArtworks(rows) {
  const items = await Promise.all(rows.map((row) => hydrateArtwork(row)));
  return items.filter(Boolean);
}

router.get(
  '/',
  asyncWrap(async (req, res) => {
    const query = cleanString(req.query.q || '');
    const status = cleanString(req.query.status || '');
    const featuredOnly = coerceBool(req.query.featured, false);
    const collectionSlug = cleanString(req.query.collection || '');
    const medium = cleanString(req.query.medium || '');
    const tag = cleanString(req.query.tag || '');

    const hydrated = await listHydratedArtworks(await store.all(ARTWORKS));
    const filtered = hydrated
      .filter(isPublicArtwork)
      .filter((artwork) => !status || artwork.status === status)
      .filter((artwork) => !featuredOnly || artwork.is_featured)
      .filter((artwork) => !medium || artwork.medium === medium)
      .filter((artwork) => !collectionSlug || artwork.collections.some((collection) => collection.slug === collectionSlug))
      .filter((artwork) => !tag || artwork.tags.includes(tag))
      .filter((artwork) => {
        if (!query) return true;
        const haystack = [
          artwork.title,
          artwork.summary,
          artwork.description,
          artwork.story,
          artwork.medium,
          ...(artwork.tags || []),
          ...(artwork.search_keywords || []),
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return haystack.includes(query.toLowerCase());
      })
      .sort((a, b) => {
        const featureDelta = Number(!!b.is_featured) - Number(!!a.is_featured);
        if (featureDelta) return featureDelta;
        const orderDelta = (a.sort_order || 0) - (b.sort_order || 0);
        if (orderDelta) return orderDelta;
        return (Date.parse(b.published_at) || 0) - (Date.parse(a.published_at) || 0);
      });

    res.json(filtered);
  })
);

router.get(
  '/collections',
  asyncWrap(async (req, res) => {
    const rows = await store.all(COLLECTIONS);
    res.json(rows.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0)));
  })
);

router.get(
  '/slug/:slug',
  asyncWrap(async (req, res) => {
    const artwork = await hydrateArtwork(await store.findOne(ARTWORKS, { slug: req.params.slug }));
    if (!artwork || !isPublicArtwork(artwork)) throw notFound('artwork not found');
    res.json(artwork);
  })
);

router.post(
  '/:id/inquiries',
  asyncWrap(async (req, res) => {
    const artwork = await store.get(ARTWORKS, req.params.id);
    if (!artwork || !isPublicArtwork(artwork)) throw notFound('artwork not found');
    const body = req.body || {};
    requireFields(body, ['name', 'email', 'message']);
    const inquiry = await store.insert(INQUIRIES, {
      artwork_id: artwork.id,
      artwork_title: artwork.title,
      name: cleanString(body.name),
      email: cleanString(body.email),
      phone: cleanString(body.phone) || '',
      message: cleanString(body.message),
      status: 'new',
      source: cleanString(body.source) || 'website',
    });
    await store.update(ARTWORKS, artwork.id, {
      inquiry_count: (artwork.inquiry_count || 0) + 1,
      updated_at: new Date().toISOString(),
    });
    res.status(201).json({ ok: true, inquiry });
  })
);

router.get(
  '/admin/all',
  requireAuth,
  requirePermission(SECTION),
  asyncWrap(async (req, res) => {
    res.json(await listHydratedArtworks(await store.all(ARTWORKS)));
  })
);

router.get(
  '/admin/inquiries',
  requireAuth,
  requirePermission(SECTION),
  asyncWrap(async (req, res) => {
    res.json(await store.all(INQUIRIES));
  })
);

router.get(
  '/admin/revisions/:artworkId',
  requireAuth,
  requirePermission(SECTION),
  asyncWrap(async (req, res) => {
    res.json(await store.find(REVISIONS, { artwork_id: req.params.artworkId }));
  })
);

router.post(
  '/',
  requireAuth,
  requirePermission(SECTION),
  asyncWrap(async (req, res) => {
    const body = req.body || {};
    const payload = buildArtworkPayload(body);
    payload.slug = await ensureUniqueSlug(payload.slug || payload.title, null);
    if (!payload.published_at && (payload.status === 'published' || payload.status === 'featured')) {
      payload.published_at = new Date().toISOString();
    }
    const artwork = await store.insert(ARTWORKS, {
      ...payload,
      view_count: 0,
      inquiry_count: 0,
    });
    if (body.tags !== undefined) await setArtworkTags(artwork.id, body.tags);
    if (body.collection_ids !== undefined) await setArtworkCollections(artwork.id, body.collection_ids);
    await snapshotArtworkRevision(artwork.id, req.user.id, 'create');
    res.status(201).json(await hydrateArtwork(artwork));
  })
);

router.patch(
  '/:id',
  requireAuth,
  requirePermission(SECTION),
  asyncWrap(async (req, res) => {
    const existing = await store.get(ARTWORKS, req.params.id);
    if (!existing) throw notFound('artwork not found');
    const patch = buildArtworkPayload(req.body || {}, { partial: true });
    if (patch.slug || patch.title) {
      patch.slug = await ensureUniqueSlug(patch.slug || patch.title || existing.slug || existing.title, existing.id);
    }
    if (
      patch.published_at === undefined &&
      patch.status &&
      ['published', 'featured', 'sold', 'reserved', 'coming-soon'].includes(patch.status) &&
      !existing.published_at
    ) {
      patch.published_at = new Date().toISOString();
    }
    patch.updated_at = new Date().toISOString();
    const artwork = await store.update(ARTWORKS, existing.id, patch);
    if (req.body && Object.prototype.hasOwnProperty.call(req.body, 'tags')) {
      await setArtworkTags(existing.id, req.body.tags);
    }
    if (req.body && Object.prototype.hasOwnProperty.call(req.body, 'collection_ids')) {
      await setArtworkCollections(existing.id, req.body.collection_ids);
    }
    await snapshotArtworkRevision(existing.id, req.user.id, 'update');
    res.json(await hydrateArtwork(artwork));
  })
);

router.delete(
  '/:id',
  requireAuth,
  requirePermission(SECTION),
  asyncWrap(async (req, res) => {
    const artwork = await store.get(ARTWORKS, req.params.id);
    if (!artwork) throw notFound('artwork not found');
    const [images, maps, tags] = await Promise.all([
      store.find(IMAGES, { artwork_id: artwork.id }),
      store.find(COLLECTION_MAP, { artwork_id: artwork.id }),
      store.find(TAGS, { artwork_id: artwork.id }),
    ]);
    for (const row of [...images, ...maps, ...tags]) {
      const table = images.includes(row) ? IMAGES : maps.includes(row) ? COLLECTION_MAP : TAGS;
      await store.remove(table, row.id);
    }
    await store.remove(ARTWORKS, artwork.id);
    res.json({ ok: true });
  })
);

router.post(
  '/:id/duplicate',
  requireAuth,
  requirePermission(SECTION),
  asyncWrap(async (req, res) => {
    const artwork = await hydrateArtwork(await store.get(ARTWORKS, req.params.id));
    if (!artwork) throw notFound('artwork not found');
    const clonePayload = buildArtworkPayload(
      {
        ...artwork,
        tags: undefined,
        collections: undefined,
        collection_ids: undefined,
        images: undefined,
      },
      { partial: true }
    );
    const clone = await store.insert(ARTWORKS, {
      ...clonePayload,
      title: `${artwork.title} (Copy)`,
      slug: await ensureUniqueSlug(`${artwork.slug || artwork.title}-copy`, null),
      status: 'draft',
      is_featured: false,
      published_at: null,
      cover_image_id: null,
      hero_image_id: null,
      view_count: 0,
      inquiry_count: 0,
      updated_at: new Date().toISOString(),
    });
    for (const image of artwork.images) {
      await store.insert(IMAGES, {
        ...image,
        id: undefined,
        artwork_id: clone.id,
      });
    }
    await setArtworkTags(clone.id, artwork.tags);
    await setArtworkCollections(clone.id, artwork.collection_ids);
    await snapshotArtworkRevision(clone.id, req.user.id, 'duplicate');
    res.status(201).json(await hydrateArtwork(clone));
  })
);

router.post(
  '/reorder',
  requireAuth,
  requirePermission(SECTION),
  asyncWrap(async (req, res) => {
    const ids = Array.isArray(req.body && req.body.ids) ? req.body.ids : [];
    for (let index = 0; index < ids.length; index += 1) {
      await store.update(ARTWORKS, ids[index], {
        sort_order: index,
        updated_at: new Date().toISOString(),
      });
    }
    res.json({ ok: true });
  })
);

router.post(
  '/collections',
  requireAuth,
  requirePermission(SECTION),
  asyncWrap(async (req, res) => {
    requireFields(req.body || {}, ['title']);
    const title = cleanString(req.body.title);
    const slug = await ensureUniqueSlug(cleanString(req.body.slug) || title, null, COLLECTIONS);
    const row = await store.insert(COLLECTIONS, {
      title,
      slug,
      description: cleanString(req.body.description) || '',
      sort_order: coerceInt(req.body.sort_order, 0),
      is_featured: coerceBool(req.body.is_featured, false),
    });
    res.status(201).json(row);
  })
);

router.patch(
  '/collections/:id',
  requireAuth,
  requirePermission(SECTION),
  asyncWrap(async (req, res) => {
    const existing = await store.get(COLLECTIONS, req.params.id);
    if (!existing) throw notFound('collection not found');
    const patch = {};
    if (req.body.title !== undefined) patch.title = cleanString(req.body.title) || existing.title;
    if (req.body.slug !== undefined || req.body.title !== undefined) {
      patch.slug = await ensureUniqueSlug(
        cleanString(req.body.slug) || patch.title || existing.title,
        existing.id,
        COLLECTIONS
      );
    }
    if (req.body.description !== undefined) patch.description = cleanString(req.body.description) || '';
    if (req.body.sort_order !== undefined) patch.sort_order = coerceInt(req.body.sort_order, 0);
    if (req.body.is_featured !== undefined) patch.is_featured = coerceBool(req.body.is_featured, false);
    patch.updated_at = new Date().toISOString();
    res.json(await store.update(COLLECTIONS, existing.id, patch));
  })
);

router.delete(
  '/collections/:id',
  requireAuth,
  requirePermission(SECTION),
  asyncWrap(async (req, res) => {
    const maps = await store.find(COLLECTION_MAP, { collection_id: req.params.id });
    for (const row of maps) await store.remove(COLLECTION_MAP, row.id);
    res.json({ ok: await store.remove(COLLECTIONS, req.params.id) });
  })
);

router.post(
  '/:id/images',
  requireAuth,
  requirePermission(SECTION),
  asyncWrap(async (req, res) => {
    const artwork = await store.get(ARTWORKS, req.params.id);
    if (!artwork) throw notFound('artwork not found');
    const payload = buildImagePayload(req.body || {});
    const row = await store.insert(IMAGES, {
      ...payload,
      artwork_id: artwork.id,
    });
    if (payload.is_cover || !artwork.cover_image_id) {
      await store.update(ARTWORKS, artwork.id, { cover_image_id: row.id, updated_at: new Date().toISOString() });
    }
    await snapshotArtworkRevision(artwork.id, req.user.id, 'image-add');
    res.status(201).json(row);
  })
);

router.patch(
  '/images/:imageId',
  requireAuth,
  requirePermission(SECTION),
  asyncWrap(async (req, res) => {
    const image = await store.get(IMAGES, req.params.imageId);
    if (!image) throw notFound('artwork image not found');
    const patch = buildImagePayload(req.body || {}, { partial: true });
    patch.updated_at = new Date().toISOString();
    const row = await store.update(IMAGES, image.id, patch);
    if (patch.is_cover) {
      await store.update(ARTWORKS, image.artwork_id, {
        cover_image_id: image.id,
        updated_at: new Date().toISOString(),
      });
    }
    await snapshotArtworkRevision(image.artwork_id, req.user.id, 'image-update');
    res.json(row);
  })
);

router.delete(
  '/images/:imageId',
  requireAuth,
  requirePermission(SECTION),
  asyncWrap(async (req, res) => {
    const image = await store.get(IMAGES, req.params.imageId);
    if (!image) throw notFound('artwork image not found');
    const artwork = await store.get(ARTWORKS, image.artwork_id);
    await store.remove(IMAGES, image.id);
    if (artwork && artwork.cover_image_id === image.id) {
      const remaining = (await store.find(IMAGES, { artwork_id: artwork.id })).sort(
        (a, b) => (a.sort_order || 0) - (b.sort_order || 0)
      );
      await store.update(ARTWORKS, artwork.id, {
        cover_image_id: remaining[0] ? remaining[0].id : null,
        updated_at: new Date().toISOString(),
      });
    }
    await snapshotArtworkRevision(image.artwork_id, req.user.id, 'image-delete');
    res.json({ ok: true });
  })
);

module.exports = router;
