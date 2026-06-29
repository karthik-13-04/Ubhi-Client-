'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

const STORAGE_PREFIX = 'ubhi-';
const SYNC_EVENT = 'ubhi-store-sync';

// In-memory fallback when localStorage is unavailable (SSR, quota exceeded, etc.)
const memoryDb = {};

function safeLocalRead(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return memoryDb[key] || null;
  }
}

function safeLocalWrite(key, val) {
  try {
    localStorage.setItem(key, val);
  } catch (e) {
    memoryDb[key] = val;
  }
}

function safeLocalRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    delete memoryDb[key];
  }
}

/**
 * Read a value from the ubhi store (localStorage with prefix).
 * Works outside of React (for seeding, utilities, etc.).
 */
export function storeRead(tableKey, defaultValue = null) {
  const data = safeLocalRead(STORAGE_PREFIX + tableKey);
  if (data) {
    try {
      const parsed = JSON.parse(data);
      // Guard: if a list was expected, insist on a list
      if (Array.isArray(defaultValue) && !Array.isArray(parsed)) return defaultValue;
      return parsed;
    } catch (e) {
      console.error(`Failed to parse store data for ${tableKey}:`, e);
    }
  }
  return defaultValue;
}

/**
 * Write a value to the ubhi store (localStorage with prefix).
 * Works outside of React. Dispatches a sync event so all useStore hooks update.
 */
export function storeWrite(tableKey, value) {
  safeLocalWrite(STORAGE_PREFIX + tableKey, JSON.stringify(value));

  // Write-through to backend when connected (ubhi-sync.js)
  if (typeof window !== 'undefined' && window.ubhiSyncPush) {
    try { window.ubhiSyncPush(tableKey, value); } catch (e) { /* never block a local save */ }
  }

  // Notify all useStore hooks on this page
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(SYNC_EVENT, { detail: { key: tableKey } }));
  }
}

/**
 * Remove a key from the ubhi store.
 */
export function storeRemove(tableKey) {
  safeLocalRemove(STORAGE_PREFIX + tableKey);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(SYNC_EVENT, { detail: { key: tableKey } }));
  }
}

/**
 * Quota-safe append to a cumulative localStorage list.
 * Returns true on success, false if storage is full.
 */
export function storeAppend(tableKey, record) {
  const fullKey = STORAGE_PREFIX + tableKey;
  try {
    let list = [];
    try { list = JSON.parse(safeLocalRead(fullKey)) || []; } catch (e) { list = []; }
    if (!Array.isArray(list)) list = [];
    list.push(record);
    safeLocalWrite(fullKey, JSON.stringify(list));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(SYNC_EVENT, { detail: { key: tableKey } }));
    }
    return true;
  } catch (e) {
    console.error('Could not persist to ' + fullKey + ' (storage full?):', e);
    return false;
  }
}

/**
 * React hook for reading/writing a specific key in the ubhi store.
 *
 * Usage:
 *   const [items, setItems] = useStore('gallery-items', []);
 *
 * - `items` is always the current parsed value (or defaultValue).
 * - `setItems(newValue)` persists to localStorage AND triggers re-renders
 *   in every component using the same key.
 * - Cross-tab sync via the native 'storage' event.
 * - Same-tab sync via a custom 'ubhi-store-sync' event.
 */
export default function useStore(tableKey, defaultValue = null) {
  const fullKey = STORAGE_PREFIX + tableKey;
  const defaultRef = useRef(defaultValue);

  // Lazy initializer: read from localStorage on first render only
  const [value, setValueState] = useState(() => {
    if (typeof window === 'undefined') return defaultValue;
    return storeRead(tableKey, defaultValue);
  });

  // Setter that persists + dispatches sync event
  const setValue = useCallback((newValue) => {
    const resolved = typeof newValue === 'function' ? newValue(storeRead(tableKey, defaultRef.current)) : newValue;
    storeWrite(tableKey, resolved);
    setValueState(resolved);
  }, [tableKey]);

  // Listen for changes from other components or tabs
  useEffect(() => {
    const onSync = (e) => {
      if (e.detail && e.detail.key === tableKey) {
        setValueState(storeRead(tableKey, defaultRef.current));
      }
    };

    const onStorage = (e) => {
      if (e.key === fullKey) {
        setValueState(storeRead(tableKey, defaultRef.current));
      }
    };

    window.addEventListener(SYNC_EVENT, onSync);
    window.addEventListener('storage', onStorage);

    return () => {
      window.removeEventListener(SYNC_EVENT, onSync);
      window.removeEventListener('storage', onStorage);
    };
  }, [tableKey, fullKey]);

  return [value, setValue];
}
