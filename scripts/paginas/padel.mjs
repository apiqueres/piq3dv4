// ============================================================
//  /trofeos-padel/ : página por tipo de evento para torneos de
//  pádel. Aún no hay un trabajo real de pádel documentado y la
//  página no lo oculta: enseña los conceptos y los casos más
//  parecidos.
// ============================================================

export const PADEL_PAG = [
  {
    ruta: 'trofeos-padel',
    tipo: 'servicio',
    etiqueta: 'Pádel',
    title: 'Trofeos de pádel personalizados para torneos | PIQ3D',
    description: 'Trofeos de pádel impresos en 3D para torneos de club, americanos y ligas: pala, pelota o pista con el logotipo en relieve, por parejas y categorías.',
    h1: ['Trofeos de pádel', 'para torneos y ligas'],
    migaActual: 'Pádel',
    migas: [{ nombre: 'Trofeos personalizados', url: '/trofeos-personalizados/' }],
    intro: 'Un torneo de pádel entrega muchos trofeos a la vez: dos por pareja, dos parejas por categoría, varias categorías. Diseñamos uno propio para tu torneo, con el logotipo en relieve, y lo imprimimos en 3D en todas las variantes que necesites, en días.',
    ogImagen: 'public/img/futsal-sueca.webp',
    ogTitulo: 'Trofeos de pádel para torneos y ligas',
    servicio: { nombre: 'Trofeos y medallas para torneos de pádel', tipo: 'Diseño y fabricación de trofeos' },
    areaServed: ['Sueca', 'València', 'Cullera', 'Alzira', 'Gandia', 'Aldaia', 'Torrent', 'Paterna', 'Almussafes'],
    bloques: [
      {
        tipo: 'texto',
        h2: 'Pala, pelota o pista: el trofeo que quieras, con tu logotipo',
        figura: { src: 'public/img/futsal-sueca.webp', w: 1402, h: 2048, alt: 'Trofeos impresos en 3D con balón dorado sobre columna negra, el mismo concepto que aplicamos a la pelota de pádel', pie: 'Balón sobre columna: el mismo concepto, con pelota de pádel' },
        html: `
<p>El trofeo de pádel de catálogo es una pala dorada sobre una columna de plástico, igual en todos los clubes. Con impresión 3D el trofeo se diseña para tu torneo: la pala con tu logotipo en la cara, la pelota sobre la red, la pista en miniatura, el escudo del club con una pala cruzada o un trofeo pensado para repartirse entre los dos jugadores de la pareja.</p>
<h3>Lo que incluye</h3>
<ul>
<li>Diseño 3D desde cero a partir del logotipo del torneo o del club, con renders para aprobar.</li>
<li>Variantes por categoría y puesto (campeones, finalistas; masculina, femenina, mixta; por nivel) sin coste.</li>
<li>Dorado y plateado para distinguir campeones y finalistas con el mismo diseño.</li>
<li>Medallas a juego para americanos y torneos de un día.</li>
<li>El archivo guardado para la siguiente edición de la liga o el torneo.</li>
</ul>
<p>Ideas concretas, con ejemplos, en <a href="/blog/ideas-trofeos-padel/">ideas de trofeos para torneos de pádel</a>.</p>`,
      },
      {
        tipo: 'texto',
        h2: 'Para clubes, americanos, ligas y torneos de empresa',
        html: `
<p><strong>Torneos de club:</strong> cuatro, seis u ocho categorías con campeones y finalistas. Un diseño, todas las variantes de texto, producción en paralelo.</p>
<p><strong>Americanos y torneos de un día:</strong> medallas para todos los participantes con la pelota en relieve y la fecha, y un trofeo para la pareja ganadora.</p>
<p><strong>Ligas de temporada:</strong> el mismo trofeo cada año con el año cambiado, sin volver a pagar el diseño.</p>
<p><strong>Torneos de empresa y circuitos entre pueblos:</strong> el logotipo de la empresa o del circuito en volumen, con placas de patrocinador si hace falta. Más en <a href="/trofeos-empresas/">trofeos y premios para empresas</a>.</p>
<p>Trabajamos con clubes y organizadores de <a href="/trofeos-personalizados-valencia/">València y l’Horta Sud</a>, <a href="/trofeos-personalizados-ribera-baixa/">la Ribera</a> y <a href="/trofeos-personalizados-la-safor/">la Safor</a>, y enviamos a toda España.</p>`,
      },
      {
        tipo: 'texto',
        h2: 'Cuántos trofeos y en qué plazo',
        html: `
<h3>Cantidades</h3>
<p>Un torneo con cuatro categorías y premio para campeones y finalistas son dieciséis trofeos (dos jugadores por pareja). Con ocho categorías, treinta y dos. Es el deporte con más trofeos por evento, y por eso el precio por unidad importa: a partir de una docena baja de forma clara.</p>
<h3>Plazos</h3>
<p>Diseño en menos de una semana y producción de una tirada de dieciséis trofeos de 20 cm en pocos días. Pide con dos o tres semanas de margen; para un americano con medallas para todos, un mes.</p>
<h3>Tamaños habituales</h3>
<p>Entre 18 y 25 cm para campeones y finalistas de torneo; 12-15 cm para premios de americano; medallas de 6-8 cm.</p>`,
      },
      { tipo: 'pasos', h2: 'Cómo trabajamos un torneo de pádel' },
      {
        tipo: 'casos',
        h2: 'Trabajos parecidos',
        intro: 'Todavía no hemos publicado un trofeo de pádel; estos tres trabajos usan los mismos conceptos (balón sobre columna, escudo en relieve, tirada de medallas) y muestran el acabado.',
        casos: ['torneig-ciutat-de-sueca', 'trofeu-pepe-soler', '10k-sense-limits'],
      },
      {
        tipo: 'faq',
        faq: [
          { p: '¿Cuánto cuestan los trofeos de un torneo de pádel?', r: '<p>Depende del tamaño, los colores y la cantidad. El diseño va incluido y, como en pádel se piden muchos a la vez, el precio por unidad baja a partir de una docena. Pide presupuesto con el logotipo, las categorías y la fecha.</p>' },
          { p: '¿Hacéis un trofeo para cada jugador de la pareja?', r: '<p>Sí. Lo habitual es un trofeo por jugador; también podemos diseñar un trofeo que se divide en dos piezas, una para cada uno.</p>' },
          { p: '¿Podemos poner el nombre de cada pareja?', r: '<p>Sí, sin coste por variante, si nos lo pasáis antes de la producción. Si no se conoce hasta la final, se imprime aparte y se coloca ese día.</p>' },
          { p: '¿Cuánto tarda?', r: '<p>Diseño en menos de una semana y producción en días. Para un torneo, pide con dos o tres semanas de margen.</p>' },
          { p: '¿Hacéis medallas para un americano?', r: '<p>Sí. Medallas para todos los participantes con la pelota en relieve, el nombre del torneo y la fecha, con cinta, en pocos días.</p>' },
        ],
      },
      {
        tipo: 'relacionados',
        enlaces: [
          { url: '/trofeos-personalizados/', texto: 'Trofeos personalizados' },
          { url: '/medallas-personalizadas/', texto: 'Medallas personalizadas' },
          { url: '/trofeos-clubes-deportivos/', texto: 'Trofeos para clubes deportivos' },
          { url: '/blog/ideas-trofeos-padel/', texto: 'Blog: ideas de trofeos para pádel' },
          { url: '/trofeos-empresas/', texto: 'Torneos de empresa' },
        ],
      },
    ],
    cta: { titulo: '¿Organizas un torneo de pádel?', texto: 'Mándanos el logotipo, las categorías y la fecha y te proponemos un trofeo propio, con el diseño incluido y todas las variantes que necesites.' },
  },
];
