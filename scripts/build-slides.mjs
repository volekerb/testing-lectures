import { spawnSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { zipSync, strToU8 } from 'fflate';
import { base, locales } from '../course.config.mjs';

const root = resolve(import.meta.dirname, '..');
for (const locale of locales) {
  const result = spawnSync(process.execPath, [
    resolve(root, 'node_modules/@slidev/cli/bin/slidev.mjs'),
    'build', `foundations.${locale}.md`,
    '--base', `${base}slides/${locale}/foundations/`,
    '--out', resolve(root, `dist/slides/${locale}/foundations`),
  ], { cwd: resolve(root, 'slides'), env: { ...process.env, VITE_COURSE_BASE: base }, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status || 1);
}

const labFiles = ['README.md', 'README.ru.md', 'contract.mjs', 'check.mjs', 'starter/registration.mjs', 'starter/registration.test.mjs'];
const archive = {};
for (const file of labFiles) {
  archive[`registration-lab/${file}`] = [strToU8(await readFile(resolve(root, 'labs/registration', file), 'utf8')), { mtime: new Date('2026-01-01T00:00:00Z') }];
}
await mkdir(resolve(root, 'dist/downloads'), { recursive: true });
await writeFile(resolve(root, 'dist/downloads/registration-lab.zip'), zipSync(archive, { level: 9 }));
await writeFile(resolve(root, 'dist/.course-build.json'), JSON.stringify({ base, locales }, null, 2));
await writeFile(resolve(root, 'dist/.nojekyll'), '');
console.log(`Built both decks and the standalone lab under ${base}`);
