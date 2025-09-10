
// =====================
// --- MINI QUIZ TIPO KAHOOT ---
// =====================
const miniQuizPreguntas = {
  funcionales: [
    {
      pregunta: "¿Qué evalúa el test de Schober?",
      opciones: ["Flexión lumbar", "Extensión cervical", "Abducción de hombro", "Rotación de cadera"],
      respuesta: 0,
  explicacion: "El test de Schober evalúa la movilidad de la columna lumbar, especialmente la flexión. Se marcan dos puntos: uno a nivel de la espina iliaca posterosuperior (S1) y otro 10 cm por encima. El paciente flexiona el tronco hacia adelante y se mide el aumento de distancia entre los puntos. Un incremento menor a 5 cm sugiere limitación lumbar, útil en el diagnóstico de espondilitis anquilosante y otras patologías lumbares. (Fuente: van der Linden S, et al. Arthritis Rheum. 1984)"
    },
    {
      pregunta: "¿Para qué sirve el test de TUG (Timed Up and Go)?",
      opciones: ["Evaluar equilibrio y movilidad funcional", "Medir fuerza de prensión", "Valorar espasticidad", "Detectar escoliosis"],
      respuesta: 0,
  explicacion: "El Timed Up and Go (TUG) es una prueba funcional validada para valorar el equilibrio, la movilidad y el riesgo de caídas en adultos mayores y pacientes neurológicos. El paciente se levanta de una silla, camina 3 metros, gira, regresa y se sienta. Un tiempo mayor a 13.5 segundos indica alto riesgo de caídas. (Podsiadlo D, Richardson S. J Am Geriatr Soc. 1991)"
    },
    {
      pregunta: "¿Qué prueba funcional se usa para valorar la marcha?",
      opciones: ["6 minutos marcha", "Test de Spurling", "Test de Neer", "Test de Allen"],
      respuesta: 0,
  explicacion: "La prueba de los 6 minutos marcha (6MWT) evalúa la capacidad funcional y la resistencia aeróbica. El paciente camina la mayor distancia posible durante 6 minutos en un pasillo plano. Es útil en rehabilitación cardiopulmonar, enfermedades neuromusculares y geriatría. Se compara con valores de referencia según edad y sexo. (ATS Statement: Am J Respir Crit Care Med. 2002)"
    },
    {
      pregunta: "¿Qué evalúa el test de levantarse de la silla?",
      opciones: ["Fuerza de miembros inferiores", "Movilidad cervical", "Propiocepción", "Dolor lumbar"],
      respuesta: 0,
  explicacion: "El test de levantarse y sentarse (Sit-to-Stand Test) mide la fuerza y resistencia de los miembros inferiores. El paciente se sienta y se levanta de una silla tantas veces como pueda en 30 segundos o realiza 5 repeticiones lo más rápido posible. Es predictor de funcionalidad y riesgo de caídas en adultos mayores. (Jones CJ, et al. J Aging Phys Act. 1999)"
    },
    {
      pregunta: "¿Qué mide el test de equilibrio de Berg?",
      opciones: ["Riesgo de caídas", "Fuerza de puño", "Espasticidad", "Dolor articular"],
      respuesta: 0,
  explicacion: "La Escala de Equilibrio de Berg consta de 14 tareas funcionales (como levantarse, girar, alcanzar, etc.) que evalúan el equilibrio estático y dinámico. Cada tarea se puntúa de 0 a 4, con un máximo de 56 puntos. Menos de 45 puntos indica mayor riesgo de caídas. Es una herramienta validada en geriatría y rehabilitación neurológica. (Berg K, et al. Scand J Rehabil Med. 1992)"
    },
    {
      pregunta: "¿Qué evalúa el test de Romberg?",
      opciones: ["Equilibrio estático", "Fuerza de cuádriceps", "Dolor lumbar", "Espasticidad"],
      respuesta: 0,
  explicacion: "El test de Romberg evalúa la integridad de la propiocepción y el equilibrio estático. El paciente permanece de pie con los pies juntos, primero con ojos abiertos y luego cerrados. La pérdida de equilibrio al cerrar los ojos indica alteración de la sensibilidad propioceptiva o disfunción de la columna posterior. Es útil en la valoración neurológica. (Patel M, et al. J Neurol Sci. 2011)"
    },
    {
      pregunta: "¿Para qué sirve el test de alcance funcional?",
      opciones: ["Medir el alcance máximo hacia adelante sin perder el equilibrio", "Valorar fuerza de bíceps", "Evaluar flexibilidad lumbar", "Medir espasticidad"],
      respuesta: 0,
  explicacion: "El test de alcance funcional (Functional Reach Test) mide la distancia máxima que una persona puede alcanzar hacia adelante desde una posición de pie sin perder el equilibrio ni mover los pies. Es un predictor de riesgo de caídas y evalúa el control postural. Valores menores a 15 cm se asocian a mayor riesgo de caídas en adultos mayores. (Duncan PW, et al. J Gerontol. 1990)"
    },
    {
      pregunta: "¿Qué evalúa el test de unipodal?",
      opciones: ["Equilibrio sobre un pie", "Fuerza de hombro", "Propiocepción de mano", "Dolor cervical"],
      respuesta: 0,
  explicacion: "El test de apoyo unipodal evalúa el equilibrio estático y la fuerza de los miembros inferiores. El paciente permanece de pie sobre un solo pie el mayor tiempo posible (máx. 30 seg). Menos de 5 segundos se asocia a alto riesgo de caídas. Es útil en geriatría y rehabilitación ortopédica. (Springer BA, et al. Arch Phys Med Rehabil. 2007)"
    },
    {
      pregunta: "¿Qué evalúa el test de escaleras?",
      opciones: ["Capacidad funcional de miembros inferiores", "Fuerza de mano", "Dolor lumbar", "Espasticidad"],
      respuesta: 0,
  explicacion: "El test de escaleras evalúa la capacidad funcional de los miembros inferiores y la resistencia. El paciente sube y baja un tramo de escaleras (generalmente 12-14 escalones) lo más rápido posible. Se registra el tiempo o el número de escalones en un tiempo determinado. Es útil en rehabilitación cardíaca y ortopédica. (Bohannon RW, et al. J Strength Cond Res. 2015)"
    },
    {
      pregunta: "¿Qué evalúa el test de sentarse y alcanzar?",
      opciones: ["Flexibilidad de la cadena posterior", "Fuerza de cuádriceps", "Propiocepción", "Dolor cervical"],
      respuesta: 0,
  explicacion: "El test de sentarse y alcanzar (Sit and Reach Test) mide la flexibilidad de la cadena posterior (isquiotibiales y zona lumbar). El paciente, sentado con las piernas extendidas, alcanza hacia adelante lo más lejos posible. Es ampliamente utilizado en valoración física y deportiva. Valores bajos indican rigidez o acortamiento muscular. (Wells KF, Dillon EK. Res Q. 1952)"
    }
  ],
  resistencia: [
    {
      pregunta: "¿Qué evalúa el test de Ruffier-Dickson?",
      opciones: ["Resistencia cardiovascular", "Fuerza de bíceps", "Propiocepción", "Flexibilidad lumbar"],
      respuesta: 0,
  explicacion: "El test de Ruffier-Dickson evalúa la adaptación cardiovascular al ejercicio. Consiste en realizar 30 sentadillas en 45 segundos y medir la frecuencia cardíaca antes, inmediatamente después y tras 1 minuto de recuperación. El índice resultante permite valorar la eficiencia cardíaca y la resistencia aeróbica. Es útil en medicina deportiva y rehabilitación. (Ruffier J, Dickson A. Arch Mal Coeur Vaiss. 1950)"
    },
    {
      pregunta: "¿Qué prueba se utiliza para medir la resistencia aeróbica?",
      opciones: ["Test de Cooper", "Test de Spurling", "Test de Allen", "Test de Neer"],
      respuesta: 0,
  explicacion: "El test de Cooper es una prueba de campo para estimar la resistencia aeróbica y el consumo máximo de oxígeno (VO2max). El paciente corre la mayor distancia posible en 12 minutos. La distancia recorrida se compara con tablas de referencia para estimar la capacidad cardiorrespiratoria. Es ampliamente utilizado en deportes y rehabilitación. (Cooper KH. JAMA. 1968)"
    },
    {
      pregunta: "¿Qué mide el test de Harvard?",
      opciones: ["Resistencia muscular", "Fuerza máxima", "Equilibrio", "Dolor lumbar"],
      respuesta: 0,
  explicacion: "El test de Harvard Step mide la resistencia muscular y la recuperación cardiovascular. El paciente sube y baja un escalón de 50 cm a un ritmo constante durante 5 minutos o hasta fatiga. Se mide la frecuencia cardíaca en recuperación para calcular el índice de Harvard, indicador de la resistencia física. (Brouha L, et al. Am J Physiol. 1943)"
    },
    {
      pregunta: "¿Qué evalúa el test de Course Navette?",
      opciones: ["Resistencia cardiorrespiratoria", "Fuerza de prensión", "Espasticidad", "Propiocepción"],
      respuesta: 0,
  explicacion: "El test de Course Navette (o test de los 20 metros) evalúa la resistencia cardiorrespiratoria máxima. El paciente corre ida y vuelta entre dos líneas separadas 20 metros, siguiendo señales sonoras que aumentan progresivamente la velocidad. El resultado permite estimar el VO2max. Es muy usado en educación física y deportes. (Léger LA, et al. Eur J Appl Physiol. 1988)"
    },
    {
      pregunta: "¿Qué mide el test de sentadillas en 1 minuto?",
      opciones: ["Resistencia muscular de piernas", "Flexibilidad lumbar", "Dolor cervical", "Propiocepción"],
      respuesta: 0,
  explicacion: "El test de sentadillas en 1 minuto mide la resistencia muscular de los miembros inferiores. El paciente realiza el mayor número posible de sentadillas en 60 segundos. Es útil para valorar la fuerza-resistencia y la evolución en programas de entrenamiento o rehabilitación. (Suni JH, et al. Med Sci Sports Exerc. 1998)"
    },
    {
      pregunta: "¿Qué evalúa el test de burpees en 3 minutos?",
      opciones: ["Resistencia general y cardiovascular", "Fuerza de hombro", "Propiocepción", "Flexibilidad lumbar"],
      respuesta: 0,
  explicacion: "El test de burpees en 3 minutos evalúa la resistencia general y cardiovascular. El paciente realiza la mayor cantidad de burpees posibles en 180 segundos. Es una prueba exigente que involucra grandes grupos musculares y demanda cardiovascular, útil en valoración funcional y deportiva. (Kikuchi N, et al. J Strength Cond Res. 2017)"
    },
    {
      pregunta: "¿Qué evalúa el test de escalera de step?",
      opciones: ["Resistencia cardiovascular subiendo y bajando un escalón", "Fuerza de bíceps", "Dolor lumbar", "Propiocepción"],
      respuesta: 0,
  explicacion: "El test de escalera de step evalúa la resistencia cardiovascular subiendo y bajando un escalón de altura estándar (20-40 cm) a un ritmo marcado (por ejemplo, 24 subidas/minuto) durante 3-5 minutos. Se mide la frecuencia cardíaca en recuperación para valorar la condición física. (McArdle WD, et al. Exercise Physiology. 2010)"
    },
    {
      pregunta: "¿Qué evalúa el test de abdominales en 1 minuto?",
      opciones: ["Resistencia muscular abdominal", "Flexibilidad lumbar", "Dolor cervical", "Propiocepción"],
      respuesta: 0,
  explicacion: "El test de abdominales en 1 minuto mide la resistencia muscular de la zona abdominal. El paciente realiza el mayor número de abdominales posibles en 60 segundos, siguiendo una técnica estandarizada. Es útil en valoración física y seguimiento de programas de entrenamiento. (Mayhew JL, et al. J Sports Med Phys Fitness. 1995)"
    },
    {
      pregunta: "¿Qué evalúa el test de salto horizontal repetido?",
      opciones: ["Resistencia muscular de miembros inferiores", "Fuerza de hombro", "Propiocepción", "Dolor lumbar"],
      respuesta: 0,
  explicacion: "El test de salto horizontal repetido evalúa la resistencia muscular de los miembros inferiores. El paciente realiza saltos horizontales consecutivos durante un tiempo determinado (por ejemplo, 30 segundos) y se cuenta el número de repeticiones. Es útil en valoración funcional y deportiva. (Markovic G, et al. J Strength Cond Res. 2004)"
    },
    {
      pregunta: "¿Qué evalúa el test de flexiones en 1 minuto?",
      opciones: ["Resistencia muscular de miembros superiores", "Flexibilidad lumbar", "Dolor cervical", "Propiocepción"],
      respuesta: 0,
  explicacion: "El test de flexiones en 1 minuto mide la resistencia muscular de los miembros superiores (pectorales, tríceps, deltoides). El paciente realiza el mayor número de flexiones posibles en 60 segundos, siguiendo una técnica correcta. Es útil en valoración física y seguimiento de entrenamiento. (Maud PJ, Foster C. Physiological Assessment of Human Fitness. 2006)"
    }
  ],
  especificas: [
    {
      pregunta: "¿Qué evalúa el test de Lachman?",
      opciones: ["Ligamento cruzado anterior", "Menisco medial", "Tendón de Aquiles", "Manguito rotador"],
      respuesta: 0,
  explicacion: "El test de Lachman es la prueba clínica más sensible para detectar lesiones del ligamento cruzado anterior (LCA) de la rodilla. Con la rodilla flexionada 20-30°, el examinador fija el fémur y desplaza la tibia hacia adelante. Un desplazamiento aumentado y sensación de tope blando sugieren rotura del LCA. (Benjaminse A, et al. Br J Sports Med. 2006)"
    },
    {
      pregunta: "¿Para qué sirve el test de Spurling?",
      opciones: ["Radiculopatía cervical", "Luxación de hombro", "Dolor lumbar", "Epicondilitis"],
      respuesta: 0,
  explicacion: "El test de Spurling evalúa la presencia de radiculopatía cervical. Con el cuello en extensión y rotación hacia el lado afectado, se aplica compresión axial sobre la cabeza. La reproducción de dolor irradiado al brazo indica compromiso radicular. Es una prueba sensible y específica en patología cervical. (Rubinstein SM, et al. Spine. 2007)"
    },
    {
      pregunta: "¿Qué evalúa el test de Neer?",
      opciones: ["Impingement subacromial", "Fuerza de cuádriceps", "Propiocepción", "Dolor lumbar"],
      respuesta: 0,
  explicacion: "El test de Neer evalúa el síndrome de pinzamiento subacromial del hombro. El examinador eleva pasivamente el brazo del paciente en rotación interna. La aparición de dolor en la cara anterolateral del hombro sugiere pinzamiento de los tendones del manguito rotador. (Neer CS. J Bone Joint Surg Am. 1972)"
    },
    {
      pregunta: "¿Qué evalúa el test de Apley?",
      opciones: ["Meniscos", "Ligamento cruzado posterior", "Tendón rotuliano", "Fuerza de bíceps"],
      respuesta: 0,
  explicacion: "El test de Apley evalúa lesiones meniscales de la rodilla. Con el paciente en decúbito prono y la rodilla flexionada 90°, se aplica compresión axial y rotación tibial. Dolor o chasquido sugieren lesión meniscal. Si el dolor es mayor con distracción, puede indicar lesión ligamentosa. (Apley AG. Ann Rheum Dis. 1956)"
    },
    {
      pregunta: "¿Qué evalúa el test de Adson?",
      opciones: ["Síndrome del opérculo torácico", "Epicondilitis", "Dolor lumbar", "Tendinitis"],
      respuesta: 0,
  explicacion: "El test de Adson evalúa el síndrome del opérculo torácico (compresión neurovascular). El paciente gira la cabeza hacia el lado examinado, extiende el cuello y realiza inspiración profunda. La desaparición o disminución del pulso radial indica compresión de la arteria subclavia por estructuras cervicales. (Roos DB. Ann Surg. 1966)"
    },
    {
      pregunta: "¿Qué evalúa el test de McMurray?",
      opciones: ["Lesión meniscal", "Luxación de hombro", "Dolor lumbar", "Epicondilitis"],
      respuesta: 0,
  explicacion: "El test de McMurray es una prueba clásica para detectar lesiones meniscales de la rodilla. Con la rodilla flexionada, el examinador rota la tibia y extiende la pierna. Un chasquido o dolor durante el movimiento sugiere lesión meniscal interna o externa. (McMurray TP. Br J Surg. 1942)"
    },
    {
      pregunta: "¿Qué evalúa el test de Yergason?",
      opciones: ["Tendón de la porción larga del bíceps", "Ligamento cruzado anterior", "Menisco medial", "Fuerza de cuádriceps"],
      respuesta: 0,
  explicacion: "El test de Yergason evalúa la integridad y estabilidad del tendón de la porción larga del bíceps braquial. El paciente flexiona el codo a 90° y realiza supinación resistida del antebrazo. Dolor o resalte en el surco bicipital sugieren tenosinovitis o subluxación del tendón. (Yergason RM. Arch Surg. 1931)"
    },
    {
      pregunta: "¿Qué evalúa el test de Thompson?",
      opciones: ["Rotura del tendón de Aquiles", "Epicondilitis", "Dolor lumbar", "Tendinitis"],
      respuesta: 0,
  explicacion: "El test de Thompson detecta rotura del tendón de Aquiles. Con el paciente en decúbito prono y el pie fuera de la camilla, se comprime la pantorrilla. Ausencia de flexión plantar indica rotura completa del tendón. Es una prueba rápida y sensible. (Thompson TC, et al. J Bone Joint Surg Am. 1962)"
    },
    {
      pregunta: "¿Qué evalúa el test de Jobe?",
      opciones: ["Manguito rotador (supraespinoso)", "Ligamento cruzado anterior", "Menisco medial", "Fuerza de cuádriceps"],
      respuesta: 0,
  explicacion: "El test de Jobe (o test del 'lata vacía') evalúa la integridad del tendón supraespinoso del manguito rotador. El paciente eleva el brazo a 90° en abducción y rotación interna, y el examinador aplica resistencia hacia abajo. Dolor o debilidad sugieren lesión del supraespinoso. (Jobe FW, Moynes DR. Am J Sports Med. 1982)"
    },
    {
      pregunta: "¿Qué evalúa el test de Phalen?",
      opciones: ["Síndrome del túnel carpiano", "Epicondilitis", "Dolor lumbar", "Tendinitis"],
      respuesta: 0,
  explicacion: "El test de Phalen evalúa el síndrome del túnel carpiano. El paciente mantiene ambas muñecas en flexión máxima durante 60 segundos. La aparición de parestesias o dolor en la distribución del nervio mediano es indicativa de compresión del nervio en el túnel carpiano. (Phalen GS. JAMA. 1966)"
    }
  ]
};


