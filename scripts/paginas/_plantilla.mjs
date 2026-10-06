// ============================================================
//  Plantilla de las páginas interiores. Toma loader, cabecera y
//  pie de index.html (igual que galeria.py) para que cualquier
//  cambio en la portada se herede al regenerar, y añade:
//  hero con migas de pan, bloques de contenido, FAQ, enlaces
//  relacionados, CTA, Open Graph y JSON-LD.
//
//  Todas las rutas son absolutas (/public/...): piq3d.com se sirve
//  desde la raíz y el espejo de GitHub Pages ya no existe.
// ============================================================

import { DOMINIO, NEGOCIO, PASOS, PIE, CSS_VERSION, STYLES_VERSION, MAIN_VERSION } from './_datos.mjs';

export const escapa = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const sinEtiquetas = (html) => String(html).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
export const abs = (p) => (/^https?:/.test(p) ? p : `${DOMINIO}/${String(p).replace(/^\//, '')}`);
export const words = (txt) => `<span class="words"><span class="mask"><span class="word">${txt}</span></span></span>`;

const FLECHA = '<svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10h14M11 4l6 6-6 6"/></svg>';

/** Botón con el mismo marcado que la portada (fondo sesgado + máscara al pasar el ratón). */
export const btn = (texto, href, { claro = false, externo = false, pequeno = false } = {}) =>
  `<a class="btn ${pequeno ? 'btn--small' : 'btn--large'}${claro ? ' btn--light' : ''}" href="${href}"${externo ? ' target="_blank" rel="noopener"' : ''} data-hover="mask"><span class="btn__bg"></span><span class="btn__content"><span class="btn__label">${texto}</span>${FLECHA}</span><span class="btn__mask" aria-hidden="true"><span class="btn__label">${texto}</span>${FLECHA}</span></a>`;

const col = (titulo, enlaces, vacio) =>
  `<div><h4>${titulo}</h4><ol>${enlaces.length ? enlaces.map((e) => `<li><a class="ulink" href="${e.url}">${escapa(e.texto)}</a></li>`).join('') : `<li>${vacio}</li>`}</ol></div>`;

/** Columnas Servicios / Zonas / Blog. Se inyectan en el pie de todas las páginas (también galería y legales). */
export const columnasPie = () =>
  `<div class="footer__cols">${col('Servicios', PIE.servicios)}${col('Zonas', PIE.zonas)}${col('Blog', PIE.blog, 'Muy pronto')}</div>`;

/* ---------- trozos de la portada ---------- */

