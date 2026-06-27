import fs from 'fs';
import path from 'path';
import { parse } from 'node-html-parser';

const rootDir = process.cwd();
const fragmentsDir = path.join(rootDir, 'src', 'site-fragments');
const outputDir = path.join(rootDir, 'src', 'generated-site');

const attrMap = new Map([
  ['class', 'className'],
  ['for', 'htmlFor'],
  ['tabindex', 'tabIndex'],
  ['readonly', 'readOnly'],
  ['maxlength', 'maxLength'],
  ['minlength', 'minLength'],
  ['http-equiv', 'httpEquiv'],
  ['fetchpriority', 'fetchPriority'],
  ['autocomplete', 'autoComplete'],
  ['srcset', 'srcSet'],
  ['crossorigin', 'crossOrigin'],
  ['stroke-width', 'strokeWidth'],
  ['stroke-linecap', 'strokeLinecap'],
  ['stroke-linejoin', 'strokeLinejoin'],
  ['stroke-dasharray', 'strokeDasharray'],
  ['stroke-dashoffset', 'strokeDashoffset'],
  ['stroke-miterlimit', 'strokeMiterlimit'],
  ['fill-rule', 'fillRule'],
  ['clip-rule', 'clipRule'],
  ['viewbox', 'viewBox'],
  ['preserveaspectratio', 'preserveAspectRatio'],
  ['patternunits', 'patternUnits'],
  ['patterncontentunits', 'patternContentUnits'],
  ['gradientunits', 'gradientUnits'],
  ['gradienttransform', 'gradientTransform'],
  ['xlink:href', 'xlinkHref'],
  ['xmlns:xlink', 'xmlnsXlink'],
  ['refx', 'refX'],
  ['refy', 'refY'],
]);

const booleanAttrs = new Set([
  'required',
  'disabled',
  'hidden',
  'checked',
  'selected',
  'multiple',
  'muted',
  'playsinline',
  'autoplay',
  'loop',
  'controls',
  'novalidate',
]);

const selfClosingTags = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
  'meta', 'param', 'source', 'track', 'wbr', 'path', 'circle', 'ellipse',
  'line', 'polygon', 'polyline', 'rect', 'stop', 'use'
]);

function toComponentName(fileName) {
  return fileName
    .replace(/\.html$/, '')
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function normalizeText(value) {
  return value
    .replace(/\u00a0/g, '{\'\\u00a0\'}')
    .replace(/\{/g, '{\'{\'}')
    .replace(/\}/g, '{\'}\'}');
}

function styleToObject(styleText) {
  const entries = styleText
    .split(';')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const [rawProp, ...rawValue] = part.split(':');
      const cssProp = rawProp.trim();
      const prop = cssProp.startsWith('--')
        ? JSON.stringify(cssProp)
        : cssProp.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      const value = rawValue.join(':').trim();
      return `${prop}: ${JSON.stringify(value)}`;
    });

  return `{{ ${entries.join(', ')} }}`;
}

function convertAttribute(name, value) {
  const lowerName = name.toLowerCase();
  let jsxName = attrMap.get(lowerName) || name;

  if (
    jsxName === name &&
    !name.startsWith('data-') &&
    !name.startsWith('aria-') &&
    name.includes('-')
  ) {
    jsxName = name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  }

  if (booleanAttrs.has(lowerName)) {
    return value === '' || value.toLowerCase() === lowerName || value.toLowerCase() === 'true'
      ? jsxName
      : `${jsxName}={${JSON.stringify(value)}}`;
  }

  if (jsxName === 'style') {
  return `${jsxName}=${styleToObject(value)}`;
  }

  return `${jsxName}=${JSON.stringify(value)}`;
}

function renderNode(node, level = 2) {
  const indent = '  '.repeat(level);

  if (node.nodeType === 3) {
    const text = node.rawText;
    if (!text.trim()) {
      return text.includes('\n') ? '' : text;
    }
    return `${indent}${normalizeText(text)}`;
  }

  if (node.nodeType === 8) {
    return '';
  }

  const tagName = node.tagName ? node.tagName.toLowerCase() : '';
  if (!tagName) {
    return '';
  }

  const attrs = Object.entries(node.attributes || {})
    .map(([name, value]) => convertAttribute(name, value))
    .join(' ');

  const openTag = attrs ? `<${tagName} ${attrs}` : `<${tagName}`;
  const children = node.childNodes
    .map((child) => renderNode(child, level + 1))
    .filter(Boolean);

  if (!children.length && selfClosingTags.has(tagName)) {
    return `${indent}${openTag} />`;
  }

  if (!children.length) {
    return `${indent}${openTag}></${tagName}>`;
  }

  const renderedChildren = children.join('\n');
  return `${indent}${openTag}>\n${renderedChildren}\n${indent}</${tagName}>`;
}

function renderComponent(fileName, body) {
  const componentName = toComponentName(fileName);
  return `export default function ${componentName}() {\n  return (\n${body}\n  );\n}\n`;
}

fs.mkdirSync(outputDir, { recursive: true });

const fragmentFiles = fs.readdirSync(fragmentsDir).filter((file) => file.endsWith('.html'));
const exports = [];

for (const file of fragmentFiles) {
  const filePath = path.join(fragmentsDir, file);
  const html = fs
    .readFileSync(filePath, 'utf8')
    .replace(/font-family:"EB Garamond",sans-serif/g, "font-family:'EB Garamond',sans-serif");
  const root = parse(`<fragment-root>${html}</fragment-root>`, {
    comment: true,
    blockTextElements: {
      script: true,
      noscript: true,
      style: true,
      pre: true,
    },
  });

  const wrapper = root.querySelector('fragment-root');
  const bodyNodes = wrapper.childNodes
    .map((node) => renderNode(node))
    .filter(Boolean);

  const body =
    bodyNodes.length === 1
      ? bodyNodes[0]
      : `    <>\n${bodyNodes.join('\n')}\n    </>`;

  const componentSource = renderComponent(file, body);
  const outPath = path.join(outputDir, `${file.replace(/\.html$/, '.jsx')}`);
  fs.writeFileSync(outPath, componentSource, 'utf8');
  exports.push(`export { default as ${toComponentName(file)} } from './${file.replace(/\.html$/, '.jsx')}';`);
}

fs.writeFileSync(path.join(outputDir, 'index.js'), `${exports.join('\n')}\n`, 'utf8');
console.log(`Generated ${fragmentFiles.length} JSX components in src/generated-site`);
