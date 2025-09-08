// ======================
// Preguntas del cuestionario
// ======================
const preguntas = {
  intermedio: [
    {
      pregunta: "¿Qué músculo se conoce como el principal estabilizador dinámico de la rodilla?",
      opciones: ["Cuádriceps", "Isquiotibiales", "Sartorio", "Gastrocnemio"],
      respuesta: 0
    },
    {
      pregunta: "El test de Lachman evalúa principalmente:",
      opciones: [
        "Ligamento cruzado anterior",
        "Ligamento cruzado posterior",
        "Ligamento colateral medial",
        "Ligamento colateral lateral"
      ],
      respuesta: 0
    },
    {
      pregunta: "Un paciente con esguince de tobillo grado II presenta:",
      opciones: [
        "Dolor leve sin inestabilidad",
        "Dolor moderado con cierto edema e inestabilidad parcial",
        "Rotura completa del ligamento",
        "Luxación de tobillo"
      ],
      respuesta: 1
    },
    {
      pregunta: "¿Qué tipo de contracción muscular ocurre en un ejercicio de bajada controlada de sentadilla?",
      opciones: ["Concéntrica", "Excéntrica", "Isométrica", "Pliométrica"],
      respuesta: 1
    },
    {
      pregunta: "La maniobra de Spurling se utiliza para detectar:",
      opciones: [
        "Hernia de disco lumbar",
        "Radiculopatía cervical",
        "Síndrome del túnel carpiano",
        "Escoliosis"
      ],
      respuesta: 1
    },
    {
      pregunta: "¿Cuál es el rango normal de movilidad para la flexión de rodilla?",
      opciones: ["0-90°", "0-120°", "0-135°", "0-150°"],
      respuesta: 2
    },
    {
      pregunta: "El ligamento más frecuentemente lesionado en un esguince de tobillo es:",
      opciones: [
        "Deltoideo",
        "Peroneoastragalino anterior",
        "Calcaneoperoneo",
        "Peroneoastragalino posterior"
      ],
      respuesta: 1
    },
    {
      pregunta: "El test de Thomas evalúa la flexibilidad de:",
      opciones: ["Isquiotibiales", "Psoas-ilíaco", "Glúteo mayor", "Gemelos"],
      respuesta: 1
    },
    {
      pregunta: "¿Cuál es el tiempo mínimo recomendado de aplicación de crioterapia en fase aguda?",
      opciones: ["5-10 min", "10-20 min", "20-40 min", "1 hora"],
      respuesta: 1
    },
    {
      pregunta: "¿Qué estructura es evaluada por el test de Neer?",
      opciones: ["Manguito rotador", "Ligamento cruzado anterior", "Menisco medial", "Columna lumbar"],
      respuesta: 0
    },
    {
      pregunta: "La escoliosis estructural se caracteriza por:",
      opciones: [
        "Desviación lateral que corrige con inclinación",
        "Curvatura fija con rotación vertebral",
        "Dolor lumbar sin deformidad",
        "Aumento de la lordosis lumbar"
      ],
      respuesta: 1
    },
    {
      pregunta: "¿Cuál de los siguientes músculos es accesorio en la respiración?",
      opciones: ["Diafragma", "Intercostales externos", "Esternocleidomastoideo", "Trapecio"],
      respuesta: 2
    },
    {
      pregunta: "La técnica de Maitland es un ejemplo de:",
      opciones: [
        "Movilización articular",
        "Estiramiento estático",
        "Electroterapia",
        "Punción seca"
      ],
      respuesta: 0
    },
    {
      pregunta: "El test de Apley (compresión) evalúa principalmente:",
      opciones: ["Meniscos", "Ligamento cruzado anterior", "Ligamento colateral lateral", "Cápsula articular"],
      respuesta: 0
    },
    {
      pregunta: "El balance muscular manual (Kendall) clasifica la fuerza de 0 a:",
      opciones: ["3", "4", "5", "10"],
      respuesta: 2
    },
    {
      pregunta: "El test de Phalen evalúa:",
      opciones: [
        "Radiculopatía cervical",
        "Síndrome del túnel carpiano",
        "Epicondilitis lateral",
        "Inestabilidad de muñeca"
      ],
      respuesta: 1
    },
    {
      pregunta: "¿Qué técnica se recomienda en el drenaje linfático manual?",
      opciones: ["Compresiones rápidas", "Movimientos circulares suaves", "Golpeteos intensos", "Vibración profunda"],
      respuesta: 1
    },
    {
      pregunta: "La palpación del pulso tibial posterior se realiza en:",
      opciones: ["Cara anterior del tobillo", "Debajo del maléolo medial", "Dorsal del pie", "Debajo del maléolo lateral"],
      respuesta: 1
    },
    {
      pregunta: "El test de Trendelenburg evalúa:",
      opciones: [
        "Fuerza del glúteo medio",
        "Estabilidad del ligamento cruzado",
        "Movilidad lumbar",
        "Integridad meniscal"
      ],
      respuesta: 0
    },
    {
      pregunta: "El test de Adson evalúa:",
      opciones: [
        "Síndrome del opérculo torácico",
        "Lesión de LCA",
        "Lesión meniscal",
        "Luxación de rótula"
      ],
      respuesta: 0
    }
  ],

  dificil: [
    {
      pregunta: "El test de Pivot Shift evalúa:",
      opciones: [
        "Ligamento cruzado anterior",
        "Menisco medial",
        "Ligamento colateral medial",
        "Ligamento colateral lateral"
      ],
      respuesta: 0
    },
    {
      pregunta: "El reflejo aquíleo evalúa la integridad de qué raíz nerviosa:",
      opciones: ["L3", "L4", "S1", "S2"],
      respuesta: 2
    },
    {
      pregunta: "El test de Spurling positivo indica:",
      opciones: [
        "Síndrome del túnel carpiano",
        "Compresión radicular cervical",
        "Inestabilidad lumbar",
        "Lesión meniscal"
      ],
      respuesta: 1
    },
    {
      pregunta: "La escala de Ashworth modificada se utiliza para medir:",
      opciones: ["Fuerza muscular", "Espasticidad", "Dolor", "Movilidad articular"],
      respuesta: 1
    },
    {
      pregunta: "El ángulo Q aumentado predispone a:",
      opciones: [
        "Lesión del LCA",
        "Luxación de rótula",
        "Artrosis de cadera",
        "Tendinopatía aquilea"
      ],
      respuesta: 1
    },
    {
      pregunta: "El test de Ober evalúa la flexibilidad de:",
      opciones: ["Isquiotibiales", "Tensor de la fascia lata", "Aductor mayor", "Sóleo"],
      respuesta: 1
    },
    {
      pregunta: "¿Cuál de las siguientes técnicas pertenece a la neurodinamia?",
      opciones: ["Tensión neural", "Crioterapia", "Ondas de choque", "Punción seca"],
      respuesta: 0
    },
    {
      pregunta: "El síndrome de Pancoast puede dar síntomas similares a:",
      opciones: ["Radiculopatía cervical", "Lumbalgia mecánica", "Hernia lumbar", "Síndrome del túnel carpiano"],
      respuesta: 0
    },
    {
      pregunta: "El test de Allen modificado evalúa:",
      opciones: ["Irrigación arterial en la mano", "Inestabilidad de hombro", "Síndrome piriforme", "Dolor facetario lumbar"],
      respuesta: 0
    },
    {
      pregunta: "El reflejo patelar evalúa la integridad de qué raíz nerviosa:",
      opciones: ["L2-L3", "L3-L4", "L4-L5", "S1-S2"],
      respuesta: 1
    },
    {
      pregunta: "La maniobra de Valsalva puede indicar:",
      opciones: ["Hipertensión arterial", "Hernia de disco lumbar", "Contractura isquiotibial", "Tendinitis"],
      respuesta: 1
    },
    {
      pregunta: "El test de Apprehension evalúa:",
      opciones: ["Luxación anterior de hombro", "Menisco lateral", "Inestabilidad de tobillo", "Epicondilitis"],
      respuesta: 0
    },
    {
      pregunta: "El síndrome compartimental agudo se caracteriza por:",
      opciones: [
        "Dolor intenso, pérdida de sensibilidad y disminución de pulso",
        "Inflamación leve y movilidad conservada",
        "Dolor solo durante el ejercicio",
        "Espasmo muscular pasajero"
      ],
      respuesta: 0
    },
    {
      pregunta: "El test de Hawkins-Kennedy se utiliza para:",
      opciones: [
        "Impingement subacromial",
        "Luxación de hombro",
        "Lesión de LCA",
        "Síndrome del piriforme"
      ],
      respuesta: 0
    },
    {
      pregunta: "La escala de Borg se utiliza para medir:",
      opciones: ["Fuerza muscular", "Percepción del esfuerzo", "Espasticidad", "Dolor neuropático"],
      respuesta: 1
    },
    {
      pregunta: "El test de Slump evalúa:",
      opciones: [
        "Movilidad neural del nervio ciático",
        "Luxación de rótula",
        "Estabilidad cervical",
        "Fuerza de glúteo medio"
      ],
      respuesta: 0
    },
    {
      pregunta: "La técnica Mulligan se caracteriza por:",
      opciones: [
        "Movilización con movimiento",
        "Manipulación de alta velocidad",
        "Estiramiento estático",
        "Electroterapia"
      ],
      respuesta: 0
    },
    {
      pregunta: "El test de Spurling combinado con distracción cervical sirve para:",
      opciones: [
        "Confirmar radiculopatía cervical",
        "Evaluar ligamento cruzado",
        "Descartar síndrome piriforme",
        "Valorar hernia lumbar"
      ],
      respuesta: 0
    },
    {
      pregunta: "El signo de Lhermitte se asocia con:",
      opciones: [
        "Esclerosis múltiple o lesión medular cervical",
        "Lesión de ligamento cruzado",
        "Tendinitis del supraespinoso",
        "Síndrome facetario lumbar"
      ],
      respuesta: 0
    },
    {
      pregunta: "El test de Finkelstein es positivo en:",
      opciones: [
        "Tendinopatía de De Quervain",
        "Síndrome del túnel carpiano",
        "Epicondilitis lateral",
        "Radiculopatía C7"
      ],
      respuesta: 0
    }
  ]
};