let miniQuizTipo = null;
let miniQuizIndice = 0;
let miniQuizPuntaje = 0;
let miniQuizOportunidades = 4;

window.startMiniQuiz = function(tipo) {
  miniQuizTipo = tipo;
  miniQuizIndice = 0;
  miniQuizPuntaje = 0;
  miniQuizOportunidades = 4;
  // Aleatorizar preguntas usando el algoritmo de Fisher-Yates
  const preguntas = miniQuizPreguntas[miniQuizTipo];
  miniQuizPreguntas[miniQuizTipo] = preguntas
    .map(p => ({ ...p })) // Copia para no mutar el original
    .sort(() => Math.random() - 0.5);
  mostrarMiniQuizPregunta();
};

function mostrarMiniQuizPregunta() {
  const preguntas = miniQuizPreguntas[miniQuizTipo];
  const pregunta = preguntas[miniQuizIndice];
  const contenedor = document.getElementById('mini-quiz-container');
  contenedor.innerHTML = `
    <div class="card shadow-sm p-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="mb-0">${miniQuizIndice + 1}. ${pregunta.pregunta}</h5>
        <span class="badge bg-secondary">${miniQuizIndice + 1} / ${preguntas.length}</span>
      </div>
      <div class="mb-2"><span class="badge bg-warning text-dark">Oportunidades restantes: ${miniQuizOportunidades}</span></div>
      <div id="mini-quiz-opciones" class="d-grid gap-2">
        ${pregunta.opciones.map((opcion, i) => `
          <button class="btn btn-outline-primary text-start" data-index="${i}">
            ${opcion}
          </button>
        `).join("")}
      </div>
      <div id="mini-quiz-feedback" class="mt-3"></div>
      <div id="mini-quiz-explicacion" class="mt-2"></div>
    </div>
  `;
  document.querySelectorAll('#mini-quiz-opciones button').forEach(button => {
    button.addEventListener('click', verificarMiniQuizRespuesta);
  });
}

