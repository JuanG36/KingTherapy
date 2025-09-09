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
      respuesta: 1
    },
    {
      pregunta: "¿Qué articulación une el fémur con la tibia?",
      opciones: ["Cadera", "Tobillo", "Rodilla", "Hombro"],
      respuesta: 2
    },
    {
      pregunta: "¿Cuál es la función principal del diafragma?",
      opciones: ["Inspiración", "Digestión", "Estabilidad lumbar", "Deglución"],
      respuesta: 0
    },
    {
      pregunta: "¿Qué tipo de contracción mantiene la fuerza sin movimiento?",
      opciones: ["Concéntrica", "Excéntrica", "Isométrica", "Isotónica"],
      respuesta: 2
    },
    {
      pregunta: "¿Qué hueso forma el talón?",
      opciones: ["Astrágalo", "Calcáneo", "Cuboides", "Escafoides"],
      respuesta: 1
    },
    {
      pregunta: "¿Qué músculo es conocido como el gemelo interno?",
      opciones: ["Gastrocnemio medial", "Sóleo", "Plantaris", "Tibial posterior"],
      respuesta: 0
    },
    {
      pregunta: "¿Cuál es el rango normal de movimiento de la flexión de codo?",
      opciones: ["0-90°", "0-120°", "0-135°", "0-150°"],
      respuesta: 2
    },
    {
      pregunta: "¿Qué músculo es el principal abductor de cadera?",
      opciones: ["Glúteo medio", "Glúteo mayor", "Glúteo menor", "Psoas"],
      respuesta: 0
    },
    {
      pregunta: "¿Cuál es el hueso más pequeño del cuerpo humano?",
      opciones: ["Martillo", "Yunque", "Estribo", "Falange distal"],
      respuesta: 2
    },
    {
      pregunta: "¿Qué movimiento hace principalmente el tríceps braquial?",
      opciones: ["Flexión de codo", "Extensión de codo", "Supinación", "Abducción"],
      respuesta: 1
    },
    {
      pregunta: "¿Cuál es el principal hueso del muslo?",
      opciones: ["Tibia", "Fémur", "Peroné", "Húmero"],
      respuesta: 1
    },
    {
      pregunta: "¿Qué movimiento realiza el supraespinoso?",
      opciones: ["Abducción inicial del hombro", "Rotación interna", "Rotación externa", "Flexión"],
      respuesta: 0
    },
    {
      pregunta: "¿Dónde se encuentra el hueso escafoides?",
      opciones: ["Mano", "Pie", "Codo", "Hombro"],
      respuesta: 0
    },
    {
      pregunta: "¿Qué hueso se articula con el acetábulo?",
      opciones: ["Fémur", "Tibia", "Peroné", "Húmero"],
      respuesta: 0
    },
    {
      pregunta: "¿Cuál es el músculo antagonista del bíceps braquial?",
      opciones: ["Tríceps braquial", "Braquial", "Serrato anterior", "Redondo menor"],
      respuesta: 0
    }
  ],

  intermedio: [
    {
      pregunta: "¿Qué evalúa el test de Lachman?",
      opciones: ["LCA", "LCP", "LCM", "LCL"],
      respuesta: 0
    },
    {
      pregunta: "¿Qué músculo estabiliza dinámicamente la rodilla?",
      opciones: ["Cuádriceps", "Isquiotibiales", "Sartorio", "Gastrocnemio"],
      respuesta: 0
    },
    {
      pregunta: "El test de Thomas evalúa la flexibilidad de:",
      opciones: ["Isquiotibiales", "Psoas-ilíaco", "Glúteo mayor", "Sóleo"],
      respuesta: 1
    },
    {
      pregunta: "El ligamento más afectado en un esguince de tobillo es:",
      opciones: ["Deltoideo", "Peroneoastragalino anterior", "Calcaneoperoneo", "Peroneoastragalino posterior"],
      respuesta: 1
    },
    {
      pregunta: "¿Qué evalúa el test de Neer?",
      opciones: ["Manguito rotador", "Ligamento cruzado anterior", "Menisco medial", "Columna lumbar"],
      respuesta: 0
    },
    {
      pregunta: "¿Qué rango de flexión de rodilla es normal?",
      opciones: ["0-90°", "0-120°", "0-135°", "0-150°"],
      respuesta: 2
    },
    {
      pregunta: "¿Qué evalúa el test de Apley (compresión)?",
      opciones: ["Meniscos", "Ligamento cruzado anterior", "LCM", "Cápsula articular"],
      respuesta: 0
    },
    {
      pregunta: "¿Qué evalúa el test de Trendelenburg?",
      opciones: ["Glúteo medio", "Ligamento cruzado", "Movilidad lumbar", "Menisco"],
      respuesta: 0
    },
    {
      pregunta: "¿Dónde se palpa el pulso tibial posterior?",
      opciones: ["Debajo maléolo medial", "Debajo maléolo lateral", "Dorsal del pie", "Cara anterior tobillo"],
      respuesta: 0
    },
    {
      pregunta: "¿Qué evalúa el test de Phalen?",
      opciones: ["Radiculopatía cervical", "Síndrome del túnel carpiano", "Epicondilitis", "Inestabilidad muñeca"],
      respuesta: 1
    },
    {
      pregunta: "¿Qué evalúa el test de Adson?",
      opciones: ["Síndrome del opérculo torácico", "Lesión de LCA", "Lesión meniscal", "Luxación rótula"],
      respuesta: 0
    },
    {
      pregunta: "¿Qué evalúa el test de Spurling?",
      opciones: ["Radiculopatía cervical", "Hernia lumbar", "Síndrome piriforme", "Epicondilitis medial"],
      respuesta: 0
    },
    {
      pregunta: "El test de Lachman es más sensible que el de cajón anterior, ¿verdadero?",
      opciones: ["Verdadero", "Falso"],
      respuesta: 0
    },
    {
      pregunta: "El test de Allen evalúa:",
      opciones: ["Circulación arterial mano", "Inestabilidad hombro", "Piriforme", "Dolor lumbar"],
      respuesta: 0
    },
    {
      pregunta: "El balance muscular de Kendall llega hasta:",
      opciones: ["3", "4", "5", "10"],
      respuesta: 2
    }
  ],

  dificil: [
    {
      pregunta: "¿Qué evalúa el test de Pivot Shift?",
      opciones: ["LCA", "LCP", "LCL", "Menisco medial"],
      respuesta: 0
    },
    {
      pregunta: "El reflejo aquíleo evalúa qué raíz nerviosa:",
      opciones: ["L3", "L4", "S1", "S2"],
      respuesta: 2
    },
    {
      pregunta: "La escala de Ashworth modificada mide:",
      opciones: ["Fuerza", "Espasticidad", "Dolor", "Movilidad"],
      respuesta: 1
    },
    {
      pregunta: "¿Qué evalúa el test de Ober?",
      opciones: ["Isquiotibiales", "Tensor de la fascia lata", "Aductor mayor", "Sóleo"],
      respuesta: 1
    },
    {
      pregunta: "El ángulo Q aumentado predispone a:",
      opciones: ["Luxación rótula", "Artrosis cadera", "LCA", "Tendinopatía Aquiles"],
      respuesta: 0
    },
    {
      pregunta: "El test de Slump evalúa:",
      opciones: ["Movilidad neural ciático", "Luxación rótula", "Estabilidad cervical", "Fuerza glúteo medio"],
      respuesta: 0
    },
    {
      pregunta: "El signo de Lhermitte se asocia con:",
      opciones: ["Lesión medular cervical", "Tendinitis supraespinoso", "LCA", "Dolor facetario"],
      respuesta: 0
    },
    {
      pregunta: "El test de Hawkins-Kennedy evalúa:",
      opciones: ["Impingement subacromial", "Luxación hombro", "Síndrome piriforme", "Epicondilitis medial"],
      respuesta: 0
    },
    {
      pregunta: "El test de Apprehension evalúa:",
      opciones: ["Luxación anterior de hombro", "Menisco lateral", "Inestabilidad tobillo", "Epicondilitis"],
      respuesta: 0
    },
    {
      pregunta: "El test de Finkelstein es positivo en:",
      opciones: ["De Quervain", "Túnel carpiano", "Epicondilitis", "Radiculopatía C7"],
      respuesta: 0
    },
    {
      pregunta: "La escala de Borg mide:",
      opciones: ["Percepción del esfuerzo", "Espasticidad", "Dolor neuropático", "Fuerza"],
      respuesta: 0
    },
    {
      pregunta: "El test de Allen modificado evalúa:",
      opciones: ["Irrigación arterial mano", "Inestabilidad hombro", "Dolor facetario lumbar", "Síndrome piriforme"],
      respuesta: 0
    },
    {
      pregunta: "La maniobra de Valsalva puede indicar:",
      opciones: ["Hernia disco lumbar", "Hipertensión", "Tendinitis", "Lumbalgia mecánica"],
      respuesta: 0
    },
    {
      pregunta: "El síndrome compartimental agudo cursa con:",
      opciones: ["Dolor intenso + pérdida sensibilidad + sin pulso", "Dolor leve", "Espasmo pasajero", "Rigidez simple"],
      respuesta: 0
    },
    {
      pregunta: "El test de Spurling combinado con distracción cervical confirma:",
      opciones: ["Radiculopatía cervical", "Hernia lumbar", "Síndrome piriforme", "Lesión meniscal"],
      respuesta: 0
    }
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

  // Al cargar, el glosario queda vacío
  if (listaGlosario) {
    listaGlosario.innerHTML = '';
  }

  // Función para filtrar el glosario por término
  function filtrarGlosario() {
    const input = buscadorGlosario.value.toLowerCase();
    listaGlosario.innerHTML = "";
    let encontrados = 0;
    if (input.length === 0) {
      // Si el input está vacío, no mostramos nada
      return;
    }
    terminosGlosario.forEach(item => {
      if (item.termino.toLowerCase().includes(input)) {
        encontrados++;
        const dt = document.createElement("dt");
        dt.textContent = item.termino;
        dt.classList.add("fw-bold", "mt-2");
        const dd = document.createElement("dd");
        dd.textContent = item.definicion;
        dd.classList.add("text-muted");
        listaGlosario.appendChild(dt);
        listaGlosario.appendChild(dd);
      }
    });
    if (encontrados === 0) {
      const mensaje = document.createElement("p");
      mensaje.textContent = "No se encontraron resultados.";
      mensaje.classList.add("text-danger", "fw-bold", "mt-2");
      listaGlosario.appendChild(mensaje);
    }
  }

  // Asignar evento al input para filtrar mientras se escribe
  if (buscadorGlosario) {
    buscadorGlosario.addEventListener('input', filtrarGlosario);
  }
});
// ===================================================================
// --- LÓGICA PARA EL CASO CLÍNICO INTERACTIVO CON IA ---
// ===================================================================

