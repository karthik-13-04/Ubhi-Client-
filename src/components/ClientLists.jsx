'use client';

/**
 * ClientLists.jsx
 * ─────────────────────────────────────────────────────────────────
 * Re-exports every component from DynamicLists through next/dynamic
 * so they are NEVER executed on the server (ssr: false).
 *
 * This solves the error:
 *   "Attempted to call WorkshopsList() from the server"
 * which was triggered by /api/page-fragment rendering pages that
 * imported DynamicLists directly (a 'use client' module).
 *
 * All page files should import from ClientLists, not DynamicLists.
 * ─────────────────────────────────────────────────────────────────
 */
import dynamic from 'next/dynamic';

export const WorkshopsList = dynamic(
  () => import('./DynamicLists').then((m) => ({ default: m.WorkshopsList })),
  { ssr: false }
);

export const JournalList = dynamic(
  () => import('./DynamicLists').then((m) => ({ default: m.JournalList })),
  { ssr: false }
);

export const ShopList = dynamic(
  () => import('./DynamicLists').then((m) => ({ default: m.ShopList })),
  { ssr: false }
);

export const SnailMailGallery = dynamic(
  () => import('./DynamicLists').then((m) => ({ default: m.SnailMailGallery })),
  { ssr: false }
);

export const ArtPortfolioList = dynamic(
  () => import('./DynamicLists').then((m) => ({ default: m.ArtPortfolioList })),
  { ssr: false }
);