// ======================
// Variables de control
// ======================
let nivel = "";
let indice = 0;
let puntaje = 0;

// ======================
// Iniciar cuestionario
// ======================
function startQuiz(selectedNivel) {
  nivel = selectedNivel;
  indice = 0;
  puntaje = 0;
  mostrarPregunta();
}

// ======================
// Mostrar pregunta
// ======================
function mostrarPregunta() {
  const contenedor = document.getElementById("quiz-container");
  const preguntaActual = preguntas[nivel][indice];

  contenedor.innerHTML = `
    <div class="card shadow p-4">
      <h5>${preguntaActual.pregunta}</h5>
      <div class="mt-3">
        ${preguntaActual.opciones
          .map(
            (opcion, i) => `
          <button class="btn btn-outline-primary d-block w-100 my-2"
                  onclick="verificarRespuesta(${i})">
            ${opcion}
          </button>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

// ======================
// Verificar respuesta
// ======================
function verificarRespuesta(i) {
  const preguntaActual = preguntas[nivel][indice];

  if (i === preguntaActual.respuesta) {
    puntaje++;
  }

  indice++;

  if (indice < preguntas[nivel].length) {
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
}

// ======================
// Mostrar resultado final
// ======================
function mostrarResultado() {
  const contenedor = document.getElementById("quiz-container");
  contenedor.innerHTML = `
    <div class="alert alert-info">
      <h4>¡Has terminado!</h4>
      <p>Tu puntaje es: <strong>${puntaje} de ${preguntas[nivel].length}</strong></p>
      <button class="btn btn-primary" onclick="startQuiz(nivel)">Reintentar</button>
    </div>
  `;
}
