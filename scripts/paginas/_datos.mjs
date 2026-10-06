// ============================================================
//  Datos compartidos por todas las páginas interiores (SEO).
//  Un solo sitio para el negocio, las zonas, los servicios y los
//  pasos del proceso: así el JSON-LD, el pie y los textos no se
//  desincronizan.
// ============================================================

export const DOMINIO = 'https://piq3d.com';

/** Versión de public/css/paginas.css. Súbela cada vez que cambie (nginx cachea el CSS un año). */
export const CSS_VERSION = 1;
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

/** Páginas de servicio (las que existen hoy). Alimentan el pie y los enlaces cruzados. */
export const SERVICIOS = [
  { ruta: 'trofeos-personalizados', nombre: 'Trofeos personalizados', corto: 'Trofeos' },
  { ruta: 'medallas-personalizadas', nombre: 'Medallas personalizadas', corto: 'Medallas' },
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

/** Enlaces del pie. El blog se añadirá en la fase B. */
export const PIE = {
  servicios: [...SERVICIOS.map((s) => ({ url: `/${s.ruta}/`, texto: s.nombre })), { url: '/trabajos/', texto: 'Trabajos realizados' }, { url: '/galeria/', texto: 'Galería' }],
  zonas: ZONAS.map((z) => ({ url: `/${z.ruta}/`, texto: z.nombre })),
  blog: [],
};
