// ============================================================
//  Blog: /blog/, /blog/<categoria>/ (solo las categorías con
//  artículos) y /blog/<slug>/. Los artículos se escriben aquí, en
//  HTML, para que se lean igual en el fichero que en la página.
// ============================================================

import { CATEGORIAS } from './_datos.mjs';
import { ARTICULOS_2 } from './articulos-2.mjs';

const CAT = Object.fromEntries(CATEGORIAS.map((c) => [c.slug, c]));

export const ARTICULOS = [
  // ----------------------------------------------------------
  {
    slug: 'cuanto-cuesta-un-trofeo-personalizado',
    titulo: 'Cuánto cuesta un trofeo personalizado y de qué depende el precio',
    h1: ['Cuánto cuesta', 'un trofeo personalizado'],
    title: 'Cuánto cuesta un trofeo personalizado | PIQ3D',
    description: 'De qué depende el precio de un trofeo personalizado: tamaño, colores, cantidad, diseño y plazo. Con ejemplos reales y cómo pedir presupuesto.',
    resumen: 'Los seis factores que mueven el precio de un trofeo, qué no pagas con la impresión 3D y cómo pedir un presupuesto que sea exacto a la primera.',
    categoria: 'precios-y-plazos',
    fecha: '2026-10-06',
    fechaBonita: '6 de octubre de 2026',
    lectura: 7,
    imagen: { src: 'public/img/fibravalencia.webp', w: 1600, h: 1600, alt: 'Trofeo personalizado impreso en 3D con columna retorcida blanca y base magenta' },
    servicio: { url: '/trofeos-personalizados/', texto: 'Trofeos personalizados impresos en 3D' },
    cuerpo: `
<p>Es la primera pregunta que nos hacen por WhatsApp y la más difícil de responder con una cifra: <strong>depende</strong>. No por escurrir el bulto, sino porque un trofeo de 12 cm en un color y otro de 35 cm con un busto, cuatro colores y tres piezas ensambladas no tienen nada que ver, aunque los dos se llamen «trofeo personalizado». Este artículo explica de qué depende el precio exactamente, qué cosas no pagas cuando el trofeo se imprime en 3D y cómo pedir un presupuesto para que sea exacto a la primera.</p>

<h2>La respuesta corta</h2>
<p>El precio de un trofeo impreso en 3D sale de cuatro cosas: <strong>cuánto material y cuántas horas de impresora</strong> necesita (tamaño), <strong>cuántos colores y piezas</strong> lleva (complejidad), <strong>cuántas unidades</strong> pides (tirada) y <strong>con cuánto margen</strong> lo pides (plazo). El diseño, en nuestro caso, no suma: va incluido. Si nos mandas el escudo, la cantidad y la fecha, el presupuesto te llega el mismo día.</p>

<h2>Los seis factores que mueven el precio</h2>

<h3>1. El tamaño</h3>
<p>Es el factor que más pesa. Una pieza impresa en 3D cuesta, sobre todo, tiempo de máquina y gramos de material, y los dos crecen con el volumen. Un trofeo de 25 cm no cuesta el doble que uno de 12: cuesta bastante más, porque el volumen crece al cubo. Por eso, cuando el presupuesto aprieta, lo primero que proponemos es ajustar la altura, no quitar el escudo.</p>

<h3>2. Los colores y las piezas</h3>
<p>Nuestras impresoras cambian de filamento automáticamente, así que un trofeo puede llevar hasta cuatro colores en una sola pieza sin pintar nada. Pero cada cambio de color añade tiempo. Y algunos diseños se imprimen en varias partes que luego se ensamblan (la columna, el balón, la placa): más piezas, más trabajo de taller. Un trofeo de un color en una pieza es la opción más económica; uno de cuatro colores en tres piezas, la más cara con el mismo tamaño.</p>

<h3>3. La cantidad</h3>
<p>Aquí es donde la impresión 3D juega a tu favor. El diseño se hace una vez y la granja de impresoras trabaja en paralelo, así que doce trofeos no cuestan doce veces uno. Y en medallas, que son planas y caben muchas por bandeja, el precio por unidad baja mucho a partir de unas decenas. Si tienes que elegir entre cuatro trofeos grandes o doce medianos, pide las dos opciones: la segunda suele sorprender.</p>

<h3>4. El diseño</h3>
<p>En un fabricante tradicional, un diseño propio se paga aparte (horas de modelado, molde o matriz) o directamente no existe: eliges del catálogo. Nosotros incluimos el diseño 3D en el presupuesto, también para una pieza única. Lo que sí influye es la <strong>complejidad</strong>: un busto modelado a partir de fotografías, como el del <a href="/trabajos/trofeu-antonio-puchades/">Trofeu Antonio Puchades</a>, requiere más horas que una columna con un escudo, y eso se nota en el total aunque el concepto «diseño» no aparezca como línea aparte.</p>

<h3>5. El acabado</h3>
<p>Los filamentos metalizados (dorado, plateado, bronce) cuestan algo más que los mates, y las piezas con mucho detalle se imprimen con capa más fina, que es más lenta. Son diferencias pequeñas en una unidad y apreciables en una tirada.</p>

<h3>6. El plazo y la entrega</h3>
<p>Con tres o cuatro semanas de margen, el pedido entra en la planificación normal del taller. Con una semana, hay que reorganizar máquinas y a veces renunciar al prototipo; eso puede tener coste. La entrega en mano en la Ribera, l’Horta Sud y la Safor no se cobra; el envío por mensajería al resto de España va detallado en el presupuesto.</p>

<h2>Lo que no pagas con la impresión 3D</h2>
<ul>
<li><strong>El diseño</strong>, incluido siempre.</li>
<li><strong>Moldes, matrices o clichés</strong>: no existen. Cada pieza sale directamente del archivo.</li>
<li><strong>Pedido mínimo</strong>: una unidad es un pedido válido.</li>
<li><strong>Variantes de texto</strong>: cada trofeo puede llevar su categoría, su puesto o su nombre sin recargo.</li>
<li><strong>Repetir el año que viene</strong>: el archivo queda guardado; la segunda edición no paga diseño.</li>
</ul>

<h2>Tres ejemplos reales (sin cifras, con lógica)</h2>
<p>No publicamos precios porque cada pieza es distinta, pero sí podemos contarte qué pesó en cada presupuesto:</p>
<table>
<tr><th>Trabajo</th><th>Lo que más pesó</th><th>Lo que lo abarató</th></tr>
<tr><td><a href="/trabajos/volta-a-peu-fibravalencia/">Volta a Peu FibraValencia</a>: 12 trofeos de 24 cm, dos colores</td><td>El tamaño y las dos piezas (columna y base)</td><td>Doce unidades del mismo diseño, con solo el texto distinto</td></tr>
<tr><td><a href="/trabajos/trofeu-pepe-soler/">Trofeu Pepe Soler</a>: 2 trofeos de 28 cm, cuatro colores</td><td>Cuatro colores en cuatro piezas ensambladas</td><td>Solo dos unidades y un diseño sencillo de modelar</td></tr>
<tr><td><a href="/trabajos/10k-sense-limits/">10K Sense Límits</a>: 500 medallas de 8 cm, cuatro colores</td><td>La cantidad total de material</td><td>Pieza plana y fina: muchas por bandeja, precio por unidad muy bajo</td></tr>
</table>

<div class="aviso">
<p><strong>¿Quieres saber cuánto costaría el tuyo?</strong></p>
<p>Mándanos el escudo, la cantidad y la fecha por WhatsApp y te pasamos presupuesto en el día, con el diseño incluido. Más sobre lo que hacemos en <a href="/trofeos-personalizados/">trofeos personalizados impresos en 3D</a>.</p>
</div>

<h2>Cómo pedir presupuesto para que sea exacto a la primera</h2>
<ol>
<li><strong>El escudo o el logotipo</strong> en la mejor resolución que tengas (vale una foto nítida).</li>
<li><strong>Qué se premia</strong>: categorías, puestos, nombres si los sabes.</li>
<li><strong>Cuántas unidades</strong>, aunque sea aproximado.</li>
<li><strong>Para cuándo</strong> y dónde se entrega.</li>
<li><strong>Una referencia</strong>, si la tienes: una foto de algo que te guste o un tamaño orientativo («como una botella de agua»).</li>
</ol>
<p>Con eso te devolvemos una propuesta con renders y precio cerrado. Si el precio no encaja, ajustamos tamaño, colores o cantidad hasta que encaje: casi siempre hay una versión del mismo diseño que entra en el presupuesto.</p>

<h2>Preguntas rápidas</h2>
<h3>¿Un trofeo impreso en 3D es más caro que uno de catálogo?</h3>
<p>Una copa genérica de plástico dorado es más barata que cualquier pieza diseñada a medida. Un trofeo de catálogo de gama media con placa grabada, en cambio, suele costar parecido o más que el nuestro, y no lleva tu escudo en relieve. En tiradas de medallas, la impresión 3D es muy competitiva.</p>
<h3>¿Se puede abaratar sin que se note?</h3>
<p>Sí: reducir la altura un 20 % baja el precio mucho más de un 20 %; pasar de cuatro colores a dos apenas se nota si el escudo está bien diseñado; y agrupar categorías en el mismo modelo con textos distintos no cuesta nada.</p>
<h3>¿Cobráis el diseño si al final no encargo?</h3>
<p>No. Los renders iniciales forman parte del presupuesto. Solo empezamos a producir cuando lo apruebas.</p>
`,
  },
  // ----------------------------------------------------------
  {
    slug: 'trofeos-impresos-en-3d-vs-tradicionales',
    titulo: 'Trofeos impresos en 3D frente a trofeos tradicionales: ventajas y diferencias',
    h1: ['Trofeos impresos en 3D', 'frente a tradicionales'],
    title: 'Trofeos impresos en 3D frente a tradicionales | PIQ3D',
    description: 'Qué cambia entre un trofeo de catálogo y uno impreso en 3D: diseño, escudo, cantidades, plazos, material y precio. Lo que gana cada uno, sin trampas.',
    resumen: 'Cómo se fabrica cada tipo de trofeo, dónde gana la impresión 3D, dónde sigue ganando el metal y cómo elegir según tu evento.',
    categoria: 'materiales-e-impresion-3d',
    fecha: '2026-10-06',
    fechaBonita: '6 de octubre de 2026',
    lectura: 8,
    imagen: { src: 'public/img/futsal-sueca.webp', w: 1402, h: 2048, alt: 'Trofeos de fútbol sala impresos en 3D, negros con balón dorado y escudo del club' },
    servicio: { url: '/trofeos-personalizados/', texto: 'Trofeos personalizados impresos en 3D' },
    cuerpo: `
<p>Durante décadas, encargar un trofeo ha sido abrir un catálogo: copa, columna, figura, placa, y a elegir entre tamaños. La impresión 3D cambia la pregunta: ya no es «cuál elijo», sino «qué quiero que sea». Pero no todo son ventajas, y conviene saber dónde gana cada tecnología antes de decidir. Esto es lo que hemos aprendido fabricando trofeos para clubes y carreras de la Ribera y València.</p>

<h2>Cómo se fabrica un trofeo tradicional</h2>
<p>El trofeo de catálogo se produce en serie: copas y figuras de zamak, plástico metalizado o resina, fabricadas con moldes en grandes cantidades, que el distribuidor combina con columnas y bases de mármol o madera. La personalización llega al final: una placa grabada con el nombre del torneo y, a veces, una pegatina o un medallón con el escudo.</p>
<p>Es un sistema eficiente para lo que es: piezas genéricas, baratas en gamas bajas, con acabados cromados que brillan en la foto. Su límite es que el trofeo del torneo de tu club es el mismo que el del torneo del pueblo de al lado, y el escudo es un añadido.</p>

<h2>Cómo se fabrica un trofeo impreso en 3D</h2>
<p>Un trofeo impreso en 3D nace de un archivo que se modela para ese evento. El escudo, el balón, el busto o la huella se dibujan en volumen y se imprimen capa a capa (en nuestro caso, con impresoras FDM y capas de 0,2 mm) en PLA, un plástico de origen vegetal. Las impresoras cambian de color automáticamente, así que el escudo sale con sus colores integrados en la pieza, sin pintar ni pegar.</p>
<p>No hay moldes: cada unidad sale directamente del archivo. Eso permite que cada trofeo lleve un texto distinto, que se fabrique una sola pieza o mil, y que el año que viene se repita el mismo diseño cambiando la fecha.</p>

<h2>Dónde gana la impresión 3D</h2>
<h3>El diseño es tuyo</h3>
<p>La columna retorcida de la <a href="/trabajos/volta-a-peu-fibravalencia/">Volta a Peu FibraValencia</a> o la huella de hojas de <a href="/trabajos/volta-a-peu-la-canyada/">La Canyada</a> no existen en ningún catálogo. Un trofeo propio se reconoce en la foto y se recuerda.</p>
<h3>El escudo forma parte de la pieza</h3>
<p>En relieve, a color y a la escala que quieras. No es una pegatina que se despega ni un grabado que apenas se ve.</p>
<h3>Variantes sin coste</h3>
<p>Doce categorías son doce textos en el mismo archivo. Cuarenta debutantes son cuarenta nombres. Campeón en dorado y subcampeón en plateado es un cambio de color.</p>
<h3>Sin mínimos y sin moldes</h3>
<p>Una pieza única cuesta lo que cuesta imprimirla. No hay «coste de arranque».</p>
<h3>Repetible</h3>
<p>El archivo se guarda. La SD Sueca repitió el <a href="/trabajos/trofeu-antonio-puchades/">Trofeu Antonio Puchades</a> en 2026 cambiando solo el año.</p>
<h3>Ligero y biodegradable</h3>
<p>El PLA pesa poco (una ventaja cuando hay que llevar quince trofeos al podio) y es un material de origen vegetal, biodegradable en condiciones industriales.</p>
<h3>Plazos</h3>
<p>Con una granja de impresoras trabajando en paralelo, una docena de trofeos o quinientas medallas salen en días. No dependes del stock de un distribuidor.</p>

<h2>Dónde sigue ganando el tradicional</h2>
<p>Seríamos poco honestos si dijéramos que la impresión 3D gana en todo.</p>
<ul>
<li><strong>Peso y tacto metálico.</strong> Una copa de zamak pesa y se siente «de metal». El PLA es ligero; a quien busque esa sensación de peso, no se la vamos a dar (aunque podemos lastrar la base).</li>
<li><strong>Brillo cromado.</strong> Los filamentos metalizados quedan muy bien, pero no son un cromado de espejo.</li>
<li><strong>Precio en gamas muy bajas.</strong> Una copa genérica de plástico dorado de 15 cm, comprada por cientos, es más barata que cualquier pieza diseñada a medida. Si lo único que importa es el precio y no el diseño, el catálogo gana.</li>
<li><strong>Calor.</strong> El PLA se ablanda a partir de unos 55-60 °C. Un trofeo no va a pasar calor en una vitrina, pero no lo dejes en el salpicadero de un coche en agosto.</li>
</ul>

<h2>Durabilidad y acabado: lo que hay que saber del PLA</h2>
<p>El PLA es rígido, no se raya con facilidad y aguanta años en interior sin cambiar de color. Las líneas de capa, propias de la impresión FDM, forman parte del acabado: en un buen diseño se orientan para que trabajen a favor (en una columna retorcida siguen la torsión; en un balón, los gajos). Las piezas con mucho detalle, como un busto, se imprimen con capa más fina. Se limpia con un paño húmedo; no necesita más.</p>

<h2>Cuál elegir según el evento</h2>
<table>
<tr><th>Si tu evento…</th><th>Te conviene</th></tr>
<tr><td>Tiene escudo o logotipo propio y quieres que se vea</td><td>Impresión 3D</td></tr>
<tr><td>Se repite cada año</td><td>Impresión 3D (el archivo se guarda)</td></tr>
<tr><td>Necesita muchas variantes de texto</td><td>Impresión 3D</td></tr>
<tr><td>Son cientos de medallas iguales</td><td>Impresión 3D, muy competitiva en precio</td></tr>
<tr><td>Busca el peso y el brillo de una copa clásica</td><td>Tradicional</td></tr>
<tr><td>Solo importa el precio más bajo posible</td><td>Tradicional de gama baja</td></tr>
</table>

<div class="aviso">
<p><strong>¿Quieres ver cómo sería el tuyo?</strong></p>
<p>Mándanos el escudo y te enviamos una propuesta con renders, sin compromiso. Más en <a href="/trofeos-personalizados/">trofeos personalizados impresos en 3D</a> y en <a href="/medallas-personalizadas/">medallas personalizadas</a>.</p>
</div>

<h2>Preguntas rápidas</h2>
<h3>¿Un trofeo impreso en 3D se rompe fácil?</h3>
<p>No. El PLA es rígido y las piezas se diseñan con grosores suficientes. Se puede romper si se cae desde alto sobre un suelo duro, como cualquier trofeo de resina.</p>
<h3>¿Se nota que es impreso en 3D?</h3>
<p>Sí, y es parte de su carácter: las líneas de capa se ven de cerca. Bien orientadas, aportan textura; con capa fina, casi desaparecen.</p>
<h3>¿Puedo mezclar las dos cosas?</h3>
<p>Sí. Algunos clientes piden una base de madera o mármol tradicional con la figura impresa en 3D encima. Se puede hacer.</p>
`,
  },
];

