'use client';

import { useState } from 'react';
import { useAdminApi, uploadFile } from '../useAdminApi';
import AdminModal from '../AdminModal';
import StatusBadge from '../StatusBadge';
import { FormInput, FormTextarea, FormToggle, FormActions } from '../FormFields';

function ProductCard({ item, onEdit, onDelete }) {
  return (
    <div style={{
      background: '#fff', borderRadius: '18px', overflow: 'hidden',
      boxShadow: '0 2px 14px rgba(80,50,10,0.08)', display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ aspectRatio: '1', overflow: 'hidden', background: '#f0e8d5', position: 'relative' }}>
        {item.image ? (
          <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>🛍</div>
        )}
        {item.stock === 0 && (
          <span style={{
            position: 'absolute', top: '8px', left: '8px',
            background: 'rgba(180,60,60,0.88)', color: '#fff',
            fontSize: '0.68rem', fontWeight: 700, padding: '2px 8px', borderRadius: '20px',
          }}>Out of stock</span>
        )}
        {item.published && (
          <span style={{
            position: 'absolute', top: '8px', right: '8px',
            background: 'rgba(45,139,124,0.9)', color: '#fff',
            fontSize: '0.68rem', fontWeight: 700, padding: '2px 8px', borderRadius: '20px',
          }}>Live</span>
        )}
      </div>
      <div style={{ padding: '14px 16px', flex: 1 }}>
        <strong style={{ fontSize: '0.92rem', color: '#2a1e08', display: 'block' }}>{item.name}</strong>
        {item.blurb && (
          <p style={{ margin: '5px 0 0', fontSize: '0.78rem', color: '#7a6040', lineHeight: 1.4 }}>
            {item.blurb.slice(0, 80)}{item.blurb.length > 80 ? '…' : ''}
          </p>
        )}
        <div style={{ display: 'flex', gap: '8px', marginTop: '10px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#a6741f' }}>£{(item.price || 0).toFixed(2)}</span>
          <span style={{
            fontSize: '0.75rem', padding: '2px 8px', borderRadius: '20px', fontWeight: 600,
            background: item.stock > 0 ? 'rgba(45,139,124,0.1)' : 'rgba(180,60,60,0.1)',
            color: item.stock > 0 ? '#1d6e62' : '#a02828',
          }}>Stock: {item.stock ?? 0}</span>
        </div>
      </div>
      <div style={{
        display: 'flex', gap: '8px', padding: '8px 16px 14px',
        borderTop: '1px solid rgba(166,116,31,0.08)',
      }}>
        <button onClick={() => onEdit(item)} style={btnS('#a6741f', 'rgba(166,116,31,0.1)')}>Edit</button>
        <button onClick={() => onDelete(item.id)} style={btnS('#a02828', 'rgba(180,60,60,0.08)')}>Delete</button>
      </div>
    </div>
  );
}

function btnS(color, bg) {
  return { flex: 1, padding: '6px 0', border: `1px solid ${color}30`, borderRadius: '8px', background: bg, color, cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600 };
}

function ProductModal({ item, onClose, onSaved }) {
  const isNew = !item?.id;
  const [fields, setFields] = useState({
    name: item?.name || '',
    blurb: item?.blurb || '',
    price: item?.price ?? '',
    stock: item?.stock ?? '',
    image: item?.image || '',
    published: item?.published ?? false,
  });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const set = k => e => setFields(f => ({ ...f, [k]: e.target.value }));

  async function handleFile(e) {
    const file = e.target.files?.[0]; if (!file) return;
    setUploading(true);
    try { const r = await uploadFile(file, { kind: 'shop', entityType: 'shop', entityId: item?.id || 'new' }); setFields(f => ({ ...f, image: r.url })); }
    catch (err) { setError(err.message); } finally { setUploading(false); }
  }

  async function handleSubmit(e) {
    e.preventDefault(); setSaving(true); setError('');
    try {
      await onSaved({ ...fields, price: parseFloat(fields.price) || 0, stock: parseInt(fields.stock) || 0 });
      onClose();
    } catch (err) { setError(err.message); setSaving(false); }
  }

  return (
    <AdminModal title={isNew ? 'Add Product' : 'Edit Product'} onClose={onClose} width={580}>
      <form onSubmit={handleSubmit}>
        <FormInput label="Product name *" value={fields.name} onChange={set('name')} required />
        <FormTextarea label="Description" value={fields.blurb} onChange={set('blurb')} rows={3} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <FormInput label="Price (£)" type="number" min="0" step="0.01" value={fields.price} onChange={set('price')} />
          <FormInput label="Stock quantity" type="number" min="0" value={fields.stock} onChange={set('stock')} />
        </div>
        <FormInput label="Image URL" value={fields.image} onChange={set('image')} placeholder="https://…" />
        <div style={{ marginBottom: '14px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#5a4420', display: 'block', marginBottom: '5px' }}>
            {uploading ? 'Uploading…' : 'Upload Image'}
          </span>
          <input type="file" accept="image/*" disabled={uploading} onChange={handleFile} />
        </div>
        {fields.image && (
          <img src={fields.image} alt="" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '10px', marginBottom: '14px' }} />
        )}
        <FormToggle label="Published (visible in shop)" checked={fields.published} onChange={v => setFields(f => ({ ...f, published: v }))} />
        {error && <p style={{ color: '#a02828', fontSize: '0.82rem' }}>{error}</p>}
        <FormActions onCancel={onClose} submitting={saving} submitLabel={isNew ? 'Create Product' : 'Save Changes'} />
      </form>
    </AdminModal>
  );
}

export default function ShopTab() {
  const { data, loading, error, refresh, post, patch, remove } = useAdminApi('/api/shop/all');
  const [modal, setModal] = useState(null);
  const [err, setErr] = useState('');

  const items = Array.isArray(data) ? data : [];
  const published = items.filter(i => i.published).length;
  const outOfStock = items.filter(i => (i.stock ?? 0) === 0).length;

  async function handleSave(formData) {
    if (modal.mode === 'new') await post(formData);
    else await patch(modal.item.id, formData);
    setModal(null); refresh();
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this product?')) return;
    setErr('');
    try { await remove(id); } catch (e) { setErr(e.message); }
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.1rem', color: '#3a2a10', fontWeight: 700 }}>Shop</h2>
          <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#7a6040' }}>
            {items.length} products · {published} live · {outOfStock} out of stock
          </p>
        </div>
        <button
          onClick={() => setModal({ mode: 'new', item: null })}
          style={{ padding: '9px 20px', borderRadius: '12px', border: 'none', background: '#a6741f', color: '#fff', cursor: 'pointer', fontSize: '0.88rem', fontWeight: 600 }}
        >+ Add Product</button>
      </div>

      {loading && <p style={{ color: '#9a8060' }}>Loading…</p>}
      {(error || err) && <p style={{ color: '#a02828', fontSize: '0.85rem' }}>{error || err}</p>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
        {items.map(item => (
          <ProductCard
            key={item.id}
            item={item}
            onEdit={i => setModal({ mode: 'edit', item: i })}
            onDelete={handleDelete}
          />
        ))}
        {!loading && items.length === 0 && (
          <p style={{ color: '#9a8060', fontSize: '0.88rem', gridColumn: '1/-1' }}>No products yet. Add your first!</p>
        )}
      </div>

      {modal && (
        <ProductModal item={modal.item} onClose={() => setModal(null)} onSaved={handleSave} />
      )}
    </div>
  );
}
