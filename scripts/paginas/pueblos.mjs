// ============================================================
//  Páginas de pueblo: /impresion-3d-<slug>/ para cada municipio
//  de la Ribera Baixa (y Alzira). Cada una tiene su texto propio:
//  qué se pide allí, cómo entregamos, trabajos cercanos y FAQ.
//  Albalat de la Ribera es la página fuerte de «impresión 3D
//  personalizada» (hay competencia local) y lleva más contenido.
// ============================================================

import { PUEBLOS, SERVICIOS } from './_datos.mjs';

const P = Object.fromEntries(PUEBLOS.map((p) => [p.slug, p]));
const url = (slug) => `/impresion-3d-${slug}/`;

const SERVICIOS_HTML = `
<p>Todo lo que fabricamos sale del mismo taller y con el mismo método: diseño 3D propio, prototipo y producción en nuestra granja de impresoras.</p>
<ul>
<li><a href="/trofeos-personalizados/">Trofeos personalizados</a> para torneos, carreras, fallas y reconocimientos.</li>
<li><a href="/medallas-personalizadas/">Medallas personalizadas</a> de decenas a más de mil unidades, con cinta.</li>
<li><a href="/placas-personalizadas/">Placas y reconocimientos</a> con el escudo o el logotipo en relieve.</li>
<li><a href="/llaveros-personalizados/">Llaveros, imanes, pines y figuras</a> para clubes, fallas y comercios.</li>
<li><a href="/soportes-qr-nfc-restaurantes/">Soportes de carta QR y NFC</a> con la forma del logotipo del restaurante.</li>
<li><a href="/impresion-3d-personalizada/">Piezas a medida y prototipos</a>: cualquier objeto que puedas dibujar o describir.</li>
</ul>`;

const FAQ_COMUN = (nombre) => [
  { p: '¿Hay pedido mínimo?', r: '<p>No. Imprimimos desde una pieza única hasta tiradas de más de mil unidades.</p>' },
  { p: '¿El diseño se cobra aparte?', r: `<p>No. El diseño 3D va incluido en el presupuesto, también para pedidos de ${nombre} de una sola pieza. Te enviamos renders para aprobarlo antes de imprimir.</p>` },
];