/* ---------- páginas ---------- */

const enriquecido = [...ARTICULOS, ...ARTICULOS_2].map((a) => ({ ...a, categoriaNombre: CAT[a.categoria].nombre }));
const categoriasConArticulos = CATEGORIAS.filter((c) => enriquecido.some((a) => a.categoria === c.slug));

const paginaArticulo = (a) => {
  const otros = enriquecido.filter((o) => o.slug !== a.slug);
  return {
    ruta: `blog/${a.slug}`,
    tipo: 'articulo',
    etiqueta: a.categoriaNombre,
    title: a.title,
    description: a.description,
    h1: a.h1,
    migaActual: a.titulo,
    migas: [{ nombre: 'Blog', url: '/blog/' }, { nombre: a.categoriaNombre, url: `/blog/${a.categoria}/` }],
    meta: `${a.fechaBonita} · ${a.lectura} min de lectura · PIQ3D`,
    intro: a.resumen,
    ogImagen: a.imagen.src,
    ogTitulo: a.titulo,
    ogTipo: 'article',
    articulo: { imagen: a.imagen.src, fecha: a.fecha, categoria: a.categoriaNombre },
    bloques: [
      { tipo: 'cuerpo', html: a.cuerpo },
      {
        tipo: 'relacionados',
        h2: 'Sigue leyendo',
        enlaces: [...otros.map((o) => ({ url: `/blog/${o.slug}/`, texto: o.titulo })), a.servicio, { url: '/trabajos/', texto: 'Trabajos realizados' }, { url: '/blog/', texto: 'Todos los artículos' }],
      },
    ],
    cta: { titulo: '¿Hablamos?', texto: 'Mándanos el escudo, la cantidad y la fecha y te pasamos presupuesto con el diseño incluido.' },
  };
};

