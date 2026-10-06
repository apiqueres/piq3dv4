// ============================================================
//  Artículos 3 a 8 del calendario del blog. Mismo formato que los
//  de blog.mjs; se concatenan allí.
// ============================================================

export const ARTICULOS_2 = [
  // ----------------------------------------------------------
  {
    slug: 'como-encargar-medallas-carrera-popular',
    titulo: 'Cómo encargar las medallas de una carrera popular: plazos y lista de comprobación',
    h1: ['Cómo encargar las medallas', 'de una carrera popular'],
    title: 'Cómo encargar medallas para una carrera popular | PIQ3D',
    description: 'Plazos, cantidades, diseño y entrega de las medallas finisher de una carrera popular, con una lista de comprobación para que no falte nada en la meta.',
    resumen: 'Cuándo pedirlas, cuántas, qué mandar al taller y qué revisar en el prototipo: la lista completa para que las medallas estén en la meta el día de la carrera.',
    categoria: 'precios-y-plazos',
    fecha: '2026-10-06',
    fechaBonita: '6 de octubre de 2026',
    lectura: 8,
    imagen: { src: 'public/img/galeria/medallasenselimitsfondo.webp', w: 1320, h: 1600, alt: 'Medalla finisher impresa en 3D de la 10K Sense Límits con cinta verde' },
    servicio: { url: '/medallas-personalizadas/', texto: 'Medallas personalizadas impresas en 3D' },
    cuerpo: `
<p>Las medallas son lo último que se piensa y lo primero que se echa de menos. Un organizador de carrera popular tiene permisos, dorsales, avituallamiento, cronometraje y voluntarios en la cabeza, y las medallas llegan a la lista cuando faltan tres semanas. Se puede hacer (lo hemos hecho), pero no es lo ideal. Esta guía es la que nos gustaría que leyeran todos los organizadores antes de escribirnos: cuándo pedir, qué mandar, cuántas encargar y qué revisar.</p>

<h2>El calendario ideal: un mes</h2>
<p>Con un mes de margen todo entra sin prisas:</p>
<ol>
<li><strong>Semana 1: diseño.</strong> Nos mandas el logotipo y la idea, te devolvemos renders, los revisas, los aprobamos juntos.</li>
<li><strong>Semana 2: prototipo.</strong> Imprimimos una medalla real con su cinta y la tienes en la mano. Aquí se detecta todo: un texto pequeño, un color que no contrasta, una cinta que no pega.</li>
<li><strong>Semanas 3 y 4: producción y entrega.</strong> La tirada completa sale de la granja de impresoras en pocos días; montamos las cintas y entregamos la semana de la carrera.</li>
</ol>
<p>¿Se puede en menos? Sí. La <a href="/trabajos/10k-sense-limits/">10K Sense Límits de Aldaia</a> fueron 500 medallas en tres semanas. Con dos semanas, prescindimos del prototipo físico y aprobamos sobre render; con una, hay que consultarlo y depende de la carga del taller.</p>

<h2>Cuántas medallas pedir</h2>
<p>La regla práctica: <strong>inscritos previstos más un 10 %</strong>. Las inscripciones de última hora existen, las medallas que se caen al suelo también, y siempre hay un voluntario o un patrocinador que quiere una. Sobrarán unas pocas; es mucho mejor que faltar.</p>
<p>Si hay categorías infantiles, decide si llevan la misma medalla o una versión más pequeña. Con impresión 3D es el mismo archivo a otra escala, sin coste de diseño.</p>
<p>Y si quieres medallas de podio distintas (oro, plata, bronce), son tres variantes de color del mismo diseño. Piden poco más que las finisher.</p>

<h2>Qué mandar al taller</h2>
<ul>
<li><strong>Logotipo de la carrera</strong> en la mejor calidad que tengas. Un archivo vectorial (SVG, PDF, AI) es perfecto; un PNG grande, suficiente; una foto del cartel, apañable.</li>
<li><strong>Logotipos de patrocinadores</strong> que deban aparecer, y dónde (normalmente en el reverso).</li>
<li><strong>Textos:</strong> nombre de la carrera, edición, año, distancia, localidad.</li>
<li><strong>Colores</strong> de la carrera y color de cinta preferido.</li>
<li><strong>Cantidad</strong> aproximada y fecha de la carrera.</li>
<li><strong>Una idea</strong>, si la tienes: el perfil del recorrido, el monumento del pueblo, la mascota. Si no la tienes, la proponemos nosotros.</li>
</ul>

<h2>Diseño: lo que funciona en una medalla impresa en 3D</h2>
<p>Una medalla impresa en 3D tiene volumen, y eso cambia las reglas respecto a una medalla metálica plana:</p>
<ul>
<li><strong>Relieve antes que grabado.</strong> Las figuras (corredores, el monumento, la mascota) se leen mejor sobresaliendo que hundidas.</li>
<li><strong>Pocos colores, bien contrastados.</strong> Hasta cuatro en la misma pieza. Negro sobre blanco o blanco sobre color funcionan siempre; dos tonos parecidos, no.</li>
<li><strong>Texto grande.</strong> En una medalla de 8 cm, las letras deben medir al menos 4 mm de alto para leerse bien en relieve.</li>
<li><strong>Forma libre.</strong> No tiene por qué ser redonda: una huella, una silueta, el perfil del pueblo.</li>
<li><strong>Dos caras.</strong> El anverso para la carrera y el reverso para patrocinadores o para un texto. Las medallas del Valencia Xiques 3x3 tienen anverso y reverso distintos.</li>
</ul>

<h2>El prototipo: qué revisar</h2>
<p>Cuando tengas la medalla de muestra en la mano, comprueba estas cinco cosas:</p>
<ol>
<li>Que el nombre de la carrera y el año son correctos (es el error más frecuente y el más barato de corregir antes de producir).</li>
<li>Que el logotipo se reconoce a un metro de distancia.</li>
<li>Que los colores son los de la carrera.</li>
<li>Que la cinta tiene el largo adecuado (unos 80 cm para adultos, 60 para niños) y el color encaja.</li>
<li>Que el peso y el tamaño te parecen bien al cuello. Si quieres más presencia, se puede escalar.</li>
</ol>

<h2>Entrega y logística el día de la carrera</h2>
<p>Las medallas llegan montadas con su cinta, en cajas, contadas. Pide que se entreguen uno o dos días antes, en el lugar donde se preparen las bolsas del corredor o directamente en la meta. En la Ribera, l’Horta Sud y la Safor las llevamos en mano; al resto de España, por mensajería con dos días de margen.</p>
<p>En la meta, dos voluntarios con las medallas colgadas del brazo son suficientes para un ritmo de llegada normal. Si prevés muchos corredores a la vez, prepara dos puntos de entrega.</p>

<h2>Lista de comprobación</h2>
<table>
<tr><th>Cuándo</th><th>Qué</th></tr>
<tr><td>5-6 semanas antes</td><td>Decidir presupuesto y cantidad. Reunir logotipos y textos. Pedir presupuesto.</td></tr>
<tr><td>4 semanas</td><td>Aprobar renders. Confirmar color de cinta.</td></tr>
<tr><td>3 semanas</td><td>Revisar el prototipo físico. Dar el visto bueno a la producción.</td></tr>
<tr><td>1-2 semanas</td><td>Confirmar cantidad final con las inscripciones. Acordar día y lugar de entrega.</td></tr>
<tr><td>2 días antes</td><td>Recibir y contar las medallas. Guardarlas en seco.</td></tr>
<tr><td>Día de la carrera</td><td>Dos voluntarios en meta. Apartar las de podio.</td></tr>
</table>

<div class="aviso">
<p><strong>¿Tienes una carrera en el calendario?</strong></p>
<p>Mándanos el logotipo, la fecha y el número de inscritos previstos por WhatsApp y te devolvemos una propuesta con renders en el día. Más en <a href="/medallas-personalizadas/">medallas personalizadas</a> y en <a href="/trofeos-carreras-populares/">trofeos y medallas para carreras populares</a>.</p>
</div>

<h2>Preguntas rápidas</h2>
<h3>¿Y los trofeos de podio?</h3>
<p>Se diseñan a juego con la medalla, con el mismo motivo, y entran en el mismo calendario. Mira la <a href="/trabajos/volta-a-peu-la-canyada/">Volta a Peu La Canyada</a>: huella de hojas en trofeo y, si se quiere, en medalla.</p>
<h3>¿Cuánto cuestan?</h3>
<p>Depende del tamaño, los colores y la cantidad. El diseño y la cinta van incluidos. A partir de unas decenas, el precio por unidad baja mucho. Pide presupuesto con el logotipo y el número de participantes.</p>
<h3>¿Podéis guardar el diseño para el año que viene?</h3>
<p>Sí. Es lo habitual: la edición siguiente solo cambia el número y el año, sin coste de diseño.</p>
`,
  },
  // ----------------------------------------------------------
  {
    slug: 'ideas-trofeos-futbol-sala-balonmano',
    titulo: 'Ideas de trofeos para torneos de fútbol sala y balonmano',
    h1: ['Ideas de trofeos para', 'fútbol sala y balonmano'],
    title: 'Ideas de trofeos para fútbol sala y balonmano | PIQ3D',
    description: 'Ocho ideas de trofeos impresos en 3D para torneos de fútbol sala y balonmano, con ejemplos reales del FS Sueca y el CH Sueca.',
    resumen: 'Del balón sobre una mano abierta al busto del jugador que da nombre al torneo: ocho ideas con ejemplos reales de clubes de Sueca.',
    categoria: 'ideas-por-evento',
    fecha: '2026-10-06',
    fechaBonita: '6 de octubre de 2026',
    lectura: 7,
    imagen: { src: 'public/img/pepe-soler.webp', w: 1536, h: 2048, alt: 'Trofeos de balonmano impresos en 3D con balón dorado y plateado sobre columnas blancas' },
    servicio: { url: '/trofeos-clubes-deportivos/', texto: 'Trofeos para clubes deportivos' },
    cuerpo: `
<p>El fútbol sala y el balonmano comparten pabellón, calendario de torneos de pretemporada y un problema: el trofeo de catálogo es siempre el mismo, un balón genérico dorado sobre una columna de plástico. Con impresión 3D, el trofeo puede ser el balón de verdad (con sus gajos o sus hexágonos), el escudo del club en relieve, el jugador que da nombre al torneo o cualquier cosa que tenga sentido para tu club. Aquí van ocho ideas, varias de ellas ya fabricadas para clubes de Sueca.</p>

<h2>1. El balón sobre una mano abierta</h2>
<p>Es la idea más versátil y la que más repetimos. Una columna que se abre en gajos o en dedos y sostiene el balón en lo alto. En fútbol sala, el balón lleva hexágonos marcados; en balonmano, los gajos propios del balón. Es exactamente el diseño del <a href="/trabajos/torneig-ciutat-de-sueca/">Torneig Ciutat de Sueca</a> (negro y oro) y del <a href="/trabajos/trofeu-pepe-soler/">Trofeu Pepe Soler</a> (blanco, rojo y metalizados). El mismo concepto, dos clubes, dos trofeos que no se parecen.</p>

<h2>2. El escudo del club como protagonista</h2>
<p>En lugar de una pegatina en la base, el escudo en volumen, a color, como pieza central del trofeo. Funciona especialmente bien en torneos propios del club: el escudo grande y, debajo, el nombre del torneo y la categoría. Para premios individuales (mejor jugador, máximo goleador) se puede reducir y combinar con una figura.</p>

<h2>3. El busto del homenajeado</h2>
<p>Muchos torneos llevan el nombre de un jugador, un entrenador o un directivo histórico. Su busto modelado a partir de fotografías, en dorado para el campeón y plateado para el subcampeón, convierte el trofeo en un homenaje. Es lo que hicimos para el <a href="/trabajos/trofeu-antonio-puchades/">Trofeu Antonio Puchades</a> de la SD Sueca, y vale igual para un torneo de balonmano o de fútbol sala.</p>

<h2>4. La portería o el aro como marco</h2>
<p>Una portería de fútbol sala o de balonmano a escala, con el balón entrando y el nombre del torneo en el larguero. Es un trofeo con «escena», muy reconocible en la foto del podio, y permite jugar con el ángulo del balón para campeón y subcampeón.</p>

<h2>5. El pabellón del pueblo</h2>
<p>Si tu torneo se juega siempre en el mismo pabellón y es un símbolo del pueblo, su silueta en relieve sobre una base con el escudo lo convierte en un trofeo que solo puede ser de ese torneo. Lo mismo vale para el campanario, el puente o el castillo de la localidad.</p>

<h2>6. Premios individuales con figura</h2>
<p>Mejor jugador, mejor portero, máximo goleador, mejor defensa. Cada uno con su figura: el portero en estirada, el jugador en el remate, el balón con un número. Una base común para todos y una figura distinta por premio. Reutilizando la base, el coste por unidad baja.</p>

<h2>7. Medallas para toda la cantera</h2>
<p>En torneos de base, cada niño quiere algo. Medallas con el escudo del club y el nombre del torneo, con cinta, para todos los participantes, y trofeos solo para los campeones. Con impresión 3D, cien medallas salen en pocos días. Más en <a href="/medallas-personalizadas/">medallas personalizadas</a>.</p>

<h2>8. El trofeo que se repite cada año</h2>
<p>La mejor idea no es un diseño, es un método: diseñar el trofeo una vez y guardar el archivo. El año siguiente cambia la fecha y, si quieres, el color. El club acumula una colección coherente de trofeos y no paga el diseño nunca más. El Trofeu Puchades ya va por su segunda edición impresa con el mismo archivo.</p>

<h2>Lo que conviene decidir antes de pedir</h2>
<ul>
<li><strong>Categorías y puestos:</strong> cuántos campeones, cuántos subcampeones, qué premios individuales.</li>
<li><strong>Tamaño:</strong> entre 25 y 32 cm para campeón de torneo; 15-20 cm para premios individuales.</li>
<li><strong>Colores:</strong> los del club, con dorado y plateado para distinguir puestos.</li>
<li><strong>Fecha de la final:</strong> para un torneo, pide con dos o tres semanas de margen.</li>
</ul>

<div class="aviso">
<p><strong>¿Tienes torneo este año?</strong></p>
<p>Mándanos el escudo y cuéntanos las categorías. Te devolvemos una propuesta con renders y presupuesto con el diseño incluido. Más en <a href="/trofeos-clubes-deportivos/">trofeos para clubes deportivos</a>.</p>
</div>
`,
  },
  // ----------------------------------------------------------
  {
    slug: 'trofeos-para-fallas-ideas-ejemplos',
    titulo: 'Trofeos para fallas: ideas y ejemplos para los concursos de la comisión',
    h1: ['Trofeos para fallas:', 'ideas y ejemplos'],
    title: 'Trofeos para fallas: ideas y ejemplos | PIQ3D',
    description: 'Ideas de trofeos y premios impresos en 3D para fallas: concurso de paellas, playbacks, presentaciones, pin del ejercicio y placas, con ejemplos de Sueca.',
    resumen: 'La paella en volumen, el escudo de la comisión en relieve, el pin del ejercicio: ideas de premios para cada concurso del calendario fallero.',
    categoria: 'ideas-por-evento',
    fecha: '2026-10-06',
    fechaBonita: '6 de octubre de 2026',
    lectura: 6,
    imagen: { src: 'public/img/galeria/trofeo-paellas-fallas.webp', w: 1179, h: 1387, alt: 'Trofeo impreso en 3D para un concurso de paellas de fallas' },
    servicio: { url: '/trofeos-fallas/', texto: 'Trofeos y premios para fallas' },
    cuerpo: `
<p>Una comisión fallera entrega más premios de los que parece: el concurso de paellas, el playback infantil y el de adultos, la presentación, los juegos de la semana fallera, el reconocimiento a los colaboradores, el fallero del año. Casi todos acaban siendo la misma copa dorada con una pegatina. Y las fallas, precisamente, tienen símbolos propios de sobra para hacer algo mejor. Estas son las ideas que mejor nos han funcionado con las comisiones de Sueca.</p>

<h2>El escudo de la comisión, siempre</h2>
<p>Lo primero: cada falla tiene un escudo, y ese escudo puede ir en relieve y a color en todos los premios del ejercicio. Lo modelamos una vez y sirve para el trofeo del concurso de paellas, el del playback, el pin y las placas. Es lo que hace que los premios sean de tu falla y no de cualquiera.</p>

<h2>Concurso de paellas: la paella en volumen</h2>
<p>El premio más pedido. Una paella a escala, con su arroz y sus asas, sobre una base con el escudo de la comisión, el puesto y el año. Primero, segundo y tercero se distinguen por el color de la base o por el tamaño. Hicimos una para un concurso de paellas de Sueca y está en la <a href="/galeria/">galería</a>. Admite variantes: la paella con el fuego de leña debajo, o solo las asas y el borde como corona.</p>

<h2>Playbacks y presentaciones</h2>
<p>Para el playback, un micrófono, una claqueta o la silueta de un escenario, con el escudo de la falla y la categoría (infantil, juvenil, adultos). Para la presentación, un detalle para la fallera mayor y la corte: una peineta, un ramo o la silueta del traje en pequeño, con el nombre y el ejercicio.</p>

<h2>El pin del ejercicio</h2>
<p>Un pin con el escudo en relieve y el año, para toda la comisión, impreso en 3D en una sola pieza multicolor con imperdible o imán. Es el merchandising fallero más barato por unidad y el que más se lleva. Los hay en la galería, en el apartado de merchandising, junto con los <a href="/llaveros-personalizados/">llaveros</a>.</p>

<h2>Reconocimientos y agradecimientos</h2>
<p>Placas para los colaboradores, los comercios que patrocinan, el artista fallero, el pirotécnico, el fallero del año. Una placa impresa en 3D con el escudo en volumen y el texto en relieve se distingue de la placa de metacrilato de siempre y cuesta parecido. Más en <a href="/placas-personalizadas/">placas personalizadas</a>.</p>

<h2>Premios de la semana fallera</h2>
<p>Juegos de mesa, torneos de truc, parchís o dominó, carreras de sacos, concurso de disfraces. Premios pequeños, de 10 a 15 cm, con un motivo distinto por juego y la misma base con el escudo. Como comparten base, salen económicos en conjunto.</p>

<h2>Lo que ya hemos hecho</h2>
<p>En Sueca: los premios de la <strong>Falla Sucro</strong>, el trofeo de un <strong>concurso de paellas</strong> y el <strong>pin fallero</strong> que ves en la galería. Trabajamos con comisiones de Sueca, Cullera, Alzira y el resto de la Ribera, y entregamos en el casal.</p>

<h2>Calendario: cuándo pedir</h2>
<ul>
<li><strong>Premios de marzo</strong> (paellas, playbacks, juegos): pedir en enero. Diseño en una semana, producción en días.</li>
<li><strong>Presentación</strong> (suele ser entre noviembre y febrero): pedir un mes antes.</li>
<li><strong>Pin del ejercicio</strong> (de 50 a 300 unidades): tres semanas de margen.</li>
</ul>

<div class="aviso">
<p><strong>¿Premios para tu falla?</strong></p>
<p>Mándanos el escudo de la comisión y la lista de concursos del ejercicio. Te pasamos una propuesta con renders y presupuesto con el diseño incluido. Más en <a href="/trofeos-fallas/">trofeos y premios para fallas</a>.</p>
</div>

<h2>Preguntas rápidas</h2>
<h3>¿Podéis hacer un solo trofeo para el concurso de paellas?</h3>
<p>Sí. No hay pedido mínimo.</p>
<h3>¿El escudo de la falla hay que dibujarlo?</h3>
<p>No. Con una imagen (del cartel, de la web o de una camiseta) lo modelamos en relieve y a color.</p>
<h3>¿Cuánto cuestan?</h3>
<p>Depende del tamaño, los colores y la cantidad. El diseño va incluido y el escudo se modela una vez para todo el ejercicio.</p>
`,
  },
  // ----------------------------------------------------------
  {
    slug: 'que-es-el-pla-material-sostenible',
    titulo: 'Qué es el PLA y por qué es un material más sostenible para trofeos y medallas',
    h1: ['Qué es el PLA y por qué', 'es más sostenible'],
    title: 'Qué es el PLA y por qué es más sostenible | PIQ3D',
    description: 'El PLA es el plástico de origen vegetal con el que imprimimos trofeos y medallas: de dónde sale, qué aguanta y qué significa que sea biodegradable.',
    resumen: 'De dónde sale el PLA, qué aguanta, qué significa de verdad que sea biodegradable y por qué es el material adecuado para un trofeo.',
    categoria: 'materiales-e-impresion-3d',
    fecha: '2026-10-06',
    fechaBonita: '6 de octubre de 2026',
    lectura: 7,
    imagen: { src: 'public/img/la-canyada.webp', w: 1600, h: 2133, alt: 'Trofeo de hojas verdes impreso en 3D en PLA, sobre fondo vegetal' },
    servicio: { url: '/trofeos-personalizados/', texto: 'Trofeos personalizados impresos en 3D' },
    cuerpo: `
<p>Todas nuestras piezas (trofeos, medallas, placas, llaveros, soportes QR) están impresas en PLA. Lo decimos en la web y nos lo preguntan a menudo: qué es exactamente, si es «plástico», si es tan ecológico como suena y si aguanta. Aquí está la explicación completa, sin exagerar en ninguna dirección.</p>

<h2>Qué es el PLA</h2>
<p>PLA son las siglas de <strong>ácido poliláctico</strong>. Es un polímero, es decir, un plástico, pero con una diferencia de origen: se fabrica a partir de almidón vegetal (maíz, caña de azúcar, remolacha o mandioca) que se fermenta para obtener ácido láctico y después se polimeriza. No viene del petróleo.</p>
<p>Es el material más usado en impresión 3D por deposición de filamento (FDM), la tecnología de nuestras impresoras: se funde a unos 200 °C, se deposita capa a capa de 0,2 mm y solidifica enseguida. Imprime con mucha precisión, con buen acabado superficial y admite colores mate, brillantes y metalizados.</p>

<h2>Por qué decimos que es más sostenible</h2>
<p>Comparado con los materiales de un trofeo tradicional (zamak, plástico ABS metalizado, resina de poliéster, metacrilato), el PLA tiene tres ventajas claras:</p>
<ul>
<li><strong>Origen renovable.</strong> Sale de plantas que se vuelven a cultivar, no de un recurso fósil.</li>
<li><strong>Menos energía para fabricarlo y para imprimirlo.</strong> Se procesa a temperaturas más bajas que otros plásticos técnicos, y la impresión 3D no genera virutas ni recortes: se deposita solo el material que forma la pieza.</li>
<li><strong>Sin moldes ni cromados.</strong> Un trofeo de catálogo requiere moldes de inyección y, a menudo, un baño metálico. Una pieza impresa en 3D no necesita ninguna de las dos cosas.</li>
</ul>

<h2>Qué significa que sea biodegradable (y qué no)</h2>
<p>Aquí conviene ser exactos. El PLA es <strong>biodegradable en condiciones de compostaje industrial</strong>: con temperatura mantenida por encima de los 55-60 °C, humedad y microorganismos, se descompone en meses. Esa es la condición de la norma EN 13432 para envases compostables.</p>
<p>Lo que <strong>no</strong> es: no se deshace en el compost de casa a temperatura ambiente, ni en el mar, ni tirado en el campo. A temperatura ambiente es estable durante años, que es precisamente lo que quieres de un trofeo. Y aunque técnicamente se puede reciclar, en la mayoría de municipios no hay una fracción separada para él, así que lo correcto es llevarlo al punto limpio como plástico.</p>
<p>En resumen: un trofeo de PLA es una pieza de origen vegetal, fabricada con poca energía, que dura lo que tiene que durar y que, llegado el momento, puede compostarse industrialmente. Es mejor que las alternativas; no es «desaparece solo».</p>

<h2>Qué aguanta y qué no</h2>
<table>
<tr><th>Situación</th><th>PLA</th></tr>
<tr><td>Vitrina, estantería, despacho</td><td>Perfecto, durante años</td></tr>
<tr><td>Manipulación diaria (llaveros, soportes de mesa)</td><td>Bien: es rígido y no se raya con facilidad</td></tr>
<tr><td>Caída desde un metro sobre suelo duro</td><td>Puede partirse, como una pieza de resina</td></tr>
<tr><td>Sol directo prolongado en exterior</td><td>Puede amarillear y perder rigidez con los años</td></tr>
<tr><td>Interior de un coche en verano (más de 55-60 °C)</td><td>Se deforma. No lo dejes ahí</td></tr>
<tr><td>Lavavajillas, agua caliente</td><td>No</td></tr>
<tr><td>Limpieza con paño húmedo</td><td>Sin problema</td></tr>
</table>
<p>Para un trofeo, una medalla, una placa o un soporte de carta, todo esto es más que suficiente. Para piezas que vayan a estar al sol dentro de un coche o cerca de una fuente de calor, lo decimos antes de imprimir y proponemos otro material.</p>

<h2>Cómo queda: el acabado del PLA</h2>
<p>El PLA imprime con las líneas de capa visibles de cerca, propias de la impresión FDM. En un buen diseño se orientan a favor: en una columna retorcida siguen la torsión, en un balón marcan los gajos. Para piezas con mucho detalle, como un busto, usamos capas más finas. Los filamentos metalizados (dorado, plateado, bronce) dan un acabado muy convincente, aunque no es un cromado de espejo. Y como nuestras impresoras cambian de filamento automáticamente, una pieza puede llevar hasta cuatro colores sin pintar nada, lo que también evita pinturas y disolventes.</p>

<h2>Por qué no usamos otros materiales por defecto</h2>
<p>Existen filamentos más resistentes al calor (PETG, ASA, ABS) y más flexibles (TPU). Son derivados del petróleo, se imprimen a más temperatura y, para un trofeo, no aportan nada que el PLA no dé. Los reservamos para piezas técnicas que lo necesiten, y lo consultamos contigo caso por caso.</p>

<div class="aviso">
<p><strong>¿Quieres ver una pieza de PLA en la mano?</strong></p>
<p>Si estás en la Ribera, te acercamos una muestra o te la enseñamos en el taller de Sueca. Más sobre lo que fabricamos en <a href="/trofeos-personalizados/">trofeos personalizados</a> y en <a href="/impresion-3d-personalizada/">impresión 3D personalizada</a>.</p>
</div>
`,
  },
  // ----------------------------------------------------------
  {
    slug: 'soportes-carta-qr-nfc-restaurantes',
    titulo: 'Soportes de carta QR y NFC para restaurantes: cómo funcionan y qué tener en cuenta',
    h1: ['Soportes de carta QR y NFC:', 'cómo funcionan'],
    title: 'Soportes de carta QR y NFC: cómo funcionan | PIQ3D',
    description: 'Cómo funciona un soporte de mesa con código QR y chip NFC para la carta de un restaurante, qué móviles lo leen y cómo cambiar la carta sin cambiarlo.',
    resumen: 'QR, NFC o los dos: qué lee cada móvil, cómo cambiar la carta sin cambiar el soporte y por qué la forma del logotipo importa.',
    categoria: 'ideas-por-evento',
    fecha: '2026-10-06',
    fechaBonita: '6 de octubre de 2026',
    lectura: 7,
    imagen: { src: 'public/img/galeria/cocobeach.webp', w: 835, h: 835, alt: 'Soporte de carta QR impreso en 3D con la forma del logotipo de Coco Beach' },
    servicio: { url: '/soportes-qr-nfc-restaurantes/', texto: 'Soportes de carta QR y NFC para restaurantes' },
    cuerpo: `
<p>La carta en el móvil llegó para quedarse: ahorra impresiones, permite cambiar precios en un minuto y los clientes ya están acostumbrados. Lo que no ha mejorado tanto es el objeto que la lleva a la mesa: un cartelito plastificado con un QR pegado que dice poco del local. Desde Sueca fabricamos soportes impresos en 3D con la forma del logotipo del restaurante, con el QR integrado y, si se quiere, un chip NFC. Este artículo explica cómo funcionan las dos tecnologías y qué decidir antes de encargar uno.</p>

<h2>El código QR: cómo funciona</h2>
<p>Un código QR es una dirección web codificada en un dibujo de puntos. La cámara del móvil lo lee y abre la dirección. Cualquier móvil actual lo hace sin instalar nada: en iPhone y Android basta con abrir la cámara y apuntar.</p>
<p>En un soporte impreso en 3D, el QR va <strong>en relieve</strong>: los módulos negros sobresalen o se hunden respecto al fondo blanco. Para que se lea bien a la primera hay tres reglas:</p>
<ul>
<li><strong>Contraste.</strong> Negro sobre blanco o blanco sobre negro. Nada de dorado sobre crema.</li>
<li><strong>Tamaño.</strong> Un QR de 3 cm se lee cómodamente desde 30 cm. Para que se lea desde la silla sin levantarse, mejor 4 cm.</li>
<li><strong>Corrección de errores.</strong> Generamos el QR con nivel de corrección alto, de forma que si una esquina se desgasta con el uso siga leyéndose.</li>
</ul>
<p>Antes de producir la serie comprobamos la lectura del prototipo con varios móviles y a varias distancias.</p>

<h2>El chip NFC: cómo funciona</h2>
<p>NFC es la tecnología del pago con el móvil. Dentro del soporte va una etiqueta del tamaño de una moneda, sin batería, programada con la dirección de la carta. Cuando el cliente acerca el móvil (a uno o dos centímetros), el teléfono recibe la dirección y la abre, sin cámara ni escaneo.</p>
<p>Lo leen todos los Android con NFC (la mayoría desde hace años) y los iPhone desde el XS, que leen etiquetas en segundo plano con solo acercar la parte superior del teléfono. Los iPhone 7, 8 y X necesitan abrir una app de lectura, por eso siempre recomendamos poner el QR también: el QR lo lee cualquier móvil, el NFC lo hace más cómodo en los modernos.</p>
<p>El chip se puede <strong>reprogramar</strong> si cambias la dirección, y se puede bloquear para que nadie más lo reescriba. Va embebido en la pieza durante la impresión, así que no se ve ni se despega.</p>

<h2>Cambiar la carta sin cambiar el soporte</h2>
<p>El error más común es codificar en el QR la dirección de un PDF concreto. Cuando cambias la carta, cambia el enlace y el QR deja de servir. La solución es sencilla: el QR y el NFC deben apuntar a una <strong>dirección fija que controles tú</strong>, por ejemplo tu-restaurante.com/carta, y en esa dirección subes la carta que toque. Cambias el PDF o la página, el soporte sigue valiendo. Si no tienes web, te decimos cómo montar un enlace fijo gratuito.</p>

<h2>La forma: tu logotipo de pie en la mesa</h2>
<p>Aquí es donde la impresión 3D marca la diferencia. El soporte no es un rectángulo: es la silueta de tu logotipo, con sus colores, de pie sobre una base. Un cocotero para Coco Beach, el nombre caligráfico de Ca Quintín, el logotipo de El Niu, el de Sushi Room. Cuatro locales de Sueca, cuatro soportes que no se parecen. Están en la <a href="/galeria/#cartas-qr">galería</a>.</p>
<p>Lo que revisamos al diseñarlo: que la silueta tenga base suficiente para no volcar, que el QR quede a la altura de los ojos de alguien sentado y que el conjunto no estorbe en la mesa (entre 8 y 12 cm de alto suele ser lo justo).</p>

<h2>Uso diario y limpieza</h2>
<p>Son piezas rígidas de PLA, un plástico de origen vegetal. Aguantan el uso en mesa, se limpian con un paño húmedo y no se despegan porque no llevan nada pegado. Lo único que hay que evitar es dejarlas al sol directo dentro de un coche o junto a una plancha: por encima de 55-60 °C el PLA se deforma. En una terraza a la sombra no hay problema.</p>

<h2>Cuántos y cuándo</h2>
<p>Lo normal es <strong>uno por mesa más un 15 % de reserva</strong> para roturas o para la barra. Diseño y prototipo en una semana; una tirada de 20-30 unidades en pocos días. Si abres en temporada, pide con dos o tres semanas de margen.</p>

<h2>Más allá de la carta</h2>
<p>El mismo soporte puede apuntar a lo que quieras: la carta de vinos, el menú del día, la hoja de reseñas de Google, el wifi del local, la reserva. Y con NFC, se cambia de destino en segundos. Algunos locales ponen dos: uno para la carta y otro, en la salida, para las reseñas.</p>

<div class="aviso">
<p><strong>¿Tu logotipo en la mesa?</strong></p>
<p>Mándanos el logotipo y el número de mesas y te pasamos presupuesto con el diseño incluido. Si estás en Sueca o Cullera, te llevamos un prototipo para probarlo. Más en <a href="/soportes-qr-nfc-restaurantes/">soportes de carta QR y NFC para restaurantes</a>.</p>
</div>
`,
  },
  // ----------------------------------------------------------
  {
    slug: 'caso-trofeo-volta-a-peu-fibravalencia',
    titulo: 'Caso práctico: el trofeo de la Volta a Peu FibraValencia, de la idea al podio',
    h1: ['Caso práctico: el trofeo', 'de la Volta a Peu FibraValencia'],
    title: 'Caso: el trofeo de la Volta a Peu FibraValencia | PIQ3D',
    description: 'El trofeo retorcido de la 37ª Volta a Peu FibraValencia de Alaquàs: el encargo, las decisiones de diseño, el prototipo, la producción y lo aprendido.',
    resumen: 'Doce trofeos, dos colores y una columna que gira: el proceso completo de un trofeo de carrera, con las decisiones que tomamos y por qué.',
    categoria: 'casos',
    fecha: '2026-10-06',
    fechaBonita: '6 de octubre de 2026',
    lectura: 7,
    imagen: { src: 'public/img/fibravalencia.webp', w: 1600, h: 1600, alt: 'Trofeo de la 37ª Volta a Peu FibraValencia Vila d’Alaquàs, columna blanca retorcida sobre base magenta' },
    servicio: { url: '/trabajos/volta-a-peu-fibravalencia/', texto: 'Ficha del trabajo: Volta a Peu FibraValencia' },
    cuerpo: `
<p>Hay trabajos que explican mejor que cualquier página de servicio lo que hacemos. El trofeo de la 37ª Volta a Peu FibraValencia Vila d’Alaquàs es uno de ellos: un encargo con marca, con categorías, con plazo, y con una idea de diseño que no estaba en ningún catálogo. Esta es la historia completa, con las decisiones que tomamos y lo que cambiaríamos.</p>

<h2>El encargo</h2>
<p>FibraValencia, operador de fibra de l’Horta Sud, patrocina la Volta a Peu de Alaquàs. Querían un trofeo que fuera claramente suyo: el magenta de la marca, su logotipo, el lema «Nostra terra, nostra fibra» y, sobre todo, algo que no pareciera un trofeo de carrera más.</p>
<p>Las condiciones prácticas: <strong>doce trofeos</strong> (tres puestos en cuatro categorías: local y general, masculina y femenina), cada uno con su texto, y entrega en Alaquàs unos días antes de la carrera. Tres semanas de margen desde que cerráramos el diseño.</p>

<h2>La idea: una columna que gira</h2>
<p>Las primeras propuestas fueron las previsibles: una zapatilla, un corredor, el perfil del recorrido. Funcionaban, pero no decían nada de FibraValencia. La idea que se quedó fue más abstracta: <strong>una columna cuadrada que gira 90 grados de la base a la cima</strong>. Habla de la carrera (el recorrido que serpentea por el pueblo), habla de la fibra (un hilo que se retuerce) y tiene una silueta que se reconoce desde lejos en la foto del podio.</p>
<p>Sobre la columna, blanca, el logotipo de la 37ª edición en relieve y en magenta. Debajo, una base trapezoidal magenta con el puesto, la categoría y el lema en blanco. Dos colores, bien contrastados, los de la marca.</p>

<h2>Las decisiones de diseño</h2>
<h3>Paramétrico desde el principio</h3>
<p>Doce trofeos con doce textos distintos. En lugar de doce archivos, uno solo con los textos como parámetros: cambias «1r classificat, categoria local masculina» por «2n classificat, categoria general femenina» y el archivo se regenera. Cero errores de copiar y pegar, y si el año que viene son dieciséis categorías, son cuatro líneas más.</p>
<h3>Dos piezas, no una</h3>
<p>Columna y base se imprimen por separado y se ensamblan. ¿Por qué? Porque así la columna sale de una pieza en un solo color, con las líneas de capa siguiendo la torsión (que es lo que la hace bonita), y el cambio de color se concentra en la base, donde está el texto. Una sola pieza habría sido posible, pero más lenta y con más riesgo en la torsión.</p>
<h3>La altura</h3>
<p>Empezamos en 30 cm y bajamos a <strong>24 cm</strong>. El volumen crece al cubo: esos seis centímetros menos redujeron el tiempo de impresión de cada columna casi a la mitad, y la presencia del trofeo apenas cambió. Es la decisión que más efecto tuvo en el presupuesto.</p>

<h2>El prototipo</h2>
<p>Imprimimos una columna en blanco y una base en magenta antes de lanzar la serie. Dos cosas salieron de ahí:</p>
<ul>
<li>El texto de la base, en la primera versión, era demasiado pequeño para leerse a un metro. Subimos el tamaño de letra y reorganizamos las tres líneas.</li>
<li>La torsión de 90 grados hacía que una arista quedara en voladizo en la parte alta. Ajustamos el ángulo de impresión y añadimos un chaflán mínimo en la base de la columna. No se nota, y la pieza sale limpia sin soportes.</li>
</ul>
<p>Sin prototipo, esos dos ajustes se habrían descubierto con doce trofeos ya impresos.</p>

<h2>La producción</h2>
<p>Doce columnas y doce bases repartidas entre las impresoras del taller, en paralelo. La tirada completa estuvo lista en menos de una semana. Ensamblaje, revisión una a una (texto correcto, categoría correcta, sin marcas) y embalaje individual.</p>

<h2>La entrega</h2>
<p>En mano, en Alaquàs, unos días antes de la carrera, con tiempo para que la organización revisara los doce textos con la lista de categorías delante. Ninguna corrección. El día de la carrera, los trofeos en el podio y FibraValencia en todas las fotos.</p>

<h2>Lo que aprendimos</h2>
<ul>
<li><strong>Una idea abstracta puede ser más memorable que una figurativa</strong>, si conecta con la marca y con el evento a la vez.</li>
<li><strong>Bajar la altura es la palanca de precio más eficaz</strong> y la que menos se nota.</li>
<li><strong>El prototipo no es un lujo</strong>: ahorró dos errores que habrían costado toda la tirada.</li>
<li><strong>Paramétrico siempre</strong> que haya más de dos textos distintos.</li>
</ul>
<p>El archivo está guardado. La 38ª edición solo necesita cambiar el número.</p>

<div class="aviso">
<p><strong>¿Una carrera con patrocinador?</strong></p>
<p>Mándanos el logotipo del patrocinador y de la carrera, las categorías y la fecha, y te proponemos un trofeo propio. La ficha completa de este trabajo está en <a href="/trabajos/volta-a-peu-fibravalencia/">Volta a Peu FibraValencia</a>, y más ideas en <a href="/trofeos-carreras-populares/">trofeos y medallas para carreras populares</a>.</p>
</div>
`,
  },
];
