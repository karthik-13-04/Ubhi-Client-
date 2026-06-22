'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { siteGlobalStyles } from '../styles/site-styles';

const STORAGE_KEY = 'ubhi-site-profile-v2';
const SETTINGS_URL = '/api/settings/site_profile';
const API_TOKEN_KEY = 'ubhi-api-token';

const FONT_OPTIONS = [
  { label: 'Same as design', value: '' },
  { label: 'EB Garamond', value: '"EB Garamond", serif' },
  { label: 'Fraunces', value: '"Fraunces", Georgia, serif' },
  { label: 'Caveat', value: '"Caveat", cursive' },
  { label: 'Gochi Hand', value: '"Gochi Hand", cursive' },
  { label: 'Georgia', value: 'Georgia, serif' },
  { label: 'Times New Roman', value: '"Times New Roman", serif' },
  { label: 'Arial', value: 'Arial, sans-serif' },
];

const TEXT_SELECTOR = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'li',
  'summary',
  'blockquote',
  'figcaption',
  'label',
  'button',
  'a',
  'span',
].join(',');

function normalizeWhitespace(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function humanizeSlug(value) {
  return String(value || '')
    .replace(/^page-/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function textFromElement(element) {
  if (!element) return '';
  const html = element.innerHTML || '';
  if (/<br\s*\/?>/i.test(html)) {
    return html
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/\u00a0/g, ' ')
      .trim();
  }
  return element.textContent.replace(/\u00a0/g, ' ').trim();
}

function titleFromElement(element, fallback) {
  if (!element) return fallback;
  const heading = element.querySelector('h1, h2, h3, h4');
  if (heading) {
    const text = normalizeWhitespace(heading.textContent);
    if (text) return text;
  }
  const aria = normalizeWhitespace(element.getAttribute('aria-label'));
  if (aria) return aria;
  const id = normalizeWhitespace(element.id);
  if (id) return humanizeSlug(id);
  const className = normalizeWhitespace(
    typeof element.className === 'string' ? element.className.split(' ')[0] : ''
  );
  return className || fallback;
}

function isTextEditable(element) {
  if (!element) return false;
  if (element.closest('#page-admin')) return false;
  if (element.closest('[aria-hidden="true"]')) return false;
  if (element.querySelector('svg, canvas, video')) return false;
  const text = textFromElement(element);
  if (!text) return false;
  return /[A-Za-z0-9]/.test(text);
}

function collectBlocks(pageElement) {
  return Array.from(pageElement.children).filter((child) => {
    if (!(child instanceof HTMLElement)) return false;
    return !child.matches('script, style');
  });
}

function assignDatasetId(element, key, value) {
  if (!element.dataset[key]) {
    element.dataset[key] = value;
  }
  return element.dataset[key];
}

function getStoredOverrides() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (error) {
    return {};
  }
}

function saveOverridesToLocal(overrides) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
  } catch (error) {
    return;
  }
}

async function loadOverridesFromServer() {
  try {
    const response = await fetch(SETTINGS_URL, { cache: 'no-store' });
    if (response.status === 404) return {};
    if (!response.ok) return {};
    const payload = await response.json();
    return payload && payload.value && typeof payload.value === 'object' ? payload.value : {};
  } catch (error) {
    return {};
  }
}

async function saveOverridesToServer(overrides) {
  const response = await fetch(SETTINGS_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value: overrides }),
  });
  if (!response.ok) {
    let message = 'Failed to save changes.';
    try {
      const payload = await response.json();
      if (payload && payload.error) message = payload.error;
    } catch (error) {
      return Promise.reject(new Error(message));
    }
    throw new Error(message);
  }
}

function getApiToken() {
  try {
    return window.localStorage.getItem(API_TOKEN_KEY) || '';
  } catch (error) {
    return '';
  }
}