/** Datos propios de cada pueblo. `que` y `entrega` son HTML; `faq` son preguntas específicas. */
const DATOS = {
  sueca: {
    h1: ['Impresión 3D', 'personalizada en Sueca'],
    title: 'Impresión 3D personalizada en Sueca | PIQ3D',
    description: 'Taller de impresión 3D en Sueca: trofeos, medallas, placas, llaveros, soportes QR y piezas a medida. Diseño incluido, prototipo y recogida con cita previa.',
    intro: 'Aquí está el taller. Si buscas impresión 3D en Sueca, somos los únicos que diseñan e imprimen en el propio pueblo: trofeos, medallas, merchandising, soportes QR para restaurantes y piezas a medida, con recogida en mano.',
    imagen: { src: 'public/img/logo-trofeos.webp', w: 1600, h: 1765, alt: 'Logotipo de PIQ3D impreso en 3D con trofeos de fondo en el taller de Sueca', pie: 'El taller, en Sueca' },
    que: `
<p>En Sueca trabajamos con los clubes del pueblo desde el principio: el <a href="/trabajos/torneig-ciutat-de-sueca/">Torneig Ciutat de Sueca</a> del FS Sueca, el <a href="/trabajos/trofeu-antonio-puchades/">Trofeu Antonio Puchades</a> de la SD Sueca, el <a href="/trabajos/trofeu-pepe-soler/">Trofeu Pepe Soler</a> del CH Sueca y las <a href="/trabajos/medallas-ajedrez-sueca/">medallas del Open de ajedrez</a>. También los premios de la Falla Sucro y de concursos de paellas, el Sueca Arròs de la SDS, reconocimientos como el del Luis Vives y los soportes de carta QR de Coco Beach, Ca Quintín, El Niu y Sushi Room.</p>
<p>Y, cada vez más, <strong>piezas sueltas</strong>: un soporte que no se fabrica, un repuesto descatalogado, una maqueta para un proyecto, un detalle para una boda o una comunión. Si lo puedes describir, lo podemos modelar e imprimir.</p>`,
    entrega: `
<p>Al estar en Sueca, no hay transporte: recoges tu pedido en el taller con cita previa (no tenemos tienda abierta al público) o te lo llevamos a donde se celebre el evento, al pabellón, al campo o al local. Para el Mareny de Barraquetes y el Perelló, lo mismo.</p>
<p>Si te viene mejor ver piezas reales antes de decidir, escríbenos por WhatsApp y quedamos en el taller.</p>`,
    casos: ['torneig-ciutat-de-sueca', 'trofeu-antonio-puchades', 'medallas-ajedrez-sueca'],
    faq: [
      { p: '¿Dónde está el taller en Sueca?', r: '<p>En Sueca, con atención con cita previa. No es una tienda: escríbenos por WhatsApp y concretamos hora para ver piezas, recoger un pedido o revisar un prototipo.</p>' },
      { p: '¿Imprimís piezas sueltas o solo trofeos?', r: '<p>Las dos cosas. Trofeos y medallas son lo más habitual, pero imprimimos cualquier pieza a medida: soportes, repuestos, maquetas, figuras, detalles para eventos. Mira la página de <a href="/impresion-3d-personalizada/">impresión 3D personalizada</a>.</p>' },
      { p: '¿Cuánto tarda un pedido en Sueca?', r: '<p>Diseño en menos de una semana y producción en días. Al no haber envío, lo tienes en cuanto sale de la impresora.</p>' },
    ],
  },
  'albalat-de-la-ribera': {
    h1: ['Impresión 3D', 'personalizada en', 'Albalat de la Ribera'],
    title: 'Impresión 3D personalizada en Albalat de la Ribera | PIQ3D',
    description: 'Impresión 3D personalizada en Albalat de la Ribera: trofeos, medallas, placas, llaveros, soportes QR y piezas a medida. A 8 minutos, entrega en mano.',
    intro: 'Si buscas impresión 3D personalizada en Albalat de la Ribera, tienes un taller a ocho minutos, al otro lado del Xúquer. Diseñamos desde cero, imprimimos en multicolor en nuestra granja de impresoras y entregamos en mano en Albalat: trofeos, medallas, placas, merchandising, soportes QR para restaurantes y cualquier pieza a medida.',
    imagen: { src: 'public/img/trofeu-puchades.webp', w: 1536, h: 2048, alt: 'Trofeos impresos en 3D por PIQ3D sobre el césped de un campo de fútbol de la Ribera', pie: 'Trofeu Antonio Puchades · Sueca, a 5 km de Albalat' },
    que: `
<h3>Impresión 3D personalizada, no solo trofeos</h3>
<p>Lo primero que nos piden desde Albalat son piezas a medida: un soporte, una carcasa, un repuesto que ya no se vende, un prototipo para una idea, una figura con el nombre de alguien. Lo modelamos en 3D a partir de tu descripción, un dibujo o una foto, te enviamos el render y, si lo apruebas, lo imprimimos. Si ya tienes el archivo STL, mejor: lo revisamos y lo imprimimos en el color y el material que necesites.</p>
<h3>Trofeos y medallas para los clubes y la falla</h3>
<p>Para el club de fútbol, la escuela de pilota, el club de ciclismo o cualquier torneo de Albalat, <a href="/trofeos-personalizados/">trofeos con el escudo en relieve</a> y <a href="/medallas-personalizadas/">medallas con cinta</a> para todos los participantes. Para la comisión fallera, premios de concursos de paellas, playbacks y presentaciones, y pines y llaveros con el escudo de la falla.</p>
<h3>Merchandising, placas y soportes QR</h3>
<p>Llaveros e imanes con el logotipo de tu comercio o tu asociación, placas de reconocimiento para el ayuntamiento o la cooperativa, y soportes de carta QR y NFC con la forma del logotipo para los bares y restaurantes del pueblo, como los que ya usan varios locales de Sueca.</p>
<h3>Por qué encargarlo aquí</h3>
<ul>
<li>El diseño 3D va incluido: no pagas horas de modelado aparte.</li>
<li>Prototipo en la mano antes de la serie, sin sorpresas.</li>
<li>Varias impresoras FDM en paralelo con cambio de color automático: tiradas de cientos de unidades en días.</li>
<li>PLA biodegradable, acabados mate y metalizados (dorado, plateado).</li>
<li>El archivo se guarda: repetir el pedido el año siguiente no cuesta diseño.</li>
<li>Entrega en mano en Albalat, sin transporte ni mínimos.</li>
</ul>`,
    entrega: `
<p>Albalat está a cinco kilómetros del taller, cruzando el Xúquer: ocho minutos en coche. Entregamos en mano en el pueblo, en el campo, el local de la falla o el bar, el día que te venga bien, sin coste de transporte. Y si prefieres pasar por Sueca a ver piezas o a recoger, quedamos con cita previa.</p>
<p>Para un trofeo o una pieza suelta, cuenta con una semana de diseño y unos días de impresión. Para una tirada de medallas o llaveros, pide con tres o cuatro semanas de margen.</p>`,
    casos: ['trofeu-antonio-puchades', 'medallas-ajedrez-sueca', 'juntos-por-super-ivan'],
    faq: [
      { p: '¿Hacéis impresión 3D de piezas sueltas en Albalat?', r: '<p>Sí. Repuestos, soportes, carcasas, maquetas, figuras, detalles para eventos. Si tienes el archivo STL lo imprimimos directamente; si no, lo diseñamos nosotros a partir de una descripción, un dibujo o una foto.</p>' },
      { p: '¿Cuánto tarda un pedido para Albalat?', r: '<p>Una pieza suelta, entre tres y siete días según el diseño. Trofeos y medallas, diseño en menos de una semana y producción en días. Entregamos en mano en Albalat sin coste.</p>' },
      { p: '¿Qué materiales usáis?', r: '<p>PLA, un plástico de origen vegetal y biodegradable, en colores mate y metalizados, con hasta cuatro colores en una misma pieza. Para piezas que necesiten más resistencia al calor o a la flexión, consúltanos.</p>' },
      { p: '¿Puedo ver una muestra antes de encargar?', r: '<p>Sí. Te enviamos renders y, si hace falta, imprimimos un prototipo que te acercamos a Albalat o que recoges en Sueca.</p>' },
    ],
  },
  'polinya-de-xuquer': {
    h1: ['Impresión 3D en', 'Polinyà de Xúquer'],
    title: 'Impresión 3D en Polinyà de Xúquer | PIQ3D',
    description: 'Impresión 3D en Polinyà de Xúquer: trofeos, medallas, llaveros, placas y piezas a medida con diseño incluido. Taller a 10 minutos, entrega en mano.',
    intro: 'Polinyà de Xúquer está a diez minutos del taller. Diseñamos e imprimimos en 3D trofeos, medallas, merchandising y piezas a medida para el club, la falla, el comercio y el ayuntamiento, y los entregamos en mano en el pueblo.',
    imagen: { src: 'public/img/galeria/medallasajedrezsueca.webp', w: 1097, h: 1335, alt: 'Medallas impresas en 3D con caballo de ajedrez rojo, fabricadas en Sueca', pie: 'Medallas del Open de ajedrez · Sueca' },
    que: `
<p>Polinyà es un pueblo de club de fútbol, falla y fiestas de calle, y eso es justo lo que más fabricamos: <a href="/trofeos-personalizados/">trofeos</a> para el torneo de verano con el escudo del club, <a href="/medallas-personalizadas/">medallas</a> para los más pequeños, premios para los concursos de la falla y <a href="/llaveros-personalizados/">llaveros e imanes</a> para la comisión o la penya.</p>
<p>Para los bares del pueblo, <a href="/soportes-qr-nfc-restaurantes/">soportes de carta QR</a> con su logotipo. Y para quien necesite una pieza suelta (un repuesto, un soporte, una maqueta), <a href="/impresion-3d-personalizada/">impresión 3D a medida</a> con el diseño incluido.</p>`,
    entrega: `
<p>Desde Sueca llegamos a Polinyà por Albalat en unos diez minutos. Entregamos en mano sin coste de transporte, en el campo, en el casal o donde nos digas. También puedes recoger en el taller de Sueca con cita previa.</p>`,
    casos: ['medallas-ajedrez-sueca', 'torneig-ciutat-de-sueca', 'trofeu-pepe-soler'],
    faq: [
      { p: '¿Entregáis en Polinyà de Xúquer?', r: '<p>Sí, en mano y sin coste. Estamos a diez minutos por Albalat.</p>' },
      { p: '¿Podéis hacer los trofeos del torneo del club con su escudo?', r: '<p>Sí. Con una imagen del escudo lo modelamos en relieve y a color. El diseño queda guardado para la edición siguiente.</p>' },
    ],
  },
  'benicull-de-xuquer': {
    h1: ['Impresión 3D en', 'Benicull de Xúquer'],
    title: 'Impresión 3D en Benicull de Xúquer | PIQ3D',
    description: 'Impresión 3D en Benicull de Xúquer: trofeos, medallas, placas, llaveros y piezas a medida con diseño incluido. Taller a 12 minutos y entrega en mano.',
    intro: 'Benicull de Xúquer es uno de los municipios más jóvenes de la comarca y de los más cercanos al taller. Trofeos, medallas, merchandising y piezas a medida, diseñados desde cero y entregados en mano.',
    imagen: { src: 'public/img/llaveros-club.webp', w: 800, h: 800, alt: 'Llaveros personalizados impresos en 3D con el escudo de un club', pie: 'Llaveros de club impresos en 3D' },
    que: `
<p>En un pueblo pequeño los pedidos suelen ser pequeños, y eso nos viene bien: no hay mínimo. Un trofeo para el campeonato de la asociación, una docena de medallas para la carrera infantil de las fiestas, una placa de agradecimiento para el ayuntamiento, llaveros para la penya o una pieza suelta que no encuentras en ninguna tienda.</p>
<p>Todo con el <a href="/impresion-3d-personalizada/">diseño 3D incluido</a>: nos cuentas la idea y te mandamos el render antes de imprimir.</p>`,
    entrega: `
<p>Benicull está a unos doce minutos del taller, pasando Albalat y Polinyà. Entregamos en mano sin coste o quedamos en Sueca con cita previa. Para pedidos pequeños, lo normal es tenerlo en una semana.</p>`,
    casos: ['medallas-ajedrez-sueca', 'juntos-por-super-ivan', 'placas-debutante-ad-esperanza'],
    faq: [
      { p: '¿Hacéis pedidos pequeños para Benicull?', r: '<p>Sí. Una sola pieza o una docena de medallas; no hay pedido mínimo y el diseño va incluido.</p>' },
      { p: '¿Cuánto tarda?', r: '<p>Un pedido pequeño, alrededor de una semana entre diseño e impresión. Entregamos en mano en Benicull.</p>' },
    ],
  },
  riola: {
    h1: ['Impresión 3D', 'en Riola'],
    title: 'Impresión 3D en Riola | PIQ3D',
    description: 'Impresión 3D en Riola: trofeos, medallas, placas, llaveros y piezas a medida con diseño incluido. Taller en Sueca a 6 minutos, entrega en mano sin coste.',
    intro: 'Riola está a cuatro kilómetros del taller: somos vecinos. Diseñamos e imprimimos en 3D trofeos, medallas, merchandising y piezas a medida para el club, la falla, el comercio y el ayuntamiento de Riola.',
    imagen: { src: 'public/img/pepe-soler.webp', w: 1536, h: 2048, alt: 'Trofeos de balonmano impresos en 3D en un pabellón de la Ribera', pie: 'Trofeu Pepe Soler · CH Sueca' },
    que: `
<p>Riola es el pueblo más cercano al taller, y por eso los pedidos de aquí son los más ágiles: <a href="/trofeos-personalizados/">trofeos</a> para el torneo del club o el campeonato de pilota, <a href="/medallas-personalizadas/">medallas</a> para la carrera de las fiestas, premios para la falla y <a href="/llaveros-personalizados/">llaveros, imanes y pines</a> con el escudo del pueblo o de la comisión.</p>
<p>También piezas sueltas: un soporte, un repuesto, una maqueta, un regalo personalizado. Con el <a href="/impresion-3d-personalizada/">diseño incluido</a>.</p>`,
    entrega: `
<p>Seis minutos en coche. Entregamos en mano en Riola el día que te venga bien, sin coste, o te pasas por el taller de Sueca con cita previa a ver piezas y recoger.</p>`,
    casos: ['trofeu-pepe-soler', 'torneig-ciutat-de-sueca', 'medallas-ajedrez-sueca'],
    faq: [
      { p: '¿Cuánto tarda un pedido para Riola?', r: '<p>Lo mismo que en Sueca: diseño en menos de una semana, producción en días y entrega en mano al momento.</p>' },
      { p: '¿Podéis hacer un prototipo antes?', r: '<p>Sí. Para pedidos de varias unidades imprimimos una muestra y te la acercamos a Riola o la ves en el taller.</p>' },
    ],
  },
  fortaleny: {
    h1: ['Impresión 3D', 'en Fortaleny'],
    title: 'Impresión 3D en Fortaleny | PIQ3D',
    description: 'Impresión 3D en Fortaleny: trofeos, medallas, placas, llaveros y piezas a medida con diseño incluido. Taller en Sueca a 9 minutos y entrega en mano.',
    intro: 'Fortaleny es pequeño y está cerca: nueve minutos desde el taller. Trofeos, medallas, merchandising y piezas a medida para las fiestas, el club, la asociación y el ayuntamiento, diseñados desde cero y entregados en mano.',
    imagen: { src: 'public/img/galeria/juntos-por-super-ivan.webp', w: 1200, h: 1600, alt: 'Trofeo con balón de fútbol impreso en 3D sobre una roca', pie: 'Trofeo solidario · Cullera' },
    que: `
<p>Para un pueblo de mil habitantes, lo que marca la diferencia es poder encargar poco: un trofeo para el campeonato de fiestas, veinte medallas para la carrera de los niños, una placa para un homenaje. Sin mínimos, con el <a href="/impresion-3d-personalizada/">diseño 3D incluido</a> y el escudo del pueblo o de la asociación en relieve.</p>
<p>Y lo mismo para piezas sueltas que no se encuentran: un soporte, un repuesto, una figura o una maqueta.</p>`,
    entrega: `
<p>Nueve minutos por Riola. Entregamos en mano en Fortaleny sin coste de transporte, o recoges en Sueca con cita previa.</p>`,
    casos: ['juntos-por-super-ivan', 'trofeu-pepe-soler', 'medallas-ajedrez-sueca'],
    faq: [
      { p: '¿Hacéis encargos muy pequeños para Fortaleny?', r: '<p>Sí. No hay pedido mínimo: desde una sola pieza.</p>' },
      { p: '¿Cuánto tarda?', r: '<p>Alrededor de una semana para pedidos pequeños, entre diseño e impresión. Entrega en mano.</p>' },
    ],
  },
  corbera: {
    h1: ['Impresión 3D', 'en Corbera'],
    title: 'Impresión 3D en Corbera | PIQ3D',
    description: 'Impresión 3D en Corbera: trofeos, medallas, placas, llaveros y piezas a medida con diseño incluido. Taller en Sueca a 15 minutos y entrega en mano.',
    intro: 'Corbera, al pie de la sierra, está a un cuarto de hora del taller. Trofeos para el club y las carreras de montaña, medallas, merchandising para la falla y piezas a medida, diseñados desde cero y entregados en mano.',
    imagen: { src: 'public/img/la-canyada.webp', w: 1600, h: 2133, alt: 'Trofeo de carrera popular con forma de huella de hojas impreso en 3D', pie: 'Trofeo de carrera · huella de hojas' },
    que: `
<p>Corbera tiene la Serra de Corbera a la espalda, y las rutas y carreras por la montaña piden <a href="/trofeos-personalizados/">trofeos</a> con el perfil de la sierra o el castillo en relieve y <a href="/medallas-personalizadas/">medallas</a> para todos los que llegan. Para el club de fútbol y los torneos de fiestas, trofeos con el escudo; para la falla, premios de concursos y <a href="/llaveros-personalizados/">pines y llaveros</a> para la comisión.</p>
<p>Y para quien necesite una pieza suelta, un repuesto o un prototipo, <a href="/impresion-3d-personalizada/">impresión 3D a medida</a> con el diseño incluido.</p>`,
    entrega: `
<p>Unos quince minutos desde Sueca por Riola y Fortaleny. Entregamos en mano en Corbera sin coste, en el lugar del evento o donde nos digas, o quedamos en el taller de Sueca con cita previa.</p>`,
    casos: ['volta-a-peu-la-canyada', '10k-sense-limits', 'torneig-ciutat-de-sueca'],
    faq: [
      { p: '¿Podéis hacer trofeos para una carrera de montaña en Corbera?', r: '<p>Sí. Modelamos el perfil de la sierra, el castillo o el símbolo de la carrera en relieve, y medallas a juego para los participantes.</p>' },
      { p: '¿Cuánto tarda un pedido para Corbera?', r: '<p>Diseño en menos de una semana y producción en días. Para una carrera con medallas, pide con un mes de margen.</p>' },
    ],
  },
  llauri: {
    h1: ['Impresión 3D', 'en Llaurí'],
    title: 'Impresión 3D en Llaurí | PIQ3D',
    description: 'Impresión 3D en Llaurí: trofeos, medallas, placas, llaveros y piezas a medida con diseño incluido. Taller en Sueca a 13 minutos y entrega en mano.',
    intro: 'Llaurí está a trece minutos del taller, entre Corbera y Favara. Trofeos, medallas, merchandising y piezas a medida para las fiestas, el club, la falla y el ayuntamiento, diseñados desde cero y entregados en mano.',
    imagen: { src: 'public/img/galeria/medallasenselimitsfondo.webp', w: 1320, h: 1600, alt: 'Medalla finisher impresa en 3D con corredores en relieve y cinta verde', pie: 'Medalla finisher · 10K Sense Límits' },
    que: `
<p>En Llaurí lo que más se encarga son premios para las fiestas y para el club: <a href="/trofeos-personalizados/">trofeos</a> del campeonato de fútbol sala o de pilota, <a href="/medallas-personalizadas/">medallas</a> para la carrera o el torneo infantil, y <a href="/llaveros-personalizados/">llaveros e imanes</a> con el escudo del pueblo para la penya o la comisión.</p>
<p>Para el ayuntamiento y las asociaciones, <a href="/placas-personalizadas/">placas de reconocimiento</a> con el escudo en relieve. Y piezas sueltas a medida con el diseño incluido.</p>`,
    entrega: `
<p>Trece minutos desde Sueca. Entregamos en mano en Llaurí sin coste de transporte, o recoges en el taller con cita previa. Pedidos pequeños, en una semana.</p>`,
    casos: ['10k-sense-limits', 'medallas-ajedrez-sueca', 'juntos-por-super-ivan'],
    faq: [
      { p: '¿Entregáis en Llaurí?', r: '<p>Sí, en mano y sin coste. Estamos a trece minutos.</p>' },
      { p: '¿Podéis poner el escudo del pueblo en las piezas?', r: '<p>Sí, si lo encarga el ayuntamiento o una entidad autorizada. Lo modelamos en relieve y a color.</p>' },
    ],
  },
  favara: {
    h1: ['Impresión 3D', 'en Favara'],
    title: 'Impresión 3D en Favara | PIQ3D',
    description: 'Impresión 3D en Favara: trofeos, medallas, placas, llaveros y piezas a medida con diseño incluido. Taller en Sueca a 12 minutos y entrega en mano.',
    intro: 'Favara está a doce minutos del taller por la A-38, entre Cullera y la Valldigna. Trofeos, medallas, merchandising y piezas a medida para el club, la falla, las fiestas y los comercios, diseñados desde cero y entregados en mano.',
    imagen: { src: 'public/img/futsal-sueca.webp', w: 1402, h: 2048, alt: 'Trofeos de fútbol sala negros con balón dorado impresos en 3D', pie: 'Torneig Ciutat de Sueca · FS Sueca' },
    que: `
<p>Para el club de fútbol y los torneos de fiestas de Favara, <a href="/trofeos-personalizados/">trofeos</a> con el escudo en relieve como los del FS Sueca; para la carrera popular, <a href="/medallas-personalizadas/">medallas</a> con el logotipo y la fecha; para la falla, premios de concursos y <a href="/llaveros-personalizados/">pines y llaveros</a>.</p>
<p>Para los bares y restaurantes, <a href="/soportes-qr-nfc-restaurantes/">soportes de carta QR y NFC</a> con la forma de su logotipo. Y piezas sueltas a medida con el <a href="/impresion-3d-personalizada/">diseño incluido</a>.</p>`,
    entrega: `
<p>Doce minutos por la A-38. Entregamos en mano en Favara sin coste, en el campo, el casal o el local, o quedamos en el taller de Sueca con cita previa.</p>`,
    casos: ['torneig-ciutat-de-sueca', 'juntos-por-super-ivan', '10k-sense-limits'],
    faq: [
      { p: '¿Cuánto tarda un pedido para Favara?', r: '<p>Diseño en menos de una semana y producción en días; entrega en mano en Favara. Para tiradas de medallas, un mes de margen.</p>' },
      { p: '¿Hacéis soportes QR para bares de Favara?', r: '<p>Sí, con la forma del logotipo del local y chip NFC opcional, como los que ya usan varios restaurantes de Sueca.</p>' },
    ],
  },
  cullera: {
    h1: ['Impresión 3D', 'en Cullera'],
    title: 'Impresión 3D en Cullera | PIQ3D',
    description: 'Impresión 3D en Cullera: trofeos, medallas, llaveros, soportes QR para restaurantes y piezas a medida. Diseño incluido, a 12 minutos, entrega en mano.',
    intro: 'Cullera está a doce minutos del taller. Ya hemos trabajado aquí: el trofeo solidario Juntos por Super Iván. Trofeos, medallas, merchandising, soportes QR para la hostelería de la playa y piezas a medida, diseñados desde cero y entregados en mano.',
    imagen: { src: 'public/img/galeria/juntos-por-super-ivan.webp', w: 1200, h: 1600, alt: 'Trofeo solidario Juntos por Super Iván impreso en 3D en Cullera: balón de fútbol sobre una roca', pie: 'Juntos por Super Iván · Cullera' },
    que: `
<p>Cullera es ciudad de clubes, carreras y fallas, y de una hostelería enorme en la playa. Para los clubes, <a href="/trofeos-personalizados/">trofeos</a> con el escudo y <a href="/medallas-personalizadas/">medallas</a> por tiradas; para las carreras y travesías, medallas finisher para cientos de participantes; para las fallas, premios de concursos y <a href="/llaveros-personalizados/">pines y llaveros</a> para las comisiones.</p>
<p>Para los restaurantes y chiringuitos de la playa, el Faro y el pueblo, <a href="/soportes-qr-nfc-restaurantes/">soportes de carta QR y NFC</a> con la forma del logotipo, como los que ya usan Coco Beach, Ca Quintín, El Niu y Sushi Room en Sueca. Y para empresas y particulares, <a href="/impresion-3d-personalizada/">piezas a medida</a>.</p>
<p>El <a href="/trabajos/juntos-por-super-ivan/">trofeo solidario Juntos por Super Iván</a>, con la Valencia CF Academia, lo diseñamos e imprimimos para un evento celebrado en Cullera.</p>`,
    entrega: `
<p>Doce minutos por la A-38. Entregamos en mano en Cullera sin coste de transporte, en el pabellón, el local o el restaurante, o recoges en Sueca con cita previa. Para la hostelería de temporada, pide los soportes QR con dos o tres semanas de margen antes de abrir.</p>`,
    casos: ['juntos-por-super-ivan', 'torneig-ciutat-de-sueca', '10k-sense-limits'],
    faq: [
      { p: '¿Habéis trabajado ya en Cullera?', r: '<p>Sí: el trofeo solidario Juntos por Super Iván, para un evento con la Valencia CF Academia. Está documentado en <a href="/trabajos/juntos-por-super-ivan/">trabajos</a>.</p>' },
      { p: '¿Hacéis soportes QR para restaurantes de la playa de Cullera?', r: '<p>Sí, con la forma del logotipo y chip NFC opcional, resistentes al uso diario en mesa. Pide presupuesto con tu logotipo y el número de mesas.</p>' },
      { p: '¿Cuánto tardan las medallas de una carrera en Cullera?', r: '<p>Diseño y prototipo en una semana y producción de cientos de unidades en pocos días. Pide con un mes de margen.</p>' },
    ],
  },
  sollana: {
    h1: ['Impresión 3D', 'en Sollana'],
    title: 'Impresión 3D en Sollana | PIQ3D',
    description: 'Impresión 3D en Sollana: trofeos, medallas, placas, llaveros y piezas a medida con diseño incluido. Taller en Sueca a 12 minutos y entrega en mano.',
    intro: 'Sollana está a doce minutos del taller, camino de València. Trofeos, medallas, merchandising y piezas a medida para el club, la falla, las fiestas y las empresas del polígono, diseñados desde cero y entregados en mano.',
    imagen: { src: 'public/img/trofeu-puchades.webp', w: 1536, h: 2048, alt: 'Trofeos con busto dorado y plateado impresos en 3D sobre un campo de fútbol', pie: 'Trofeu Antonio Puchades · SD Sueca' },
    que: `
<p>Para el club de fútbol y los torneos de Sollana, <a href="/trofeos-personalizados/">trofeos</a> con el escudo en relieve y <a href="/medallas-personalizadas/">medallas</a> para la cantera; para la falla, premios de concursos y <a href="/llaveros-personalizados/">pines y llaveros</a>; para la carrera de las fiestas, medallas finisher.</p>
<p>Para las empresas del polígono, <a href="/trofeos-empresas/">premios internos y detalles con el logotipo</a>, placas de reconocimiento y <a href="/impresion-3d-personalizada/">prototipos y piezas a medida</a>.</p>`,
    entrega: `
<p>Doce minutos por la A-38 en dirección València. Entregamos en mano en Sollana sin coste, o recoges en el taller de Sueca con cita previa.</p>`,
    casos: ['trofeu-antonio-puchades', 'placas-debutante-ad-esperanza', 'medallas-ajedrez-sueca'],
    faq: [
      { p: '¿Trabajáis con empresas de Sollana?', r: '<p>Sí: premios y reconocimientos con el logotipo en volumen, detalles para eventos y piezas o prototipos a medida. Mira <a href="/trofeos-empresas/">trofeos para empresas</a>.</p>' },
      { p: '¿Cuánto tarda un pedido para Sollana?', r: '<p>Diseño en menos de una semana y producción en días. Entrega en mano en Sollana.</p>' },
    ],
  },
  almussafes: {
    h1: ['Impresión 3D', 'en Almussafes'],
    title: 'Impresión 3D en Almussafes | PIQ3D',
    description: 'Impresión 3D en Almussafes: trofeos, medallas, placas, prototipos y piezas a medida con diseño incluido. Taller a 17 minutos y entrega en mano.',
    intro: 'Almussafes es el pueblo industrial de la comarca y está a diecisiete minutos del taller. Trofeos y medallas para los clubes y la falla, premios y prototipos para las empresas del polígono, y piezas a medida, diseñados desde cero y entregados en mano.',
    imagen: { src: 'public/img/ad-esperanza.webp', w: 1205, h: 1600, alt: 'Placas personalizadas impresas en 3D con el escudo de un club y el nombre de cada jugador', pie: 'Placas de debutante · AD Esperanza' },
    que: `
<p>Para las <strong>empresas</strong> del polígono Juan Carlos I y del entorno de la fábrica, <a href="/trofeos-empresas/">premios internos, reconocimientos y detalles</a> con el logotipo en volumen, y <a href="/impresion-3d-personalizada/">prototipos, útiles y piezas a medida</a> con el diseño incluido y entrega en días.</p>
<p>Para los <strong>clubes y la falla</strong>, <a href="/trofeos-personalizados/">trofeos</a> con el escudo, <a href="/medallas-personalizadas/">medallas</a> para la cantera y la carrera popular, premios de concursos y <a href="/llaveros-personalizados/">pines y llaveros</a> para la comisión. Para colegios y AMPAs, medallas de olimpiadas escolares a precio de tirada.</p>`,
    entrega: `
<p>Diecisiete minutos por la A-38 en dirección València. Entregamos en mano en Almussafes sin coste de transporte, en la empresa, el pabellón o el casal, o recoges en el taller de Sueca con cita previa.</p>`,
    casos: ['placas-debutante-ad-esperanza', 'trofeu-antonio-puchades', '10k-sense-limits'],
    faq: [
      { p: '¿Hacéis prototipos y piezas técnicas para empresas de Almussafes?', r: '<p>Sí. Modelamos a partir de planos, archivos o descripción, imprimimos en PLA y entregamos en días. Para materiales técnicos concretos, consúltanos.</p>' },
      { p: '¿Cuánto tarda un pedido para Almussafes?', r: '<p>Diseño en menos de una semana y producción en días. Entrega en mano en Almussafes.</p>' },
    ],
  },
  alzira: {
    h1: ['Impresión 3D', 'en Alzira'],
    title: 'Impresión 3D en Alzira | PIQ3D',
    description: 'Impresión 3D en Alzira: trofeos, medallas, placas, llaveros, soportes QR y piezas a medida con diseño incluido. A 20 minutos, entrega en mano.',
    intro: 'Alzira es la capital de la Ribera Alta y está a veinte minutos del taller. Trofeos y medallas para sus clubes y carreras, premios para las fallas, soportes QR para la hostelería, merchandising y piezas a medida, diseñados desde cero y entregados en mano.',
    imagen: { src: 'public/img/fibravalencia.webp', w: 1600, h: 1600, alt: 'Trofeo de carrera popular impreso en 3D con columna retorcida blanca y base magenta', pie: 'Trofeo de volta a peu · columna retorcida' },
    que: `
<p>Alzira tiene decenas de clubes (fútbol, balonmano, baloncesto, atletismo, pilota, natación), carreras populares y de montaña por la Murta, unas fallas grandes y un centro comercial y hostelero muy activo. Para todo eso fabricamos <a href="/trofeos-personalizados/">trofeos</a> con el escudo en relieve, <a href="/medallas-personalizadas/">medallas</a> por tiradas de cientos, premios de concursos falleros, <a href="/llaveros-personalizados/">llaveros, imanes y pines</a> para comisiones y comercios, y <a href="/soportes-qr-nfc-restaurantes/">soportes de carta QR y NFC</a> para bares y restaurantes.</p>
<p>Para las empresas y el polígono, <a href="/trofeos-empresas/">premios y reconocimientos</a> y <a href="/impresion-3d-personalizada/">prototipos y piezas a medida</a>. Para colegios e institutos, medallas y trofeos de olimpiadas escolares.</p>`,
    entrega: `
<p>Veinte minutos desde Sueca por Albalat y Polinyà. Entregamos en mano en Alzira sin coste de transporte, en el pabellón, el campo, el casal o el local, o quedamos en el taller de Sueca con cita previa. Para la Ribera Alta (Algemesí, Carcaixent, Alginet) también entregamos en mano.</p>`,
    casos: ['volta-a-peu-fibravalencia', 'trofeu-antonio-puchades', 'medallas-ajedrez-sueca'],
    faq: [
      { p: '¿Entregáis en Alzira?', r: '<p>Sí, en mano y sin coste. Estamos a veinte minutos. También en Algemesí, Carcaixent y el resto de la Ribera Alta.</p>' },
      { p: '¿Hacéis medallas para carreras de Alzira con cientos de participantes?', r: '<p>Sí. Tiradas de 500 medallas en una sola pieza multicolor, con cinta, en pocos días gracias a la granja de impresión.</p>' },
      { p: '¿Trabajáis con las fallas de Alzira?', r: '<p>Sí: premios de concursos, playbacks y presentaciones con el escudo de la comisión en relieve, y pines y llaveros para los falleros.</p>' },
    ],
  },
};

