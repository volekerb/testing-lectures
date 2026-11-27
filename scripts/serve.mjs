import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { base as configuredBase } from '../course.config.mjs';
const dist = resolve(import.meta.dirname, '../dist');
let base = configuredBase;
try { base = JSON.parse(await readFile(resolve(dist, '.course-build.json'), 'utf8')).base; } catch {}
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2', '.wasm': 'application/wasm', '.zip': 'application/zip', '.pf_fragment': 'application/octet-stream', '.pf_index': 'application/octet-stream', '.pf_meta': 'application/octet-stream' };
const port = Number(process.env.PORT || 4321);
createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    if (url.pathname === '/' && base !== '/') { res.writeHead(302, { Location: base }); res.end(); return; }
    if (!url.pathname.startsWith(base)) { res.writeHead(404); res.end('Not found'); return; }
    let target = resolve(dist, '.' + sep + decodeURIComponent(url.pathname.slice(base.length)));
    if (target !== dist && !target.startsWith(dist + sep)) { res.writeHead(403); res.end('Forbidden'); return; }
    if ((await stat(target)).isDirectory()) {
      if (!url.pathname.endsWith('/')) { res.writeHead(301, { Location: url.pathname + '/' + url.search }); res.end(); return; }
      target = resolve(target, 'index.html');
    }
    const data = await readFile(target);
    res.writeHead(200, { 'Content-Type': mime[extname(target)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(data);
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(port, '127.0.0.1', () => console.log(`Course preview: http://127.0.0.1:${port}${base}`));
