// ============================================================
//  Servicios de la fase B: placas, llaveros y merchandising,
//  soportes QR/NFC para restaurantes e impresión 3D personalizada
//  (la página madre de todas las páginas de pueblo).
// ============================================================

import { PUEBLOS } from './_datos.mjs';

const ZONAS_ENLACES = [
  { url: '/trofeos-personalizados-valencia/', texto: 'Trofeos y medallas en València y l’Horta Sud' },
  { url: '/trofeos-personalizados-ribera-baixa/', texto: 'Trofeos y medallas en la Ribera Baixa' },
  { url: '/trofeos-personalizados-la-safor/', texto: 'Trofeos y medallas en la Safor' },
];
const AREA = ['Sueca', 'València', 'Cullera', 'Alzira', 'Gandia', 'Aldaia', 'Torrent', 'Paterna', 'Albalat de la Ribera'];
const pueblosHtml = PUEBLOS.map((p) => `<li><a href="/impresion-3d-${p.slug}/">${p.nombre}</a></li>`).join('');

export const SERVICIOS_B_PAG = [
  // ----------------------------------------------------------
  {
    ruta: 'placas-personalizadas',
    tipo: 'servicio',
    etiqueta: 'Servicio',
    title: 'Placas personalizadas impresas en 3D | PIQ3D',
    description: 'Placas personalizadas y reconocimientos impresos en 3D con el escudo o el logotipo en relieve: debutantes, homenajes, jubilaciones y patrocinadores.',
    h1: ['Placas personalizadas', 'impresas en 3D'],
    migaActual: 'Placas personalizadas',
    intro: 'Placas de reconocimiento, de debutante, de homenaje o de patrocinador con el escudo y el texto formando parte de la pieza, en relieve y a color. Sin grabado láser ni pegatinas: la placa entera sale de la impresora.',
    ogImagen: 'public/img/ad-esperanza.webp',
    ogTitulo: 'Placas personalizadas impresas en 3D',
    servicio: { nombre: 'Placas personalizadas impresas en 3D', tipo: 'Diseño y fabricación de placas conmemorativas' },
    areaServed: AREA,
    bloques: [
      {
        tipo: 'texto',
        h2: 'Una placa que no se parece a ninguna otra',
        figura: { src: 'public/img/ad-esperanza.webp', w: 1205, h: 1600, alt: 'Placas de debutante impresas en 3D con el escudo de la AD Esperanza y el nombre de cada jugador', pie: 'Placas de debutante · AD Esperanza' },
        html: `
<p>Una placa tradicional es una lámina de metal o metacrilato con un texto grabado. Una placa impresa en 3D es un objeto: el escudo del club o el logotipo de la empresa en volumen, con sus colores, y el texto en relieve, en una sola pieza que se puede colgar, apoyar o llevar en la mano.</p>
<p>Es lo que hicimos para la <a href="/trabajos/placas-debutante-ad-esperanza/">AD Esperanza</a>: cuarenta placas, una por jugador, con el escudo en cinco colores y una pestaña con el nombre y la temporada.</p>
<h3>Tipos de placa que hacemos</h3>
<ul>
<li><strong>Debutantes y fin de temporada</strong> para clubes de fútbol base, fútbol sala, baloncesto o balonmano, con el nombre de cada jugador.</li>
<li><strong>Homenajes y jubilaciones</strong> con el logotipo de la entidad, el nombre y la fecha.</li>
<li><strong>Patrocinadores y colaboradores</strong> de una carrera, un torneo o unas fiestas.</li>
<li><strong>Ayuntamientos y asociaciones</strong>: reconocimientos, inauguraciones, aniversarios.</li>
<li><strong>Empresas</strong>: empleado del año, aniversarios, mejor equipo.</li>
</ul>`,
      },
      {
        tipo: 'texto',
        h2: 'Para quién y con qué formatos',
        html: `
<p>Las placas más pequeñas (5 a 9 cm) funcionan como insignia o detalle para muchas personas, como las de debutante. Las medianas (12 a 20 cm) se apoyan en una base o se cuelgan en pared. Las grandes (hasta 30 cm) sirven para un homenaje o para la sede de un club.</p>
<p>Todas admiten hasta cuatro colores en la misma pieza, textos distintos por unidad sin coste y acabados mate o metalizados. Si quieres combinarlas con <a href="/trofeos-personalizados/">trofeos</a> o <a href="/medallas-personalizadas/">medallas</a> del mismo evento, las diseñamos con el mismo lenguaje.</p>`,
      },
      { tipo: 'pasos', h2: 'Cómo trabajamos una placa', intro: 'Con una imagen del escudo o del logotipo y la lista de textos tenemos lo necesario para empezar.' },
      {
        tipo: 'texto',
        h2: 'Plazos, cantidades y precio',
        html: `
<p><strong>Plazos:</strong> diseño en menos de una semana; producción de una placa en uno o dos días y de una tirada de decenas en menos de una semana. <strong>Cantidades:</strong> sin mínimo. <strong>Precio:</strong> depende del tamaño, los colores y la cantidad; el diseño va incluido y las variantes de texto no se cobran. Envíanos el logotipo y la lista de nombres y te pasamos presupuesto en el día.</p>`,
      },
      { tipo: 'casos', h2: 'Placas y reconocimientos que ya hemos hecho', casos: ['placas-debutante-ad-esperanza', 'trofeu-antonio-puchades'], html: '<p>En la <a href="/galeria/">galería</a> hay más: el reconocimiento para los participantes del Luis Vives y una condecoración, ambos para Sueca.</p>' },
      {
        tipo: 'faq',
        faq: [
          { p: '¿Cuánto cuesta una placa personalizada?', r: '<p>Depende del tamaño, los colores y la cantidad. El diseño va incluido, así que una sola placa cuesta lo que cuesta imprimirla. Pide presupuesto con el logotipo y el texto.</p>' },
          { p: '¿Puedo poner un nombre distinto en cada placa?', r: '<p>Sí, sin coste. Nos pasas la lista y el archivo genera todas las variantes.</p>' },
          { p: '¿Se pueden colgar en la pared?', r: '<p>Sí. Diseñamos las medianas y grandes con un colgador trasero o con una base para apoyarlas, según prefieras.</p>' },
          { p: '¿Cuánto tarda?', r: '<p>Diseño en menos de una semana y producción en días. Una tirada de cuarenta placas, como la de la AD Esperanza, salió en menos de una semana.</p>' },
          { p: '¿Hacéis envíos?', r: '<p>Sí, a toda España. En la Ribera, l’Horta Sud y la Safor entregamos en mano.</p>' },
        ],
      },
      { tipo: 'relacionados', enlaces: [{ url: '/trofeos-personalizados/', texto: 'Trofeos personalizados' }, { url: '/medallas-personalizadas/', texto: 'Medallas personalizadas' }, { url: '/trofeos-clubes-deportivos/', texto: 'Trofeos para clubes deportivos' }, { url: '/trofeos-empresas/', texto: 'Trofeos y premios para empresas' }, ...ZONAS_ENLACES.slice(1, 2)] },
    ],
    cta: { titulo: '¿Hablamos de tus placas?', texto: 'Mándanos el logotipo, los textos y la cantidad y te pasamos presupuesto con el diseño incluido.' },
  },
  // ----------------------------------------------------------
  {
    ruta: 'llaveros-personalizados',
    tipo: 'servicio',
    etiqueta: 'Servicio',
    title: 'Llaveros personalizados y merchandising 3D | PIQ3D',
    description: 'Llaveros, imanes, pines y figuras personalizados impresos en 3D con el escudo de tu club, tu falla o tu comercio. Diseño incluido, desde una unidad.',
    h1: ['Llaveros personalizados', 'y merchandising en 3D'],
    migaActual: 'Llaveros y merchandising',
    intro: 'Llaveros, imanes, pines y figuras con tu escudo o tu logotipo en relieve y a color. Merchandising para clubes, comisiones falleras, comercios, bodas y eventos, impreso en 3D en Sueca con el diseño incluido.',
    ogImagen: 'public/img/llaveros-club.webp',
    ogTitulo: 'Llaveros personalizados y merchandising 3D',
    servicio: { nombre: 'Llaveros y merchandising personalizados impresos en 3D', tipo: 'Diseño y fabricación de merchandising' },
    areaServed: AREA,
    bloques: [
      {
        tipo: 'texto',
        h2: 'Merchandising con tu escudo, pieza a pieza',
        figura: { src: 'public/img/llaveros-club.webp', w: 800, h: 800, alt: 'Llaveros personalizados impresos en 3D con el escudo de un club de fútbol', pie: 'Llaveros de club' },
        html: `
<p>Un llavero impreso en 3D no es un llavero de catálogo con una pegatina: es el escudo de tu club o el logotipo de tu comercio en volumen, con sus colores, en una pieza ligera y resistente. Lo mismo con los imanes, los pines y las figuras.</p>
<h3>Qué hacemos</h3>
<ul>
<li><strong>Llaveros</strong> con escudo, logotipo, nombre o número de jugador.</li>
<li><strong>Imanes</strong> de nevera para comercios, fiestas, bodas y comuniones.</li>
<li><strong>Pines falleros</strong> con el escudo de la comisión y el año.</li>
<li><strong>Figuras</strong> y mascotas a pequeña escala.</li>
<li><strong>Cartas de llaveros</strong>: expositores para vender o regalar en el club o la tienda.</li>
</ul>
<p>Mira ejemplos en la <a href="/galeria/#merchandising">galería</a>: llaveros de club, figuritas, pines falleros, imanes y la carta de llaveros.</p>`,
      },
      {
        tipo: 'texto',
        h2: 'Para clubes, fallas, comercios y eventos',
        html: `
<p><strong>Clubes deportivos:</strong> llaveros para la plantilla y la afición, imanes para socios, figuras con la mascota. A juego con los <a href="/trofeos-personalizados/">trofeos</a> y las <a href="/medallas-personalizadas/">medallas</a> de fin de temporada.</p>
<p><strong>Comisiones falleras:</strong> el pin del año con el escudo de la falla, llaveros para la comisión y detalles para la presentación. Más en <a href="/trofeos-fallas/">trofeos y premios para fallas</a>.</p>
<p><strong>Comercios y restaurantes:</strong> imanes y llaveros con el logotipo para regalar a clientes, junto con los <a href="/soportes-qr-nfc-restaurantes/">soportes de carta QR</a>.</p>
<p><strong>Bodas, comuniones y cumpleaños:</strong> detalles para invitados con nombre y fecha.</p>
<p><strong>Empresas:</strong> merchandising para ferias y eventos con el logotipo en volumen. Más en <a href="/trofeos-empresas/">empresas</a>.</p>`,
      },
      { tipo: 'pasos', h2: 'Cómo trabajamos el merchandising', intro: 'Con el logotipo y la cantidad empezamos. El prototipo es una unidad real que puedes tener en la mano antes de la tirada.' },
      {
        tipo: 'texto',
        h2: 'Plazos, cantidades y precio',
        html: `
<p><strong>Plazos:</strong> diseño en menos de una semana; una tirada de cien llaveros sale en pocos días porque son piezas pequeñas y planas que caben muchas por bandeja. <strong>Cantidades:</strong> desde una unidad, aunque el precio por pieza baja mucho a partir de unas decenas. <strong>Precio:</strong> depende del tamaño, los colores y la cantidad; el diseño va incluido. Pide presupuesto con el logotipo y la cantidad.</p>`,
      },
      {
        tipo: 'faq',
        faq: [
          { p: '¿Cuánto cuesta un llavero personalizado?', r: '<p>Depende del tamaño, los colores y sobre todo de la cantidad. El diseño va incluido. A partir de unas decenas el precio por unidad baja mucho; pide presupuesto con el logotipo.</p>' },
          { p: '¿Hay pedido mínimo?', r: '<p>No. Podemos hacer un llavero o mil.</p>' },
          { p: '¿Los llaveros llevan anilla?', r: '<p>Sí, anilla metálica montada en el taller. Los imanes llevan imán pegado en la parte trasera.</p>' },
          { p: '¿Puedo poner el nombre o el número de cada persona?', r: '<p>Sí, sin coste por variante. Nos pasas la lista y el archivo genera todas las piezas.</p>' },
          { p: '¿Cuánto tarda?', r: '<p>Diseño en menos de una semana y producción en días. Para fallas o fin de temporada, pide con tres semanas de margen.</p>' },
        ],
      },
      { tipo: 'relacionados', enlaces: [{ url: '/trofeos-personalizados/', texto: 'Trofeos personalizados' }, { url: '/trofeos-fallas/', texto: 'Trofeos y premios para fallas' }, { url: '/soportes-qr-nfc-restaurantes/', texto: 'Soportes QR y NFC para restaurantes' }, { url: '/impresion-3d-personalizada/', texto: 'Impresión 3D personalizada' }, ...ZONAS_ENLACES.slice(1, 2)] },
    ],
    cta: { titulo: '¿Hablamos de tu merchandising?', texto: 'Mándanos el logotipo y la cantidad y te pasamos presupuesto con el diseño incluido.' },
  },
  // ----------------------------------------------------------
  {
    ruta: 'soportes-qr-nfc-restaurantes',
    tipo: 'servicio',
    etiqueta: 'Servicio',
    title: 'Soportes de carta QR y NFC para restaurantes | PIQ3D',
    description: 'Soportes de carta QR y NFC impresos en 3D con la forma del logotipo de tu restaurante. Resistentes para la mesa, con diseño incluido. Ya en cuatro locales.',
    h1: ['Soportes de carta QR y NFC', 'para restaurantes'],
    migaActual: 'Soportes QR y NFC',
    intro: 'Un soporte de mesa con la forma de tu logotipo, el código QR de la carta y, si quieres, un chip NFC para abrirla con solo acercar el móvil. Impreso en 3D, resistente al uso diario y con el diseño incluido. Ya están en las mesas de Coco Beach, Ca Quintín, El Niu y Sushi Room.',
    ogImagen: 'public/img/galeria/cocobeach.webp',
    ogTitulo: 'Soportes de carta QR y NFC para restaurantes',
    servicio: { nombre: 'Soportes de carta QR y NFC para restaurantes', tipo: 'Diseño y fabricación de soportes de carta QR' },
    areaServed: AREA,
    bloques: [
      {
        tipo: 'texto',
        h2: 'Tu logotipo en la mesa, con la carta dentro',
        figura: { src: 'public/img/galeria/cocobeach.webp', w: 835, h: 835, alt: 'Soporte de carta QR impreso en 3D con la forma del logotipo del restaurante Coco Beach', pie: 'Coco Beach · Sueca' },
        html: `
<p>El cartelito de plástico con un QR pegado no dice nada de tu local. Un soporte impreso en 3D con la forma de tu logotipo sí: es un objeto de tu marca en cada mesa, con el código QR integrado en relieve y, opcionalmente, un chip NFC que abre la carta con solo acercar el teléfono.</p>
<h3>Qué incluye</h3>
<ul>
<li>Diseño 3D a partir de tu logotipo, con la silueta adaptada para que se sostenga de pie.</li>
<li>Código QR integrado en la pieza, legible con cualquier móvil.</li>
<li>Chip NFC opcional, programado con la dirección de tu carta.</li>
<li>Hasta cuatro colores en la misma pieza, acabado mate o metalizado.</li>
<li>Prototipo antes de la serie para comprobar la lectura del QR y la estabilidad.</li>
</ul>`,
      },
      {
        tipo: 'texto',
        h2: 'Restaurantes que ya los tienen',
        figura: { src: 'public/img/galeria/sushiroom.webp', w: 1152, h: 1152, alt: 'Soporte de carta QR impreso en 3D con el logotipo de Sushi Room', pie: 'Sushi Room · Sueca' },
        html: `
<p>En Sueca ya los usan <strong>Coco Beach</strong>, <strong>Ca Quintín</strong>, <strong>El Niu</strong> y <strong>Sushi Room</strong>: cuatro locales con cuatro logotipos distintos y cuatro soportes que no se parecen entre sí. Los cuatro están en la <a href="/galeria/#cartas-qr">galería</a>.</p>
<h3>Para qué tipo de local</h3>
<p>Restaurantes, bares, cafeterías, chiringuitos de playa y hoteles. También para menús de eventos, cartas de vinos o la hoja de reseñas de Google: el QR puede apuntar a lo que quieras y el NFC se reprograma.</p>
<p>Trabajamos sobre todo con la hostelería de <a href="/impresion-3d-sueca/">Sueca</a>, <a href="/impresion-3d-cullera/">Cullera</a> y la playa, y enviamos a toda España.</p>`,
      },
      { tipo: 'pasos', h2: 'Cómo trabajamos un soporte QR', intro: 'Con tu logotipo en buena resolución y la dirección de la carta empezamos. El prototipo se prueba en una mesa real.' },
      {
        tipo: 'texto',
        h2: 'Plazos, cantidades y precio',
        html: `
<p><strong>Plazos:</strong> diseño y prototipo en una semana; una tirada para veinte o treinta mesas sale en pocos días. Si abres en temporada, pide con dos o tres semanas de margen. <strong>Cantidades:</strong> desde una unidad; lo normal es uno por mesa más algunos de reserva. <strong>Precio:</strong> depende del tamaño del soporte, de los colores, de si lleva NFC y de la cantidad; el diseño va incluido. Pide presupuesto con el logotipo y el número de mesas.</p>`,
      },
      {
        tipo: 'faq',
        faq: [
          { p: '¿Cuánto cuesta un soporte QR para restaurante?', r: '<p>Depende del tamaño, los colores, el chip NFC y el número de mesas. El diseño va incluido. Pide presupuesto con el logotipo y el número de unidades.</p>' },
          { p: '¿Cómo funciona el NFC?', r: '<p>Dentro del soporte va un chip que programamos con la dirección de tu carta. El cliente acerca el móvil y se abre sola, sin escanear nada. Se puede reprogramar si cambias la dirección.</p>' },
          { p: '¿Se puede cambiar la carta sin cambiar el soporte?', r: '<p>Sí, siempre que el QR y el NFC apunten a una dirección fija (tu web o un enlace que tú controles). Cambias la carta en la web y el soporte sigue valiendo.</p>' },
          { p: '¿Aguantan el uso diario y la limpieza?', r: '<p>Sí. Son piezas rígidas de PLA, se limpian con un paño húmedo y aguantan el día a día en mesa. Evita dejarlos al sol directo dentro de un coche en verano.</p>' },
          { p: '¿Cuánto tarda?', r: '<p>Diseño y prototipo en una semana; producción en días. Entrega en mano en Sueca, Cullera y la Ribera, o envío a toda España.</p>' },
        ],
      },
      { tipo: 'relacionados', enlaces: [{ url: '/llaveros-personalizados/', texto: 'Llaveros e imanes para tu local' }, { url: '/trofeos-empresas/', texto: 'Premios y detalles para empresas' }, { url: '/impresion-3d-personalizada/', texto: 'Impresión 3D personalizada' }, { url: '/impresion-3d-cullera/', texto: 'Impresión 3D en Cullera' }, { url: '/impresion-3d-sueca/', texto: 'Impresión 3D en Sueca' }] },
    ],
    cta: { titulo: '¿Tu logotipo en la mesa?', texto: 'Mándanos el logotipo y el número de mesas y te pasamos presupuesto con el diseño incluido. Si estás en Sueca o Cullera, te llevamos un prototipo.' },
  },
  // ----------------------------------------------------------
  {
    ruta: 'impresion-3d-personalizada',
    tipo: 'servicio',
    etiqueta: 'Servicio',
    title: 'Impresión 3D personalizada en Valencia y la Ribera | PIQ3D',
    description: 'Impresión 3D personalizada en Sueca para toda Valencia: piezas a medida, prototipos, repuestos, figuras, trofeos y merchandising. Diseño 3D incluido.',
    h1: ['Impresión 3D', 'personalizada'],
    migaActual: 'Impresión 3D personalizada',
    intro: 'Cualquier pieza que puedas describir, dibujar o fotografiar: la modelamos en 3D, te enseñamos el render y la imprimimos en nuestra granja de impresoras de Sueca. Piezas a medida, repuestos, prototipos, figuras, trofeos, medallas y merchandising para toda Valencia, con entrega en mano en la Ribera.',
    ogImagen: 'public/img/logo-trofeos.webp',
    ogTitulo: 'Impresión 3D personalizada',
    servicio: { nombre: 'Impresión 3D personalizada', tipo: 'Diseño e impresión 3D a medida' },
    areaServed: ['València', ...PUEBLOS.map((p) => p.nombre)],
    bloques: [
      {
        tipo: 'texto',
        h2: 'Qué imprimimos',
        figura: { src: 'public/img/logo-trofeos.webp', w: 1600, h: 1765, alt: 'Logotipo de PIQ3D impreso en 3D con trofeos de fondo en el taller de Sueca', pie: 'El taller, en Sueca' },
        html: `
<p>Somos conocidos por los <a href="/trofeos-personalizados/">trofeos</a> y las <a href="/medallas-personalizadas/">medallas</a>, pero la impresora no distingue: lo que imprimimos es cualquier objeto que tenga un archivo 3D detrás, y ese archivo lo hacemos nosotros si no lo tienes.</p>
<h3>Piezas a medida</h3>
<ul>
<li>Repuestos descatalogados: una pieza de un electrodoméstico, un pomo, una tapa, un soporte roto.</li>
<li>Soportes, adaptadores y organizadores para casa, taller o tienda.</li>
<li>Carcasas y cajas para electrónica.</li>
<li>Maquetas y prototipos para presentar un proyecto o probar una idea antes de fabricarla.</li>
<li>Figuras, letras, logotipos en volumen y decoración para eventos.</li>
</ul>
<h3>Lo que ya hacemos en serie</h3>
<p><a href="/trofeos-personalizados/">Trofeos</a>, <a href="/medallas-personalizadas/">medallas</a>, <a href="/placas-personalizadas/">placas</a>, <a href="/llaveros-personalizados/">llaveros, imanes y pines</a> y <a href="/soportes-qr-nfc-restaurantes/">soportes de carta QR y NFC</a>.</p>`,
      },
      {
        tipo: 'texto',
        h2: 'De la idea al archivo: cómo funciona',
        html: `
<h3>Si no tienes archivo</h3>
<p>Nos cuentas qué necesitas, nos mandas una foto, un dibujo o unas medidas, y lo modelamos en 3D. Te enviamos renders y, si hay medidas críticas, un prototipo para probar el ajuste. El diseño va incluido en el presupuesto.</p>
<h3>Si ya tienes el archivo</h3>
<p>Aceptamos STL, 3MF, OBJ y STEP. Lo revisamos (grosores, orientación, soportes) y te decimos si hay algo que convenga ajustar antes de imprimir.</p>
<h3>Tamaños y tolerancias</h3>
<p>Piezas de hasta unos 25 cm en una sola impresión; más grandes, en varias partes ensambladas. Tolerancia habitual de ±0,5 mm, suficiente para la mayoría de ajustes; si necesitas más precisión, lo comprobamos con un prototipo.</p>`,
      },
      {
        tipo: 'texto',
        h2: 'Materiales y acabados',
        html: `
<p>Trabajamos con <strong>PLA</strong>, un plástico de origen vegetal y biodegradable, rígido y con muy buen acabado. Es el material ideal para trofeos, merchandising, maquetas, soportes y piezas de uso diario en interior. Disponemos de colores mate y metalizados (dorado, plateado, bronce) y nuestras impresoras cambian de filamento automáticamente, así que una misma pieza puede llevar hasta cuatro colores sin pintar nada.</p>
<p>Para piezas que vayan a estar al sol dentro de un coche o cerca de una fuente de calor, o que necesiten flexibilidad, consúltanos antes: te diremos si el PLA es adecuado o conviene otro material.</p>
<p>Imprimimos con altura de capa de 0,2 mm (y más fina en piezas con detalle). Las líneas de capa forman parte del acabado: en los trofeos las usamos a favor del diseño.</p>`,
      },
      {
        tipo: 'texto',
        h2: 'Impresión 3D en la Ribera, pueblo a pueblo',
        html: `
<span id="pueblos"></span>
<p>El taller está en Sueca y entregamos en mano en toda la Ribera Baixa y en Alzira, sin coste de transporte. Cada pueblo tiene su página con lo que solemos hacer allí y cómo entregamos:</p>
<ul class="towns">${pueblosHtml}</ul>
<p>Para <a href="/trofeos-personalizados-valencia/">València y l’Horta Sud</a> y para <a href="/trofeos-personalizados-la-safor/">la Safor</a> también entregamos en mano. Al resto de España, por mensajería en 24-48 horas.</p>`,
      },
      { tipo: 'pasos', h2: 'Cómo trabajamos', intro: 'Los mismos cinco pasos para una pieza suelta que para una tirada de mil.' },
      { tipo: 'casos', h2: 'Tres cosas que hemos impreso', intro: 'Un busto modelado a partir de fotos, un balón a tamaño real y una tirada de cuarenta placas con nombre.', casos: ['trofeu-antonio-puchades', 'juntos-por-super-ivan', 'placas-debutante-ad-esperanza'] },
      {
        tipo: 'faq',
        faq: [
          { p: '¿Cuánto cuesta imprimir una pieza en 3D?', r: '<p>Depende del tamaño (horas de impresión y material), de los colores y de si hay que diseñarla. El diseño va incluido, así que una pieza suelta cuesta lo que cuesta imprimirla. Mándanos una foto o una descripción y te pasamos presupuesto en el día.</p>' },
          { p: '¿Necesito tener el archivo 3D?', r: '<p>No. Lo diseñamos nosotros a partir de una descripción, un dibujo, una foto o unas medidas. Si ya lo tienes (STL, 3MF, OBJ, STEP), mejor.</p>' },
          { p: '¿Podéis copiar una pieza rota?', r: '<p>Sí, si nos la traes o nos mandas fotos con medidas. La modelamos de nuevo y, si hace falta, la reforzamos donde se rompió.</p>' },
          { p: '¿Qué tamaño máximo imprimís?', r: '<p>Unos 25 cm por lado en una sola pieza. Piezas mayores se imprimen en partes y se ensamblan.</p>' },
          { p: '¿Cuánto tarda?', r: '<p>Una pieza sencilla, entre tres y siete días con diseño incluido. Tiradas, según cantidad; la granja de impresoras trabaja en paralelo.</p>' },
          { p: '¿Entregáis en mi pueblo?', r: '<p>En toda la Ribera Baixa y en Alzira, en mano y sin coste. Mira la lista de pueblos más arriba. Al resto de España, por mensajería.</p>' },
        ],
      },
      { tipo: 'relacionados', h2: 'Servicios relacionados', enlaces: [{ url: '/trofeos-personalizados/', texto: 'Trofeos personalizados' }, { url: '/medallas-personalizadas/', texto: 'Medallas personalizadas' }, { url: '/llaveros-personalizados/', texto: 'Llaveros y merchandising' }, { url: '/soportes-qr-nfc-restaurantes/', texto: 'Soportes QR y NFC' }, { url: '/trofeos-empresas/', texto: 'Prototipos y premios para empresas' }, { url: '/blog/trofeos-impresos-en-3d-vs-tradicionales/', texto: 'Blog: trofeos 3D frente a tradicionales' }] },
    ],
    cta: { titulo: '¿Qué necesitas imprimir?', texto: 'Mándanos una foto, un dibujo o una descripción por WhatsApp y te decimos si se puede, cuánto cuesta y cuándo lo tienes.' },
  },
];
