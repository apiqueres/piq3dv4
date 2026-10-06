// ============================================================
//  Datos compartidos por todas las páginas interiores (SEO).
//  Un solo sitio para el negocio, las zonas, los pueblos, los
//  servicios y los pasos del proceso: así el JSON-LD, el pie y los
//  textos no se desincronizan.
// ============================================================

export const DOMINIO = 'https://piq3d.com';

/** Versión de public/css/paginas.css. Súbela cada vez que cambie (nginx cachea el CSS un año). */
export const CSS_VERSION = 2;
/** Versión con la que la portada carga styles.css y main.js: se copia tal cual. */
export const STYLES_VERSION = 19;
export const MAIN_VERSION = 13;

export const NEGOCIO = {
  id: `${DOMINIO}/#negocio`,
  nombre: 'PIQ3D',
  descripcion:
    'Taller de diseño e impresión 3D en Sueca (Valencia). Trofeos, medallas, placas, llaveros y merchandising personalizados para clubes deportivos, carreras populares, fallas, ayuntamientos, empresas y restaurantes.',
  telefono: '+34623754444',
  telefonoBonito: '623 75 44 44',
  whatsapp: 'https://wa.me/34623754444',
  email: 'contacto@piq3d.com',
  instagram: 'https://www.instagram.com/piq3d',
  tiktok: 'https://www.tiktok.com/@piq3d',
  // Sin local de venta al público: en el Perfil de Empresa solo consta la localidad.
  localidad: 'Sueca',
  cp: '46410',
  provincia: 'Valencia',
  // Horario del Perfil de Empresa de Google (6 oct 2026).
  horario: [
    { dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], abre: '10:00', cierra: '19:00' },
    { dias: ['Saturday'], abre: '10:00', cierra: '13:00' },
  ],
  logo: `${DOMINIO}/public/logo/logo_white.png`,
  imagen: `${DOMINIO}/public/img/fibravalencia.webp`,
};

/** Pasos del proceso. Se repiten en todas las páginas de servicio y zona. */
export const PASOS = [
  { t: 'Idea', p: 'Nos cuentas el evento, las categorías, las cantidades y la fecha. Con un escudo o un logo nos basta para empezar.' },
  { t: 'Diseño 3D', p: 'Modelamos la pieza desde cero y te enviamos renders para que la apruebes. Está incluido en el presupuesto.' },
  { t: 'Prototipo', p: 'Imprimimos una unidad real y la tienes en la mano antes de lanzar la serie. Si hay que ajustar algo, se ajusta aquí.' },
  { t: 'Producción', p: 'La tirada sale de varias impresoras FDM a la vez, con cambio de color automático. Días, no meses.' },
  { t: 'Entrega', p: 'Recogida en Sueca con cita previa, entrega en mano en la comarca o envío a toda España.' },
];

/** Páginas de servicio. Alimentan el pie y los enlaces cruzados. */
export const SERVICIOS = [
  { ruta: 'trofeos-personalizados', nombre: 'Trofeos personalizados', corto: 'Trofeos' },
  { ruta: 'medallas-personalizadas', nombre: 'Medallas personalizadas', corto: 'Medallas' },
  { ruta: 'placas-personalizadas', nombre: 'Placas personalizadas', corto: 'Placas' },
  { ruta: 'llaveros-personalizados', nombre: 'Llaveros y merchandising', corto: 'Llaveros' },
  { ruta: 'soportes-qr-nfc-restaurantes', nombre: 'Soportes QR y NFC para restaurantes', corto: 'Cartas QR' },
  { ruta: 'impresion-3d-personalizada', nombre: 'Impresión 3D personalizada', corto: 'Impresión 3D' },
];

/** Páginas por tipo de cliente o evento. */
export const CLIENTES = [
  { ruta: 'trofeos-carreras-populares', nombre: 'Carreras populares' },
  { ruta: 'trofeos-clubes-deportivos', nombre: 'Clubes deportivos' },
  { ruta: 'trofeos-fallas', nombre: 'Fallas' },
  { ruta: 'trofeos-empresas', nombre: 'Empresas' },
];

/** Zonas con página propia. `localidades` alimenta areaServed y la lista visible. */
export const ZONAS = [
  {
    ruta: 'trofeos-personalizados-valencia',
    nombre: 'València y l’Horta Sud',
    corto: 'València',
    localidades: ['València', 'Aldaia', 'Alaquàs', 'Torrent', 'Xirivella', 'Picanya', 'Paiporta', 'Catarroja', 'Massanassa', 'Alfafar', 'Benetússer', 'Sedaví', 'Silla', 'Albal', 'Picassent', 'Quart de Poblet', 'Manises', 'Paterna', 'Mislata', 'Burjassot', 'Alboraia'],
  },
  {
    ruta: 'trofeos-personalizados-ribera-baixa',
    nombre: 'Ribera Baixa: Sueca y Cullera',
    corto: 'Ribera Baixa',
    localidades: ['Sueca', 'Cullera', 'El Mareny de Barraquetes', 'El Perelló', 'Sollana', 'Almussafes', 'Albalat de la Ribera', 'Polinyà de Xúquer', 'Riola', 'Fortaleny', 'Corbera', 'Llaurí', 'Favara', 'Benicull de Xúquer'],
  },
  {
    ruta: 'trofeos-personalizados-la-safor',
    nombre: 'La Safor: Gandia y Oliva',
    corto: 'La Safor',
    localidades: ['Gandia', 'Oliva', 'Tavernes de la Valldigna', 'Xeraco', 'Xeresa', 'Bellreguard', 'Daimús', 'Miramar', 'Piles', 'Guardamar de la Safor', 'Benirredrà', 'Real de Gandia', 'Villalonga', 'Simat de la Valldigna', 'Benifairó de la Valldigna'],
  },
];

