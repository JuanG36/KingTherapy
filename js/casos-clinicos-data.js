// js/casos-clinicos-data.js

const casosClinicos = [
  {
    id: 1,
    titulo: "Futbolista con dolor agudo en el tobillo",
    categoria: "Musculoesquelético / Deportivo",
    presentacion: "Paciente masculino de 24 años, futbolista amateur, acude a consulta refiriendo un traumatismo en el tobillo derecho hace 48 horas. Describe un mecanismo de inversión forzada, seguido de dolor agudo e incapacidad para continuar jugando.",
    evaluacion: "Presenta edema significativo (++) y equimosis en la región del maléolo peroneo. Dolor exquisito a la palpación sobre el ligamento peroneoastragalino anterior (LPAA). Pruebas de cajón anterior de tobillo y de estrés en inversión son positivas. No puede realizar una carga completa sobre el pie.",
    // Esta 'tratamientoIdeal' servirá de guía para la IA
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
  },
  {
    id: 6,
    titulo: "Corredor con dolor en la cintilla iliotibial (Rodilla del Corredor)",
    categoria: "Musculoesquelético / Deportivo",
    presentacion: "Paciente masculino de 30 años, corredor de fondo, reporta dolor agudo y punzante en la cara lateral de la rodilla izquierda, que aparece consistentemente después de 15-20 minutos de carrera y le obliga a detenerse.",
    evaluacion: "Test de Noble y Test de Ober positivos. Dolor a la palpación en el cóndilo femoral lateral. Análisis de la marcha en cinta revela un valgo de rodilla dinámico y una caída pélvica contralateral (signo de Trendelenburg en carrera). Debilidad significativa en glúteo medio (4/5).",
    tratamientoIdeal: "El abordaje debe centrarse en la causa biomecánica. El plan incluye: 1. Gestión de la carga: reducción temporal del volumen/intensidad de carrera. 2. Fortalecimiento específico del glúteo medio y rotadores externos de cadera. 3. Reeducación de la carrera para mejorar la cadencia y reducir el valgo dinámico. 4. Terapia manual para los tejidos blandos tensos (tensor de la fascia lata, glúteos)."
  },
  {
    id: 7,
    titulo: "Paciente con parálisis facial periférica (Parálisis de Bell)",
    categoria: "Neurología",
    presentacion: "Paciente femenino de 45 años, acude con inicio súbito hace 72 horas de debilidad en el lado izquierdo de la cara. Refiere incapacidad para cerrar el ojo izquierdo, sonrisa asimétrica y dificultad para beber líquidos.",
    evaluacion: "Asimetría facial evidente en reposo y en movimiento. Incapacidad para elevar la ceja, cerrar el ojo, inflar la mejilla o sonreír en el lado izquierdo. Escala de House-Brackmann: Grado IV (disfunción moderadamente severa). Sensibilidad facial conservada.",
    tratamientoIdeal: "El tratamiento (tras descartar causas graves y con manejo médico de corticoides) se enfoca en: 1. Educación al paciente: protección ocular (lágrimas artificiales, parche nocturno) para prevenir úlceras corneales. 2. Terapia de reeducación neuromuscular facial (ej. método Kabat, terapia espejo) para facilitar el reaprendizaje motor sin crear sincinesias. 3. Masaje suave para mantener la elasticidad de los tejidos. 4. Evitar la electroestimulación indiscriminada por riesgo de sincinesias."
  },
  {
    id: 8,
    titulo: "Tenista con epicondilitis lateral (Codo de Tenista)",
    categoria: "Musculoesquelético / Deportivo",
    presentacion: "Paciente masculino de 40 años, jugador de tenis recreativo, con dolor en la cara externa del codo derecho desde hace 3 meses, que empeora con el golpe de revés y al agarrar objetos pesados (ej. una jarra).",
    evaluacion: "Dolor a la palpación en el epicóndilo lateral. Test de Cozen y Test de Maudsley positivos. Dinamometría de prensión manual dolorosa y disminuida en comparación con el lado sano. Dolor a la extensión resistida de la muñeca.",
    tratamientoIdeal: "El tratamiento para esta tendinopatía debe incluir: 1. Educación sobre gestión de carga y modificación de la actividad. 2. Ejercicio de fortalecimiento progresivo para los extensores de muñeca, comenzando con isométricos analgésicos y progresando a ejercicios excéntricos e isotónicos. 3. Terapia manual para la columna cervical y torácica, ya que pueden contribuir al dolor referido. 4. Análisis y corrección de la técnica del golpe de revés y del equipamiento (tensión del cordaje, grosor del grip)."
  },
  {
    id: 9,
    titulo: "Niño de 6 años con Tortícolis Muscular Congénita",
    categoria: "Pediatría",
    presentacion: "Padres de un niño de 6 años consultan porque notan que su hijo inclina constantemente la cabeza hacia la derecha y la rota hacia la izquierda. Reportan que esta tendencia ha sido sutil pero persistente desde la infancia.",
    evaluacion: "Inclinación cefálica derecha y rotación izquierda visibles. Rango de movimiento pasivo limitado en inclinación izquierda y rotación derecha. Plagiocefalia occipital izquierda moderada. A la palpación, se detecta una banda tensa en el músculo esternocleidomastoideo (ECOM) derecho.",
    tratamientoIdeal: "Aunque el tratamiento es más efectivo en la infancia temprana, el plan debe incluir: 1. Programa de estiramientos pasivos y activos del ECOM derecho. 2. Ejercicios de fortalecimiento para los músculos del lado izquierdo del cuello. 3. Reeducación postural y ejercicios de enderezamiento visual y vestibular. 4. Adaptaciones ergonómicas en el entorno del niño (escuela, casa) para fomentar la corrección activa de la postura."
  },
  {
    id: 10,
    titulo: "Paciente con fractura de Colles post-inmovilización",
    categoria: "Traumatología / Ortopedia",
    presentacion: "Paciente femenino de 68 años, sufrió una fractura distal de radio (fractura de Colles) en la muñeca derecha. Le han retirado el yeso hace 3 días después de 6 semanas de inmovilización.",
    evaluacion: "Presenta edema residual, rigidez articular significativa y dolor. Goniometría: Flexión de muñeca 20°, Extensión 15°, Prono-supinación 50% del lado sano. Fuerza de prensión muy disminuida. Miedo al movimiento.",
    tratamientoIdeal: "El objetivo es recuperar la función de forma segura. El plan incluye: 1. Técnicas de control del edema (elevación, compresión, baños de contraste). 2. Movilizaciones articulares pasivas y activas-asistidas para recuperar el rango de movimiento. 3. Ejercicios de deslizamiento tendinoso para prevenir adherencias. 4. Fortalecimiento progresivo de la musculatura de la muñeca y la mano. 5. Ejercicios funcionales orientados a las actividades de la vida diaria."
  },
  {
    id: 11,
    titulo: "Paciente con Enfermedad Pulmonar Obstructiva Crónica (EPOC)",
    categoria: "Cardiorrespiratoria",
    presentacion: "Paciente masculino de 72 años, fumador de larga data, diagnosticado con EPOC. Refiere disnea (sensación de falta de aire) al realizar actividades ligeras como caminar por casa y fatiga generalizada.",
    evaluacion: "Espirometría muestra un patrón obstructivo (VEF1/CVF < 0.70). Saturación de oxígeno en reposo: 93%. Test de marcha de 6 minutos: 250 metros, con desaturación a 88% y disnea grado 3 en la escala de Borg. Uso visible de musculatura accesoria para respirar.",
    tratamientoIdeal: "La rehabilitación pulmonar es clave. El plan debe incluir: 1. Entrenamiento de resistencia aeróbica (caminadora, bicicleta estática) a intensidad moderada, monitorizando la saturación de oxígeno. 2. Entrenamiento de fuerza de miembros superiores e inferiores. 3. Técnicas de higiene bronquial si hay producción de esputo. 4. Reeducación respiratoria: respiración diafragmática y con labios fruncidos para controlar la disnea. 5. Educación sobre la enfermedad y estrategias de conservación de energía."
  },
  {
    id: 12,
    titulo: "Bailarina con tendinopatía aquílea",
    categoria: "Musculoesquelético / Artes Escénicas",
    presentacion: "Paciente femenino de 22 años, bailarina de ballet profesional, con dolor en la porción media del tendón de Aquiles derecho desde hace 4 meses. El dolor es peor por la mañana y al inicio de la actividad, mejora ligeramente con el calentamiento y reaparece con la fatiga.",
    evaluacion: "Engrosamiento palpable en la porción media del tendón. Dolor a la palpación 2-6 cm proximal a la inserción calcánea. Test de arco doloroso y Royal London Hospital test positivos. Limitación dolorosa al realizar elevaciones de talón (relevés).",
    tratamientoIdeal: "El tratamiento se basa en un programa de carga progresiva. 1. Educación sobre la patología y la importancia de no parar por completo. 2. Programa de ejercicio que progrese de isométricos a isotónicos pesados y lentos (heavy slow resistance training), y finalmente a ejercicios pliométricos específicos del ballet (saltos). 3. Análisis de la carga de entrenamiento y modificación de la misma. 4. Evaluación de la biomecánica del pie y el tobillo."
  },
  {
    id: 13,
    titulo: "Paciente con síndrome de dolor patelofemoral",
    categoria: "Musculoesquelético / Deportivo",
    presentacion: "Paciente femenino de 25 años, aficionada al crossfit, refiere dolor difuso en la parte anterior de la rodilla derecha, que empeora al subir/bajar escaleras, hacer sentadillas y después de estar sentada mucho tiempo (signo del cine).",
    evaluacion: "No hay derrame ni inestabilidad. Dolor a la compresión rotuliana. Test de Clark positivo. Aumento del ángulo Q. Análisis funcional de la sentadilla muestra valgo de rodilla y caída pélvica. Debilidad en abductores y rotadores externos de cadera.",
    tratamientoIdeal: "El consenso actual apunta a un tratamiento centrado en la cadera y el cuádriceps. El plan incluye: 1. Fortalecimiento de los músculos de la cadera (glúteo medio/máximo). 2. Fortalecimiento del cuádriceps en cadena cinética cerrada. 3. Reeducación del patrón de movimiento en sentadillas y aterrizajes. 4. Taping rotuliano (técnica de McConnell) para alivio sintomático a corto plazo. 5. Educación sobre la modificación de la actividad."
  },
  {
    id: 14,
    titulo: "Mujer postparto con diástasis de rectos",
    categoria: "Salud Pélvica / Obstetricia",
    presentacion: "Paciente femenino de 32 años, 10 semanas postparto de su segundo hijo. Consulta por una sensación de debilidad en su abdomen y una protuberancia visible en la línea media al hacer esfuerzos.",
    evaluacion: "Evaluación palpatoria en decúbito supino con flexión de cabeza revela una separación de 3 dedos de ancho a nivel del ombligo, con un 'doming' o abombamiento. Test de activación del transverso del abdomen deficiente.",
    tratamientoIdeal: "El objetivo es recuperar la funcionalidad de la pared abdominal. 1. Reeducación y fortalecimiento del músculo transverso del abdomen. 2. Coordinación de la respiración diafragmática con la activación del suelo pélvico y el transverso. 3. Progresión de ejercicios de estabilización del core, evitando los abdominales tradicionales (crunches) en las fases iniciales. 4. Educación postural y sobre mecánica corporal segura en las actividades diarias (levantar al bebé, etc.)."
  },
  {
    id: 15,
    titulo: "Paciente con artroplastia total de cadera (abordaje posterior)",
    categoria: "Traumatología / Ortopedia",
    presentacion: "Paciente masculino de 70 años, operado hace 4 días de una artroplastia total de cadera derecha por abordaje posterolateral debido a artrosis severa.",
    evaluacion: "Se encuentra en el hospital, con dolor controlado. Edema en el muslo. Es capaz de sentarse en el borde de la cama. Necesita aprender las precauciones y a caminar con andador.",
    tratamientoIdeal: "La fisioterapia hospitalaria inmediata es crucial. 1. Educación estricta sobre las precauciones del abordaje posterior para evitar la luxación: no flexionar la cadera más de 90°, no aducir (cruzar las piernas) y no rotar internamente la cadera. 2. Ejercicios en cama: flexo-extensión de tobillos (bombeo), contracciones isométricas de cuádriceps y glúteos. 3. Entrenamiento de transferencias seguras (cama a silla). 4. Reeducación de la marcha con andador y carga parcial según indicación del cirujano."
  },
  {
    id: 16,
    titulo: "Trabajador de almacén con radiculopatía lumbar L5",
    categoria: "Musculoesquelético / Salud Laboral",
    presentacion: "Paciente masculino de 42 años, trabaja levantando cajas, presenta dolor lumbar agudo que se irradia por la cara lateral de la pierna y el dorso del pie izquierdo desde hace 1 semana. Refiere hormigueo y pérdida de fuerza.",
    evaluacion: "Test de elevación de la pierna recta (Lasegue) positivo a 40°. Parestesias en el dermatoma de L5. Debilidad (3/5) en la dorsiflexión del tobillo y extensión del primer dedo (músculo extensor largo del hallux). Reflejos conservados.",
    tratamientoIdeal: "El tratamiento se enfoca en la centralización del dolor y la recuperación de la función. 1. Terapia manual con tracción lumbar y técnicas de movilización neural (deslizamientos). 2. Ejercicios de extensión lumbar (tipo McKenzie) si centralizan el dolor. 3. Fortalecimiento del core con énfasis en la estabilidad. 4. Educación sobre higiene postural y técnica correcta de levantamiento de cargas para prevenir recurrencias."
  },
  {
    id: 17,
    titulo: "Paciente con Enfermedad de Parkinson",
    categoria: "Neurología",
    presentacion: "Paciente masculino de 68 años, diagnosticado con Parkinson hace 5 años (estadio 2 de Hoehn y Yahr). Presenta bradicinesia (lentitud de movimiento), rigidez, temblor en reposo en mano derecha y marcha festinante (pasos cortos y rápidos).",
    evaluacion: "Rigidez en 'rueda dentada' en miembros superiores. Dificultad para iniciar el movimiento. Congelación de la marcha ('freezing') al pasar por puertas. Dificultad con los giros. Pobre disociación de cinturas.",
    tratamientoIdeal: "El objetivo es mejorar la movilidad, el equilibrio y la calidad de vida. 1. Terapia LSVT BIG: programa de ejercicios de gran amplitud y alta intensidad. 2. Pistas externas (auditivas como un metrónomo, o visuales como líneas en el suelo) para mejorar la marcha y superar el 'freezing'. 3. Ejercicios de equilibrio y prevención de caídas. 4. Ejercicios de flexibilidad y movilidad del tronco para combatir la rigidez."
  },
  {
    id: 18,
    titulo: "Voleibolista con tendinopatía rotuliana (Rodilla del Saltador)",
    categoria: "Musculoesquelético / Deportivo",
    presentacion: "Paciente masculino de 20 años, jugador de voleibol, con dolor localizado en el polo inferior de la rótula izquierda desde hace 6 meses. El dolor es agudo durante el salto y el aterrizaje.",
    evaluacion: "Dolor exquisito a la palpación del polo inferior de la rótula. Dolor al realizar una sentadilla en declive. Test de Royal London Hospital positivo. Déficits en la fuerza de cuádriceps y en la capacidad de absorción de impacto.",
    tratamientoIdeal: "El tratamiento se centra en la gestión de la carga y el fortalecimiento. 1. Programa de carga progresiva que incluya isométricos, isotónicos pesados y lentos, y finalmente ejercicios pliométricos. 2. Optimización de la biomecánica del salto y aterrizaje. 3. Monitorización de la carga de entrenamiento y partidos para evitar picos de estrés en el tendón. 4. Fortalecimiento de la cadena cinética posterior (glúteos e isquiotibiales)."
  },
  {
    id: 19,
    titulo: "Paciente con linfedema secundario a mastectomía",
    categoria: "Oncología / Linfática",
    presentacion: "Paciente femenino de 55 años, operada de cáncer de mama (mastectomía y disección de ganglios axilares) hace 1 año. Presenta hinchazón progresiva, pesadez y molestias en su brazo derecho.",
    evaluacion: "Medición perimétrica del brazo muestra un aumento de volumen >10% en comparación con el brazo contralateral. Signo de Stemmer positivo (incapacidad para pellizcar la piel en la base del segundo dedo). Piel engrosada.",
    tratamientoIdeal: "El estándar de oro es la Terapia Descongestiva Compleja (TDC). Consta de dos fases: 1. Fase intensiva: Drenaje linfático manual (DLM) diario, vendaje compresivo multicapa 24h, ejercicios miolinfokinéticos y cuidado meticuloso de la piel. 2. Fase de mantenimiento: Autodrenaje, uso de una prenda de compresión a medida durante el día, ejercicios y cuidado continuo de la piel."
  },
  {
    id: 20,
    titulo: "Paciente con vértigo posicional paroxístico benigno (VPPB)",
    categoria: "Vestibular",
    presentacion: "Paciente femenino de 60 años, refiere episodios breves (<1 minuto) de vértigo rotatorio intenso, desencadenados por movimientos específicos como girarse en la cama, mirar hacia arriba o agacharse.",
    evaluacion: "Test de Dix-Hallpike positivo para el canal semicircular posterior derecho: provoca un nistagmo torsional y vertical hacia arriba de corta duración y con latencia. Resto de la exploración neurológica normal.",
    tratamientoIdeal: "El tratamiento es altamente efectivo y se basa en maniobras de reposicionamiento de otoconias. 1. Maniobra de Epley para el canal posterior: una serie de 4 movimientos de cabeza y cuerpo que utiliza la gravedad para mover los otolitos fuera del canal semicircular. 2. Educación al paciente sobre la naturaleza benigna del trastorno y posibles recurrencias. 3. Instrucciones sobre cómo evitar movimientos bruscos de cabeza durante las siguientes 24-48h."
  },
  {
    id: 21,
    titulo: "Paciente con capsulitis adhesiva (Hombro Congelado)",
    categoria: "Musculoesquelético",
    presentacion: "Paciente femenino de 52 años, diabética, con inicio insidioso de dolor y rigidez progresiva en el hombro izquierdo desde hace 4 meses. El dolor es peor por la noche y le cuesta encontrar una postura para dormir.",
    evaluacion: "Pérdida significativa tanto del rango de movimiento activo como pasivo, con un patrón capsular clásico: la rotación externa es la más limitada, seguida de la abducción y la rotación interna. End-feel firme y doloroso.",
    tratamientoIdeal: "El tratamiento varía según la fase. En la fase dolorosa/inflamatoria (congelación): 1. Educación al paciente sobre la naturaleza autolimitada de la condición. 2. Infiltración de corticosteroides (manejo médico) para controlar el dolor. 3. Fisioterapia suave para mantener el rango de movimiento sin provocar dolor. En la fase de rigidez/descongelación: 4. Fisioterapia más intensiva con estiramientos y movilizaciones articulares para recuperar el rango de movimiento. 5. Ejercicios de fortalecimiento progresivo."
  },
  {
    id: 22,
    titulo: "Crossfitter con dolor anterior de hombro (Tendinopatía del Bíceps)",
    categoria: "Musculoesquelético / Deportivo",
    presentacion: "Paciente masculino de 28 años, practicante de CrossFit, refiere dolor en la cara anterior del hombro derecho, específicamente al realizar movimientos por encima de la cabeza como 'muscle-ups' o 'snatches'.",
    evaluacion: "Dolor a la palpación en el surco bicipital. Test de Speed y Test de Yergason positivos. No hay signos de inestabilidad. Se observa una protracción escapular y un tilt anterior en reposo y durante la elevación del brazo.",
    tratamientoIdeal: "El tratamiento debe abordar tanto el tendón como la biomecánica del hombro. 1. Gestión de la carga: evitar temporalmente los movimientos provocativos. 2. Fortalecimiento progresivo del tendón del bíceps y del manguito rotador. 3. Control escapular: ejercicios para fortalecer el serrato anterior y el trapecio inferior para corregir la discinesia. 4. Mejora de la movilidad torácica para reducir el estrés en la articulación glenohumeral."
  },
  {
    id: 23,
    titulo: "Paciente con dolor de la articulación temporomandibular (ATM)",
    categoria: "Musculoesquelético / Cráneo-mandibular",
    presentacion: "Paciente femenino de 30 años, con dolor en la zona preauricular (delante de la oreja) derecha, que se agrava al masticar alimentos duros o al bostezar. Refiere chasquidos articulares y episodios de bruxismo nocturno.",
    evaluacion: "Dolor a la palpación de los músculos masetero y temporal derecho. Apertura oral limitada a 30 mm con desviación hacia la derecha. Chasquido audible a la apertura. Hipertrofia del masetero.",
    tratamientoIdeal: "El abordaje debe ser multidisciplinar (fisio, dentista). El plan de fisioterapia incluye: 1. Terapia manual intraoral y extraoral para los músculos masticatorios. 2. Técnicas de movilización de la ATM. 3. Ejercicios de control motor y reeducación mandibular. 4. Educación sobre hábitos parafuncionales (apretar los dientes, morderse las uñas) y estrategias de autogestión del dolor."
  },
  {
    id: 24,
    titulo: "Ciclista con síndrome del túnel carpiano",
    categoria: "Musculoesquelético / Neuropático",
    presentacion: "Paciente masculino de 45 años, ciclista de ruta, se queja de adormecimiento y hormigueo en los tres primeros dedos de la mano derecha, especialmente durante salidas largas en bicicleta. Los síntomas le despiertan por la noche.",
    evaluacion: "Tests de Phalen y Tinel positivos en la muñeca derecha. Test de compresión del túnel carpiano positivo. Hipoestesia en el territorio del nervio mediano. Atrofia incipiente de la eminencia tenar.",
    tratamientoIdeal: "El tratamiento debe ser conservador inicialmente. 1. Educación sobre modificación de la actividad: cambiar la posición de las manos en el manillar, usar guantes acolchados, ajustar la bicicleta (bike fitting). 2. Férula nocturna de muñeca en posición neutra. 3. Técnicas de movilización del nervio mediano (deslizamientos neurales). 4. Terapia manual para los huesos del carpo y tejidos blandos del antebrazo."
  },
  {
    id: 25,
    titulo: "Paciente con fascitis plantar",
    categoria: "Musculoesquelético",
    presentacion: "Paciente femenino de 50 años, con sobrepeso, trabaja de pie muchas horas. Refiere un dolor agudo en la planta del talón derecho, que es especialmente intenso en los primeros pasos de la mañana.",
    evaluacion: "Dolor exquisito a la palpación en la inserción de la fascia plantar en el calcáneo. Test de Windlass positivo. Dorsiflexión de tobillo limitada (10° con rodilla extendida), indicando acortamiento de gemelos.",
    tratamientoIdeal: "El tratamiento debe enfocarse en la gestión de la carga y la capacidad de la fascia. 1. Educación sobre la modificación del calzado y el uso de plantillas (taping o taloneras) para alivio a corto plazo. 2. Ejercicios de estiramiento específico para la fascia plantar y los músculos de la pantorrilla. 3. Programa de fortalecimiento progresivo de alta carga para la fascia plantar y los músculos intrínsecos del pie. 4. Terapia manual para mejorar la movilidad del tobillo y las articulaciones del pie."
  }
];