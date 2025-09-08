// -----------------
// Preguntas básicas/intermedias
// -----------------
let preguntas = [
  {texto:"¿Cuál es el hueso más largo del cuerpo humano?",opciones:["Húmero","Fémur","Radio"],correcta:"Fémur"},
  {texto:"¿Qué movimiento realiza principalmente el bíceps braquial?",opciones:["Extensión de codo","Flexión de codo","Abducción de hombro"],correcta:"Flexión de codo"},
  {texto:"¿Cuál es la principal función del diafragma?",opciones:["Digestión","Respiración","Postura"],correcta:"Respiración"},
  {texto:"¿Qué estructura conecta el músculo con el hueso?",opciones:["Tendón","Ligamento","Cartílago"],correcta:"Tendón"},
  {texto:"¿Cuál de estos no es un plano anatómico?",opciones:["Sagital","Transversal","Diagonal"],correcta:"Diagonal"},
  {texto:"¿Qué tipo de articulación es la rodilla?",opciones:["Sinovial","Fibrosa","Cartilaginosa"],correcta:"Sinovial"},
  {texto:"¿Cuál es el músculo principal de la respiración?",opciones:["Diafragma","Trapezio","Recto abdominal"],correcta:"Diafragma"},
  {texto:"¿Qué sistema del cuerpo regula el equilibrio y la coordinación?",opciones:["Nervioso","Digestivo","Cardiovascular"],correcta:"Nervioso"},
  {texto:"¿Qué tipo de contracción muscular mantiene la postura estática?",opciones:["Concéntrica","Excéntrica","Isométrica"],correcta:"Isométrica"},
  {texto:"¿Cuál es el principal neurotransmisor del sistema motor?",opciones:["Dopamina","Acetilcolina","Serotonina"],correcta:"Acetilcolina"},
  // ...aquí van las demás preguntas hasta completar 30
];

// -----------------
// Casos clínicos avanzados
// -----------------
const preguntasDificil = [
  {texto:"Caso 1: Paciente de 45 años con dolor en rodilla derecha tras trote. Presenta inflamación y limitación de extensión. ¿Cuál sería la primera acción recomendada?",opciones:["Inmovilizar y aplicar hielo","Enviar directo a cirugía","Hacer estiramiento intenso"],correcta:"Inmovilizar y aplicar hielo"},
  {texto:"Caso 2: Paciente post-ictus presenta debilidad en miembro superior izquierdo. ¿Qué intervención fisioterapéutica inicial es adecuada?",opciones:["Fortalecimiento intenso inmediato","Movilización pasiva y ejercicios de rango de movimiento","Aplicar calor profundo"],correcta:"Movilización pasiva y ejercicios de rango de movimiento"},
  {texto:"Caso 3: Paciente con esguince de tobillo grado II. ¿Qué tratamiento inicial es recomendable?",opciones:["Reposo, hielo, compresión y elevación","Masaje profundo inmediato","Correr para recuperar movilidad"],correcta:"Reposo, hielo, compresión y elevación"},
  {texto:"Caso 4: Paciente con dolor lumbar crónico. ¿Qué enfoque de fisioterapia es adecuado?",opciones:["Fortalecimiento intenso","Ejercicios de movilidad suave y educación postural","Inmovilización completa"],correcta:"Ejercicios de movilidad suave y educación postural"},
  {texto:"Caso 5: Paciente con síndrome del túnel carpiano. ¿Qué medida conservadora inicial es correcta?",opciones:["Reposo y férula nocturna","Cirugía inmediata","Electroestimulación intensa"],correcta:"Reposo y férula nocturna"},
  {texto:"Caso 6: Paciente con hombro doloroso post-inmovilización. ¿Qué ejercicio se inicia primero?",opciones:["Movilidad pasiva","Elevaciones con carga","Estiramiento intenso"],correcta:"Movilidad pasiva"},
  {texto:"Caso 7: Paciente con artritis reumatoide en manos. ¿Qué actividad se recomienda para mejorar funcionalidad?",opciones:["Ejercicios de agarre suave","Levantar pesas pesadas","Evitar todo movimiento"],correcta:"Ejercicios de agarre suave"},
  {texto:"Caso 8: Paciente post-quirúrgico de cadera. ¿Qué cuidado inicial es prioritario?",opciones:["Movilización temprana asistida","Carga total inmediata","Reposo absoluto por 4 semanas"],correcta:"Movilización temprana asistida"},
  {texto:"Caso 9: Paciente con escoliosis leve. ¿Qué enfoque de fisioterapia se sugiere?",opciones:["Ejercicios de corrección postural y fortalecimiento","Cirugía inmediata","Inmovilización con corsé por 6 meses"],correcta:"Ejercicios de corrección postural y fortalecimiento"},
  {texto:"Caso 10: Paciente con debilidad de cuádriceps tras inmovilización. ¿Qué ejercicio es más adecuado inicialmente?",opciones:["Contracciones isométricas suaves","Sentadillas profundas","Correr en cinta"],correcta:"Contracciones isométricas suaves"}
];

