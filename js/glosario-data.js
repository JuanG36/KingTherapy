// Archivo de datos del glosario para KingFisio
// Debe ser incluido antes de script.js en el HTML

const terminosGlosario = [
  {
    termino: "Articulación",
    definicion: "Zona de unión entre dos o más huesos, permitiendo el movimiento y soporte del esqueleto."
  },
  {
    termino: "Ligamento",
    definicion: "Banda de tejido conectivo que une los huesos entre sí en una articulación."
  },
  {
    termino: "Tendón",
    definicion: "Estructura fibrosa que conecta el músculo con el hueso, transmitiendo la fuerza para el movimiento."
  },
  {
    termino: "Fisioterapia",
    definicion: "Disciplina de la salud que utiliza agentes físicos para prevenir, tratar y rehabilitar lesiones o enfermedades."
  },
  {
    termino: "Propiocepción",
    definicion: "Capacidad del cuerpo para percibir la posición y el movimiento de las articulaciones y músculos."
  },
  { termino: "Abducción", definicion: "Movimiento que aleja una extremidad de la línea media del cuerpo." },
  { termino: "Aducción", definicion: "Movimiento que aproxima una extremidad hacia la línea media del cuerpo." },
  { termino: "Apraxia", definicion: "Trastorno neurológico caracterizado por la incapacidad de realizar movimientos voluntarios a pesar de tener fuerza y coordinación." },
  { termino: "Artralgia", definicion: "Dolor en una articulación sin inflamación evidente." },
  { termino: "Artritis", definicion: "Inflamación de una articulación que puede causar dolor, rigidez y limitación funcional." },
  { termino: "Artroplastia", definicion: "Procedimiento quirúrgico para reparar o reemplazar una articulación." },
  { termino: "Atrofia muscular", definicion: "Disminución del volumen y fuerza de un músculo por desuso, enfermedad o lesión." },
  { termino: "Balance muscular", definicion: "Evaluación clínica de la fuerza de un músculo o grupo muscular en una escala estandarizada." },
  { termino: "Baropodometría", definicion: "Estudio que analiza la distribución de cargas en los pies al estar de pie o caminar." },
  { termino: "Bipedestación", definicion: "Posición de pie sobre ambas extremidades inferiores." },
  { termino: "Bradicinesia", definicion: "Lentitud anormal de los movimientos, común en enfermedades neurológicas como el Parkinson." },
  { termino: "Cadencia", definicion: "Número de pasos por minuto en la marcha." },
  { termino: "Capsulitis adhesiva", definicion: "Trastorno del hombro caracterizado por dolor y rigidez progresiva (‘hombro congelado’)." },
  { termino: "Cifosis", definicion: "Curvatura excesiva hacia atrás de la columna torácica." },
  { termino: "Claudicación", definicion: "Dolor o fatiga en extremidades al caminar por insuficiencia arterial o neurológica." },
  { termino: "Cocontracción", definicion: "Activación simultánea de músculos agonistas y antagonistas para estabilizar una articulación." },
  { termino: "Contractura muscular", definicion: "Acortamiento involuntario y doloroso de un músculo." },
  { termino: "Deambulación", definicion: "Acción de caminar o desplazarse de un lugar a otro." },
  { termino: "Discapacidad", definicion: "Limitación en la participación social, actividades o funciones, según la CIF (OMS)." },
  { termino: "Disfagia", definicion: "Dificultad para deglutir alimentos o líquidos." },
  { termino: "Disfunción temporomandibular", definicion: "Alteración dolorosa o mecánica en la articulación temporomandibular." },
  { termino: "Dolor neuropático", definicion: "Dolor causado por lesión o enfermedad en el sistema nervioso somatosensorial." },
  { termino: "Dolor nociceptivo", definicion: "Dolor producido por la activación de nociceptores por lesión tisular." },
  { termino: "Esguince", definicion: "Lesión de los ligamentos de una articulación causada por estiramiento o desgarro." },
  { termino: "Espasticidad", definicion: "Aumento del tono muscular dependiente de la velocidad, común en lesiones del sistema nervioso central." },
  { termino: "Escoliosis", definicion: "Curvatura lateral anormal de la columna vertebral." },
  { termino: "Estabilidad articular", definicion: "Capacidad de una articulación para mantener su posición gracias a ligamentos, músculos y cápsula articular." },
  { termino: "Fatiga muscular", definicion: "Disminución de la capacidad de un músculo para generar fuerza tras esfuerzo prolongado." },
  { termino: "Fascia", definicion: "Tejido conectivo que envuelve y conecta músculos, huesos y órganos." },
  { termino: "Fisioterapia basada en evidencia", definicion: "Uso de la mejor evidencia científica disponible, junto con la experiencia clínica y las preferencias del paciente, para la práctica fisioterapéutica." },
  {
    termino: "Agente Físico",
    definicion: "Elemento natural o artificial (como el calor, frío, luz o electricidad) utilizado en fisioterapia con fines terapéuticos."
  },
  {
    termino: "Balance Muscular (Escala de Daniels)",
    definicion: "Sistema de gradación de la fuerza muscular de 0 a 5, donde 0 es ausencia de contracción y 5 es movimiento completo contra gravedad con máxima resistencia."
  },
  {
    termino: "Cavitación Articular",
    definicion: "Fenómeno acústico (chasquido) que se produce durante una manipulación articular, causado por la liberación de gases disueltos en el líquido sinovial."
  },
  {
    termino: "Clonus (o Clono)",
    definicion: "Serie de contracciones musculares rítmicas e involuntarias en respuesta a un estiramiento súbito del músculo, indicativo de una lesión en la motoneurona superior."
  },
  {
    termino: "Co-contracción",
    definicion: "Contracción simultánea de músculos agonistas y antagonistas que rodean una articulación para aumentar la estabilidad."
  },
  {
    termino: "Dedo en Resorte (o en Gatillo)",
    definicion: "Condición en la que uno de los dedos queda atascado en una posición de flexión, causado por la inflamación de un tendón en la mano."
  },
  {
    termino: "Diástasis de Rectos",
    definicion: "Separación de los músculos rectos del abdomen, comúnmente observada después del embarazo."
  },
  {
    termino: "Dismetría",
    definicion: "Incapacidad para juzgar la distancia o el rango de un movimiento, resultando en un control motor impreciso. Es un signo de disfunción cerebelosa."
  },
  {
    termino: "Distrofia Muscular",
    definicion: "Grupo de enfermedades genéticas que causan debilidad progresiva y pérdida de masa muscular."
  },
  {
    termino: "Edema",
    definicion: "Hinchazón causada por el exceso de líquido atrapado en los tejidos del cuerpo."
  },
  {
    termino: "Electromiografía (EMG)",
    definicion: "Técnica de diagnóstico que evalúa la salud de los músculos y las células nerviosas que los controlan (motoneuronas)."
  },
  {
    termino: "End-feel (Sensación Terminal)",
    definicion: "Sensación que percibe el fisioterapeuta al final del rango de movimiento pasivo de una articulación (ej. óseo, firme, blando)."
  },
  {
    termino: "Equinoterapia",
    definicion: "Terapia que utiliza los movimientos de un caballo para lograr respuestas motoras y sensoriales en el paciente."
  },
  {
    termino: "Fibromialgia",
    definicion: "Trastorno crónico caracterizado por dolor musculoesquelético generalizado, acompañado de fatiga y problemas de sueño, memoria y estado de ánimo. Asociado a la sensibilización central."
  },
  {
    termino: "Fisioterapia Geriátrica",
    definicion: "Área especializada de la fisioterapia enfocada en la prevención, diagnóstico y tratamiento de condiciones de salud en el adulto mayor."
  },
  {
    termino: "Fisioterapia Pediátrica",
    definicion: "Área especializada que trata a niños con condiciones congénitas, del desarrollo, neuromusculares o esqueléticas."
  },
  {
    termino: "Fisioterapia del Suelo Pélvico",
    definicion: "Área especializada que trata disfunciones de los músculos del suelo pélvico, como incontinencia, prolapsos y dolor pélvico."
  },
  {
    termino: "Fractura por Estrés",
    definicion: "Pequeña fisura en un hueso causada por fuerza repetitiva o uso excesivo."
  },
  {
    termino: "Hemartrosis",
    definicion: "Acumulación de sangre dentro de una cavidad articular."
  },
  {
    termino: "Hidroterapia",
    definicion: "Uso del agua con fines terapéuticos, aprovechando sus propiedades físicas (flotabilidad, presión hidrostática) para facilitar el ejercicio y aliviar el dolor."
  },
  {
    termino: "Hiperlordosis",
    definicion: "Aumento excesivo de la curvatura lordótica de la columna lumbar o cervical."
  },
  {
    termino: "Hipermovilidad Articular",
    definicion: "Condición en la que las articulaciones se mueven más allá del rango normal, lo que puede causar dolor e inestabilidad."
  },
  {
    termino: "Imaginería Motora Graduada",
    definicion: "Proceso de rehabilitación cerebral que utiliza la imaginación de movimientos para tratar el dolor crónico y los trastornos motores, progresando desde el reconocimiento de lateralidad hasta la imaginería explícita."
  },
  {
    termino: "Incontinencia Urinaria de Esfuerzo",
    definicion: "Pérdida involuntaria de orina que ocurre durante actividades que aumentan la presión abdominal, como toser, estornudar o levantar objetos pesados."
  },
  {
    termino: "Isquemia",
    definicion: "Reducción del flujo sanguíneo a un tejido, lo que resulta en una escasez de oxígeno y nutrientes."
  },
  {
    termino: "Ley de Wolff",
    definicion: "Principio que establece que el hueso de una persona o animal sano se adaptará a las cargas bajo las cuales se ha colocado, remodelándose para volverse más fuerte."
  },
  {
    termino: "Manguito Rotador",
    definicion: "Conjunto de cuatro músculos (supraespinoso, infraespinoso, redondo menor y subescapular) y sus tendones, que estabilizan la articulación del hombro."
  },
  {
    termino: "Mecanotransducción",
    definicion: "Proceso mediante el cual las células convierten los estímulos mecánicos (como el ejercicio) en una respuesta bioquímica, promoviendo la reparación y el crecimiento de los tejidos."
  },
  {
    termino: "Mielopatía",
    definicion: "Lesión o enfermedad de la médula espinal."
  },
  {
    termino: "Movilización Neural",
    definicion: "Técnica de terapia manual que busca restaurar el movimiento y la elasticidad del sistema nervioso para aliviar el dolor de origen neural."
  },
  {
    termino: "Necrosis Avascular",
    definicion: "Muerte de tejido óseo debido a la falta de suministro sanguíneo."
  },
  {
    termino: "Nistagmo",
    definicion: "Movimiento rápido e involuntario de los ojos, que puede ser un signo de disfunción del sistema vestibular."
  },
  {
    termino: "Nociceptor",
    definicion: "Receptor sensorial que responde a estímulos nocivos (dañinos o potencialmente dañinos), enviando señales al cerebro que pueden ser interpretadas como dolor."
  },
  {
    termino: "Osteopenia",
    definicion: "Disminución de la densidad mineral ósea, que es un precursor de la osteoporosis."
  },
  {
    termino: "Osteoporosis",
    definicion: "Enfermedad esquelética en la que se produce una disminución de la densidad de masa ósea, lo que hace que los huesos se vuelvan más frágiles y propensos a fracturas."
  },
  {
    termino: "Parestesia",
    definicion: "Sensación anormal, como hormigueo, adormecimiento o ardor, generalmente asociada con la irritación de un nervio."
  },
  {
    termino: "Pliometría",
    definicion: "Tipo de entrenamiento que utiliza ejercicios de alta velocidad y fuerza para aumentar la potencia muscular, basado en el ciclo de estiramiento-acortamiento."
  },
  {
    termino: "Posturología",
    definicion: "Estudio del sistema de control postural y sus alteraciones."
  },
  {
    termino: "Reeducación Postural Global (RPG)",
    definicion: "Método de fisioterapia basado en el análisis de la organización muscular en cadenas, que busca corregir la postura a través de estiramientos globales activos."
  },
  {
    termino: "Sarcopenia",
    definicion: "Pérdida progresiva y generalizada de masa muscular esquelética y fuerza, asociada con el envejecimiento."
  },
  {
    termino: "Síndrome de Dolor Miofascial",
    definicion: "Trastorno de dolor crónico causado por la presencia de múltiples puntos gatillo miofasciales."
  },
  {
    termino: "Síndrome del Opérculo Torácico",
    definicion: "Conjunto de trastornos que ocurren cuando los nervios o vasos sanguíneos en el espacio entre la clavícula y la primera costilla (opérculo torácico) se comprimen."
  },
  {
    termino: "Síndrome Piriforme",
    definicion: "Trastorno neuromuscular en el que el músculo piriforme comprime o irrita el nervio ciático, causando dolor en la región glútea y ciática."
  },
  {
    termino: "Sinergia Muscular",
    definicion: "Activación coordinada de un grupo de músculos para realizar un movimiento específico."
  },
  {
    termino: "Sinovitis",
    definicion: "Inflamación de la membrana sinovial, el tejido que recubre el interior de las articulaciones."
  },
  {
    termino: "Terapia Espejo",
    definicion: "Técnica de rehabilitación en la que se utiliza un espejo para crear una ilusión reflectante de un miembro afectado, con el fin de engañar al cerebro y estimular la neuroplasticidad."
  },
  {
    termino: "Terapia Ocupacional",
    definicion: "Disciplina de la salud que ayuda a las personas a participar en las actividades de la vida diaria (ocupaciones) a través del uso terapéutico de actividades."
  },
  {
    termino: "Terapia Vojta",
    definicion: "Método de diagnóstico y tratamiento utilizado principalmente en pediatría para tratar alteraciones motoras, basado en la locomoción refleja."
  },
  {
    termino: "Vendaje Neuromuscular (Kinesiotaping)",
    definicion: "Técnica que utiliza cintas elásticas de algodón para dar estabilidad y soporte a los músculos y articulaciones sin restringir el movimiento, con el objetivo de aliviar el dolor y facilitar el drenaje linfático."
  },
  {
    termino: "Vértigo Posicional Paroxístico Benigno (VPPB)",
    definicion: "Trastorno del oído interno que causa breves episodios de vértigo en respuesta a cambios de posición de la cabeza. Tratado comúnmente con la maniobra de Epley."
  },
  {
    termino: "Alianza Terapéutica",
    definicion: "Relación de colaboración entre el paciente y el terapeuta, basada en la confianza y el acuerdo sobre los objetivos. Es un factor pronóstico clave para el éxito del tratamiento."
  },
  {
    termino: "Atrofia Muscular Espinal (AME)",
    definicion: "Enfermedad genética que afecta las motoneuronas de la médula espinal, causando debilidad y atrofia muscular progresiva. La fisioterapia es clave en su manejo."
  },
  {
    termino: "Carga Óptima",
    definicion: "Principio de rehabilitación que postula que los tejidos necesitan una carga mecánica adecuada (ni muy alta ni muy baja) para estimular la reparación y la adaptación sin causar más daño."
  },
  {
    termino: "Catastrofismo del Dolor",
    definicion: "Patrón de pensamiento negativo y exagerado en relación con una experiencia de dolor real o anticipada. Es una bandera amarilla importante a tratar."
  },
  {
    termino: "Continuo Carga-Capacidad",
    definicion: "Modelo conceptual que evalúa la relación entre la carga aplicada a un tejido (ej. un tendón) y la capacidad de ese tejido para tolerarla. Las lesiones ocurren cuando la carga excede la capacidad."
  },
  {
    termino: "Cross-education (Educación Cruzada)",
    definicion: "Fenómeno neurofisiológico en el que el entrenamiento de una extremidad puede producir un aumento de fuerza en la extremidad contralateral no entrenada."
  },
  {
    termino: "Disautonomía",
    definicion: "Disfunción del sistema nervioso autónomo, que puede manifestarse con síntomas como mareos, fatiga, taquicardia postural (POTS) y problemas de termorregulación."
  },
  {
    termino: "Discriminación de Dos Puntos",
    definicion: "Prueba de sensibilidad que mide la capacidad de una persona para distinguir dos puntos de contacto cercanos en la piel, evaluando la agudeza táctil y la representación cortical."
  },
  {
    termino: "Dolor Referido",
    definicion: "Dolor que se percibe en una parte del cuerpo distinta a su verdadero origen, debido a la convergencia de las vías nerviosas en la médula espinal."
  },
  {
    termino: "Dorsiflexión",
    definicion: "Movimiento del tobillo que lleva la punta del pie hacia la espinilla."
  },
  {
    termino: "Ecografía Musculoesquelética",
    definicion: "Técnica de imagen por ultrasonido utilizada por fisioterapeutas para visualizar en tiempo real músculos, tendones y ligamentos, tanto para diagnóstico como para guiar intervenciones."
  },
  {
    termino: "Efecto Placebo",
    definicion: "Mejora medible en la salud o el comportamiento de un paciente que no es atribuible a la medicación o al tratamiento invasivo, sino a las expectativas y el contexto terapéutico."
  },
  {
    termino: "Efecto Nocebo",
    definicion: "Aparición de un efecto perjudicial o un empeoramiento de los síntomas debido a expectativas negativas o información alarmante sobre un tratamiento o condición."
  },
  {
    termino: "Ejercicio Isométrico Analgésico",
    definicion: "Contracciones isométricas sostenidas (ej. 45 segundos al 70% de la contracción máxima) que han demostrado reducir el dolor en tendinopatías de forma inmediata."
  },
  {
    termino: "Enfoque 'Hands-Off'",
    definicion: "Abordaje terapéutico que prioriza la educación, el ejercicio activo y la autogestión por encima de las técnicas pasivas de terapia manual."
  },
  {
    termino: "Enfoque 'Hands-On'",
    definicion: "Abordaje terapéutico que utiliza predominantemente técnicas de terapia manual y contacto directo con el paciente."
  },
  {
    termino: "Entrenamiento por Restricción del Flujo Sanguíneo (BFR)",
    definicion: "Técnica de ejercicio que utiliza un manguito de compresión para restringir parcialmente el flujo sanguíneo a una extremidad, permitiendo ganancias de fuerza e hipertrofia con cargas muy bajas."
  },
  {
    termino: "Fatiga Central",
    definicion: "Tipo de fatiga que se origina en el sistema nervioso central, resultando en una disminución del impulso neural hacia los músculos."
  },
  {
    termino: "Fatiga Periférica",
    definicion: "Tipo de fatiga que ocurre a nivel del músculo mismo, debido a factores como el agotamiento de sustratos energéticos."
  },
  {
    termino: "Fisioterapia Invasiva",
    definicion: "Subespecialidad de la fisioterapia que utiliza una aguja para la aplicación de agentes físicos a través de la piel, como la punción seca o la electrólisis."
  },
  {
    termino: "Graded Motor Imagery (GMI)",
    definicion: "Proceso de rehabilitación cerebral que utiliza la imaginación de movimientos para tratar el dolor crónico y los trastornos motores, progresando desde el reconocimiento de lateralidad hasta la imaginería explícita."
  },
  {
    termino: "Hipertrofia Muscular",
    definicion: "Aumento del tamaño de las fibras musculares como resultado del entrenamiento de fuerza."
  },
  {
    termino: "Hipotálamo-Hipófisis-Adrenal (Eje HHA)",
    definicion: "Sistema neuroendocrino central que controla la respuesta al estrés y regula procesos como la digestión, el sistema inmune y el estado de ánimo. Su desregulación está implicada en el dolor crónico."
  },
  {
    termino: "Inestabilidad Funcional",
    definicion: "Sensación subjetiva de que una articulación 'falla' o 'cede' durante la actividad, a pesar de que no existe una laxitud ligamentosa mecánica."
  },
  {
    termino: "Mapeo Corporal (Body Mapping)",
    definicion: "Representación neural de las diferentes partes del cuerpo en la corteza somatosensorial del cerebro. Puede estar alterada en condiciones de dolor crónico."
  },
  {
    termino: "Marcha Antálgica",
    definicion: "Alteración del patrón de la marcha que se adopta de forma inconsciente para minimizar el dolor en una extremidad inferior, típicamente acortando la fase de apoyo del lado afectado."
  },
  {
    termino: "Modelo de la 'Dona' (Doughnut Model)",
    definicion: "Concepto utilizado en tendinopatías para describir que, aunque una parte del tendón esté degenerada (el agujero), la parte sana (la dona) puede fortalecerse con ejercicio para compensar."
  },
  {
    termino: "Monitoreo de Carga (Load Monitoring)",
    definicion: "Proceso de cuantificar y supervisar el estrés físico impuesto a un atleta o paciente para optimizar el entrenamiento y minimizar el riesgo de lesiones por sobreuso."
  },
  {
    termino: "Movimiento Activo Asistido",
    definicion: "Movimiento realizado por el paciente con la ayuda de una fuerza externa (terapeuta, polea, etc.) cuando el músculo es demasiado débil para completar el movimiento por sí solo."
  },
  {
    termino: "Parálisis Cerebral",
    definicion: "Grupo de trastornos del desarrollo del movimiento y la postura que causan limitación de la actividad, atribuidos a alteraciones no progresivas ocurridas en el cerebro fetal o infantil."
  },
  {
    termino: "Periodización del Entrenamiento",
    definicion: "Planificación estratégica de la carga de entrenamiento a lo largo del tiempo (microciclos, mesociclos, macrociclos) para maximizar el rendimiento y prevenir el sobreentrenamiento."
  },
  {
    termino: "Potenciación Post-Activación (PAP)",
    definicion: "Fenómeno por el cual el rendimiento muscular mejora de forma aguda después de una contracción máxima o casi máxima, debido al aumento del reclutamiento de unidades motoras."
  },
  {
    termino: "Prevención Secundaria",
    definicion: "Conjunto de intervenciones destinadas a reducir el impacto de una enfermedad o lesión que ya ha ocurrido, previniendo su recurrencia o progresión."
  },
  {
    termino: "Pronación (Pie)",
    definicion: "Movimiento combinado de eversión, abducción y dorsiflexión del pie, que ocurre naturalmente durante la fase de apoyo de la marcha para absorber el impacto."
  },
  {
    termino: "Readaptación Deportiva",
    definicion: "Fase final de la rehabilitación de un atleta, centrada en devolverle a su nivel de rendimiento específico del deporte de manera segura y eficiente."
  },
  {
    termino: "Realidad Virtual (VR) en Fisioterapia",
    definicion: "Uso de entornos virtuales inmersivos para la rehabilitación, mejorando la motivación, el equilibrio y el control motor en un entorno seguro y controlado."
  },
  {
    termino: "Rigidez Matutina",
    definicion: "Sensación de tiesura en las articulaciones que se experimenta al levantarse por la mañana, un síntoma característico de enfermedades inflamatorias como la artritis reumatoide."
  },
  {
    termino: "Screening (Cribado) de Movimiento",
    definicion: "Proceso de evaluación de patrones de movimiento fundamentales para identificar limitaciones o asimetrías que puedan predisponer a una lesión."
  },
  {
    termino: "Sobrecarga Progresiva",
    definicion: "Principio fundamental del entrenamiento que establece que para que un tejido se adapte y se vuelva más fuerte, debe ser sometido a una carga o estrés mayor al que está acostumbrado."
  },
  {
    termino: "Supinación (Pie)",
    definicion: "Movimiento combinado de inversión, aducción y flexión plantar del pie, que ocurre al final de la fase de apoyo para crear una palanca rígida para el despegue."
  },
  {
    termino: "Técnica de Energía Muscular (MET)",
    definicion: "Forma de terapia manual en la que el paciente contrae activamente un músculo contra una resistencia controlada por el terapeuta para mejorar el rango de movimiento y reducir el dolor."
  },
  {
    termino: "Telerrehabilitación (Telehealth)",
    definicion: "Prestación de servicios de fisioterapia a distancia utilizando tecnologías de la comunicación, como videollamadas, para evaluación, seguimiento y guía de ejercicios."
  },
  {
    termino: "Tensegridad",
    definicion: "Principio arquitectónico (tensión + integridad) aplicado al cuerpo humano para describir cómo la red de fascias y músculos (tensión) estabiliza la estructura ósea (compresión)."
  },
  {
    termino: "Terapia Cognitivo-Conductual (TCC)",
    definicion: "Enfoque psicoterapéutico que ayuda a los pacientes a identificar y cambiar patrones de pensamiento y comportamiento disfuncionales, muy utilizado en el manejo del dolor crónico."
  },
  {
    termino: "Terapia de Reversión del Espejo",
    definicion: "Técnica de rehabilitación en la que se utiliza un espejo para crear una ilusión reflectante de un miembro afectado, con el fin de engañar al cerebro y estimular la neuroplasticidad."
  },
  {
    termino: "Valgo (Genu Valgo)",
    definicion: "Deformidad en la que un segmento de una extremidad se desvía hacia la línea media del cuerpo. En la rodilla, se conoce como 'piernas en X'."
  },
  {
    termino: "Varo (Genu Varo)",
    definicion: "Deformidad en la que un segmento de una extremidad se desvía alejándose de la línea media del cuerpo. En la rodilla, se conoce como 'piernas arqueadas'."
  },
  {
    termino: "Velocidad de Conducción Nerviosa (VCN)",
    definicion: "Prueba que mide la velocidad a la que un impulso eléctrico viaja a través de un nervio, utilizada para diagnosticar daño nervioso."
  },
  {
    termino: "Wearables",
    definicion: "Dispositivos electrónicos portátiles (relojes inteligentes, sensores) que pueden monitorizar la actividad física, la frecuencia cardíaca y otros datos biométricos, útiles para el seguimiento en fisioterapia."
  },
  {
    termino: "Zona de Lesión",
    definicion: "En el contexto del entrenamiento deportivo, se refiere a la zona de carga de trabajo en la que un atleta tiene un riesgo significativamente mayor de sufrir una lesión, a menudo debido a picos rápidos de carga."
  }
];
