'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const STORE_KEY = 'ubhi-site-profile-v2';
const LEGACY_TEXT_KEY = 'ubhi-text-content';
const SITE_SETTINGS_KEY = 'ubhi-site-settings';

const EDITABLE_SELECTOR =
  'h1,h2,h3,h4,h5,h6,p,li,blockquote,summary,figcaption,.eyebrow,' +
  'a,button,label,span,strong,em,.nav-links a,.nav-cta,.site-footer a,.site-footer h4';

const EXCLUDE_SELECTOR =
  '#page-admin,#page-account,.modal,[data-noedit],[contenteditable],script,style,' +
  '[id$="-list"],[id$="-grid"],[id$="-track"],[id$="-table-body"],' +
  '.product-card,.workshop-card,.journal-card,.artfolio-card,.art-card,' +
  '.gallery-item,.snail-photo,.snail-review,.preview-card,.member-card';

const SECTION_SELECTOR =
  'section,article,.hero,.page-hero,.about,.contact-grid,.faq-list,.faq-item,.story-block,.journal-shell,.page';

function readProfileStore() {
  try {
    const local = JSON.parse(window.localStorage.getItem(STORE_KEY)) || {};
    const settings = JSON.parse(window.localStorage.getItem(SITE_SETTINGS_KEY)) || {};
    const studio = settings.profileStudio || {};
    return {
      text: local.text || JSON.parse(window.localStorage.getItem(LEGACY_TEXT_KEY)) || {},
      styles: local.styles || studio.styles || {},
      sectionStyles: local.sectionStyles || studio.sectionStyles || {},
    };
  } catch {
    try {
      const settings = JSON.parse(window.localStorage.getItem(SITE_SETTINGS_KEY)) || {};
      const studio = settings.profileStudio || {};
      return {
        text: JSON.parse(window.localStorage.getItem(LEGACY_TEXT_KEY)) || {},
        styles: studio.styles || {},
        sectionStyles: studio.sectionStyles || {},
      };
    } catch {
      return {
        text: {},
        styles: {},
        sectionStyles: {},
      };
    }
  }
}

function hash(text) {
  let h = 5381;
  let i = text.length;
  while (i) h = (h * 33) ^ text.charCodeAt(--i);
  return (h >>> 0).toString(36);
}

function makeKey(routeId, tag, text, used) {
  const base = `${routeId}|${tag}|${hash(text.trim())}`;
  let key = base;
  let count = 1;
  while (used.has(key)) {
    key = `${base}|${count++}`;
  }
  used.add(key);
  return key;
}

function hasBlockChildren(el) {
  return Array.from(el.children).some((child) => {
    const style = window.getComputedStyle(child);
    return !['inline', 'inline-block', 'inline-flex', 'contents'].includes(style.display);
  });
}

function isEditable(el) {
  if (!el || el.closest(EXCLUDE_SELECTOR)) return false;
  if (!(el.textContent || '').trim()) return false;
  if (el.querySelector(EXCLUDE_SELECTOR)) return false;
  if (!hasBlockChildren(el)) return true;
  return /^H[1-6]$/.test(el.tagName) || el.classList.contains('eyebrow');
}

function sectionName(el, fallback) {
  if (!el) return fallback;
  const heading = el.querySelector('h1,h2,h3,h4,h5,h6,.eyebrow');
  if (heading && heading.textContent.trim()) return heading.textContent.trim();
  if (el.className && typeof el.className === 'string') {
    return el.className.split(/\s+/)[0].replace(/[-_]/g, ' ');
  }
  return fallback;
}

function annotateDocument(pathname) {
  const routeId = pathname === '/' ? 'page-home' : `page-${pathname.replace(/^\//, '')}`;
  const usedKeys = new Set();
  const sectionKeys = new Map();
  let sectionIndex = 0;

  document.querySelectorAll(EDITABLE_SELECTOR).forEach((el) => {
    if (!isEditable(el)) return;

    const original = el.dataset.profileOrig || (el.textContent || '').trim();
    if (!original) return;

    el.dataset.profileOrig = original;
    el.dataset.profileKey =
      el.dataset.profileKey || makeKey(routeId, el.tagName.toLowerCase(), original, usedKeys);

    const section = el.closest(SECTION_SELECTOR);
    if (!sectionKeys.has(section)) {
      sectionIndex += 1;
      const title = sectionName(section, `Section ${sectionIndex}`);
      sectionKeys.set(section, `${routeId}|section|${sectionIndex}|${hash(title)}`);
    }
    el.dataset.profileSection = sectionKeys.get(section);
  });
}

function applyStyles(el, styles) {
  const styleMap = {
    color: styles.color,
    fontFamily: styles.fontFamily,
    fontSize: styles.fontSize,
    fontWeight: styles.fontWeight,
    lineHeight: styles.lineHeight,
    letterSpacing: styles.letterSpacing,
    textTransform: styles.textTransform,
    textAlign: styles.textAlign,
  };

  Object.entries(styleMap).forEach(([prop, value]) => {
    if (value) el.style[prop] = value;
    else el.style.removeProperty(prop.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`));
  });
}

function applyProfile(pathname, previewPayload) {
  annotateDocument(pathname);

  const store = previewPayload || readProfileStore();
  const text = store.text || {};
  const styles = store.styles || {};
  const sectionStyles = store.sectionStyles || {};

  document.querySelectorAll('[data-profile-key]').forEach((el) => {
    const original = el.dataset.profileOrig || '';
    const key = el.dataset.profileKey;
    const sectionKey = el.dataset.profileSection;

    el.innerHTML = Object.prototype.hasOwnProperty.call(text, key)
      ? text[key]
      : original;

    if (sectionKey && sectionStyles[sectionKey]) {
      applyStyles(el, sectionStyles[sectionKey]);
    } else {
      applyStyles(el, {});
    }

    if (styles[key]) {
      applyStyles(el, styles[key]);
    }
  });

  try {
    window.localStorage.setItem(LEGACY_TEXT_KEY, JSON.stringify(text));
  } catch {}
}

export default function SiteProfileRuntime() {
  const pathname = usePathname();

  useEffect(() => {
    let apiProfile = null;
    const run = () => applyProfile(pathname || '/', apiProfile);
    
    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/content');
        if (res.ok) {
          const data = await res.json();
          if (data && (data.text || data.styles)) {
             apiProfile = data;
          }
        }
      } catch (err) {
        console.error('Failed to load dynamic profile data', err);
      }
      run();
    };

    const onStorage = (event) => {
      if (!event.key || event.key === STORE_KEY) run();
    };
    const onCustom = () => run();

    fetchProfile();

    if (typeof window !== 'undefined') {
      if (typeof window.refreshUI === 'function') {
        window.refreshUI();
      } else if (typeof window.renderHomeGallery === 'function') {
        window.renderHomeGallery();
      }
    }

    window.addEventListener('storage', onStorage);
    window.addEventListener('ubhi-profile-update', onCustom);
    const onPreview = (event) => {
      const payload = event.data;
      if (!payload || payload.type !== 'ubhi-preview-profile') return;
      applyProfile(pathname || '/', payload.profile);
    };

    window.addEventListener('ubhi:site-profile-updated', onCustom);
    window.addEventListener('message', onPreview);

    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('ubhi:site-profile-updated', onCustom);
      window.removeEventListener('message', onPreview);
    };
  }, [pathname]);

  return null;
}
