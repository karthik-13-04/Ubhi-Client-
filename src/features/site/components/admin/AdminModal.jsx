'use client';

import { useEffect, useRef } from 'react';

export default function AdminModal({ title, onClose, children, width = 560 }) {
  const overlayRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(30,22,10,0.55)',
        backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div style={{
        background: '#fdf7ee',
        borderRadius: '20px',
        boxShadow: '0 24px 64px rgba(80,50,10,0.22)',
        width: `${width}px`,
        maxWidth: '100%',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '18px 24px 14px',
          borderBottom: '1px solid rgba(166,116,31,0.14)',
          flexShrink: 0,
        }}>
          <strong style={{ fontSize: '1.05rem', color: '#3a2a10' }}>{title}</strong>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '1.3rem', color: '#7a6040', lineHeight: 1, padding: '2px 6px',
              borderRadius: '8px',
            }}
          >×</button>
        </div>
        {/* Body */}
        <div style={{ padding: '20px 24px', overflowY: 'auto', flex: 1 }}>
          {children}
        </div>
      </div>
    </div>
  );
}
