const fs = require('fs');
const path = require('path');

const adminDir = 'src/components/admin';
const files = fs.readdirSync(adminDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(adminDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('"use client"') && !content.includes("'use client'")) {
    content = "'use client';\n" + content;
    fs.writeFileSync(filePath, content);
  }
});

const pageAdminPath = 'src/generated-site/page-admin.jsx';
let pageAdminContent = fs.readFileSync(pageAdminPath, 'utf8');
if (!pageAdminContent.includes('"use client"') && !pageAdminContent.includes("'use client'")) {
  pageAdminContent = "'use client';\n" + pageAdminContent;
  fs.writeFileSync(pageAdminPath, pageAdminContent);
}

// Fix AdminSiteSettings.jsx
const settingsPath = path.join(adminDir, 'AdminSiteSettings.jsx');
let settingsContent = fs.readFileSync(settingsPath, 'utf8');
// It had duplicated content or extra trailing stuff.
// Let's just restore it cleanly.
settingsContent = `'use client';
import React from 'react';
export default function AdminSiteSettings() {
  return (
    <div className="admin-tab-content" id="admin-tab-settings">
      <div className="admin-section-card">
        <h4>Site Settings Placeholder</h4>
        <p>Settings will be ported here.</p>
      </div>
    </div>
  );
}
`;
fs.writeFileSync(settingsPath, settingsContent);

console.log('Fixed use client and AdminSiteSettings.');
