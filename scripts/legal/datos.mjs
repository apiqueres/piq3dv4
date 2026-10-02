// ============================================================
//  Los datos que la ley obliga a publicar, en UN solo sitio.
//
//  El NIF y el domicilio salen en tres paginas distintas. Si se teclean
//  tres veces, antes o despues dejan de coincidir, y un aviso legal con
//  datos que no cuadran no identifica a nadie: es como no tenerlo.
//
//  >>> COMO RELLENARLO <<<
//  1. Sustituye los «PENDIENTE» por los datos reales.
//  2. Pon PENDIENTE_DE_DATOS = false.
//  3. node scripts/build-legal.mjs
//
//  Mientras PENDIENTE_DE_DATOS siga en true, las paginas se publican con
//  un aviso rojo bien visible y el build lo canta por consola. Es a
//  proposito: es la unica forma de que no se escape a produccion un
//  aviso legal sin NIF.
// ============================================================

export const PENDIENTE_DE_DATOS = false;

export const TITULAR = {
  // Nombre y apellidos de la persona fisica. No vale solo "PIQ3D":
  // la LSSI pide el titular real detras del nombre comercial.
  nombre: 'Alejandro Piqueres',
  nif: '73658900C',
  // Domicilio de la actividad. Es obligatorio y tiene que ser una
  // direccion postal completa, no solo la localidad.
  domicilio: 'Calle Cap de Canet, 3 · 46419 El Mareny de Barraquetes, Sueca (Valencia)',
  nombreComercial: 'PIQ3D',
  actividad: 'Diseño y fabricación de piezas por impresión 3D: trofeos, medallas, merchandising y soportes con QR y NFC.',
  email: 'contacto@piq3d.com',
  telefono: '623 75 44 44',
  web: 'piq3d.com',
};

export const PROVEEDORES = {
  // Quien aloja el servidor. Va en privacidad como encargado del tratamiento.
  hosting: 'Hetzner Online GmbH, con los servidores en Núremberg (Alemania), dentro de la Unión Europea'
};

export const VENTA = {
  // Dias que se mantiene el precio de un presupuesto ya enviado.
  validezPresupuesto: '30 días naturales',
  // Se confirmo: el pedido se cobra integro antes de producir.
  formaPago: 'transferencia bancaria o Bizum, salvo que el presupuesto indique otra cosa',
  // Margen dimensional que admitimos sin considerarlo defecto.
  tolerancia: '± 0,5 mm',
  ambito: 'toda España',
};

export const ACTUALIZADO = '2 de octubre de 2026';
