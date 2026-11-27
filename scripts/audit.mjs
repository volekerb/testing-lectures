import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { setTimeout } from 'node:timers/promises';
import { resolve } from 'node:path';
import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';
import { base } from '../course.config.mjs';

const root = resolve(import.meta.dirname, '..');
const server = spawn(process.execPath, ['scripts/serve.mjs'], { cwd: root, env: { ...process.env, PORT: '4322' }, stdio: 'ignore' });
let chrome;
try {
  const url = `http://127.0.0.1:4322${base}en/`;
  let ready = false;
  for (let attempt = 0; attempt < 30; attempt++) {
    try { if ((await fetch(url)).ok) { ready = true; break; } } catch {}
    await setTimeout(200);
  }
  if (!ready) throw new Error('Course preview did not start for Lighthouse');
  chrome = await launch({ chromeFlags: ['--headless', '--no-sandbox'], logLevel: 'silent' });
  const result = await lighthouse(url, { port: chrome.port, output: 'json', logLevel: 'error', onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'] });
  await mkdir(resolve(root, 'lighthouse-results'), { recursive: true });
  await writeFile(resolve(root, 'lighthouse-results/home.json'), result.report);
  const scores = Object.fromEntries(Object.entries(result.lhr.categories).map(([key, value]) => [key, Math.round(value.score * 100)]));
  console.log('Lighthouse (mobile):', JSON.stringify(scores));
  if (scores.accessibility < 95 || scores.performance < 85) throw new Error('Lighthouse pilot quality threshold was not met');
} finally {
  if (chrome) await chrome.kill();
  server.kill();
}