function verificarMiniQuizRespuesta(event) {
  const botonSeleccionado = event.target;
  const indiceSeleccionado = parseInt(botonSeleccionado.dataset.index);
  const preguntas = miniQuizPreguntas[miniQuizTipo];
  const pregunta = preguntas[miniQuizIndice];
  const esCorrecta = (indiceSeleccionado === pregunta.respuesta);
  const todosLosBotones = document.querySelectorAll('#mini-quiz-opciones button');
  todosLosBotones.forEach(button => {
    button.disabled = true;
  });
  let feedbackHtml = "";
  if (esCorrecta) {
    miniQuizPuntaje++;
    botonSeleccionado.classList.remove('btn-outline-primary');
    botonSeleccionado.classList.add('btn-success');
    feedbackHtml = `<div class='alert alert-success mb-2' style='font-size:1.1rem;'>¡Correcto!</div>`;
    if (window.confetti) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  } else {
    miniQuizOportunidades--;
    botonSeleccionado.classList.remove('btn-outline-primary');
    botonSeleccionado.classList.add('btn-danger');
    todosLosBotones[pregunta.respuesta].classList.remove('btn-outline-primary');
    todosLosBotones[pregunta.respuesta].classList.add('btn-success');
    feedbackHtml = `<div class='alert alert-danger mb-2' style='font-size:1.1rem;'>Incorrecto.</div>`;
  }
  document.getElementById('mini-quiz-feedback').innerHTML = feedbackHtml;
  // Botón para mostrar explicación
  if (pregunta.explicacion) {
    document.getElementById('mini-quiz-explicacion').innerHTML = `<button class="btn btn-info w-100" onclick="mostrarMiniQuizExplicacion()">Mostrar explicación</button>`;
  }
  mostrarMiniQuizBotonSiguiente();
}

