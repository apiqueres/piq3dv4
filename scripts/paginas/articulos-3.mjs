// ============================================================
//  Artículos 9 a 11: guía del escudo, pádel y olimpiadas escolares.
// ============================================================

export const ARTICULOS_3 = [
  // ----------------------------------------------------------
  {
    slug: 'como-disenar-trofeo-con-escudo-del-club',
    titulo: 'Cómo diseñar un trofeo con el escudo de tu club: qué enviar y qué se puede hacer',
    h1: ['Cómo diseñar un trofeo', 'con el escudo de tu club'],
    title: 'Cómo diseñar un trofeo con el escudo de tu club | PIQ3D',
    description: 'Qué imagen del escudo enviar, qué se puede modelar en relieve y qué no, cómo elegir colores y tamaño, y cómo aprobar el diseño antes de imprimir el trofeo.',
    resumen: 'Guía práctica para que el escudo de tu club quede perfecto en un trofeo impreso en 3D: qué archivo enviar, qué detalles se simplifican y cómo revisar los renders.',
    categoria: 'materiales-e-impresion-3d',
    fecha: '2026-10-06',
    fechaBonita: '6 de octubre de 2026',
    lectura: 8,
    imagen: { src: 'public/img/galeria/futsal-sueca.webp', w: 1095, h: 1600, alt: 'Escudo del FS Sueca en relieve dorado sobre un trofeo negro impreso en 3D' },
    servicio: { url: '/trofeos-clubes-deportivos/', texto: 'Trofeos para clubes deportivos' },
    cuerpo: `
<p>El escudo es lo que convierte un trofeo cualquiera en el trofeo de tu club. En un trofeo de catálogo acaba en una pegatina; en uno impreso en 3D está modelado en relieve, con sus colores, formando parte de la pieza. Para que quede bien hay que tomar unas cuantas decisiones antes de imprimir, y casi todas dependen de lo que nos envíes. Esta guía explica qué necesitamos, qué se puede hacer con un escudo y qué no, y cómo revisar el diseño para que la primera impresión sea la buena.</p>

<h2>Qué imagen del escudo enviar</h2>
<p>De mejor a peor:</p>
<ol>
<li><strong>Archivo vectorial</strong> (SVG, AI, EPS, PDF con el escudo en vectores). Es el ideal: cada forma es una curva exacta y se puede extruir directamente. Si el club tiene diseñador o imprenta, lo tienen.</li>
<li><strong>PNG o JPG grande</strong>, de al menos 1.000 píxeles de ancho, con fondo liso. Suficiente para redibujarlo con precisión.</li>
<li><strong>Foto de una camiseta, una bandera o un cartel.</strong> Vale para empezar: redibujamos el escudo desde cero a partir de la foto. Lleva algo más de trabajo, pero va incluido.</li>
</ol>
<p>Lo que no funciona: una captura pequeña de redes sociales (el escudo sale borroso y los textos no se leen) o un escudo con marca de agua.</p>

<h2>Qué se puede modelar y qué se simplifica</h2>
<p>Un escudo se diseñó para verse plano, impreso o bordado. Pasarlo a volumen y a 0,2 mm de capa obliga a tomar decisiones:</p>
<ul>
<li><strong>Formas grandes</strong> (el contorno, las franjas, el balón, la corona): se modelan tal cual, en relieve.</li>
<li><strong>Textos</strong>: se mantienen si tienen más de 3 mm de altura de letra en el tamaño final. Por debajo, se simplifican o se dejan en color plano sin relieve.</li>
<li><strong>Degradados y sombras</strong>: no existen en impresión multicolor. Se convierten en dos tonos planos o se eliminan.</li>
<li><strong>Líneas muy finas</strong> (contornos de 0,3 mm, detalles de una pluma o una hoja): se engrosan a 0,8 mm como mínimo para que se impriman.</li>
<li><strong>Más de cuatro colores</strong>: nuestras impresoras cambian de filamento automáticamente hasta cuatro veces por pieza. Si el escudo tiene seis colores, agrupamos los parecidos.</li>
</ul>
<p>Nada de esto se nota a un metro de distancia, que es donde se mira un trofeo. Lo que sí se nota es un escudo que intenta reproducir cada detalle y acaba ilegible.</p>

<h2>Elegir el tamaño del escudo dentro del trofeo</h2>
<p>En un trofeo de 25-30 cm, el escudo suele medir entre 5 y 8 cm. Es el tamaño en el que los textos del escudo se leen y las formas mantienen su proporción. Si quieres que el escudo sea el protagonista (un trofeo que sea básicamente el escudo en volumen sobre una base), puede ocupar 15 o 20 cm; entonces admite muchos más detalles.</p>
<p>En medallas y llaveros (4-8 cm en total), el escudo va a 2-4 cm y se simplifica más: contorno, colores principales y, como mucho, las iniciales.</p>

<h2>Colores: los del club o los del trofeo</h2>
<p>Dos caminos, los dos válidos:</p>
<ul>
<li><strong>Escudo con sus colores reales</strong> sobre un trofeo neutro (blanco, negro o gris). Es la opción más fiel y la que mejor funciona para fútbol base, donde el escudo es lo que los niños reconocen.</li>
<li><strong>Escudo en un solo color metalizado</strong> (dorado, plateado) sobre el trofeo. Más sobrio, más «trofeo». Es lo que hizo el FS Sueca en el <a href="/trabajos/torneig-ciutat-de-sueca/">Torneig Ciutat de Sueca</a>: escudo dorado sobre negro.</li>
</ul>
<p>Para campeón y subcampeón, el truco habitual es dejar el trofeo igual y cambiar el metalizado: dorado para uno, plateado para otro.</p>

<h2>Dónde va el escudo</h2>
<p>Depende del trofeo, pero hay tres sitios que siempre funcionan: en el frente de la columna, a la altura de los ojos cuando el trofeo está en una mesa; en la base, junto al texto, cuando la parte alta la ocupa una figura (un balón, un busto); o como remate superior, cuando el escudo es el motivo principal. Lo que no recomendamos: en la parte trasera o en un lateral, donde no sale en la foto del podio.</p>

<h2>Cómo revisar los renders antes de aprobar</h2>
<p>Te enviamos imágenes del trofeo desde varios ángulos. Revisa cinco cosas:</p>
<ol>
<li>Que el escudo tiene los colores correctos (compáralo con la camiseta, no con la memoria).</li>
<li>Que el nombre del club y los textos del escudo están bien escritos.</li>
<li>Que el escudo no está deformado: a veces, al adaptarlo a una superficie curva, hay que decidir si se curva con ella o se mantiene plano.</li>
<li>Que el tamaño del escudo respecto al trofeo te parece bien.</li>
<li>Que el texto de la base (torneo, categoría, año) es el definitivo.</li>
</ol>
<p>Si hay dudas sobre cómo quedará el relieve, pedimos un prototipo: una unidad impresa que tienes en la mano antes de lanzar la serie.</p>

<h2>El escudo se modela una vez y sirve para todo</h2>
<p>Una vez modelado en 3D, el escudo de tu club queda guardado. Sirve para los trofeos de este año y del siguiente, para las medallas de la cantera, para las <a href="/placas-personalizadas/">placas de debutante</a> y para los <a href="/llaveros-personalizados/">llaveros</a> de la afición. No se vuelve a pagar ni a revisar: solo cambia lo que va alrededor.</p>

<h2>Sobre los derechos del escudo</h2>
<p>Modelamos escudos para el club que los posee o para quien tiene su autorización (un organizador de torneo, por ejemplo). Si quieres un trofeo con el escudo de un club profesional, necesitamos que la entidad lo autorice; en el <a href="/trabajos/juntos-por-super-ivan/">trofeo solidario de Cullera</a>, el escudo de la Valencia CF Academia lo aportó la propia organización del evento.</p>

<div class="aviso">
<p><strong>¿Tienes el escudo a mano?</strong></p>
<p>Mándanoslo por WhatsApp con el nombre del torneo y las categorías, y te devolvemos renders y presupuesto con el diseño incluido. Más en <a href="/trofeos-clubes-deportivos/">trofeos para clubes deportivos</a>.</p>
</div>
`,
  },
  // ----------------------------------------------------------
  {
    slug: 'ideas-trofeos-padel',
    titulo: 'Ideas de trofeos para torneos de pádel: pala, pelota y red en 3D',
    h1: ['Ideas de trofeos', 'para torneos de pádel'],
    title: 'Ideas de trofeos para torneos de pádel | PIQ3D',
    description: 'Siete ideas de trofeos de pádel impresos en 3D para torneos de club, americanos y ligas: pala, pelota, red, trofeo por parejas y medallas.',
    resumen: 'La pala con el logotipo, la pelota sobre la red, el trofeo por parejas: siete ideas para un torneo de pádel que no quiera la copa de siempre.',
    categoria: 'ideas-por-evento',
    fecha: '2026-10-06',
    fechaBonita: '6 de octubre de 2026',
    lectura: 6,
    imagen: { src: 'public/img/futsal-sueca.webp', w: 1402, h: 2048, alt: 'Trofeos impresos en 3D con balón dorado sobre columna, concepto aplicable a trofeos de pádel' },
    servicio: { url: '/trofeos-padel/', texto: 'Trofeos para pádel' },
    cuerpo: `
<p>El pádel es el deporte que más torneos genera por metro cuadrado: americanos de un día, ligas de club, torneos de empresa, circuitos entre pueblos. Y casi todos entregan la misma copa con una pala dorada de catálogo. Como se juega por parejas y por categorías, un torneo de pádel necesita muchos trofeos a la vez, y ahí es donde un diseño propio, impreso en 3D y repetido con textos distintos, tiene más sentido que en ningún otro deporte. Siete ideas, de la más clásica a la más distinta.</p>

<h2>1. La pala con el logotipo del torneo</h2>
<p>La pala es el símbolo del pádel y se presta a todo: en volumen, a escala, con el logotipo del torneo o del club en relieve en la cara. Lo que la diferencia de la pala de catálogo es que la forma, el color y el agujereado se diseñan para ese torneo. Sobre una base con la categoría y el puesto.</p>

<h2>2. La pelota sobre la red</h2>
<p>Una red de pádel a escala, con la pelota pasando por encima, sobre una base rectangular que recuerda la pista. Se reconoce al instante y da mucho juego para distinguir puestos: la pelota dorada para los campeones, plateada para los finalistas.</p>

<h2>3. El trofeo por parejas</h2>
<p>En pádel ganan dos. Un trofeo pensado para repartirse: dos piezas que encajan (dos palas cruzadas que se separan, una pista que se parte por la red), una para cada jugador, con el nombre de cada uno en relieve. Es el trofeo que más se recuerda, porque cada jugador se lleva el suyo y los dos forman uno.</p>

<h2>4. La pista en miniatura</h2>
<p>La pista de pádel vista desde arriba, con las paredes de cristal, la red y las líneas, sobre una base. El logotipo del torneo en el centro de la pista. Para torneos de club que se juegan siempre en las mismas instalaciones, se puede modelar con el aspecto real de la pista.</p>

<h2>5. El escudo del club con la pala</h2>
<p>Para clubes con escudo propio: el escudo en relieve y a color, con una pala cruzada detrás. Mismo diseño para todas las categorías, texto distinto en la base. Cómo se prepara el escudo lo explicamos en <a href="/blog/como-disenar-trofeo-con-escudo-del-club/">cómo diseñar un trofeo con el escudo de tu club</a>.</p>

<h2>6. Medallas para el americano</h2>
<p>En un americano o un torneo de un día, lo que quiere la gente es llevarse algo. Medallas con la pelota en relieve, el nombre del torneo y la fecha, para todos los participantes, y trofeos solo para la pareja ganadora. Cien medallas salen en pocos días. Más en <a href="/medallas-personalizadas/">medallas personalizadas</a>.</p>

<h2>7. El trofeo de la liga, que se repite cada temporada</h2>
<p>Las ligas de club se repiten cada año y cada categoría. Diseñar un trofeo una vez y guardar el archivo permite entregar cada temporada el mismo trofeo con el año cambiado, y que el club acumule una colección coherente. El coste de diseño de la segunda temporada es cero.</p>

<h2>Cuántos trofeos necesita un torneo de pádel</h2>
<p>Es la pregunta que hay que hacerse antes de pedir. Un torneo con cuatro categorías (por ejemplo, masculina, femenina y mixta en dos niveles) y premio para campeones y finalistas son <strong>dieciséis trofeos</strong>: dos jugadores por pareja, dos parejas por categoría, cuatro categorías. Por eso en pádel el diseño paramétrico (un archivo, muchos textos) y la producción en paralelo marcan la diferencia en precio y en plazo.</p>

<h2>Plazos</h2>
<p>Diseño en menos de una semana; producción de dieciséis trofeos de 20 cm, en pocos días. Para un torneo, pide con dos o tres semanas de margen; para un americano con medallas para todos, un mes.</p>

<div class="aviso">
<p><strong>¿Organizas un torneo de pádel?</strong></p>
<p>Mándanos el logotipo, las categorías y la fecha y te proponemos un trofeo propio con el diseño incluido. Más en <a href="/trofeos-padel/">trofeos para pádel</a>.</p>
</div>
`,
  },
  // ----------------------------------------------------------
  {
    slug: 'trofeos-medallas-olimpiadas-escolares',
    titulo: 'Trofeos y medallas para olimpiadas escolares y AMPAs: cómo organizarlo bien',
    h1: ['Trofeos y medallas', 'para olimpiadas escolares'],
    title: 'Trofeos y medallas para olimpiadas escolares | PIQ3D',
    description: 'Cómo encargar medallas y trofeos para olimpiadas escolares y carreras solidarias de colegios y AMPAs: cantidades, logotipo del centro y plazos.',
    resumen: 'Medallas para todos, trofeos por curso y un presupuesto que cuadre con el del AMPA: cómo preparar los premios del día del deporte del colegio.',
    categoria: 'ideas-por-evento',
    fecha: '2026-10-06',
    fechaBonita: '6 de octubre de 2026',
    lectura: 7,
    imagen: { src: 'public/img/galeria/medallasenselimitsfondo.webp', w: 1320, h: 1600, alt: 'Medalla impresa en 3D con corredores en relieve y cinta verde, adecuada para olimpiadas escolares' },
    servicio: { url: '/medallas-personalizadas/', texto: 'Medallas personalizadas impresas en 3D' },
    cuerpo: `
<p>Las olimpiadas escolares, el día del deporte, la carrera solidaria del cole o la fiesta de fin de curso tienen una regla que no tiene ningún otro evento: <strong>todos los niños tienen que llevarse algo</strong>. Eso convierte el pedido en una tirada grande (de 100 a 600 medallas) con un presupuesto ajustado, el del AMPA o el del centro, y con una fecha que no se mueve. Aquí explicamos cómo lo planteamos para que cuadre.</p>

<h2>Medallas para todos, trofeos para pocos</h2>
<p>La estructura que mejor funciona:</p>
<ul>
<li><strong>Una medalla de participación para cada alumno</strong>, igual para todos o con el color de la cinta por ciclo (infantil, primaria, secundaria). Es lo que se llevan a casa y lo que cuelgan en la habitación.</li>
<li><strong>Un trofeo por curso o por clase</strong> para el equipo ganador, que se queda en el aula. Entre 6 y 12 trofeos.</li>
<li><strong>Opcional:</strong> medallas de oro, plata y bronce para las pruebas individuales, si las hay. Son variantes de color de la misma medalla.</li>
</ul>
<p>Con esto, el gasto grande está en las medallas, que es precisamente lo que mejor precio por unidad tiene en impresión 3D a partir de unas decenas.</p>

<h2>El diseño: el logotipo del centro y el año</h2>
<p>La medalla lleva el logotipo o el escudo del colegio en relieve, el nombre del evento («IV Olimpiada Escolar», «Día del Deporte») y el curso escolar. Para que guste a los niños y se lea bien, funcionan tres cosas: colores vivos y contrastados, una figura sencilla (un niño corriendo, un balón, una antorcha, la mascota del cole) y el nombre del centro grande.</p>
<p>Si el centro no tiene logotipo en buena calidad, lo redibujamos a partir de una foto. Lo explicamos en <a href="/blog/como-disenar-trofeo-con-escudo-del-club/">cómo diseñar un trofeo con el escudo</a>; para un colegio es lo mismo.</p>

<h2>Cuántas pedir</h2>
<p>Alumnos inscritos más un 5 %: siempre hay un niño que se apunta el último día y una medalla que se pierde. Si la fiesta incluye a familias (carrera solidaria), decide si los adultos también llevan medalla; suele salir a cuenta hacer una sola tirada grande.</p>

<h2>Qué nos tiene que enviar el AMPA o el centro</h2>
<ol>
<li>Logotipo del centro (o foto nítida de él).</li>
<li>Nombre del evento y fecha.</li>
<li>Número de alumnos por ciclo (para el color de la cinta) y número de trofeos.</li>
<li>Si hay patrocinador (una tienda del pueblo, el ayuntamiento), su logotipo para el reverso.</li>
<li>Quién recibe el pedido y dónde.</li>
</ol>
<p>Con eso enviamos renders y presupuesto cerrado en el día.</p>

<h2>Plazos para un colegio</h2>
<p>Las olimpiadas escolares suelen ser en mayo o junio y la fiesta de fin de curso, a mediados de junio: la época en que más medallas pedimos. Lo ideal es cerrar el pedido en <strong>abril</strong>: una semana de diseño y prototipo, dos de producción y margen de sobra. Pedidos de mayo se pueden hacer, pero con menos opciones de ajuste.</p>

<h2>El presupuesto: cómo encajarlo</h2>
<p>Las tres palancas que más bajan el precio sin que se note:</p>
<ul>
<li><strong>Medalla de 6 cm en lugar de 8.</strong> Para un niño, 6 cm es grande; el material baja casi a la mitad.</li>
<li><strong>Dos o tres colores en lugar de cuatro.</strong> Un fondo de color, el logotipo en blanco y el texto en negro leen perfectamente.</li>
<li><strong>Una sola medalla para todos</strong> y distinguir por el color de la cinta, en vez de tres diseños distintos.</li>
</ul>
<p>El diseño y las cintas van incluidos, y no hay pedido mínimo, así que un colegio pequeño con 80 alumnos paga lo que cuestan 80 medallas y nada más.</p>

<h2>El material, por si preguntan las familias</h2>
<p>Las medallas son de PLA, un plástico de origen vegetal (almidón de maíz o caña de azúcar), sin derivados del petróleo, ligero y seguro. Para un colegio es un argumento que conviene tener a mano; lo explicamos con detalle en <a href="/blog/que-es-el-pla-material-sostenible/">qué es el PLA</a>.</p>

<h2>Más allá de las olimpiadas</h2>
<p>El mismo planteamiento sirve para la carrera solidaria del centro, el torneo de patios, el concurso de lectura, la graduación de sexto (una placa con el nombre de cada alumno) o el detalle de fin de curso para los profesores. Y el logotipo del centro, una vez modelado, se reutiliza en todos.</p>

<div class="aviso">
<p><strong>¿Preparas el día del deporte?</strong></p>
<p>Mándanos el logotipo del centro y el número de alumnos y te pasamos presupuesto con el diseño y las cintas incluidos. Entregamos en mano en la Ribera, l’Horta Sud y la Safor. Más en <a href="/medallas-personalizadas/">medallas personalizadas</a>.</p>
</div>
`,
  },
];
