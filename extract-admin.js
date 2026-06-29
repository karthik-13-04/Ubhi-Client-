const fs = require('fs');
const path = require('path');

const adminPath = 'src/generated-site/page-admin.jsx';
const content = fs.readFileSync(adminPath, 'utf8');

// Find all tabs
const tabRegex = /<div className="admin-tab-content[^>]*id="admin-tab-([^"]+)"[^>]*>([\s\S]*?)(?=<div className="admin-tab-content|$)/g;
let match;
const tabs = {};

while ((match = tabRegex.exec(content)) !== null) {
  const tabName = match[1];
  const tabHtml = match[0].trim();
  tabs[tabName] = tabHtml;
}

console.log('Tabs found:', Object.keys(tabs));

// For each tab, create a React component file in src/components/admin
const tabToComponentMap = {
  'overview': 'AdminOverview',
  'gallery': 'AdminGallery',
  'artfolio': 'AdminArtPortfolio',
  'workshops': 'AdminWorkshops',
  'shop': 'AdminShop',
  'snail': 'AdminSnailMail',
  'customers': 'AdminCustomers',
  'journal': 'AdminJournal',
  'orders': 'AdminOrders',
  'updates': 'AdminUpdates',
  'profile': 'AdminSiteProfile',
  'settings': 'AdminSiteSettings',
};

for (const [tabId, htmlContent] of Object.entries(tabs)) {
  const componentName = tabToComponentMap[tabId];
  if (!componentName) {
    console.warn('No component name for', tabId);
    continue;
  }
  
  // The htmlContent includes the <div className="admin-tab-content..."> wrapper.
  // We want to export this as a functional component.
  // Note: we replace className="admin-tab-content is-active" with just "admin-tab-content" if we want, or leave it.
  
  let jsxContent = `import React from 'react';\nimport useStore from '../../hooks/useStore';\n\nexport default function ${componentName}() {\n  return (\n    ${htmlContent.replace(/\n/g, '\n    ')}\n  );\n}\n`;
  
  // Remove trailing </div> if regex grabbed too much?
  // Actually, the regex `(?=<div className="admin-tab-content|$)` will leave the last </div> belonging to the parent?
  // Let's check if the htmlContent is balanced.
  fs.writeFileSync(`src/components/admin/${componentName}.jsx`, jsxContent);
  console.log(`Created ${componentName}.jsx`);
}
