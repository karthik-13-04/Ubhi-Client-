'use client';

import { useState } from 'react';
import { useAdminApi } from '../useAdminApi';
import AdminModal from '../AdminModal';
import StatusBadge from '../StatusBadge';
import { FormInput, FormTextarea, FormToggle, FormActions } from '../FormFields';

function ArticleRow({ article, onEdit, onDelete }) {
  return (
    <div style={{
      background: '#fff', borderRadius: '16px', padding: '16px 20px',
      boxShadow: '0 2px 10px rgba(80,50,10,0.07)',
      display: 'flex', alignItems: 'center', gap: '16px',
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
          <strong style={{ fontSize: '0.95rem', color: '#2a1e08' }}>{article.title}</strong>
          <StatusBadge status={article.published ? 'Published' : 'Draft'} />
        </div>
        {article.author && (
          <span style={{ fontSize: '0.78rem', color: '#9a8060' }}>By {article.author}</span>
        )}
        {article.body && (
          <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: '#7a6040', lineHeight: 1.5 }}>
            {article.body.slice(0, 120)}{article.body.length > 120 ? '…' : ''}
          </p>
        )}
      </div>
      <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
        <button onClick={() => onEdit(article)} style={btnSm('#a6741f')}>Edit</button>
        <button onClick={() => onDelete(article.id)} style={btnSm('#a02828')}>Delete</button>
      </div>
    </div>
  );
}

const btnSm = color => ({
  border: `1px solid ${color}40`, borderRadius: '8px', background: `${color}10`,
  color, cursor: 'pointer', padding: '5px 14px', fontSize: '0.78rem', fontWeight: 600,
});

function ArticleModal({ item, onClose, onSaved }) {
  const isNew = !item?.id;
  const [f, setF] = useState({
    title: item?.title || '',
    slug: item?.slug || '',
    body: item?.body || '',
    author: item?.author || '',
    published: item?.published ?? false,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const set = k => e => setF(prev => ({ ...prev, [k]: e.target.value }));

  // Auto-generate slug from title when creating new
  function handleTitle(e) {
    const title = e.target.value;
    setF(prev => ({
      ...prev,
      title,
      slug: isNew
        ? title.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
        : prev.slug,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault(); setSaving(true); setError('');
    try { await onSaved(f); onClose(); }
    catch (err) { setError(err.message); setSaving(false); }
  }

  return (
    <AdminModal title={isNew ? 'New Article' : 'Edit Article'} onClose={onClose} width={640}>
      <form onSubmit={handleSubmit}>
        <FormInput label="Title *" value={f.title} onChange={handleTitle} required />
        <FormInput label="Slug (URL path)" value={f.slug} onChange={set('slug')} placeholder="auto-generated from title" />
        <FormInput label="Author" value={f.author} onChange={set('author')} placeholder="Chelsea Ubhi Kaur" />
        <FormTextarea label="Body" value={f.body} onChange={set('body')} rows={10} placeholder="Write your article here…" />
        <FormToggle label="Published (visible in Art & Journal)" checked={f.published} onChange={v => setF(p => ({ ...p, published: v }))} />
        {error && <p style={{ color: '#a02828', fontSize: '0.82rem' }}>{error}</p>}
        <FormActions onCancel={onClose} submitting={saving} submitLabel={isNew ? 'Publish Article' : 'Save Changes'} />
      </form>
    </AdminModal>
  );
}

export default function JournalTab() {
  const { data, loading, error, refresh, post, patch, remove } = useAdminApi('/api/journal/all');
  const [modal, setModal] = useState(null);
  const [search, setSearch] = useState('');
  const [err, setErr] = useState('');

  const all = Array.isArray(data) ? data : [];
  const filtered = search
    ? all.filter(a => `${a.title} ${a.author} ${a.body || ''}`.toLowerCase().includes(search.toLowerCase()))
    : all;

  const published = all.filter(a => a.published).length;

  async function handleSave(formData) {
    if (modal.mode === 'new') await post(formData);
    else await patch(modal.item.id, formData);
    setModal(null); refresh();
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this article?')) return;
    setErr('');
    try { await remove(id); } catch (e) { setErr(e.message); }
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.1rem', color: '#3a2a10', fontWeight: 700 }}>Art & Journal</h2>
          <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#7a6040' }}>
            {all.length} articles · {published} published
          </p>
        </div>
        <button
          onClick={() => setModal({ mode: 'new', item: null })}
          style={{ padding: '9px 20px', borderRadius: '12px', border: 'none', background: '#a6741f', color: '#fff', cursor: 'pointer', fontSize: '0.88rem', fontWeight: 600 }}
        >+ New Article</button>
      </div>

      <input
        type="text" value={search} onChange={e => setSearch(e.target.value)}
        placeholder="Search title, author, body…"
        style={{ width: '100%', padding: '9px 14px', borderRadius: '12px', border: '1px solid rgba(166,116,31,0.25)', background: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', marginBottom: '16px', boxSizing: 'border-box' }}
      />

      {loading && <p style={{ color: '#9a8060' }}>Loading…</p>}
      {(error || err) && <p style={{ color: '#a02828', fontSize: '0.85rem' }}>{error || err}</p>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filtered.map(a => (
          <ArticleRow key={a.id} article={a}
            onEdit={i => setModal({ mode: 'edit', item: i })}
            onDelete={handleDelete}
          />
        ))}
        {!loading && filtered.length === 0 && (
          <p style={{ color: '#9a8060', fontSize: '0.88rem' }}>No articles found.</p>
        )}
      </div>

      {modal && (
        <ArticleModal item={modal.item} onClose={() => setModal(null)} onSaved={handleSave} />
      )}
    </div>
  );
}
