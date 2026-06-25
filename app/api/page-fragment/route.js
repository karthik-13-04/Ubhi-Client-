import { NextResponse } from 'next/server';
import { loadFragment } from '../../../src/lib/site-fragments';

const allowedPages = new Set([
  'page-home',
  'page-about',
  'page-workshops',
  'page-shop',
  'page-snail-mail',
  'page-art',
  'page-journal',
  'page-contact',
  'page-faq',
  'page-shipping',
  'page-refunds',
  'page-privacy',
  'page-cookies',
  'page-terms',
]);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');

  if (!page || !allowedPages.has(page)) {
    return NextResponse.json({ error: 'Unknown page fragment' }, { status: 404 });
  }

  return NextResponse.json({
    page,
    html: loadFragment(page),
  });
}
