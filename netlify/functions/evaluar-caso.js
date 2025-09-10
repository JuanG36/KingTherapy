// Archivo: netlify/functions/evaluar-caso.js

const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { respuestaAlumno, casoActual } = JSON.parse(event.body);

    if (!respuestaAlumno || !casoActual || !casoActual.presentacion || !casoActual.tratamientoIdeal) {
      return { statusCode: 400, body: "Faltan datos en la petición." };
    }

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
      Eres un tutor de fisioterapia experto, amable y constructivo.
      Un estudiante te ha presentado el siguiente caso clínico:
      "Presentación: ${casoActual.presentacion}. Evaluación: ${casoActual.evaluacion}"

      El estudiante ha propuesto el siguiente plan de tratamiento:
      ---
      ${respuestaAlumno}
      ---

      El abordaje ideal basado en la evidencia para este caso es:
      "${casoActual.tratamientoIdeal}"

      Tu tarea es evaluar la respuesta del estudiante comparándola con el abordaje ideal. Sigue estas reglas estrictamente:
      1.  Comienza con un refuerzo positivo (ej. "¡Excelente enfoque!", "Buen razonamiento clínico.").
      2.  Compara la propuesta del estudiante con el tratamiento ideal. Menciona al menos un punto fuerte específico de su respuesta.
      3.  Si en la respuesta del estudiante falta algún componente clave del tratamiento ideal, sugiérelo amablemente como una adición importante para un plan más completo.
      4.  Mantén el feedback conciso y enfocado, en 2 o 3 párrafos cortos.
      5.  Utiliza un lenguaje claro, motivador y profesional, en español.
      6.  Formatea tu respuesta en HTML simple (usa <p> para párrafos y <strong> para resaltar los puntos clave).
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const feedback = response.text();

    return {
      statusCode: 200,
      body: JSON.stringify({ feedback: feedback }),
    };

  } catch (error) {
    console.error("Error en la función de IA:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Hubo un problema al contactar a la IA." }),
    };
  }
};