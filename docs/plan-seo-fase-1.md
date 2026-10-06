# PIQ3D · Plan SEO — Fase 1 (análisis y propuesta)

Estado: **propuesta pendiente de aprobación**. No se ha tocado ningún fichero de la web.
Fecha: 6 de octubre de 2026.

---

## 1. Qué hay ahora mismo

### 1.1 Tecnología y despliegue

| Punto | Estado |
|---|---|
| Tipo de web | HTML estático sin paso de build. Cada página es una carpeta con `index.html`. |
| Hosting real | **piq3d.com** en nginx (Ubuntu, Hetzner). `try_files $uri $uri/ =404`, HTML con `no-cache`, CSS/JS `immutable` 1 año (de ahí los `?v=N`). |
| Espejo | GitHub Pages sigue activo en `apiqueres.github.io/piq3dv4/`. Las páginas legales ya usan rutas absolutas (`/public/...`), así que allí se ven rotas. Las canonical apuntan a piq3d.com, con lo que no hay riesgo de duplicado grave. |
| Cómo se publica en Hetzner | **No está en el repo** (no hay script de deploy). Hay que saberlo antes de la fase 2 → pregunta P1. |
| Portada | `index.html` escrita a mano. H1 = «Fuera lo aburrido… Hola PIQ3D». Secciones con `h2.tag` (etiqueta pequeña) + `h3` (titular grande). |
| Galería | `scripts/galeria.py` lee `public/img/galeria/manifest.json` (33 piezas: 18 trofeos, 4 medallas, 7 merchandising, 4 cartas QR) y **copia cabecera y pie de `index.html`** con rutas relativas `../`. Es el patrón a seguir para las páginas nuevas. |
| Legales | `scripts/build-legal.mjs` + `scripts/legal/{datos,paginas}.mjs`. Plantilla mínima distinta (CSS en línea, cabecera y pie propios). Los datos del titular (`TITULAR`) ya sirven para el JSON-LD. |
| 404 | `404.html` con rutas absolutas, `noindex`. Correcto. |
| CSS | `styles.css` (23 KB, `?v=19`). Componentes reutilizables: `.header/.nav/.burger`, `.footer__*`, `.tag`, `.words/.mask/.word` (revelado de palabras), `.reveal-up`, `.btn` (`--large/--small/--light/--solid/--icon`), `.gal-hero` + `.gal__title` (portada de subpágina), `.gal__grid`, `.work__list` + `.case` (tarjetas de trabajos con vídeo/foto), `.about__*` (texto + lista + figura), `.stats/.stat` (tres cifras), `.touch` + `.contact__row` (bloque de contacto), `.office`. |
| JS | `main.js` ya funciona en subpáginas (lo demuestra `galeria/`): todo lo que depende del hero está protegido con `if`. Lenis, reloj, cambio de color de cabecera por `data-scheme`, revelados y vídeos al pasar el ratón sirven tal cual. |
| Fuentes | Autoalojadas (`public/fonts/fonts.css`). Sin llamadas a terceros. |

### 1.2 Estado SEO

| Comprobación | Resultado |
|---|---|
| `sitemap.xml` | Existe, escrito a mano, 6 URL. Hay que generarlo automáticamente. |
| `robots.txt` | Correcto (`Allow: /` + sitemap). |
| JSON-LD | **Ninguno** en ninguna página. |
| Canonical | Solo en las 4 legales. Faltan en portada y galería. |
| Open Graph | **Ninguna** página. Tampoco hay imagen OG. |
| `lang="es"` | En todas. |
| H1 | Portada: 1 (hero). Galería: 1, pero precedido por un `h2.tag`, orden poco limpio (no se toca, no es diseño). |
| Alt de imágenes | Vacíos en las 7 tarjetas de Especialidades y en 3 de las 6 tarjetas de Trabajos. Es invisible al usuario: propongo rellenarlos (no cambia el diseño). |
| Enlaces internos | Especialidades → `#trabajos`; tarjetas de Trabajos → `#contacto`; pie sin columnas. Ninguna página de servicio o zona existe aún. |
| Breadcrumbs | No hay. |

