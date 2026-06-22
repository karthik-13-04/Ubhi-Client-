'use client';

import { useState } from 'react';
import { useAdminApi, uploadFile } from '../useAdminApi';
import AdminModal from '../AdminModal';
import { FormInput, FormToggle, FormActions } from '../FormFields';

function GalleryCard({ item, onEdit, onDelete }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 2px 12px rgba(80,50,10,0.08)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: '#f0e8d5', position: 'relative' }}>
        {item.image ? (
          <img
            src={item.image}
            alt={item.caption || 'Gallery image'}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div style={{
            width: '100%', height: '100%', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            color: '#9a8060', fontSize: '2rem',
          }}>🖼</div>
        )}
        {item.published && (
          <span style={{
            position: 'absolute', top: '8px', right: '8px',
            background: 'rgba(45,139,124,0.9)', color: '#fff',
            fontSize: '0.68rem', fontWeight: 700, padding: '2px 8px', borderRadius: '20px',
          }}>Live</span>
        )}
      </div>
      <div style={{ padding: '12px 14px', flex: 1 }}>
        <p style={{ margin: 0, fontSize: '0.83rem', color: '#3a2a10', fontWeight: 500, minHeight: '20px' }}>
          {item.caption || <span style={{ color: '#9a8060', fontStyle: 'italic' }}>No caption</span>}
        </p>
      </div>
      <div style={{
        display: 'flex', gap: '8px', padding: '8px 14px 14px',
        borderTop: '1px solid rgba(166,116,31,0.08)',
      }}>
        <button onClick={() => onEdit(item)} style={btnStyle('#a6741f', 'rgba(166,116,31,0.1)')}>Edit</button>
        <button onClick={() => onDelete(item.id)} style={btnStyle('#a02828', 'rgba(180,60,60,0.08)')}>Delete</button>
      </div>
    </div>
  );
}

function btnStyle(color, bg) {
  return {
    flex: 1, padding: '6px 0', border: `1px solid ${color}30`, borderRadius: '8px',
    background: bg, color, cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600,
  };
}

function GalleryModal({ item, onClose, onSaved }) {
  const isNew = !item?.id;
  const [caption, setCaption] = useState(item?.caption || '');
  const [imageUrl, setImageUrl] = useState(item?.image || '');
  const [published, setPublished] = useState(item?.published ?? false);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError('');
    try {
      const result = await uploadFile(file, { kind: 'gallery', entityType: 'gallery', entityId: item?.id || 'new' });
      setImageUrl(result.url);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      await onSaved({ caption, image: imageUrl, published });
      onClose();
    } catch (err) {
      setError(err.message);
      setSaving(false);
    }
  }

  return (
    <AdminModal title={isNew ? 'Add Photo' : 'Edit Photo'} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        {imageUrl && (
          <img src={imageUrl} alt="Preview" style={{
            width: '100%', borderRadius: '12px', maxHeight: '220px',
            objectFit: 'cover', marginBottom: '16px',
          }} />
        )}
        <FormInput
          label="Image URL"
          type="text"
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
          placeholder="https://..."
        />
        <div style={{ marginBottom: '14px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#5a4420', display: 'block', marginBottom: '5px' }}>
            {uploading ? 'Uploading…' : 'Upload Image to S3'}
          </span>
          <input type="file" accept="image/*" disabled={uploading} onChange={handleFile} />
        </div>
        <FormInput
          label="Caption"
          type="text"
          value={caption}
          onChange={e => setCaption(e.target.value)}
          placeholder="Describe this image…"
        />
        <FormToggle label="Published (visible on site)" checked={published} onChange={setPublished} />
        {error && <p style={{ color: '#a02828', fontSize: '0.82rem' }}>{error}</p>}
        <FormActions onCancel={onClose} submitting={saving} />
      </form>
    </AdminModal>
  );
}

export default function GalleryTab() {
  const { data, loading, error, refresh, post, patch, remove } = useAdminApi('/api/gallery/all');
  const [modal, setModal] = useState(null); // null | { mode: 'new' | 'edit', item }
  const [deleteErr, setDeleteErr] = useState('');

  const items = Array.isArray(data) ? data : [];

  async function handleSave(formData) {
    if (modal.mode === 'new') {
      await post(formData);
    } else {
      await patch(modal.item.id, formData);
    }
    setModal(null);
    refresh();
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this photo?')) return;
    setDeleteErr('');
    try { await remove(id); } catch (err) { setDeleteErr(err.message); }
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.1rem', color: '#3a2a10', fontWeight: 700 }}>Gallery</h2>
          <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#7a6040' }}>
            {items.length} photo{items.length !== 1 ? 's' : ''}
          </p>
        </div>
        <button
          onClick={() => setModal({ mode: 'new', item: null })}
          style={{
            padding: '9px 20px', borderRadius: '12px', border: 'none',
            background: '#a6741f', color: '#fff', cursor: 'pointer',
            fontSize: '0.88rem', fontWeight: 600,
          }}
        >+ Add Photo</button>
      </div>

      {loading && <p style={{ color: '#9a8060' }}>Loading…</p>}
      {error && <p style={{ color: '#a02828', fontSize: '0.85rem' }}>{error}</p>}
      {deleteErr && <p style={{ color: '#a02828', fontSize: '0.85rem' }}>{deleteErr}</p>}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
      }}>
        {items.map(item => (
          <GalleryCard
            key={item.id}
            item={item}
            onEdit={i => setModal({ mode: 'edit', item: i })}
            onDelete={handleDelete}
          />
        ))}
        {!loading && items.length === 0 && (
          <p style={{ color: '#9a8060', fontSize: '0.88rem', gridColumn: '1/-1' }}>
            No gallery photos yet. Add your first one!
          </p>
        )}
      </div>

      {modal && (
        <GalleryModal
          item={modal.item}
          onClose={() => setModal(null)}
          onSaved={handleSave}
        />
      )}
    </div>
  );
}