/**
 * Pueblos de la Ribera con página propia de impresión 3D
 * (/impresion-3d-<slug>/). km y minutos son aproximados desde el taller
 * de Sueca; `vecinos` son slugs de otros pueblos de esta lista.
 */
export const PUEBLOS = [
  { slug: 'sueca', nombre: 'Sueca', km: 0, min: 0, vecinos: ['riola', 'albalat-de-la-ribera', 'cullera', 'sollana'] },
  { slug: 'albalat-de-la-ribera', nombre: 'Albalat de la Ribera', km: 5, min: 8, vecinos: ['sueca', 'polinya-de-xuquer', 'riola', 'alzira'] },
  { slug: 'polinya-de-xuquer', nombre: 'Polinyà de Xúquer', km: 7, min: 10, vecinos: ['albalat-de-la-ribera', 'benicull-de-xuquer', 'riola', 'alzira'] },
  { slug: 'benicull-de-xuquer', nombre: 'Benicull de Xúquer', km: 8, min: 12, vecinos: ['polinya-de-xuquer', 'albalat-de-la-ribera', 'alzira'] },
  { slug: 'riola', nombre: 'Riola', km: 4, min: 6, vecinos: ['sueca', 'fortaleny', 'polinya-de-xuquer', 'albalat-de-la-ribera'] },
  { slug: 'fortaleny', nombre: 'Fortaleny', km: 6, min: 9, vecinos: ['riola', 'sueca', 'corbera', 'llauri'] },
  { slug: 'corbera', nombre: 'Corbera', km: 11, min: 15, vecinos: ['llauri', 'fortaleny', 'alzira', 'favara'] },
  { slug: 'llauri', nombre: 'Llaurí', km: 9, min: 13, vecinos: ['corbera', 'favara', 'fortaleny', 'cullera'] },
  { slug: 'favara', nombre: 'Favara', km: 9, min: 12, vecinos: ['cullera', 'llauri', 'corbera', 'sueca'] },
  { slug: 'cullera', nombre: 'Cullera', km: 10, min: 12, vecinos: ['sueca', 'favara', 'llauri'] },
  { slug: 'sollana', nombre: 'Sollana', km: 10, min: 12, vecinos: ['sueca', 'almussafes', 'albalat-de-la-ribera'] },
  { slug: 'almussafes', nombre: 'Almussafes', km: 15, min: 17, vecinos: ['sollana', 'sueca', 'alzira'] },
  { slug: 'alzira', nombre: 'Alzira', km: 20, min: 22, vecinos: ['albalat-de-la-ribera', 'polinya-de-xuquer', 'corbera', 'almussafes'] },
];

/** Categorías del blog. Solo tienen página las que ya tienen artículos. */
export const CATEGORIAS = [
  { slug: 'precios-y-plazos', nombre: 'Precios y plazos' },
  { slug: 'materiales-e-impresion-3d', nombre: 'Materiales e impresión 3D' },
  { slug: 'ideas-por-evento', nombre: 'Ideas por evento' },
  { slug: 'casos', nombre: 'Casos' },
];

/** Enlaces del pie. */
export const PIE = {
  servicios: [...SERVICIOS.map((s) => ({ url: `/${s.ruta}/`, texto: s.nombre })), { url: '/trabajos/', texto: 'Trabajos realizados' }, { url: '/galeria/', texto: 'Galería' }],
  zonas: [
    ...ZONAS.map((z) => ({ url: `/${z.ruta}/`, texto: z.nombre })),
    ...PUEBLOS.filter((p) => ['sueca', 'albalat-de-la-ribera', 'alzira', 'cullera'].includes(p.slug)).map((p) => ({ url: `/impresion-3d-${p.slug}/`, texto: `Impresión 3D en ${p.nombre}` })),
    { url: '/impresion-3d-personalizada/#pueblos', texto: 'Todos los pueblos de la Ribera' },
  ],
  blog: [
    { url: '/blog/', texto: 'Todos los artículos' },
    ...CATEGORIAS.map((c) => ({ url: `/blog/${c.slug}/`, texto: c.nombre })),
    ...CLIENTES.map((c) => ({ url: `/${c.ruta}/`, texto: `Trofeos para ${c.nombre.toLowerCase()}` })),
  ],
};
