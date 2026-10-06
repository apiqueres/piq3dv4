// ============================================================
//  Páginas por tipo de cliente o evento: carreras populares,
//  clubes deportivos, fallas y empresas.
// ============================================================

const AREA = ['Sueca', 'València', 'Cullera', 'Alzira', 'Gandia', 'Aldaia', 'Torrent', 'Paterna'];
const SERVICIOS = [
  { url: '/trofeos-personalizados/', texto: 'Trofeos personalizados' },
  { url: '/medallas-personalizadas/', texto: 'Medallas personalizadas' },
];

export const CLIENTES_PAG = [
  // ----------------------------------------------------------
  {
    ruta: 'trofeos-carreras-populares',
    tipo: 'servicio',
    etiqueta: 'Carreras populares',
    title: 'Trofeos y medallas para carreras populares | PIQ3D',
    description: 'Trofeos por categoría y medallas finisher para carreras populares, voltes a peu y trails, impresos en 3D con tu logotipo. Diseño incluido, tiradas en días.',
    h1: ['Trofeos y medallas', 'para carreras populares'],
    migaActual: 'Carreras populares',
    migas: [{ nombre: 'Trofeos personalizados', url: '/trofeos-personalizados/' }],
    intro: 'Organizas una volta a peu, una 10K, un trail o una carrera solidaria y necesitas trofeos para los podios y medallas para todos los que cruzan la meta. Los diseñamos a juego, con el logotipo de la carrera en relieve, y los imprimimos en 3D en días, no en meses.',
    ogImagen: 'public/img/la-canyada.webp',
    ogTitulo: 'Trofeos y medallas para carreras populares',
    servicio: { nombre: 'Trofeos y medallas para carreras populares', tipo: 'Diseño y fabricación de trofeos y medallas' },
    areaServed: AREA,
    bloques: [
      {
        tipo: 'texto',
        h2: 'Trofeos de podio y medallas finisher, a juego',
        figura: { src: 'public/img/la-canyada.webp', w: 1600, h: 2133, alt: 'Trofeo de la Volta a Peu La Canyada con forma de huella de hojas, impreso en 3D', pie: 'Volta a Peu La Canyada · Paterna' },
        html: `
<p>Una carrera popular tiene dos públicos: los que suben al podio y los que llegan. Para los primeros, <a href="/trofeos-personalizados/">trofeos por categoría</a> (local, general, masculina, femenina, por edades) con el puesto grabado en la pieza. Para todos, <a href="/medallas-personalizadas/">medallas finisher</a> con el logotipo de la carrera, el año y la distancia.</p>
<p>Lo que nos diferencia de la copa de catálogo: el trofeo habla de tu carrera. La huella de hojas de <a href="/trabajos/volta-a-peu-la-canyada/">La Canyada</a>, la columna retorcida de la <a href="/trabajos/volta-a-peu-fibravalencia/">Volta a Peu FibraValencia</a> o los corredores en silueta de la <a href="/trabajos/10k-sense-limits/">10K Sense Límits</a> son piezas que no existían antes de que las diseñáramos.</p>
<h3>Ideas que funcionan</h3>
<ul>
<li>El perfil del recorrido o del monumento del pueblo en relieve.</li>
<li>La mascota o el logotipo de la carrera en volumen.</li>
<li>Un trofeo paramétrico: mismo diseño, texto distinto por categoría, sin coste extra.</li>
<li>Medalla con una cara para el diseño y otra para el patrocinador.</li>
</ul>`,
      },
      {
        tipo: 'texto',
        h2: 'Cantidades, plazos y qué nos tienes que pasar',
        html: `
<h3>Cantidades</h3>
<p>De 6 a 30 trofeos de podio y de 100 a más de 1.000 medallas es lo habitual. Las medallas son planas y caben muchas por bandeja: una tirada de 500 sale en pocos días en nuestra granja de impresoras.</p>
<h3>Plazos</h3>
<p>Diseño y prototipo en una semana, producción en una o dos según la cantidad, y entrega la semana de la carrera. Pide con un mes de margen y vas sobrado; si vas más justo, consúltanos.</p>
<h3>Qué necesitamos</h3>
<ul>
<li>Logotipo de la carrera (y del patrocinador, si va en la pieza) en buena resolución.</li>
<li>Lista de categorías y puestos para los trofeos.</li>
<li>Número aproximado de participantes para las medallas.</li>
<li>Fecha de la carrera y lugar de entrega.</li>
</ul>
<p>Con eso te enviamos presupuesto en el día, con el diseño incluido.</p>`,
      },
      { tipo: 'pasos', h2: 'Cómo trabajamos una carrera' },
      { tipo: 'casos', h2: 'Carreras que ya han premiado con nuestras piezas', intro: 'Tres carreras de la provincia de Valencia, con su proceso documentado.', casos: ['volta-a-peu-fibravalencia', 'volta-a-peu-la-canyada', '10k-sense-limits'] },
      {
        tipo: 'faq',
        faq: [
          { p: '¿Cuánto cuestan los trofeos y las medallas de una carrera?', r: '<p>Depende del tamaño, los colores y la cantidad. El diseño va incluido y las medallas bajan mucho de precio por unidad a partir de unas decenas. Pide presupuesto con el logotipo, las categorías y el número de participantes.</p>' },
          { p: '¿Cuántas medallas podéis hacer?', r: '<p>De unas decenas a más de mil. Producimos en paralelo en varias impresoras.</p>' },
          { p: '¿Con cuánta antelación hay que pedirlos?', r: '<p>Un mes es lo ideal. Si la carrera es antes, consúltanos: a menudo se puede.</p>' },
          { p: '¿Puede ir el logotipo del patrocinador?', r: '<p>Sí, si eres el organizador o tienes su autorización. Lo modelamos en relieve y a color.</p>' },
          { p: '¿Entregáis en el lugar de la carrera?', r: '<p>Sí, en mano en toda la Ribera, l’Horta Sud y la Safor. Al resto de España, por mensajería.</p>' },
        ],
      },
      { tipo: 'relacionados', enlaces: [...SERVICIOS, { url: '/trofeos-clubes-deportivos/', texto: 'Trofeos para clubes deportivos' }, { url: '/trofeos-personalizados-valencia/', texto: 'Trofeos y medallas en València y l’Horta Sud' }, { url: '/trofeos-personalizados-ribera-baixa/', texto: 'Trofeos y medallas en la Ribera Baixa' }] },
    ],
    cta: { titulo: '¿Cuándo es tu carrera?', texto: 'Mándanos el logotipo, las categorías y el número de participantes y te pasamos presupuesto con el diseño incluido.' },
  },
  // ----------------------------------------------------------
  {
    ruta: 'trofeos-clubes-deportivos',
    tipo: 'servicio',
    etiqueta: 'Clubes deportivos',
    title: 'Trofeos para clubes deportivos con escudo | PIQ3D',
    description: 'Trofeos, medallas y placas para clubes de fútbol, fútbol sala, balonmano y ajedrez con el escudo en relieve. Diseño incluido y archivo guardado cada año.',
    h1: ['Trofeos para', 'clubes deportivos'],
    migaActual: 'Clubes deportivos',
    migas: [{ nombre: 'Trofeos personalizados', url: '/trofeos-personalizados/' }],
    intro: 'Torneos de pretemporada, finales, fin de temporada, debutantes, mejor jugador: el club entrega premios todo el año. Los diseñamos con tu escudo en relieve y guardamos el archivo para que el año que viene solo cambie la fecha.',
    ogImagen: 'public/img/futsal-sueca.webp',
    ogTitulo: 'Trofeos para clubes deportivos',
    servicio: { nombre: 'Trofeos y medallas para clubes deportivos', tipo: 'Diseño y fabricación de trofeos y medallas' },
    areaServed: AREA,
    bloques: [
      {
        tipo: 'texto',
        h2: 'Tu escudo, en relieve y a color, en cada premio',
        figura: { src: 'public/img/futsal-sueca.webp', w: 1402, h: 2048, alt: 'Trofeos negros con balón dorado y escudo del FS Sueca impresos en 3D', pie: 'Torneig Ciutat de Sueca · FS Sueca' },
        html: `
<p>El escudo es lo que distingue a un club, y en un trofeo de catálogo acaba en una pegatina. En los nuestros está modelado en relieve, con sus colores, formando parte de la pieza. Lo mismo con el balón, la pelota o la figura del deporte: fútbol, fútbol sala, balonmano, baloncesto, pádel, ajedrez, pilota, natación o atletismo.</p>
<h3>Lo que suele pedir un club</h3>
<ul>
<li><strong>Trofeos de torneo</strong>: campeón y subcampeón por categoría, como los del <a href="/trabajos/torneig-ciutat-de-sueca/">Torneig Ciutat de Sueca</a>.</li>
<li><strong>Trofeos homenaje</strong> con nombre propio, como el <a href="/trabajos/trofeu-antonio-puchades/">Trofeu Antonio Puchades</a> o el <a href="/trabajos/trofeu-pepe-soler/">Trofeu Pepe Soler</a>.</li>
<li><strong>Premios individuales</strong>: mejor jugador, máximo goleador, portero menos goleado, trayectoria.</li>
<li><strong>Medallas</strong> de participación y de podio para la cantera.</li>
<li><strong>Placas de debutante y fin de temporada</strong> con el nombre de cada jugador, como las de la <a href="/trabajos/placas-debutante-ad-esperanza/">AD Esperanza</a>.</li>
<li><strong>Llaveros e imanes</strong> con el escudo para socios y afición.</li>
</ul>`,
      },
      {
        tipo: 'texto',
        h2: 'El archivo no caduca: repetir cada temporada sin volver a diseñar',
        html: `
<p>Un club organiza el mismo torneo cada año. Con nosotros, el diseño se hace una vez: la SD Sueca repitió el Trofeu Puchades en 2026 cambiando solo el año en el archivo. El coste de diseño de la segunda edición es cero, y la pieza es idéntica a la primera.</p>
<p>Lo mismo sirve para ampliar: si debutan más jugadores a mitad de temporada, imprimimos solo las placas nuevas.</p>
<h3>Plazos y cantidades</h3>
<p>Diseño en menos de una semana y producción en días. Para un torneo con dos o tres trofeos, dos semanas de margen; para medallas de toda la cantera, un mes. Sin pedido mínimo.</p>`,
      },
      { tipo: 'pasos', h2: 'Cómo trabajamos con un club' },
      { tipo: 'casos', h2: 'Clubes que ya trabajan con nosotros', intro: 'Fútbol sala, fútbol, balonmano, fútbol base y ajedrez.', casos: ['torneig-ciutat-de-sueca', 'trofeu-antonio-puchades', 'trofeu-pepe-soler', 'placas-debutante-ad-esperanza', 'medallas-ajedrez-sueca', 'juntos-por-super-ivan'] },
      {
        tipo: 'faq',
        faq: [
          { p: '¿Cuánto cuesta un trofeo con el escudo del club?', r: '<p>Depende del tamaño, los colores y la cantidad. El diseño va incluido; el escudo se modela una vez y sirve para todos los premios del club. Pide presupuesto con una imagen del escudo.</p>' },
          { p: '¿Podemos repetir los mismos trofeos cada año?', r: '<p>Sí. El archivo queda guardado y cada edición solo cambia el año, sin coste de diseño.</p>' },
          { p: '¿Hacéis premios con el nombre de cada jugador?', r: '<p>Sí, sin coste por variante. Nos pasas la lista y el archivo genera todas las piezas.</p>' },
          { p: '¿Cuánto tarda?', r: '<p>Diseño en menos de una semana y producción en días. Para un torneo, pide con dos o tres semanas.</p>' },
          { p: '¿Trabajáis con clubes fuera de Valencia?', r: '<p>Sí. La AD Esperanza es de Madrid: todo por WhatsApp y envío en 48 horas.</p>' },
        ],
      },
      { tipo: 'relacionados', enlaces: [...SERVICIOS, { url: '/trofeos-padel/', texto: 'Trofeos para torneos de pádel' }, { url: '/placas-personalizadas/', texto: 'Placas de debutante y fin de temporada' }, { url: '/llaveros-personalizados/', texto: 'Llaveros e imanes con el escudo' }, { url: '/trofeos-personalizados-ribera-baixa/', texto: 'Clubes de Sueca y la Ribera Baixa' }] },
    ],
    cta: { titulo: '¿Tu club necesita premios?', texto: 'Mándanos el escudo y cuéntanos el torneo o la temporada. Te pasamos presupuesto con el diseño incluido y guardamos el archivo para el año que viene.' },
  },
  // ----------------------------------------------------------
  {
    ruta: 'trofeos-fallas',
    tipo: 'servicio',
    etiqueta: 'Fallas',
    title: 'Trofeos y premios para fallas | PIQ3D Sueca',
    description: 'Trofeos y premios para fallas impresos en 3D: concursos de paellas, playbacks, presentaciones y pines con el escudo de la comisión. Taller en Sueca.',
    h1: ['Trofeos y premios', 'para fallas'],
    migaActual: 'Fallas',
    migas: [{ nombre: 'Trofeos personalizados', url: '/trofeos-personalizados/' }],
    intro: 'Concurso de paellas, playback, presentación, cabalgata del ninot, el pin del año: una comisión fallera entrega premios durante todo el ejercicio. Los hacemos con el escudo de la falla en relieve, impresos en 3D en Sueca.',
    ogImagen: 'public/img/galeria/trofeo-paellas-fallas.webp',
    ogTitulo: 'Trofeos y premios para fallas',
    servicio: { nombre: 'Trofeos y premios para fallas', tipo: 'Diseño y fabricación de trofeos' },
    areaServed: ['Sueca', 'Cullera', 'Alzira', 'Algemesí', 'Gandia', 'València', 'Torrent', 'Sollana', 'Almussafes'],
    bloques: [
      {
        tipo: 'texto',
        h2: 'Premios con el escudo de la comisión',
        figura: { src: 'public/img/galeria/trofeo-paellas-fallas.webp', w: 1179, h: 1387, alt: 'Trofeo impreso en 3D para un concurso de paellas de fallas', pie: 'Concurso de paellas · Sueca' },
        html: `
<p>Las fallas tienen símbolos propios: el escudo de la comisión, la paella, el ninot, la cremà, el traje. Un trofeo impreso en 3D puede ser cualquiera de ellos en volumen, con el escudo en relieve y a color y el nombre del concurso y el año en la base.</p>
<h3>Qué hacemos para una falla</h3>
<ul>
<li><strong>Concurso de paellas</strong>: la paella en volumen, con el puesto grabado, como la que hicimos para una falla de Sueca.</li>
<li><strong>Playbacks y presentaciones</strong>: trofeos por categoría y premios al mejor número.</li>
<li><strong>Premios de la comisión</strong>: fallero del año, trayectoria, agradecimientos a colaboradores.</li>
<li><strong>Pines y llaveros</strong> con el escudo y el ejercicio, para toda la comisión. Mira los <a href="/llaveros-personalizados/">llaveros y pines</a>.</li>
<li><strong>Detalles para la presentación</strong> de la fallera mayor y las cortes.</li>
</ul>`,
      },
      {
        tipo: 'texto',
        h2: 'Lo que ya hemos hecho',
        figura: { src: 'public/img/galeria/fallasucro.webp', w: 800, h: 800, alt: 'Trofeo impreso en 3D para la Falla Sucro de Sueca', pie: 'Falla Sucro · Sueca' },
        html: `
<p>En Sueca hemos fabricado los premios de la <strong>Falla Sucro</strong>, el trofeo de un <strong>concurso de paellas</strong> y el pin fallero que está en la <a href="/galeria/#merchandising">galería</a>. Trabajamos con comisiones de <a href="/impresion-3d-sueca/">Sueca</a>, <a href="/impresion-3d-cullera/">Cullera</a>, <a href="/impresion-3d-alzira/">Alzira</a> y el resto de la Ribera, y entregamos en mano en el casal.</p>
<h3>Plazos y cantidades</h3>
<p>Para los premios de marzo, lo ideal es pedir en enero: diseño en una semana y producción en días. Para los pines de toda la comisión (de 50 a 300 unidades), tres semanas de margen. Sin pedido mínimo: un solo trofeo para el concurso de paellas también vale.</p>`,
      },
      { tipo: 'pasos', h2: 'Cómo trabajamos con una comisión' },
      {
        tipo: 'faq',
        faq: [
          { p: '¿Cuánto cuesta un trofeo para fallas?', r: '<p>Depende del tamaño, los colores y la cantidad. El diseño va incluido, y el escudo de la falla se modela una vez y sirve para todos los premios del ejercicio. Pide presupuesto con una imagen del escudo.</p>' },
          { p: '¿Podéis hacer el pin del ejercicio con nuestro escudo?', r: '<p>Sí. Pines con el escudo en relieve y el año, con imperdible o imán, para toda la comisión.</p>' },
          { p: '¿Cuánto tarda?', r: '<p>Diseño en una semana y producción en días. Para marzo, pide en enero; para los pines, tres semanas de margen.</p>' },
          { p: '¿Hacéis premios para el concurso de paellas?', r: '<p>Sí. Lo habitual es la paella en volumen con el puesto grabado en la base. Mira el ejemplo de la galería.</p>' },
          { p: '¿Entregáis en el casal?', r: '<p>Sí, en mano en Sueca, Cullera, Alzira y toda la Ribera. Al resto de la Comunitat, por mensajería o en mano si nos cuadra la ruta.</p>' },
        ],
      },
      { tipo: 'relacionados', enlaces: [...SERVICIOS, { url: '/llaveros-personalizados/', texto: 'Pines y llaveros falleros' }, { url: '/trofeos-personalizados-ribera-baixa/', texto: 'Fallas de Sueca y Cullera' }, { url: '/impresion-3d-alzira/', texto: 'Impresión 3D en Alzira' }] },
    ],
    cta: { titulo: '¿Premios para tu falla?', texto: 'Mándanos el escudo de la comisión y cuéntanos qué concursos tenéis este ejercicio. Te pasamos presupuesto con el diseño incluido.' },
  },
  // ----------------------------------------------------------
  {
    ruta: 'trofeos-empresas',
    tipo: 'servicio',
    etiqueta: 'Empresas',
    title: 'Trofeos y premios para empresas en 3D | PIQ3D',
    description: 'Trofeos, premios internos, reconocimientos, merchandising y prototipos para empresas, impresos en 3D con el logotipo en volumen. Diseño incluido.',
    h1: ['Trofeos y premios', 'para empresas'],
    migaActual: 'Empresas',
    migas: [{ nombre: 'Trofeos personalizados', url: '/trofeos-personalizados/' }],
    intro: 'Premios internos, reconocimientos a empleados, trofeos para el torneo de empresa, detalles para ferias y prototipos de producto: todo con tu logotipo en volumen, impreso en 3D en Sueca y entregado en mano en la Ribera y València o por mensajería a toda España.',
    ogImagen: 'public/img/galeria/rtecaquintin.webp',
    ogTitulo: 'Trofeos y premios para empresas',
    servicio: { nombre: 'Trofeos, premios y merchandising para empresas', tipo: 'Diseño y fabricación de premios corporativos' },
    areaServed: AREA,
    bloques: [
      {
        tipo: 'texto',
        h2: 'Tu logotipo en volumen, no en una placa grabada',
        figura: { src: 'public/img/galeria/rtecaquintin.webp', w: 927, h: 927, alt: 'Soporte de carta QR impreso en 3D con el logotipo del restaurante Ca Quintín', pie: 'Soporte QR con la forma del logotipo · Ca Quintín' },
        html: `
<p>Un premio de empresa de catálogo es un bloque de metacrilato con el logotipo grabado. Un premio impreso en 3D es el logotipo convertido en objeto: con sus colores, su volumen y el texto del reconocimiento formando parte de la pieza.</p>
<h3>Qué hacemos para empresas</h3>
<ul>
<li><strong>Premios internos</strong>: empleado del año, mejor equipo, años de servicio, jubilaciones.</li>
<li><strong>Trofeos para eventos corporativos</strong>: torneos de pádel o fútbol de empresa, carreras solidarias, concursos internos.</li>
<li><strong>Reconocimientos a clientes y proveedores</strong> con el logotipo de ambos.</li>
<li><strong>Merchandising para ferias y eventos</strong>: <a href="/llaveros-personalizados/">llaveros, imanes y figuras</a> con el logotipo.</li>
<li><strong>Soportes de mesa</strong> con QR o NFC para restaurantes, hoteles y stands, como los <a href="/soportes-qr-nfc-restaurantes/">soportes de carta QR</a>.</li>
<li><strong>Prototipos y piezas a medida</strong>: maquetas de producto, útiles, repuestos. Más en <a href="/impresion-3d-personalizada/">impresión 3D personalizada</a>.</li>
</ul>`,
      },
      {
        tipo: 'texto',
        h2: 'Cómo encaja con una empresa',
        html: `
<p>Trabajamos por presupuesto cerrado con el diseño incluido, enviamos renders para aprobación y, si la tirada lo merece, un prototipo físico. Facturamos con IVA y entregamos en mano en la Ribera, l’Horta Sud y la Safor, o por mensajería a toda España en 24-48 horas.</p>
<p>Para pedidos recurrentes (el premio trimestral, el detalle de bienvenida de cada empleado nuevo), guardamos el archivo y reponemos sin coste de diseño.</p>
<h3>Plazos y cantidades</h3>
<p>Diseño en menos de una semana; producción en días para premios sueltos y en una o dos semanas para tiradas de merchandising. Sin pedido mínimo.</p>
<p>Las empresas con las que más trabajamos están en los polígonos de <a href="/impresion-3d-almussafes/">Almussafes</a>, <a href="/impresion-3d-sollana/">Sollana</a>, <a href="/impresion-3d-alzira/">Alzira</a> y Sueca, y en la hostelería de Sueca y Cullera.</p>`,
      },
      { tipo: 'pasos', h2: 'Cómo trabajamos con una empresa' },
      { tipo: 'casos', h2: 'Piezas que podrían ser las tuyas', intro: 'Un busto modelado a partir de fotos, cuarenta placas con nombre y una pieza única de agradecimiento.', casos: ['trofeu-antonio-puchades', 'placas-debutante-ad-esperanza', 'juntos-por-super-ivan'] },
      {
        tipo: 'faq',
        faq: [
          { p: '¿Cuánto cuesta un premio de empresa personalizado?', r: '<p>Depende del tamaño, los colores y la cantidad. El diseño va incluido y el logotipo se modela una vez para todos los premios. Pide presupuesto con el logotipo y lo que quieres reconocer.</p>' },
          { p: '¿Facturáis con IVA?', r: '<p>Sí. Presupuesto cerrado y factura a nombre de la empresa.</p>' },
          { p: '¿Hacéis prototipos de producto?', r: '<p>Sí, a partir de planos, archivos 3D o una descripción. Entrega en días. Mira <a href="/impresion-3d-personalizada/">impresión 3D personalizada</a>.</p>' },
          { p: '¿Cuánto tarda?', r: '<p>Diseño en menos de una semana y producción en días. Para merchandising de ferias, tres semanas de margen.</p>' },
          { p: '¿Entregáis en toda España?', r: '<p>Sí, por mensajería en 24-48 horas. En la Ribera y València, en mano.</p>' },
        ],
      },
      { tipo: 'relacionados', enlaces: [...SERVICIOS, { url: '/placas-personalizadas/', texto: 'Placas de reconocimiento' }, { url: '/soportes-qr-nfc-restaurantes/', texto: 'Soportes QR y NFC' }, { url: '/impresion-3d-personalizada/', texto: 'Prototipos y piezas a medida' }] },
    ],
    cta: { titulo: '¿Un premio con vuestro logotipo?', texto: 'Mándanos el logotipo y cuéntanos qué queréis reconocer. Te pasamos presupuesto cerrado con el diseño incluido.' },
  },
];
