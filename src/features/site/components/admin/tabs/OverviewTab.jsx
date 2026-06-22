'use client';

import { useEffect, useState } from 'react';

const TOKEN_KEY = 'ubhi-api-token';
function authHeaders() {
  const t = typeof window !== 'undefined' ? localStorage.getItem(TOKEN_KEY) || '' : '';
  return { 'Content-Type': 'application/json', ...(t ? { Authorization: `Bearer ${t}` } : {}) };
}
async function apiFetch(url) {
  const r = await fetch(url, { headers: authHeaders(), cache: 'no-store' });
  const d = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(d.error || `HTTP ${r.status}`);
  return d;
}

function KPI({ label, value, color }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '18px',
      padding: '22px 28px',
      boxShadow: '0 2px 16px rgba(80,50,10,0.08)',
      borderLeft: `4px solid ${color}`,
      flex: '1 1 160px',
      minWidth: '140px',
    }}>
      <div style={{ fontSize: '2rem', fontWeight: 700, color, lineHeight: 1 }}>{value ?? '—'}</div>
      <div style={{ fontSize: '0.82rem', color: '#7a6040', marginTop: '6px', fontWeight: 500 }}>{label}</div>
    </div>
  );
}

function ActivityRow({ type, ref: refCode, who, status, date }) {
  const icon = type === 'order' ? '📦' : '🧘';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '14px',
      padding: '10px 0', borderBottom: '1px solid rgba(166,116,31,0.10)',
    }}>
      <span style={{ fontSize: '1.3rem' }}>{icon}</span>
      <div style={{ flex: 1 }}>
        <strong style={{ fontSize: '0.9rem', color: '#2a1e08' }}>{refCode || who}</strong>
        <div style={{ fontSize: '0.78rem', color: '#7a6040' }}>{type === 'order' ? who : refCode}</div>
      </div>
      <span style={{
        fontSize: '0.76rem', padding: '2px 10px', borderRadius: '20px',
        background: 'rgba(166,116,31,0.12)', color: '#8a5f10', fontWeight: 600,
      }}>{status}</span>
      <span style={{ fontSize: '0.75rem', color: '#9a8060', minWidth: '80px', textAlign: 'right' }}>
        {date ? new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : ''}
      </span>
    </div>
  );
}

export default function OverviewTab() {
  const [counts, setCounts] = useState({});
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        const [orders, bookings, subscribers, customers] = await Promise.allSettled([
          apiFetch('/api/orders'),
          apiFetch('/api/bookings'),
          apiFetch('/api/subscribers'),
          apiFetch('/api/customers'),
        ]);

        const ordersData  = orders.status === 'fulfilled'      ? orders.value      : [];
        const bookingsData= bookings.status === 'fulfilled'    ? bookings.value    : [];
        const subsData    = subscribers.status === 'fulfilled' ? subscribers.value : [];
        const custsData   = customers.status === 'fulfilled'   ? customers.value   : [];

        if (!alive) return;

        setCounts({
          orders:      Array.isArray(ordersData)  ? ordersData.length  : 0,
          bookings:    Array.isArray(bookingsData) ? bookingsData.length : 0,
          subscribers: Array.isArray(subsData)    ? subsData.filter(s => s.status === 'Active').length : 0,
          customers:   Array.isArray(custsData)   ? custsData.length   : 0,
        });

        // Build activity feed — last 5 orders + last 5 bookings, newest first
        const oa = Array.isArray(ordersData) ? ordersData.map(o => ({
          type: 'order', ref: o.order_ref, who: o.customer_name || o.customer_email,
          status: o.status, date: o.created_at,
        })) : [];
        const ba = Array.isArray(bookingsData) ? bookingsData.map(b => ({
          type: 'booking', ref: b.workshop_title || 'Workshop', who: b.name || b.email,
          status: b.status, date: b.created_at,
        })) : [];

        const all = [...oa, ...ba]
          .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
          .slice(0, 10);
        setActivity(all);
      } catch (err) {
        // silently degrade
      } finally {
        if (alive) setLoading(false);
      }
    }
    load();
    return () => { alive = false; };
  }, []);

  return (
    <div>
      <h2 style={{ fontSize: '1.1rem', color: '#3a2a10', marginBottom: '6px', fontWeight: 700 }}>Studio Overview</h2>
      <p style={{ fontSize: '0.85rem', color: '#7a6040', marginBottom: '24px' }}>
        Live snapshot of your store activity.
      </p>

      {loading ? (
        <p style={{ color: '#9a8060', fontSize: '0.9rem' }}>Loading…</p>
      ) : (
        <>
          {/* KPI Cards */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            <KPI label="Total Orders"       value={counts.orders}      color="#a6741f" />
            <KPI label="Workshop Bookings"  value={counts.bookings}    color="#a14e5e" />
            <KPI label="Active Subscribers" value={counts.subscribers} color="#2d8b7c" />
            <KPI label="Customers"          value={counts.customers}   color="#39496a" />
          </div>

          {/* Recent Activity */}
          <div style={{
            background: '#fff', borderRadius: '16px', padding: '20px 24px',
            boxShadow: '0 2px 16px rgba(80,50,10,0.07)',
          }}>
            <strong style={{ fontSize: '0.95rem', color: '#3a2a10' }}>Recent Activity</strong>
            <div style={{ marginTop: '14px' }}>
              {activity.length === 0 ? (
                <p style={{ color: '#9a8060', fontSize: '0.85rem' }}>No activity yet.</p>
              ) : (
                activity.map((a, i) => (
                  <ActivityRow key={i} {...a} />
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
