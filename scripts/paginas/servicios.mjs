// ============================================================
//  Páginas de servicio: /trofeos-personalizados/ y
//  /medallas-personalizadas/. Son las que reciben los enlaces de
//  las zonas y de los casos.
// ============================================================

const ZONAS_ENLACES = [
  { url: '/trofeos-personalizados-valencia/', texto: 'Trofeos y medallas en València y l’Horta Sud' },
  { url: '/trofeos-personalizados-ribera-baixa/', texto: 'Trofeos y medallas en la Ribera Baixa' },
  { url: '/trofeos-personalizados-la-safor/', texto: 'Trofeos y medallas en la Safor' },
];

const AREA = ['Sueca', 'València', 'Cullera', 'Alzira', 'Gandia', 'Aldaia', 'Torrent', 'Paterna'];

export const SERVICIOS_PAG = [
  // ----------------------------------------------------------
  {
    ruta: 'trofeos-personalizados',
    tipo: 'servicio',
    etiqueta: 'Servicio',
    title: 'Trofeos personalizados impresos en 3D | PIQ3D',
    description: 'Trofeos personalizados diseñados desde cero e impresos en 3D en Sueca. Diseño incluido, prototipo antes de la serie y entrega en toda España.',
    h1: ['Trofeos personalizados', 'impresos en 3D'],
    migaActual: 'Trofeos personalizados',
    intro: 'No vendemos trofeos de catálogo. Diseñamos cada pieza desde cero para tu torneo, tu carrera o tu evento, con el escudo, el nombre y la fecha formando parte de la propia pieza, y la imprimimos en 3D en nuestro taller de Sueca.',
    ogImagen: 'public/img/fibravalencia.webp',
    ogTitulo: 'Trofeos personalizados impresos en 3D',
    servicio: { nombre: 'Trofeos personalizados impresos en 3D', tipo: 'Diseño y fabricación de trofeos' },
    areaServed: AREA,
    bloques: [
      {
        tipo: 'texto',
        h2: 'Un trofeo diseñado para tu evento, no uno más del catálogo',
        figura: { src: 'public/img/fibravalencia.webp', w: 1600, h: 1600, alt: 'Trofeo personalizado impreso en 3D para la Volta a Peu FibraValencia, columna retorcida blanca y magenta', pie: 'Volta a Peu FibraValencia · Alaquàs' },
        html: `
<p>Un trofeo personalizado de PIQ3D empieza con una conversación: qué se celebra, quién lo recibe y qué quieres que cuente. A partir de ahí modelamos una pieza propia en 3D (una columna que gira, un busto, un balón, una huella de hojas) y la imprimimos con las impresoras FDM de nuestro taller en Sueca.</p>
<p>El escudo del club, el logotipo del patrocinador, la categoría y el año no van en una pegatina: están en relieve y a color dentro de la pieza. Y como el diseño es nuestro, cada unidad puede llevar un texto distinto sin coste extra.</p>
<h3>Qué incluye el presupuesto</h3>
<ul>
<li>Diseño 3D desde cero, con renders para que lo apruebes antes de imprimir.</li>
<li>Un prototipo físico cuando la tirada lo merece.</li>
<li>Producción multicolor en PLA, un material biodegradable.</li>
<li>Textos y variantes por categoría o puesto sin recargo.</li>
<li>El archivo guardado para repetir o actualizar el pedido otro año.</li>
</ul>`,
      },
      {
        tipo: 'texto',
        h2: 'Para clubes, carreras, fallas, ayuntamientos y empresas',
        html: `
<p>Hacemos <strong>trofeos deportivos personalizados</strong> para clubes de fútbol, fútbol sala, balonmano, baloncesto, pádel o ajedrez: trofeos de campeón y subcampeón, premios al mejor jugador, al máximo goleador o a la trayectoria.</p>
<p>Para <strong>carreras populares y voltes a peu</strong>, trofeos por categoría que hablen del recorrido o del pueblo, a juego con las <a href="/medallas-personalizadas/">medallas de finisher</a>.</p>
<p>Para <strong>comisiones falleras</strong>, premios de concursos de paellas, playbacks o presentaciones con el escudo de la falla. Para <strong>ayuntamientos y asociaciones</strong>, reconocimientos y placas conmemorativas. Y para <strong>empresas</strong>, premios internos y detalles para eventos con el logotipo en volumen.</p>
<p>La mayoría de nuestros clientes están en <a href="/trofeos-personalizados-ribera-baixa/">Sueca y la Ribera Baixa</a>, en <a href="/trofeos-personalizados-valencia/">València y l’Horta Sud</a> y en <a href="/trofeos-personalizados-la-safor/">la Safor</a>, pero enviamos a toda España: las placas de la AD Esperanza llegaron a Madrid en dos días.</p>`,
      },
      {
        tipo: 'pasos',
        h2: 'Cómo trabajamos un trofeo',
        intro: 'Cinco pasos, siempre los mismos, y en todos hablas directamente con la persona que diseña e imprime tu pedido.',
      },
      {
        tipo: 'texto',
        h2: 'Plazos, cantidades y precio',
        html: `
<h3>Plazos</h3>
<p>El diseño se cierra normalmente en menos de una semana, contando tus revisiones. La producción depende de la cantidad y del tamaño, pero nuestra granja de impresoras trabaja en paralelo: una docena de trofeos de 25 cm sale en pocos días. Para un torneo o una carrera, pide con tres o cuatro semanas de margen.</p>
<h3>Cantidades</h3>
<p>Desde una pieza única hasta más de mil unidades con el mismo acabado en la primera y en la última. No hay pedido mínimo.</p>
<h3>Precio</h3>
<p>Depende del tamaño, del número de colores y de la cantidad. El diseño va incluido, así que no hay un «coste de arranque» que encarezca los pedidos pequeños, y las tiradas largas bajan mucho el precio por unidad. Pide presupuesto por WhatsApp con una foto del escudo y la cantidad aproximada y te respondemos en el día.</p>`,
      },
      {
        tipo: 'casos',
        h2: 'Trofeos que ya están en una vitrina',
        intro: 'Trabajos reales, con cliente y localidad. En cada uno explicamos el encargo, el diseño y la producción.',
        casos: ['volta-a-peu-fibravalencia', 'torneig-ciutat-de-sueca', 'trofeu-antonio-puchades', 'trofeu-pepe-soler', 'volta-a-peu-la-canyada', 'juntos-por-super-ivan'],
        html: '<p>Más piezas, incluidas las de fallas, reconocimientos y merchandising, en la <a href="/galeria/">galería</a> y en la página de <a href="/trabajos/">trabajos realizados</a>.</p>',
      },
      {
        tipo: 'faq',
        faq: [
          { p: '¿Cuánto cuesta un trofeo personalizado?', r: '<p>Depende del tamaño, de los colores y de la cantidad, pero el diseño siempre va incluido. Un trofeo único cuesta lo que cuesta imprimirlo, sin coste de diseño aparte; en tiradas de varias unidades el precio por pieza baja mucho. Pídenos presupuesto con una foto del escudo y la cantidad y te lo enviamos en el día.</p>' },
          { p: '¿Hay pedido mínimo?', r: '<p>No. Hacemos desde una pieza única hasta tiradas de más de mil.</p>' },
          { p: '¿Puedo usar el escudo de mi club o el logotipo de mi empresa?', r: '<p>Sí, siempre que seas el titular o tengas su autorización. Lo modelamos en relieve y a color a partir de la imagen que nos envíes.</p>' },
          { p: '¿Cuánto tarda?', r: '<p>Diseño en menos de una semana; producción en días, según cantidad y tamaño. Lo razonable para un evento es pedir con tres o cuatro semanas.</p>' },
          { p: '¿Hacéis envíos?', r: '<p>Sí, a toda España, con el coste detallado en el presupuesto. En Sueca y la comarca entregamos en mano, y en València y l’Horta Sud también podemos acercarnos.</p>' },
          { p: '¿De qué material son?', r: '<p>De PLA, un plástico de origen vegetal y biodegradable, impreso capa a capa. Es rígido, ligero y admite colores metalizados (dorado, plateado) y mates.</p>' },
        ],
      },
      {
        tipo: 'relacionados',
        enlaces: [{ url: '/medallas-personalizadas/', texto: 'Medallas personalizadas impresas en 3D' }, ...ZONAS_ENLACES, { url: '/trabajos/', texto: 'Todos los trabajos documentados' }],
      },
    ],
    cta: { titulo: '¿Hablamos de tu trofeo?', texto: 'Mándanos el escudo, la cantidad y la fecha del evento y te pasamos presupuesto con el diseño 3D incluido.' },
  },
  // ----------------------------------------------------------
  {
    ruta: 'medallas-personalizadas',
    tipo: 'servicio',
    etiqueta: 'Servicio',
    title: 'Medallas personalizadas para carreras y clubes | PIQ3D',
    description: 'Medallas personalizadas impresas en 3D con tu logo, de 1 a más de 1.000 unidades. Diseño incluido y fabricación en nuestro taller de Sueca (Valencia).',
    h1: ['Medallas personalizadas', 'impresas en 3D'],
    migaActual: 'Medallas personalizadas',
    intro: 'Medallas con el diseño de tu carrera, tu torneo o tu club, en relieve y a color, en una sola pieza. De unas decenas a más de mil unidades, con cinta incluida y diseño sin coste.',
    ogImagen: 'public/img/medalla-xiques.webp',
    ogTitulo: 'Medallas personalizadas impresas en 3D',
    servicio: { nombre: 'Medallas personalizadas impresas en 3D', tipo: 'Diseño y fabricación de medallas' },
    areaServed: AREA,
    bloques: [
      {
        tipo: 'texto',
        h2: 'Medallas con tu diseño, en relieve y a color',
        figura: { src: 'public/img/medalla-xiques.webp', w: 1200, h: 1600, alt: 'Medalla personalizada impresa en 3D del torneo Valencia Xiques 3x3, anverso con el logotipo en relieve', pie: 'Valencia Xiques 3x3 · València' },
        html: `
<p>Una medalla personalizada de PIQ3D no es una medalla de catálogo con una pegatina en el centro. El logotipo de la carrera, el escudo del club, el año y la distancia están modelados en relieve, y cada color es un filamento distinto que la impresora cambia sola. El resultado es una pieza ligera, con volumen, que se reconoce desde lejos en la foto de meta.</p>
<h3>Qué incluye</h3>
<ul>
<li>Diseño 3D desde cero a partir de tu logotipo, con renders para aprobar.</li>
<li>Prototipo impreso antes de lanzar la tirada.</li>
<li>Hasta cuatro colores en una sola pieza, incluidos dorado y plateado.</li>
<li>Cinta a juego, montada en el taller.</li>
<li>Variantes por puesto o categoría (oro, plata, bronce, finisher) sin coste de diseño.</li>
</ul>`,
      },
      {
        tipo: 'texto',
        h2: 'Para carreras populares, torneos, clubes y colegios',
        html: `
<p><strong>Carreras populares, voltes a peu y trails:</strong> medallas finisher para todos los participantes, con el recorrido, el monumento del pueblo o la mascota de la carrera en relieve. Si hay trofeos por categoría, los diseñamos a juego: mira los <a href="/trofeos-personalizados/">trofeos personalizados</a>.</p>
<p><strong>Torneos y clubes deportivos:</strong> medallas de campeón, subcampeón y participación para fútbol base, fútbol sala, baloncesto, ajedrez, natación o pádel, con el escudo del club.</p>
<p><strong>Colegios, AMPAs y ayuntamientos:</strong> olimpiadas escolares, días del deporte, carreras solidarias y concursos, con tiradas de cientos de unidades a precio ajustado.</p>
<p><strong>Empresas:</strong> medallas para carreras corporativas y retos internos con el logotipo en volumen.</p>
<p>Trabajamos sobre todo en <a href="/trofeos-personalizados-valencia/">València y l’Horta Sud</a>, <a href="/trofeos-personalizados-ribera-baixa/">la Ribera Baixa</a> y <a href="/trofeos-personalizados-la-safor/">la Safor</a>, y enviamos a toda España.</p>`,
      },
      {
        tipo: 'pasos',
        h2: 'Cómo trabajamos una tirada de medallas',
        intro: 'Los mismos cinco pasos que en un trofeo, con una diferencia: en medallas el prototipo es obligatorio. Antes de imprimir quinientas, imprimimos una.',
      },
      {
        tipo: 'texto',
        h2: 'Plazos, cantidades y precio',
        html: `
<h3>Plazos</h3>
<p>Diseño en menos de una semana. La producción es donde la granja de impresión marca la diferencia: las medallas son planas y caben muchas por bandeja, así que una tirada de 500 no tarda mucho más que una de 100. Para una carrera, pide con un mes de margen y tendrás las medallas una semana antes.</p>
<h3>Cantidades</h3>
<p>Sin mínimo. A partir de unas decenas el precio por unidad baja de forma notable, y en tiradas de cientos es muy competitivo frente a la medalla metálica de catálogo.</p>
<h3>Precio</h3>
<p>Depende del diámetro, del número de colores y de la cantidad. Diseño y cinta van incluidos. Envíanos el logotipo y la cantidad por WhatsApp y te pasamos el presupuesto en el día.</p>`,
      },
      {
        tipo: 'casos',
        h2: 'Medallas que ya han cruzado la meta',
        intro: 'Dos tiradas reales, con cliente y localidad.',
        casos: ['10k-sense-limits', 'medallas-ajedrez-sueca'],
        html: '<p>También hemos hecho las medallas del torneo Valencia Xiques 3x3, con anverso y reverso distintos: están en la <a href="/galeria/#medallas">galería</a>.</p>',
      },
      {
        tipo: 'faq',
        faq: [
          { p: '¿Cuánto cuesta una medalla personalizada?', r: '<p>Depende del tamaño, de los colores y sobre todo de la cantidad: a partir de unas decenas el precio por unidad baja mucho. El diseño y la cinta van incluidos. Pide presupuesto con el logotipo y el número aproximado de participantes.</p>' },
          { p: '¿Cuál es el pedido mínimo?', r: '<p>No hay mínimo. Podemos hacer tres medallas para un podio o mil para una carrera.</p>' },
          { p: '¿Con cuánta antelación tengo que pedirlas?', r: '<p>Lo ideal es un mes: una semana de diseño y prototipo, dos de producción y margen para la entrega. Si vas más justo, consúltanos: la granja de impresión da bastante de sí.</p>' },
          { p: '¿Puedo usar el logotipo de la carrera o el escudo del club?', r: '<p>Sí, si eres el organizador o tienes su autorización. Lo pasamos a relieve respetando los colores originales.</p>' },
          { p: '¿La cinta va incluida?', r: '<p>Sí. Elegimos el color a juego con la medalla y la montamos en el taller. Si quieres cinta sublimada con tu marca, dínoslo y la incluimos en el presupuesto.</p>' },
          { p: '¿Hacéis envíos?', r: '<p>Sí, a toda España. En Sueca, la Ribera Baixa y l’Horta Sud entregamos en mano.</p>' },
        ],
      },
      {
        tipo: 'relacionados',
        enlaces: [{ url: '/trofeos-personalizados/', texto: 'Trofeos personalizados impresos en 3D' }, ...ZONAS_ENLACES, { url: '/trabajos/', texto: 'Todos los trabajos documentados' }],
      },
    ],
    cta: { titulo: '¿Hablamos de tus medallas?', texto: 'Mándanos el logotipo, la cantidad y la fecha de la carrera y te pasamos presupuesto con el diseño y la cinta incluidos.' },
  },
];
