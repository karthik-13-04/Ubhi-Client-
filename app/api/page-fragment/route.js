import { createElement } from 'react';
import { NextResponse } from 'next/server';
import { renderToReadableStream } from 'react-dom/server.edge';
import {
  PageAbout,
  PageArt,
  PageContact,
  PageCookies,
  PageFaq,
  PageHome,
  PageJournal,
  PagePrivacy,
  PageRefunds,
  PageShipping,
  PageShop,
  PageSnailMail,
  PageTerms,
  PageWorkshops,
} from '../../../src/generated-site';

const pageComponents = {
  'page-home': PageHome,
  'page-about': PageAbout,
  'page-workshops': PageWorkshops,
  'page-shop': PageShop,
  'page-snail-mail': PageSnailMail,
  'page-art': PageArt,
  'page-journal': PageJournal,
  'page-contact': PageContact,
  'page-faq': PageFaq,
  'page-shipping': PageShipping,
  'page-refunds': PageRefunds,
  'page-privacy': PagePrivacy,
  'page-cookies': PageCookies,
  'page-terms': PageTerms,
};

async function renderComponentToHtml(PageComponent) {
  const stream = await renderToReadableStream(createElement(PageComponent));
  return new Response(stream).text();
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');
  const PageComponent = page ? pageComponents[page] : null;

  if (!page || !PageComponent) {
    return NextResponse.json({ error: 'Unknown page fragment' }, { status: 404 });
  }

  return NextResponse.json({
    page,
    html: await renderComponentToHtml(PageComponent),
  });
}
