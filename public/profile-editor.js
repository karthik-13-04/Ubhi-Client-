(function (window) {
  'use strict';

  var STORE_KEY = 'ubhi-text-content';
  var pageMap = {
    '/': 'page-home',
    '/about': 'page-about',
    '/workshops': 'page-workshops',
    '/shop': 'page-shop',
    '/snail-mail': 'page-snail-mail',
    '/art': 'page-art',
    '/journal': 'page-journal',
    '/contact': 'page-contact',
    '/faq': 'page-faq',
    '/shipping': 'page-shipping',
    '/refunds': 'page-refunds',
    '/privacy': 'page-privacy',
    '/cookies': 'page-cookies',
    '/terms': 'page-terms'
  };

  var sectionWrap;
  var pageSelect;
  var messageEl;

  function readStore() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (error) { return {}; }
  }

  function writeStore(store) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (error) {}
    if (window.ubhiSyncPush) {
      try { window.ubhiSyncPush('text-content', store); } catch (error) {}
    }
  }

  function hash(text) {
    var h = 5381;
    var i = text.length;
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

  function buildKeyFactory() {
    var used = {};
    return function makeKey(el, text) {
      var page = (el.closest('[id^="page-"]') || {}).id || 'site';
      var base = page + '|' + el.tagName.toLowerCase() + '|' + hash(text.trim());
      var key = base;
      var n = 1;
      while (used[key]) key = base + '|' + n++;
      used[key] = true;
      return key;
    };
  }

  function isEditable(el) {
    if (!el || !el.textContent || !el.textContent.trim()) return false;
    if (el.closest('#page-admin, #page-account, .modal, [data-noedit], [contenteditable], script, style')) return false;
    if (el.closest('[id$="-list"],[id$="-grid"],[id$="-track"],[id$="-table-body"],.product-card,.workshop-card,.journal-card,.artfolio-card,.art-card,.gallery-item,.snail-photo,.snail-review,.preview-card,.member-card')) return false;
    if (el.children.length > 0 && !/^H[1-6]$/.test(el.tagName) && !el.classList.contains('eyebrow')) return false;
    return true;
  }

  function sectionName(node, index) {
    if (!node) return 'Section ' + index;
    var heading = node.querySelector('h1,h2,h3,h4,h5,h6,.eyebrow');
    if (heading && heading.textContent.trim()) return heading.textContent.trim();
    if (node.className && typeof node.className === 'string') {
      return node.className.split(/\s+/)[0].replace(/[-_]/g, ' ');
    }
    return 'Section ' + index;
  }

  function groupSections(doc) {
    var makeKey = buildKeyFactory();
    var sections = [];
    var lookup = new Map();

    doc.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,blockquote,summary,figcaption,.eyebrow').forEach(function (el) {
      if (!isEditable(el)) return;
      var text = (el.textContent || '').trim();
      if (!text) return;
      var owner = el.closest('section, article, .page-hero, .about, .contact-grid, .faq-list, .faq-item, .story-block, .journal-shell, .shop-section, .workshops-grid, .hero, .page');
      if (!lookup.has(owner)) {
        var entry = {
          id: 'section-' + (sections.length + 1),
          title: sectionName(owner, sections.length + 1),
          items: []
        };
        lookup.set(owner, entry);
        sections.push(entry);
      }
      lookup.get(owner).items.push({
        key: makeKey(el, text),
        label: el.tagName.toLowerCase(),
        original: text
      });
    });

    return sections.filter(function (section) { return section.items.length; });
  }

  function renderSections(sections) {
    var store = readStore();
    if (!sectionWrap) return;
    if (!sections.length) {
      sectionWrap.innerHTML = '<div class="admin-profile-empty">No editable text was found for this page.</div>';
      return;
    }
    sectionWrap.innerHTML = sections.map(function (section, index) {
      return '<details class="admin-profile-section"' + (index === 0 ? ' open' : '') + '>' +
        '<summary><strong>' + escapeHtml(section.title) + '</strong><span>' + section.items.length + ' fields</span></summary>' +
        '<div class="admin-profile-section-body">' +
        section.items.map(function (item, itemIndex) {
          var current = Object.prototype.hasOwnProperty.call(store, item.key) ? store[item.key] : escapeHtml(item.original);
          var plain = String(current).replace(/<br\s*\/?>/gi, '\n').replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
          return '<div class="admin-profile-field">' +
            '<label>' + escapeHtml(item.label) + ' ' + (itemIndex + 1) + '</label>' +
            '<textarea data-text-key="' + escapeHtml(item.key) + '" data-orig-text="' + escapeHtml(item.original) + '">' + escapeHtml(plain) + '</textarea>' +
          '</div>';
        }).join('') +
        '</div></details>';
    }).join('');
  }

  function setMessage(text) {
    if (messageEl) messageEl.textContent = text || '';
  }

  function loadPageProfile() {
    if (!pageSelect || !sectionWrap) return;
    var pathname = pageSelect.value || '/';
    var page = pageMap[pathname];
    if (!page) return;
    setMessage('Loading page sections...');
    fetch('/api/page-fragment?page=' + encodeURIComponent(page))
      .then(function (res) { return res.ok ? res.json() : Promise.reject(new Error('Failed to load page')); })
      .then(function (payload) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(payload.html, 'text/html');
        renderSections(groupSections(doc));
        setMessage('Page content loaded. Edit any field and save to publish it live.');
      })
      .catch(function () {
        sectionWrap.innerHTML = '<div class="admin-profile-empty">Could not load the selected page.</div>';
        setMessage('Could not load this page right now.');
      });
  }

  function savePageProfile() {
    if (!sectionWrap) return;
    var store = readStore();
    sectionWrap.querySelectorAll('textarea[data-text-key]').forEach(function (textarea) {
      var key = textarea.getAttribute('data-text-key');
      var original = textarea.getAttribute('data-orig-text') || '';
      var value = textarea.value.trim();
      if (!value || value === original.trim()) delete store[key];
      else store[key] = escapeHtml(value).replace(/\n/g, '<br>');
    });
    writeStore(store);
    if (window.ubhiEditMode && typeof window.ubhiEditMode.refresh === 'function') {
      window.ubhiEditMode.refresh();
    }
    setMessage('Saved. The selected page text is now updated in the live website.');
  }

  function init() {
    pageSelect = document.getElementById('admin-profile-page-select');
    sectionWrap = document.getElementById('admin-profile-sections');
    messageEl = document.getElementById('admin-profile-msg');
    if (!pageSelect || !sectionWrap) return;

    var saveBtn = document.getElementById('admin-profile-save-text');
    var refreshBtn = document.getElementById('admin-profile-refresh');

    if (!pageSelect._profileFieldsBound) {
      pageSelect._profileFieldsBound = true;
      pageSelect.addEventListener('change', loadPageProfile);
    }
    if (saveBtn && !saveBtn._profileFieldsBound) {
      saveBtn._profileFieldsBound = true;
      saveBtn.addEventListener('click', savePageProfile);
    }
    if (refreshBtn && !refreshBtn._profileFieldsBound) {
      refreshBtn._profileFieldsBound = true;
      refreshBtn.addEventListener('click', loadPageProfile);
    }

    loadPageProfile();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
