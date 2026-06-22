export const PATH_TO_HASH = {
  '/': '#home',
  '/home': '#home',
  '/about': '#about',
  '/workshops': '#workshops',
  '/shop': '#shop',
  '/snail-mail': '#snail-mail',
  '/journal': '#journal',
  '/admin': '#admin',
  '/account': '#account',
  '/contact': '#contact',
  '/faq': '#faq',
  '/shipping': '#shipping',
  '/refunds': '#refunds',
  '/privacy': '#privacy',
  '/cookies': '#cookies',
  '/terms': '#terms',
};

export const HASH_TO_PATH = Object.fromEntries(
  Object.entries(PATH_TO_HASH).map(([pathname, hash]) => [hash, pathname])
);

export const PAGE_METADATA = {
  '/': {
    title: 'Ubhi.in | Yoga, Art & Slow Ritual - London',
    description:
      'A sanctuary for seekers and makers. Yoga workshops, handmade art, and a monthly Snail Mail Club - slow ritual, posted to your door.',
  },
  '/home': {
    title: 'Ubhi.in | Yoga, Art & Slow Ritual - London',
    description:
      'A sanctuary for seekers and makers. Yoga workshops, handmade art, and a monthly Snail Mail Club - slow ritual, posted to your door.',
  },
  '/about': {
    title: 'About - Ubhi.in',
    description:
      "The story behind Ubhi: Chelsea Kaur Ubhi's practice of yoga, art and slow living in London.",
  },
  '/workshops': {
    title: 'Workshops - Ubhi.in',
    description:
      'Yoga, breathwork and hands-on art workshops in London, open to seekers from anywhere in the world.',
  },
  '/shop': {
    title: 'Shop - Ubhi.in',
    description:
      'Hand-finished prints, ceramics and ritual objects, made slowly by hand. UK delivery.',
  },
  '/snail-mail': {
    title: 'Snail Mail Club - Ubhi.in',
    description:
      'A monthly hand-made parcel of slow pages and pressed prints, posted to your door across the UK.',
  },
  '/journal': {
    title: 'Art & Journal - Ubhi.in',
    description:
      'Slow reading and making - essays, artwork and reflections from the Ubhi studio.',
  },
  '/account': {
    title: 'Your Almanac - Ubhi.in',
    description:
      'Sign in to view your orders, workshops and Snail Mail subscription.',
  },
  '/admin': {
    title: 'Studio Portal - Ubhi.in',
    description: 'Private studio admin tools for Ubhi.',
  },
  '/contact': {
    title: 'Contact - Ubhi.in',
    description:
      'Get in touch with the Ubhi studio. A real person reads every message.',
  },
  '/faq': {
    title: 'Questions & Answers - Ubhi.in',
    description:
      'Answers to common questions about workshops, the Snail Mail Club, shipping and returns.',
  },
  '/shipping': {
    title: 'Shipping & Delivery - Ubhi.in',
    description: 'How and where Ubhi ships its handmade goods and Snail Mail parcels.',
  },
  '/refunds': {
    title: 'Returns & Refunds - Ubhi.in',
    description: 'Our returns, refunds and cancellation policy.',
  },
  '/privacy': {
    title: 'Privacy Policy - Ubhi.in',
    description: 'How Ubhi collects, uses and protects your personal data.',
  },
  '/cookies': {
    title: 'Cookie Policy - Ubhi.in',
    description: 'How Ubhi uses cookies and how to manage your preferences.',
  },
  '/terms': {
    title: 'Terms & Conditions - Ubhi.in',
    description: 'The terms that apply when you use Ubhi.in or buy from us.',
  },
};

export function normalizePathname(pathname) {
  if (!pathname) return '/';
  const cleaned = pathname.replace(/\/+$/, '') || '/';
  return cleaned === '/home' ? '/' : cleaned;
}

export function hashForPath(pathname) {
  const normalized = normalizePathname(pathname);
  return PATH_TO_HASH[normalized] || '#home';
}

export function pathForHash(hash) {
  return HASH_TO_PATH[hash] || null;
}

export function metadataForPath(pathname) {
  const normalized = normalizePathname(pathname);
  return PAGE_METADATA[normalized] || PAGE_METADATA['/'];
}
