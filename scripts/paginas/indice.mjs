// ============================================================
//  /trabajos/ : índice de todos los casos. Padre de las migas de
//  pan de cada trabajo y puerta de entrada desde el pie.
// ============================================================

export function paginaIndice(casos) {
  const trofeos = casos.filter((c) => c.servicio === 'trofeos').map((c) => c.slug);
  const otros = casos.filter((c) => c.servicio !== 'trofeos').map((c) => c.slug);
  return {
    ruta: 'trabajos',
    tipo: 'indice',
    etiqueta: 'Trabajos',
    title: 'Trabajos: trofeos y medallas impresos en 3D | PIQ3D',
    description: 'Trabajos reales de PIQ3D: trofeos, medallas y placas impresos en 3D para clubes y carreras de València y la Ribera, con el proceso de cada pieza.',
    h1: ['Trabajos', 'realizados'],
    migaActual: 'Trabajos',
    intro: 'Cada pieza que sale del taller tiene una historia: quién la pidió, qué quería contar y cómo la resolvimos. Aquí están las que hemos documentado, con cliente, localidad y proceso.',
    ogImagen: 'public/img/futsal-sueca.webp',
    ogTitulo: 'Trabajos realizados',
    lista: [...trofeos, ...otros].map((s) => `/trabajos/${s}/`),
    bloques: [
      {
        tipo: 'casos',
        h2: 'Trofeos',
        intro: 'Carreras populares, torneos de fútbol sala, balonmano y fútbol base, y una pieza solidaria. Todos diseñados desde cero.',
        casos: trofeos,
      },
      {
        tipo: 'casos',
        h2: 'Medallas y placas',
        intro: 'Tiradas de decenas a cientos de unidades, en una sola pieza multicolor.',
        casos: otros,
      },
      {
        tipo: 'texto',
        h2: '¿Quieres ver más piezas?',
        html: `
<p>Aquí solo están los trabajos con su proceso documentado. En la <a href="/galeria/">galería</a> hay muchas más piezas: trofeos para fallas y concursos de paellas, reconocimientos, llaveros, imanes, pines y los soportes de carta QR que hacemos para restaurantes de Sueca.</p>
<p>Si buscas algo concreto, las páginas de <a href="/trofeos-personalizados/">trofeos personalizados</a> y de <a href="/medallas-personalizadas/">medallas personalizadas</a> explican qué hacemos, para quién y en qué plazos.</p>`,
      },
      {
        tipo: 'relacionados',
        h2: 'Por zona',
        enlaces: [
          { url: '/trofeos-personalizados-valencia/', texto: 'Trofeos y medallas en València y l’Horta Sud' },
          { url: '/trofeos-personalizados-ribera-baixa/', texto: 'Trofeos y medallas en la Ribera Baixa' },
          { url: '/trofeos-personalizados-la-safor/', texto: 'Trofeos y medallas en la Safor' },
          { url: '/galeria/', texto: 'Galería completa' },
        ],
      },
    ],
    cta: { titulo: '¿El tuyo?', texto: 'Cuéntanos qué necesitas y te pasamos presupuesto con el diseño 3D incluido.' },
  };
}
