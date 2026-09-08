// keycodes.js
// Mapa de datos: cada tecla activa un cuerpo celeste distinto.
// Se aceptan tanto las teclas numéricas 1-5 como la inicial del nombre,
// así hay más de 5 combinaciones posibles para cumplir el mínimo pedido.

const cuerpos = {
  '1': {
    nombre: 'Mercurio',
    imagen: 'images/mercurio.svg',
    descripcion: 'El planeta más cercano al Sol. Su superficie está cubierta de cráteres y no tiene atmósfera que retenga el calor.',
    temperatura: '167 °C promedio',
    distancia: '57.9 millones km',
    lunas: '0',
  },
  '2': {
    nombre: 'Venus',
    imagen: 'images/venus.svg',
    descripcion: 'Envuelto en densas nubes de ácido sulfúrico, es el planeta más caliente del sistema solar por su efecto invernadero extremo.',
    temperatura: '464 °C promedio',
    distancia: '108.2 millones km',
    lunas: '0',
  },
  '3': {
    nombre: 'Tierra',
    imagen: 'images/tierra.svg',
    descripcion: 'El único planeta conocido con vida. El 71% de su superficie está cubierta de agua líquida.',
    temperatura: '15 °C promedio',
    distancia: '149.6 millones km',
    lunas: '1',
  },
  '4': {
    nombre: 'Marte',
    imagen: 'images/marte.svg',
    descripcion: 'El planeta rojo, llamado así por el óxido de hierro en su superficie. Alberga el volcán más grande del sistema solar.',
    temperatura: '-63 °C promedio',
    distancia: '227.9 millones km',
    lunas: '2',
  },
  '5': {
    nombre: 'Júpiter',
    imagen: 'images/jupiter.svg',
    descripcion: 'El gigante gaseoso más grande del sistema solar. Su Gran Mancha Roja es una tormenta que dura siglos.',
    temperatura: '-110 °C promedio',
    distancia: '778.5 millones km',
    lunas: '95',
  },
};

// Alias por letra inicial, para poder usar teclas de letra además de números
const alias = {
  'm': '1', // Mercurio
  'v': '2', // Venus
  't': '3', // Tierra
  'r': '4', // maRte (evita choque con 'm' de Mercurio)
  'j': '5', // Júpiter
};

function resolverTecla(tecla) {
  const k = tecla.toLowerCase();
  if (cuerpos[k]) return k;
  if (alias[k]) return alias[k];
  return null;
}

function actualizarPanel(id) {
  const datos = cuerpos[id];
  if (!datos) return;

  const imagenEl = document.getElementById('imagen-cuerpo');
  const nombreEl = document.getElementById('nombre-cuerpo');
  const descripcionEl = document.getElementById('descripcion-cuerpo');
  const temperaturaEl = document.getElementById('dato-temperatura');
  const distanciaEl = document.getElementById('dato-distancia');
  const lunasEl = document.getElementById('dato-lunas');

  imagenEl.style.opacity = 0;
  setTimeout(() => {
    imagenEl.src = datos.imagen;
    imagenEl.alt = 'Ilustración de ' + datos.nombre;
    imagenEl.style.opacity = 1;
  }, 120);

  nombreEl.textContent = datos.nombre;
  descripcionEl.textContent = datos.descripcion;
  temperaturaEl.textContent = datos.temperatura;
  distanciaEl.textContent = datos.distancia;
  lunasEl.textContent = datos.lunas;

  // Resalta la tecla activa en la leyenda
  document.querySelectorAll('.tecla').forEach((el) => {
    el.classList.toggle('activa', el.dataset.tecla === id);
  });
}

document.addEventListener('keydown', (evento) => {
  const id = resolverTecla(evento.key);
  if (id) {
    actualizarPanel(id);
  }
});

// Estado inicial al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  actualizarPanel('1');
});
