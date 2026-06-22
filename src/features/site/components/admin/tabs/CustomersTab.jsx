'use client';

import { useState } from 'react';
import { useAdminApi } from '../useAdminApi';
import AdminModal from '../AdminModal';
import StatusBadge from '../StatusBadge';
import { FormInput, FormToggle, FormActions } from '../FormFields';

const td = { padding: '10px 12px', fontSize: '0.83rem', color: '#3a2a10', verticalAlign: 'middle' };
const btnSm = (color) => ({
  border: `1px solid ${color}40`, borderRadius: '8px', background: `${color}10`,
  color, cursor: 'pointer', padding: '3px 10px', fontSize: '0.75rem', fontWeight: 600,
});

function CustomerRow({ c, onEdit }) {
  return (
    <tr style={{ borderBottom: '1px solid rgba(166,116,31,0.08)', cursor: 'pointer' }}
      onClick={() => onEdit(c)}>
      <td style={td}><strong style={{ color: '#2a1e08' }}>{c.name || '—'}</strong></td>
      <td style={td}><a href={`mailto:${c.email}`} style={{ color: '#a6741f', textDecoration: 'none' }} onClick={e => e.stopPropagation()}>{c.email}</a></td>
      <td style={td}>{c.city || '—'}</td>
      <td style={td}>{c.country || '—'}</td>
      <td style={td}><StatusBadge status={c.active === false ? 'Inactive' : 'Active'} /></td>
      <td style={{ ...td, textAlign: 'right' }}>
        <button onClick={e => { e.stopPropagation(); onEdit(c); }} style={btnSm('#a6741f')}>Edit</button>
      </td>
    </tr>
  );
}

function CustomerModal({ item, onClose, onSaved }) {
  const [f, setF] = useState({
    name: item?.name || '',
    email: item?.email || '',
    phone: item?.phone || '',
    address: item?.address || '',
    city: item?.city || '',
    postcode: item?.postcode || '',
    country: item?.country || '',
    active: item?.active !== false,
    marketing_opt_in: item?.marketing_opt_in ?? false,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const set = k => e => setF(prev => ({ ...prev, [k]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault(); setSaving(true); setError('');
    try { await onSaved(f); onClose(); }
    catch (err) { setError(err.message); setSaving(false); }
  }

  return (
    <AdminModal title={`Edit — ${item?.name || item?.email}`} onClose={onClose} width={580}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <FormInput label="Name" value={f.name} onChange={set('name')} />
          <FormInput label="Email" type="email" value={f.email} onChange={set('email')} />
        </div>
        <FormInput label="Phone" value={f.phone} onChange={set('phone')} />
        <FormInput label="Address" value={f.address} onChange={set('address')} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
          <FormInput label="City" value={f.city} onChange={set('city')} />
          <FormInput label="Postcode" value={f.postcode} onChange={set('postcode')} />
          <FormInput label="Country" value={f.country} onChange={set('country')} />
        </div>
        <FormToggle label="Active account" checked={f.active} onChange={v => setF(prev => ({ ...prev, active: v }))} />
        <FormToggle label="Marketing opt-in" checked={f.marketing_opt_in} onChange={v => setF(prev => ({ ...prev, marketing_opt_in: v }))} />
        {error && <p style={{ color: '#a02828', fontSize: '0.82rem' }}>{error}</p>}
        <FormActions onCancel={onClose} submitting={saving} />
      </form>
    </AdminModal>
  );
}

export default function CustomersTab() {
  const { data, loading, error, refresh, patch } = useAdminApi('/api/customers');
  const [modal, setModal] = useState(null);
  const [search, setSearch] = useState('');

  const all = Array.isArray(data) ? data : [];
  const filtered = search
    ? all.filter(c => `${c.name} ${c.email} ${c.city} ${c.country}`.toLowerCase().includes(search.toLowerCase()))
    : all;

  const active = all.filter(c => c.active !== false).length;

  async function handleSave(formData) {
    await patch(modal.id, formData);
    setModal(null); refresh();
  }

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <h2 style={{ margin: 0, fontSize: '1.1rem', color: '#3a2a10', fontWeight: 700 }}>Customers</h2>
        <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#7a6040' }}>
          {all.length} total · {active} active
        </p>
      </div>

      <input
        type="text" value={search} onChange={e => setSearch(e.target.value)}
        placeholder="Search name, email, city…"
        style={{ width: '100%', padding: '9px 14px', borderRadius: '12px', border: '1px solid rgba(166,116,31,0.25)', background: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', marginBottom: '16px', boxSizing: 'border-box' }}
      />

      {loading && <p style={{ color: '#9a8060' }}>Loading…</p>}
      {error && <p style={{ color: '#a02828', fontSize: '0.85rem' }}>{error}</p>}

      <div style={{ overflowX: 'auto', borderRadius: '16px', boxShadow: '0 2px 14px rgba(80,50,10,0.07)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '16px', overflow: 'hidden' }}>
          <thead>
            <tr style={{ background: 'rgba(166,116,31,0.06)' }}>
              {['Name', 'Email', 'City', 'Country', 'Status', ''].map(h => (
                <th key={h} style={{ padding: '10px 12px', fontSize: '0.76rem', fontWeight: 700, color: '#5a4420', textAlign: 'left' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(c => (
              <CustomerRow key={c.id} c={c} onEdit={cust => setModal(cust)} />
            ))}
            {!loading && filtered.length === 0 && (
              <tr><td colSpan={6} style={{ padding: '20px', textAlign: 'center', color: '#9a8060', fontSize: '0.88rem' }}>No customers found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {modal && (
        <CustomerModal item={modal} onClose={() => setModal(null)} onSaved={handleSave} />
      )}
    </div>
  );
}