const absolutiza = (html) =>
  html
    .replace(/href="public\//g, 'href="/public/')
    .replace(/src="public\//g, 'src="/public/')
    .replace(/href="#top"/g, 'href="/"')
    .replace(/href="#/g, 'href="/#')
    .replace(/href="galeria\/"/g, 'href="/galeria/"');

export function trozosPortada(indexHtml) {
  const corta = (a, b) => indexHtml.slice(indexHtml.indexOf(a), indexHtml.indexOf(b));
  const loader = absolutiza(corta('<!-- LOADER -->', '<!-- HEADER -->'));
  const header = absolutiza(corta('<!-- HEADER -->', '<main id="top">'));
  let footer = absolutiza(corta('<!-- FOOTER -->', '<script src="public/vendor/'));
  // Columnas nuevas detrás de la lista de enlaces del pie (misma rejilla .footer__info).
  const fin = footer.indexOf('</section>', footer.indexOf('<section class="footer__info">'));
  footer = footer.slice(0, fin) + '      ' + columnasPie() + '\n    ' + footer.slice(fin);
  return { loader, header, footer };
}

/* ---------- bloques ---------- */

const figura = (f) => {
  if (!f) return '';
  const pie = f.pie ? `<figcaption>${escapa(f.pie)}</figcaption>` : '';
  if (f.video) {
    return `<figure class="ps__figure reveal-up"><video controls muted playsinline preload="none" poster="/${f.poster}" width="${f.w}" height="${f.h}" aria-label="${escapa(f.alt)}"><source src="/${f.video}" type="video/mp4"></video>${pie}</figure>`;
  }
  return `<figure class="ps__figure reveal-up"><img src="/${f.src}" alt="${escapa(f.alt)}" width="${f.w}" height="${f.h}" loading="lazy">${pie}</figure>`;
};

const seccion = (esquema, h2, cuerpo, fig = null, ancho = false) =>
  `  <section class="ps" data-scheme="${esquema}">
    <div class="ps__inner${fig && !ancho ? '' : ' ps__inner--full'}">
      <div>
        <h2 class="ps__title">${words(escapa(h2))}</h2>
        ${cuerpo}
      </div>
      ${figura(fig)}
    </div>
  </section>\n`;

const bloqueTexto = (b, esquema) => seccion(esquema, b.h2, `<div class="ps__body reveal-up">\n${b.html.trim()}\n        </div>`, b.figura);

const bloquePasos = (b, esquema) =>
  seccion(
    esquema,
    b.h2 || 'Cómo trabajamos',
    `${b.intro ? `<div class="ps__body reveal-up"><p>${b.intro}</p></div>` : ''}<ol class="steps reveal-up">${PASOS.map((p, i) => `<li><span class="steps__num">0${i + 1}</span><span class="steps__title">${p.t}</span><p>${p.p}</p></li>`).join('')}</ol>`,
    null,
    true,
  );

const tarjeta = (c) =>
  `<li class="card reveal-up"><a href="/trabajos/${c.slug}/"><span class="card__media"><img src="/${c.imagen.src}" alt="${escapa(c.imagen.alt)}" width="${c.imagen.w}" height="${c.imagen.h}" loading="lazy"></span><span class="card__title">${escapa(c.nombre)}</span><span class="card__meta">${escapa(c.cliente)} · ${escapa(c.localidad)} · ${c.anio}</span><p class="card__desc">${escapa(c.resumen)}</p></a></li>`;

const bloqueCasos = (b, esquema, casos) =>
  seccion(
    esquema,
    b.h2,
    `${b.intro ? `<div class="ps__body reveal-up"><p>${b.intro}</p></div>` : ''}<ul class="cards${b.casos.length === 2 || b.casos.length === 4 ? ' cards--2' : ''}">${b.casos.map((s) => { if (!casos[s]) throw new Error(`Caso desconocido: ${s}`); return tarjeta(casos[s]); }).join('')}</ul>${b.html ? `<div class="ps__body reveal-up">${b.html}</div>` : ''}`,
    null,
    true,
  );

const bloqueFaq = (b, esquema) =>
  seccion(
    esquema,
    b.h2 || 'Preguntas frecuentes',
    `<ul class="faq reveal-up">${b.faq.map((f) => `<li><details><summary>${escapa(f.p)}</summary><div class="faq__a">${f.r}</div></details></li>`).join('')}</ul>`,
    null,
    true,
  );

const bloqueRelacionados = (b, esquema) =>
  seccion(
    esquema,
    b.h2 || 'Te puede interesar',
    `<ul class="related reveal-up">${b.enlaces.map((e) => `<li><a href="${e.url}">${escapa(e.texto)}</a></li>`).join('')}</ul>`,
    null,
    true,
  );

const cta = (c) =>
  `  <section class="touch gal-cta" data-scheme="dark">
    <div class="touch__content">
      <p class="tag tag--light"><span>Contacto</span></p>
      <h2 class="touch__title">${words(escapa(c.titulo))}</h2>
      <p class="reveal-up gal-cta__p">${c.texto}</p>
      <div class="ph__cta reveal-up">${btn('WhatsApp', NEGOCIO.whatsapp, { claro: true, externo: true })}${btn('Email', `mailto:${NEGOCIO.email}`, { claro: true })}</div>
    </div>
  </section>\n`;

/* ---------- JSON-LD ---------- */

const negocioLd = (areaServed) => ({
  '@type': 'LocalBusiness',
  '@id': NEGOCIO.id,
  name: NEGOCIO.nombre,
  description: NEGOCIO.descripcion,
  url: `${DOMINIO}/`,
  telephone: NEGOCIO.telefono,
  email: NEGOCIO.email,
  image: NEGOCIO.imagen,
  logo: NEGOCIO.logo,
  address: { '@type': 'PostalAddress', addressLocality: NEGOCIO.localidad, postalCode: NEGOCIO.cp, addressRegion: NEGOCIO.provincia, addressCountry: 'ES' },
  openingHoursSpecification: NEGOCIO.horario.map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.dias, opens: h.abre, closes: h.cierra })),
  sameAs: [NEGOCIO.instagram, NEGOCIO.tiktok],
  ...(areaServed ? { areaServed } : {}),
});

const ciudades = (nombres) => nombres.map((n) => ({ '@type': 'City', name: n }));

