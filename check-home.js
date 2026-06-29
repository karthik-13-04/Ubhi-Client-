const fs = require('fs');
const content = fs.readFileSync('src/generated-site/page-home.jsx', 'utf8');

console.log('Includes PageAbout:', content.includes('PageAbout'));
console.log('Includes id="page-about":', content.includes('id="page-about"'));
console.log('Includes id="page-art":', content.includes('id="page-art"'));
console.log('Includes PageArt:', content.includes('PageArt'));
