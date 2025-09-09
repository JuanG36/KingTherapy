// Archivo: netlify/functions/evaluar-caso.js

// Importamos el SDK de Google Generative AI
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Esta es la función principal que Netlify ejecutará
exports.handler = async function(event) {
  // 1. Verificamos que la petición sea correcta (debe ser un POST)
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // 2. Obtenemos la respuesta del alumno desde el cuerpo de la petición
    const { respuestaAlumno } = JSON.parse(event.body);

    // 3. ¡Aquí usamos nuestra clave secreta! La obtenemos de las variables de entorno de Netlify
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // 4. Creamos el "prompt" o la instrucción para la IA
    const prompt = `
      Eres un tutor de fisioterapia experto, amable y constructivo. 
      Un estudiante te ha presentado el siguiente caso clínico:
      "Paciente masculino de 24 años, futbolista, con traumatismo en tobillo derecho hace 48 horas por inversión forzada. Presenta edema, equimosis y dolor en el ligamento peroneoastragalino anterior (LPAA). Test de cajón anterior positivo."

      El estudiante ha propuesto el siguiente plan de tratamiento para la FASE AGUDA:
      ---
      ${respuestaAlumno}
      ---

      Tu tarea es evaluar esta respuesta. Sigue estas reglas estrictamente:
      1.  Comienza con un refuerzo positivo (ej. "¡Excelente enfoque!" o "Buen punto de partida.").
      2.  Evalúa si las propuestas son adecuadas para la fase aguda de un esguince de tobillo grado II.
      3.  Menciona al menos un punto fuerte de la respuesta del estudiante.
      4.  Si falta algo importante (como el principio POLICE/PRICE, vendaje funcional, educación al paciente), sugiérelo amablemente como una adición.
      5.  Mantén el feedback conciso, en 2 o 3 párrafos cortos.
      6.  Utiliza un lenguaje claro y motivador, en español.
      7.  Formatea tu respuesta en HTML simple (usa <p> para párrafos y <strong> para resaltar).
    `;

    // 5. Enviamos la instrucción a la IA y esperamos su respuesta
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const feedback = response.text();

    // 6. Devolvemos el feedback de la IA a nuestra página web
    return {
      statusCode: 200,
      body: JSON.stringify({ feedback: feedback }),
    };

  } catch (error) {
    // Manejo de errores
    console.error("Error en la función de IA:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Hubo un problema al contactar a la IA." }),
    };
  }
};