window.mostrarMiniQuizExplicacion = function() {
  const preguntas = miniQuizPreguntas[miniQuizTipo];
  const pregunta = preguntas[miniQuizIndice];
  document.getElementById('mini-quiz-explicacion').innerHTML = `<div style="font-size:1.15rem;font-weight:bold;background:#ffe066;color:#5c3900;border-radius:8px;padding:16px 12px;margin-top:8px;box-shadow:0 2px 8px #0001;">🛈 ¿Cómo se realiza? <br>${pregunta.explicacion}</div>`;
};

function mostrarMiniQuizBotonSiguiente() {
  const preguntas = miniQuizPreguntas[miniQuizTipo];
  const esLaUltimaPregunta = (miniQuizIndice === preguntas.length - 1);
  let textoBoton = esLaUltimaPregunta ? 'Ver Resultados' : 'Siguiente Pregunta';
  let disabled = "";
  if (miniQuizOportunidades <= 0) {
    textoBoton = 'Ver Resultados';
    disabled = '';
  }
  // Botón siguiente solo si quedan preguntas o se acabaron oportunidades
  document.getElementById('mini-quiz-feedback').innerHTML += `<button class="btn btn-primary w-100 mt-2" onclick="miniQuizSiguientePaso()" ${disabled}>${textoBoton}</button>`;
}

