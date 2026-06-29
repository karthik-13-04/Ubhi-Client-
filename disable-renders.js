const fs = require('fs');

const filePath = 'public/script.js';
let content = fs.readFileSync(filePath, 'utf8');

const funcs = [
  'renderHomeGallery',
  'renderWorkshops',
  'renderShop',
  'renderSnailMailArchive',
  'renderSnailMailReviews',
  'renderJournal',
  'renderArtPortfolio'
];

funcs.forEach(f => {
  const target = `function ${f}() {`;
  if (content.includes(target)) {
    content = content.replace(target, `function ${f}() { return; // disabled for React refactor`);
    console.log(`Disabled ${f}`);
  } else {
    // try with args or spacing
    const regex = new RegExp(`function\\s+${f}\\s*\\([^)]*\\)\\s*\\{`);
    content = content.replace(regex, (match) => `${match} return; // disabled for React refactor`);
    console.log(`Disabled ${f} (regex)`);
  }
});

fs.writeFileSync(filePath, content);
console.log('Done disabling renders.');
