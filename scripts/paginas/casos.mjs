// ============================================================
//  Trabajos reales: una página por caso en /trabajos/<slug>/.
//  Cliente, localidad y evento son reales. Unidades, medidas y
//  plazos son ESTIMACIONES autorizadas por el cliente (6 oct 2026)
//  para orientar a quien pide presupuesto; se pueden corregir aquí.
// ============================================================

import { ZONAS } from './_datos.mjs';

const ZONA = { valencia: ZONAS[0], 'ribera-baixa': ZONAS[1], safor: ZONAS[2] };

export const CASOS = [
  // ----------------------------------------------------------
  {
    slug: 'volta-a-peu-fibravalencia',
    nombre: 'Volta a Peu FibraValencia',
    h1: ['Trofeo Volta a Peu', 'FibraValencia'],
    cliente: 'FibraValencia',
    localidad: 'Alaquàs',
    zona: 'valencia',
    servicio: 'trofeos',
    anio: 2025,
    evento: '37ª Volta a Peu FibraValencia Vila d’Alaquàs',
    etiqueta: 'Trofeo de carrera popular',
    title: 'Trofeo Volta a Peu FibraValencia impreso en 3D | PIQ3D',
    description: 'Cómo diseñamos e imprimimos en 3D el trofeo retorcido de la 37ª Volta a Peu FibraValencia de Alaquàs: idea, prototipo, producción y entrega.',
    resumen: 'Columna retorcida en blanco sobre base magenta con la categoría grabada, para los ganadores de la 37ª edición.',
    intro: 'Un trofeo que gira sobre sí mismo, como el recorrido por las calles de Alaquàs. Blanco y magenta, los colores de FibraValencia, con la categoría de cada ganador grabada en la base.',
    imagen: { src: 'public/img/fibravalencia.webp', w: 1600, h: 1600, alt: 'Trofeo de la 37ª Volta a Peu FibraValencia Vila d’Alaquàs impreso en 3D: columna blanca retorcida sobre base magenta' },
    video: { src: 'public/video/hero-trofeo.mp4', poster: 'public/img/poster-hero-trofeo.jpg', w: 960, h: 960, alt: 'Vídeo del trofeo de la Volta a Peu FibraValencia girando' },
    galeria: [{ src: 'public/img/galeria/trofeofibravalencia.webp', w: 1600, h: 1600, alt: 'Detalle del logotipo FibraValencia en relieve en la parte alta del trofeo', pie: 'El logotipo, en relieve y a dos colores' }],
    ficha: [['Cliente', 'FibraValencia'], ['Evento', '37ª Volta a Peu Vila d’Alaquàs'], ['Localidad', 'Alaquàs, l’Horta Sud'], ['Año', '2025'], ['Unidades', '12 trofeos (3 puestos × 4 categorías)'], ['Altura', '24 cm'], ['Material', 'PLA blanco y magenta'], ['Plazo', '3 semanas desde el diseño aprobado']],
    secciones: [
      { h2: 'El encargo', html: `
<p>FibraValencia patrocina la Volta a Peu Vila d’Alaquàs, una carrera popular con categoría local y general, masculina y femenina. Querían un trofeo que fuera claramente suyo: el magenta de la marca, el lema «Nostra terra, nostra fibra» y un diseño que nadie hubiera visto antes en una carrera.</p>
<p>La única condición técnica era que las doce piezas se distinguieran entre sí. Cada ganador tenía que leer su categoría y su puesto en el trofeo, sin pegatinas ni placas añadidas después.</p>` },
      { h2: 'El diseño', html: `
<p>Partimos de una idea sencilla: una columna que gira 90 grados de la base a la cima, como el recorrido que serpentea por el pueblo. El logotipo de la 37ª edición va en relieve en la parte alta, en magenta sobre blanco, y la base trapezoidal lleva el puesto, la categoría y el lema.</p>
<p>El modelo 3D es paramétrico: el mismo archivo genera las doce variantes cambiando solo el texto. Antes de producir enviamos los renders y después imprimimos un prototipo en blanco para comprobar que las letras de la base se leían a un metro de distancia.</p>` },
      { h2: 'Producción y entrega', html: `
<p>Columna y base se imprimen por separado y se ensamblan: así el cambio de color se hace en la base, donde está el texto, y la columna sale de una pieza con las líneas de capa siguiendo la torsión. Las doce unidades se imprimieron en paralelo en varias máquinas en menos de una semana.</p>
<p>Las entregamos en mano en Alaquàs unos días antes de la carrera, con tiempo para que la organización las revisara. El archivo queda guardado: la 38ª edición solo necesita cambiar el número.</p>` },
    ],
    faq: [
      { p: '¿Puedo encargar un trofeo parecido para mi carrera?', r: '<p>Sí. Lo normal es partir de tu logotipo y de los colores del evento y diseñar una pieza propia; no copiamos el trofeo de otro cliente. Cuéntanos categorías y puestos y te enviamos una propuesta con renders.</p>' },
      { p: '¿Cuánto tarda un pedido como este?', r: '<p>El diseño se cierra en menos de una semana. La producción de una docena de trofeos de este tamaño sale en pocos días, y luego está la entrega. Pide con tres o cuatro semanas de margen y vas sobrado.</p>' },
      { p: '¿Se pueden cambiar colores y textos por categoría?', r: '<p>Es lo más habitual. El mismo diseño genera todas las variantes: puesto, categoría, distancia o nombre del ganador si se conoce. No hay coste extra por cada texto distinto.</p>' },
      { p: '¿Y el año que viene?', r: '<p>El diseño queda guardado. Repetimos el pedido idéntico o lo actualizamos con la nueva edición sin volver a pagar el diseño.</p>' },
    ],
    relacionados: ['volta-a-peu-la-canyada', '10k-sense-limits'],
  },
  // ----------------------------------------------------------
  {
    slug: 'torneig-ciutat-de-sueca',
    nombre: 'Torneig Ciutat de Sueca',
    h1: ['Trofeos del Torneig', 'Ciutat de Sueca'],
    cliente: 'FS Sueca',
    localidad: 'Sueca',
    zona: 'ribera-baixa',
    servicio: 'trofeos',
    anio: 2025,
    evento: 'Torneig Ciutat de Sueca de fútbol sala',
    etiqueta: 'Trofeos de torneo',
    title: 'Trofeos Torneig Ciutat de Sueca para FS Sueca | PIQ3D',
    description: 'Trofeos negro y oro con balón para las tres categorías del Torneig Ciutat de Sueca de FS Sueca, diseñados e impresos en 3D en Sueca.',
    resumen: 'Trofeos negro y oro con balón de fútbol sala y escudo del club para las tres categorías del torneo.',
    intro: 'Tres trofeos iguales en forma y distintos en texto: negro mate, balón dorado y el escudo del FS Sueca en relieve. Uno por categoría, para un torneo que se juega en casa.',
    imagen: { src: 'public/img/futsal-sueca.webp', w: 1402, h: 2048, alt: 'Tres trofeos del Torneig Ciutat de Sueca impresos en 3D, negros con balón dorado y escudo del FS Sueca' },
    video: { src: 'public/video/futsal-sueca.mp4', poster: 'public/img/poster-futsal-sueca.jpg', w: 792, h: 1160, alt: 'Vídeo de los trofeos del Torneig Ciutat de Sueca' },
    galeria: [
      { src: 'public/img/galeria/futsal-sueca.webp', w: 1095, h: 1600, alt: 'Trofeo del Torneig Ciutat de Sueca de frente, con el escudo dorado del FS Sueca', pie: 'El escudo del club, en dorado sobre negro' },
      { src: 'public/img/galeria/futsal-mejor-jugador.webp', w: 1200, h: 1600, alt: 'Trofeo al mejor jugador del torneo de fútbol sala, impreso en 3D', pie: 'La versión individual: mejor jugador' },
    ],
    ficha: [['Cliente', 'FS Sueca'], ['Evento', 'Torneig Ciutat de Sueca'], ['Localidad', 'Sueca, Ribera Baixa'], ['Año', '2025'], ['Unidades', '3 trofeos de campeón + 3 individuales'], ['Altura', '30 cm'], ['Material', 'PLA negro mate y dorado'], ['Plazo', '2 semanas']],
    secciones: [
      { h2: 'El encargo', html: `
<p>El FS Sueca organiza cada pretemporada el Torneig Ciutat de Sueca con varias categorías de base. Necesitaban un trofeo de campeón por categoría y unos cuantos premios individuales, con el escudo del club bien visible y que dieran la talla en la foto de la entrega.</p>
<p>Pidieron sobriedad: negro y oro, sin más colores, y que el balón se reconociera como de fútbol sala.</p>` },
      { h2: 'El diseño', html: `
<p>El cuerpo del trofeo es una columna que se abre en gajos, como una mano que sujeta el balón. El balón dorado lleva el patrón de hexágonos marcado en relieve para que las líneas de capa trabajen a su favor. El escudo del FS Sueca va en dorado sobre el negro del cuerpo y la categoría, en la base.</p>
<p>Para los premios individuales reutilizamos la misma columna con una base distinta: mismo lenguaje, otro tamaño.</p>` },
      { h2: 'Producción y entrega', html: `
<p>Cuerpo, balón y escudo se imprimen por separado: el negro mate sale perfecto en una pieza grande y el dorado se reserva para los detalles. Después se ensamblan y se revisan uno a uno.</p>
<p>Al ser de Sueca, los trofeos se entregaron en mano en el pabellón la semana del torneo. El diseño queda archivado para la edición siguiente.</p>` },
    ],
    faq: [
      { p: '¿Hacéis trofeos para torneos de fútbol sala de otras localidades?', r: '<p>Sí. Trabajamos con clubes de toda la Comunitat Valenciana y enviamos al resto de España. El escudo se modela a partir de la imagen que nos pases.</p>' },
      { p: '¿Cuántos trofeos como mínimo?', r: '<p>No hay mínimo. Tres trofeos de campeón, como aquí, o uno solo para el ganador.</p>' },
      { p: '¿Se puede hacer la versión de subcampeón?', r: '<p>Sí. Lo habitual es cambiar el color del balón (plateado) o el texto de la base manteniendo el mismo diseño.</p>' },
      { p: '¿Cuánto tarda?', r: '<p>Diseño en menos de una semana y producción en pocos días. Para un torneo, pide con dos o tres semanas de margen.</p>' },
    ],
    relacionados: ['trofeu-pepe-soler', 'trofeu-antonio-puchades'],
  },
  // ----------------------------------------------------------
  {
    slug: 'trofeu-antonio-puchades',
    nombre: 'Trofeu Antonio Puchades',
    h1: ['Trofeu Antonio', 'Puchades'],
    cliente: 'SD Sueca',
    localidad: 'Sueca',
    zona: 'ribera-baixa',
    servicio: 'trofeos',
    anio: 2026,
    evento: 'Trofeu Antonio Puchades de la SD Sueca',
    etiqueta: 'Trofeo de torneo',
    title: 'Trofeu Antonio Puchades para la SD Sueca | PIQ3D',
    description: 'Bustos en oro y plata para campeón y subcampeón del Trofeu Antonio Puchades de la SD Sueca, diseñados e impresos en 3D en Sueca.',
    resumen: 'Bustos de Antonio Puchades en oro y plata sobre columnas blancas para campeón y subcampeón del torneo.',
    intro: 'Un homenaje al jugador que da nombre al torneo: su busto impreso en 3D, dorado para el campeón y plateado para el subcampeón, sobre una columna blanca con el escudo de la SD Sueca.',
    imagen: { src: 'public/img/trofeu-puchades.webp', w: 1536, h: 2048, alt: 'Trofeos del Trofeu Antonio Puchades 2026 sobre el césped: bustos dorado y plateado con el escudo de la SD Sueca' },
    video: { src: 'public/video/trofeu-puchades.mp4', poster: 'public/img/poster-trofeu-puchades.jpg', w: 828, h: 1108, alt: 'Vídeo del Trofeu Antonio Puchades' },
    galeria: [
      { src: 'public/img/galeria/trofeupuchades.webp', w: 1200, h: 1600, alt: 'Trofeu Antonio Puchades 2026, busto dorado del campeón', pie: 'Edición 2026' },
      { src: 'public/img/galeria/07-trofeu-puchades.webp', w: 800, h: 800, alt: 'Trofeu Antonio Puchades 2025, la primera edición impresa en 3D', pie: 'Edición 2025, el mismo archivo' },
    ],
    ficha: [['Cliente', 'SD Sueca'], ['Evento', 'Trofeu Antonio Puchades'], ['Localidad', 'Sueca, Ribera Baixa'], ['Ediciones', '2025 y 2026'], ['Unidades', '2 trofeos por edición'], ['Altura', '32 cm'], ['Material', 'PLA blanco, dorado y plateado'], ['Plazo', '2 semanas la primera vez; una semana al repetir']],
    secciones: [
      { h2: 'El encargo', html: `
<p>Antonio Puchades fue el futbolista más conocido que ha dado Sueca, y la SD Sueca le dedica un torneo anual. El club quería un trofeo a su altura: no una copa cualquiera, sino algo que hablara de él.</p>
<p>Debía servir para campeón y subcampeón, llevar el escudo del club y repetirse cada año con la fecha actualizada.</p>` },
      { h2: 'El diseño', html: `
<p>Modelamos el busto a partir de fotografías del jugador y lo colocamos sobre una columna blanca cuyos pétalos se abren hacia arriba, con el escudo de la SD Sueca en relieve y a color. El campeón lo recibe en dorado y el subcampeón en plateado; la placa de la base indica el puesto, el torneo y el año.</p>
<p>Imprimimos un prototipo del busto a escala para revisar los rasgos con el club antes de la versión definitiva.</p>` },
      { h2: 'Producción y entrega', html: `
<p>El busto se imprime en un solo color con capa fina para que el rostro quede limpio; la columna, el escudo y la placa van aparte y se ensamblan. En 2025 hicimos la primera edición; en 2026 bastó con cambiar el año en el archivo y volver a imprimir.</p>
<p>Entrega en mano en el campo de la SD Sueca, el mismo día de la final.</p>` },
    ],
    faq: [
      { p: '¿Podéis modelar el busto de una persona?', r: '<p>Sí, a partir de varias fotografías de buena calidad (frente y perfil). Enviamos renders para aprobar los rasgos antes de imprimir.</p>' },
      { p: '¿Se puede repetir el trofeo cada año?', r: '<p>Es exactamente lo que hace la SD Sueca: el archivo queda guardado y cada edición solo cambia el año. No se vuelve a pagar el diseño.</p>' },
      { p: '¿El escudo se imprime a color?', r: '<p>Sí. Nuestras impresoras cambian de filamento automáticamente, así que el escudo sale con sus colores en una sola pieza.</p>' },
      { p: '¿Cuánto tarda un trofeo con busto?', r: '<p>La primera vez, unas dos semanas entre diseño, prototipo y producción. Las repeticiones, una semana.</p>' },
    ],
    relacionados: ['torneig-ciutat-de-sueca', 'trofeu-pepe-soler'],
  },
  // ----------------------------------------------------------
  {
    slug: 'trofeu-pepe-soler',
    nombre: 'Trofeu Pepe Soler',
    h1: ['Trofeu Pepe Soler', 'de balonmano'],
    cliente: 'CH Sueca',
    localidad: 'Sueca',
    zona: 'ribera-baixa',
    servicio: 'trofeos',
    anio: 2026,
    evento: 'Trofeu Pepe Soler de balonmano, CH Sueca',
    etiqueta: 'Trofeo de balonmano',
    title: 'Trofeu Pepe Soler de balonmano para CH Sueca | PIQ3D',
    description: 'Balón de balonmano sobre mano dorada y columnas impresas en 3D: el Trofeu Pepe Soler del CH Sueca, pieza a pieza.',
    resumen: 'Balón de balonmano dorado y plateado sobre columnas blancas y base roja para la final senior masculina.',
    intro: 'Final del CH Sueca contra el CH Xàtiva. Dos trofeos: balón dorado para el campeón, plateado para el subcampeón, sobre columnas que se abren como una mano.',
    imagen: { src: 'public/img/pepe-soler.webp', w: 1536, h: 2048, alt: 'Trofeos del Trofeu Pepe Soler 2026 en el pabellón de Sueca: balones de balonmano dorado y plateado sobre columnas blancas' },
    galeria: [{ src: 'public/img/galeria/trofeopepesolerchsueca.webp', w: 1200, h: 1600, alt: 'Trofeu Pepe Soler del CH Sueca, detalle del balón dorado y las placas con los nombres de los finalistas', pie: 'Las placas con los dos finalistas' }],
    ficha: [['Cliente', 'CH Sueca'], ['Evento', 'Trofeu Pepe Soler 2026'], ['Localidad', 'Sueca, Ribera Baixa'], ['Año', '2026'], ['Unidades', '2 trofeos'], ['Altura', '28 cm'], ['Material', 'PLA blanco, rojo, dorado y plateado'], ['Plazo', '10 días']],
    secciones: [
      { h2: 'El encargo', html: `
<p>El Club Handbol Sueca organiza el Trofeu Pepe Soler, un torneo homenaje en categoría senior masculina. Para la final contra el CH Xàtiva querían dos trofeos que se diferenciaran a simple vista y en los que figurasen los dos clubes.</p>
<p>Y un detalle importante para ellos: que el balón fuera de balonmano, con su textura, y no un balón genérico.</p>` },
      { h2: 'El diseño', html: `
<p>Las columnas blancas se curvan hacia fuera y sostienen el balón como una mano abierta. El balón lleva los gajos propios del balonmano marcados en relieve. Sobre las columnas, dos placas con los nombres de los finalistas; en la base roja, la categoría, el nombre del torneo y el año.</p>
<p>Campeón en dorado, subcampeón en plateado: mismo archivo, un solo cambio de color.</p>` },
      { h2: 'Producción y entrega', html: `
<p>Cuatro colores en cuatro piezas: columnas blancas, base roja, placas y balón metalizado. Impresión en paralelo, ensamblaje y revisión en el taller. Entregados en mano en el pabellón de Sueca antes de la final.</p>` },
    ],
    faq: [
      { p: '¿Podéis hacer trofeos para otros deportes?', r: '<p>Sí: fútbol, fútbol sala, balonmano, baloncesto, pádel, ajedrez, pilota, atletismo… Cada deporte tiene su objeto reconocible y lo modelamos desde cero.</p>' },
      { p: '¿Se pueden poner los nombres de los dos equipos?', r: '<p>Sí. Las placas con los finalistas se añaden al diseño sin coste. Si no se conocen hasta el último momento, se imprimen aparte y se colocan el día de la final.</p>' },
      { p: '¿Qué tamaño tienen?', r: '<p>Estos miden 28 cm. Podemos escalar el mismo diseño entre 15 y 40 cm según el presupuesto.</p>' },
      { p: '¿Cuánto tarda?', r: '<p>Diez días desde la aprobación del diseño para un pedido de dos trofeos.</p>' },
    ],
    relacionados: ['torneig-ciutat-de-sueca', 'trofeu-antonio-puchades'],
  },
  // ----------------------------------------------------------
  {
    slug: 'placas-debutante-ad-esperanza',
    nombre: 'Placas de debutante AD Esperanza',
    h1: ['Placas de debutante', 'AD Esperanza'],
    cliente: 'AD Esperanza',
    localidad: 'Madrid',
    zona: 'fuera',
    servicio: 'placas',
    anio: 2025,
    evento: 'Debutantes de la AD Esperanza, temporada 2025-2026',
    etiqueta: 'Placas personalizadas',
    title: 'Placas de debutante para la AD Esperanza | PIQ3D',
    description: 'Placas con el escudo y el nombre de cada jugador de la cantera de la AD Esperanza (Madrid), diseñadas e impresas en 3D por PIQ3D y enviadas desde Sueca.',
    resumen: 'Escudo del club en relieve con una pestaña con el nombre de cada jugador que debuta en la temporada 2025-2026.',
    intro: 'Un escudo para cada debut. La AD Esperanza, de Madrid, entrega a cada niño que juega su primer partido una placa con su nombre, su escudo y la temporada. Impresas en Sueca, enviadas a Madrid.',
    imagen: { src: 'public/img/ad-esperanza.webp', w: 1205, h: 1600, alt: 'Jugadores de la AD Esperanza sosteniendo sus placas de debutante impresas en 3D con el escudo del club y su nombre' },
    galeria: [{ src: 'public/img/galeria/copitasadesperanza.webp', w: 1205, h: 1600, alt: 'Placas de debutante de la AD Esperanza con los nombres Camile, Jaime, Michael y Luis', pie: 'Cada placa con su nombre y la temporada' }],
    ficha: [['Cliente', 'AD Esperanza'], ['Evento', 'Debutantes temporada 2025-2026'], ['Localidad', 'Madrid'], ['Año', '2025'], ['Unidades', '40 placas'], ['Tamaño', '9 cm'], ['Material', 'PLA verde, amarillo, rojo, blanco y negro'], ['Plazo', '10 días + envío en 24-48 h']],
    secciones: [
      { h2: 'El encargo', html: `
<p>La Agrupación Deportiva Esperanza es un club de fútbol base de Madrid. Querían reconocer el debut de cada jugador de la cantera con algo que pudieran llevarse a casa: su escudo, su nombre y la temporada.</p>
<p>Todo el pedido se gestionó a distancia, por WhatsApp y correo: fotos del escudo, lista de nombres y renders de ida y vuelta hasta cerrar el diseño.</p>` },
      { h2: 'El diseño', html: `
<p>El escudo se reprodujo fiel al original, con sus cinco colores en relieve. A un lado, una pestaña verde con el nombre del jugador, la palabra «Debutante» y la temporada 2025-2026. Los nombres llegaron en una hoja de cálculo y el archivo generó las cuarenta variantes automáticamente.</p>` },
      { h2: 'Producción y envío', html: `
<p>Cada placa sale de una sola pieza multicolor: la impresora cambia de filamento sola, sin pintar ni pegar nada. Cuarenta unidades en menos de una semana en varias máquinas a la vez.</p>
<p>Embaladas por nombre y enviadas a Madrid; llegaron en dos días. Cuando debutan más jugadores durante la temporada, se imprimen las nuevas y se envían, sin rehacer nada.</p>` },
    ],
    faq: [
      { p: '¿Hacéis envíos fuera de la Comunitat Valenciana?', r: '<p>Sí, a toda España. Este pedido fue a Madrid y llegó en 48 horas. El coste del envío va detallado en el presupuesto.</p>' },
      { p: '¿Cómo os paso los nombres?', r: '<p>En una hoja de cálculo o en un mensaje. El diseño genera todas las variantes a partir de la lista, sin coste por nombre.</p>' },
      { p: '¿Se pueden añadir nombres más adelante?', r: '<p>Sí. El archivo queda guardado; cuando debutan más jugadores imprimimos solo las placas nuevas.</p>' },
      { p: '¿Qué tamaño tienen las placas?', r: '<p>Estas miden unos 9 cm. Podemos hacerlas desde 5 cm (tipo llavero) hasta 20 cm para colgar en pared.</p>' },
    ],
    relacionados: ['torneig-ciutat-de-sueca', 'juntos-por-super-ivan'],
  },
  // ----------------------------------------------------------
  {
    slug: 'volta-a-peu-la-canyada',
    nombre: 'Volta a Peu La Canyada',
    h1: ['Trofeos Volta a Peu', 'La Canyada'],
    cliente: 'Volta a Peu La Canyada',
    localidad: 'La Canyada, Paterna',
    zona: 'valencia',
    servicio: 'trofeos',
    anio: 2025,
    evento: 'XXIX Volta a Peu La Canyada',
    etiqueta: 'Trofeo de carrera popular',
    title: 'Trofeos Volta a Peu La Canyada, Paterna | PIQ3D',
    description: 'Trofeos con huella de hojas y lámina dorada para la XXIX Volta a Peu La Canyada (Paterna), diseñados e impresos en 3D en Sueca.',
    resumen: 'Huella de pie formada por hojas verdes con una hoja dorada que lleva el nombre de la XXIX edición.',
    intro: 'Una huella hecha de hojas: la pisada de los corredores sobre el verde de La Canyada. La hoja dorada central lleva el nombre de la carrera y la edición.',
    imagen: { src: 'public/img/la-canyada.webp', w: 1600, h: 2133, alt: 'Trofeo de la XXIX Volta a Peu La Canyada impreso en 3D con forma de huella de hojas verdes y hoja dorada' },
    galeria: [{ src: 'public/img/galeria/trofeolacanada.webp', w: 1200, h: 1600, alt: 'Trofeo de la Volta a Peu La Canyada sobre fondo vegetal', pie: 'Tres tonos de verde y una hoja dorada' }],
    ficha: [['Cliente', 'Organización de la Volta a Peu La Canyada'], ['Evento', 'XXIX Volta a Peu La Canyada'], ['Localidad', 'La Canyada (Paterna), área de València'], ['Año', '2025'], ['Unidades', '15 trofeos'], ['Altura', '18 cm'], ['Material', 'PLA en tres verdes, blanco y dorado'], ['Plazo', '2 semanas']],
    secciones: [
      { h2: 'El encargo', html: `
<p>La Volta a Peu La Canyada es una carrera de barrio con muchas categorías y un recorrido entre pinos y chalets. La organización quería un trofeo ligero, original y que hablara del entorno, lejos de la copa dorada de siempre.</p>` },
      { h2: 'El diseño', html: `
<p>Una huella de pie formada por hojas en tres tonos de verde, con una hoja dorada en el centro que lleva «XXIX Volta a Peu La Canyada». La pieza es plana y se sostiene sobre una base baja, lo que la hace muy rápida de imprimir y muy fácil de transportar.</p>
<p>Las quince unidades comparten diseño; cambia el texto de categoría en la base.</p>` },
      { h2: 'Producción y entrega', html: `
<p>Cada trofeo se imprime en una sola pieza multicolor: los cinco colores salen de la misma impresora con cambio automático de filamento. Al ser planos, caben muchos por bandeja y la tirada completa estuvo lista en dos días.</p>
<p>Entrega en mano en Paterna la semana de la carrera.</p>` },
    ],
    faq: [
      { p: '¿Qué otras formas puede tener un trofeo de carrera?', r: '<p>Las que quieras: una huella, una zapatilla, el perfil del recorrido, el monumento del pueblo o el logotipo de la carrera en volumen. Diseñamos desde cero a partir de tu idea.</p>' },
      { p: '¿Son resistentes los trofeos planos?', r: '<p>Sí. El PLA es rígido y la base baja los mantiene estables. Son más ligeros que una copa y se transportan mejor.</p>' },
      { p: '¿Se pueden hacer medallas a juego?', r: '<p>Sí. El mismo motivo se adapta a una medalla finisher para todos los participantes. Mira nuestras <a href="/medallas-personalizadas/">medallas personalizadas</a>.</p>' },
      { p: '¿Cuánto tarda?', r: '<p>Dos semanas desde la aprobación del diseño para una tirada de quince trofeos.</p>' },
    ],
    relacionados: ['volta-a-peu-fibravalencia', '10k-sense-limits'],
  },
  // ----------------------------------------------------------
  {
    slug: 'juntos-por-super-ivan',
    nombre: 'Juntos por Super Iván',
    h1: ['Trofeo solidario', 'Juntos por Super Iván'],
    cliente: 'Juntos por Super Iván',
    localidad: 'Cullera',
    zona: 'ribera-baixa',
    servicio: 'trofeos',
    anio: 2025,
    evento: 'Evento solidario Juntos por Super Iván con la Valencia CF Academia',
    etiqueta: 'Trofeo solidario',
    title: 'Trofeo solidario Juntos por Super Iván, Cullera | PIQ3D',
    description: 'Balón de fútbol impreso en 3D sobre una roca, con el escudo de la Valencia CF Academia, como agradecimiento en un evento solidario celebrado en Cullera.',
    resumen: 'Balón de fútbol sobre una roca con placa de agradecimiento para un evento solidario con la Valencia CF Academia.',
    intro: 'Un balón a tamaño real, una roca y una frase: «Gracias por vuestra solidaridad». Pieza de agradecimiento para un evento benéfico celebrado en Cullera con la Valencia CF Academia.',
    imagen: { src: 'public/img/galeria/juntos-por-super-ivan.webp', w: 1200, h: 1600, alt: 'Trofeo solidario Juntos por Super Iván impreso en 3D: balón de fútbol sobre una roca con placa naranja y escudo de la Valencia CF Academia' },
    galeria: [],
    ficha: [['Cliente', 'Juntos por Super Iván'], ['Evento', 'Evento solidario con la Valencia CF Academia'], ['Localidad', 'Cullera, Ribera Baixa'], ['Año', '2025'], ['Unidades', '1 pieza'], ['Tamaño', '22 cm de balón, 30 cm en total'], ['Material', 'PLA blanco, negro, naranja y gris'], ['Plazo', '1 semana']],
    secciones: [
      { h2: 'El encargo', html: `
<p>«Juntos por Super Iván» es una iniciativa solidaria de Cullera. Para agradecer a la Valencia CF Academia su participación en el evento, querían una pieza única: un balón de verdad, no una copa, que recordara el partido y la causa.</p>` },
      { h2: 'El diseño', html: `
<p>Balón de fútbol con sus pentágonos negros, apoyado sobre una roca gris con textura. Una placa naranja curvada se adapta a la esfera con el nombre de la iniciativa; un anillo rodea el escudo de la academia y los lemas del evento. En la base, otra placa: «Gracias por vuestra solidaridad».</p>` },
      { h2: 'Producción y entrega', html: `
<p>El balón se imprime hueco en dos mitades para ahorrar material y peso; la roca, en gris con capa gruesa para que la textura se note. Placas y anillo se imprimen aparte y se ajustan a la curva. Una semana de taller y entrega en mano en Cullera, a diez minutos de Sueca.</p>` },
    ],
    faq: [
      { p: '¿Hacéis piezas únicas para eventos solidarios?', r: '<p>Sí. Una pieza sola cuesta lo que cuesta diseñarla e imprimirla; no hay mínimo de pedido ni recargo por unidad única.</p>' },
      { p: '¿Se puede incluir el escudo de un club profesional?', r: '<p>Solo si el club o la entidad organizadora lo autoriza. Aquí el escudo lo aportó la propia organización del evento.</p>' },
      { p: '¿Podéis replicar un balón u otro objeto real?', r: '<p>Sí. Modelamos balones, raquetas, botas, cascos o cualquier objeto a escala real o reducida.</p>' },
      { p: '¿Cuánto tarda una pieza única?', r: '<p>Alrededor de una semana entre diseño, impresión y montaje.</p>' },
    ],
    relacionados: ['torneig-ciutat-de-sueca', 'placas-debutante-ad-esperanza'],
  },
  // ----------------------------------------------------------
  {
    slug: '10k-sense-limits',
    nombre: '10K Sense Límits',
    h1: ['Medallas 10K', 'Sense Límits'],
    cliente: '10K Sense Límits',
    localidad: 'Aldaia',
    zona: 'valencia',
    servicio: 'medallas',
    anio: 2026,
    evento: '10K Sense Límits 2026 de Aldaia',
    etiqueta: 'Medallas de carrera',
    title: 'Medallas 10K Sense Límits de Aldaia impresas en 3D | PIQ3D',
    description: 'Medalla finisher impresa en 3D para la 10K Sense Límits 2026 de Aldaia: siluetas de corredores en relieve sobre un fondo de puntos verdes y amarillos.',
    resumen: 'Medalla finisher con siluetas de corredores en relieve y fondo de puntos verdes y amarillos, con cinta verde.',
    intro: 'Una medalla para todos los que cruzan la meta. Siluetas en negro sobre un fondo de puntos que se degrada en verde y amarillo, y el nombre de la carrera atravesando la pieza.',
    imagen: { src: 'public/img/galeria/medallasenselimitsfondo.webp', w: 1320, h: 1600, alt: 'Medalla finisher de la 10K Sense Límits 2026 de Aldaia impresa en 3D, con corredores en relieve y cinta verde' },
    galeria: [],
    ficha: [['Cliente', 'Organización 10K Sense Límits'], ['Evento', '10K Sense Límits 2026'], ['Localidad', 'Aldaia, l’Horta Sud'], ['Año', '2026'], ['Unidades', '500 medallas'], ['Diámetro', '8 cm'], ['Material', 'PLA blanco, negro, verde y amarillo; cinta verde'], ['Plazo', '3 semanas']],
    secciones: [
      { h2: 'El encargo', html: `
<p>La 10K Sense Límits de Aldaia es una carrera abierta a todo el mundo, con espíritu inclusivo. La organización necesitaba varios cientos de medallas finisher iguales, con un diseño propio y una fecha de entrega que no admitía retrasos.</p>` },
      { h2: 'El diseño', html: `
<p>Dos corredores en silueta negra sobre un fondo de puntos que pasa del verde al amarillo, como una trama de semitono. El nombre de la carrera y el año cruzan la medalla en una banda que sobresale. La pieza es fina y plana para que la tirada sea rápida y la medalla ligera al cuello.</p>
<p>Prototipo impreso y aprobado antes de lanzar la serie.</p>` },
      { h2: 'Producción y entrega', html: `
<p>Aquí es donde la granja de impresión marca la diferencia: las quinientas medallas se repartieron entre todas las máquinas y salieron en pocos días, cada una en una sola pieza de cuatro colores. Cintas verdes montadas en el taller.</p>
<p>Entrega en mano en Aldaia, una semana antes de la carrera.</p>` },
    ],
    faq: [
      { p: '¿Cuántas medallas podéis hacer para una carrera?', r: '<p>De unas decenas a más de mil. Producimos en paralelo en varias impresoras, así que una tirada de 500 no tarda mucho más que una de 100.</p>' },
      { p: '¿La cinta va incluida?', r: '<p>Sí. Elegimos el color de la cinta a juego con el diseño y la montamos en el taller.</p>' },
      { p: '¿Se pueden hacer versiones por puesto (oro, plata, bronce)?', r: '<p>Sí. Mismo diseño, cambio de color en el fondo o en la banda, sin coste de diseño adicional.</p>' },
      { p: '¿Con cuánto tiempo hay que pedirlas?', r: '<p>Idealmente con un mes: una semana de diseño y prototipo, dos de producción y margen para la entrega.</p>' },
    ],
    relacionados: ['medallas-ajedrez-sueca', 'volta-a-peu-fibravalencia'],
  },
  // ----------------------------------------------------------
  {
    slug: 'medallas-ajedrez-sueca',
    nombre: 'Open de ajedrez Ciutat de Sueca',
    h1: ['Medallas del X Open', 'de ajedrez de Sueca'],
    cliente: 'Club d’Escacs Sueca',
    localidad: 'Sueca',
    zona: 'ribera-baixa',
    servicio: 'medallas',
    anio: 2025,
    evento: 'X Open Internacional Ciutat de Sueca de ajedrez',
    etiqueta: 'Medallas de torneo',
    title: 'Medallas del X Open de ajedrez Ciutat de Sueca | PIQ3D',
    description: 'Medallas impresas en 3D para el X Open Internacional Ciutat de Sueca del Club d’Escacs Sueca: caballo rojo en relieve sobre tablero y banda dorada.',
    resumen: 'Caballo de ajedrez rojo en relieve sobre un tablero, con banda dorada y cinta negra, para el X Open Internacional.',
    intro: 'Un caballo rojo que sale del tablero. Medallas para el X Open Internacional Ciutat de Sueca, con la banda dorada del torneo y cinta negra.',
    imagen: { src: 'public/img/galeria/medallasajedrezsueca.webp', w: 1097, h: 1335, alt: 'Medallas del X Open Internacional Ciutat de Sueca de ajedrez impresas en 3D: caballo rojo en relieve sobre tablero con banda dorada' },
    galeria: [],
    ficha: [['Cliente', 'Club d’Escacs Sueca'], ['Evento', 'X Open Internacional Ciutat de Sueca'], ['Localidad', 'Sueca, Ribera Baixa'], ['Año', '2025'], ['Unidades', '60 medallas'], ['Diámetro', '7 cm'], ['Material', 'PLA blanco, negro, rojo y dorado; cinta negra'], ['Plazo', '10 días']],
    secciones: [
      { h2: 'El encargo', html: `
<p>El Club d’Escacs Sueca celebra cada año su Open Internacional Ciutat de Sueca, con jugadores de varias categorías y edades. Para la décima edición querían una medalla propia, lejos de las genéricas de catálogo, y que se entregara a todos los premiados.</p>` },
      { h2: 'El diseño', html: `
<p>Un disco con el tablero de ajedrez en blanco y negro y, en relieve, un caballo rojo que sobresale claramente del fondo. Una banda dorada cruza la medalla con el nombre del torneo y del club. La combinación rojo, dorado y tablero la hace reconocible desde lejos en la foto de grupo.</p>` },
      { h2: 'Producción y entrega', html: `
<p>Cada medalla sale en una sola pieza de cuatro colores. Sesenta unidades en un par de días de impresión en paralelo, montaje de cintas negras y revisión. Entrega en mano en Sueca, donde está el taller.</p>` },
    ],
    faq: [
      { p: '¿Hacéis medallas para torneos de ajedrez y otros deportes de mesa?', r: '<p>Sí. Ajedrez, dominó, pilota, petanca… cualquier torneo con premiados. La figura o el objeto del juego se modela desde cero.</p>' },
      { p: '¿Se puede poner la clasificación en cada medalla?', r: '<p>Sí: categoría, puesto o nombre del jugador, sin coste por variante.</p>' },
      { p: '¿Cuál es el pedido mínimo?', r: '<p>No hay mínimo, aunque las medallas son más económicas por unidad a partir de unas decenas.</p>' },
      { p: '¿Cuánto tardan sesenta medallas?', r: '<p>Unos diez días desde el diseño aprobado, incluido el montaje de las cintas.</p>' },
    ],
    relacionados: ['10k-sense-limits', 'trofeu-antonio-puchades'],
  },
];

