import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join, extname } from 'node:path';
import { base } from '../course.config.mjs';

const dist = resolve(import.meta.dirname, '../dist');
const pages = [];
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (entry.name.endsWith('.html')) pages.push(file);
  }
}
await walk(dist);
const failures = [];
let checked = 0;
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  const pageUrl = new URL(base + file.slice(dist.length + 1).replace(/index\.html$/, ''), 'https://course.invalid');
  for (const match of html.matchAll(/(?:href|src)="([^"<>]+)"/g)) {
    const raw = match[1].replaceAll('&amp;', '&');
    if (/^(?:mailto:|tel:|data:|javascript:)/.test(raw)) continue;
    const url = new URL(raw, pageUrl);
    if (url.origin !== pageUrl.origin) continue;
    // Astro's locale redirect targets the base root; Slidev hashes are client routes.
    if (!url.pathname.startsWith(base)) { failures.push(`${pageUrl.pathname}: outside course base: ${raw}`); continue; }
    const relative = decodeURIComponent(url.pathname.slice(base.length));
    let target = resolve(dist, relative || '.');
    if (target !== dist && !target.startsWith(dist + '/')) { failures.push(`Invalid target: ${raw}`); continue; }
    try {
      const info = await stat(target);
      if (info.isDirectory()) target = join(target, 'index.html');
      await stat(target);
      if (url.hash && !url.hash.startsWith('#/') && extname(target) === '.html') {
        const targetHtml = await readFile(target, 'utf8');
        const id = decodeURIComponent(url.hash.slice(1));
        if (!targetHtml.includes(`id="${id}"`)) failures.push(`${pageUrl.pathname}: missing anchor ${raw}`);
      }
      checked++;
    } catch { failures.push(`${pageUrl.pathname}: missing ${raw}`); }
  }
}
if (failures.length) throw new Error(failures.join('\n'));
console.log(`Checked ${checked} local links/assets across ${pages.length} HTML pages.`);
