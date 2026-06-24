import clientPromise from './mongodb';

const DB_NAME = process.env.MONGODB_DB_NAME || 'ubhi-prod';

export async function getDb() {
  const client = await clientPromise;
  return client.db(DB_NAME);
}

export const store = {
  async all(collectionName) {
    const db = await getDb();
    return db.collection(collectionName).find({}).sort({ created_at: -1 }).toArray();
  },

  async get(collectionName, id) {
    const db = await getDb();
    return db.collection(collectionName).findOne({ id });
  },

  async find(collectionName, query = {}) {
    const db = await getDb();
    return db.collection(collectionName).find(query).sort({ created_at: -1 }).toArray();
  },

  async findOne(collectionName, query = {}) {
    const db = await getDb();
    return db.collection(collectionName).findOne(query);
  },

  async insert(collectionName, doc) {
    const db = await getDb();
    const newDoc = {
      id: doc.id || crypto.randomUUID(),
      created_at: new Date().toISOString(),
      ...doc,
    };
    await db.collection(collectionName).insertOne(newDoc);
    return newDoc;
  },

  async update(collectionName, id, patch) {
    const db = await getDb();
    const { _id, id: _ignoreId, created_at: _ignoreCreatedAt, ...safePatch } = patch;
    if (Object.keys(safePatch).length === 0) return this.get(collectionName, id);
    await db.collection(collectionName).updateOne(
      { id },
      { $set: safePatch }
    );
    return this.get(collectionName, id);
  },

  async remove(collectionName, id) {
    const db = await getDb();
    const result = await db.collection(collectionName).deleteOne({ id });
    return result.deletedCount > 0;
  },

  async count(collectionName, query = {}) {
    const db = await getDb();
    return db.collection(collectionName).countDocuments(query);
  }
};