window.miniQuizSiguientePaso = function() {
  // Si se acabaron las oportunidades, mostrar resultado
  if (miniQuizOportunidades <= 0) {
    mostrarMiniQuizResultado();
    return;
  }
  miniQuizIndice++;
  const preguntas = miniQuizPreguntas[miniQuizTipo];
  if (miniQuizIndice < preguntas.length) {
    mostrarMiniQuizPregunta();
  } else {
    mostrarMiniQuizResultado();
  }
};

function mostrarMiniQuizResultado() {
  const preguntas = miniQuizPreguntas[miniQuizTipo];
  const contenedor = document.getElementById('mini-quiz-container');
  contenedor.innerHTML = `
    <div class="card text-center shadow-sm p-4">
      <h3>¡Quiz completado!</h3>
      <p class="lead">Tu puntaje final es:</p>
      <h2 class="display-4 fw-bold my-3">${miniQuizPuntaje} de ${preguntas.length}</h2>
      <button class="btn btn-primary mb-2" onclick="startMiniQuiz('${miniQuizTipo}')">
        Reintentar este Quiz
      </button>
      <button class="btn btn-success w-100" id="btn-compartir-puntaje">Compartir mi puntaje</button>
    </div>
  `;
  // Compartir puntaje (Web Share API)
  setTimeout(() => {
    const btnCompartir = document.getElementById('btn-compartir-puntaje');
    if (btnCompartir) {
      btnCompartir.addEventListener('click', function() {
        const texto = `¡Acabo de completar el Mini Quiz de Pruebas Clínicas (${miniQuizTipo}) en KingFisio y obtuve ${miniQuizPuntaje} de ${preguntas.length}! 🧪\n¿Puedes superarme? https://kingfisio.com`;
        if (navigator.share) {
          navigator.share({
            title: 'Mi puntaje en KingFisio',
            text: texto,
            url: window.location.href
          });
        } else {
          // Fallback: copiar al portapapeles
          navigator.clipboard.writeText(texto);
          btnCompartir.textContent = '¡Copiado para compartir!';
          setTimeout(() => btnCompartir.textContent = 'Compartir mi puntaje', 2000);
        }
      });
    }
  }, 100);
}
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

