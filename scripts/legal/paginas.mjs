import { TITULAR, PROVEEDORES, VENTA } from './datos.mjs';

const t = TITULAR;

/**
 * Las cuatro paginas legales. Cada seccion es {h, html}: el titulo y el
 * cuerpo. El HTML se escribe a mano a proposito, para que se lea igual en
 * el fichero que en la pagina y cualquiera pueda corregir una clausula sin
 * tocar codigo.
 */
export const PAGINAS = [
  // ==========================================================
  {
    slug: 'aviso-legal',
    titulo: 'Aviso legal',
    descripcion: 'Titularidad, condiciones de uso y propiedad intelectual del sitio piq3d.com.',
    secciones: [
      {
        h: 'Quién está detrás de este sitio',
        html: `
<p>En cumplimiento del artículo 10 de la Ley 34/2002 de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), estos son los datos del titular de <strong>${t.web}</strong>:</p>
<dl class="datos">
  <dt>Titular</dt><dd>${t.nombre}</dd>
  <dt>NIF</dt><dd>${t.nif}</dd>
  <dt>Nombre comercial</dt><dd>${t.nombreComercial}</dd>
  <dt>Domicilio</dt><dd>${t.domicilio}</dd>
  <dt>Correo</dt><dd><a href="mailto:${t.email}">${t.email}</a></dd>
  <dt>Teléfono</dt><dd><a href="tel:+34623754444">${t.telefono}</a></dd>
  <dt>Actividad</dt><dd>${t.actividad}</dd>
</dl>
<p>${t.nombreComercial} es un nombre comercial: quien contrata, factura y responde es la persona física indicada arriba, dada de alta como trabajadora autónoma.</p>`,
      },
      {
        h: 'Para qué sirve esta web',
        html: `
<p>${t.web} es un sitio informativo. Enseña lo que fabricamos y cómo trabajamos, y ofrece vías de contacto. <strong>No es una tienda</strong>: aquí no se compra nada ni se pagan pedidos. Todo encargo nace de un presupuesto que te enviamos y que tú aceptas, con las condiciones que encontrarás en los <a href="/terminos/">Términos y condiciones</a>.</p>
<p>Las cifras del catálogo son orientativas y sirven para que sepas si estamos en tu rango antes de escribirnos. El precio que vale es el del presupuesto aceptado.</p>`,
      },
      {
        h: 'Cómo puedes usar el sitio',
        html: `
<p>Navegar por ${t.web} es gratuito y no exige registrarse. Al usarlo te comprometes a hacerlo conforme a la ley y a no intentar dañarlo, sobrecargarlo, extraer su contenido de forma automatizada ni acceder a partes no públicas.</p>
<p>Ponemos lo que está en nuestra mano para que el sitio esté siempre disponible y su información sea correcta, pero no podemos garantizar que no haya interrupciones, errores tipográficos o datos que se hayan quedado atrás. Si ves algo mal, escríbenos a <a href="mailto:${t.email}">${t.email}</a> y lo corregimos.</p>`,
      },
      {
        h: 'Propiedad intelectual e industrial',
        html: `
<p>El diseño del sitio, sus textos, sus fotografías y los modelos 3D que hay detrás de las piezas son obra de ${t.nombreComercial} y están protegidos. Puedes verlos y compartir el enlace; no puedes reproducirlos, reutilizarlos con fines comerciales ni usarlos para fabricar copias sin nuestro permiso por escrito.</p>
<p><strong>Los escudos, logos y nombres de clubes, comisiones, ayuntamientos y empresas que aparecen en las fotos pertenecen a sus titulares.</strong> Salen aquí únicamente como muestra de trabajos realmente fabricados para ellos, y no implican que esas entidades nos patrocinen ni que cedan sus marcas a nadie más. Si eres titular de alguno y quieres que retiremos su imagen, escríbenos y lo hacemos sin preguntar por qué.</p>`,
      },
      {
        h: 'Enlaces a otros sitios',
        html: `
<p>Desde aquí se enlaza a WhatsApp, Instagram y TikTok para que puedas escribirnos. Esas plataformas son de terceros, tienen sus propias condiciones y sus propias políticas de datos, y no respondemos de lo que hagan. Consulta la <a href="/privacidad/">Política de privacidad</a> para saber qué implica contactarnos por esas vías.</p>`,
      },
      {
        h: 'Responsabilidad',
        html: `
<p>Respondemos de los pedidos que aceptamos y fabricamos, en los términos del contrato y de la normativa de consumo. No respondemos del uso que se haga de la información publicada en el sitio ni de los daños derivados de fallos técnicos, ataques o interrupciones ajenos a nuestro control.</p>`,
      },
      {
        h: 'Ley aplicable',
        html: `
<p>Estas condiciones se rigen por la ley española. Si eres consumidor, cualquier conflicto se resolverá ante los juzgados que te correspondan según la normativa de consumo, que normalmente son los de tu domicilio: nada de lo escrito aquí te quita ese derecho. Si contratas como empresa, entidad o profesional, ambas partes se someten a los juzgados y tribunales de Valencia.</p>
<p>Podemos actualizar este aviso cuando cambie la ley o cambie nuestra forma de trabajar. La versión que vale es la publicada aquí, con su fecha de actualización al pie.</p>`,
      },
    ],
  },

  // ==========================================================
  {
    slug: 'privacidad',
    titulo: 'Política de privacidad',
    descripcion: 'Qué datos tratamos, para qué, durante cuánto tiempo y qué derechos tienes.',
    secciones: [
      {
        h: 'Lo esencial, en cuatro líneas',
        html: `
<p class="destacado">No hay formularios, ni registro, ni analítica, ni cookies, ni una sola llamada a servidores de terceros en esta web. Solo tratamos tus datos cuando <em>tú</em> nos escribes por WhatsApp, correo o teléfono, y los usamos para responderte y para fabricar lo que nos encargues. No vendemos datos a nadie ni te vamos a mandar publicidad que no hayas pedido.</p>`,
      },
      {
        h: 'Quién es el responsable',
        html: `
<dl class="datos">
  <dt>Responsable</dt><dd>${t.nombre} (${t.nombreComercial})</dd>
  <dt>NIF</dt><dd>${t.nif}</dd>
  <dt>Domicilio</dt><dd>${t.domicilio}</dd>
  <dt>Contacto</dt><dd><a href="mailto:${t.email}">${t.email}</a></dd>
</dl>`,
      },
      {
        h: 'Qué datos tratamos y de dónde salen',
        html: `
<p>Todos los datos los pones tú. No los compramos ni los sacamos de listados.</p>
<ul>
  <li><strong>Los de contacto:</strong> tu nombre, el del club o entidad, el teléfono, el correo y lo que nos cuentes en la conversación.</li>
  <li><strong>Los materiales del encargo:</strong> escudos, logos, fotos, textos, fechas y <strong>listados de nombres</strong> para grabar en las piezas.</li>
  <li><strong>Los de facturación:</strong> razón social o nombre, NIF y dirección, cuando hay que emitir factura.</li>
  <li><strong>Los de entrega:</strong> dirección y teléfono para el transportista.</li>
</ul>`,
      },
      {
        h: 'Nombres de menores en medallas y trofeos',
        html: `
<p>Buena parte de lo que fabricamos lleva nombres grabados, y en categorías base esos nombres suelen ser de menores. Conviene decirlo claro:</p>
<ul>
  <li>Cuando un club, una comisión o un ayuntamiento nos envía un listado, ese cliente actúa como responsable de esos datos y <strong>nos garantiza que tiene base legal para cedérnoslos</strong> con el fin de fabricar las piezas.</li>
  <li>Nosotros usamos ese listado <strong>solo</strong> para grabar y comprobar las piezas. No lo cruzamos con nada, no lo cedemos y no lo usamos para ninguna otra cosa.</li>
  <li>Lo borramos cuando ya no hace falta para el pedido ni para atender una repetición o una reclamación.</li>
</ul>
<p>Si prefieres que destruyamos el listado nada más entregar el pedido, dilo y lo hacemos.</p>`,
      },
      {
        h: 'Para qué los usamos y con qué amparo legal',
        html: `
<table>
  <thead><tr><th>Para qué</th><th>Base jurídica (RGPD art. 6)</th></tr></thead>
  <tbody>
    <tr><td>Responder a tu consulta y prepararte un presupuesto</td><td>Tu petición: medidas precontractuales (art. 6.1.b)</td></tr>
    <tr><td>Diseñar, fabricar y entregar el pedido</td><td>Ejecución del contrato (art. 6.1.b)</td></tr>
    <tr><td>Emitir facturas y llevar la contabilidad</td><td>Obligación legal (art. 6.1.c)</td></tr>
    <tr><td>Guardar el archivo 3D para poder repetir tu pedido</td><td>Interés legítimo en dar continuidad al servicio (art. 6.1.f)</td></tr>
    <tr><td>Publicar fotos de los trabajos entregados</td><td>Interés legítimo en enseñar nuestro trabajo, con derecho de oposición (art. 6.1.f)</td></tr>
    <tr><td>Enviarte novedades comerciales</td><td>Solo si nos das permiso expreso (art. 6.1.a)</td></tr>
  </tbody>
</table>`,
      },
      {
        h: 'Quién más puede ver tus datos',
        html: `
<p>Solo quien hace falta para que el pedido llegue y las cuentas cuadren. Abrir esta web, por sí solo, no comunica nada a nadie: las tipografías y las imágenes se sirven desde nuestro propio servidor, sin llamar a Google ni a ninguna otra plataforma.</p>
<ul>
  <li><strong>El servidor donde vive esta web:</strong> ${PROVEEDORES.hosting}.</li>
  <li><strong>WhatsApp (Meta Platforms Ireland):</strong> si nos escribes por ahí, la conversación pasa por sus servidores y se rige también por su política. Si prefieres evitarlo, escríbenos al correo o llámanos.</li>
  <li><strong>Herramientas de inteligencia artificial:</strong> ver el apartado siguiente.</li>
  <li><strong>Transportistas, asesoría fiscal y entidad bancaria:</strong> para enviar, facturar y cobrar.</li>
</ul>
<p>Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo. Cuando ocurre, se ampara en las decisiones de adecuación o en las cláusulas contractuales tipo aprobadas por la Comisión Europea.</p>`,
      },
      {
        h: 'Inteligencia artificial y tus materiales',
        html: `
<p>Usamos herramientas de IA para agilizar parte del trabajo de diseño. Eso significa que <strong>el material que nos envías puede procesarse en servicios de terceros</strong>: un logo que hay que limpiar, una foto que hay que recortar, un boceto del que queremos ver variantes.</p>
<ul>
  <li>Nunca metemos en esas herramientas <strong>listados de nombres, datos de menores ni datos de facturación</strong>.</li>
  <li>Si prefieres que <em>ningún</em> material tuyo pase por herramientas de IA, dínoslo antes de empezar y trabajaremos sin ellas. No cuesta más ni cambia el resultado que vas a aprobar.</li>
</ul>
<p>En los <a href="/terminos/">Términos y condiciones</a> explicamos con más detalle en qué la usamos y en qué no.</p>`,
      },
      {
        h: 'Cuánto tiempo los guardamos',
        html: `
<ul>
  <li><strong>Consultas que no acaban en pedido:</strong> un año, por si vuelves.</li>
  <li><strong>Datos del pedido y facturación:</strong> los plazos que exige la ley — 4 años por la normativa tributaria y 6 por la mercantil.</li>
  <li><strong>Archivos 3D y material gráfico del encargo:</strong> mientras siga teniendo sentido poder repetirte el pedido, o hasta que nos pidas que los borremos.</li>
  <li><strong>Listados de nombres:</strong> lo que dure el pedido y su posible repetición o reclamación, y antes si nos lo pides.</li>
</ul>`,
      },
      {
        h: 'Qué puedes exigirnos',
        html: `
<p>Tienes derecho a <strong>acceder</strong> a tus datos, <strong>rectificarlos</strong>, <strong>suprimirlos</strong>, <strong>oponerte</strong> a que los tratemos, <strong>limitar</strong> ese tratamiento y <strong>llevártelos</strong> a otro sitio. Para ejercerlos basta un correo a <a href="mailto:${t.email}">${t.email}</a> indicando qué quieres; puede que te pidamos acreditar quién eres.</p>
<p>Si crees que no lo hemos hecho bien, puedes reclamar ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">aepd.es</a>). Te agradeceríamos que nos lo dijeras antes a nosotros, porque casi siempre se arregla en un correo.</p>`,
      },
      {
        h: 'Seguridad',
        html: `
<p>El sitio se sirve cifrado (HTTPS) y el acceso al servidor está restringido. Aplicamos las medidas razonables para un taller de nuestro tamaño, sin prometer lo imposible: ningún sistema es invulnerable. Si alguna vez ocurriera una brecha que te afectara, te lo diríamos.</p>`,
      },
    ],
  },

  // ==========================================================
  {
    slug: 'cookies',
    titulo: 'Política de cookies',
    descripcion: 'Este sitio no utiliza cookies. Aquí se explica qué significa eso exactamente.',
    secciones: [
      {
        h: 'Esta web no usa cookies',
        html: `
<p class="destacado">No instalamos ninguna cookie: ni propia, ni de terceros, ni analítica, ni publicitaria. Tampoco guardamos nada en el almacenamiento local de tu navegador ni usamos píxeles de seguimiento. Por eso no verás aquí ningún banner pidiéndote permiso: no hay nada que consentir.</p>
<p>Esto no es un descuido, es una decisión. No necesitamos saber quién entra en la web para hacer bien un trofeo.</p>`,
      },
      {
        h: 'Qué sale de tu navegador al abrir esta página',
        html: `
<p>Nada, en realidad. <strong>Al abrir esta página tu navegador no hace ni una sola petición a un servidor ajeno:</strong> el texto, las imágenes y hasta las tipografías salen de nuestro propio servidor. No hay Google Fonts, ni CDN, ni scripts de terceros.</p>
<ul>
  <li><strong>El registro del servidor.</strong> Lo único que queda. Como cualquier web, el servidor anota las peticiones que recibe (IP, hora, página, navegador) por seguridad y para detectar averías. Son registros técnicos, no se cruzan con nada y se rotan periódicamente.</li>
</ul>`,
      },
      {
        h: 'Cuando sales de aquí',
        html: `
<p>Los enlaces a WhatsApp, Instagram y TikTok te llevan a plataformas de terceros que <strong>sí</strong> usan sus propias cookies y sus propios sistemas de seguimiento, sobre los que no tenemos control. Lo que hagan allí se rige por sus políticas, no por esta.</p>
<p>Si el día de mañana añadimos analítica o cualquier cookie, actualizaremos esta página y verás el banner de consentimiento correspondiente <em>antes</em> de que se instale nada.</p>`,
      },
    ],
  },

  // ==========================================================
  {
    slug: 'terminos',
    titulo: 'Términos y condiciones',
    descripcion: 'Condiciones de contratación: presupuesto, pago, plazos, garantía, devoluciones y propiedad de los diseños.',
    secciones: [
      {
        h: 'A quién se aplican',
        html: `
<p>Estas condiciones rigen todos los encargos que ${t.nombreComercial} (${t.nombre}, NIF ${t.nif}) acepta, tanto si contratas como <strong>particular</strong> como si lo haces en nombre de un club, una comisión, un ayuntamiento o una empresa. Aceptar un presupuesto significa aceptarlas.</p>
<p>Si contratas como consumidor, la normativa de consumo te ampara y nada de lo que sigue puede recortarte esos derechos.</p>`,
      },
      {
        h: 'Del presupuesto al pedido',
        html: `
<ol>
  <li><strong>Nos cuentas qué necesitas</strong> por WhatsApp, correo o teléfono: pieza, cantidad, fecha del evento y qué quieres que lleve grabado.</li>
  <li><strong>Te enviamos un presupuesto cerrado</strong>, con el precio final, el plazo y lo que incluye. Se mantiene ${VENTA.validezPresupuesto} desde su envío.</li>
  <li><strong>Lo aceptas por escrito</strong> (vale un mensaje) y abonas el importe.</li>
  <li><strong>Diseñamos y te lo enseñamos.</strong> Tú apruebas el diseño antes de que entre en producción.</li>
  <li><strong>Fabricamos, empaquetamos y enviamos</strong> a ${VENTA.ambito}.</li>
</ol>
<p>Los precios que ves en la web son orientativos y sirven para situarte. El que vale es el del presupuesto que aceptas. Todos los importes incluyen IVA.</p>`,
      },
      {
        h: 'Pago',
        html: `
<p><strong>Los pedidos se abonan íntegramente antes de empezar a producir</strong>, por ${VENTA.formaPago}. No es desconfianza: cada pieza se modela y se fabrica solo para ti, y si el encargo se cae a mitad no hay forma de vender ese material a nadie más.</p>
<p>Emitimos factura de todos los pedidos. Si eres una entidad pública y necesitas un procedimiento distinto (número de expediente, factura electrónica, plazos de pago administrativos), dínoslo <em>antes</em> de aceptar el presupuesto y lo ajustamos.</p>`,
      },
      {
        h: 'La aprobación del diseño es tuya',
        html: `
<p>Antes de fabricar nada te enseñamos cómo va a quedar la pieza y, cuando el pedido lo justifica, imprimimos un <strong>prototipo físico</strong> para que lo tengas en la mano.</p>
<p class="destacado">Revisa con lupa los nombres, las fechas y los textos. Los grabamos <strong>exactamente</strong> como nos los has facilitado. Una vez apruebas el diseño y la serie entra en producción, corregir una errata implica volver a fabricar, y eso se presupuesta aparte.</p>
<p>Si el error es nuestro —fabricamos algo distinto de lo que aprobaste— lo repetimos sin coste y sin discusión.</p>`,
      },
      {
        h: 'Plazos',
        html: `
<p>El plazo va en el presupuesto y empieza a contar desde que <strong>apruebas el diseño</strong>, no desde que aceptas el precio: si la validación se demora una semana, la entrega se mueve una semana.</p>
<p>Trabajamos con eventos que tienen fecha fija y nos lo tomamos en serio. Si por algo previsible no fuéramos a llegar, te avisaremos en cuanto lo sepamos y decidirás tú: ajustar el pedido, cambiar el alcance o cancelarlo con devolución de lo pagado.</p>`,
      },
      {
        h: 'Piezas personalizadas: no hay derecho de devolución',
        html: `
<p class="destacado">Todo lo que fabricamos se hace a medida y con tus datos. Por eso, y conforme al artículo 103.c del texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios, <strong>no existe derecho de desistimiento</strong>: una vez aprobado el diseño y comenzada la producción, el pedido no se puede devolver ni cancelar. Una medalla con el escudo de tu club y el nombre de tus jugadores no la puede querer nadie más.</p>
<p>Antes de que empiece la producción sí puedes cancelar: te devolvemos lo pagado descontando el trabajo de diseño ya realizado, que te entregamos justificado.</p>
<p><strong>Esto no afecta a la garantía.</strong> Si la pieza llega rota, defectuosa o no es la que aprobaste, responde el apartado siguiente, no este.</p>`,
      },
      {
        h: 'Garantía',
        html: `
<p>Si eres consumidor, tus piezas tienen la <strong>garantía legal de tres años</strong> desde la entrega prevista en la normativa de consumo. Si el producto no es conforme, lo reparamos o lo sustituimos sin coste; si eso no fuera posible o razonable, tendrás derecho a la rebaja del precio o a la resolución del contrato.</p>
<p>Avísanos en cuanto lo detectes, con fotos, en <a href="mailto:${t.email}">${t.email}</a> o por WhatsApp. Revisa el paquete al recibirlo: si el embalaje viene dañado, hazle una foto antes de abrirlo, porque nos ayuda con la reclamación al transportista.</p>
<p>La garantía no cubre el desgaste normal, los daños por golpes o caídas, las modificaciones hechas por terceros ni el deterioro por un uso distinto del previsto —muy en particular, el que se explica en el apartado siguiente—.</p>`,
      },
      {
        h: 'Qué es y qué no es una pieza impresa en FDM',
        html: `
<p>Fabricamos por deposición de filamento (FDM), con materiales de base biodegradable. Es una tecnología excelente para lo que hacemos, y tiene características propias que preferimos contarte antes de que encargues, no después:</p>
<ul>
  <li><strong>Se ven las capas.</strong> De cerca y a contraluz se aprecia la textura del proceso. No es un defecto: es cómo se construye la pieza.</li>
  <li><strong>El color puede variar levemente entre lotes</strong> de material. En una tirada grande hacemos lo posible por usar el mismo lote; si hay que empalmar dos, puede haber una diferencia mínima de tono.</li>
  <li><strong>Las medidas admiten una tolerancia de ${VENTA.tolerancia}</strong> respecto a lo diseñado.</li>
  <li><strong>El calor es su enemigo.</strong> No dejes las piezas dentro de un coche al sol, sobre un radiador ni expuestas al sol directo durante horas: pueden deformarse. Tampoco están pensadas para vivir a la intemperie de forma permanente ni para lavavajillas.</li>
</ul>
<p>Nada de esto se considera falta de conformidad. Si tu pieza tiene que aguantar condiciones especiales, dínoslo al pedir presupuesto y te propondremos el material adecuado.</p>`,
      },
      {
        h: 'Fotografías, bocetos y aspecto real',
        html: `
<p>Las fotos de ${t.web} y de nuestras redes son de trabajos que hemos fabricado de verdad, no de catálogos ajenos. Aun así están hechas y editadas para que la pieza se vea bien: iluminación, encuadre y ajuste de color. <strong>El tono real puede diferir de lo que ves en tu pantalla</strong>, que además está calibrada a su manera.</p>
<p>Durante el diseño puede que te enseñemos bocetos, renders o montajes de presentación. Sirven para decidir, no son la pieza: <strong>lo que se fabrica es el archivo que apruebas</strong>. Si el color exacto es crítico para ti, pídenos una muestra física del material antes de lanzar la serie.</p>`,
      },
      {
        h: 'Uso de inteligencia artificial',
        html: `
<p>Usamos herramientas de inteligencia artificial como apoyo en parte del trabajo: generar bocetos y variantes de una idea, limpiar o retocar imágenes, preparar montajes de presentación y agilizar pasos repetitivos del modelado. La usamos para ir más rápido, no para sustituir el criterio.</p>
<p>Lo que eso implica para ti, dicho sin rodeos:</p>
<ul>
  <li><strong>Siempre hay una persona detrás.</strong> Cada archivo que entra en producción lo revisa y valida alguien de ${t.nombreComercial}, y el prototipo que apruebas es físico. La IA no decide qué se fabrica.</li>
  <li><strong>Tu material puede pasar por herramientas de terceros</strong> (un logo, una foto, un boceto). Nunca listados de nombres ni datos de facturación. Si prefieres que no pase por ninguna, dilo antes de empezar: trabajamos sin ellas y no te cuesta más.</li>
  <li><strong>Lo generado íntegramente por una IA no goza de protección de propiedad intelectual.</strong> Por eso lo que te entregamos no es una salida automática: es un diseño trabajado y revisado por nosotros, y como tal se rige por el apartado siguiente.</li>
  <li><strong>No usamos IA para atenderte.</strong> Cuando escribes al WhatsApp de ${t.nombreComercial} te contesta una persona.</li>
</ul>`,
      },
      {
        h: 'De quién es cada cosa',
        html: `
<p><strong>Lo que nos das tú.</strong> Al enviarnos un escudo, un logo, una fotografía o un texto nos autorizas a usarlo para diseñar, fabricar y entregar tu pedido, y nos garantizas que tienes derecho a cedérnoslo. Si un tercero reclamara por esos materiales, responderías tú. Comprobamos lo evidente, pero no podemos auditar la titularidad de cada escudo.</p>
<p><strong>Lo que ponemos nosotros.</strong> El modelo 3D y el archivo de fabricación son obra de ${t.nombreComercial} y <strong>los conservamos nosotros</strong>. Lo que compras son las piezas físicas, no el archivo. Gracias a eso podemos repetirte el pedido idéntico el año que viene o actualizarlo con la nueva fecha, sin volver a cobrarte el diseño.</p>
<p>Si necesitas quedarte con el archivo, se puede: es una cesión que se pacta y se presupuesta aparte, y hay que acordarla por escrito.</p>`,
      },
      {
        h: 'Fotos de tu pedido en nuestro escaparate',
        html: `
<p>Nos gusta enseñar lo que hacemos. Salvo que nos digas lo contrario, podemos fotografiar las piezas terminadas y publicarlas en ${t.web} y en nuestras redes, incluido el escudo o el logo que lleven, citando al club o entidad.</p>
<p><strong>Puedes negarte, antes o después, y sin dar explicaciones.</strong> Basta un mensaje y no publicamos nada; si ya estaba publicado, lo retiramos. Si tu pieza es una sorpresa o tiene fecha de embargo, avísanos y esperamos a que pase el evento.</p>
<p>Nunca publicamos listados de nombres ni fotografías de menores.</p>`,
      },
      {
        h: 'Cuando algo se tuerce',
        html: `
<p>No respondemos de incumplimientos causados por hechos ajenos a nuestro control razonable —cortes de suministro, desabastecimiento de material, averías graves, fenómenos meteorológicos, huelgas del transporte—. Si ocurre, te lo contamos de inmediato y buscamos salida: reprogramar, ajustar el pedido o devolverte lo pagado por lo no entregado.</p>
<p>Nuestra responsabilidad por un pedido se limita, salvo dolo o negligencia grave, al importe de ese pedido. Esta limitación no se aplica a los daños personales ni a los derechos que la normativa de consumo te reconoce como consumidor.</p>`,
      },
      {
        h: 'Reclamaciones y ley aplicable',
        html: `
<p>Escríbenos primero a <a href="mailto:${t.email}">${t.email}</a> o al ${t.telefono}: la inmensa mayoría de las cosas se resuelven en una conversación. Tenemos hojas de reclamaciones oficiales a disposición de los consumidores, y siempre puedes acudir a los servicios de consumo de tu ayuntamiento o de la Generalitat Valenciana.</p>
<p>Se aplica la ley española. Si eres consumidor, serán competentes los juzgados que te correspondan según la normativa de consumo, normalmente los de tu domicilio. Si contratas como empresa o entidad, ambas partes se someten a los juzgados de Valencia.</p>
<p>Podemos actualizar estas condiciones. A tu pedido se le aplican las que estuvieran publicadas el día en que aceptaste el presupuesto.</p>`,
      },
    ],
  },
];
