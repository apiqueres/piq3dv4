#!/usr/bin/env node
// ============================================================
//  Genera las paginas legales estaticas: aviso-legal/, privacidad/,
//  cookies/ y terminos/ en la raiz del sitio.
//
//      node scripts/build-legal.mjs
//
//  La fuente son scripts/legal/datos.mjs (titular, NIF, fecha) y
//  scripts/legal/paginas.mjs (las clausulas). La salida SI se versiona,
//  igual que galeria/index.html: el sitio se despliega copiando el repo
//  tal cual, sin paso de build.
//
//  Por que paginas sueltas y no secciones de la portada: nginx sirve
//  piq3d.com con "try_files $uri $uri/ =404", asi que /privacidad/ tiene
//  que existir como fichero de verdad. Y un aviso legal no necesita el
//  loader, GSAP ni Lenis para leerse.
//
//  Los estilos van EN LINEA a proposito: nginx marca todo .css como
//  "immutable" durante un año, y una hoja compartida cacheada asi tardaria
//  meses en reflejar un cambio. Colores y tipografias son los de styles.css.
// ============================================================

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { ACTUALIZADO, PENDIENTE_DE_DATOS, TITULAR } from './legal/datos.mjs';
import { PAGINAS } from './legal/paginas.mjs';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const ESTILOS = `
:root{--dark:#0a0a0a;--light:#f5f5f5;--grey:#383838;--grey-2:#949494;--line:#d3d3d3;--red:#c4161c;
--font:"Archivo",system-ui,sans-serif;--font-display:"Anton","Archivo",system-ui,sans-serif;--gutter:24px}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%;background:var(--dark)}
body{margin:0;background:var(--light);color:var(--grey);font-family:var(--font);font-size:clamp(16px,1.25vw,18px);
line-height:1.65;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
a{color:var(--dark);text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1px}
a:hover{text-decoration-thickness:2px}
.top{background:var(--dark);color:var(--light)}
.top__inner{display:flex;align-items:center;justify-content:space-between;gap:20px;max-width:1440px;margin:0 auto;padding:12px var(--gutter)}
.top__logo{display:block;line-height:0}
.top__logo img{height:56px;width:auto}
.top a.volver{color:var(--light);text-decoration:none;font-weight:800;font-stretch:78%;text-transform:uppercase;font-size:clamp(14px,1.2vw,18px)}
.top a.volver:hover{text-decoration:underline}
.envoltorio{max-width:820px;margin:0 auto;padding:clamp(48px,7vw,96px) var(--gutter) clamp(64px,8vw,112px)}
.etiqueta{display:inline-block;margin:0 0 20px;padding:4px 10px;background:var(--dark);color:var(--light);
font-weight:800;font-stretch:78%;text-transform:uppercase;font-size:14px;letter-spacing:.02em}
h1{font-family:var(--font-display);font-weight:400;text-transform:uppercase;font-size:clamp(48px,8vw,110px);
line-height:.88;color:var(--dark);margin:0 0 20px}
.fecha{font-weight:800;font-stretch:78%;text-transform:uppercase;font-size:14px;color:var(--grey-2);margin:0 0 clamp(40px,5vw,64px)}
h2{font-family:var(--font-display);font-weight:400;text-transform:uppercase;font-size:clamp(26px,3vw,40px);line-height:.95;
color:var(--dark);margin:clamp(44px,5vw,64px) 0 18px;padding-top:clamp(28px,3vw,36px);border-top:1px solid var(--line)}
h2:first-of-type{border-top:0;padding-top:0;margin-top:0}
p,li{text-wrap:pretty}
p{margin:0 0 16px}
ul,ol{margin:0 0 16px;padding-left:22px}
li{margin-bottom:9px}
li::marker{color:var(--grey-2)}
strong{color:var(--dark);font-weight:700}
em{color:var(--dark)}
.destacado{border-left:4px solid var(--dark);padding:4px 0 4px 18px;color:var(--dark);margin-bottom:18px}
dl.datos{margin:0 0 16px;display:grid;grid-template-columns:auto 1fr;gap:9px 22px;align-items:baseline}
dl.datos dt{font-weight:800;font-stretch:78%;text-transform:uppercase;font-size:14px;color:var(--grey-2)}
dl.datos dd{margin:0;color:var(--dark)}
table{width:100%;border-collapse:collapse;margin:0 0 18px;font-size:.92em}
th,td{text-align:left;padding:11px 14px 11px 0;border-bottom:1px solid var(--line);vertical-align:top}
th{font-weight:800;font-stretch:78%;text-transform:uppercase;font-size:13px;color:var(--grey-2)}
.tabla-scroll{overflow-x:auto;margin-bottom:18px}
.tabla-scroll table{min-width:460px;margin-bottom:0}
.aviso-pendiente{border:2px solid var(--red);padding:16px 18px;margin-bottom:36px;color:var(--dark);font-size:.92em}
.aviso-pendiente strong{color:var(--red)}
.pie{background:var(--dark);color:var(--grey-2)}
.pie__inner{max-width:1440px;margin:0 auto;padding:32px var(--gutter);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px 32px}
.pie nav{display:flex;flex-wrap:wrap;gap:6px 24px}
.pie nav a{color:var(--light);text-decoration:none;font-weight:800;font-stretch:78%;text-transform:uppercase;font-size:clamp(14px,1.2vw,18px)}
.pie nav a:hover,.pie nav a[aria-current]{text-decoration:underline}
.pie p{margin:0;font-size:14px}
@media (max-width:640px){:root{--gutter:16px}.top__logo img{height:44px}dl.datos{grid-template-columns:1fr;gap:2px}dl.datos dd{margin-bottom:10px}}
`.trim();