// Unificamos toda la lógica en un solo DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // --- LÓGICA DEL GLOSARIO ---
  const buscadorGlosario = document.getElementById('buscadorGlosario');
  const listaGlosario = document.getElementById('listaGlosario');
  if (listaGlosario) listaGlosario.innerHTML = '';
  function filtrarGlosario() {
    const input = buscadorGlosario.value.toLowerCase();
    listaGlosario.innerHTML = "";
    let encontrados = 0;
    if (input.length === 0) return;
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
  if (buscadorGlosario) buscadorGlosario.addEventListener('input', filtrarGlosario);

  // --- LÓGICA PARA EL CASO CLÍNICO INTERACTIVO CON IA ---
  const btnEvaluar = document.getElementById('btn-evaluar-ia');
  const respuestaAlumnoTextarea = document.getElementById('respuesta-alumno');
  const feedbackContainer = document.getElementById('feedback-ia-container');
  const btnTexto = document.getElementById('btn-evaluar-texto');
  const btnSpinner = document.getElementById('btn-evaluar-spinner');
  if (btnEvaluar) {
    btnEvaluar.addEventListener('click', async () => {
      const respuestaAlumno = respuestaAlumnoTextarea.value;
      const casoActual = casosClinicos[indiceCasoActual];
      if (!respuestaAlumno.trim()) {
        feedbackContainer.innerHTML = `<div class="alert alert-warning">Por favor, escribe tu plan de tratamiento antes de evaluar.</div>`;
        return;
      }
      btnTexto.textContent = 'Evaluando...';
      btnSpinner.classList.remove('d-none');
      btnEvaluar.disabled = true;
      feedbackContainer.innerHTML = '';
      try {
        const response = await fetch('/.netlify/functions/evaluar-caso', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ respuestaAlumno, casoActual })
        });
        if (!response.ok) throw new Error('Hubo un problema con la respuesta del servidor.');
        const data = await response.json();
        const feedbackHTML = data.feedback;
        feedbackContainer.innerHTML = `
          <div class="card bg-light mt-3">
            <div class="card-body">
              <h6 class="card-title text-success">Feedback de la IA:</h6>
              ${feedbackHTML}
            </div>
          </div>
        `;
      } catch (error) {
        console.error('Error al llamar a la función de IA:', error);
        feedbackContainer.innerHTML = `<div class="alert alert-danger">Lo sentimos, no se pudo obtener el feedback. Por favor, inténtalo de nuevo más tarde.</div>`;
      } finally {
        btnTexto.textContent = 'Evaluar con IA';
        btnSpinner.classList.add('d-none');
        btnEvaluar.disabled = false;
      }
    });
  }

  // --- LÓGICA PARA NAVEGACIÓN DE CASOS CLÍNICOS DINÁMICOS ---
  let indiceCasoActual = 0;
  const tituloEl = document.getElementById('caso-titulo');
  const categoriaEl = document.getElementById('caso-categoria');
  const presentacionEl = document.getElementById('caso-presentacion');
  const evaluacionEl = document.getElementById('caso-evaluacion');
  const contadorEl = document.getElementById('caso-contador');
  const btnAnterior = document.getElementById('btn-caso-anterior');
  const btnSiguiente = document.getElementById('btn-caso-siguiente');
  function mostrarCaso(indice) {
    if (typeof casosClinicos === 'undefined' || casosClinicos.length === 0) return;
    const caso = casosClinicos[indice];
    tituloEl.textContent = caso.titulo;
    categoriaEl.textContent = caso.categoria;
    presentacionEl.textContent = caso.presentacion;
    evaluacionEl.textContent = caso.evaluacion;
    contadorEl.textContent = `Caso ${indice + 1} de ${casosClinicos.length}`;
    document.getElementById('respuesta-alumno').value = '';
    document.getElementById('feedback-ia-container').innerHTML = '';
    btnAnterior.disabled = (indice === 0);
    btnSiguiente.disabled = (indice === casosClinicos.length - 1);
  }
  if (tituloEl) {
    mostrarCaso(indiceCasoActual);
    btnSiguiente.addEventListener('click', () => {
      if (indiceCasoActual < casosClinicos.length - 1) {
        indiceCasoActual++;
        mostrarCaso(indiceCasoActual);
      }
    });
    btnAnterior.addEventListener('click', () => {
      if (indiceCasoActual > 0) {
        indiceCasoActual--;
        mostrarCaso(indiceCasoActual);
      }
    });
  }
});
// ===================================================================
  // --- INICIALIZACIÓN DE CASOS CLÍNICOS Y LÓGICA DE IA ---
  // ===================================================================
  let indiceCasoActual = 0;
  const tituloEl = document.getElementById('caso-titulo');
  const categoriaEl = document.getElementById('caso-categoria');
  const presentacionEl = document.getElementById('caso-presentacion');
  const evaluacionEl = document.getElementById('caso-evaluacion');
  const contadorEl = document.getElementById('caso-contador');
  const btnAnterior = document.getElementById('btn-caso-anterior');
  const btnSiguiente = document.getElementById('btn-caso-siguiente');
  const btnEvaluar = document.getElementById('btn-evaluar-ia');
  const respuestaAlumnoTextarea = document.getElementById('respuesta-alumno');
  const feedbackContainer = document.getElementById('feedback-ia-container');
  const btnTexto = document.getElementById('btn-evaluar-texto');
  const btnSpinner = document.getElementById('btn-evaluar-spinner');

  function mostrarCaso(indice) {
    if (typeof casosClinicos === 'undefined' || casosClinicos.length === 0) return;
    const caso = casosClinicos[indice];
    tituloEl.textContent = caso.titulo;
    categoriaEl.textContent = caso.categoria;
    presentacionEl.textContent = caso.presentacion;
    evaluacionEl.textContent = caso.evaluacion;
    contadorEl.textContent = `Caso ${indice + 1} de ${casosClinicos.length}`;
    respuestaAlumnoTextarea.value = '';
    feedbackContainer.innerHTML = '';
    btnAnterior.disabled = (indice === 0);
    btnSiguiente.disabled = (indice === casosClinicos.length - 1);
  }

  if (tituloEl) {
    mostrarCaso(indiceCasoActual);
    btnSiguiente.addEventListener('click', () => {
      if (indiceCasoActual < casosClinicos.length - 1) {
        indiceCasoActual++;
        mostrarCaso(indiceCasoActual);
      }
    });
    btnAnterior.addEventListener('click', () => {
      if (indiceCasoActual > 0) {
        indiceCasoActual--;
        mostrarCaso(indiceCasoActual);
      }
    });
  }

  if (btnEvaluar) {
    btnEvaluar.addEventListener('click', async () => {
      const respuestaAlumno = respuestaAlumnoTextarea.value;
      const casoActual = casosClinicos[indiceCasoActual];
      if (!respuestaAlumno.trim()) {
        feedbackContainer.innerHTML = `<div class="alert alert-warning">Por favor, escribe tu plan de tratamiento antes de evaluar.</div>`;
        return;
      }
      btnTexto.textContent = 'Evaluando...';
      btnSpinner.classList.remove('d-none');
      btnEvaluar.disabled = true;
      feedbackContainer.innerHTML = '';
      try {
        const response = await fetch('/.netlify/functions/evaluar-caso', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ respuestaAlumno, casoActual }),
        });
        if (!response.ok) throw new Error('Respuesta del servidor no fue exitosa.');
        const data = await response.json();
        feedbackContainer.innerHTML = `
          <div class="card bg-light mt-3">
            <div class="card-body">
              <h6 class="card-title text-success">Feedback de la IA:</h6>
              ${data.feedback}
            </div>
          </div>
        `;
      } catch (error) {
        console.error('Error al llamar a la función de IA:', error);
        feedbackContainer.innerHTML = `<div class="alert alert-danger">Lo sentimos, no se pudo obtener el feedback. Inténtalo de nuevo.</div>`;
      } finally {
        btnTexto.textContent = 'Evaluar con IA';
        btnSpinner.classList.add('d-none');
        btnEvaluar.disabled = false;
      }
    });// Dentro del addEventListener('DOMContentLoaded', () => { ... });

  // ===================================================================
  // --- LÓGICA DE FLASHCARDS ---
  // ===================================================================
  const selectorMazo = document.getElementById('selector-mazo');
  const flashcardContainer = document.getElementById('flashcard-container');
  const flashcardFront = document.querySelector('.flashcard-front');
  const flashcardBack = document.querySelector('.flashcard-back');
  const flashcardContador = document.getElementById('flashcard-contador');
  const btnFlashcardAnterior = document.getElementById('btn-flashcard-anterior');
  const btnFlashcardSiguiente = document.getElementById('btn-flashcard-siguiente');

  let mazoActual = '';
  let indiceTarjetaActual = 0;

  function cargarMazosEnSelector() {
    if (!selectorMazo || typeof mazosFlashcards === 'undefined') return;
    for (const key in mazosFlashcards) {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = mazosFlashcards[key].nombre;
      selectorMazo.appendChild(option);
    }
    mazoActual = selectorMazo.value;
  }

  function mostrarTarjeta(indice) {
    const tarjetas = mazosFlashcards[mazoActual].tarjetas;
    if (indice < 0 || indice >= tarjetas.length) return;

    flashcardContainer.classList.remove('is-flipped');
    
    setTimeout(() => { // Pequeño delay para que la animación de volteo no se corte
        flashcardFront.textContent = tarjetas[indice].anverso;
        flashcardBack.textContent = tarjetas[indice].reverso;
        flashcardContador.textContent = `${indice + 1} / ${tarjetas.length}`;
        indiceTarjetaActual = indice;

        btnFlashcardAnterior.disabled = (indice === 0);
        btnFlashcardSiguiente.disabled = (indice === tarjetas.length - 1);
    }, 250);
  }

  if (selectorMazo) {
    cargarMazosEnSelector();
    mostrarTarjeta(0);

    selectorMazo.addEventListener('change', (e) => {
      mazoActual = e.target.value;
      mostrarTarjeta(0);
    });

    flashcardContainer.addEventListener('click', () => {
      flashcardContainer.classList.toggle('is-flipped');
    });

    btnFlashcardSiguiente.addEventListener('click', () => {
      mostrarTarjeta(indiceTarjetaActual + 1);
    });

    btnFlashcardAnterior.addEventListener('click', () => {
      mostrarTarjeta(indiceTarjetaActual - 1);
    });
  }
}; // Fin del DOMContentLoaded