### 1.3 Competidor (lolitaprint.com)

Shopify. Estructura: `/pages/trofeos-personalizados`, `/pages/trofeos-personalizados-{ciudad}` para 18 ciudades (incluida Valencia), colecciones por deporte (`/collections/trofeos-futbol-personalizados`, `medallas-running-personalizadas`…) y dos blogs con ~60 artículos (precio, cómo elegir, IA, marketing 3D). Su página de Valencia es nuestra rival directa en «trofeos personalizados valencia» y es una plantilla genérica: ahí está el hueco.

---

## 2. Arquitectura de URLs

Todas en raíz, carpeta + `index.html`, barra final, minúsculas, sin acentos. Las URL actuales no cambian, así que **no hace falta ninguna redirección 301**.

### Fase A (la que se construye ahora)

```
/                                    portada (sin cambios de diseño; se añaden JSON-LD, canonical, OG, enlaces)
/trofeos-personalizados/             servicio
/medallas-personalizadas/            servicio
/trofeos-personalizados-valencia/    zona
/trofeos-personalizados-sueca/       zona (el taller)
/trofeos-personalizados-la-ribera/   zona — CONDICIONAL, ver P3
/trofeos-personalizados-la-safor/    zona — NO AÚN: sin trabajos reales (ver pendientes)
/trabajos/                           índice de casos (padre de las migas de pan)
/trabajos/volta-a-peu-fibravalencia/
/trabajos/torneig-ciutat-de-sueca/
/trabajos/trofeu-antonio-puchades/
/trabajos/trofeu-pepe-soler/
/trabajos/placas-debutante-ad-esperanza/
/trabajos/volta-a-peu-la-canyada/
```

Casos adicionales posibles si me das los datos (P5): `juntos-por-super-ivan`, `valencia-xiques-3x3`, `10k-sense-limits`, `medallas-ajedrez-sueca`, `falla-sucro`, `torneig-f8`, `pbrb-50-anys`.

### Fase B (después de tu revisión)

```
/placas-personalizadas/
/llaveros-personalizados/
/soportes-qr-nfc-restaurantes/
/trofeos-carreras-populares/
/trofeos-clubes-deportivos/
/trofeos-fallas/
/trofeos-empresas/
/blog/
/blog/<categoria>/                   4 categorías (ver §6)
/blog/<slug>/
```

### Nota sobre Sueca y La Ribera

Sueca **es** la capital de la Ribera Baixa, así que dos páginas sobre la misma comarca se pisarían (justo lo que Google llama *doorway*). Propuesta:

