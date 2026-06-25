'use client';

import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

const STORE_KEY = 'ubhi-site-profile-v2';
const LEGACY_TEXT_KEY = 'ubhi-text-content';
const SITE_SETTINGS_KEY = 'ubhi-site-settings';

const PAGE_OPTIONS = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/workshops', 'Workshops'],
  ['/shop', 'Shop'],
  ['/snail-mail', 'Snail Mail'],
  ['/art', 'Art Portfolio'],
  ['/journal', 'Art & Journal'],
  ['/contact', 'Contact'],
  ['/faq', 'FAQ'],
  ['/shipping', 'Shipping'],
  ['/refunds', 'Returns & Refunds'],
  ['/privacy', 'Privacy'],
  ['/cookies', 'Cookies'],
  ['/terms', 'Terms'],
];

const PAGE_MAP = Object.fromEntries(
  PAGE_OPTIONS.map(([route]) => [
    route,
    route === '/' ? 'page-home' : `page-${route.replace(/^\//, '')}`,
  ])
);

const FONT_OPTIONS = [
  { value: '', label: 'Keep original font' },
  { value: 'Fraunces, serif', label: 'Fraunces' },
  { value: '"EB Garamond", serif', label: 'EB Garamond' },
  { value: '"Caveat", cursive', label: 'Caveat' },
  { value: '"Gochi Hand", cursive', label: 'Gochi Hand' },
];

const STYLE_FIELDS = [
  ['fontFamily', 'Font'],
  ['fontSize', 'Font size'],
  ['fontWeight', 'Weight'],
  ['color', 'Color'],
  ['lineHeight', 'Line height'],
  ['letterSpacing', 'Letter spacing'],
  ['textAlign', 'Align'],
  ['textTransform', 'Transform'],
];

function readStore() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORE_KEY)) || {};
    const settings = JSON.parse(window.localStorage.getItem(SITE_SETTINGS_KEY)) || {};
    const studio = settings.profileStudio || {};
    return {
      text: parsed.text || JSON.parse(window.localStorage.getItem(LEGACY_TEXT_KEY)) || {},
      styles: parsed.styles || studio.styles || {},
      sectionStyles: parsed.sectionStyles || studio.sectionStyles || {},
    };
  } catch {
    return { text: {}, styles: {}, sectionStyles: {} };
  }
}

function writeStore(nextStore) {
  window.localStorage.setItem(STORE_KEY, JSON.stringify(nextStore));
  window.localStorage.setItem(LEGACY_TEXT_KEY, JSON.stringify(nextStore.text || {}));
  try {
    const settings = JSON.parse(window.localStorage.getItem(SITE_SETTINGS_KEY)) || {};
    settings.profileStudio = {
      styles: nextStore.styles || {},
      sectionStyles: nextStore.sectionStyles || {},
    };
    window.localStorage.setItem(SITE_SETTINGS_KEY, JSON.stringify(settings));
    if (window.ubhiSyncPush) {
      window.ubhiSyncPush('text-content', nextStore.text || {});
      window.ubhiSyncPush('site-settings', settings);
    }
  } catch {}
  window.dispatchEvent(new Event('ubhi:site-profile-updated'));
}

function hash(text) {
  let h = 5381;
  let i = text.length;
  while (i) h = (h * 33) ^ text.charCodeAt(--i);
  return (h >>> 0).toString(36);
}

function escapeHtml(text) {
  return String(text == null ? '' : text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function decodeStoredHtml(text) {
  return String(text || '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&');
}

function encodeStoredText(text) {
  return escapeHtml(text).replace(/\n/g, '<br>');
}

function buildKeyFactory(routeId) {
  const used = new Set();
  return (tag, text) => {
    const base = `${routeId}|${tag}|${hash(text.trim())}`;
    let key = base;
    let count = 1;
    while (used.has(key)) {
      key = `${base}|${count++}`;
    }
    used.add(key);
    return key;
  };
}

function isEditable(el) {
  if (!el || !(el.textContent || '').trim()) return false;
  if (el.closest('#page-admin,#page-account,.modal,[data-noedit],[contenteditable],script,style')) return false;
  if (el.closest('[id$="-list"],[id$="-grid"],[id$="-track"],[id$="-table-body"],.product-card,.workshop-card,.journal-card,.artfolio-card,.art-card,.gallery-item,.snail-photo,.snail-review,.preview-card,.member-card')) return false;
  if (el.children.length === 0) return true;
  return /^H[1-6]$/.test(el.tagName) || el.classList.contains('eyebrow');
}

function sectionLabel(el, fallback) {
  if (!el) return fallback;
  const heading = el.querySelector('h1,h2,h3,h4,h5,h6,.eyebrow');
  if (heading && heading.textContent.trim()) return heading.textContent.trim();
  if (el.className && typeof el.className === 'string') {
    return el.className.split(/\s+/)[0].replace(/[-_]/g, ' ');
  }
  return fallback;
}

function parseSectionsFromHtml(route, html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const routeId = PAGE_MAP[route];
  const makeKey = buildKeyFactory(routeId);
  const sectionMap = new Map();
  const sections = [];
  let sectionIndex = 0;

  doc.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,blockquote,summary,figcaption,.eyebrow').forEach((el) => {
    if (!isEditable(el)) return;
    const text = (el.textContent || '').trim();
    if (!text) return;

    const owner = el.closest('section,article,.hero,.page-hero,.about,.contact-grid,.faq-list,.faq-item,.story-block,.journal-shell,.page');
    if (!sectionMap.has(owner)) {
      sectionIndex += 1;
      const title = sectionLabel(owner, `Section ${sectionIndex}`);
      const sectionKey = `${routeId}|section|${sectionIndex}|${hash(title)}`;
      const entry = { key: sectionKey, title, fields: [] };
      sectionMap.set(owner, entry);
      sections.push(entry);
    }

    sectionMap.get(owner).fields.push({
      key: makeKey(el.tagName.toLowerCase(), text),
      label: el.tagName.toLowerCase(),
      original: text,
    });
  });

  return sections;
}

