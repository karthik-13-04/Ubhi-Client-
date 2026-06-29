/**
 * Pure utility functions extracted from script.js.
 * No DOM access, no React — safe to import anywhere.
 */

import { storeRead } from '../hooks/useStore';

// ── HTML escaping (XSS prevention) ──
export function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

// ── Shipping ──
export function ubhiFreeShipThreshold() {
  const settings = storeRead('site-settings', {});
  const v = Number((settings?.shipping || {}).freeThreshold);
  return Number.isFinite(v) && v >= 0 ? v : 50;
}

export function ubhiShipFlatRate() {
  const settings = storeRead('site-settings', {});
  const v = Number((settings?.shipping || {}).flatRate);
  return Number.isFinite(v) && v >= 0 ? v : 3.95;
}

export function ubhiShipping(subtotal) {
  return subtotal >= ubhiFreeShipThreshold() ? 0 : ubhiShipFlatRate();
}

// ── Order reference generator ──
export function ubhiOrderRef() {
  const t = Date.now().toString(36).toUpperCase().slice(-4);
  const r = Math.random().toString(36).slice(2, 6).toUpperCase();
  return 'UB-' + t + r;
}

// ── Array shuffle (Fisher-Yates) ──
export function shuffleArray(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// ── Date formatting ──
export function formatDate(isoString) {
  try {
    const d = new Date(isoString);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  } catch {
    return isoString || '';
  }
}

export function formatTime(isoString) {
  try {
    const d = new Date(isoString);
    return d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  } catch {
    return isoString || '';
  }
}

// ── Journal reading time ──
export function readingTime(htmlBody) {
  const words = (htmlBody || '').replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(words / 180);
}

// ── Parse "Month Year" to timestamp ──
const MONTH_MAP = {
  January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
  July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
};

export function parseMonthYear(str) {
  if (!str) return 0;
  const parts = str.split(' ');
  const month = MONTH_MAP[parts[0]] || 0;
  const year = parseInt(parts[1], 10) || 2026;
  return new Date(year, month, 1).getTime();
}

// ── Number formatting ──
export function formatPrice(n) {
  return Number.isInteger(n) ? String(n) : n.toFixed(2);
}

// ── SVG art vectors for shop products ──
export const PRODUCT_VECTORS = {
  yantra: `<svg viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="88" stroke="var(--aurora-gold)" stroke-width="0.6"/><polygon points="100,20 175,145 25,145" stroke="var(--aurora-gold)" stroke-width="0.6" fill="rgba(201,151,42,0.06)"/><polygon points="100,180 175,55 25,55" stroke="var(--aurora-rose)" stroke-width="0.5" fill="none"/><circle cx="100" cy="100" r="30" stroke="var(--aurora-gold)" stroke-width="0.5"/><circle cx="100" cy="100" r="6" fill="var(--aurora-gold)"/></svg>`,
  lotus: `<svg viewBox="0 0 200 200" fill="none"><ellipse cx="100" cy="100" rx="30" ry="70" stroke="var(--aurora-rose)" stroke-width="0.6" fill="rgba(181,96,122,0.05)"/><ellipse cx="100" cy="100" rx="30" ry="70" stroke="var(--aurora-rose)" stroke-width="0.5" fill="none" transform="rotate(60 100 100)"/><ellipse cx="100" cy="100" rx="30" ry="70" stroke="var(--aurora-rose)" stroke-width="0.5" fill="none" transform="rotate(120 100 100)"/><circle cx="100" cy="100" r="12" stroke="var(--aurora-gold)" stroke-width="0.6"/><circle cx="100" cy="100" r="4" fill="var(--aurora-gold)"/></svg>`,
  concentric: `<svg viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="88" stroke="var(--aurora-teal)" stroke-width="0.6"/><circle cx="100" cy="100" r="62" stroke="var(--aurora-teal)" stroke-width="0.5"/><circle cx="100" cy="100" r="38" stroke="var(--aurora-teal)" stroke-width="0.5"/><circle cx="100" cy="100" r="18" stroke="var(--aurora-teal)" stroke-width="0.6"/><circle cx="100" cy="100" r="5" fill="var(--aurora-teal)"/></svg>`,
  lines: `<svg viewBox="0 0 200 200" fill="none"><line x1="100" y1="10" x2="100" y2="190" stroke="var(--aurora-gold)" stroke-width="0.5"/><line x1="10" y1="100" x2="190" y2="100" stroke="var(--aurora-gold)" stroke-width="0.5"/><line x1="30" y1="30" x2="170" y2="170" stroke="var(--aurora-gold)" stroke-width="0.4"/><line x1="170" y1="30" x2="30" y2="170" stroke="var(--aurora-gold)" stroke-width="0.4"/><circle cx="100" cy="100" r="60" stroke="var(--aurora-gold)" stroke-width="0.6"/><circle cx="100" cy="100" r="5" fill="var(--aurora-gold)"/></svg>`,
};

// ── Journal card color palettes ──
export const JOURNAL_CARD_COLORS = [
  { val: '#ce745b', bg: 'rgba(206, 116, 91, 0.18)' },
  { val: '#6b7f5f', bg: 'rgba(107, 127, 95, 0.16)' },
  { val: '#4b6782', bg: 'rgba(75, 103, 130, 0.16)' },
  { val: 'var(--aurora-gold)', bg: 'rgba(201, 151, 42, 0.18)' },
  { val: 'var(--aurora-rose)', bg: 'rgba(181, 96, 122, 0.16)' },
  { val: 'var(--aurora-teal)', bg: 'rgba(45, 139, 124, 0.16)' },
  { val: '#94586f', bg: 'rgba(148, 88, 111, 0.16)' },
  { val: '#b58d3c', bg: 'rgba(181, 141, 60, 0.18)' },
  { val: '#52664b', bg: 'rgba(82, 102, 75, 0.16)' },
  { val: '#5e6b77', bg: 'rgba(94, 107, 119, 0.16)' },
  { val: '#83729c', bg: 'rgba(131, 114, 156, 0.16)' },
  { val: '#484b52', bg: 'rgba(72, 75, 82, 0.15)' },
];

// ── Booking modal eyebrow map ──
export const BOOKING_EYEBROW_MAP = {
  'Yoga & Hand Block Printing': 'Signature &middot; 12 July',
  'Sacred Geometry Drawing': 'Drawing &middot; 26 July',
  'Watercolour & Sound (AUM)': 'Rest &middot; 9 August',
  'Breathwork & Clay Pots': 'Sensory &middot; 23 August',
  'Somatic Silk Dyeing': 'Botanical &middot; 6 Sept',
  'Restorative Art & Ink Flow': 'Zen &middot; 20 September',
  'Private Ubhi Session': 'Private Session',
};

// ── Snail Mail gift terms ──
export const SNAIL_GIFT_TERMS = {
  '3': { total: '49', price: '16.33' },
  '6': { total: '95', price: '15.83' },
  '12': { total: '149', price: '12.42' },
};