export function jsonLd(p, url) {
  const migas = [{ nombre: 'Inicio', url: `${DOMINIO}/` }, ...(p.migas || []).map((m) => ({ nombre: m.nombre, url: abs(m.url) })), { nombre: p.migaActual || p.h1.join(' '), url }];
  const grafo = [
    negocioLd(p.areaServed ? ciudades(p.areaServed) : undefined),
    {
      '@type': 'BreadcrumbList',
      itemListElement: migas.map((m, i) => ({ '@type': 'ListItem', position: i + 1, name: m.nombre, item: m.url })),
    },
  ];
  if (p.servicio) {
    grafo.push({
      '@type': 'Service',
      '@id': `${url}#servicio`,
      name: p.servicio.nombre,
      serviceType: p.servicio.tipo,
      description: p.description,
      provider: { '@id': NEGOCIO.id },
      url,
      ...(p.areaServed ? { areaServed: ciudades(p.areaServed) } : {}),
      ...(p.ogImagen ? { image: abs(p.ogImagen) } : {}),
    });
  }
  if (p.obra) {
    grafo.push({
      '@type': 'CreativeWork',
      '@id': `${url}#obra`,
      name: p.obra.nombre,
      description: p.description,
      image: p.obra.imagenes.map(abs),
      creator: { '@id': NEGOCIO.id },
      dateCreated: String(p.obra.anio),
      locationCreated: { '@type': 'Place', name: 'Sueca, Valencia' },
      about: { '@type': 'Thing', name: p.obra.evento },
      url,
    });
  }
  if (p.lista) {
    grafo.push({ '@type': 'ItemList', itemListElement: p.lista.map((u, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(u) })) });
  }
  const faq = (p.bloques || []).find((b) => b.tipo === 'faq');
  if (faq) {
    grafo.push({
      '@type': 'FAQPage',
      mainEntity: faq.faq.map((f) => ({ '@type': 'Question', name: f.p, acceptedAnswer: { '@type': 'Answer', text: sinEtiquetas(f.r) } })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': grafo };
}

/* ---------- página completa ---------- */

export function render(p, { trozos, casos }) {
  const url = `${DOMINIO}/${p.ruta}/`;
  const og = p.ogImagen ? abs(`public/og/${p.ruta.replace(/\//g, '-')}.jpg`) : NEGOCIO.imagen;
  let n = 0;
  const esquema = () => (n++ % 2 ? 'dark' : 'light');
  const bloques = (p.bloques || [])
    .map((b) => {
      const e = esquema();
      if (b.tipo === 'texto') return bloqueTexto(b, e);
      if (b.tipo === 'pasos') return bloquePasos(b, e);
      if (b.tipo === 'casos') return bloqueCasos(b, e, casos);
      if (b.tipo === 'faq') return bloqueFaq(b, e);
      if (b.tipo === 'relacionados') return bloqueRelacionados(b, e);
      throw new Error(`Bloque desconocido: ${b.tipo}`);
    })
    .join('');

  const migas = [{ nombre: 'Inicio', url: '/' }, ...(p.migas || [])];
  const crumbs = `<nav aria-label="Migas de pan"><ol class="crumbs">${migas.map((m) => `<li><a href="${m.url}">${escapa(m.nombre)}</a></li>`).join('')}<li aria-current="page">${escapa(p.migaActual || p.h1.join(' '))}</li></ol></nav>`;

  const ld = JSON.stringify(jsonLd(p, url)).replace(/</g, '\\u003c');

  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapa(p.title)}</title>
<meta name="description" content="${escapa(p.description)}">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#0a0a0a">
<meta property="og:type" content="${p.ogTipo || 'website'}">
<meta property="og:site_name" content="PIQ3D">
<meta property="og:locale" content="es_ES">
<meta property="og:title" content="${escapa(p.title)}">
<meta property="og:description" content="${escapa(p.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/public/logo/extrusor_white.png">
<link rel="stylesheet" href="/public/fonts/fonts.css?v=1">
<link rel="stylesheet" href="/styles.css?v=${STYLES_VERSION}">
<link rel="stylesheet" href="/public/css/paginas.css?v=${CSS_VERSION}">
<script type="application/ld+json">${ld}</script>
</head>
<body class="page-galeria page-seo">

${trozos.loader}${trozos.header}<main id="top">

  <section class="gal-hero ph" data-scheme="dark">
    ${crumbs}
    <p class="tag tag--light ph__label"><span>${escapa(p.etiqueta)}</span></p>
    <h1 class="gal-hero__title">${p.h1.map((l) => words(escapa(l))).join('<br>')}</h1>
    <p class="gal-hero__desc reveal-up">${p.intro}</p>
    <div class="ph__cta reveal-up">${btn('Presupuesto por WhatsApp', NEGOCIO.whatsapp, { claro: true, externo: true })}${btn('Escribir un email', `mailto:${NEGOCIO.email}`, { claro: true })}</div>
  </section>

${bloques}${cta(p.cta || { titulo: '¿Hablamos?', texto: 'Cuéntanos qué necesitas y te pasamos presupuesto con el diseño 3D incluido.' })}
</main>

${trozos.footer}<script src="/public/vendor/gsap.min.js"></script>
<script src="/public/vendor/ScrollTrigger.min.js"></script>
<script src="/public/vendor/lenis.min.js"></script>
<script src="/main.js?v=${MAIN_VERSION}"></script>
</body>
</html>
`;
}
