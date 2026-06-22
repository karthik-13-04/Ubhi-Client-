'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const API_TOKEN_KEY = 'ubhi-api-token';

function getToken() {
  try {
    return window.localStorage.getItem(API_TOKEN_KEY) || '';
  } catch {
    return '';
  }
}

function authHeaders(extra = {}) {
  const token = getToken();
  const headers = { 'Content-Type': 'application/json', ...extra };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  return headers;
}

async function parseResponse(res) {
  let body = null;
  try {
    body = await res.json();
  } catch {
    /* ignore */
  }
  if (!res.ok) {
    const message = (body && body.error) ? body.error : `HTTP ${res.status}`;
    throw new Error(message);
  }
  return body;
}

/**
 * useAdminApi(endpoint)
 *
 * Returns { data, loading, error, refresh, post, patch, remove }
 * All write methods return a Promise<result | null>.
 */
export function useAdminApi(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  const load = useCallback(async () => {
    if (!endpoint) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(endpoint, {
        headers: authHeaders(),
        cache: 'no-store',
      });
      const result = await parseResponse(res);
      if (mountedRef.current) setData(result);
    } catch (err) {
      if (mountedRef.current) setError(err.message || 'Failed to load data.');
    } finally {
      if (mountedRef.current) setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => { load(); }, [load]);

  const post = useCallback(async (body) => {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: authHeaders(),
        body: JSON.stringify(body),
      });
      const result = await parseResponse(res);
      await load();
      return result;
    } catch (err) {
      throw err;
    }
  }, [endpoint, load]);

  const patch = useCallback(async (id, body) => {
    try {
      const res = await fetch(`${endpoint}/${id}`, {
        method: 'PATCH',
        headers: authHeaders(),
        body: JSON.stringify(body),
      });
      const result = await parseResponse(res);
      await load();
      return result;
    } catch (err) {
      throw err;
    }
  }, [endpoint, load]);

  const remove = useCallback(async (id) => {
    try {
      const res = await fetch(`${endpoint}/${id}`, {
        method: 'DELETE',
        headers: authHeaders(),
      });
      const result = await parseResponse(res);
      await load();
      return result;
    } catch (err) {
      throw err;
    }
  }, [endpoint, load]);

  return { data, loading, error, refresh: load, post, patch, remove };
}

/**
 * Upload a file to /api/uploads with an optional kind tag.
 */
export async function uploadFile(file, { kind = 'admin-upload', entityType = '', entityId = '' } = {}) {
  const token = getToken();
  if (!token) throw new Error('Not signed in. Please log in again.');

  const form = new FormData();
  form.append('file', file);
  form.append('kind', kind);
  if (entityType) form.append('entity_type', entityType);
  if (entityId) form.append('entity_id', entityId);

  const res = await fetch('/api/uploads', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  });

  const payload = await res.json().catch(() => null);
  if (!res.ok) {
    throw new Error((payload && payload.error) ? payload.error : 'Upload failed.');
  }
  if (!payload || !payload.url) throw new Error('Upload succeeded but no URL was returned.');
  return payload;
}
