'use client';

import { useState } from 'react';
import { useAdminApi } from '../useAdminApi';
import AdminModal from '../AdminModal';
import StatusBadge from '../StatusBadge';
import { FormSelect, FormActions } from '../FormFields';

const td = { padding: '10px 12px', fontSize: '0.83rem', color: '#3a2a10', verticalAlign: 'middle' };
const btnSm = (color) => ({
  border: `1px solid ${color}40`, borderRadius: '8px', background: `${color}10`,
  color, cursor: 'pointer', padding: '3px 10px', fontSize: '0.75rem', fontWeight: 600,
});

function OrderRow({ o, onEdit }) {
  const isOrder = !!o.order_ref;
  const idStr = isOrder ? o.order_ref : `BK-${o.id?.slice(0, 6)}`;
  const dateStr = new Date(o.created_at || 0).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });

  return (
    <tr style={{ borderBottom: '1px solid rgba(166,116,31,0.08)' }}>
      <td style={td}>
        <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', background: isOrder ? '#e8d5b5' : '#d5e0e8', color: isOrder ? '#5a4420' : '#2c3f6e', fontWeight: 600, marginRight: '8px' }}>
          {isOrder ? 'Order' : 'Booking'}
        </span>
        <strong style={{ color: '#2a1e08' }}>{idStr}</strong>
      </td>
      <td style={td}>{dateStr}</td>
      <td style={td}>
        <div style={{ fontWeight: 500 }}>{o.customer_name || o.name || '—'}</div>
        <a href={`mailto:${o.customer_email || o.email}`} style={{ color: '#a6741f', textDecoration: 'none', fontSize: '0.78rem' }}>{o.customer_email || o.email}</a>
      </td>
      <td style={td}>{isOrder ? `£${(o.total_price || 0).toFixed(2)}` : o.workshop_title || 'Workshop'}</td>
      <td style={td}><StatusBadge status={o.status} /></td>
      <td style={{ ...td, textAlign: 'right' }}>
        <button onClick={() => onEdit(o, isOrder ? 'order' : 'booking')} style={btnSm('#a6741f')}>Update</button>
      </td>
    </tr>
  );
}

function StatusModal({ item, type, onClose, onSaved }) {
  const [status, setStatus] = useState(item?.status || '');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const opts = type === 'order'
    ? [{ value: 'Paid', label: 'Paid' }, { value: 'Preparing with care', label: 'Preparing with care' }, { value: 'Shipped', label: 'Shipped' }, { value: 'Delivered', label: 'Delivered' }, { value: 'Cancelled', label: 'Cancelled' }]
    : [{ value: 'Reserved', label: 'Reserved' }, { value: 'Confirmed', label: 'Confirmed' }, { value: 'Attended', label: 'Attended' }, { value: 'Cancelled', label: 'Cancelled' }];

  async function handleSubmit(e) {
    e.preventDefault(); setSaving(true); setError('');
    try { await onSaved(item.id, type, { status }); onClose(); }
    catch (err) { setError(err.message); setSaving(false); }
  }

  return (
    <AdminModal title={`Update ${type === 'order' ? 'Order' : 'Booking'} Status`} onClose={onClose} width={400}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '16px', fontSize: '0.85rem', color: '#5a4420' }}>
          Updating status for <strong>{type === 'order' ? item.order_ref : `Booking BK-${item.id?.slice(0, 6)}`}</strong>
          <br/>Customer: {item.customer_name || item.name}
        </div>
        <FormSelect label="Status" options={opts} value={status} onChange={e => setStatus(e.target.value)} />
        {error && <p style={{ color: '#a02828', fontSize: '0.82rem' }}>{error}</p>}
        <FormActions onCancel={onClose} submitting={saving} submitLabel="Save Status" />
      </form>
    </AdminModal>
  );
}

export default function OrdersBookingsTab() {
  const { data: orders, loading: ol, error: oe, patch: patchOrder, refresh: ro } = useAdminApi('/api/orders');
  const { data: bookings, loading: bl, error: be, patch: patchBooking, refresh: rb } = useAdminApi('/api/bookings/all');
  const [modal, setModal] = useState(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all'); // all, order, booking

  const allOrders = Array.isArray(orders) ? orders.map(o => ({ ...o, _type: 'order' })) : [];
  const allBookings = Array.isArray(bookings) ? bookings.map(b => ({ ...b, _type: 'booking' })) : [];
  const combined = [...allOrders, ...allBookings].sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));

  const filtered = combined.filter(x => {
    if (filter !== 'all' && x._type !== filter) return false;
    if (!search) return true;
    const term = search.toLowerCase();
    const str = `${x.order_ref || ''} ${x.customer_name || x.name || ''} ${x.customer_email || x.email || ''} ${x.workshop_title || ''} ${x.status || ''}`.toLowerCase();
    return str.includes(term);
  });

  async function handleSaveStatus(id, type, patchData) {
    if (type === 'order') { await patchOrder(id, patchData); ro(); }
    else { await patchBooking(id, patchData); rb(); }
  }

  const loading = ol || bl;
  const error = oe || be;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.1rem', color: '#3a2a10', fontWeight: 700 }}>Orders & Bookings</h2>
          <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#7a6040' }}>
            {allOrders.length} orders · {allBookings.length} bookings
          </p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['all', 'order', 'booking'].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '6px 14px', borderRadius: '12px', border: `1px solid ${filter === f ? '#a6741f' : 'rgba(166,116,31,0.2)'}`,
              background: filter === f ? '#a6741f' : 'transparent', color: filter === f ? '#fff' : '#5a4420',
              cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600, textTransform: 'capitalize'
            }}>{f}</button>
          ))}
        </div>
      </div>

      <input
        type="text" value={search} onChange={e => setSearch(e.target.value)}
        placeholder="Search ID, customer, email, workshop…"
        style={{ width: '100%', padding: '9px 14px', borderRadius: '12px', border: '1px solid rgba(166,116,31,0.25)', background: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', marginBottom: '16px', boxSizing: 'border-box' }}
      />

      {loading && <p style={{ color: '#9a8060' }}>Loading…</p>}
      {error && <p style={{ color: '#a02828', fontSize: '0.85rem' }}>{error}</p>}

      <div style={{ overflowX: 'auto', borderRadius: '16px', boxShadow: '0 2px 14px rgba(80,50,10,0.07)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '16px', overflow: 'hidden' }}>
          <thead>
            <tr style={{ background: 'rgba(166,116,31,0.06)' }}>
              {['Ref / Type', 'Date', 'Customer', 'Details', 'Status', ''].map(h => (
                <th key={h} style={{ padding: '10px 12px', fontSize: '0.76rem', fontWeight: 700, color: '#5a4420', textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(o => (
              <OrderRow key={o.id} o={o} onEdit={(item, type) => setModal({ item, type })} />
            ))}
            {!loading && filtered.length === 0 && (
              <tr><td colSpan={6} style={{ padding: '20px', textAlign: 'center', color: '#9a8060', fontSize: '0.88rem' }}>No records found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {modal && (
        <StatusModal item={modal.item} type={modal.type} onClose={() => setModal(null)} onSaved={handleSaveStatus} />
      )}
    </div>
  );
}
