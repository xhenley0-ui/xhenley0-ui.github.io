import { readdir, copyFile, mkdir, writeFile } from 'node:fs/promises';
import { join, relative, dirname } from 'node:path';
const root = 'dist/client';
// Export without trailing-slash redirects, then provide GitHub Pages directory URLs.
async function visit(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await visit(path);
    else if (
      entry.name.endsWith('.html') &&
      !['index.html', '404.html'].includes(entry.name)
    ) {
      const target = join(
        root,
        relative(root, path).replace(/\.html$/, ''),
        'index.html',
      );
      await mkdir(dirname(target), { recursive: true });
      await copyFile(path, target);
    }
  }
}
await visit(root);
await writeFile(join(root, '.nojekyll'), '');
console.log('Prepared directory routes for GitHub Pages.');