/* ---------- de caso a página ---------- */

const fichaHtml = (ficha) => `<dl class="ficha">${ficha.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>`;

export function paginaCaso(c, casos) {
  const servicio = c.servicio === 'medallas' ? { url: '/medallas-personalizadas/', texto: 'Medallas personalizadas impresas en 3D' } : c.servicio === 'placas' ? { url: '/placas-personalizadas/', texto: 'Placas personalizadas impresas en 3D' } : { url: '/trofeos-personalizados/', texto: 'Trofeos personalizados impresos en 3D' };
  const zona = ZONA[c.zona];
  const enlaces = [
    servicio,
    ...(zona ? [{ url: `/${zona.ruta}/`, texto: `Trofeos y medallas en ${zona.nombre}` }] : [{ url: '/trofeos-personalizados/', texto: 'Entrega en toda España' }]),
    { url: '/trabajos/', texto: 'Todos los trabajos' },
    { url: '/galeria/', texto: 'Galería de piezas' },
  ];
  const figuraPrincipal = c.video ? { video: c.video.src, poster: c.video.poster, w: c.video.w, h: c.video.h, alt: c.video.alt } : c.imagen;
  const [s1, s2, s3] = c.secciones;
  return {
    ruta: `trabajos/${c.slug}`,
    tipo: 'caso',
    etiqueta: c.etiqueta,
    title: c.title,
    description: c.description,
    h1: c.h1,
    migaActual: c.nombre,
    migas: [{ nombre: 'Trabajos', url: '/trabajos/' }],
    intro: c.intro,
    ogImagen: c.imagen.src,
    ogTitulo: c.nombre,
    ogTipo: 'article',
    obra: { nombre: c.nombre, imagenes: [c.imagen.src, ...c.galeria.map((g) => g.src)], anio: c.anio, evento: c.evento },
    bloques: [
      { tipo: 'texto', h2: s1.h2, html: fichaHtml(c.ficha) + s1.html, figura: figuraPrincipal },
      { tipo: 'texto', h2: s2.h2, html: s2.html, figura: c.galeria[0] || (c.video ? c.imagen : null) },
      { tipo: 'texto', h2: s3.h2, html: s3.html, figura: c.galeria[1] || null },
      { tipo: 'casos', h2: 'Trabajos parecidos', casos: c.relacionados },
      { tipo: 'faq', faq: c.faq },
      { tipo: 'relacionados', enlaces },
    ],
    cta: { titulo: '¿El tuyo?', texto: 'Cuéntanos tu evento y te proponemos una pieza propia, con el diseño 3D incluido en el presupuesto.' },
  };
}
