import fs from 'fs';
import path from 'path';

const fragmentsDir = path.join(process.cwd(), 'src', 'site-fragments');

export function loadFragment(name) {
  return fs.readFileSync(path.join(fragmentsDir, `${name}.html`), 'utf8');
}