const escapa = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Las tablas anchas tienen que poder desplazarse solas en un movil. */
const envuelveTablas = (html) =>
  html.replace(/<table>[\s\S]*?<\/table>/g, (tabla) => `<div class="tabla-scroll">${tabla}</div>`);

const AVISO = PENDIENTE_DE_DATOS
  ? `<div class="aviso-pendiente"><strong>Estamos completando esta página.</strong> Faltan por publicar los datos identificativos del titular, que añadiremos en los próximos días. Todo lo demás que se dice aquí es plenamente aplicable. Si necesitas esos datos ahora, pídenoslos en <a href="mailto:${TITULAR.email}">${TITULAR.email}</a> y te los damos al momento.</div>`
  : '';

function render(pagina) {
  const nav = PAGINAS.map(
    (p) =>
      `<a href="/${p.slug}/"${p.slug === pagina.slug ? ' aria-current="page"' : ''}>${escapa(p.titulo)}</a>`,
  ).join('\n      ');

  const cuerpo = pagina.secciones
    .map((s) => `    <h2>${escapa(s.h)}</h2>\n${envuelveTablas(s.html.trim())}`)
    .join('\n\n');

  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapa(pagina.titulo)} — ${escapa(TITULAR.nombreComercial)}</title>
<meta name="description" content="${escapa(pagina.descripcion)}">
<meta name="theme-color" content="#0a0a0a">
${PENDIENTE_DE_DATOS ? '<meta name="robots" content="noindex">\n' : ''}<link rel="canonical" href="https://${TITULAR.web}/${pagina.slug}/">
<link rel="icon" href="/public/logo/extrusor_white.png">
<link rel="stylesheet" href="/public/fonts/fonts.css?v=1">
<style>${ESTILOS}</style>
</head>
<body>
<header class="top">
  <div class="top__inner">
    <a class="top__logo" href="/" aria-label="PIQ3D inicio"><img src="/public/logo/logo_white.png" alt="PIQ3D" width="1783" height="1417" style="width:auto"></a>
    <a class="volver" href="/">← Volver a la portada</a>
  </div>
</header>

<main class="envoltorio">
  <p class="etiqueta">Legal</p>
  <h1>${escapa(pagina.titulo)}</h1>
  <p class="fecha">Última actualización · ${escapa(ACTUALIZADO)}</p>
  ${AVISO}
${cuerpo}
</main>

<footer class="pie">
  <div class="pie__inner">
    <nav aria-label="Páginas legales">
      ${nav}
    </nav>
    <p>© 2026 ${escapa(TITULAR.nombreComercial)} · ${escapa(TITULAR.domicilio)}</p>
  </div>
</footer>
</body>
</html>
`;
}

for (const pagina of PAGINAS) {
  const carpeta = resolve(RAIZ, pagina.slug);
  await mkdir(carpeta, { recursive: true });
  await writeFile(resolve(carpeta, 'index.html'), render(pagina), 'utf8');
  console.log(`  legal  ${pagina.slug}/index.html`);
}

if (PENDIENTE_DE_DATOS) {
  console.warn(
    '\n  AVISO: las páginas legales se han generado SIN datos fiscales.\n' +
      '  Llevan un recuadro rojo y meta robots=noindex hasta que se rellene\n' +
      '  scripts/legal/datos.mjs y se ponga PENDIENTE_DE_DATOS = false.\n',
  );
}
