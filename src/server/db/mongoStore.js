'use strict';

const crypto = require('crypto');
const { MongoClient } = require('mongodb');
const { TABLES } = require('./tables');

class MongoStore {
  constructor(connectionString, dbName) {
    if (!connectionString) {
      throw new Error('MONGODB_URL is required to use the MongoDB store.');
    }
    this.client = new MongoClient(connectionString, {
      maxPoolSize: 20,
      retryWrites: true,
    });
    this.dbName = dbName || undefined;
    this.db = null;
  }

  _assertTable(table) {
    if (typeof table !== 'string' || !TABLES.includes(table)) {
      throw new Error(`Unknown collection: ${String(table)}`);
    }
    return table;
  }

  collection(table) {
    this._assertTable(table);
    if (!this.db) {
      throw new Error('MongoStore has not been initialized yet.');
    }
    return this.db.collection(table);
  }

  async init() {
    await this.client.connect();
    this.db = this.dbName ? this.client.db(this.dbName) : this.client.db();
    await this._ensureIndexes();
  }

  async _ensureIndexes() {
    await Promise.all([
      this.collection('admin_users').createIndexes([
        { key: { id: 1 }, unique: true, name: 'id_unique' },
        { key: { email: 1 }, unique: true, name: 'email_unique' },
        { key: { role: 1 }, name: 'role_idx' },
        { key: { created_at: -1 }, name: 'created_at_desc' },
      ]),
      this.collection('customers').createIndexes([
        { key: { id: 1 }, unique: true, name: 'id_unique' },
        { key: { email: 1 }, unique: true, name: 'email_unique' },
        { key: { created_at: -1 }, name: 'created_at_desc' },
      ]),
      this.collection('settings').createIndexes([
        { key: { id: 1 }, unique: true, name: 'id_unique' },
        { key: { key: 1 }, unique: true, name: 'key_unique' },
      ]),
      this.collection('files').createIndexes([
        { key: { id: 1 }, unique: true, name: 'id_unique' },
        { key: { key: 1 }, unique: true, name: 'storage_key_unique' },
        { key: { created_at: -1 }, name: 'created_at_desc' },
      ]),
      ...TABLES.filter(
        (table) =>
          !['admin_users', 'customers', 'settings', 'files'].includes(table)
      ).map((table) =>
        this.collection(table).createIndexes([
          { key: { id: 1 }, unique: true, name: 'id_unique' },
          { key: { created_at: -1 }, name: 'created_at_desc' },
        ])
      ),
    ]);
  }

  _cleanDoc(doc) {
    if (!doc || typeof doc !== 'object') return doc;
    const { _id, ...rest } = doc;
    return rest;
  }

  async all(table) {
    const rows = await this.collection(table)
      .find({})
      .sort({ created_at: -1, _id: -1 })
      .toArray();
    return rows.map((row) => this._cleanDoc(row));
  }

  async get(table, id) {
    const row = await this.collection(table).findOne({ id });
    return this._cleanDoc(row);
  }

  async find(table, whereObj = {}) {
    const rows = await this.collection(table)
      .find(whereObj || {})
      .sort({ created_at: -1, _id: -1 })
      .toArray();
    return rows.map((row) => this._cleanDoc(row));
  }

  async findOne(table, whereObj = {}) {
    const row = await this.collection(table).findOne(whereObj || {}, {
      sort: { created_at: -1, _id: -1 },
    });
    return this._cleanDoc(row);
  }

  async insert(table, obj) {
    const row = {
      id: (obj && obj.id) || crypto.randomUUID(),
      ...obj,
    };
    if (!row.created_at) row.created_at = new Date().toISOString();
    await this.collection(table).insertOne(row);
    return row;
  }

  async update(table, id, patch = {}) {
    const { id: _ignoreId, created_at: _ignoreCreated, ...safe } = patch;
    if (!Object.keys(safe).length) {
      return this.get(table, id);
    }
    const result = await this.collection(table).findOneAndUpdate(
      { id },
      { $set: safe },
      { returnDocument: 'after' }
    );
    return this._cleanDoc(result.value);
  }

  async remove(table, id) {
    const result = await this.collection(table).deleteOne({ id });
    return result.deletedCount > 0;
  }

  async count(table, whereObj) {
    return this.collection(table).countDocuments(whereObj || {});
  }

  async close() {
    await this.client.close();
  }
}

module.exports = { MongoStore };
