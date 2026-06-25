import fs from 'fs';
import path from 'path';

const root = process.cwd();
const sourcePath = path.join(root, 'site-source', 'index.html');
const outDir = path.join(root, 'src', 'site-fragments');

const routeMap = {
  '#home': '/#home',
  '#about': '/about#about',
  '#workshops': '/workshops#workshops',
  '#shop': '/shop#shop',
  '#snail-mail': '/snail-mail#snail-mail',
  '#art': '/art#art',
  '#journal': '/journal#journal',
  '#admin': '/admin#admin',
  '#account': '/account#account',
  '#contact': '/contact#contact',
  '#faq': '/faq#faq',
  '#shipping': '/shipping#shipping',
  '#refunds': '/refunds#refunds',
  '#privacy': '/privacy#privacy',
  '#cookies': '/cookies#cookies',
  '#terms': '/terms#terms',
  '#404': '/not-found#404',
};

const pageIds = [
  'page-home',
  'page-workshops',
  'page-shop',
  'page-snail-mail',
  'page-art',
  'page-journal',
  'page-about',
  'page-admin',
  'page-account',
  'page-contact',
  'page-faq',
  'page-shipping',
  'page-refunds',
  'page-privacy',
  'page-cookies',
  'page-terms',
  'page-404',
];

function transformMarkup(input) {
  return input
    .replace(/(src|href)="assets\//g, '$1="/assets/')
    .replace(/href="#([^"]+)"/g, (match, hashName) => {
      const hash = `#${hashName}`;
      return `href="${routeMap[hash] || hash}"`;
    });
}

function extractBlock(html, startMarker) {
  const start = html.indexOf(startMarker);
  if (start === -1) {
    throw new Error(`Missing block start: ${startMarker}`);
  }

  let i = start;
  let depth = 0;
  let started = false;

  while (i < html.length) {
    const nextOpen = html.indexOf('<div', i);
    const nextClose = html.indexOf('</div>', i);

    if (nextClose === -1) {
      throw new Error(`Unclosed div block for ${startMarker}`);
    }

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      started = true;
      i = nextOpen + 4;
      continue;
    }

    depth -= 1;
    i = nextClose + 6;

    if (started && depth === 0) {
      return html.slice(start, i);
    }
  }

  throw new Error(`Failed to extract block for ${startMarker}`);
}

function extractSimple(html, openMarker, closeMarker) {
  const start = html.indexOf(openMarker);
  if (start === -1) {
    throw new Error(`Missing marker: ${openMarker}`);
  }
  const end = html.indexOf(closeMarker, start);
  if (end === -1) {
    throw new Error(`Missing closing marker: ${closeMarker}`);
  }
  return html.slice(start, end + closeMarker.length);
}

const html = fs.readFileSync(sourcePath, 'utf8');
fs.mkdirSync(outDir, { recursive: true });

const header = transformMarkup(extractSimple(html, '<header class="site-header"', '</header>'));
const footer = transformMarkup(extractSimple(html, '<footer class="site-footer">', '</footer>'));
const overlaysStart = html.indexOf('    <!-- Journal Dialogue Modal -->');
const overlaysEnd = html.indexOf('    <script src="script.js');
const overlays = transformMarkup(html.slice(overlaysStart, overlaysEnd).trim());

fs.writeFileSync(path.join(outDir, 'header.html'), header);
fs.writeFileSync(path.join(outDir, 'footer.html'), footer);
fs.writeFileSync(path.join(outDir, 'overlays.html'), overlays);

for (const pageId of pageIds) {
  const block = extractBlock(html, `<div id="${pageId}"`);
  fs.writeFileSync(path.join(outDir, `${pageId}.html`), transformMarkup(block));
}

console.log(`Extracted ${pageIds.length} page fragments into ${outDir}`);
