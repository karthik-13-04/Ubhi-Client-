/**
 * Per-route SEO metadata extracted from script.js PAGE_SEO map.
 * Used by Next.js generateMetadata() exports in each route.
 */

export const SITE_NAME = 'Ubhi.in';
export const SITE_URL = 'https://ubhi.in/';

export const PAGE_SEO = {
  '/': {
    title: 'Ubhi.in | Yoga, Art & Slow Ritual — London',
    description: 'A sanctuary for seekers and makers. Yoga workshops, handmade art, and a monthly Snail Mail Club — slow ritual, posted to your door.',
  },
  '/about': {
    title: 'About — Ubhi.in',
    description: "The story behind Ubhi: Chelsea Kaur Ubhi's practice of yoga, art and slow living in London.",
  },
  '/workshops': {
    title: 'Workshops — Ubhi.in',
    description: 'Yoga, breathwork and hands-on art workshops in London, open to seekers from anywhere in the world.',
  },
  '/shop': {
    title: 'Shop — Ubhi.in',
    description: 'Hand-finished prints, ceramics and ritual objects, made slowly by hand. UK delivery.',
  },
  '/snail-mail': {
    title: 'Snail Mail Club — Ubhi.in',
    description: 'A monthly hand-made parcel of slow pages and pressed prints, posted to your door across the UK.',
  },
  '/art': {
    title: 'Art Portfolio — Ubhi.in',
    description: 'Original handmade artwork by Chelsea Kaur Ubhi — block prints, paintings and slow-made pieces from the London studio.',
  },
  '/journal': {
    title: 'Journal — Ubhi.in',
    description: 'Slow reading and reflection — essays and writing from the Ubhi studio.',
  },
  '/account': {
    title: 'Your Almanac — Ubhi.in',
    description: 'Sign in to view your orders, workshops and Snail Mail subscription.',
  },
  '/admin': {
    title: 'Studio Portal — Ubhi.in',
    description: '',
  },
  '/contact': {
    title: 'Contact — Ubhi.in',
    description: 'Get in touch with the Ubhi studio. A real person reads every message.',
  },
  '/faq': {
    title: 'Questions & Answers — Ubhi.in',
    description: 'Answers to common questions about workshops, the Snail Mail Club, shipping and returns.',
  },
  '/shipping': {
    title: 'Shipping & Delivery — Ubhi.in',
    description: 'How and where Ubhi ships its handmade goods and Snail Mail parcels.',
  },
  '/refunds': {
    title: 'Returns & Refunds — Ubhi.in',
    description: 'Our returns, refunds and cancellation policy.',
  },
  '/privacy': {
    title: 'Privacy Policy — Ubhi.in',
    description: 'How Ubhi collects, uses and protects your personal data.',
  },
  '/cookies': {
    title: 'Cookie Policy — Ubhi.in',
    description: 'How Ubhi uses cookies and how to manage your preferences.',
  },
  '/terms': {
    title: 'Terms & Conditions — Ubhi.in',
    description: 'The terms that apply when you use Ubhi.in or buy from us.',
  },
};

/**
 * Get metadata for a given pathname.
 */
export function getPageSeo(pathname) {
  const clean = (pathname || '/').replace(/\/$/, '') || '/';
  return PAGE_SEO[clean] || PAGE_SEO['/'];
}
