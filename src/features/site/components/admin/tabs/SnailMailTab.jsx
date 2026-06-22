'use client';

import { useState } from 'react';
import { useAdminApi } from '../useAdminApi';
import AdminModal from '../AdminModal';
import StatusBadge from '../StatusBadge';
import { FormInput, FormSelect, FormActions } from '../FormFields';

const STATUS_OPTIONS = [
  { value: 'Active', label: 'Active' },
  { value: 'Inactive', label: 'Inactive' },
];

function SubRow({ sub, onEdit, onDelete }) {
  return (
    <tr style={{ borderBottom: '1px solid rgba(166,116,31,0.08)' }}>
      <td style={td}><strong style={{ color: '#2a1e08' }}>{sub.name}</strong></td>
      <td style={td}><a href={`mailto:${sub.email}`} style={{ color: '#a6741f', textDecoration: 'none' }}>{sub.email}</a></td>
      <td style={td}>{sub.plan || '—'}</td>
      <td style={td}><StatusBadge status={sub.status} /></td>
      <td style={td}>{sub.last_sent_cycle || '—'}</td>
      <td style={{ ...td, textAlign: 'right' }}>
        <button onClick={() => onEdit(sub)} style={btnSm('#a6741f')}>Edit</button>
        {' '}
        <button onClick={() => onDelete(sub.id)} style={btnSm('#a02828')}>✕</button>
      </td>
    </tr>
  );
}

const td = { padding: '10px 12px', fontSize: '0.84rem', color: '#3a2a10', verticalAlign: 'middle' };
const btnSm = (color) => ({
  border: `1px solid ${color}40`, borderRadius: '8px', background: `${color}10`,
  color, cursor: 'pointer', padding: '3px 10px', fontSize: '0.75rem', fontWeight: 600,
});

function SubModal({ item, onClose, onSaved }) {
  const isNew = !item?.id;
  const [f, setF] = useState({
    name: item?.name || '',
    email: item?.email || '',
    contact: item?.contact || '',
    plan: item?.plan || '',
    status: item?.status || 'Active',
    address: item?.address || '',
    date_subscribed: item?.date_subscribed || '',
    last_sent_cycle: item?.last_sent_cycle || '',
    price: item?.price ?? '',
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const set = k => e => setF(prev => ({ ...prev, [k]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault(); setSaving(true); setError('');
    try {
      await onSaved({ ...f, price: parseFloat(f.price) || 0 });
      onClose();
    } catch (err) { setError(err.message); setSaving(false); }
  }

  return (
    <AdminModal title={isNew ? 'Add Subscriber' : 'Edit Subscriber'} onClose={onClose} width={560}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <FormInput label="Name *" value={f.name} onChange={set('name')} required />
          <FormInput label="Email *" type="email" value={f.email} onChange={set('email')} required />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <FormInput label="Plan" value={f.plan} onChange={set('plan')} placeholder="e.g. Monthly, Annual" />
          <FormInput label="Price (£)" type="number" min="0" step="0.01" value={f.price} onChange={set('price')} />
        </div>
        <FormSelect label="Status" options={STATUS_OPTIONS} value={f.status} onChange={set('status')} />
        <FormInput label="Address" value={f.address} onChange={set('address')} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <FormInput label="Date Subscribed" value={f.date_subscribed} onChange={set('date_subscribed')} placeholder="YYYY-MM-DD" />
          <FormInput label="Last Sent Cycle" value={f.last_sent_cycle} onChange={set('last_sent_cycle')} placeholder="e.g. June 2025" />
        </div>
        <FormInput label="Contact / Phone" value={f.contact} onChange={set('contact')} />
        {error && <p style={{ color: '#a02828', fontSize: '0.82rem' }}>{error}</p>}
        <FormActions onCancel={onClose} submitting={saving} submitLabel={isNew ? 'Add Subscriber' : 'Save Changes'} />
      </form>
    </AdminModal>
  );
}

export default function SnailMailTab() {
  const { data, loading, error, refresh, post, patch, remove } = useAdminApi('/api/subscribers');
  const [modal, setModal] = useState(null);
  const [search, setSearch] = useState('');
  const [err, setErr] = useState('');

  const all = Array.isArray(data) ? data : [];
  const filtered = search
    ? all.filter(s =>
        `${s.name} ${s.email} ${s.plan} ${s.address}`.toLowerCase().includes(search.toLowerCase())
      )
    : all;

  const active = all.filter(s => s.status === 'Active').length;

  async function handleSave(formData) {
    if (modal.mode === 'new') await post(formData);
    else await patch(modal.item.id, formData);
    setModal(null); refresh();
  }

  async function handleDelete(id) {
    if (!window.confirm('Remove this subscriber?')) return;
    setErr('');
    try { await remove(id); } catch (e) { setErr(e.message); }
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.1rem', color: '#3a2a10', fontWeight: 700 }}>Snail Mail Subscribers</h2>
          <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#7a6040' }}>
            {all.length} total · {active} active
          </p>
        </div>
        <button
          onClick={() => setModal({ mode: 'new', item: null })}
          style={{ padding: '9px 20px', borderRadius: '12px', border: 'none', background: '#a6741f', color: '#fff', cursor: 'pointer', fontSize: '0.88rem', fontWeight: 600 }}
        >+ Add Subscriber</button>
      </div>

      <input
        type="text" value={search} onChange={e => setSearch(e.target.value)}
        placeholder="Search name, email, plan…"
        style={{ width: '100%', padding: '9px 14px', borderRadius: '12px', border: '1px solid rgba(166,116,31,0.25)', background: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', marginBottom: '16px', boxSizing: 'border-box' }}
      />

      {loading && <p style={{ color: '#9a8060' }}>Loading…</p>}
      {(error || err) && <p style={{ color: '#a02828', fontSize: '0.85rem' }}>{error || err}</p>}

      <div style={{ overflowX: 'auto', borderRadius: '16px', boxShadow: '0 2px 14px rgba(80,50,10,0.07)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '16px', overflow: 'hidden' }}>
          <thead>
            <tr style={{ background: 'rgba(166,116,31,0.06)' }}>
              {['Name', 'Email', 'Plan', 'Status', 'Last Sent', ''].map(h => (
                <th key={h} style={{ padding: '10px 12px', fontSize: '0.76rem', fontWeight: 700, color: '#5a4420', textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(sub => (
              <SubRow key={sub.id} sub={sub}
                onEdit={i => setModal({ mode: 'edit', item: i })}
                onDelete={handleDelete}
              />
            ))}
            {!loading && filtered.length === 0 && (
              <tr><td colSpan={6} style={{ padding: '20px', textAlign: 'center', color: '#9a8060', fontSize: '0.88rem' }}>No subscribers found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {modal && (
        <SubModal item={modal.item} onClose={() => setModal(null)} onSaved={handleSave} />
      )}
    </div>
  );
}