async function uploadImageAsset(file, itemId) {
  if (!file) throw new Error('Choose an image file to upload.');
  if (!String(file.type || '').startsWith('image/')) {
    throw new Error('Only image uploads are supported here.');
  }

  const token = getApiToken();
  if (!token) {
    throw new Error('Sign in to the admin portal again before uploading images.');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('kind', 'site-profile-image');
  formData.append('entity_type', 'site_profile');
  formData.append('entity_id', itemId);

  const response = await fetch('/api/uploads', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(payload && payload.error ? payload.error : 'Image upload failed.');
  }
  if (!payload || !payload.url) {
    throw new Error('Upload completed, but no public image URL was returned.');
  }
  return payload;
}

function setElementText(element, value) {
  if (!element) return;
  const next = String(value || '');
  const lines = next.split('\n');
  element.replaceChildren();
  lines.forEach((line, index) => {
    if (index > 0) {
      element.appendChild(document.createElement('br'));
    }
    element.appendChild(document.createTextNode(line));
  });
}

function setElementImage(element, override) {
  if (!element) return;
  if (override.src !== undefined) element.src = override.src;
  if (override.alt !== undefined) element.alt = override.alt;
}

function setElementFont(element, fontFamily) {
  if (!element) return;
  if (!fontFamily) {
    element.style.removeProperty('font-family');
    return;
  }
  element.style.fontFamily = fontFamily;
}

function applyOverrideToElement(element, item, override) {
  if (!element || !item || !override) return;
  if (item.type === 'text') {
    if (Object.prototype.hasOwnProperty.call(override, 'content')) {
      setElementText(element, override.content);
    }
    if (Object.prototype.hasOwnProperty.call(override, 'fontFamily')) {
      setElementFont(element, override.fontFamily);
    }
  }
  if (item.type === 'image') {
    setElementImage(element, override);
  }
}

function applyOverridesToMaps(itemMap, itemElements, overrides) {
  Object.entries(overrides || {}).forEach(([itemId, override]) => {
    applyOverrideToElement(itemElements.get(itemId), itemMap.get(itemId), override);
  });
}

function formatFontLabel(fontFamily) {
  return normalizeWhitespace(String(fontFamily || '').replace(/['"]/g, '')) || 'Inherited';
}

function scanProfile() {
  const pages = [];
  const items = [];
  const itemMap = new Map();
  const itemElements = new Map();
  const sectionElements = new Map();
  const pageElements = new Map();

  document.querySelectorAll('main .page').forEach((pageElement, pageIndex) => {
    if (!(pageElement instanceof HTMLElement)) return;
    if (pageElement.id === 'page-admin') return;
    const pageId = pageElement.id.replace(/^page-/, '') || `page-${pageIndex + 1}`;
    pageElements.set(pageId, pageElement);

    const page = {
      id: pageId,
      label: humanizeSlug(pageId),
      sections: [],
    };

    collectBlocks(pageElement).forEach((sectionElement, sectionIndex) => {
      const sectionId = assignDatasetId(
        sectionElement,
        'profileSectionId',
        `${page.id}-section-${sectionIndex + 1}`
      );
      sectionElements.set(sectionId, sectionElement);

      const section = {
        id: sectionId,
        label: titleFromElement(sectionElement, `Section ${sectionIndex + 1}`),
        itemIds: [],
      };

      Array.from(sectionElement.querySelectorAll(TEXT_SELECTOR)).forEach((textElement, textIndex) => {
        if (!(textElement instanceof HTMLElement) || !isTextEditable(textElement)) return;
        if (textElement.closest('a, button') && textElement !== textElement.closest('a, button')) return;
        const itemId = assignDatasetId(
          textElement,
          'profileItemId',
          `${sectionId}-text-${textIndex + 1}`
        );
        if (itemMap.has(itemId)) return;
        const item = {
          id: itemId,
          type: 'text',
          sectionId,
          pageId: page.id,
          tagName: textElement.tagName.toLowerCase(),
          label: normalizeWhitespace(textElement.textContent).slice(0, 72) || `${textElement.tagName} text`,
          content: textFromElement(textElement),
          fontFamily: window.getComputedStyle(textElement).fontFamily || '',
        };
        itemMap.set(itemId, item);
        itemElements.set(itemId, textElement);
        section.itemIds.push(itemId);
        items.push(item);
      });

      Array.from(sectionElement.querySelectorAll('img')).forEach((imageElement, imageIndex) => {
        if (!(imageElement instanceof HTMLImageElement)) return;
        const itemId = assignDatasetId(
          imageElement,
          'profileItemId',
          `${sectionId}-image-${imageIndex + 1}`
        );
        if (itemMap.has(itemId)) return;
        const item = {
          id: itemId,
          type: 'image',
          sectionId,
          pageId: page.id,
          tagName: 'img',
          label:
            normalizeWhitespace(imageElement.alt) ||
            imageElement.getAttribute('src') ||
            `Image ${imageIndex + 1}`,
          src: imageElement.getAttribute('src') || '',
          alt: imageElement.getAttribute('alt') || '',
        };
        itemMap.set(itemId, item);
        itemElements.set(itemId, imageElement);
        section.itemIds.push(itemId);
        items.push(item);
      });

      if (section.itemIds.length) {
        page.sections.push(section);
      }
    });

    if (page.sections.length) {
      pages.push(page);
    }
  });

  return {
    pages,
    items,
    itemMap,
    itemElements,
    sectionElements,
    pageElements,
  };
}

// ─── Preview: renders ONLY the selected section in an iframe ────────────────
// The key insight: siteGlobalStyles is placed first, then the preview-reset
// block overrides body/html/main so they don't add page-level whitespace.
function buildSectionPreviewDocument(pageElements, sectionElements, pageId, sectionId) {
  const pageElement = pageElements.get(pageId);
  const sectionElement = sectionElements.get(sectionId);
  if (!pageElement || !sectionElement) return '';

  const sectionHtml = sectionElement.outerHTML;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Gochi+Hand&display=swap" rel="stylesheet" />
    <style>
      ${siteGlobalStyles}
      /* ── preview reset: collapse page-level chrome so only the section shows ── */
      html {
        margin: 0 !important;
        padding: 0 !important;
        min-height: 0 !important;
        height: auto !important;
        background: #ece0c2;
        overflow: visible !important;
        scrollbar-width: none;
      }
      html::-webkit-scrollbar { display: none; }
      body {
        margin: 0 !important;
        padding: 0 !important;
        width: 1440px;
        min-width: 1440px;
        min-height: 0 !important;
        height: auto !important;
        background: #ece0c2;
        overflow: visible !important;
      }
      main.site-profile-preview-root {
        display: block !important;
        width: 100% !important;
        min-height: 0 !important;
        height: auto !important;
        padding: 0 !important;
        margin: 0 !important;
        overflow: visible !important;
      }
    </style>
  </head>
  <body>
    <main class="site-profile-preview-root">${sectionHtml}</main>
  </body>
</html>`;
}

function SectionItemEditor({
  item,
  override,
  onTextChange,
  onFontChange,
  onImageChange,
  onImageUpload,
  isUploading,
}) {
  if (item.type === 'image') {
    return (
      <div className="site-profile-item-card">
        <div className="site-profile-item-head">
          <div>
            <strong>{item.label}</strong>
            <span>Image</span>
          </div>
        </div>
        <div className="site-profile-field-grid">
          <label className="site-profile-field">
            <span>Image source</span>
            <input
              type="text"
              value={override?.src ?? item.src}
              onChange={(event) =>
                onImageChange(item.id, {
                  src: event.target.value,
                  alt: override?.alt ?? item.alt,
                })
              }
            />
          </label>
          <label className="site-profile-field">
            <span>Alt text</span>
            <input
              type="text"
              value={override?.alt ?? item.alt}
              onChange={(event) =>
                onImageChange(item.id, {
                  src: override?.src ?? item.src,
                  alt: event.target.value,
                })
              }
            />
          </label>
          <label className="site-profile-field">
            <span>{isUploading ? 'Uploading to S3...' : 'Replace image in S3'}</span>
            <input
              type="file"
              accept="image/*"
              disabled={isUploading}
              onChange={(event) => {
                const file = event.target.files && event.target.files[0];
                if (file) {
                  onImageUpload(item.id, file);
                }
                event.target.value = '';
              }}
            />
          </label>
        </div>
        <div className="site-profile-image-preview">
          <img src={override?.src ?? item.src} alt={(override?.alt ?? item.alt) || item.label} />
        </div>
      </div>
    );
  }

  return (
    <div className="site-profile-item-card">
      <div className="site-profile-item-head">
        <div>
          <strong>{item.label}</strong>
          <span>
            {item.tagName.toUpperCase()} · Current font: {formatFontLabel(override?.fontFamily || item.fontFamily)}
          </span>
        </div>
      </div>
      <label className="site-profile-field">
        <span>Content</span>
        <textarea
          rows={Math.min(8, Math.max(3, String(override?.content ?? item.content).split('\n').length + 1))}
          value={override?.content ?? item.content}
          onChange={(event) => onTextChange(item.id, event.target.value)}
        />
      </label>
      <label className="site-profile-field">
        <span>Font family</span>
        <select
          value={override?.fontFamily ?? ''}
          onChange={(event) => onFontChange(item.id, event.target.value)}
        >
          {FONT_OPTIONS.map((font) => (
            <option key={font.label} value={font.value}>
              {font.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default function SiteProfileAdminEnhancer() {
  const [rootElement, setRootElement] = useState(null);
  const [pages, setPages] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedPageId, setSelectedPageId] = useState('');
  const [previewSectionId, setPreviewSectionId] = useState('');
  const [search, setSearch] = useState('');
  const [overrides, setOverrides] = useState({});
  const [saveMessage, setSaveMessage] = useState('Change content live, then save to publish it to the website.');
  const [isSaving, setIsSaving] = useState(false);
  const [uploadingItemId, setUploadingItemId] = useState('');
  const [previewStyle, setPreviewStyle] = useState({
    width: 1440,
    pageHeight: 600,
    scale: 0.28,
  });
  const itemMapRef = useRef(new Map());
  const itemElementsRef = useRef(new Map());
  const sectionElementsRef = useRef(new Map());
  const pageElementsRef = useRef(new Map());
  const selectedPageIdRef = useRef('');
  const previewSectionIdRef = useRef('');
  const iframeRef = useRef(null);
  const previewViewportRef = useRef(null);
  const previewShouldJumpRef = useRef(false);

  useEffect(() => {
    selectedPageIdRef.current = selectedPageId;
  }, [selectedPageId]);

  useEffect(() => {
    previewSectionIdRef.current = previewSectionId;
  }, [previewSectionId]);

  useEffect(() => {
    let frame = 0;
    let tries = 0;

    async function resolveRoot() {
      const nextRoot = document.getElementById('site-profile-admin-root');
      if (nextRoot) {
        setRootElement(nextRoot);
        return;
      }
      if (tries < 30) {
        tries += 1;
        frame = window.requestAnimationFrame(resolveRoot);
      }
    }

    resolveRoot();
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function hydratePublicSite() {
      const profile = scanProfile();
      const remoteOverrides = await loadOverridesFromServer();
      const localOverrides = getStoredOverrides();
      const effectiveOverrides =
        Object.keys(remoteOverrides).length > 0 ? remoteOverrides : localOverrides;

      if (cancelled) return;
      applyOverridesToMaps(profile.itemMap, profile.itemElements, effectiveOverrides);
      saveOverridesToLocal(effectiveOverrides);
    }

    window.setTimeout(() => {
      hydratePublicSite();
    }, 30);

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!rootElement) return;
    let active = true;

    async function hydrateProfile(preferCurrentSelection = true) {
      const profile = scanProfile();
      const remoteOverrides = await loadOverridesFromServer();
      const localOverrides = getStoredOverrides();
      const effectiveOverrides =
        Object.keys(remoteOverrides).length > 0 ? remoteOverrides : localOverrides;

      if (!active) return;

      itemMapRef.current = profile.itemMap;
      itemElementsRef.current = profile.itemElements;
      sectionElementsRef.current = profile.sectionElements;
      pageElementsRef.current = profile.pageElements;

      applyOverridesToMaps(profile.itemMap, profile.itemElements, effectiveOverrides);
      saveOverridesToLocal(effectiveOverrides);

      setPages(profile.pages);
      setItems(profile.items);
      setOverrides(effectiveOverrides);

      const firstPage = profile.pages[0];
      const nextPageId =
        preferCurrentSelection && profile.pages.some((page) => page.id === selectedPageIdRef.current)
          ? selectedPageIdRef.current
          : firstPage?.id || '';
      const nextPage = profile.pages.find((page) => page.id === nextPageId) || firstPage || null;
      const nextSectionId =
        preferCurrentSelection &&
        nextPage?.sections.some((section) => section.id === previewSectionIdRef.current)
          ? previewSectionIdRef.current
          : nextPage?.sections[0]?.id || '';

      setSelectedPageId(nextPageId);
      setPreviewSectionId(nextSectionId);
    }

    hydrateProfile(false);

    const tabButtons = Array.from(document.querySelectorAll('[data-admin-tab="profile"]'));
    const handleProfileOpen = () => {
      window.setTimeout(() => hydrateProfile(true), 50);
    };

    tabButtons.forEach((button) => button.addEventListener('click', handleProfileOpen));
    window.addEventListener('hashchange', handleProfileOpen);

    return () => {
      active = false;
      tabButtons.forEach((button) => button.removeEventListener('click', handleProfileOpen));
      window.removeEventListener('hashchange', handleProfileOpen);
    };
  }, [rootElement]);

  useEffect(() => {
    if (!previewViewportRef.current) return undefined;

    const viewport = previewViewportRef.current;

    const syncPreviewScale = () => {
      const availableWidth = viewport.clientWidth;
      setPreviewStyle((current) => {
        const nextScale = availableWidth / current.width;
        if (Math.abs(nextScale - current.scale) < 0.002) return current;
        return { ...current, scale: nextScale };
      });
    };

    syncPreviewScale();

    const observer = new ResizeObserver(() => {
      syncPreviewScale();
    });

    observer.observe(viewport);

    return () => {
      observer.disconnect();
    };
  }, [rootElement]);

  useEffect(() => {
    if (!iframeRef.current || !selectedPageId) return;
    const iframe = iframeRef.current;
    const html = buildSectionPreviewDocument(
      pageElementsRef.current,
      sectionElementsRef.current,
      selectedPageId,
      previewSectionId
    );
    if (!html) return;

    iframe.onload = () => {
      const doc = iframe.contentDocument;
      if (!doc) return;

      // Measure ONLY the section element's height — not the full document —
      // so the preview viewport is sized tightly around just this section.
      const sectionEl =
        doc.querySelector('[data-profile-section-id]') ||
        doc.querySelector('.site-profile-preview-root > *') ||
        doc.querySelector('.site-profile-preview-root');
      const previewRoot = doc.querySelector('.site-profile-preview-root') || doc.body;

      const sectionRect = sectionEl ? sectionEl.getBoundingClientRect() : null;
      const sectionHeight = sectionEl
        ? Math.max(sectionEl.scrollHeight || 0, sectionRect?.height || 0)
        : 0;
      const rootHeight = previewRoot
        ? Math.max(previewRoot.scrollHeight || 0, previewRoot.getBoundingClientRect().height || 0)
        : 0;

      const fullHeight = Math.max(sectionHeight, rootHeight, 280);

      const availableWidth = previewViewportRef.current?.clientWidth || 440;
      const scale = availableWidth / 1440;

      setPreviewStyle({
        width: 1440,
        pageHeight: fullHeight,
        scale,
      });

      if (previewShouldJumpRef.current && previewSectionIdRef.current && previewViewportRef.current) {
        previewViewportRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
        previewShouldJumpRef.current = false;
      }
    };
    iframe.srcdoc = html;

    return () => {
      iframe.onload = null;
    };
  }, [selectedPageId, previewSectionId, overrides, items]);

  const selectedPage = useMemo(
    () => pages.find((page) => page.id === selectedPageId) || pages[0] || null,
    [pages, selectedPageId]
  );

  const visibleSections = useMemo(() => {
    if (!selectedPage) return [];
    const needle = normalizeWhitespace(search).toLowerCase();
    if (!needle) return selectedPage.sections;
    return selectedPage.sections.filter((section) => {
      if (section.label.toLowerCase().includes(needle)) return true;
      return section.itemIds.some((itemId) => {
        const item = itemMapRef.current.get(itemId);
        if (!item) return false;
        const content =
          item.type === 'image'
            ? `${overrides[item.id]?.alt ?? item.alt} ${overrides[item.id]?.src ?? item.src}`
            : overrides[item.id]?.content ?? item.content;
        return normalizeWhitespace(`${item.label} ${content}`).toLowerCase().includes(needle);
      });
    });
  }, [overrides, search, selectedPage]);

  const selectedSection = useMemo(() => {
    if (!visibleSections.length) return null;
    return (
      visibleSections.find((section) => section.id === previewSectionId) ||
      visibleSections[0] ||
      null
    );
  }, [previewSectionId, visibleSections]);

  useEffect(() => {
    if (!visibleSections.length) return;
    if (visibleSections.some((section) => section.id === previewSectionId)) return;
    setPreviewSectionId(visibleSections[0].id);
  }, [previewSectionId, visibleSections]);

  function updateOverride(itemId, nextOverride) {
    const item = itemMapRef.current.get(itemId);
    const element = itemElementsRef.current.get(itemId);
    if (!item || !element) return;

    setOverrides((current) => {
      const merged = {
        ...current,
        [itemId]: {
          ...current[itemId],
          ...nextOverride,
        },
      };
      saveOverridesToLocal(merged);
      applyOverrideToElement(element, item, merged[itemId]);
      setSaveMessage('Preview updated. Click Save Changes to publish this on the user website.');
      return merged;
    });
  }

  async function handleSave() {
    setIsSaving(true);
    setSaveMessage('Saving changes to the live website...');
    try {
      await saveOverridesToServer(overrides);
      saveOverridesToLocal(overrides);
      setSaveMessage('Saved successfully. The public website will now use these updated values.');
    } catch (error) {
      setSaveMessage(error.message || 'Failed to save changes.');
    } finally {
      setIsSaving(false);
    }
  }

  function handleTextChange(itemId, content) {
    updateOverride(itemId, { content });
  }

  function handleFontChange(itemId, fontFamily) {
    updateOverride(itemId, { fontFamily });
  }

  function handleImageChange(itemId, imageOverride) {
    updateOverride(itemId, imageOverride);
  }

  async function handleImageUpload(itemId, file) {
    setUploadingItemId(itemId);
    setSaveMessage(`Uploading "${file.name}" to S3...`);
    try {
      const uploaded = await uploadImageAsset(file, itemId);
      const current = itemMapRef.current.get(itemId);
      updateOverride(itemId, {
        src: uploaded.url,
        alt: overrides[itemId]?.alt ?? current?.alt ?? file.name,
      });
      setSaveMessage('Image uploaded to S3. Preview updated with the same placement as before.');
    } catch (error) {
      setSaveMessage(error.message || 'Failed to upload image.');
    } finally {
      setUploadingItemId('');
    }
  }

  if (!rootElement) return null;

  return createPortal(
    <div className="site-profile-admin">
      <div className="site-profile-toolbar">
        <div className="site-profile-metrics">
          <div className="site-profile-metric">
            <strong>{pages.length}</strong>
            <span>Pages</span>
          </div>
          <div className="site-profile-metric">
            <strong>{selectedPage ? selectedPage.sections.length : 0}</strong>
            <span>Sections</span>
          </div>
          <div className="site-profile-metric">
            <strong>{items.length}</strong>
            <span>Editable items</span>
          </div>
        </div>
        <div className="site-profile-controls">
          <label className="site-profile-field">
            <span>Page</span>
            <select
              value={selectedPage?.id || ''}
              onChange={(event) => {
                const nextPageId = event.target.value;
                const nextPage = pages.find((page) => page.id === nextPageId);
                setSelectedPageId(nextPageId);
                setPreviewSectionId(nextPage?.sections[0]?.id || '');
              }}
            >
              {pages.map((page) => (
                <option key={page.id} value={page.id}>
                  {page.label} ({page.sections.length})
                </option>
              ))}
            </select>
          </label>
          <label className="site-profile-field">
            <span>Search</span>
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Find text or image details"
            />
          </label>
        </div>
        <div className="site-profile-actions">
          <button
            type="button"
            className="button button-primary"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      <p className="site-profile-preview-message">{saveMessage}</p>

      <div
        className="site-profile-workspace"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          alignItems: 'stretch',
        }}
      >
        {selectedSection && (
          <div className="site-profile-preview-card">
            <div className="site-profile-preview-head">
              <div>
                <strong>Section preview</strong>
                <span>
                  Showing only {selectedSection.label} with the same site styling.
                </span>
              </div>
            </div>
            <div className="site-profile-preview-frame">
              <div
                ref={previewViewportRef}
                className="site-profile-preview-viewport"
                style={{
                  height: `${Math.round(previewStyle.pageHeight * previewStyle.scale)}px`,
                  maxHeight: 'none',
                  overflow: 'hidden',
                }}
              >
                <iframe
                  ref={iframeRef}
                  title={`${selectedSection.label} preview`}
                  className="site-profile-preview-iframe"
                  scrolling="no"
                  style={{
                    width: `${previewStyle.width}px`,
                    height: `${previewStyle.pageHeight}px`,
                    transform: `scale(${previewStyle.scale})`,
                    transformOrigin: 'top left',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </div>
          </div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(240px, 320px) minmax(0, 1fr)',
          gap: '24px',
          alignItems: 'start',
        }}>
          <aside className="site-profile-section-list">
          <div className="site-profile-section-list-card">
            <div className="site-profile-preview-head">
              <div>
                <strong>Sections</strong>
                <span>
                  {selectedPage ? `${selectedPage.label} · ${visibleSections.length} shown` : 'Choose a page'}
                </span>
              </div>
            </div>
            <div
              className="site-profile-section-nav"
              style={{ display: 'grid', gap: '10px', marginTop: '16px' }}
            >
              {visibleSections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  className={`site-profile-section-nav-btn${previewSectionId === section.id ? ' is-active' : ''}`}
                  style={{
                    textAlign: 'left',
                    padding: '14px 16px',
                    borderRadius: '16px',
                    border: previewSectionId === section.id
                      ? '1px solid rgba(166,116,31,0.45)'
                      : '1px solid rgba(120,96,60,0.18)',
                    background: previewSectionId === section.id
                      ? 'rgba(166,116,31,0.09)'
                      : 'rgba(255,255,255,0.58)',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    previewShouldJumpRef.current = true;
                    setPreviewSectionId(section.id);
                  }}
                >
                  <strong style={{ display: 'block', marginBottom: '4px' }}>{section.label}</strong>
                  <span style={{ fontSize: '0.86rem', opacity: 0.72 }}>
                    {section.itemIds.length} editable item{section.itemIds.length === 1 ? '' : 's'}
                  </span>
                </button>
              ))}
              {!visibleSections.length ? (
                <div className="site-profile-empty">
                  No sections match this search yet. Try another keyword.
                </div>
              ) : null}
            </div>
          </div>
        </aside>

        <div className="site-profile-section-detail">
          {selectedSection ? (
            <section className="site-profile-section-card is-active">
              <div className="site-profile-section-head">
                <div>
                  <strong>{selectedSection.label}</strong>
                  <span>{selectedSection.itemIds.length} editable items</span>
                </div>
              </div>
              <div className="site-profile-section-items">
                {selectedSection.itemIds.map((itemId) => {
                  const item = itemMapRef.current.get(itemId);
                  if (!item) return null;
                  return (
                    <SectionItemEditor
                      key={item.id}
                      item={item}
                      override={overrides[item.id]}
                      onTextChange={handleTextChange}
                      onFontChange={handleFontChange}
                      onImageChange={handleImageChange}
                      onImageUpload={handleImageUpload}
                      isUploading={uploadingItemId === item.id}
                    />
                  );
                })}
              </div>
            </section>
          ) : (
            <div className="site-profile-empty">Choose a section to start editing and previewing it.</div>
          )}
        </div>
      </div>
    </div>
    </div>,
    rootElement
  );
}
