#!/usr/bin/env node
// ============================================================
//  Genera las páginas interiores SEO (servicios, zonas, trabajos),
//  el sitemap.xml y el trozo de pie compartido.
//
//      node scripts/build-paginas.mjs
//      python scripts/og.py          (imágenes Open Graph, después)
//      python scripts/galeria.py     (la galería hereda el pie nuevo)
//      node scripts/build-legal.mjs  (las legales también)
//
//  La portada (index.html) NO se toca: cabecera, pie y loader se
//  copian de ella en cada ejecución. La salida se versiona en git,
//  como la galería y las legales: el sitio se despliega copiando
//  el repo tal cual.
//
//  Antes de escribir nada comprueba: un solo H1 por página, title
//  ≤ 60 y description ≤ 155 y únicos, JSON-LD parseable, enlaces y
//  ficheros internos existentes y que ninguna página quede huérfana.
// ============================================================

import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { DOMINIO } from './paginas/_datos.mjs';
import { columnasPie, render, trozosPortada } from './paginas/_plantilla.mjs';
import { CASOS, paginaCaso } from './paginas/casos.mjs';
import { SERVICIOS_PAG } from './paginas/servicios.mjs';
import { ZONAS_PAG } from './paginas/zonas.mjs';
import { paginaIndice } from './paginas/indice.mjs';
import { SERVICIOS_B_PAG } from './paginas/servicios-b.mjs';
import { CLIENTES_PAG } from './paginas/clientes.mjs';
import { PUEBLOS_PAG } from './paginas/pueblos.mjs';
import { BLOG_PAG } from './paginas/blog.mjs';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const HOY = new Date().toISOString().slice(0, 10);
const existe = (p) => access(resolve(RAIZ, p)).then(() => true, () => false);

const indexHtml = await readFile(resolve(RAIZ, 'index.html'), 'utf8');
const trozos = trozosPortada(indexHtml);
const casos = Object.fromEntries(CASOS.map((c) => [c.slug, c]));

const paginas = [...SERVICIOS_PAG, ...SERVICIOS_B_PAG, ...CLIENTES_PAG, ...ZONAS_PAG, ...PUEBLOS_PAG, paginaIndice(CASOS), ...CASOS.map((c) => paginaCaso(c, casos)), ...BLOG_PAG];

/* ---------- render ---------- */
const salida = paginas.map((p) => ({ p, url: `/${p.ruta}/`, html: render(p, { trozos, casos }) }));

/* ---------- comprobaciones ---------- */
const errores = [];
const vistos = { title: new Map(), description: new Map() };
const urlsGeneradas = new Set(salida.map((s) => s.url));
const entrantes = new Map(salida.map((s) => [s.url, 0]));
const otrasUrls = new Set(['/', '/galeria/', '/aviso-legal/', '/privacidad/', '/cookies/', '/terminos/']);

for (const { p, url, html } of salida) {
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) errores.push(`${url}: ${h1} H1`);
  if (p.title.length > 60) errores.push(`${url}: title de ${p.title.length} caracteres`);
  if (p.description.length > 155) errores.push(`${url}: description de ${p.description.length} caracteres`);
  for (const k of ['title', 'description']) {
    if (vistos[k].has(p[k])) errores.push(`${url}: ${k} repetido con ${vistos[k].get(p[k])}`);
    vistos[k].set(p[k], url);
  }
  const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  try { JSON.parse(ld[1]); } catch (e) { errores.push(`${url}: JSON-LD inválido (${e.message})`); }

  // Enlaces y recursos internos (href/src/poster que empiecen por una sola barra).
  const cuerpo = html.slice(html.indexOf('<main id="top">'), html.indexOf('</main>'));
  for (const m of html.matchAll(/(?:href|src|poster)="(\/[^"/][^"]*|\/)"/g)) {
    const limpia = m[1].split('#')[0].split('?')[0];
    if (!limpia) continue; // "/#contacto" → portada
    const fichero = limpia.endsWith('/') ? `${limpia}index.html` : limpia;
    if (urlsGeneradas.has(limpia) || otrasUrls.has(limpia)) {
      if (urlsGeneradas.has(limpia) && limpia !== url && cuerpo.includes(m[0])) entrantes.set(limpia, entrantes.get(limpia) + 1);
      continue;
    }
    if (!(await existe(fichero.slice(1)))) errores.push(`${url}: enlace o recurso inexistente ${m[1]}`);
  }
  // Enlaces desde el pie (comunes a todas) cuentan como entrantes también.
  for (const m of columnasPie().matchAll(/href="([^"]+)"/g)) if (entrantes.has(m[1]) && m[1] !== url) entrantes.set(m[1], entrantes.get(m[1]) + 1);
}
for (const [u, n] of entrantes) if (n === 0) errores.push(`${u}: página huérfana (ningún enlace entrante)`);

if (errores.length) {
  console.error('\n  ERRORES, no se escribe nada:\n  - ' + errores.join('\n  - ') + '\n');
  process.exit(1);
}

/* ---------- escritura ---------- */
for (const { p, url, html } of salida) {
  const carpeta = resolve(RAIZ, p.ruta);
  await mkdir(carpeta, { recursive: true });
  await writeFile(resolve(carpeta, 'index.html'), html, 'utf8');
  const palabras = html.slice(html.indexOf('<main id="top">'), html.indexOf('</main>')).replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  console.log(`  pagina  ${url.padEnd(44)} ${String(palabras).padStart(5)} palabras`);
}

// Trozo de pie para galeria.py y build-legal.mjs.
await writeFile(resolve(RAIZ, 'scripts/paginas/footer-cols.html'), columnasPie() + '\n', 'utf8');

// Lista de imágenes OG a generar (scripts/og.py).
const og = salida
  .filter(({ p }) => p.ogImagen)
  .map(({ p }) => ({ out: `public/og/${p.ruta.replace(/\//g, '-')}.jpg`, src: p.ogImagen, titulo: p.ogTitulo || p.h1.join(' '), etiqueta: p.etiqueta }));
await writeFile(resolve(RAIZ, 'scripts/paginas/og.json'), JSON.stringify(og, null, 1), 'utf8');

// sitemap.xml con todo.
const fijas = [
  ['/', '2026-10-02', '1.0'],
  ['/galeria/', '2026-10-02', '0.8'],
  ['/terminos/', '2026-10-02', '0.3'],
  ['/aviso-legal/', '2026-10-02', '0.2'],
  ['/privacidad/', '2026-10-02', '0.2'],
  ['/cookies/', '2026-10-02', '0.2'],
];
const prioridad = (p) => (p.tipo === 'servicio' ? '0.9' : p.tipo === 'zona' ? '0.8' : p.tipo === 'indice' ? '0.7' : p.tipo === 'articulo' ? '0.6' : '0.6');
const urls = [...fijas, ...salida.map(({ p, url }) => [url, HOY, prioridad(p)])]
  .map(([u, d, pr]) => `  <url>\n    <loc>${DOMINIO}${u}</loc>\n    <lastmod>${d}</lastmod>\n    <priority>${pr}</priority>\n  </url>`)
  .join('\n');
await writeFile(resolve(RAIZ, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, 'utf8');

console.log(`\n  ${salida.length} páginas, sitemap con ${fijas.length + salida.length} URL, ${og.length} imágenes OG pendientes de scripts/og.py\n`);
