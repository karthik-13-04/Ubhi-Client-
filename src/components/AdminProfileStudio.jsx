'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
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

const PREVIEW_EDITABLE_SELECTOR = '[data-profile-key]';
const EDITABLE_SELECTOR =
  'h1,h2,h3,h4,h5,h6,p,li,blockquote,summary,figcaption,.eyebrow,' +
  'a,button,label,span,strong,em,.nav-links a,.nav-cta,.site-footer a,.site-footer h4';
const EXCLUDE_SELECTOR =
  '#page-admin,#page-account,.modal,[data-noedit],[contenteditable],script,style,' +
  '[id$="-list"],[id$="-grid"],[id$="-track"],[id$="-table-body"],' +
  '.product-card,.workshop-card,.journal-card,.artfolio-card,.art-card,' +
  '.gallery-item,.snail-photo,.snail-review,.preview-card,.member-card';

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

function hasBlockChildren(el) {
  return Array.from(el.children).some((child) => {
    const tag = child.tagName;
    return tag && !['A', 'B', 'BR', 'EM', 'I', 'SMALL', 'SPAN', 'STRONG', 'SUB', 'SUP'].includes(tag);
  });
}

function isEditable(el) {
  if (!el || !(el.textContent || '').trim()) return false;
  if (el.closest(EXCLUDE_SELECTOR)) return false;
  if (el.querySelector(EXCLUDE_SELECTOR)) return false;
  if (!hasBlockChildren(el)) return true;
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

  doc.querySelectorAll(EDITABLE_SELECTOR).forEach((el) => {
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
  const iframeRef = useRef(null);
  const previewSyncRef = useRef({ skipNextStorePush: false, cleanup: null, activeKey: null });

  useEffect(() => {
    setTarget(document.getElementById('admin-profile-studio-root'));
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        if (data && (data.text || data.styles)) {
          setStore({
            text: data.text || {},
            styles: data.styles || {},
            sectionStyles: data.sectionStyles || {},
          });
        } else {
          setStore(readStore()); // fallback
        }
      })
      .catch(() => setStore(readStore()));
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
    const iframe = iframeRef.current;
    if (!iframe) return;

    const sendPreview = () => {
      if (previewSyncRef.current.skipNextStorePush) {
        previewSyncRef.current.skipNextStorePush = false;
        return;
      }
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

  useEffect(() => {
    if (!previewOpen) return undefined;
    const iframe = iframeRef.current;
    if (!iframe) return undefined;

    function clearActive(doc) {
      const active = doc.querySelector('.admin-profile-preview-active');
      if (active && active.isConnected) active.classList.remove('admin-profile-preview-active');
      previewSyncRef.current.activeKey = null;
    }

    function focusEditable(el) {
      const selection = el.ownerDocument.defaultView?.getSelection?.();
      const range = el.ownerDocument.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      selection?.removeAllRanges();
      selection?.addRange(range);
      el.focus();
    }

    function wirePreviewEditing() {
      const doc = iframe.contentDocument;
      if (!doc?.body) return;

      const hintId = 'admin-profile-preview-hint';
      if (!doc.getElementById(hintId)) {
        const hint = doc.createElement('div');
        hint.id = hintId;
        hint.className = 'admin-profile-preview-hint';
        hint.textContent = 'Click any highlighted heading or paragraph to edit directly here.';
        doc.body.appendChild(hint);
      }

      doc.querySelectorAll(PREVIEW_EDITABLE_SELECTOR).forEach((el) => {
        el.setAttribute('contenteditable', 'plaintext-only');
        el.setAttribute('spellcheck', 'true');
        el.classList.add('admin-profile-preview-editable');
      });

      const onClick = (event) => {
        const blocker = event.target.closest('a,button,[role="button"],input,select,textarea,summary,label');
        if (blocker && !blocker.closest(PREVIEW_EDITABLE_SELECTOR)) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }

        const el = event.target.closest(PREVIEW_EDITABLE_SELECTOR);
        if (!el || !doc.body.contains(el)) return;
        if (el.tagName === 'A' || el.closest('a')) {
          event.preventDefault();
        }
        clearActive(doc);
        el.classList.add('admin-profile-preview-active');
        previewSyncRef.current.activeKey = el.dataset.profileKey || null;
        focusEditable(el);
      };

      const onPointerDown = (event) => {
        if (event.target.closest('a,button,[role="button"],input,select,textarea,summary,form,label')) {
          event.preventDefault();
        }
      };

      const onSubmit = (event) => {
        event.preventDefault();
      };

      const onInput = (event) => {
        const el = event.target.closest(PREVIEW_EDITABLE_SELECTOR);
        const key = el?.dataset.profileKey;
        if (!el || !key) return;
        const original = el.dataset.profileOrig || '';
        previewSyncRef.current.skipNextStorePush = true;
        setStore((current) => {
          const next = {
            ...current,
            text: { ...current.text },
          };
          const value = el.innerText.replace(/\r\n/g, '\n');
          if (!value.trim() || value.trim() === original.trim()) delete next.text[key];
          else next.text[key] = encodeStoredText(value);
          return next;
        });
      };

      const onKeyDown = (event) => {
        const el = event.target.closest(PREVIEW_EDITABLE_SELECTOR);
        if (!el) return;
        if (event.key === 'Escape') {
          event.preventDefault();
          el.blur();
          clearActive(doc);
        }
      };

      const onBlur = (event) => {
        const el = event.target.closest(PREVIEW_EDITABLE_SELECTOR);
        if (!el) return;
        window.setTimeout(() => {
          if (doc.activeElement === el) return;
          if (!el.isConnected) return;
          el.classList.remove('admin-profile-preview-active');
          if (previewSyncRef.current.activeKey === el.dataset.profileKey) {
            previewSyncRef.current.activeKey = null;
          }
        }, 0);
      };

      doc.addEventListener('click', onClick);
      doc.addEventListener('pointerdown', onPointerDown, true);
      doc.addEventListener('input', onInput, true);
      doc.addEventListener('keydown', onKeyDown, true);
      doc.addEventListener('focusout', onBlur, true);
      doc.addEventListener('submit', onSubmit, true);

      previewSyncRef.current.cleanup = () => {
        doc.removeEventListener('click', onClick);
        doc.removeEventListener('pointerdown', onPointerDown, true);
        doc.removeEventListener('input', onInput, true);
        doc.removeEventListener('keydown', onKeyDown, true);
        doc.removeEventListener('focusout', onBlur, true);
        doc.removeEventListener('submit', onSubmit, true);
        clearActive(doc);
      };
    }

    const onLoad = () => {
      previewSyncRef.current.cleanup?.();
      wirePreviewEditing();
    };

    iframe.addEventListener('load', onLoad);
    const timeout = window.setTimeout(onLoad, 700);

    return () => {
      iframe.removeEventListener('load', onLoad);
      window.clearTimeout(timeout);
      previewSyncRef.current.cleanup?.();
      previewSyncRef.current.cleanup = null;
    };
  }, [previewOpen, previewTick]);

  const summary = useMemo(() => {
    const option = PAGE_OPTIONS.find(([route]) => route === selectedRoute);
    const name = option ? option[1] : selectedRoute;
    return `${name} has ${sections.length} editable sections ready for typography, color, size, spacing, alignment, and copy updates.`;
  }, [selectedRoute, sections]);

  const previewEditEnabled = previewOpen && sections.length > 0;

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
    setMessage('Saving...');
    fetch('/api/content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(store),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Save failed');
        writeStore(store); // keep local sync for fallback/legacy if needed
        setMessage('Saved. Your live site now uses these section changes.');
        window.dispatchEvent(new Event('ubhi:site-profile-updated'));
      })
      .catch(() => {
        setMessage('Failed to save. Please try again.');
      });
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
          Smooth changes are applied to the live site after save, and the preview shows the selected page with your current draft. You can also click text directly inside preview to edit there.
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
              <p className="admin-profile-copy">
                This preview uses your current draft before publishing. Click headings or paragraphs in the preview to edit them directly, or keep using the textareas below.
              </p>
            </div>
            <button type="button" className="button button-secondary" onClick={() => setPreviewOpen(false)}>
              Close preview
            </button>
          </div>
          {previewEditEnabled ? (
            <div className="admin-profile-preview-note">
              Direct preview editing is on. Your typing here and the textarea fields stay synced to the same draft.
            </div>
          ) : null}
          <iframe
            key={`${selectedRoute}-${previewTick}`}
            id="admin-profile-preview-frame"
            ref={iframeRef}
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
