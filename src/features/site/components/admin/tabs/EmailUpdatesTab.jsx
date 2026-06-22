'use client';

import { useState } from 'react';
import { useAdminApi } from '../useAdminApi';

const td = { padding: '10px 12px', fontSize: '0.83rem', color: '#3a2a10', verticalAlign: 'middle' };
const btnSm = (color) => ({
  border: `1px solid ${color}40`, borderRadius: '8px', background: `${color}10`,
  color, cursor: 'pointer', padding: '3px 10px', fontSize: '0.75rem', fontWeight: 600,
});

function UpdateRow({ sub, onDelete }) {
  const dateStr = new Date(sub.created_at || 0).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  return (
    <tr style={{ borderBottom: '1px solid rgba(166,116,31,0.08)' }}>
      <td style={td}><a href={`mailto:${sub.email}`} style={{ color: '#a6741f', textDecoration: 'none' }}>{sub.email}</a></td>
      <td style={td}>{dateStr}</td>
      <td style={{ ...td, textAlign: 'right' }}>
        <button onClick={() => onDelete(sub.id)} style={btnSm('#a02828')}>Remove</button>
      </td>
    </tr>
  );
}

export default function EmailUpdatesTab() {
  const { data, loading, error, refresh, remove } = useAdminApi('/api/updates/all');
  const [search, setSearch] = useState('');
  const [err, setErr] = useState('');

  const all = Array.isArray(data) ? data : [];
  const filtered = search
    ? all.filter(s => s.email?.toLowerCase().includes(search.toLowerCase()))
    : all;

  async function handleDelete(id) {
    if (!window.confirm('Remove this email from the mailing list?')) return;
    setErr('');
    try { await remove(id); } catch (e) { setErr(e.message); }
  }

  function handleExport() {
    if (all.length === 0) return;
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Email,Date Subscribed\n"
      + all.map(s => `${s.email},${new Date(s.created_at || 0).toISOString().split('T')[0]}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `email-subscribers-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.1rem', color: '#3a2a10', fontWeight: 700 }}>Email Updates</h2>
          <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#7a6040' }}>
            {all.length} subscribers from the website footer.
          </p>
        </div>
        <button
          onClick={handleExport}
          disabled={all.length === 0}
          style={{ padding: '9px 20px', borderRadius: '12px', border: '1px solid #a6741f', background: 'rgba(166,116,31,0.08)', color: '#a6741f', cursor: all.length === 0 ? 'not-allowed' : 'pointer', fontSize: '0.88rem', fontWeight: 600, opacity: all.length === 0 ? 0.5 : 1 }}
        >📥 Export CSV</button>
      </div>

      <input
        type="text" value={search} onChange={e => setSearch(e.target.value)}
        placeholder="Search email…"
        style={{ width: '100%', padding: '9px 14px', borderRadius: '12px', border: '1px solid rgba(166,116,31,0.25)', background: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', marginBottom: '16px', boxSizing: 'border-box' }}
      />

      {loading && <p style={{ color: '#9a8060' }}>Loading…</p>}
      {(error || err) && <p style={{ color: '#a02828', fontSize: '0.85rem' }}>{error || err}</p>}

      <div style={{ overflowX: 'auto', borderRadius: '16px', boxShadow: '0 2px 14px rgba(80,50,10,0.07)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '16px', overflow: 'hidden' }}>
          <thead>
            <tr style={{ background: 'rgba(166,116,31,0.06)' }}>
              {['Email', 'Date Subscribed', ''].map(h => (
                <th key={h} style={{ padding: '10px 12px', fontSize: '0.76rem', fontWeight: 700, color: '#5a4420', textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(s => (
              <UpdateRow key={s.id} sub={s} onDelete={handleDelete} />
            ))}
            {!loading && filtered.length === 0 && (
              <tr><td colSpan={3} style={{ padding: '20px', textAlign: 'center', color: '#9a8060', fontSize: '0.88rem' }}>No subscribers found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