- **Sueca** = la página del taller: dirección, recogida en mano, trabajos de Sueca (FS Sueca, SD Sueca, CH Sueca, ajedrez, Sueca Arròs, Falla Sucro…).
- **La Ribera** = el resto de la comarca (Cullera, Alzira, Algemesí, Carcaixent, Sollana, Almussafes, Benifaió, Alginet, Carlet, l'Alcúdia) con trabajos de **fuera de Sueca**. Solo se crea si existe al menos uno (candidatos: PBRB 50 anys, Torneig F8, 10K Sense Límits, Luis Vives, condecoración, paellas, pero no sé dónde son → P3). Si no hay ninguno, se deja en pendientes y Sueca pasa a llamarse «Sueca y la Ribera Baixa».

---

## 3. Páginas: keywords, title y meta description

Las keywords salen de la estructura del mercado y del competidor; **no tengo volúmenes de búsqueda verificados**. Antes de la fase B conviene contrastarlas en Google Search Console y Keyword Planner (P9). Títulos ≤ 60 caracteres y descripciones ≤ 155, comprobados.

### Portada (existente)

| | |
|---|---|
| Keyword principal | trofeos personalizados 3d |
| Secundarias | trofeos y medallas personalizados, impresión 3d sueca, trofeos valencia |
| Title (propuesta) | Trofeos y medallas personalizados en 3D \| PIQ3D Sueca |
| Description | Diseñamos e imprimimos en 3D trofeos, medallas y merchandising para clubes, carreras, fallas y empresas. Taller en Sueca, entrega en toda España. |

El title actual tiene 61 caracteres y no lleva «personalizados». Cambiarlo no afecta al diseño; lo dejo a tu decisión (P10).

### Servicio

| URL | KW principal | Secundarias | Title | Description |
|---|---|---|---|---|
| /trofeos-personalizados/ | trofeos personalizados | trofeos impresos en 3d · trofeos deportivos personalizados · fabricante de trofeos · trofeos con escudo · trofeos para torneos | Trofeos personalizados impresos en 3D \| PIQ3D | Trofeos personalizados diseñados desde cero e impresos en 3D en Sueca. Diseño incluido, prototipo antes de la serie y entrega en toda España. |
| /medallas-personalizadas/ | medallas personalizadas | medallas para carreras populares · medallas impresas en 3d · medallas deportivas personalizadas · medallas con logo · medallas para torneos | Medallas personalizadas para carreras y clubes \| PIQ3D | Medallas personalizadas impresas en 3D con tu logo, de 1 a más de 1.000 unidades. Diseño incluido y fabricación en nuestro taller de Sueca (Valencia). |

### Zonas

| URL | H1 | KW principal | Secundarias | Title | Description |
|---|---|---|---|---|---|
| /trofeos-personalizados-valencia/ | Trofeos y medallas personalizados en Valencia | trofeos personalizados valencia | trofeos valencia · medallas personalizadas valencia · trofeos deportivos valencia · tienda de trofeos valencia | Trofeos y medallas personalizados en Valencia \| PIQ3D | Trofeos y medallas impresos en 3D para clubes y carreras de València y su área: Volta a Peu FibraValencia, La Canyada, Valencia Xiques. Entrega en mano. |
| /trofeos-personalizados-sueca/ | Trofeos y medallas personalizados en Sueca, nuestro taller | trofeos sueca | trofeos personalizados sueca · medallas sueca · impresión 3d sueca · trofeos ribera baixa | Trofeos y medallas personalizados en Sueca \| PIQ3D | Taller de impresión 3D en Sueca: trofeos y medallas para FS Sueca, SD Sueca, CH Sueca y el ajedrez local. Recogida en el taller o entrega en mano. |
| /trofeos-personalizados-la-ribera/ | Trofeos y medallas personalizados en la Ribera: Alzira, Cullera, Algemesí | trofeos personalizados alzira | trofeos cullera · medallas algemesí · trofeos ribera alta · trofeos ribera baixa | Trofeos y medallas en La Ribera: Alzira, Cullera \| PIQ3D | Trofeos y medallas personalizados para clubes, carreras y fallas de la Ribera Alta y Baixa: Alzira, Cullera, Algemesí, Carcaixent. Entrega en mano. |

Contenido propio de cada zona (lo que la hace distinta, no solo el nombre):

- **Valencia**: FibraValencia (ciudad), La Canyada (Paterna), Valencia Xiques 3x3, Juntos por Super Iván (Valencia CF Academia); localidades del área (Paterna, Burjassot, Torrent, Mislata, Alboraia, Catarroja, Silla, Picassent); eventos típicos (voltes a peu, 3x3, torneos de cantera, carreras de barrio); entrega en mano en la ciudad desde Sueca (35 km por la V-31 / A-38) o envío.
- **Sueca**: dirección del taller, recogida, trabajos de FS Sueca, SD Sueca, CH Sueca, ajedrez, Sueca Arròs (SDS), Falla Sucro; eventos típicos (Torneig Ciutat de Sueca, Trofeu Puchades, fallas, Festa de l'Arròs, torneos de pueblo); plazo con recogida.
- **La Ribera**: solo si hay trabajos (P3).

### Índice y casos

| URL | KW principal | Title | Description |
|---|---|---|---|
| /trabajos/ | trofeos impresos en 3d ejemplos | Trabajos: trofeos y medallas impresos en 3D \| PIQ3D | Trabajos reales de PIQ3D: trofeos, medallas y placas impresos en 3D para clubes y carreras de Valencia y la Ribera, con el proceso de cada pieza. |
| /trabajos/volta-a-peu-fibravalencia/ | trofeo volta a peu fibravalencia | Trofeo Volta a Peu FibraValencia impreso en 3D \| PIQ3D | Cómo diseñamos e imprimimos en 3D el trofeo retorcido de la 37ª Volta a Peu FibraValencia: idea, prototipo, producción y entrega. |
| /trabajos/torneig-ciutat-de-sueca/ | trofeos torneo fútbol sala | Trofeos Torneig Ciutat de Sueca para FS Sueca \| PIQ3D | Trofeos negro y oro con balón para las tres categorías del Torneig Ciutat de Sueca de FS Sueca, diseñados e impresos en 3D en Sueca. |
| /trabajos/trofeu-antonio-puchades/ | trofeo busto personalizado | Trofeu Antonio Puchades para la SD Sueca \| PIQ3D | Bustos en oro y plata para campeón y subcampeón del Trofeu Antonio Puchades de la SD Sueca, diseñados e impresos en 3D en Sueca. |
| /trabajos/trofeu-pepe-soler/ | trofeo balonmano personalizado | Trofeu Pepe Soler de balonmano para CH Sueca \| PIQ3D | Balón de balonmano sobre mano dorada y columnas impresas en 3D: el Trofeu Pepe Soler del CH Sueca, pieza a pieza. |
| /trabajos/placas-debutante-ad-esperanza/ | placas debutante fútbol base | Placas de debutante para la AD Esperanza \| PIQ3D | Placas con el escudo y el nombre de cada jugador de la cantera de la AD Esperanza, diseñadas e impresas en 3D por PIQ3D. |
| /trabajos/volta-a-peu-la-canyada/ | trofeos carrera popular paterna | Trofeos Volta a Peu La Canyada, Paterna \| PIQ3D | Trofeos con huella de hojas y lámina dorada para la XXIX Volta a Peu La Canyada (Paterna), diseñados e impresos en 3D en Sueca. |

### Fase B (titles para que los apruebes ya; el resto se detalla entonces)

| URL | KW principal | Title |
|---|---|---|
| /placas-personalizadas/ | placas personalizadas | Placas personalizadas impresas en 3D \| PIQ3D |
| /llaveros-personalizados/ | llaveros personalizados club | Llaveros personalizados en 3D para clubes \| PIQ3D |
| /soportes-qr-nfc-restaurantes/ | carta qr restaurante soporte | Soportes de carta QR y NFC para restaurantes \| PIQ3D |
| /trofeos-carreras-populares/ | trofeos carreras populares | Trofeos y medallas para carreras populares \| PIQ3D |
| /trofeos-clubes-deportivos/ | trofeos clubes deportivos | Trofeos para clubes deportivos con escudo \| PIQ3D |
| /trofeos-fallas/ | trofeos fallas | Trofeos y premios para fallas \| PIQ3D Sueca |
| /trofeos-empresas/ | trofeos empresas | Trofeos y premios para empresas en 3D \| PIQ3D |
| /blog/ | blog trofeos impresión 3d | Blog: trofeos, medallas e impresión 3D \| PIQ3D |

---

## 4. Cómo se reutiliza el diseño

### 4.1 Plantilla de página interior (servicio, zona, caso, blog)

Misma anatomía que `galeria/`, que ya demuestra que cabecera, pie, loader y `main.js` funcionan fuera de la portada:

```
loader (igual)
header (igual, con rutas relativas según profundidad: ../ o ../../)
main
  ├─ .gal-hero  (data-scheme=dark)  → migas de pan + H1 (Anton, revelado por palabras) + párrafo + 2 botones CTA (WhatsApp / email)
  ├─ secciones alternando data-scheme light/dark (la cabecera ya cambia de color sola):
  │    H2 grande estilo .gal__title / .about__title  (los H2 llevan la keyword; la etiqueta pequeña .tag pasa a ser <p>, no un heading)
  │    párrafos con .about__desc, listas con .about__list
  ├─ «Cómo trabajamos»  → rejilla .stats reutilizada como 5 pasos numerados (idea → diseño → prototipo → producción → entrega)
  ├─ «Trabajos realizados» → .work__list con tarjetas .case (vídeo/foto, título, descripción) enlazando a /trabajos/<slug>/
  ├─ FAQ → <details>/<summary> con el estilo de línea de .contact__row (contenido en el HTML, no en JS) + JSON-LD FAQPage
  ├─ «Páginas relacionadas» → lista de enlaces con anchors descriptivos (3–5)
  └─ .touch / .gal-cta  → bloque de contacto final (ya existe)
footer (igual + columnas nuevas)
```

CSS nuevo, pequeño y añadido al final de `styles.css` (v=20): `.crumbs` (migas), `.page` / `.page__section` (anchos de lectura), `.steps` (variación de `.stats`), `.faq`, `.related`, `.footer__cols`. Nada de lo existente cambia.

### 4.2 Cambios en la portada (solo enlaces y `<head>`, sin tocar el aspecto)

- Especialidades: Trofeos → `/trofeos-personalizados/`, Medallas → `/medallas-personalizadas/`. Placas, Llaveros, Carreras, Clubes y Eventos se enlazan cuando existan sus páginas (fase B); mientras tanto siguen en `#trabajos`. Si prefieres que apunten ya a la página más cercana (p. ej. Carreras → `/medallas-personalizadas/`), dímelo (P11).
- Trabajos: las 6 tarjetas → su `/trabajos/<slug>/`.
- Pie: tres columnas nuevas «Servicios», «Zonas» y «Blog» (esta última aparece en fase B) dentro de `.footer__info`, con el mismo estilo que `.footer__links`. Se añaden también al pie de las legales (vía `build-legal.mjs`) y a la galería (se regenera con `galeria.py`).
- `<head>`: canonical, Open Graph, JSON-LD `LocalBusiness` (con los datos del Perfil de Empresa, P2) y `BreadcrumbList`. Alt en las imágenes sin él.

### 4.3 Generador

Un único script, `scripts/build-paginas.mjs` (Node, mismo estilo que `build-legal.mjs`), con el contenido en módulos editables:

```
scripts/paginas/
  _plantilla.mjs        render(): toma cabecera/pie de index.html (como galeria.py), calcula el prefijo ../ por profundidad,
                        inyecta title/description/canonical/OG/JSON-LD, valida
  servicios.mjs         trofeos, medallas (+ fase B)
  zonas.mjs             valencia, sueca, la-ribera (areaServed por localidad)
  casos.mjs             un objeto por trabajo (reutiliza manifest.json para fotos y medidas)
  blog/*.mjs            fase B
```

El script también escribe `sitemap.xml` con todas las URL (incluidas portada, galería y legales) y hace la **comprobación final** antes de guardar: un solo H1, title ≤ 60 y description ≤ 155 únicos, JSON-LD parseable, enlaces internos que existan en disco, y que ninguna página quede sin enlace entrante. La salida se versiona en git (como ahora), así el despliegue sigue siendo copiar el repo.

Rutas relativas (`../`) en lugar de absolutas para que el espejo de GitHub Pages no se rompa, aunque la canonical sea siempre piq3d.com.

### 4.4 Datos estructurados

| Página | JSON-LD |
|---|---|
| Portada | `LocalBusiness` (nombre, dirección, teléfono, email, horario, geo, `areaServed`, `sameAs` Instagram/TikTok, logo, imagen) + `BreadcrumbList` |
| Servicio | `Service` (`provider` → LocalBusiness por `@id`, `areaServed`, `serviceType`) + `FAQPage` + `BreadcrumbList` |
| Zona | `Service` con `areaServed` = lista de `City` de esa zona + `FAQPage` + `BreadcrumbList` |
| Caso | `CreativeWork` (con `about` = el evento y `creator` = PIQ3D) + `BreadcrumbList` |
| Blog | `Article` (`author`/`publisher` = PIQ3D, `datePublished`, `image`) + `BreadcrumbList` |

### 4.5 Imágenes y vídeo

- Fotos ya en WebP con medidas. Las de casos se reutilizan de `public/img` y `public/img/galeria`. Alt descriptivo en todas; `loading="lazy"` salvo la principal.
- Vídeos de los 3 casos con `poster` y `preload="none"`.
- Imagen OG: genero una de 1200×630 por página con PIL (foto principal + logo). Para servicio y zona, una genérica con el logo y una pieza. Las subo a `public/og/`.

---

## 5. Enlazado interno (quién enlaza a quién)

```
Portada ──► 2 servicios, 3 zonas (pie), /trabajos/ y 6 casos, galería
Servicio ──► otro servicio, 3 zonas, 3–4 casos del tipo, galería
Zona ──► 2 servicios, zonas vecinas, casos de la zona, galería
/trabajos/ ──► todos los casos, 2 servicios
Caso ──► su servicio, su zona, 2 casos parecidos, galería, /trabajos/
Pie (todas) ──► Servicios · Zonas · Blog
```

Con esto ninguna página queda huérfana y todas entran en el sitemap.

---

## 6. Blog (fase B, para que lo apruebes ya)

- **/blog/**: portada con tarjetas (foto, categoría, título, fecha, 2 líneas), mismo `.gal-hero` + `.work__list`.
- **/blog/<slug>/**: hero con H1, categoría, fecha y tiempo de lectura; cuerpo de lectura (máx. 70 caracteres por línea); caja «¿Necesitas esto?» con enlace a la página de servicio correspondiente a mitad y al final; artículos relacionados; CTA.
- **Categorías** (4, cada una con su página de lista `/blog/<categoria>/`): `precios-y-plazos`, `materiales-e-impresion-3d`, `ideas-por-evento`, `casos`.

Calendario de 8 artículos (orden propuesto, cada uno enlaza a su servicio):

| # | Slug | Categoría | Enlaza a |
|---|---|---|---|
| 1 | cuanto-cuesta-un-trofeo-personalizado | precios-y-plazos | /trofeos-personalizados/ |
| 2 | trofeos-impresos-en-3d-vs-tradicionales | materiales-e-impresion-3d | /trofeos-personalizados/ |
| 3 | como-encargar-medallas-carrera-popular | precios-y-plazos | /medallas-personalizadas/, /trofeos-carreras-populares/ |
| 4 | ideas-trofeos-futbol-sala-balonmano | ideas-por-evento | /trofeos-clubes-deportivos/ + casos FS Sueca y CH Sueca |
| 5 | trofeos-para-fallas-ideas-ejemplos | ideas-por-evento | /trofeos-fallas/ |
| 6 | que-es-el-pla-material-sostenible | materiales-e-impresion-3d | /trofeos-personalizados/ |
| 7 | soportes-carta-qr-nfc-restaurantes | ideas-por-evento | /soportes-qr-nfc-restaurantes/ |
| 8 | caso-trofeo-volta-a-peu-fibravalencia | casos | /trabajos/volta-a-peu-fibravalencia/ |

Primeros dos a escribir como muestra: **1 y 2** (los que más tráfico informativo atraen y no dependen de datos que me faltan). Si prefieres 1 y 3, dímelo.

---

## 7. Datos que me faltan (responde solo con lo que sepas)

**P1 · Despliegue.** ¿Cómo llega el repo a Hetzner? (`git pull` en el servidor, rsync, panel…) ¿Tengo acceso o lo subes tú? ¿Puedes tocar la configuración de nginx si hiciera falta (p. ej. una 301 en el futuro)?

**P2 · Perfil de Empresa de Google** (para el `LocalBusiness`): nombre exacto tal como aparece, dirección pública (¿es Calle Cap de Canet 3, 46419 El Mareny de Barraquetes, como en el aviso legal, o es un negocio sin dirección visible?), horario, coordenadas o enlace de Maps, categoría principal. Si no tienes perfil todavía, dímelo y lo preparo con los datos del aviso legal.

**P3 · Localidad de cada trabajo** para saber qué zona lo acoge:
- Torneig F8 · PBRB 50 anys · 10K Sense Límits · Reconocimiento Luis Vives · Condecoración · Concurso de paellas (fallas) · Sueca Arròs SDS · Falla Sucro
- AD Esperanza (¿Valencia? ¿otra localidad?)
- Juntos por Super Iván · Valencia CF Academia (¿Paterna?)
- Restaurantes de cartas QR: Coco Beach, Ca Quintín, El Niu, Sushi Room (¿dónde están? ¿puedo nombrarlos?)

**P4 · ¿Tienes trabajos en La Safor** (Gandia, Oliva, Tavernes, Xeraco…) o en Cullera/Alzira/Algemesí? Si no, La Safor queda fuera y La Ribera depende de P3.

**P5 · Datos por caso** (para las 6 páginas; cuanto más, mejor, pero nada es obligatorio): año y edición · nº de unidades · tamaño aproximado · materiales/colores · plazo desde el encargo · qué pidió el cliente y qué propusimos · si hubo prototipo · fotos extra (las del montaje no cuentan). Donde falte, dejo `[PENDIENTE: …]`.

**P6 · Plazos y cantidades reales** para las FAQ: plazo habitual de un pedido pequeño y de uno de 300 medallas; pedido mínimo (¿1 unidad?); si das rango de precio orientativo o solo «desde presupuesto»; coste y plazo de envío a península; ¿entregas en mano en Valencia ciudad?

**P7 · Escudos y marcas.** ¿Puedo poner en las páginas de caso los nombres de los clubes tal cual (ya salen en la portada y en el aviso legal)? ¿Alguno al que no quieras dar visibilidad?

**P8 · Google Search Console.** ¿Está dada de alta piq3d.com? Si no, conviene hacerlo antes de la fase B para medir.

**P9 · Keywords.** ¿Tienes datos de Search Console o Keyword Planner? Si no, trabajo con las propuestas y las revisamos con datos reales a los dos meses.

**P10 · Title de la portada.** ¿Cambio el actual («PIQ3D — Diseño e impresión 3D de trofeos y medallas en Sueca», 61 caracteres) por «Trofeos y medallas personalizados en 3D | PIQ3D Sueca»?

**P11 · Tarjetas de Especialidades sin página aún** (Placas, Llaveros, Carreras, Clubes, Eventos): ¿las dejo en `#trabajos` hasta la fase B o las apunto ya a la página más cercana?

**P12 · Espejo de GitHub Pages.** ¿Lo quieres mantener? Si no, lo desactivo y así no hay dos copias de la web en Google.

---

## 8. Orden de trabajo en la fase 2 (fase A)

1. Generador `build-paginas.mjs` + plantilla + CSS nuevo (`?v=20`).
2. `/trofeos-personalizados/` y `/medallas-personalizadas/`.
3. `/trabajos/` + 6 casos.
4. Zonas: Valencia, Sueca (y La Ribera si P3 lo permite).
5. Portada: enlaces, pie con columnas, `<head>` (canonical, OG, JSON-LD), alts. Regenerar galería y legales con el pie nuevo.
6. `sitemap.xml` automático, comprobación final, commit y publicación.
7. Parar y entregar: lista de ficheros, lista de `[PENDIENTE]`, informe de comprobación.

Fase B (tras tu revisión): páginas por tipo de cliente, resto de servicios, blog con los 2 primeros artículos.
