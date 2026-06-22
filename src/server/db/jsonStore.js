'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { TABLES } = require('./tables');

const DATA_DIR = path.join(__dirname, 'data');

class JsonStore {
  constructor() {
    this.dataDir = DATA_DIR;
    this._locks = new Map();
    this._ensureDir();
  }

  _ensureDir() {
    if (!fs.existsSync(this.dataDir)) {
      fs.mkdirSync(this.dataDir, { recursive: true });
    }
  }

  _assertTable(table) {
    if (typeof table !== 'string' || !TABLES.includes(table)) {
      throw new Error(`Unknown table: ${String(table)}`);
    }
  }

  _file(table) {
    this._assertTable(table);
    return path.join(this.dataDir, `${table}.json`);
  }

  _readRaw(table) {
    const file = this._file(table);
    if (!fs.existsSync(file)) return [];
    try {
      const text = fs.readFileSync(file, 'utf8');
      if (!text.trim()) return [];
      const parsed = JSON.parse(text);
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      throw new Error(`Failed to read table "${table}": ${err.message}`);
    }
  }

  _writeRaw(table, rows) {
    this._ensureDir();
    const file = this._file(table);
    const tmp = `${file}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(rows, null, 2), 'utf8');
    fs.renameSync(tmp, file);
  }

  async _withLock(table, fn) {
    const prev = this._locks.get(table) || Promise.resolve();
    let release;
    const next = new Promise((resolve) => {
      release = resolve;
    });
    this._locks.set(table, prev.then(() => next));
    await prev;
    try {
      return await fn();
    } finally {
      release();
    }
  }

  _sortNewestFirst(rows) {
    return rows.slice().sort((a, b) => {
      const ta = Date.parse(a && a.created_at) || 0;
      const tb = Date.parse(b && b.created_at) || 0;
      return tb - ta;
    });
  }

  _matches(row, where) {
    return Object.keys(where).every((key) => {
      const want = where[key];
      const have = row[key];
      if (have === want) return true;
      if (want === null || want === undefined) return have === want;
      if (typeof have === 'object' || typeof want === 'object') {
        return JSON.stringify(have) === JSON.stringify(want);
      }
      // eslint-disable-next-line eqeqeq
      return have == want;
    });
  }

  async all(table) {
    const rows = this._readRaw(table);
    return this._sortNewestFirst(rows);
  }

  async get(table, id) {
    const rows = this._readRaw(table);
    return rows.find((r) => r.id === id) || null;
  }

  async find(table, whereObj = {}) {
    const rows = this._readRaw(table);
    const matched = rows.filter((r) => this._matches(r, whereObj));
    return this._sortNewestFirst(matched);
  }

  async findOne(table, whereObj = {}) {
    const rows = await this.find(table, whereObj);
    return rows[0] || null;
  }

  async insert(table, obj) {
    return this._withLock(table, () => {
      const rows = this._readRaw(table);
      const row = {
        id: crypto.randomUUID(),
        ...obj,
        created_at: (obj && obj.created_at) || new Date().toISOString(),
      };
      rows.push(row);
      this._writeRaw(table, rows);
      return row;
    });
  }

  async update(table, id, patch = {}) {
    return this._withLock(table, () => {
      const rows = this._readRaw(table);
      const idx = rows.findIndex((r) => r.id === id);
      if (idx === -1) return null;
      const { id: _ignoreId, created_at: _ignoreCreated, ...safe } = patch;
      rows[idx] = { ...rows[idx], ...safe };
      this._writeRaw(table, rows);
      return rows[idx];
    });
  }

  async remove(table, id) {
    return this._withLock(table, () => {
      const rows = this._readRaw(table);
      const idx = rows.findIndex((r) => r.id === id);
      if (idx === -1) return false;
      rows.splice(idx, 1);
      this._writeRaw(table, rows);
      return true;
    });
  }

  async count(table, whereObj) {
    if (whereObj && Object.keys(whereObj).length) {
      const rows = await this.find(table, whereObj);
      return rows.length;
    }
    return this._readRaw(table).length;
  }
}

module.exports = { JsonStore, TABLES };
