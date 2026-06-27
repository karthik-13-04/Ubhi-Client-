'use strict';

const crypto = require('crypto');
const { MongoClient } = require('mongodb');
const { TABLES } = require('./jsonStore');

class MongoStore {
  constructor(uri, dbName) {
    this.uri = uri;
    this.dbName = dbName;
    this.client = new MongoClient(uri);
    this.db = null;
  }

  async init() {
    if (this.db) return;
    await this.client.connect();
    this.db = this.client.db(this.dbName);
    await Promise.all(
      TABLES.map(async (table) => {
        const collection = this._collection(table);
        await this._ensureIndex(collection, { id: 1 }, { unique: true });
        if (table === 'settings' || table === 'app_state') {
          await this._ensureIndex(collection, { key: 1 }, { unique: true, sparse: true });
        }
        if (table === 'artworks') {
          await this._ensureIndex(collection, { slug: 1 }, { unique: true, sparse: true });
          await this._ensureIndex(collection, { status: 1, published_at: -1 });
          await this._ensureIndex(collection, { is_featured: 1, sort_order: 1 });
        }
        if (table === 'artwork_images') {
          await this._ensureIndex(collection, { artwork_id: 1, sort_order: 1 });
        }
        if (table === 'artwork_collections') {
          await this._ensureIndex(collection, { slug: 1 }, { unique: true, sparse: true });
          await this._ensureIndex(collection, { sort_order: 1 });
        }
        if (table === 'artwork_collection_map') {
          await this._ensureIndex(collection, { artwork_id: 1, collection_id: 1 }, { unique: true });
        }
        if (table === 'artwork_tags') {
          await this._ensureIndex(collection, { artwork_id: 1, value: 1 }, { unique: true });
        }
        if (table === 'artwork_inquiries') {
          await this._ensureIndex(collection, { artwork_id: 1, created_at: -1 });
          await this._ensureIndex(collection, { status: 1, created_at: -1 });
        }
        if (table === 'artwork_revisions') {
          await this._ensureIndex(collection, { artwork_id: 1, created_at: -1 });
        }
        if (table === 'media_library') {
          await this._ensureIndex(collection, { url: 1 }, { unique: true, sparse: true });
          await this._ensureIndex(collection, { created_at: -1 });
        }
      })
    );
  }

  async close() {
    await this.client.close();
    this.db = null;
  }

  _collection(table) {
    if (!TABLES.includes(table)) {
      throw new Error(`Unknown table: ${String(table)}`);
    }
    if (!this.db) {
      throw new Error('MongoStore not initialized');
    }
    return this.db.collection(table);
  }

  _strip(row) {
    if (!row) return null;
    const { _id, ...rest } = row;
    return rest;
  }

  async _ensureIndex(collection, spec, options) {
    try {
      await collection.createIndex(spec, options);
    } catch (error) {
      if (error && (error.code === 85 || error.codeName === 'IndexOptionsConflict')) {
        return;
      }
      throw error;
    }
  }

  async all(table) {
    const rows = await this._collection(table)
      .find({})
      .sort({ created_at: -1, _id: -1 })
      .toArray();
    return rows.map((row) => this._strip(row));
  }

  async get(table, id) {
    return this._strip(await this._collection(table).findOne({ id }));
  }

  async find(table, whereObj = {}) {
    const rows = await this._collection(table)
      .find(whereObj || {})
      .sort({ created_at: -1, _id: -1 })
      .toArray();
    return rows.map((row) => this._strip(row));
  }

  async findOne(table, whereObj = {}) {
    const rows = await this.find(table, whereObj);
    return rows[0] || null;
  }

  async insert(table, obj) {
    const row = {
      id: crypto.randomUUID(),
      ...obj,
      created_at: (obj && obj.created_at) || new Date().toISOString(),
    };
    await this._collection(table).insertOne(row);
    return this._strip(row);
  }

  async update(table, id, patch = {}) {
    const { id: _ignoreId, created_at: _ignoreCreated, ...safe } = patch;
    if (!Object.keys(safe).length) {
      return this.get(table, id);
    }
    const result = await this._collection(table).findOneAndUpdate(
      { id },
      { $set: safe },
      { returnDocument: 'after' }
    );
    return this._strip(result && (result.value || result));
  }

  async remove(table, id) {
    const result = await this._collection(table).deleteOne({ id });
    return result.deletedCount > 0;
  }

  async count(table, whereObj = {}) {
    return this._collection(table).countDocuments(whereObj || {});
  }
}

module.exports = { MongoStore };