function SectionStyleControls({ value, onChange }) {
  return (
    <div className="admin-profile-style-grid">
      <label className="admin-profile-style-field">
        <span>Font</span>
        <select value={value.fontFamily || ''} onChange={(e) => onChange('fontFamily', e.target.value)}>
          {FONT_OPTIONS.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label className="admin-profile-style-field">
        <span>Color</span>
        <input type="color" value={value.color || '#3a2c20'} onChange={(e) => onChange('color', e.target.value)} />
      </label>
      <label className="admin-profile-style-field">
        <span>Font size</span>
        <input
          type="text"
          placeholder="32px"
          value={value.fontSize || ''}
          onChange={(e) => onChange('fontSize', e.target.value)}
        />
      </label>
      <label className="admin-profile-style-field">
        <span>Weight</span>
        <input
          type="text"
          placeholder="400"
          value={value.fontWeight || ''}
          onChange={(e) => onChange('fontWeight', e.target.value)}
        />
      </label>
      <label className="admin-profile-style-field">
        <span>Line height</span>
        <input
          type="text"
          placeholder="1.5"
          value={value.lineHeight || ''}
          onChange={(e) => onChange('lineHeight', e.target.value)}
        />
      </label>
      <label className="admin-profile-style-field">
        <span>Letter spacing</span>
        <input
          type="text"
          placeholder="0.02em"
          value={value.letterSpacing || ''}
          onChange={(e) => onChange('letterSpacing', e.target.value)}
        />
      </label>
      <label className="admin-profile-style-field">
        <span>Align</span>
        <select value={value.textAlign || ''} onChange={(e) => onChange('textAlign', e.target.value)}>
          <option value="">Keep original</option>
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </label>
      <label className="admin-profile-style-field">
        <span>Transform</span>
        <select value={value.textTransform || ''} onChange={(e) => onChange('textTransform', e.target.value)}>
          <option value="">Keep original</option>
          <option value="none">None</option>
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="capitalize">Capitalize</option>
        </select>
      </label>
    </div>
  );
}

export default function AdminProfileStudio() {
  const [target, setTarget] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState('/');
  const [sections, setSections] = useState([]);
  const [store, setStore] = useState({ text: {}, styles: {}, sectionStyles: {} });
  const [message, setMessage] = useState('');
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewTick, setPreviewTick] = useState(0);
  const [loadTick, setLoadTick] = useState(0);

  useEffect(() => {
    setTarget(document.getElementById('admin-profile-studio-root'));
    setStore(readStore());
  }, []);

  useEffect(() => {
    if (!target) return;
    let cancelled = false;
    setMessage('Loading page sections...');
    fetch(`/api/page-fragment?page=${encodeURIComponent(PAGE_MAP[selectedRoute])}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('load failed'))))
      .then((payload) => {
        if (cancelled) return;
        setSections(parseSectionsFromHtml(selectedRoute, payload.html));
        setMessage('Edit section text and styling, then save to publish it live.');
      })
      .catch(() => {
        if (cancelled) return;
        setSections([]);
        setMessage('Could not load this page.');
      });
    return () => {
      cancelled = true;
    };
  }, [selectedRoute, target, loadTick]);

  useEffect(() => {
    if (!previewOpen) return;
    const iframe = document.getElementById('admin-profile-preview-frame');
    if (!iframe) return;

    const sendPreview = () => {
      iframe.contentWindow?.postMessage(
        {
          type: 'ubhi-preview-profile',
          profile: store,
        },
        '*'
      );
    };

    iframe.addEventListener('load', sendPreview);
    const timeout = setTimeout(sendPreview, 500);
    return () => {
      iframe.removeEventListener('load', sendPreview);
      clearTimeout(timeout);
    };
  }, [previewOpen, previewTick, store]);

  const summary = useMemo(() => {
    const option = PAGE_OPTIONS.find(([route]) => route === selectedRoute);
    const name = option ? option[1] : selectedRoute;
    return `${name} has ${sections.length} editable sections ready for typography, color, size, spacing, alignment, and copy updates.`;
  }, [selectedRoute, sections]);

  function updateText(key, value, original) {
    setStore((current) => {
      const next = {
        ...current,
        text: { ...current.text },
      };
      if (!value.trim() || value.trim() === original.trim()) delete next.text[key];
      else next.text[key] = encodeStoredText(value);
      return next;
    });
  }

  function updateSectionStyle(sectionKey, field, value) {
    setStore((current) => {
      const nextSection = {
        ...(current.sectionStyles[sectionKey] || {}),
        [field]: value,
      };
      return {
        ...current,
        sectionStyles: {
          ...current.sectionStyles,
          [sectionKey]: nextSection,
        },
      };
    });
  }

  function saveProfile() {
    writeStore(store);
    setMessage('Saved. Your live site now uses these section changes.');
  }

  function openPreview() {
    setPreviewOpen(true);
    setPreviewTick((tick) => tick + 1);
  }

  const studio = target ? createPortal(
    <div className="admin-profile-studio">
      <div className="admin-card-header-actions">
        <div>
          <h4>Page Content Studio</h4>
          <p className="admin-profile-copy">
            Advanced section-by-section editing for page copy, font, color, size, spacing, and live preview.
          </p>
        </div>
        <div className="admin-profile-actions">
          <button type="button" className="button button-secondary" onClick={() => setLoadTick((tick) => tick + 1)}>
            Reload page
          </button>
          <button type="button" className="button button-secondary" onClick={openPreview}>
            Preview
          </button>
          <button type="button" className="button button-primary" onClick={saveProfile}>
            Save changes
          </button>
        </div>
      </div>

      <div className="admin-profile-grid">
        <div className="admin-form-group">
          <label htmlFor="admin-profile-page-next">Site page</label>
          <select
            id="admin-profile-page-next"
            value={selectedRoute}
            onChange={(e) => setSelectedRoute(e.target.value)}
          >
            {PAGE_OPTIONS.map(([route, label]) => (
              <option key={route} value={route}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div className="admin-profile-summary">
          <strong>{summary}</strong>
          <br />
          Smooth changes are applied to the live site after save, and the preview shows the selected page with your current draft.
        </div>
      </div>

      <div className="admin-profile-editor-head">
        <h5>Sections</h5>
        <span className="admin-profile-status">{message}</span>
      </div>

      <div className="admin-profile-sections">
        {sections.length ? sections.map((section, index) => {
          const sectionStyle = store.sectionStyles[section.key] || {};
          return (
            <details key={section.key} className="admin-profile-section" open={index === 0}>
              <summary>
                <strong>{section.title}</strong>
                <span>{section.fields.length} fields</span>
              </summary>
              <div className="admin-profile-section-body">
                <SectionStyleControls
                  value={sectionStyle}
                  onChange={(field, value) => updateSectionStyle(section.key, field, value)}
                />
                {section.fields.map((field, fieldIndex) => (
                  <div key={field.key} className="admin-profile-field">
                    <label>{field.label} {fieldIndex + 1}</label>
                    <textarea
                      value={decodeStoredHtml(store.text[field.key] || field.original)}
                      onChange={(e) => updateText(field.key, e.target.value, field.original)}
                      placeholder={field.original}
                    />
                  </div>
                ))}
              </div>
            </details>
          );
        }) : <div className="admin-profile-empty">No sections were found for this page yet.</div>}
      </div>

      {previewOpen ? (
        <div className="admin-profile-preview-shell">
          <div className="admin-card-header-actions">
            <div>
              <h5>Live Preview</h5>
              <p className="admin-profile-copy">This preview uses your current draft before publishing.</p>
            </div>
            <button type="button" className="button button-secondary" onClick={() => setPreviewOpen(false)}>
              Close preview
            </button>
          </div>
          <iframe
            key={`${selectedRoute}-${previewTick}`}
            id="admin-profile-preview-frame"
            className="admin-profile-preview-frame"
            src={selectedRoute}
            title="Site preview"
          />
        </div>
      ) : null}
    </div>,
    target
  ) : null;

  return studio;
}