// -----------------
// Variables globales
// -----------------
let indice = 0;
let aciertos = 0;

const preguntaEl = document.getElementById("pregunta");
const opcionesEl = document.getElementById("opciones");
const feedbackEl = document.getElementById("feedback");
const btnSiguiente = document.getElementById("btnSiguiente");
const resultadoEl = document.getElementById("resultado");

// -----------------
// Funciones del cuestionario
// -----------------
function mostrarPregunta() {
  if(preguntas.length === 0) return;
  const actual = preguntas[indice];
  preguntaEl.innerText = actual.texto;
  opcionesEl.innerHTML = "";
  feedbackEl.innerText = "";
  btnSiguiente.classList.add("hidden");

  actual.opciones.forEach(opcion => {
    const btn = document.createElement("button");
    btn.innerText = opcion;
    btn.onclick = () => verificarRespuesta(opcion);
    opcionesEl.appendChild(btn);
  });
}

function verificarRespuesta(opcion) {
  const actual = preguntas[indice];
  if (opcion === actual.correcta) {
    feedbackEl.innerText = "✅ Correcto";
    feedbackEl.className = "correct";
    aciertos++;
  } else {
    feedbackEl.innerText = "❌ Incorrecto. Respuesta correcta: " + actual.correcta;
    feedbackEl.className = "incorrect";
  }
  btnSiguiente.classList.remove("hidden");
}

function siguientePregunta() {
  indice++;
  if (indice < preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  preguntaEl.innerText = "";
  opcionesEl.innerHTML = "";
  feedbackEl.innerText = "";
  btnSiguiente.classList.add("hidden");

  resultadoEl.classList.remove("hidden");
  resultadoEl.innerText = `Obtuviste ${aciertos} de ${preguntas.length} correctas.`;
}

function aumentarDificultad() {
  preguntas = preguntasDificil;
  indice = 0;
  aciertos = 0;
  resultadoEl.classList.add("hidden");
  mostrarPregunta();
}

// -----------------
// Navegación entre secciones
// -----------------
function mostrarSeccion(seccionId) {
  document.querySelectorAll('.container > div').forEach(div => {
    div.classList.add('hidden');
  });
  document.getElementById(seccionId).classList.remove("hidden");

  if(seccionId === 'cuestionario') mostrarPregunta();
}

// -----------------
// Biblioteca de PDFs
// -----------------
fetch('biblioteca.json')
  .then(response => response.json())
  .then(data => {
    const listaPDF = document.getElementById("listaPDF");
    data.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${item.titulo}</strong> – <a href="${item.archivo}" target="_blank">Ver PDF</a>`;
      listaPDF.appendChild(li);
    });
  })
  .catch(error => console.error("Error al cargar la biblioteca:", error));


// -----------------
// Inicialización
// -----------------
document.addEventListener("DOMContentLoaded", () => {
  mostrarPregunta();
});
