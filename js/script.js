// ===================================================================
//  SCRIPT FINAL Y CORREGIDO PARA APPFISIO
// ===================================================================

// ===================================================================
// --- LÓGICA DEL CUESTIONARIO ---
// ===================================================================
// (Esta parte no ha cambiado, es la misma que ya tenías)
const preguntas = {
  basico: [
    {
      pregunta: "¿Cuál es el hueso más largo del cuerpo humano?",
      opciones: ["Tibia", "Fémur", "Húmero", "Peroné"],
      respuesta: 1,
      explicacion: "El fémur, ubicado en el muslo, es el hueso más largo y fuerte del cuerpo humano."
    },
    {
      pregunta: "¿Qué músculo es el principal responsable de la flexión del codo?",
      opciones: ["Tríceps braquial", "Deltoides", "Bíceps braquial", "Pectoral mayor"],
      respuesta: 2,
      explicacion: "El bíceps braquial, ubicado en la parte anterior del brazo, es el principal motor de la flexión del codo."
    }
  ],
  intermedio: [
    // ... todas tus preguntas de nivel intermedio
  ],
  dificil: [
    // ... todas tus preguntas de nivel difícil
  ]
};
let nivelActual = "";
let indicePregunta = 0;
let puntaje = 0;
const contenedorQuiz = document.getElementById("quiz-container");

function startQuiz(nivelSeleccionado) {
  if (!preguntas[nivelSeleccionado] || preguntas[nivelSeleccionado].length === 0) {
    contenedorQuiz.innerHTML = `<div class="alert alert-warning">No hay preguntas disponibles para el nivel ${nivelSeleccionado}.</div>`;
    return;
  }
  nivelActual = nivelSeleccionado;
  indicePregunta = 0;
  puntaje = 0;
  mostrarPregunta();
}

function mostrarPregunta() {
  const pregunta = preguntas[nivelActual][indicePregunta];
  contenedorQuiz.innerHTML = `
    <div class="card shadow-sm p-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="mb-0">${indicePregunta + 1}. ${pregunta.pregunta}</h5>
        <span class="badge bg-secondary">${indicePregunta + 1} / ${preguntas[nivelActual].length}</span>
      </div>
      <div id="opciones-container" class="d-grid gap-2">
        ${pregunta.opciones.map((opcion, i) => `
          <button class="btn btn-outline-primary text-start" data-index="${i}">
            ${opcion}
          </button>
        `).join("")}
      </div>
      <div id="feedback-container" class="mt-3"></div>
    </div>
  `;
  document.querySelectorAll('#opciones-container button').forEach(button => {
    button.addEventListener('click', verificarRespuesta);
  });
}

function verificarRespuesta(event) {
  const botonSeleccionado = event.target;
  const indiceSeleccionado = parseInt(botonSeleccionado.dataset.index);
  const pregunta = preguntas[nivelActual][indicePregunta];
  const esCorrecta = (indiceSeleccionado === pregunta.respuesta);
  const todosLosBotones = document.querySelectorAll('#opciones-container button');
  todosLosBotones.forEach(button => {
    button.disabled = true;
  });

  if (esCorrecta) {
    puntaje++;
    botonSeleccionado.classList.remove('btn-outline-primary');
    botonSeleccionado.classList.add('btn-success');
  } else {
    botonSeleccionado.classList.remove('btn-outline-primary');
    botonSeleccionado.classList.add('btn-danger');
    todosLosBotones[pregunta.respuesta].classList.remove('btn-outline-primary');
    todosLosBotones[pregunta.respuesta].classList.add('btn-success');
  }
  mostrarBotonSiguiente();
}

function mostrarBotonSiguiente() {
  const feedbackContainer = document.getElementById('feedback-container');
  const esLaUltimaPregunta = (indicePregunta === preguntas[nivelActual].length - 1);
  const textoBoton = esLaUltimaPregunta ? 'Ver Resultados' : 'Siguiente Pregunta';
  feedbackContainer.innerHTML = `<button class="btn btn-primary w-100" onclick="siguientePaso()">${textoBoton}</button>`;
}

function siguientePaso() {
  indicePregunta++;
  if (indicePregunta < preguntas[nivelActual].length) {
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  contenedorQuiz.innerHTML = `
    <div class="card text-center shadow-sm p-4">
      <h3>¡Cuestionario completado!</h3>
      <p class="lead">Tu puntaje final es:</p>
      <h2 class="display-4 fw-bold my-3">${puntaje} de ${preguntas[nivelActual].length}</h2>
      <button class="btn btn-primary" onclick="startQuiz('${nivelActual}')">
        Reintentar Nivel ${nivelActual.charAt(0).toUpperCase() + nivelActual.slice(1)}
      </button>
    </div>
  `;
}

// ===================================================================
// --- LÓGICA DEL GLOSARIO (VERSIÓN CORREGIDA) ---
// ===================================================================

// Esta función se asegura de que todo el HTML esté cargado antes de ejecutar el código.
document.addEventListener('DOMContentLoaded', () => {
  
  const buscadorGlosario = document.getElementById('buscadorGlosario');
  const listaGlosario = document.getElementById('listaGlosario');

  // Función para llenar la lista del glosario desde el archivo de datos
  function cargarGlosario() {
    // 1. Verificamos que tanto la lista del HTML como los datos del glosario existan
    if (!listaGlosario || typeof terminosGlosario === 'undefined') {
      return;
    }
    
    // 2. Limpiamos la lista para asegurarnos de que esté vacía
    listaGlosario.innerHTML = '';
    
    // 3. Recorremos cada término de nuestra "base de datos" y creamos el HTML
    terminosGlosario.forEach(item => {
      const dt = document.createElement('dt');
      dt.textContent = item.termino;
      
      const dd = document.createElement('dd');
      dd.textContent = item.definicion;
      
      listaGlosario.appendChild(dt);
      listaGlosario.appendChild(dd);
    });
  }

  // Función para filtrar los términos según lo que escribe el usuario
  function filtrarGlosario() {
    const textoBuscado = buscadorGlosario.value.toLowerCase();
    const terminosEnLista = listaGlosario.getElementsByTagName('dt');
    const definicionesEnLista = listaGlosario.getElementsByTagName('dd');

    for (let i = 0; i < terminosEnLista.length; i++) {
      const textoTermino = terminosEnLista[i].textContent.toLowerCase();
      
      if (textoTermino.includes(textoBuscado)) {
        terminosEnLista[i].style.display = '';
        definicionesEnLista[i].style.display = '';
      } else {
        terminosEnLista[i].style.display = 'none';
        definicionesEnLista[i].style.display = 'none';
      }
    }
  }

  // --- INICIALIZACIÓN DEL GLOSARIO ---
  // 1. Llamamos a la función para que construya la lista del glosario.
  cargarGlosario();
  
  // 2. Si el buscador existe, le decimos que llame a la función de filtrar cada vez que el usuario teclee algo.
  if (buscadorGlosario) {
    buscadorGlosario.addEventListener('keyup', filtrarGlosario);
  }
});