const paginaCategoria = (c) => ({
  ruta: `blog/${c.slug}`,
  tipo: 'indice',
  etiqueta: 'Blog',
  title: `${c.nombre}: artículos del blog | PIQ3D`,
  description: `Artículos de PIQ3D sobre ${c.nombre.toLowerCase()}: trofeos, medallas e impresión 3D explicados por quien los diseña e imprime en Sueca.`,
  h1: [c.nombre],
  migaActual: c.nombre,
  migas: [{ nombre: 'Blog', url: '/blog/' }],
  intro: `Todo lo que hemos escrito sobre ${c.nombre.toLowerCase()}.`,
  ogImagen: enriquecido.find((a) => a.categoria === c.slug).imagen.src,
  ogTitulo: `Blog: ${c.nombre}`,
  lista: enriquecido.filter((a) => a.categoria === c.slug).map((a) => `/blog/${a.slug}/`),
  bloques: [
    { tipo: 'articulos', h2: c.nombre, articulos: enriquecido.filter((a) => a.categoria === c.slug) },
    { tipo: 'relacionados', h2: 'Otras categorías', enlaces: [...categoriasConArticulos.filter((o) => o.slug !== c.slug).map((o) => ({ url: `/blog/${o.slug}/`, texto: o.nombre })), { url: '/blog/', texto: 'Todos los artículos' }, { url: '/trofeos-personalizados/', texto: 'Trofeos personalizados' }] },
  ],
});

