'use strict';

const config = require('../config');
const { JsonStore } = require('./jsonStore');
const { MongoStore } = require('./mongoStore');

let store;

if (config.USE_MONGO) {
  store = new MongoStore(config.MONGODB_URL, config.MONGODB_DB_NAME);
  store.kind = 'mongo';
} else {
  store = new JsonStore();
  store.kind = 'json';
}

store.initialize = async function initialize() {
  if (typeof store.init === 'function') {
    await store.init();
  }
};

module.exports = { store };