/* ---------- de pueblo a página ---------- */

export const PUEBLOS_PAG = PUEBLOS.map((pueblo) => {
  const d = DATOS[pueblo.slug];
  if (!d) throw new Error(`Faltan los datos de ${pueblo.slug}`);
  const vecinos = pueblo.vecinos.map((v) => ({ url: url(v), texto: `Impresión 3D en ${P[v].nombre}` }));
  const esAlbalat = pueblo.slug === 'albalat-de-la-ribera';
  return {
    ruta: `impresion-3d-${pueblo.slug}`,
    tipo: 'zona',
    etiqueta: esAlbalat ? 'Impresión 3D personalizada' : 'Impresión 3D',
    title: d.title,
    description: d.description,
    h1: d.h1,
    migaActual: pueblo.nombre,
    migas: [{ nombre: 'Impresión 3D personalizada', url: '/impresion-3d-personalizada/' }],
    intro: d.intro,
    ogImagen: d.imagen.src,
    ogTitulo: `Impresión 3D en ${pueblo.nombre}`,
    servicio: { nombre: `Impresión 3D personalizada en ${pueblo.nombre}`, tipo: 'Diseño e impresión 3D' },
    areaServed: [pueblo.nombre],
    bloques: [
      { tipo: 'texto', h2: esAlbalat ? 'Qué imprimimos para Albalat' : `Qué imprimimos para ${pueblo.nombre}`, html: d.que, figura: d.imagen },
      { tipo: 'casos', h2: pueblo.slug === 'sueca' ? 'Trabajos hechos en Sueca' : pueblo.slug === 'cullera' ? 'Trabajos en Cullera y alrededores' : `Trabajos cerca de ${pueblo.nombre}`, casos: d.casos, intro: pueblo.km ? `Hechos en Sueca y Cullera, a ${pueblo.km} km de ${pueblo.nombre}. En cada uno explicamos el encargo, el diseño y la producción.` : 'Tres de los trabajos documentados para clubes de Sueca.' },
      { tipo: 'texto', h2: pueblo.km ? `Entrega en mano en ${pueblo.nombre}` : 'Recogida en el taller', html: d.entrega },
      { tipo: 'texto', h2: 'Todo lo que fabricamos', html: SERVICIOS_HTML },
      { tipo: 'pasos', h2: 'Cómo trabajamos' },
      { tipo: 'faq', faq: [...d.faq, ...FAQ_COMUN(pueblo.nombre)] },
      {
        tipo: 'relacionados',
        h2: 'Pueblos vecinos y servicios',
        enlaces: [...vecinos, { url: '/impresion-3d-personalizada/', texto: 'Impresión 3D personalizada: todos los pueblos' }, { url: '/trofeos-personalizados-ribera-baixa/', texto: 'Trofeos y medallas en la Ribera Baixa' }, ...SERVICIOS.slice(0, 2).map((s) => ({ url: `/${s.ruta}/`, texto: s.nombre }))],
      },
    ],
    cta: { titulo: `¿Eres de ${pueblo.nombre}?`, texto: pueblo.km ? `Estamos a ${pueblo.min} minutos. Escríbenos por WhatsApp con lo que necesitas y te pasamos presupuesto con el diseño incluido; lo entregamos en mano.` : 'Escríbenos por WhatsApp y, si quieres, pásate por el taller a ver piezas reales. Diseño incluido en el presupuesto.' },
  };
});