const paginaBlog = () => ({
  ruta: 'blog',
  tipo: 'indice',
  etiqueta: 'Blog',
  title: 'Blog: trofeos, medallas e impresión 3D | PIQ3D',
  description: 'Precios, plazos, materiales e ideas para trofeos, medallas y merchandising impresos en 3D, explicados por el taller que los fabrica en Sueca.',
  h1: ['El blog', 'de PIQ3D'],
  migaActual: 'Blog',
  intro: 'Lo que nos preguntan por WhatsApp, contestado con calma: cuánto cuesta un trofeo, qué cambia con la impresión 3D, cómo encargar medallas para una carrera y qué hemos aprendido en cada trabajo.',
  ogImagen: 'public/img/pepe-soler.webp',
  ogTitulo: 'El blog de PIQ3D',
  lista: enriquecido.map((a) => `/blog/${a.slug}/`),
  bloques: [
    { tipo: 'articulos', h2: 'Últimos artículos', articulos: enriquecido },
    { tipo: 'relacionados', h2: 'Por categoría', enlaces: [...categoriasConArticulos.map((c) => ({ url: `/blog/${c.slug}/`, texto: c.nombre })), { url: '/trabajos/', texto: 'Trabajos realizados' }] },
  ],
  cta: { titulo: '¿Hablamos?', texto: 'Si tu duda no está aquí, escríbenos por WhatsApp: respondemos en el día.' },
});

export const BLOG_PAG = [paginaBlog(), ...categoriasConArticulos.map(paginaCategoria), ...enriquecido.map(paginaArticulo)];
