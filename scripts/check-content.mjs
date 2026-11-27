import assert from 'node:assert/strict';
import lecture from '../lecture-01.config.mjs';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('../', import.meta.url);
async function walk(directory, prefix = '') {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(prefix, entry.name);
    if (entry.isDirectory()) files.push(...await walk(join(directory, entry.name), path));
    else if (/\.mdx?$/.test(entry.name)) files.push(path);
  }
  return files.sort();
}
const en = await walk(new URL('website/src/content/docs/en/', root).pathname);
const ru = await walk(new URL('website/src/content/docs/ru/', root).pathname);
assert.deepEqual(en, ru, 'Every published page must have an EN/RU counterpart');
for (const lang of ['en', 'ru']) {
  for (const path of en) {
    const text = await readFile(new URL(`website/src/content/docs/${lang}/${path}`, root), 'utf8');
    assert.match(text, /^---\ntitle:/, `${lang}/${path}: title required`);
    assert.match(text, /\ndescription: .+/, `${lang}/${path}: description required`);
    assert.doesNotMatch(text, /\bTODO\b|\bLorem ipsum\b|\u2014|\u2013/, `${lang}/${path}: unfinished content or inconsistent punctuation`);
  }
}
const decks = await Promise.all(['en', 'ru'].map(lang => readFile(new URL(`slides/foundations.${lang}.md`, root), 'utf8')));
const ids = decks.map(deck => [...deck.matchAll(/^name: (.+)$/gm)].map(match => match[1]));
assert.deepEqual(ids[0], ids[1], 'Slide IDs and order must match for language switching');
assert.deepEqual(ids[0], lecture.slideIds, 'Decks must follow the reviewed lecture structure');
assert.equal(new Set(ids[0]).size, ids[0].length, 'Slide IDs must be unique');
assert.equal(ids[0][lecture.boundarySlide - 1], 'boundary');
for (const deck of decks) assert.equal([...deck.matchAll(/<!--\n/g)].length, lecture.slideIds.length, 'Each slide needs speaker notes');
const codeBlocks = deck => [...deck.matchAll(/```(?:js|diff)\n([\s\S]*?)```/g)].map(match => match[1]);
assert.deepEqual(codeBlocks(decks[0]), codeBlocks(decks[1]), 'Executable examples should match across translations');
console.log(`Content parity passed: ${en.length} page pairs, ${ids[0].length} aligned slides, shared code examples.`);
