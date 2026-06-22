const fs = require('fs');
const path = require('path');

const dirs = ['.next', '.next-dev'].map((dir) => path.join(process.cwd(), dir));

try {
  let removed = false;
  dirs.forEach((dir) => {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
      removed = true;
    }
  });
  if (removed) {
    console.log('Removed Next.js cache directories');
  }
} catch (error) {
  console.error('Failed to remove .next cache:', error);
  process.exitCode = 1;
}
