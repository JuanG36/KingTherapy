// js/casos-clinicos-data.js

const casosClinicos = [
  {
    id: 1,
    titulo: "Futbolista con dolor agudo en el tobillo",
    categoria: "Musculoesquelético / Deportivo",
    presentacion: "Paciente masculino de 24 años, futbolista amateur, acude a consulta refiriendo un traumatismo en el tobillo derecho hace 48 horas. Describe un mecanismo de inversión forzada, seguido de dolor agudo e incapacidad para continuar jugando.",
    evaluacion: "Presenta edema significativo (++) y equimosis en la región del maléolo peroneo. Dolor exquisito a la palpación sobre el ligamento peroneoastragalino anterior (LPAA). Pruebas de cajón anterior de tobillo y de estrés en inversión son positivas. No puede realizar una carga completa sobre el pie.",
    // Este 'tratamientoIdeal' servirá de guía para la IA
    tratamientoIdeal: "El tratamiento para la fase aguda de un esguince de tobillo grado II/III se basa en el principio POLICE (Protección, Carga Óptima, Hielo, Compresión, Elevación). Esto incluye el uso de una ortesis para proteger, iniciar carga parcial con muletas según tolerancia, crioterapia intermitente, vendaje compresivo y elevación para manejar el edema. Es crucial la educación al paciente sobre la importancia de la carga temprana y progresiva para promover una recuperación óptima del tejido."
  },
  {
    id: 2,
    titulo: "Oficinista con dolor lumbar crónico",
    categoria: "Musculoesquelético / Dolor Crónico",
    presentacion: "Paciente femenino de 38 años, trabaja 8 horas diarias sentada, presenta dolor lumbar bajo, sordo y persistente desde hace más de 6 meses. El dolor aumenta al final de la jornada laboral y al permanecer sentada por largos periodos. No refiere irradiación a las piernas.",
    evaluacion: "Postura sentada con hiperlordosis lumbar. Rango de movimiento en flexión de tronco limitado por dolor al final del rango. Pruebas neurodinámicas negativas. Debilidad en la musculatura del core (transverso del abdomen y multífidos) y glúteos. Presenta kinesiofobia y creencias catastrofistas sobre su dolor.",
    tratamientoIdeal: "El abordaje para el dolor lumbar crónico no específico debe ser biopsicosocial. El plan debe incluir: 1. Educación terapéutica en neurociencia del dolor para desmitificar el dolor y reducir el miedo al movimiento. 2. Ejercicio terapéutico enfocado en el control motor del core y fortalecimiento de glúteos. 3. Terapia manual para alivio sintomático a corto plazo. 4. Fomentar la actividad física general y la autogestión, incluyendo pausas activas y ergonomía en el puesto de trabajo."
  },
  {
    id: 3,
    titulo: "Paciente post-ACV con hemiparesia derecha",
    categoria: "Neurología",
    presentacion: "Paciente masculino de 65 años, sufrió un Accidente Cerebrovascular (ACV) isquémico hace 3 semanas, resultando en una hemiparesia facio-braquio-crural derecha. Actualmente se encuentra en fase subaguda, con espasticidad moderada en flexores de codo y muñeca.",
    evaluacion: "Escala de Ashworth Modificada: 2 en flexores de codo y muñeca. Dificultad para iniciar la marcha, con patrón de segador. Balance muscular: fuerza 2/5 en deltoides y cuádriceps derecho. Sensibilidad alterada en el hemicuerpo derecho. Equilibrio en sedestación y bipedestación precario.",
    tratamientoIdeal: "El tratamiento se basa en la neuroplasticidad. El plan debe incluir: 1. Terapia por movimiento inducido por restricción (CIMT) para el miembro superior afectado. 2. Facilitación Neuromuscular Propioceptiva (FNP) para estimular patrones de movimiento funcionales. 3. Reeducación de la marcha en barras paralelas, enfocándose en la correcta secuencia y transferencia de peso. 4. Entrenamiento del equilibrio y la propiocepción. 5. Terapia espejo para mejorar la representación cortical y reducir la espasticidad. La intervención debe ser intensiva, repetitiva y orientada a tareas específicas y significativas para el paciente."
  },
  {
    id: 4,
    titulo: "Nadadora con síndrome de impingement subacromial",
    categoria: "Musculoesquelético / Deportivo",
    presentacion: "Paciente femenino de 19 años, nadadora de competición, refiere dolor en la cara anterolateral del hombro izquierdo desde hace 2 meses, que se agrava durante los entrenamientos de estilo crol y espalda.",
    evaluacion: "Dolor a la palpación del tendón del supraespinoso. Arco doloroso positivo entre los 70° y 120° de abducción. Tests de Neer y Hawkins-Kennedy positivos. Discinesia escapular tipo I (prominencia del ángulo inferior). Debilidad de los rotadores externos y serrato anterior.",
    tratamientoIdeal: "El tratamiento debe enfocarse en la causa biomecánica. El plan debe incluir: 1. Modificación de la actividad y gestión de la carga de entrenamiento para evitar el dolor. 2. Ejercicio terapéutico para fortalecer el manguito rotador (especialmente rotadores externos) y los estabilizadores de la escápula (serrato anterior, trapecio inferior). 3. Terapia manual para mejorar la movilidad de la columna torácica y la articulación glenohumeral si estuviera restringida. 4. Reeducación del gesto deportivo y del ritmo escapulohumeral."
  },
  {
    id: 5,
    titulo: "Adulto mayor con riesgo de caídas",
    categoria: "Geriatría",
    presentacion: "Paciente femenino de 82 años, vive sola, reporta dos caídas en los últimos 6 meses sin fracturas. Expresa miedo a volver a caer, lo que ha limitado sus salidas de casa. Usa un bastón de forma intermitente.",
    evaluacion: "Test 'Timed Up and Go' (TUG): 16 segundos (alto riesgo de caídas >13.5s). Escala de Equilibrio de Berg: 42/56. Dinamometría de prensión manual disminuida. Marcha con base de sustentación aumentada y pasos cortos. Dificultad en el equilibrio monopodal.",
    tratamientoIdeal: "El abordaje debe ser multifactorial. El plan de fisioterapia debe incluir: 1. Programa de ejercicios de equilibrio progresivo y desafiante (ej. Tai Chi, método Otago). 2. Fortalecimiento de miembros inferiores (especialmente cuádriceps y músculos del tobillo) y del core. 3. Entrenamiento de la marcha y doble tarea (caminar mientras se realiza otra actividad). 4. Revisión y ajuste del uso de ayudas técnicas (bastón). 5. Educación sobre seguridad en el hogar para minimizar riesgos ambientales."
  }
];