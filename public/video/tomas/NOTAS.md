# Tomas del vídeo hero PIQ3D

Orden: 01 fibravalencia > 02 trofeu-puchades > 03 pepe-soler > 04 medalla-xiques (persona) > 05 medalla-senselimits (persona) > 06 trofeo-3x3-xiques > 07 la-canyada > 08 futsal-sueca (equipo, solo manos) > 09 logo.

- Modelo base: Seedance 2.0 Mini, 4 s, 720p, 16:9, sin audio, image_references (4 créditos).
- 02: versión elegida = v4 (Seedance, arco + acercamiento). v5 Kling (órbita 360 real) descartada por el cliente; v1-v3 pruebas.
- El archivo sin sufijo (NN-nombre.mp4) es siempre la versión aprobada.

## Estado 1 oct 12:58
- 01 fibravalencia: aprobada.
- 02 trofeu-puchades: aprobada (v4 Seedance).
- 03 pepe-soler: generada, pendiente de confirmar (texto base algo bailado al inicio).
- 04 medalla-xiques: aprobada.
- 05 medalla-senselimits: v2 (más rápida, medalla más alta). v1 guardada.
- 06 trofeo-3x3-xiques: v2 (cancha exterior atardecer). v1 (pabellón oscuro) descartada.
- 07 la-canyada: v2 (seto de hibiscos, texto LA CANYADA correcto). El primer segundo el trofeo gira de canto: usar 1.2-4 s. v1 (pinar) guardada.
- 08 futsal-sueca: v2 contrapicado. Aún asoman caras en el primer segundo: usar 1.3-4 s. v1 guardada.
- 09 logo: generada.
- Límite del plan: 2 generaciones Seedance simultáneas (429 rate_limit_reached si hay más).

## Montaje final (1 oct 13:10)
- Script: scripts/montaje.py (ffmpeg, xfade). Salida: public/video/hero-montaje.mp4 (crf 20, 12 MB), hero-montaje-web.mp4 (crf 27, 5 MB), hero-montaje-web.webm (6 MB), hero-poster.jpg.
- 22,7 s, 1280x720, 24 fps, sin audio, fundido a negro final para bucle. Logo = v1 (el cliente prefirió la v1 a la v2 "boquilla imprime").
- Montaje v2 (1 oct 13:15): cortes secos (concat), tomas aceleradas 1,4-1,6x, logo 1,3x; 18,6 s. El cliente pidió cambios más rápidos y cortantes y clips menos lentos.

## Web (1 oct 13:45)
- index.html + styles.css + main.js (sin build). Servidor local: .claude/launch.json ("static", python http.server 5173).
- Librerías CDN: GSAP 3.12 + ScrollTrigger, Lenis 1.1. Fuentes Google: Anton (display) + Archivo (variable, nav/cuerpo).
- Animaciones: loader letras, intro hero (líneas, máscaras, skew, vídeo clip), vídeo que crece al hacer scroll (200svh sticky), cabecera que cambia de color por sección, revelado de palabras, hover especialidades (skew + imagen), botones con máscara invertida, parallax, grid trabajos con título fijo, vídeos al hover.

## Versión vertical (1 oct 22:20)
- 9 tomas regeneradas en 9:16 720p con los mismos prompts (36 créditos) en public/video/tomas-vertical. Reframe de Higgsfield descartado por precio (90 créditos el montaje).
- Montaje: `python scripts/montaje.py vertical` -> hero-montaje-vertical(.mp4/-web.mp4/-web.webm) + hero-poster-vertical.jpg (18,6 s). Recortes distintos en vertical: toma 5 0-2,6 s (asoma barbilla al final), toma 7 1,8-4 s (gira al inicio).
- main.js carga la versión vertical en pantallas <=767px en orientación vertical (clase html.is-portrait; el asset del titular pasa a formato retrato).
- Contacto real: contacto@piq3d.com, 623 75 44 44 (tel y WhatsApp wa.me/34623754444).
- Saldo Higgsfield: 1,5 créditos.

## Correcciones 2 oct
- Especialidades: fotos enteras (object-fit contain) en recuadro cuadrado gris; mapa: Trofeos=fibravalencia, Medallas=medalla-xiques (anverso), Placas=logo-trofeos, Llaveros=llaveros-club, Carreras=la-canyada, Clubes=futsal-sueca, Eventos=pepe-soler.
- Nosotros: foto pepe-soler entera, sin parallax. Trabajos: tarjetas a tamaño natural (sin recorte), pósters propios de los vídeos (poster-*.jpg), atributos width/height.
- Contacto: título HABLEMOS + lista Email / Instagram / WhatsApp / Teléfono.

## Galería (2 oct)
- Página galeria/index.html generada con scripts/galeria.py a partir de public/img/galeria/manifest.json (33 fotos de imagenes web, todas las subcarpetas, convertidas a webp). Títulos de cada foto en el diccionario `names` del script; para añadir fotos: copiarlas a imagenes web/<categoría>, volver a ejecutar la conversión (bloque en NOTAS o repetir el paso) y `python scripts/galeria.py`.
- Enlaces: nav "Galería", botón "Ver todos" y pie. main.js tolera páginas sin hero.
