// ============================================================
//  Páginas de zona. Cada una tiene contenido propio: trabajos de
//  la zona con enlace a su caso, localidades, eventos típicos,
//  forma de entrega y FAQ distinta. La Safor aún no tiene trabajos
//  publicados y lo dice: enseña los más cercanos (Cullera, Sueca).
// ============================================================

import { PUEBLOS, ZONAS } from './_datos.mjs';
const PUEBLOS_ENLACES = PUEBLOS.map((p) => ({ url: `/impresion-3d-${p.slug}/`, texto: `Impresión 3D en ${p.nombre}` }));

const [VALENCIA, RIBERA, SAFOR] = ZONAS;
const towns = (z) => `<ul class="towns">${z.localidades.map((l) => `<li>${l}</li>`).join('')}</ul>`;
const MIGAS = [{ nombre: 'Trofeos personalizados', url: '/trofeos-personalizados/' }];
const SERVICIOS = [
  { url: '/trofeos-personalizados/', texto: 'Trofeos personalizados impresos en 3D' },
  { url: '/medallas-personalizadas/', texto: 'Medallas personalizadas impresas en 3D' },
];

export const ZONAS_PAG = [
  // ----------------------------------------------------------
  {
    ruta: VALENCIA.ruta,
    tipo: 'zona',
    etiqueta: 'Zona',
    title: 'Trofeos y medallas personalizados en Valencia | PIQ3D',
    description: 'Trofeos y medallas impresos en 3D para clubes y carreras de València y l’Horta Sud: Alaquàs, Aldaia, Paterna, Torrent. Diseño incluido y entrega en mano.',
    h1: ['Trofeos y medallas', 'personalizados en València', 'y l’Horta Sud'],
    migaActual: 'València y l’Horta Sud',
    migas: MIGAS,
    intro: 'Diseñamos e imprimimos en 3D trofeos y medallas para clubes, carreras y eventos de València ciudad y de l’Horta Sud. El taller está en Sueca, a media hora por la V-31, y entregamos en mano.',
    ogImagen: 'public/img/la-canyada.webp',
    ogTitulo: 'Trofeos y medallas en València y l’Horta Sud',
    servicio: { nombre: 'Trofeos y medallas personalizados en València y l’Horta Sud', tipo: 'Diseño y fabricación de trofeos y medallas' },
    areaServed: VALENCIA.localidades,
    bloques: [
      {
        tipo: 'casos',
        h2: 'Trabajos en València y l’Horta Sud',
        intro: 'Tres encargos de la zona, con su proceso documentado: una volta a peu en Alaquàs, una carrera inclusiva en Aldaia y una carrera de barrio en Paterna.',
        casos: ['volta-a-peu-fibravalencia', '10k-sense-limits', 'volta-a-peu-la-canyada'],
        html: '<p>En València ciudad hemos hecho también las medallas del torneo <strong>Valencia Xiques 3x3</strong>, con anverso y reverso distintos; están en la <a href="/galeria/#medallas">galería</a>.</p>',
      },
      {
        tipo: 'texto',
        h2: 'Localidades que cubrimos',
        html: `
<p>València ciudad y toda l’Horta Sud, más los municipios del área metropolitana que nos pillan de camino desde Sueca:</p>
${towns(VALENCIA)}
<p>Si tu localidad no está en la lista pero está cerca, escríbenos igualmente: el reparto se organiza por rutas y casi siempre encaja.</p>`,
      },
      {
        tipo: 'texto',
        h2: 'Qué se pide por aquí',
        figura: { src: 'public/img/la-canyada.webp', w: 1600, h: 2133, alt: 'Trofeo de la Volta a Peu La Canyada, carrera popular de Paterna, impreso en 3D', pie: 'Volta a Peu La Canyada · Paterna' },
        html: `
<p>L’Horta Sud es tierra de <strong>voltes a peu</strong>: casi cada pueblo tiene la suya, con categorías locales y generales, masculinas y femeninas, y necesita trofeos que se distingan entre sí y medallas finisher para cientos de corredores. Es exactamente el pedido de la <a href="/trabajos/volta-a-peu-fibravalencia/">Volta a Peu FibraValencia de Alaquàs</a> y de la <a href="/trabajos/10k-sense-limits/">10K Sense Límits de Aldaia</a>.</p>
<p>En València ciudad, lo habitual son <strong>torneos de cantera y 3x3</strong> de fútbol, fútbol sala y baloncesto, carreras de barrio como la de <a href="/trabajos/volta-a-peu-la-canyada/">La Canyada</a>, y eventos de empresa que quieren un premio con el logotipo en volumen.</p>
<p>Y como en toda la provincia, <strong>fallas</strong>: premios para concursos de paellas, playbacks y presentaciones con el escudo de la comisión en relieve.</p>`,
      },
      {
        tipo: 'texto',
        h2: 'Entrega en mano desde Sueca',
        html: `
<p>Sueca está a 35 km de València por la V-31 y la A-38, y a poco más de media hora de Aldaia, Alaquàs o Torrent por la V-30. Los pedidos de la zona los entregamos en mano, normalmente en el lugar del evento o donde nos digas, sin coste de transporte dentro del área que cubrimos.</p>
<p>Si prefieres recogerlo, el taller está en Sueca con cita previa (no tenemos tienda abierta al público). Y si tu evento es lejos de nuestra ruta, lo enviamos por mensajería en 24-48 horas.</p>
<h3>Plazos para València y l’Horta Sud</h3>
<ul>
<li>Diseño: menos de una semana, con tus revisiones.</li>
<li>Producción: de días a dos semanas según cantidad; la granja de impresión trabaja en paralelo.</li>
<li>Entrega: en mano, la semana del evento.</li>
</ul>`,
      },
      { tipo: 'pasos', h2: 'Cómo trabajamos' },
      {
        tipo: 'faq',
        faq: [
          { p: '¿Tenéis tienda en València?', r: '<p>No. El taller está en Sueca y no tiene tienda abierta al público; trabajamos con cita previa. Para València y l’Horta Sud entregamos en mano, así que no necesitas desplazarte.</p>' },
          { p: '¿Cuánto tarda un pedido para Aldaia, Torrent o Paterna?', r: '<p>Lo mismo que para Sueca: diseño en menos de una semana y producción en días. La entrega en mano se organiza la semana del evento.</p>' },
          { p: '¿Hacéis medallas para voltes a peu con cientos de participantes?', r: '<p>Sí. La 10K Sense Límits de Aldaia fueron 500 medallas en una sola pieza de cuatro colores. Mira la página de <a href="/medallas-personalizadas/">medallas personalizadas</a>.</p>' },
          { p: '¿Podemos ver muestras antes de encargar?', r: '<p>Sí. Te enseñamos renders del diseño y, si la tirada lo merece, un prototipo físico que te llevamos o te enviamos antes de producir.</p>' },
          { p: '¿Trabajáis con colegios y AMPAs?', r: '<p>Sí: olimpiadas escolares, carreras solidarias y fin de curso. Tiradas de cientos de medallas a precio ajustado.</p>' },
        ],
      },
      {
        tipo: 'relacionados',
        h2: 'Servicios y zonas vecinas',
        enlaces: [...SERVICIOS, { url: '/trofeos-carreras-populares/', texto: 'Trofeos y medallas para carreras populares' }, { url: '/impresion-3d-personalizada/', texto: 'Impresión 3D personalizada' }, { url: `/${RIBERA.ruta}/`, texto: 'Trofeos y medallas en la Ribera Baixa' }, { url: `/${SAFOR.ruta}/`, texto: 'Trofeos y medallas en la Safor' }, { url: '/trabajos/', texto: 'Todos los trabajos' }],
      },
    ],
    cta: { titulo: '¿Tu evento es en València?', texto: 'Cuéntanos qué celebras, cuántas piezas necesitas y para cuándo. Te pasamos presupuesto con el diseño incluido y entregamos en mano.' },
  },
  // ----------------------------------------------------------
  {
    ruta: RIBERA.ruta,
    tipo: 'zona',
    etiqueta: 'Zona',
    title: 'Trofeos y medallas en Sueca y Cullera, Ribera Baixa | PIQ3D',
    description: 'Taller de impresión 3D en Sueca: trofeos y medallas para FS Sueca, SD Sueca, CH Sueca, el Open de ajedrez y Cullera. Recogida o entrega en mano.',
    h1: ['Trofeos y medallas', 'personalizados en', 'la Ribera Baixa'],
    migaActual: 'Ribera Baixa',
    migas: MIGAS,
    intro: 'Somos de Sueca. Aquí está el taller y aquí están la mayoría de nuestros clientes: clubes, comisiones falleras, carreras, el ayuntamiento y restaurantes de Sueca, Cullera y el resto de la comarca.',
    ogImagen: 'public/img/futsal-sueca.webp',
    ogTitulo: 'Trofeos y medallas en Sueca y la Ribera Baixa',
    servicio: { nombre: 'Trofeos y medallas personalizados en la Ribera Baixa', tipo: 'Diseño y fabricación de trofeos y medallas' },
    areaServed: RIBERA.localidades,
    bloques: [
      {
        tipo: 'casos',
        h2: 'Trabajos en Sueca y Cullera',
        intro: 'Los clubes de Sueca son clientes habituales: fútbol sala, fútbol, balonmano y ajedrez. Y en Cullera, una pieza solidaria con la Valencia CF Academia.',
        casos: ['torneig-ciutat-de-sueca', 'trofeu-antonio-puchades', 'trofeu-pepe-soler', 'medallas-ajedrez-sueca', 'juntos-por-super-ivan'],
        html: `
<p>Además de los casos documentados, en Sueca hemos hecho los trofeos del <strong>Torneig F8</strong>, los <strong>50 anys de la PBRB</strong>, el <strong>Sueca Arròs</strong> de la SDS, los premios de la <strong>Falla Sucro</strong> y de un <strong>concurso de paellas</strong> de fallas, un reconocimiento para los participantes del <strong>Luis Vives</strong> y una condecoración. Todo está en la <a href="/galeria/">galería</a>.</p>
<p>Y para los <strong>restaurantes de Sueca</strong> fabricamos soportes de carta QR y NFC con la forma de su logotipo: Coco Beach, Ca Quintín, El Niu y Sushi Room ya los tienen en sus mesas.</p>`,
      },
      {
        tipo: 'texto',
        h2: 'Localidades que cubrimos',
        html: `
<p>Toda la Ribera Baixa, con Sueca y Cullera a la cabeza, y las pedanías de la costa:</p>
${towns(RIBERA)}
<p>Para la Ribera Alta (Alzira, Algemesí, Carcaixent) también entregamos en mano: están a veinte minutos.</p>`,
      },
      {
        tipo: 'texto',
        h2: 'Qué se pide por aquí',
        figura: { src: 'public/img/trofeu-puchades.webp', w: 1536, h: 2048, alt: 'Trofeu Antonio Puchades de la SD Sueca sobre el césped del campo, impreso en 3D', pie: 'Trofeu Antonio Puchades · SD Sueca' },
        html: `
<p>En Sueca el calendario lo marcan los clubes: el <a href="/trabajos/torneig-ciutat-de-sueca/">Torneig Ciutat de Sueca</a> de fútbol sala en pretemporada, el <a href="/trabajos/trofeu-antonio-puchades/">Trofeu Antonio Puchades</a> de la SD Sueca, el <a href="/trabajos/trofeu-pepe-soler/">Trofeu Pepe Soler</a> de balonmano y el <a href="/trabajos/medallas-ajedrez-sueca/">Open Internacional de ajedrez</a>. Cada uno repite cada año, y cada año actualizamos el archivo con la nueva fecha sin volver a cobrar el diseño.</p>
<p>Luego están las <strong>fallas</strong> de Sueca y Cullera, con concursos de paellas, playbacks y presentaciones que necesitan premios con el escudo de la comisión; la <strong>Festa de l’Arròs</strong>; las carreras populares de la comarca; y los <strong>restaurantes</strong> de la playa y del pueblo, que piden soportes de carta QR con su logotipo.</p>`,
      },
      {
        tipo: 'texto',
        h2: 'Recogida en el taller o entrega en mano',
        html: `
<p>El taller está en Sueca. No tenemos tienda abierta al público, pero puedes venir a recoger tu pedido o a ver un prototipo con cita previa: escríbenos por WhatsApp y quedamos.</p>
<p>En Sueca, Cullera, el Mareny, el Perelló, Sollana y Almussafes entregamos en mano sin coste, normalmente en el pabellón, el campo o el local del evento. Al resto de la comarca y de la Ribera Alta, también en mano si nos cuadra la ruta, o por mensajería en 24 horas.</p>
<h3>Plazos en la Ribera Baixa</h3>
<ul>
<li>Diseño: menos de una semana.</li>
<li>Producción: de días a dos semanas según cantidad.</li>
<li>Entrega: en mano, cuando te venga bien; estamos al lado.</li>
</ul>`,
      },
      { tipo: 'pasos', h2: 'Cómo trabajamos' },
      {
        tipo: 'faq',
        faq: [
          { p: '¿Puedo pasar por el taller a ver los trofeos?', r: '<p>Sí, con cita previa. No tenemos tienda, pero te enseñamos piezas reales y prototipos. Escríbenos por WhatsApp y quedamos en Sueca.</p>' },
          { p: '¿Hacéis los trofeos de mi club de Sueca cada año?', r: '<p>Es lo habitual con el FS Sueca, la SD Sueca, el CH Sueca o el Club d’Escacs: el diseño queda guardado y cada temporada solo cambiamos el año o la categoría.</p>' },
          { p: '¿Trabajáis con las fallas?', r: '<p>Sí. Premios para concursos de paellas, playbacks y presentaciones con el escudo de la comisión en relieve, y pines y llaveros falleros para la comisión.</p>' },
          { p: '¿Cuánto tarda un pedido en Cullera?', r: '<p>Lo mismo que en Sueca: diseño en menos de una semana y producción en días. Entregamos en mano en Cullera, a diez minutos.</p>' },
          { p: '¿Hacéis soportes de carta QR para restaurantes?', r: '<p>Sí, con la forma del logotipo del restaurante y chip NFC opcional. Ya los tienen Coco Beach, Ca Quintín, El Niu y Sushi Room, en Sueca. Pídenos presupuesto por WhatsApp.</p>' },
        ],
      },
      { tipo: 'relacionados', h2: 'Impresión 3D pueblo a pueblo', enlaces: PUEBLOS_ENLACES },
      {
        tipo: 'relacionados',
        h2: 'Servicios y zonas vecinas',
        enlaces: [...SERVICIOS, { url: '/impresion-3d-personalizada/', texto: 'Impresión 3D personalizada' }, { url: '/trofeos-fallas/', texto: 'Trofeos y premios para fallas' }, { url: `/${VALENCIA.ruta}/`, texto: 'Trofeos y medallas en València y l’Horta Sud' }, { url: `/${SAFOR.ruta}/`, texto: 'Trofeos y medallas en la Safor' }, { url: '/trabajos/', texto: 'Todos los trabajos' }],
      },
    ],
    cta: { titulo: '¿Eres de Sueca o de Cullera?', texto: 'Entonces somos vecinos. Escríbenos por WhatsApp, cuéntanos el evento y, si quieres, pásate por el taller a ver piezas reales.' },
  },
  // ----------------------------------------------------------
  {
    ruta: SAFOR.ruta,
    tipo: 'zona',
    etiqueta: 'Zona',
    title: 'Trofeos y medallas personalizados en la Safor | PIQ3D',
    description: 'Trofeos y medallas impresos en 3D para clubes, carreras y fallas de Gandia, Oliva, Tavernes y toda la Safor. Taller a media hora y entrega en mano.',
    h1: ['Trofeos y medallas', 'personalizados en la Safor'],
    migaActual: 'La Safor',
    migas: MIGAS,
    intro: 'Gandia, Oliva, Tavernes de la Valldigna y el resto de la Safor están a media hora de nuestro taller de Sueca. Diseñamos e imprimimos en 3D trofeos y medallas para clubes, carreras, fallas y empresas de la comarca, y los entregamos en mano.',
    ogImagen: 'public/img/logo-trofeos.webp',
    ogTitulo: 'Trofeos y medallas en la Safor',
    servicio: { nombre: 'Trofeos y medallas personalizados en la Safor', tipo: 'Diseño y fabricación de trofeos y medallas' },
    areaServed: SAFOR.localidades,
    bloques: [
      {
        tipo: 'texto',
        h2: 'Un taller de impresión 3D a media hora de Gandia',
        figura: { src: 'public/img/logo-trofeos.webp', w: 1600, h: 1765, alt: 'Logotipo de PIQ3D impreso en 3D con trofeos de fondo en el taller de Sueca', pie: 'El taller, en Sueca' },
        html: `
<p>La Safor tiene clubes de fútbol, pilota, natación, pádel y atletismo, carreras populares en casi todos los pueblos y una vida fallera muy activa en Gandia y Oliva. Todos necesitan trofeos y medallas, y casi todos acaban comprando piezas de catálogo a un proveedor lejano.</p>
<p>Nosotros proponemos otra cosa: una pieza propia, diseñada desde cero con el escudo o el logotipo en relieve, impresa en 3D en Sueca y entregada en mano en tu pueblo. El diseño va incluido, el archivo se guarda para el año siguiente y el prototipo lo tienes en la mano antes de producir.</p>
<p><strong>Todavía no hemos publicado un trabajo hecho en la Safor.</strong> Los más cercanos están en Cullera y Sueca, a quince minutos de Tavernes, y los enseñamos abajo para que veas el nivel de acabado. Nos encantaría que el primero de la comarca fuera el tuyo.</p>`,
      },
      {
        tipo: 'casos',
        h2: 'Los trabajos más cercanos',
        intro: 'Tres piezas hechas en la Ribera Baixa, la comarca vecina: un trofeo solidario en Cullera y dos encargos de clubes de Sueca.',
        casos: ['juntos-por-super-ivan', 'torneig-ciutat-de-sueca', 'medallas-ajedrez-sueca'],
      },
      {
        tipo: 'texto',
        h2: 'Localidades que cubrimos',
        html: `
<p>Toda la Safor, de la Valldigna a Oliva:</p>
${towns(SAFOR)}
<p>Gandia está a 35 km de Sueca por la N-332 o la AP-7; Tavernes de la Valldigna, a 15. Entregamos en mano en toda la comarca.</p>`,
      },
      {
        tipo: 'texto',
        h2: 'Qué podemos hacer para la Safor',
        html: `
<h3>Carreras populares y trails</h3>
<p>Medallas finisher para todos los participantes y trofeos por categoría con el perfil del recorrido, el castillo, la playa o el símbolo de la carrera en relieve. Tiradas de cientos de unidades sin problema: mira cómo lo hicimos para la <a href="/trabajos/10k-sense-limits/">10K Sense Límits</a>.</p>
<h3>Clubes de fútbol, pilota, natación y pádel</h3>
<p>Trofeos de campeón y subcampeón con el escudo del club, premios individuales y placas de fin de temporada que se repiten cada año con el archivo guardado, como el <a href="/trabajos/trofeu-antonio-puchades/">Trofeu Antonio Puchades</a> de la SD Sueca.</p>
<h3>Fallas de Gandia y Oliva</h3>
<p>Premios de concursos de paellas, playbacks y presentaciones con el escudo de la comisión, y pines y llaveros para los falleros.</p>
<h3>Empresas y restaurantes</h3>
<p>Premios internos con el logotipo en volumen y soportes de carta QR y NFC con la forma de tu marca para la mesa.</p>`,
      },
      {
        tipo: 'texto',
        h2: 'Entrega en mano en Gandia, Oliva y Tavernes',
        html: `
<p>Los pedidos de la Safor los entregamos en mano, en el lugar del evento o donde nos digas, sin coste de transporte. Si prefieres, también puedes recogerlos en el taller de Sueca con cita previa, o te los enviamos por mensajería en 24 horas.</p>
<h3>Plazos para la Safor</h3>
<ul>
<li>Diseño: menos de una semana, con tus revisiones.</li>
<li>Producción: de días a dos semanas según cantidad.</li>
<li>Entrega: en mano, la semana del evento.</li>
</ul>`,
      },
      { tipo: 'pasos', h2: 'Cómo trabajamos' },
      {
        tipo: 'faq',
        faq: [
          { p: '¿Habéis trabajado ya en Gandia u Oliva?', r: '<p>Todavía no tenemos un trabajo publicado en la Safor. Los más cercanos son de Cullera y Sueca, a quince minutos de Tavernes. Si tu club o tu carrera quiere ser el primero, te lo ponemos fácil.</p>' },
          { p: '¿Entregáis en mano en la Safor?', r: '<p>Sí. Gandia está a media hora de Sueca por la N-332 o la AP-7. Entregamos en el lugar del evento sin coste de transporte.</p>' },
          { p: '¿Cuánto tarda un pedido para una carrera en Gandia?', r: '<p>Diseño en menos de una semana y producción en días. Para una carrera con cientos de medallas, pide con un mes de margen.</p>' },
          { p: '¿Hacéis trofeos de pilota valenciana?', r: '<p>Sí. Modelamos la pilota, el guante o el trinquet en volumen, con el nombre del club o del trofeo en relieve.</p>' },
          { p: '¿Podemos ver un prototipo antes de encargar?', r: '<p>Sí. Enviamos renders del diseño y, si la tirada lo merece, imprimimos un prototipo que te llevamos o te enviamos antes de producir.</p>' },
        ],
      },
      {
        tipo: 'relacionados',
        h2: 'Servicios y zonas vecinas',
        enlaces: [...SERVICIOS, { url: '/trofeos-fallas/', texto: 'Trofeos y premios para fallas' }, { url: '/impresion-3d-personalizada/', texto: 'Impresión 3D personalizada' }, { url: `/${RIBERA.ruta}/`, texto: 'Trofeos y medallas en la Ribera Baixa' }, { url: `/${VALENCIA.ruta}/`, texto: 'Trofeos y medallas en València y l’Horta Sud' }, { url: '/trabajos/', texto: 'Todos los trabajos' }],
      },
    ],
    cta: { titulo: '¿Tu evento es en la Safor?', texto: 'Cuéntanos qué celebras, cuántas piezas necesitas y para cuándo. Te pasamos presupuesto con el diseño incluido y lo entregamos en mano.' },
  },
];
