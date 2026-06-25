(function (window) {
  'use strict';

  if (!window || !window.localStorage) return;

  var watchedKeys = {
    'ubhi-shop-orders': 'orders',
    'ubhi-workshop-reservations': 'bookings',
  };

  var syncStateKey = 'ubhi-api-sync-state';

  function readJson(raw, fallback) {
    try {
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function loadSyncState() {
    return readJson(window.localStorage.getItem(syncStateKey), {});
  }

  function saveSyncState(state) {
    try {
      window.localStorage.setItem(syncStateKey, JSON.stringify(state));
    } catch (error) {}
  }

  function orderFingerprint(order) {
    return [
      order && order.orderRef,
      order && order.email,
      order && order.orderedAt,
      order && order.totalPrice,
    ].join('|');
  }

  function bookingFingerprint(booking) {
    return [
      booking && booking.workshop,
      booking && booking.email,
      booking && booking.reservedAt,
      booking && booking.tickets,
    ].join('|');
  }

  function normalizeOrder(order) {
    var items = Array.isArray(order && order.items) ? order.items : [];
    return {
      customer_name: order && order.name || '',
      customer_email: order && order.email || '',
      phone: order && order.phone || '',
      items: items.map(function (item) {
        return {
          id: item && (item.id || item.sku) || null,
          name: item && (item.name || item.productName) || 'Item',
          price: Number(item && item.price) || 0,
          qty: Math.max(1, parseInt(item && (item.quantity || item.qty || 1), 10) || 1),
        };
      }),
      ship_street: order && order.address && order.address.street || '',
      ship_city: order && order.address && order.address.city || '',
      ship_postcode: order && order.address && order.address.postcode || '',
      ship_country: order && order.address && order.address.country || '',
    };
  }

  function normalizeBooking(booking) {
    return {
      name: booking && booking.name || '',
      email: booking && booking.email || '',
      phone: booking && booking.phone || '',
      workshop_title: booking && booking.workshop || '',
      session_date: booking && booking.date || '',
      price: booking && booking.price === 'custom' ? 0 : Number(booking && booking.price) || 0,
      note: booking && booking.note || '',
    };
  }

  function createResource(resource, row) {
    if (!window.UbhiAPI) return Promise.resolve(null);
    if (resource === 'orders') {
      return window.UbhiAPI.orders.create(normalizeOrder(row), { auth: false });
    }
    if (resource === 'bookings') {
      return window.UbhiAPI.bookings.create(normalizeBooking(row), { auth: false });
    }
    return Promise.resolve(null);
  }

  function syncCollection(key, previousRaw, nextRaw) {
    var resource = watchedKeys[key];
    if (!resource || !window.UbhiAPI) return;

    var previous = readJson(previousRaw, []);
    var next = readJson(nextRaw, []);
    if (!Array.isArray(next) || !next.length) return;

    var previousFingerprints = new Set(
      previous.map(resource === 'orders' ? orderFingerprint : bookingFingerprint)
    );
    var syncState = loadSyncState();
    syncState[key] = syncState[key] || {};

    next.forEach(function (row) {
      var fingerprint =
        resource === 'orders' ? orderFingerprint(row) : bookingFingerprint(row);
      if (!fingerprint || previousFingerprints.has(fingerprint) || syncState[key][fingerprint]) {
        return;
      }
      createResource(resource, row)
        .then(function (created) {
          syncState[key][fingerprint] = created && created.id ? created.id : true;
          saveSyncState(syncState);
        })
        .catch(function () {});
    });
  }

  var originalSetItem = window.localStorage.setItem.bind(window.localStorage);

  window.localStorage.setItem = function patchedSetItem(key, value) {
    var previous = null;
    try {
      previous = window.localStorage.getItem(key);
    } catch (error) {}

    originalSetItem(key, value);
    syncCollection(String(key || ''), previous, value);
  };
})(window);