// Asegurémonos de que este código también esté dentro del DOMContentLoaded
// para que se ejecute después de que la página se cargue por completo.
document.addEventListener('DOMContentLoaded', () => {
  // ... (aquí dentro ya está tu código del glosario) ...
  
  // --- NUEVO CÓDIGO PARA LA IA ---
  const btnEvaluar = document.getElementById('btn-evaluar-ia');
  const respuestaAlumnoTextarea = document.getElementById('respuesta-alumno');
  const feedbackContainer = document.getElementById('feedback-ia-container');
  const btnTexto = document.getElementById('btn-evaluar-texto');
  const btnSpinner = document.getElementById('btn-evaluar-spinner');

  // Verificamos si el botón existe en la página
  if (btnEvaluar) {
    // Añadimos un "escuchador" que se activa cuando el usuario hace clic
    btnEvaluar.addEventListener('click', async () => {
      const respuestaAlumno = respuestaAlumnoTextarea.value;

      // Validación simple: no enviar si no hay respuesta
      if (!respuestaAlumno.trim()) {
        feedbackContainer.innerHTML = `<div class="alert alert-warning">Por favor, escribe tu plan de tratamiento antes de evaluar.</div>`;
        return;
      }

      // 1. Preparamos la interfaz para la carga
      btnTexto.textContent = 'Evaluando...';
      btnSpinner.classList.remove('d-none'); // Muestra el spinner
      btnEvaluar.disabled = true;
      feedbackContainer.innerHTML = ''; // Limpiamos el feedback anterior

      try {
        // 2. Llamamos a nuestra función serverless (el "mesero")
        const response = await fetch('/.netlify/functions/evaluar-caso', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ respuestaAlumno: respuestaAlumno }),
        });

        // Si la respuesta del servidor no es exitosa, lanzamos un error
        if (!response.ok) {
          throw new Error('Hubo un problema con la respuesta del servidor.');
        }

        // 3. Obtenemos el feedback de la IA desde la respuesta
        const data = await response.json();
        const feedbackHTML = data.feedback;

        // 4. Mostramos el feedback en un cuadro bonito
        feedbackContainer.innerHTML = `
          <div class="card bg-light mt-3">
            <div class="card-body">
              <h6 class="card-title text-success">Feedback de la IA:</h6>
              ${feedbackHTML}
            </div>
          </div>
        `;

      } catch (error) {
        // 5. Si algo sale mal, mostramos un mensaje de error
        console.error('Error al llamar a la función de IA:', error);
        feedbackContainer.innerHTML = `<div class="alert alert-danger">Lo sentimos, no se pudo obtener el feedback. Por favor, inténtalo de nuevo más tarde.</div>`;
      
      } finally {
        // 6. Restauramos el botón a su estado original, tanto si hubo éxito como si hubo error
        btnTexto.textContent = 'Evaluar con IA';
        btnSpinner.classList.add('d-none'); // Oculta el spinner
        btnEvaluar.disabled = false;
      }
    });
  }
});