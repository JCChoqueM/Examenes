// AUTOGENERADO — no editar a mano.
// Generado por: node tools/scan-materias.js
// Concatena todos los exámenes auto-contenidos de materias/<materia>/*.js.
// Cada archivo define su materia con registro idempotente (if (!SUBJECTS.<k>)).

// === materias/ia/parcial1.js ===
// ── EXAMEN: Parcial 1 — Inteligencia Artificial ──
// Archivo AUTOCONTENIDO: está integrado el meta de la materia, por lo que este
// único .js define la materia (si no existía) y registra este examen en SUBJECTS.
// Basta cargar este archivo (después de data.js) y la materia queda disponible.
// Si la materia ya fue registrada por otro examen, el bloque del meta se omite
// (registro idempotente) y aquí solo se agrega este examen.

const IA_PARCIAL1_QUESTIONS = [
  {
    "id": "ia1",
    "tema": "TEMA I",
    "seccion": "¿Qué es la IA?",
    "text": "¿Cuál es IA Estrecha?",
    "opts": [
      "Un sistema que realiza múltiples tareas distintas simultáneamente",
      "Un algoritmo que SOLO reconoce rostros en tu teléfono y nada más (no puede traducir idiomas, ni jugar ajedrez)",
      "Un sistema capaz de resolver cualquier problema cognitivo humano",
      "Una máquina que puede aprender nuevas tareas sin reentrenamiento"
    ],
    "answer": 1
  },
  {
    "id": "ia2",
    "tema": "TEMA I",
    "seccion": "¿Qué es la IA?",
    "text": "¿Cuál es la diferencia entre IA General e IA Estrecha?",
    "opts": [
      "IA General es más rápida en procesamiento",
      "IA General podría resolver CUALQUIER tarea cognitiva humana (como un humano), mientras que IA Estrecha solo resuelve una tarea específica (ej: Google Translate solo traduce, Siri solo escucha comandos)",
      "IA General requiere menos datos de entrenamiento",
      "IA General funciona sin necesidad de datos"
    ],
    "answer": 1
  },
  {
    "id": "ia3",
    "tema": "TEMA I",
    "seccion": "¿Qué es la IA?",
    "text": "¿En qué año se formalizó el campo de la IA en la conferencia de Dartmouth?",
    "opts": [
      "1943",
      "1956",
      "1974",
      "1997"
    ],
    "answer": 1
  },
  {
    "id": "ia4",
    "tema": "TEMA I",
    "seccion": "¿Qué es la IA?",
    "text": "¿Qué caracterizó las \"Épocas Doradas\" de la IA?",
    "opts": [
      "La creación de máquinas superinteligentes",
      "Desarrollo de programas de ajedrez y gran optimismo (ej: pensaron que en 20 años tendríamos asistentes virtuales perfectos)",
      "La prohibición de investigar IA",
      "Colapso de la inversión en tecnología"
    ],
    "answer": 1
  },
  {
    "id": "ia5",
    "tema": "TEMA I",
    "seccion": "¿Qué es la IA?",
    "text": "¿Qué fueron los \"Inviernos de la IA\"?",
    "opts": [
      "Períodos con temperaturas bajas extremas",
      "Períodos de crisis financiera y promesas no cumplidas (ej: los asistentes virtuales \"perfectos\" no llegaron)",
      "Épocas donde la IA se volvió demasiado peligrosa",
      "Años donde los científicos dejaron completamente el campo"
    ],
    "answer": 1
  },
  {
    "id": "ia6",
    "tema": "TEMA I",
    "seccion": "¿Qué es la IA?",
    "text": "¿Cuál fue el principal factor en el resurgimiento de la IA después de 2010?",
    "opts": [
      "Invención de nuevos lenguajes de programación",
      "Disponibilidad masiva de datos y poder computacional en la nube (ej: Netflix viendo tus películas, YouTube viendo tus búsquedas)",
      "Regulaciones gubernamentales",
      "Mejoras en infraestructura de cables"
    ],
    "answer": 1
  },
  {
    "id": "ia7",
    "tema": "TEMA I",
    "seccion": "¿Qué es la IA?",
    "text": "¿Cuál es la definición de Inteligencia Artificial?",
    "opts": [
      "Un robot que habla como humano",
      "La rama de la informática que diseña sistemas capaces de realizar tareas que requieren inteligencia humana",
      "Un programa que gana competencias",
      "Cualquier máquina automática"
    ],
    "answer": 1
  },
  {
    "id": "ia8",
    "tema": "TEMA I",
    "seccion": "¿Qué es la IA?",
    "text": "¿Qué significa que un modelo de IA \"aprenda\"?",
    "opts": [
      "Que descargue información de internet",
      "Que recuerde conversaciones anteriores",
      "Que ajuste sus parámetros internos basándose en datos para mejorar (ej: TikTok ve que ves 10 segundos de baile y 2 de noticias, ajusta para mostrarte más baile)",
      "Que desarrolle conciencia"
    ],
    "answer": 2
  },
  {
    "id": "ia9",
    "tema": "TEMA I",
    "seccion": "Aprendizaje Supervisado",
    "text": "¿Cuál es un ejemplo de Aprendizaje Supervisado?",
    "opts": [
      "YouTube agrupa videos en géneros que descubre automáticamente",
      "Tu teléfono aprende a reconocer tu cara usando miles de fotos tuyas etiquetadas como \"tu cara\" o \"no tu cara\"",
      "Netflix descubre qué tipo de películas te gustan sin que las etiquetes",
      "Spotify te muestra canciones similares a las que escuchas"
    ],
    "answer": 1
  },
  {
    "id": "ia10",
    "tema": "TEMA I",
    "seccion": "Aprendizaje Supervisado",
    "text": "¿Qué caracteriza al Aprendizaje Supervisado?",
    "opts": [
      "El modelo aprende completamente solo sin ayuda",
      "Los datos incluyen entrada + la respuesta correcta (ej: foto de tu perro + \"es tu perro\", foto ajena + \"no es tu perro\")",
      "Solo funciona con redes profundas",
      "El modelo puede aprender mientras está en uso"
    ],
    "answer": 1
  },
  {
    "id": "ia11",
    "tema": "TEMA I",
    "seccion": "Aprendizaje Supervisado",
    "text": "¿Cuál es una tarea de Aprendizaje Supervisado?",
    "opts": [
      "Instagram agrupa tus fotos en álbumes automáticamente sin decirle cuáles son vacaciones",
      "Google Photos aprende a identificar si hay gatos en tus fotos usando millones de fotos etiquetadas como \"gato\" o \"no gato\"",
      "TikTok te muestra videos similares a los que viste",
      "Spotify descubre patrones en lo que escuchas"
    ],
    "answer": 1
  },
  {
    "id": "ia12",
    "tema": "TEMA I",
    "seccion": "Aprendizaje No Supervisado",
    "text": "¿Cuál es un ejemplo de Aprendizaje No Supervisado?",
    "opts": [
      "Tu corrector de WhatsApp usa palabras etiquetadas como \"correctas\" e \"incorrectas\"",
      "Instagram agrupa automáticamente a usuarios: algunos solo ven moda, otros solo viajes, otros solo comida, sin que Instagram te diga qué categoría eres",
      "Google Translate usa millones de frases etiquetadas en pares de idiomas",
      "Netflix usa películas etiquetadas por género"
    ],
    "answer": 1
  },
  {
    "id": "ia13",
    "tema": "TEMA I",
    "seccion": "Aprendizaje No Supervisado",
    "text": "¿Cuál es el objetivo del Aprendizaje No Supervisado?",
    "opts": [
      "Etiquetar datos manualmente",
      "Descubrir patrones ocultos sin que nadie te diga qué buscar (ej: Gmail ve que recibes correos de tu mamá, trabajo, compras, agrupa automáticamente)",
      "Entrenar rápidamente",
      "Eliminar datos"
    ],
    "answer": 1
  },
  {
    "id": "ia14",
    "tema": "TEMA I",
    "seccion": "Aprendizaje No Supervisado",
    "text": "¿Cuál es una característica del Aprendizaje No Supervisado?",
    "opts": [
      "Requiere etiquetas claras como \"correcto/incorrecto\"",
      "El modelo descubre grupos por sí solo sin categorías previas (ej: YouTube agrupa a usuarios en \"ven tutoriales\", \"ven música\", \"ven comedia\" automáticamente)",
      "Solo predice números",
      "Necesita validación humana constante"
    ],
    "answer": 1
  },
  {
    "id": "ia15",
    "tema": "TEMA I",
    "seccion": "Aprendizaje por Refuerzo",
    "text": "¿Cuál es un ejemplo de Aprendizaje por Refuerzo?",
    "opts": [
      "Clasificar tus correos como spam usando correos etiquetados previamente",
      "Google Photos agrupa tus fotos en álbumes automáticamente",
      "Un videojuego donde un personaje aprende: cada vez que choca con una pared pierde vida, cada vez que recoge monedas gana puntos, mejora su camino",
      "Spotify te recomienda canciones similares"
    ],
    "answer": 2
  },
  {
    "id": "ia16",
    "tema": "TEMA I",
    "seccion": "Aprendizaje por Refuerzo",
    "text": "¿Cuál es el principio del Aprendizaje por Refuerzo?",
    "opts": [
      "Recibir etiquetas correctas para cada ejemplo",
      "El agente intenta acciones, recibe retroalimentación (recompensa o penalización) y mejora (ej: un perro hace un truco → recibe galleta → repite el truco)",
      "Descubrir patrones sin intervención",
      "Memorizar todas las experiencias"
    ],
    "answer": 1
  },
  {
    "id": "ia17",
    "tema": "TEMA I",
    "seccion": "Aprendizaje por Refuerzo",
    "text": "¿Qué distingue al Aprendizaje por Refuerzo?",
    "opts": [
      "Requiere datos completamente etiquetados",
      "El agente aprende haciendo: intenta acción → obtiene puntos/penalización → ajusta estrategia (ej: un robot aspirador choca con pared = no funciona bien, limpia todo bien = funciona bien, aprende mejor ruta)",
      "No funciona en robots reales",
      "Solo para videojuegos"
    ],
    "answer": 1
  },
  {
    "id": "ia18",
    "tema": "TEMA I",
    "seccion": "Redes Neuronales",
    "text": "¿Qué es la \"propagación hacia atrás\" (backpropagation)?",
    "opts": [
      "Cuando una red neuronal olvida lo aprendido",
      "Un algoritmo que calcula: \"este parámetro causó error grande, cambialo\" (como cuando escribes un mensaje en WhatsApp mal escrito, ves el error, lo corriges)",
      "Conectar capas automáticamente",
      "Eliminar datos defectuosos"
    ],
    "answer": 1
  },
  {
    "id": "ia19",
    "tema": "TEMA I",
    "seccion": "Redes Neuronales",
    "text": "¿Cuál es el propósito del \"Forward Pass\"?",
    "opts": [
      "Eliminar capas innecesarias",
      "Pasar datos hacia adelante a través de la red para obtener una predicción (ej: tu foto entra al Face ID → pasa por capas → sale \"es tu cara\" o \"no es tu cara\")",
      "Corregir errores del paso anterior",
      "Aumentar velocidad de procesamiento"
    ],
    "answer": 1
  },
  {
    "id": "ia20",
    "tema": "TEMA I",
    "seccion": "Redes Neuronales",
    "text": "¿Por qué importan las funciones de activación no lineales?",
    "opts": [
      "Para hacer código más legible",
      "Para reducir parámetros del modelo",
      "Permiten que la red aprenda relaciones complejas que operaciones simples no pueden (ej: sin ellas, un filtro de fotos solo oscurece uniformemente; con ellas, detecta si estás sonriendo)",
      "Para conectar capas automáticamente"
    ],
    "answer": 2
  },
  {
    "id": "ia21",
    "tema": "TEMA I",
    "seccion": "Redes Neuronales",
    "text": "¿Cuál es la diferencia entre red neuronal simple y Deep Learning?",
    "opts": [
      "Deep Learning es más lento",
      "Deep Learning usa muchas capas que reconocen detalles cada vez más complejos (ej: capa 1 ve píxeles, capa 5 ve ojos y boca, capa 10 ve rostro y emoción)",
      "Deep Learning solo funciona con imágenes",
      "Son exactamente iguales"
    ],
    "answer": 1
  }
];

// ── Metadatos de la materia (auto-registro idempotente) ──
// Meta integrado en este archivo: define la materia solo si aún no existe.
if (!SUBJECTS.ia) {
  SUBJECTS.ia = {
    "key": "ia",
    "icon": "🤖",
    "label": "Inteligencia Artificial",
    "badge": "IA · INGENIERÍA",
    "subtitle": "Examen Interactivo — IA para Ingenieros: Primeros Pasos (UNIOR)",
    "temas": [
      "TODOS",
      "TEMA I"
    ],
    "temaLabels": {
      "TEMA I": "TEMA I: IA para Ingenieros"
    },
    "secciones": [
      "TODAS",
      "¿Qué es la IA?",
      "Aprendizaje Supervisado",
      "Aprendizaje No Supervisado",
      "Aprendizaje por Refuerzo",
      "Redes Neuronales",
      "Herramientas y Lenguajes",
      "Proyecto y Preprocesamiento",
      "Ética y Responsabilidad"
    ],
    "exams": {}
  };
}

// ── Registro del examen en SUBJECTS (auto-registro) ──
SUBJECTS.ia.exams.parcial1 = {
  key: 'parcial1',
  label: "Parcial 1",
  questions: IA_PARCIAL1_QUESTIONS,
};

// === materias/ia/parcial2.js ===
// ── EXAMEN: Parcial 2 — Inteligencia Artificial ──
// Archivo AUTOCONTENIDO: está integrado el meta de la materia, por lo que este
// único .js define la materia (si no existía) y registra este examen en SUBJECTS.
// Basta cargar este archivo (después de data.js) y la materia queda disponible.
// Si la materia ya fue registrada por otro examen, el bloque del meta se omite
// (registro idempotente) y aquí solo se agrega este examen.

const IA_PARCIAL2_QUESTIONS = [
  {
    "id": "ia22",
    "tema": "TEMA I",
    "seccion": "Herramientas y Lenguajes",
    "text": "¿Por qué Python domina en IA?",
    "opts": [
      "Es el lenguaje más antiguo",
      "Tiene sintaxis simple y herramientas listas para IA (ej: en Python escribes 10 líneas para que tu teléfono reconozca rostros, en C++ escribes 500)",
      "Es obligatorio usar Python",
      "Consume menos energía eléctrica"
    ],
    "answer": 1
  },
  {
    "id": "ia23",
    "tema": "TEMA I",
    "seccion": "Herramientas y Lenguajes",
    "text": "¿Cuál es el propósito de Jupyter Notebook?",
    "opts": [
      "Reemplazar Python como lenguaje",
      "Escribir código en pequeñas celdas y ver resultados al instante (ej: ajustas cómo el filtro de Instagram reconoce rostros, lo ejecutas, ves si funciona mejor, cambias de nuevo)",
      "Compilar código automáticamente a máquina",
      "Crear videos tutoriales"
    ],
    "answer": 1
  },
  {
    "id": "ia24",
    "tema": "TEMA I",
    "seccion": "Herramientas y Lenguajes",
    "text": "¿Qué hace NumPy eficiente?",
    "opts": [
      "Procesa solo texto y lenguaje",
      "Realiza cálculos matemáticos muy rápido con vectores (ej: calcular recomendaciones para 1 millón de usuarios en 1 segundo)",
      "Funciona solo con números enteros",
      "Gestiona imágenes JPG específicamente"
    ],
    "answer": 1
  },
  {
    "id": "ia25",
    "tema": "TEMA I",
    "seccion": "Herramientas y Lenguajes",
    "text": "¿Cuál es la diferencia entre NumPy y pandas?",
    "opts": [
      "NumPy es siempre más rápido",
      "NumPy hace cálculos matemáticos; pandas organiza datos como Excel (ej: pandas tiene columnas con nombres como \"edad\", \"ciudad\", \"compras\")",
      "Pandas es subconjunto de NumPy",
      "Son iguales"
    ],
    "answer": 1
  },
  {
    "id": "ia26",
    "tema": "TEMA I",
    "seccion": "Herramientas y Lenguajes",
    "text": "¿Cuál es ventaja de Scikit-learn?",
    "opts": [
      "Entrena deep learning automáticamente",
      "Puedes entrenar modelos complejos en pocas líneas sin código complicado (ej: predecir si alguien comprará en tu tienda en 3 líneas de código)",
      "Más potente que TensorFlow en todos los aspectos",
      "Solo funciona en la nube"
    ],
    "answer": 1
  },
  {
    "id": "ia27",
    "tema": "TEMA I",
    "seccion": "Proyecto y Preprocesamiento",
    "text": "¿Cuál es el primer paso en un proyecto IA?",
    "opts": [
      "Seleccionar modelo de Deep Learning",
      "Definir claramente qué quieres predecir y cómo sabrás si funciona (ej: \"predecir si un cliente volverá a comprar\" → métrica: 90% de precisión)",
      "Recolectar datos máximo posible",
      "Publicar resultados"
    ],
    "answer": 1
  },
  {
    "id": "ia28",
    "tema": "TEMA I",
    "seccion": "Proyecto y Preprocesamiento",
    "text": "¿Cuál es el propósito de \"One-Hot Encoding\"?",
    "opts": [
      "Reducir tamaño de archivo",
      "Convertir categorías en números que el modelo entienda (ej: ciudad \"Madrid\" → [1,0,0], \"Barcelona\" → [0,1,0], \"Valencia\" → [0,0,1])",
      "Optimizar internet",
      "Eliminar datos faltantes"
    ],
    "answer": 1
  },
  {
    "id": "ia29",
    "tema": "TEMA I",
    "seccion": "Proyecto y Preprocesamiento",
    "text": "¿Por qué normalizar variables numéricas?",
    "opts": [
      "Para código legible",
      "Para que todas tengan peso similar (ej: si tienes edad (0-100) e ingresos (0-1,000,000), ingresos no debería dominar solo por ser número grande; Instagram hace esto para tus búsquedas)",
      "Requisito legal",
      "Reducir tiempo de entrenamiento"
    ],
    "answer": 1
  },
  {
    "id": "ia30",
    "tema": "TEMA I",
    "seccion": "Proyecto y Preprocesamiento",
    "text": "¿Cuál es la división típica de datos entrenamiento/prueba?",
    "opts": [
      "99% - 1%",
      "80% - 20% (ej: de 100 fotos de tu rostro para Face ID, entrenas con 80, pruebas con 20 que el modelo nunca vio)",
      "50% - 50%",
      "95% - 5%"
    ],
    "answer": 1
  },
  {
    "id": "ia31",
    "tema": "TEMA I",
    "seccion": "Proyecto y Preprocesamiento",
    "text": "¿Qué mide el coeficiente R²?",
    "opts": [
      "Número de parámetros",
      "Qué tan bien tu modelo explica los datos, de 0 a 1 (ej: R²=0.85 significa que explica el 85% de por qué algunos usuarios ven más TikTok que otros)",
      "La velocidad del modelo",
      "Cantidad de datos"
    ],
    "answer": 1
  },
  {
    "id": "ia32",
    "tema": "TEMA I",
    "seccion": "Proyecto y Preprocesamiento",
    "text": "¿Cuál es el orden correcto en Machine Learning?",
    "opts": [
      "Evaluar → Entrenar → Dividir → Cargar",
      "Cargar datos → Dividir en 80/20 → Entrenar modelo → Predecir → Evaluar resultados (ej: como usar WhatsApp: descargar → configurar → usar → revisar si funciona)",
      "Predecir → Entrenar → Dividir",
      "Entrenar → Predecir → Dividir"
    ],
    "answer": 1
  },
  {
    "id": "ia33",
    "tema": "TEMA I",
    "seccion": "Ética y Responsabilidad",
    "text": "¿Qué es el sesgo en IA?",
    "opts": [
      "Un parámetro que mejora precisión",
      "Cuando el modelo aprende discriminaciones del pasado y las perpetúa (ej: un filtro de búsqueda que muestra menos a ciertas personas porque históricamente se buscaba más a otras)",
      "Un método para optimizar rápido",
      "Un nombre técnico"
    ],
    "answer": 1
  },
  {
    "id": "ia34",
    "tema": "TEMA I",
    "seccion": "Ética y Responsabilidad",
    "text": "¿Cuál es un ejemplo de sesgo en IA?",
    "opts": [
      "Algoritmo lento",
      "Un reconocedor facial que falla más en rostros oscuros porque fue entrenado mayormente con rostros claros (ej: el iPhone Face ID falla más con gente de piel oscura)",
      "Precisión muy alta",
      "Modelo que es rápido"
    ],
    "answer": 1
  },
  {
    "id": "ia35",
    "tema": "TEMA I",
    "seccion": "Ética y Responsabilidad",
    "text": "¿Qué es Federated Learning?",
    "opts": [
      "Centralizar todos los datos en un servidor",
      "Entrenar modelos en los dispositivos del usuario sin enviar datos personales a servidores (ej: tu teléfono aprende tu forma de escribir sin mandar tus mensajes a Google)",
      "Dividir trabajo entre departamentos",
      "Hacer todos los modelos iguales"
    ],
    "answer": 1
  }
];

// ── Metadatos de la materia (auto-registro idempotente) ──
// Meta integrado en este archivo: define la materia solo si aún no existe.
if (!SUBJECTS.ia) {
  SUBJECTS.ia = {
    "key": "ia",
    "icon": "🤖",
    "label": "Inteligencia Artificial",
    "badge": "IA · INGENIERÍA",
    "subtitle": "Examen Interactivo — IA para Ingenieros: Primeros Pasos (UNIOR)",
    "temas": [
      "TODOS",
      "TEMA I"
    ],
    "temaLabels": {
      "TEMA I": "TEMA I: IA para Ingenieros"
    },
    "secciones": [
      "TODAS",
      "¿Qué es la IA?",
      "Aprendizaje Supervisado",
      "Aprendizaje No Supervisado",
      "Aprendizaje por Refuerzo",
      "Redes Neuronales",
      "Herramientas y Lenguajes",
      "Proyecto y Preprocesamiento",
      "Ética y Responsabilidad"
    ],
    "exams": {}
  };
}

// ── Registro del examen en SUBJECTS (auto-registro) ──
SUBJECTS.ia.exams.parcial2 = {
  key: 'parcial2',
  label: "Parcial 2",
  questions: IA_PARCIAL2_QUESTIONS,
};

// === materias/legislacion/general.js ===
// ── EXAMEN: General — Legislación Informática ──
// Archivo AUTOCONTENIDO: está integrado el meta de la materia, por lo que este
// único .js define la materia (si no existía) y registra este examen en SUBJECTS.
// Basta cargar este archivo (después de data.js) y la materia queda disponible.
// Si la materia ya fue registrada por otro examen, el bloque del meta se omite
// (registro idempotente) y aquí solo se agrega este examen.

const LEGISLACION_GENERAL_QUESTIONS = [
  {
    "id": "p1",
    "tema": "TEMA V",
    "text": "Los derechos de las personas y la informática, conocidos como:",
    "opts": [
      "derechos informáticos",
      "derecho privado",
      "Derecho Personal",
      "derechos digitales"
    ],
    "answer": 3
  },
  {
    "id": "p2",
    "tema": "TEMA V",
    "text": "Los Derechos Humanos no pueden ser:",
    "opts": [
      "Cedidos",
      "Imprescriptibles",
      "Esporádicos",
      "Universales"
    ],
    "answer": 0
  },
  {
    "id": "p4",
    "tema": "TEMA V",
    "text": "De acuerdo a la jurisprudencia se toma en cuenta que el derecho a la privacidad tiene dos sentidos:",
    "opts": [
      "El primero conocido como el sentido natural y el segundo como el sentido negativo.",
      "El primero conocido como el sentido positivo y el segundo como el sentido universal.",
      "El primero conocido como el sentido positivo y el segundo como el sentido negativo.",
      "El primero conocido como el sentido natural y el segundo como el sentido positivo."
    ],
    "answer": 2
  },
  {
    "id": "p5",
    "tema": "TEMA V",
    "text": "Para los países que siguen las estructuras básicas del sistema continental romanista, la Ley es considerada como una:",
    "opts": [
      "Costumbre",
      "Fuente",
      "Norma",
      "Jurisprudencia"
    ],
    "answer": 1
  },
  {
    "id": "p6",
    "tema": "TEMA V",
    "text": "La doctrina para Manuel Ossorio dice:",
    "opts": [
      "Conjunto de normas de los tratadistas y estudiosos de las leyes que explican y fijan el sentido de las leyes o sugieren soluciones para cuestiones aún no legisladas.",
      "Conjunto de Leyes y opiniones de los tratadistas y estudiosos que explican y fijan el sentido y sugieren soluciones para cuestiones aún no legisladas.",
      "Conjunto de tesis y opiniones de los tratadistas y estudiosos del derecho que explican y fijan el sentido de las leyes o sugieren soluciones para cuestiones aún no legisladas.",
      "Conjunto de normas y leyes de los tratadistas y estudiosos del derecho que explican y fijan el sentido positivo del derecho."
    ],
    "answer": 2
  },
  {
    "id": "p7",
    "tema": "TEMA V",
    "text": "El Dr. Marcelo Fernández dice que en el Derecho Informático existen dos tipos de fuentes que son:",
    "opts": [
      "Fuentes Interdisciplinarias y Fuentes Transdisciplinarias",
      "Fuentes la costumbre y Fuentes Jurisprudencia",
      "Fuentes Primarias y Fuentes Secundarias",
      "Fuentes Nacionales y Fuentes Internacionales"
    ],
    "answer": 0
  },
  {
    "id": "p10",
    "tema": "TEMA I",
    "text": "Se podría definir el delito informático como:",
    "opts": [
      "toda acción (acción u omisión) no culpable realizada por un ser humano, que cause un perjuicio a personas sin que necesariamente se beneficie el autor",
      "toda acción (acción u omisión) culpable realizada por un ser humano, que cause un perjuicio a personas sin que necesariamente se beneficie el autor",
      "toda acción (acción u omisión) culpable realizada por un delincuente, que cause o no un perjuicio a la sociedad sin que necesariamente se beneficie el autor",
      "toda acción (acción u omisión) realizada por un ciudadano, que cause un perjuicio a personas sin que necesariamente se beneficie el autor"
    ],
    "answer": 0
  },
  {
    "id": "e1",
    "tema": "TEMA I",
    "text": "El Artículo 363 ter del Código Penal boliviano tipifica delitos relacionados con:",
    "opts": [
      "La manipulación informática para beneficio económico indebido",
      "La alteración, acceso y uso indebido de datos informáticos",
      "El fraude electrónico y la estafa en redes sociales",
      "La interceptación ilegal de comunicaciones privadas"
    ],
    "answer": 1
  },
  {
    "id": "e2",
    "tema": "TEMA I",
    "text": "La 'alteración de datos' según el Art. 363 ter implica:",
    "opts": [
      "La obtención no autorizada de información de un sistema",
      "El acceso sin permiso a sistemas informáticos de terceros",
      "La modificación, supresión o deterioro intencional de datos informáticos",
      "La publicación de datos personales sin consentimiento"
    ],
    "answer": 2
  },
  {
    "id": "e3",
    "tema": "TEMA I",
    "text": "El 'acceso indebido a datos' consiste en:",
    "opts": [
      "La modificación de registros en bases de datos gubernamentales",
      "La obtención, copia o sustracción no autorizada de información contenida en un sistema",
      "La instalación de software malicioso en equipos ajenos",
      "La interceptación de comunicaciones en redes públicas"
    ],
    "answer": 1
  },
  {
    "id": "e4",
    "tema": "TEMA I",
    "text": "Una 'violación de datos' o brecha de datos ocurre cuando datos sensibles son copiados, transmitidos o utilizados por:",
    "opts": [
      "Un funcionario público sin orden judicial",
      "Un proveedor de servicios con contrato vencido",
      "Una persona no autorizada",
      "Un tercero con acceso parcial al sistema"
    ],
    "answer": 2
  },
  {
    "id": "e5",
    "tema": "TEMA I",
    "text": "La doctrina jurídica en protección de datos informáticos enfatiza tres principios: confidencialidad, integridad y:",
    "opts": [
      "Universalidad",
      "Proporcionalidad",
      "Disponibilidad",
      "Territorialidad"
    ],
    "answer": 2
  },
  {
    "id": "e6",
    "tema": "TEMA I",
    "text": "Un ejemplo claro de 'acceso indebido a datos' es:",
    "opts": [
      "Modificar calificaciones en un sistema académico",
      "Descargar ilegalmente bases de datos con números de tarjetas de crédito",
      "Borrar registros contables de una empresa",
      "Instalar un programa espía en un dispositivo ajeno"
    ],
    "answer": 1
  },
  {
    "id": "e7",
    "tema": "TEMA I",
    "text": "Los bienes jurídicos que el Art. 363 ter busca proteger son:",
    "opts": [
      "El patrimonio económico y la propiedad intelectual",
      "La confidencialidad, integridad y disponibilidad de la información digital",
      "La libertad de expresión y el acceso libre a la información",
      "La seguridad nacional y los sistemas de defensa estatal"
    ],
    "answer": 1
  },
  {
    "id": "e8",
    "tema": "TEMA I",
    "text": "Según la doctrina boliviana, el delito del Art. 363 ter se diferencia del Art. 363 bis porque:",
    "opts": [
      "El 363 ter requiere beneficio económico y el 363 bis no",
      "El 363 bis sanciona la manipulación informática y el 363 ter el acceso, alteración y uso indebido de datos",
      "El 363 ter aplica solo a personas jurídicas y el 363 bis a personas naturales",
      "Ambos son idénticos, solo difieren en la pena aplicable"
    ],
    "answer": 1
  },
  {
    "id": "e9",
    "tema": "TEMA I",
    "text": "La 'integridad' como principio de protección de datos informáticos se refiere a:",
    "opts": [
      "La accesibilidad de los datos cuando se los necesita",
      "La protección contra accesos no autorizados externos",
      "La precisión e inalterabilidad de los datos",
      "La confidencialidad frente a terceros no autorizados"
    ],
    "answer": 2
  },
  {
    "id": "e10",
    "tema": "TEMA I",
    "text": "Las consecuencias de una violación de datos pueden incluir:",
    "opts": [
      "Únicamente perjuicios económicos al titular de los datos",
      "Solo daño a la reputación pública de empresas involucradas",
      "Perjuicios económicos, usurpación de identidad o exposición pública de información confidencial",
      "Sanciones administrativas exclusivamente para el proveedor del sistema"
    ],
    "answer": 2
  },
  {
    "id": "e11",
    "tema": "TEMA II",
    "text": "El Artículo 363 bis del Código Penal (Manipulación informática) sanciona con:",
    "opts": [
      "6 meses a 3 años a quien altere datos con fines de engaño",
      "1 a 5 años de reclusión a quien manipule datos para obtener beneficio indebido",
      "Multa equivalente al daño causado más 2 años de reclusión",
      "2 a 8 años a quien acceda ilegalmente a sistemas financieros"
    ],
    "answer": 1
  },
  {
    "id": "e12",
    "tema": "TEMA II",
    "text": "El delito informático más reportado en Bolivia según estadísticas 2024-2026 es:",
    "opts": [
      "Robo de identidad y venta de datos en la Dark Web",
      "Fraude informático y estafas mediante phishing, ingeniería social y QR engañosos",
      "Deepfakes y fake news con inteligencia artificial",
      "Manipulación de sistemas municipales para evasión de impuestos"
    ],
    "answer": 1
  },
  {
    "id": "e13",
    "tema": "TEMA II",
    "text": "El grupo más propenso a sufrir fraudes y acoso digital en Bolivia es:",
    "opts": [
      "Personas mayores de 50 años con cuentas bancarias activas",
      "Niños menores de 12 años con acceso a videojuegos en línea",
      "Jóvenes de 16 a 35 años, siendo las mujeres el grupo más afectado",
      "Adultos entre 36 y 50 años con acceso a banca digital"
    ],
    "answer": 2
  },
  {
    "id": "e14",
    "tema": "TEMA II",
    "text": "El 'grooming' en el contexto de delitos informáticos en Bolivia se refiere a:",
    "opts": [
      "El robo de identidad digital de personas adultas en redes sociales",
      "El acoso e incremento de violencia sexual a menores en redes sociales",
      "La distribución de malware a través de mensajes de correo electrónico",
      "La suplantación de identidad de funcionarios para obtener datos confidenciales"
    ],
    "answer": 1
  },
  {
    "id": "e15",
    "tema": "TEMA II",
    "text": "Los 'deepfakes' como delito informático consisten en:",
    "opts": [
      "La clonación de tarjetas bancarias mediante dispositivos físicos",
      "El acceso no autorizado a cámaras de vigilancia privadas",
      "El uso de inteligencia artificial para suplantar figuras públicas y promover engaños",
      "La creación de perfiles falsos en redes sociales para estafar"
    ],
    "answer": 2
  },
  {
    "id": "e16",
    "tema": "TEMA II",
    "text": "Un desafío principal en la persecución de delitos informáticos en Bolivia es:",
    "opts": [
      "La falta de denuncias porque los delitos son considerados menores",
      "La alta impunidad por falta de pruebas o anonimato de los autores, y dificultad de jurisdicción cuando los servidores están en el extranjero",
      "La inexistencia de tipos penales específicos en el Código Penal",
      "La oposición de empresas tecnológicas a colaborar con la justicia boliviana"
    ],
    "answer": 1
  },
  {
    "id": "e17",
    "tema": "TEMA II",
    "text": "La Ley 164 de Telecomunicaciones junto al Art. 363 ter del Código Penal forman parte del marco normativo para:",
    "opts": [
      "Regular el comercio electrónico y la firma digital en Bolivia",
      "Sancionar delitos contra la integridad sexual de menores en entornos digitales",
      "Proteger sistemas informáticos y datos digitales de accesos no autorizados",
      "Establecer derechos de autor sobre software de desarrollo nacional"
    ],
    "answer": 2
  },
  {
    "id": "e18",
    "tema": "TEMA II",
    "text": "El Código Niño, Niña y Adolescente en Bolivia, en relación al delito informático, regula específicamente:",
    "opts": [
      "Las penas por manipulación de sistemas electorales con participación de menores",
      "El acoso cibernético (cyberbullying) y delitos de contacto sexual con menores en entornos digitales",
      "El acceso a internet de menores y la responsabilidad de los proveedores de servicio",
      "La propiedad intelectual de contenidos creados por menores de edad en plataformas digitales"
    ],
    "answer": 1
  },
  {
    "id": "e19",
    "tema": "TEMA II",
    "text": "¿Por qué la Constitución Política del Estado (art. 21) es base de la legislación informática boliviana?",
    "opts": [
      "Porque regula expresamente el uso de datos personales en plataformas digitales",
      "Porque establece el habeas data como garantía autónoma de aplicación inmediata",
      "Porque protege la privacidad e intimidad personal y familiar, fundamento constitucional de la protección de datos",
      "Porque prohíbe toda forma de vigilancia electrónica por parte de entidades estatales"
    ],
    "answer": 2
  },
  {
    "id": "e20",
    "tema": "TEMA II",
    "text": "El Ministerio Público de Bolivia ha registrado incremento en denuncias relacionadas con:",
    "opts": [
      "Infracciones de derechos de autor en plataformas de streaming",
      "Estafa, acceso indebido a sistemas, alteración y acceso indebido de datos",
      "Violaciones de secreto profesional a través de medios digitales",
      "Uso no autorizado de redes Wi-Fi públicas en centros urbanos"
    ],
    "answer": 1
  },
  {
    "id": "e21",
    "tema": "TEMA III",
    "text": "La Ley N° 26.388 de Argentina (2008) es relevante en legislación comparada porque:",
    "opts": [
      "Fue la primera ley latinoamericana exclusivamente sobre pornografía infantil digital",
      "Es la base normativa más consolidada de la región, con aplicación judicial desde hace más de 15 años",
      "Regula únicamente el acceso ilícito a sistemas bancarios y financieros",
      "Tipifica exclusivamente los delitos de grooming y acoso cibernético"
    ],
    "answer": 1
  },
  {
    "id": "e22",
    "tema": "TEMA III",
    "text": "El Artículo 153 bis del Código Penal Argentino (Ley 26.388) regula:",
    "opts": [
      "La violación de correspondencia y comunicaciones electrónicas",
      "El daño informático y la destrucción intencional de sistemas",
      "El acceso ilícito a sistemas o datos informáticos de acceso restringido",
      "La apropiación de datos personales y robo de identidad digital"
    ],
    "answer": 2
  },
  {
    "id": "e23",
    "tema": "TEMA III",
    "text": "La sanción básica por acceso ilícito a sistemas informáticos en Argentina (Art. 153 bis CP) es:",
    "opts": [
      "6 meses a 2 años de prisión",
      "15 días a 6 meses de prisión",
      "1 a 3 años de reclusión",
      "Multa más 30 días de arresto"
    ],
    "answer": 1
  },
  {
    "id": "e24",
    "tema": "TEMA III",
    "text": "En Argentina, si el acceso ilícito informático se produce contra un organismo público o servicio financiero, la pena se agrava a:",
    "opts": [
      "6 meses a 2 años de prisión",
      "1 mes a 1 año de prisión",
      "2 a 4 años de reclusión",
      "3 a 6 años de prisión"
    ],
    "answer": 1
  },
  {
    "id": "e25",
    "tema": "TEMA III",
    "text": "El Convenio de Budapest sobre Ciberdelincuencia es relevante en legislación comparada porque:",
    "opts": [
      "Fue adoptado por Bolivia como norma de aplicación directa en 2015",
      "Argentina lo tomó como referencia para elaborar la Ley 26.388 de reforma al Código Penal",
      "Prohíbe a los países miembros tipificar el acceso sin daño como delito",
      "Establece penas mínimas uniformes de 5 años para todos los delitos informáticos"
    ],
    "answer": 1
  },
  {
    "id": "e26",
    "tema": "TEMA III",
    "text": "Según la legislación argentina, la 'interceptación y violación de comunicaciones' (Arts. 153 y 155 CP) incluye:",
    "opts": [
      "Solo el hackeo de cuentas de correo electrónico corporativas",
      "Capturar, leer, grabar o desviar mensajes de WhatsApp, correos, llamadas o cualquier transmisión privada sin permiso",
      "Exclusivamente la interceptación de comunicaciones telefónicas analógicas",
      "Únicamente el acceso no autorizado a archivos almacenados en la nube"
    ],
    "answer": 1
  },
  {
    "id": "e27",
    "tema": "TEMA III",
    "text": "La ventaja principal de la Ley 26.388 argentina frente a otras legislaciones regionales es que regula tanto:",
    "opts": [
      "Delitos financieros digitales como delitos contra la propiedad intelectual",
      "Ataques contra sistemas/datos como fraudes, delitos contra la intimidad y delitos sexuales en entornos digitales",
      "Delitos cometidos por menores como delitos corporativos en el ciberespacio",
      "Delitos nacionales como delitos transfronterizos con extradición automática"
    ],
    "answer": 1
  },
  {
    "id": "e28",
    "tema": "TEMA III",
    "text": "En la legislación comparada, la 'apropiación de datos' (Art. 157 bis CP argentino) se diferencia del 'acceso ilícito' porque:",
    "opts": [
      "La apropiación requiere daño al sistema y el acceso no",
      "El acceso ilícito implica solo ingresar al sistema, mientras la apropiación implica tomar los datos con fines de uso o divulgación",
      "La apropiación de datos se aplica solo a personas jurídicas",
      "No existe diferencia práctica, ambos artículos sancionan la misma conducta"
    ],
    "answer": 1
  },
  {
    "id": "e29",
    "tema": "TEMA III",
    "text": "Un joven ingresa al sistema administrativo de una escuela privada y revisa listas de alumnos sin modificar ni llevarse información. Según la ley argentina, la sanción básica sería:",
    "opts": [
      "30 días de arresto y multa",
      "Archivo de la causa por no producir daño",
      "3 meses de prisión (forma simple del Art. 153 bis)",
      "1 año de prisión por violación de privacidad"
    ],
    "answer": 2
  },
  {
    "id": "e30",
    "tema": "TEMA III",
    "text": "En legislación comparada, la 'manipulación de sistemas' como el RUAT en Bolivia para evasión de impuestos se asemeja al tipo penal de:",
    "opts": [
      "Estafa informática agravada por uso de sistemas públicos",
      "Violación de correspondencia electrónica",
      "Acceso ilícito a sistemas de organismos públicos con agravante",
      "Interceptación de comunicaciones financieras"
    ],
    "answer": 2
  },
  {
    "id": "e31",
    "tema": "TEMA IV",
    "text": "La Ley N° 1636 fue promulgada en Bolivia el:",
    "opts": [
      "21 de febrero de 2023",
      "10 de septiembre de 2025",
      "15 de enero de 2024",
      "6 de agosto de 2022"
    ],
    "answer": 1
  },
  {
    "id": "e32",
    "tema": "TEMA IV",
    "text": "El objeto de la Ley N° 1636 (Art. 1) es:",
    "opts": [
      "Regular el comercio electrónico y la protección de datos personales en Bolivia",
      "Establecer un marco regulatorio para identificar, investigar y sancionar delitos contra la integridad sexual de NNA en entornos digitales",
      "Crear el sistema nacional de ciberseguridad y protección de infraestructura crítica",
      "Tipificar el acoso cibernético entre adultos como delito de acción pública"
    ],
    "answer": 1
  },
  {
    "id": "e33",
    "tema": "TEMA IV",
    "text": "La finalidad de la Ley 1636 (Art. 2) es proteger a toda niña, niño o adolescente generando mecanismos de:",
    "opts": [
      "Investigación, procesamiento, condena y reinserción de agresores",
      "Prevención, protección, reparación y rehabilitación a las víctimas",
      "Detección, denuncia, sanción y eliminación de contenidos digitales",
      "Educación, sensibilización, capacitación y vigilancia digital"
    ],
    "answer": 1
  },
  {
    "id": "e34",
    "tema": "TEMA IV",
    "text": "Según el Art. 4 de la Ley 1636, 'Niñas, Niños y Adolescentes' son:",
    "opts": [
      "Personas menores de 16 años de edad",
      "Personas menores de 14 años según el Código NNA",
      "Personas hasta el cumplimiento de los 18 años de edad",
      "Personas menores de 21 años no emancipadas"
    ],
    "answer": 2
  },
  {
    "id": "e35",
    "tema": "TEMA IV",
    "text": "Los 'Entornos Digitales' según el Art. 4 de la Ley 1636 comprenden:",
    "opts": [
      "Únicamente internet y redes sociales con registro de usuarios",
      "Espacios de interacción a través de TIC, incluyendo internet, redes sociales, apps móviles, juegos en línea y plataformas virtuales",
      "Solo los medios de comunicación electrónica con sede en Bolivia",
      "Exclusivamente plataformas educativas virtuales autorizadas por el Estado"
    ],
    "answer": 1
  },
  {
    "id": "e36",
    "tema": "TEMA IV",
    "text": "El 'Acoso Sexual en Entornos Digitales' (Art. 4, num. 6 Ley 1636) se define como conducta reiterada de intimidación que tiene por objeto:",
    "opts": [
      "Obtener datos personales o información bancaria de la víctima",
      "Generar miedo, angustia o daño psicológico en la víctima",
      "Difundir imágenes íntimas de la víctima sin consentimiento",
      "Suplantar la identidad digital de una persona menor"
    ],
    "answer": 1
  },
  {
    "id": "e37",
    "tema": "TEMA IV",
    "text": "La Ley 1636 establece penas de hasta cuántos años por producir o difundir material de abuso sexual infantil:",
    "opts": [
      "5 años",
      "10 años",
      "15 años",
      "20 años"
    ],
    "answer": 3
  },
  {
    "id": "e38",
    "tema": "TEMA IV",
    "text": "El ámbito de aplicación de la Ley 1636 (Art. 3) alcanza a:",
    "opts": [
      "Solo bolivianos residentes en territorio nacional",
      "Todas las bolivianas y bolivianos o extranjeras y extranjeros que se encuentren en el territorio del Estado Plurinacional de Bolivia y lugares sometidos a su jurisdicción",
      "Únicamente empresas de telecomunicaciones con sede en Bolivia",
      "Solo personas que cometan delitos a través de plataformas digitales con servidores en Bolivia"
    ],
    "answer": 1
  },
  {
    "id": "e39",
    "tema": "TEMA IV",
    "text": "El 'Contenido Sexual' (Art. 4, num. 8 Ley 1636) es:",
    "opts": [
      "Exclusivamente imágenes o videos con actos sexuales explícitos en internet",
      "Toda representación, descripción, imagen, comunicación o material real o simulado que involucra conductas sexuales explícitas o partes íntimas con fines sexuales",
      "Solo el material de abuso sexual infantil producido digitalmente",
      "Los mensajes con contenido sexual entre personas mayores de edad"
    ],
    "answer": 1
  },
  {
    "id": "e40",
    "tema": "TEMA IV",
    "text": "La Ley 1636 en cuanto a corresponsabilidad involucra en la protección de menores a:",
    "opts": [
      "Únicamente al Estado y al Ministerio Público como entes persecutores",
      "Solo a las plataformas digitales y proveedores de internet",
      "Familias, instituciones educativas, empresas de comunicación y el Estado",
      "Exclusivamente a los padres y tutores legales de las víctimas"
    ],
    "answer": 2
  },
  {
    "id": "e41",
    "tema": "TEMA V",
    "text": "El Artículo 1 de la Constitución Política del Estado define a Bolivia como:",
    "opts": [
      "Un Estado Federal Social de Derecho Democrático y Republicano",
      "Un Estado Unitario Social de Derecho Plurinacional Comunitario, libre, independiente, soberano, democrático, intercultural, descentralizado y con autonomías",
      "Una República Unitaria, Social y Democrática de Derecho",
      "Un Estado Plurinacional Federal con autonomías regionales"
    ],
    "answer": 1
  },
  {
    "id": "e42",
    "tema": "TEMA V",
    "text": "Los derechos reconocidos por la Constitución, según su Artículo 13 I, son:",
    "opts": [
      "transferibles",
      "inviolables",
      "Universales",
      "de Cumplimiento obligatorio"
    ],
    "answer": 1
  },
  {
    "id": "e43",
    "tema": "TEMA V",
    "text": "El Artículo 13 num. IV de la CPE dispone que los tratados y convenios internacionales ratificados por la Asamblea Legislativa Plurinacional que reconocen derechos humanos:",
    "opts": [
      "Tienen rango inferior a la Constitución pero superior a las leyes ordinarias",
      "Prevalecen en el orden interno y prohíben su limitación en los Estados de Excepción",
      "Son de aplicación facultativa según criterio del Tribunal Constitucional",
      "Solo son aplicables cuando el derecho interno no regule la materia"
    ],
    "answer": 1
  },
  {
    "id": "e44",
    "tema": "TEMA V",
    "text": "La Acción de Protección de Privacidad (habeas data) NO procede para levantar:",
    "opts": [
      "El secreto bancario",
      "El secreto en materia de prensa",
      "El secreto en materia de seguridad nacional",
      "Toda clase de secreto profesional"
    ],
    "answer": 1
  },
  {
    "id": "e45",
    "tema": "TEMA V",
    "text": "El Art. 17 del Pacto Internacional de Derechos Civiles y Políticos establece que:",
    "opts": [
      "Nadie será objeto de maltratos arbitrarios en su trabajo privado ni de ataques a su honra",
      "Nadie será objeto de injerencias arbitrarias o ilegales en su vida privada, familia, domicilio o correspondencia, ni de ataques ilegales a su honra y reputación",
      "Nadie será objeto de injerencias en su familia, trabajo o domicilio sin orden judicial",
      "Nadie será objeto de injerencias en su honra y reputación en casos no legislados"
    ],
    "answer": 1
  },
  {
    "id": "e46",
    "tema": "TEMA V",
    "text": "Los derechos digitales son conocidos también como:",
    "opts": [
      "Derechos privados digitales",
      "Derechos personales informáticos",
      "Derechos digitales de las personas",
      "Derechos informáticos de los ciudadanos"
    ],
    "answer": 2
  },
  {
    "id": "e47",
    "tema": "TEMA V",
    "text": "La Conferencia de Estocolmo de 1967 determinó aspectos prácticos de la privacidad que protegen a los individuos de:",
    "opts": [
      "Ataques a su identidad y trabajo",
      "Ataques a su familia y persona",
      "Ataques en su honra o reputación",
      "Ataques a su patrimonio económico"
    ],
    "answer": 2
  },
  {
    "id": "e48",
    "tema": "TEMA V",
    "text": "Los datos públicos, a diferencia de los datos sensibles, son:",
    "opts": [
      "Estado de salud y costumbres sexuales",
      "Opiniones políticas y afiliación sindical",
      "Nombre y domicilio de fácil obtención y a disposición de todos",
      "Datos biométricos y registros genéticos"
    ],
    "answer": 2
  },
  {
    "id": "e49",
    "tema": "TEMA V",
    "text": "El Artículo 8 de la CPE establece como principios ético-morales de la sociedad plural:",
    "opts": [
      "Ama qhilla, Ama llulla, Ama suwa (no seas flojo, no seas mentiroso ni seas ladrón)",
      "suma qamaña (vivir en paz), ñandereko (vida buena)",
      "Ama qhilla, Ama llulla, Ama suwa (no seas flojo, no seas envidioso ni seas ladrón)",
      "suma qamaña (vivir en armonía), ñandereko (vida noble)"
    ],
    "answer": 0
  },
  {
    "id": "e50",
    "tema": "TEMA V",
    "text": "Según Ossorio, el delito es definido como:",
    "opts": [
      "Una acción típica, jurídica realizada por un ser humano, culpable y sancionada por una pena",
      "Una omisión típica, antijurídica realizada por un ser humano, culpable y sancionada por una pena",
      "Una acción típica, antijurídica realizada por un ser humano, culpable y sancionada por una pena",
      "Una acción típica, antijurídica realizada por la sociedad y el ser humano, culpable y sancionada por una pena"
    ],
    "answer": 2
  }
];

// ── Metadatos de la materia (auto-registro idempotente) ──
// Meta integrado en este archivo: define la materia solo si aún no existe.
if (!SUBJECTS.legislacion) {
  SUBJECTS.legislacion = {
    "key": "legislacion",
    "icon": "⚖️",
    "label": "Legislación Informática",
    "badge": "ELT-001 · ELECTIVA I",
    "subtitle": "Examen Interactivo — Universidad / Derecho Digital Bolivia",
    "temas": [
      "TODOS",
      "TEMA I",
      "TEMA II",
      "TEMA III",
      "TEMA IV",
      "TEMA V"
    ],
    "temaLabels": {},
    "secciones": null,
    "exams": {}
  };
}

// ── Registro del examen en SUBJECTS (auto-registro) ──
SUBJECTS.legislacion.exams.general = {
  key: 'general',
  label: "General",
  questions: LEGISLACION_GENERAL_QUESTIONS,
};

// === materias/lenguaje/parcial1.js ===
// ── EXAMEN: Parcial 1 — Lenguajes de Programación ──
// Archivo AUTOCONTENIDO: está integrado el meta de la materia, por lo que este
// único .js define la materia (si no existía) y registra este examen en SUBJECTS.
// Basta cargar este archivo (después de data.js) y la materia queda disponible.
// Si la materia ya fue registrada por otro examen, el bloque del meta se omite
// (registro idempotente) y aquí solo se agrega este examen.

const LEN_PARCIAL1_QUESTIONS = [
  {
    "id": "len1",
    "tema": "TEMA I",
    "seccion": "¿Qué es un Lenguaje de Programación?",
    "text": "¿Cuál es la definición más precisa de un lenguaje de programación?",
    "opts": [
      "Un conjunto de apps que se instalan en la computadora",
      "Un conjunto de instrucciones y reglas para dar órdenes a una computadora y resolver un problema (ej: como escribir una receta paso a paso para que un robot cocine un plato específico)",
      "Un idioma natural como el español, pero escrito más rápido",
      "Un tipo de hardware especializado"
    ],
    "answer": 1
  },
  {
    "id": "len2",
    "tema": "TEMA I",
    "seccion": "¿Qué es un Lenguaje de Programación?",
    "text": "¿Cuál de los siguientes NO es un lenguaje de programación?",
    "opts": [
      "Python",
      "HTML",
      "Java",
      "C"
    ],
    "answer": 1
  },
  {
    "id": "len3",
    "tema": "TEMA I",
    "seccion": "¿Qué es un Lenguaje de Programación?",
    "text": "¿Cuál es el objetivo principal de un lenguaje de programación?",
    "opts": [
      "Ganar velocidad de internet",
      "Dar instrucciones precisas y sin ambigüedad que una computadora pueda ejecutar (ej: a diferencia del lenguaje natural donde 'abre la ventana' es vago, el código debe decir qué ventana, coordenadas y acción exacta)",
      "Reemplazar al teclado",
      "Bloquear virus automáticamente"
    ],
    "answer": 1
  },
  {
    "id": "len4",
    "tema": "TEMA I",
    "seccion": "Paradigmas de Programación",
    "text": "¿Qué paradigma de programación se basa en describir el problema mediante sentencias que cambian el estado del programa?",
    "opts": [
      "Funcional",
      "Lógico",
      "Imperativo: usa variables y bucles que modifican el estado paso a paso (ej: 'x=0; x=x+1; repetir hasta que x=10')",
      "Orientado a eventos"
    ],
    "answer": 2
  },
  {
    "id": "len5",
    "tema": "TEMA I",
    "seccion": "Paradigmas de Programación",
    "text": "¿Cuál paradigma evalúa expresiones matemáticas y evita el cambio de estado (efectos secundarios)?",
    "opts": [
      "Imperativo",
      "Funcional: basado en funciones matemáticas puras, sin modificar variables (ej: Haskell, Lisp; como una calculadora que nunca 'ensucia' su pantalla entre cuentas)",
      "Orientado a objetos",
      "Procedural"
    ],
    "answer": 1
  },
  {
    "id": "len6",
    "tema": "TEMA I",
    "seccion": "Paradigmas de Programación",
    "text": "En programación orientada a objetos, ¿qué concepto representa la capacidad de una clase para heredar atributos y métodos de otra clase?",
    "opts": [
      "Polimorfismo",
      "Abstracción",
      "Encapsulamiento",
      "Herencia: permite crear clases nuevas extendiendo el comportamiento de otras existentes (ej: 'Perro' hereda de 'Animal' y añade 'ladrar')"
    ],
    "answer": 3
  },
  {
    "id": "len7",
    "tema": "TEMA I",
    "seccion": "Paradigmas de Programación",
    "text": "¿Qué paradigma resuelve problemas declarando hechos y reglas lógicas, dejando que el motor de inferencia busque la solución?",
    "opts": [
      "Imperativo",
      "Funcional",
      "Lógico: defines relaciones y el sistema deduce respuestas (ej: Prolog responde '¿quién es padre de Ana?' a partir de hechos como 'padre(juan, ana)')",
      "Basado en componentes"
    ],
    "answer": 2
  },
  {
    "id": "len8",
    "tema": "TEMA I",
    "seccion": "Lenguajes Funcionales",
    "text": "¿Cuál de los siguientes lenguajes es funcional (o predominantemente funcional)?",
    "opts": [
      "C",
      "Java",
      "Haskell",
      "Python"
    ],
    "answer": 2
  },
  {
    "id": "len9",
    "tema": "TEMA I",
    "seccion": "Lenguajes Funcionales",
    "text": "En lenguajes funcionales, ¿qué significa que las funciones sean de \"primera clase\"?",
    "opts": [
      "Que las funciones sean más rápidas que las variables",
      "Que las funciones pueden pasarse como argumentos, devolverse como resultado y guardarse en variables (ej: 'ordenar(lista, funcionComparar)' donde funcionComparar es una función que recibes de parámetro)",
      "Que las funciones no devuelvan nada",
      "Que las funciones solo funcionan en el main"
    ],
    "answer": 1
  },
  {
    "id": "len10",
    "tema": "TEMA I",
    "seccion": "Lenguajes Funcionales",
    "text": "¿Qué concepto característico de los lenguajes funcionales implica que los datos no cambian después de crearse?",
    "opts": [
      "Recolección de basura",
      "Inmutabilidad: para modificar una lista creas una nueva en lugar de alterarla (ej: en lugar de cambiar el elemento 3 de una lista, construyes una nueva lista idéntica salvo ese elemento)",
      "Polimorfismo",
      "Herencia"
    ],
    "answer": 1
  },
  {
    "id": "len11",
    "tema": "TEMA I",
    "seccion": "Programación Orientada a Objetos",
    "text": "¿Qué principio de la POO oculta los detalles internos del objeto y solo expone lo necesario mediante una interfaz pública?",
    "opts": [
      "Herencia",
      "Polimorfismo",
      "Abstracción",
      "Encapsulamiento: el interior del objeto está protegido, como el motor de un auto que usas solo con volante y pedales (ej: un atributo 'saldo' privado solo se modifica con 'depositar()/retirar()')"
    ],
    "answer": 3
  },
  {
    "id": "len12",
    "tema": "TEMA I",
    "seccion": "Programación Orientada a Objetos",
    "text": "El principio de ocultación de información en POO se conoce comúnmente como...",
    "opts": [
      "Sobreescritura de métodos",
      "Polimorfismo",
      "Abstracción",
      "Encapsulamiento"
    ],
    "answer": 3
  },
  {
    "id": "len13",
    "tema": "TEMA I",
    "seccion": "Programación Orientada a Objetos",
    "text": "En POO, ¿qué permite que el mismo mensaje produzca comportamientos distintos según el objeto que lo reciba?",
    "opts": [
      "Herencia",
      "Abstracción",
      "Encapsulamiento",
      "Polimorfismo: 'hacerSonido()' en un Perro ladra y en un Gato maúlla, aunque todos sean 'Animales' (ej: un método 'dibujar()' dibuja un círculo si es Circulo y un cuadrado si es Cuadrado)"
    ],
    "answer": 3
  },
  {
    "id": "len14",
    "tema": "TEMA I",
    "seccion": "Programación Orientada a Objetos",
    "text": "¿Cuál de estos lenguajes NO es orientado a objetos ni multi-paradigma?",
    "opts": [
      "Java",
      "C++",
      "Python",
      "C (es imperativo/procedimental puro, no basa su diseño en objetos)"
    ],
    "answer": 3
  },
  {
    "id": "len15",
    "tema": "TEMA I",
    "seccion": "Programación Orientada a Objetos",
    "text": "En POO, ¿qué diferencia hay entre una clase y un objeto?",
    "opts": [
      "Son lo mismo, solo cambia el nombre",
      "La clase es el plano y el objeto es la instancia construida a partir del plano (ej: 'clase Auto' define qué es un auto; 'objeto miAuto' es el auto rojo de 4 puertas que realmente existe en memoria)",
      "La clase guarda datos y el objeto solo comportamientos",
      "El objeto crea clases"
    ],
    "answer": 1
  },
  {
    "id": "len16",
    "tema": "TEMA I",
    "seccion": "Lenguajes de Scripting",
    "text": "¿Cuál es la principal diferencia entre un lenguaje de scripting y uno de uso general/estricto?",
    "opts": [
      "El de scripting es más lento",
      "El de scripting se enfoca en automatizar tareas y tiene un ciclo de desarrollo rápido, con interpretación directa sobre un runtime (ej: Python/JS 'editas y ejecutas' sin paso intermedio de compilación)",
      "El de scripting no puede hacer cálculos matemáticos",
      "El de scripting pesa más en disco"
    ],
    "answer": 1
  },
  {
    "id": "len17",
    "tema": "TEMA I",
    "seccion": "Lenguajes de Scripting",
    "text": "¿Cuál de estos lenguajes se usa principalmente para programación web del lado del cliente (navegador)?",
    "opts": [
      "Python",
      "Ruby",
      "PHP",
      "JavaScript"
    ],
    "answer": 3
  },
  {
    "id": "len18",
    "tema": "TEMA I",
    "seccion": "Lenguajes de Scripting",
    "text": "¿Cuál de estos NO es típicamente un lenguaje de scripting?",
    "opts": [
      "JavaScript",
      "Python",
      "PHP",
      "C++ (es compilado a código máquina nativo, no se interpreta directamente sobre un runtime)"
    ],
    "answer": 3
  },
  {
    "id": "len19",
    "tema": "TEMA I",
    "seccion": "Compilación e Interpretación",
    "text": "¿Qué realiza un compilador al procesar el código fuente?",
    "opts": [
      "Ejecuta el código línea por línea",
      "Traducir todo el código fuente a código máquina o binario antes de poder ejecutarlo (ej: al compilar un programa en C obtienes un ejecutable .exe que ya no necesita el código fuente)",
      "Borra el código fuente",
      "Envía el código a internet"
    ],
    "answer": 1
  },
  {
    "id": "len20",
    "tema": "TEMA I",
    "seccion": "Compilación e Interpretación",
    "text": "¿Qué realiza un intérprete al procesar el código fuente?",
    "opts": [
      "Convierte todo a binario y luego lo ejecuta",
      "Lee y ejecuta el código directamente, normalmente línea por línea, sin generar un binario (ej: Python ejecuta al vuelo; si el programa falla en la mitad, la primera mitad ya se ejecutó)",
      "Borra las variables después de usarlas",
      "Comprime el archivo"
    ],
    "answer": 1
  },
  {
    "id": "len21",
    "tema": "TEMA I",
    "seccion": "Compilación e Interpretación",
    "text": "¿Cuál es la diferencia entre compilar en C y compilar en Java?",
    "opts": [
      "C ni Java no se compilan",
      "C se compila a código máquina nativo del SO directamente; Java se compila a bytecode que corre en la JVM (ej: C necesita recompilar por sistema operativo, Java usa 'escribe una vez, corre donde haya JVM')",
      "C es más lento que Java",
      "Java no se compila"
    ],
    "answer": 1
  },
  {
    "id": "len22",
    "tema": "TEMA I",
    "seccion": "Compilación e Interpretación",
    "text": "El bytecode es...",
    "opts": [
      "Código máquina directamente ejecutable por el CPU",
      "Un tipo de virus",
      "Código intermedio que una máquina virtual interpreta o compila justo a tiempo (JIT) (ej: el '.class' de Java o el '.pyc' de Python)",
      "Un formato de imagen"
    ],
    "answer": 2
  }
];

// ── Metadatos de la materia (auto-registro idempotente) ──
// Meta integrado en este archivo: define la materia solo si aún no existe.
if (!SUBJECTS.lenguaje) {
  SUBJECTS.lenguaje = {
    "key": "lenguaje",
    "icon": "💻",
    "label": "Lenguajes de Programación",
    "badge": "LENG · INFORMÁTICA",
    "subtitle": "Examen Interactivo — Lenguajes de Programación: Conceptos y Paradigmas",
    "temas": [
      "TODOS",
      "TEMA I"
    ],
    "temaLabels": {
      "TEMA I": "TEMA I: Lenguajes de Programación"
    },
    "secciones": [
      "TODAS",
      "¿Qué es un Lenguaje de Programación?",
      "Paradigmas de Programación",
      "Lenguajes Funcionales",
      "Programación Orientada a Objetos",
      "Lenguajes de Scripting",
      "Compilación e Interpretación"
    ],
    "exams": {}
  };
}

// ── Registro del examen en SUBJECTS (auto-registro) ──
SUBJECTS.lenguaje.exams.parcial1 = {
  key: 'parcial1',
  label: "Parcial 1",
  questions: LEN_PARCIAL1_QUESTIONS,
};

// === materias/mate/general.js ===
// ── EXAMEN: General — Matemáticas I ──
// Archivo AUTOCONTENIDO: está integrado el meta de la materia, por lo que este
// único .js define la materia (si no existía) y registra este examen en SUBJECTS.
// Basta cargar este archivo (después de data.js) y la materia queda disponible.
// Si la materia ya fue registrada por otro examen, el bloque del meta se omite
// (registro idempotente) y aquí solo se agrega este examen.

const MATE_GENERAL_QUESTIONS = [
  {
    "id": "mate1",
    "tema": "TEMA I",
    "seccion": "Álgebra",
    "text": "¿Cuál es el valor de x en 2x + 3 = 7?",
    "opts": [
      "x = 1",
      "x = 2",
      "x = 3",
      "x = 4"
    ],
    "answer": 1
  },
  {
    "id": "mate2",
    "tema": "TEMA I",
    "seccion": "Álgebra",
    "text": "¿Cuál es la factorización de x² - 5x + 6?",
    "opts": [
      "(x - 2)(x - 3)",
      "(x + 2)(x + 3)",
      "(x - 1)(x - 6)",
      "(x - 2)(x + 3)"
    ],
    "answer": 0
  },
  {
    "id": "mate3",
    "tema": "TEMA I",
    "seccion": "Cálculo",
    "text": "¿Cuál es la derivada de x² + 3x respecto a x?",
    "opts": [
      "2x + 3",
      "x² + 3",
      "2x",
      "3"
    ],
    "answer": 0
  },
  {
    "id": "mate4",
    "tema": "TEMA I",
    "seccion": "Cálculo",
    "text": "¿Qué representa la integral definida de f(x) en [a, b]?",
    "opts": [
      "La pendiente de la recta tangente",
      "El área bajo la curva de f(x) entre a y b",
      "El valor máximo de f(x)",
      "La derivada de f(x)"
    ],
    "answer": 1
  },
  {
    "id": "mate5",
    "tema": "TEMA I",
    "seccion": "Trigonometría",
    "text": "¿Cuál es el valor de sen²(x) + cos²(x)?",
    "opts": [
      "0",
      "1",
      "2",
      "Depende de x"
    ],
    "answer": 1
  },
  {
    "id": "mate6",
    "tema": "TEMA I",
    "seccion": "Trigonometría",
    "text": "¿Qué función relaciona el lado opuesto con la hipotenusa en un triángulo rectángulo?",
    "opts": [
      "Coseno",
      "Tangente",
      "Seno",
      "Secante"
    ],
    "answer": 2
  }
];

// ── Metadatos de la materia (auto-registro idempotente) ──
// Meta integrado en este archivo: define la materia solo si aún no existe.
if (!SUBJECTS.mate) {
  SUBJECTS.mate = {
    "key": "mate",
    "icon": "📐",
    "label": "Matemáticas I",
    "badge": "MATE · CIENCIAS",
    "subtitle": "Examen Interactivo — Álgebra, Cálculo y Trigonometría I (UNIOR)",
    "temas": [
      "TODOS",
      "TEMA I"
    ],
    "temaLabels": {
      "TEMA I": "TEMA I: Álgebra y Cálculo"
    },
    "secciones": [
      "TODAS",
      "Álgebra",
      "Cálculo",
      "Trigonometría"
    ],
    "exams": {}
  };
}

// ── Registro del examen en SUBJECTS (auto-registro) ──
SUBJECTS.mate.exams.general = {
  key: 'general',
  label: "General",
  questions: MATE_GENERAL_QUESTIONS,
};

// === materias/redes/general.js ===
// ── EXAMEN: General — Redes de Computadoras II ──
// Archivo AUTOCONTENIDO: está integrado el meta de la materia, por lo que este
// único .js define la materia (si no existía) y registra este examen en SUBJECTS.
// Basta cargar este archivo (después de data.js) y la materia queda disponible.
// Si la materia ya fue registrada por otro examen, el bloque del meta se omite
// (registro idempotente) y aquí solo se agrega este examen.

const REDES_GENERAL_QUESTIONS = [
  {
    "id": "redes1",
    "tema": "TEMA I",
    "seccion": "Modelo OSI",
    "text": "¿Cuál es el propósito principal del Modelo OSI?",
    "opts": [
      "Hacer Internet más rápido",
      "Organizar la comunicación en 7 capas para que diferentes tecnologías hablen el mismo idioma (ej: Ethernet y WiFi funcionen juntas)",
      "Reemplazar protocolos antiguos",
      "Proteger contra hackers"
    ],
    "answer": 1
  },
  {
    "id": "redes2",
    "tema": "TEMA I",
    "seccion": "Modelo OSI",
    "text": "¿Qué capa del Modelo OSI maneja la transmisión física de bits?",
    "opts": [
      "Capa 2 (Enlace de Datos)",
      "Capa 1 (Física): transmisión de bits, señales, cables, conectores (ej: tu cable Ethernet)",
      "Capa 3 (Red)",
      "Capa 4 (Transporte)"
    ],
    "answer": 1
  },
  {
    "id": "redes3",
    "tema": "TEMA I",
    "seccion": "Modelo OSI",
    "text": "¿Cuál es la función de la Capa 4 (Transporte)?",
    "opts": [
      "Transmitir bits por cables",
      "Determinar rutas entre redes",
      "Garantizar entrega ordenada y completa usando TCP/UDP (ej: TCP para descargas, UDP para videojuegos en tiempo real)",
      "Detectar colisiones en red"
    ],
    "answer": 2
  },
  {
    "id": "redes4",
    "tema": "TEMA I",
    "seccion": "Modelo OSI",
    "text": "¿Qué capa del OSI define cómo se ven los datos en la pantalla?",
    "opts": [
      "Capa 3 (Red)",
      "Capa 4 (Transporte)",
      "Capa 6 (Presentación): formato y cifrado de datos (ej: cómo se ve un PDF en tu navegador)",
      "Capa 7 (Aplicación)"
    ],
    "answer": 2
  },
  {
    "id": "redes5",
    "tema": "TEMA I",
    "seccion": "Capas 2 y 3",
    "text": "¿Cuál es la función principal de un Switch?",
    "opts": [
      "Conectar redes diferentes a Internet",
      "Aprender direcciones MAC y conmutar tramas dentro de una LAN local (ej: conectar tu PC con la impresora de oficina)",
      "Traducir IPs a direcciones MAC",
      "Encriptar datos entre edificios"
    ],
    "answer": 1
  },
  {
    "id": "redes6",
    "tema": "TEMA I",
    "seccion": "Capas 2 y 3",
    "text": "¿Cuál es la función principal de un Router?",
    "opts": [
      "Conectar dispositivos en la misma red",
      "Seleccionar rutas óptimas usando direcciones IP para conectar redes diferentes (ej: tu oficina con otra ciudad)",
      "Amplificar señales WiFi",
      "Almacenar direcciones MAC"
    ],
    "answer": 1
  },
  {
    "id": "redes7",
    "tema": "TEMA I",
    "seccion": "Capas 2 y 3",
    "text": "¿Qué identifica un dispositivo en la Capa 2?",
    "opts": [
      "La dirección IP del dispositivo",
      "La dirección MAC del dispositivo: formato físico de la tarjeta de red (ej: 00:1A:2B:3C:4D:5E)",
      "El número de puerto del dispositivo",
      "El nombre de host del dispositivo"
    ],
    "answer": 1
  },
  {
    "id": "redes8",
    "tema": "TEMA I",
    "seccion": "Capas 2 y 3",
    "text": "¿Qué identifica un dispositivo en la Capa 3?",
    "opts": [
      "La dirección MAC física",
      "La dirección IP lógica: identifica ubicación en la red (ej: 192.168.1.25)",
      "El puerto del Switch",
      "El nombre de la computadora"
    ],
    "answer": 1
  },
  {
    "id": "redes9",
    "tema": "TEMA I",
    "seccion": "Protocolos de Transporte",
    "text": "¿Cuál es la característica principal de TCP?",
    "opts": [
      "Es muy rápido pero no garantiza entrega",
      "Orientado a conexión, confiable, garantiza orden de entrega (ej: cuando descargas un archivo, cada bit debe llegar correcto)",
      "No necesita establecer conexión previa",
      "Se usa solo para juegos en línea"
    ],
    "answer": 1
  },
  {
    "id": "redes10",
    "tema": "TEMA I",
    "seccion": "Protocolos de Transporte",
    "text": "¿Cuál es la característica principal de UDP?",
    "opts": [
      "Garantiza entrega de todos los paquetes",
      "Sin conexión, no confiable, rápido (ej: videojuegos, videollamadas donde un paquete perdido no arruina todo)",
      "Más seguro que TCP",
      "Se usa solo para email"
    ],
    "answer": 1
  },
  {
    "id": "redes11",
    "tema": "TEMA I",
    "seccion": "Protocolos de Transporte",
    "text": "¿Cuándo usarías TCP?",
    "opts": [
      "Para transmitir video en vivo",
      "Para un videojuego competitivo",
      "Para transferencia de archivos bancarios donde cada dato debe llegar perfecto (ej: descargar dinero de tu cuenta)",
      "Para streaming de música"
    ],
    "answer": 2
  },
  {
    "id": "redes12",
    "tema": "TEMA I",
    "seccion": "Protocolos de Transporte",
    "text": "¿Cuándo usarías UDP?",
    "opts": [
      "Para transferir archivos críticos",
      "Para videollamada en WhatsApp donde algunos frames perdidos no arruinan la comunicación (velocidad importa más que perfección)",
      "Para transacciones de banco",
      "Para email"
    ],
    "answer": 1
  },
  {
    "id": "redes13",
    "tema": "TEMA I",
    "seccion": "Direccionamiento IPv4",
    "text": "¿Cuál es la estructura de una dirección IPv4?",
    "opts": [
      "Es un código hexadecimal de 48 bits",
      "32 bits divididos en 4 octetos (ej: 192.168.1.25 donde cada número va de 0-255)",
      "64 bits divididos en 8 secciones",
      "Un código alfabético variable"
    ],
    "answer": 1
  },
  {
    "id": "redes14",
    "tema": "TEMA I",
    "seccion": "Direccionamiento IPv4",
    "text": "¿Qué es la máscara de subred /24?",
    "opts": [
      "Un número aleatorio de seguridad",
      "Define cuáles bits son RED (24 bits) y cuáles son HOST (8 bits), ej: 192.168.1.0/24 permite 254 dispositivos (de .1 a .254)",
      "Un protocolo de encriptación",
      "Una regla de firewall"
    ],
    "answer": 1
  },
  {
    "id": "redes15",
    "tema": "TEMA I",
    "seccion": "Direccionamiento IPv4",
    "text": "¿Cuál es la dirección de RED en 192.168.1.25/24?",
    "opts": [
      "192.168.1.25",
      "192.168.1.0 (todos los bits de host a 0)",
      "192.168.1.254",
      "192.168.0.0"
    ],
    "answer": 1
  },
  {
    "id": "redes16",
    "tema": "TEMA I",
    "seccion": "Direccionamiento IPv4",
    "text": "¿Cuál es la dirección de BROADCAST en 192.168.1.0/24?",
    "opts": [
      "192.168.1.1",
      "192.168.1.0",
      "192.168.1.255 (todos los bits de host a 1, usada para hablar con TODOS simultáneamente)",
      "192.168.2.0"
    ],
    "answer": 2
  },
  {
    "id": "redes17",
    "tema": "TEMA I",
    "seccion": "Infraestructura",
    "text": "¿En qué se diferencia conmutación local de enrutamiento global?",
    "opts": [
      "Son exactamente lo mismo",
      "Conmutación local: tráfico dentro de la misma LAN usando direcciones físicas (MAC); Enrutamiento global: tráfico entre redes diferentes usando direcciones lógicas (IP)",
      "El enrutamiento es más lento",
      "La conmutación solo funciona en WiFi"
    ],
    "answer": 1
  },
  {
    "id": "redes18",
    "tema": "TEMA I",
    "seccion": "Infraestructura",
    "text": "¿Qué es MPLS?",
    "opts": [
      "Un tipo de cable de red",
      "Un protocolo que añade etiquetas a paquetes para enrutamiento ultra-rápido y garantizado en redes de operadores (ej: llamadas de video entre ciudades sin perder calidad)",
      "Un estándar de WiFi",
      "Un firewall de seguridad"
    ],
    "answer": 1
  },
  {
    "id": "redes19",
    "tema": "TEMA I",
    "seccion": "Arquitectura Moderna",
    "text": "¿Qué diferencia hay entre MPLS y SD-WAN?",
    "opts": [
      "Son lo mismo",
      "MPLS es hardware rígido y costoso; SD-WAN separa el \"cerebro\" (software) del \"músculo\" (infraestructura física), permitiendo controlar redes desde software de forma ágil y económica",
      "SD-WAN es más lento",
      "MPLS solo funciona en la nube"
    ],
    "answer": 1
  },
  {
    "id": "redes20",
    "tema": "TEMA I",
    "seccion": "Arquitectura Moderna",
    "text": "¿Cuál es el concepto clave de SD-WAN?",
    "opts": [
      "Usar solo conexiones de cable",
      "Separar el control (cerebro: decisiones de software) del plano de datos (músculo: donde viajan los datos), haciendo la red programable y centralizada",
      "Eliminar completamente los routers",
      "Reemplazar Internet con MPLS"
    ],
    "answer": 1
  },
  {
    "id": "redes21",
    "tema": "TEMA I",
    "seccion": "Arquitectura Moderna",
    "text": "¿Cuál es una ventaja del enfoque SD-WAN?",
    "opts": [
      "Requiere más personal técnico",
      "Conectar sucursales a la nube directamente sin pasar por el datacenter central, economizando costos y mejorando velocidad (ej: tu oficina en Quito accede a YouTube directo, no va a Madrid primero)",
      "Aumenta el número de paquetes perdidos",
      "Reduce la seguridad de los datos"
    ],
    "answer": 1
  },
  {
    "id": "redes22",
    "tema": "TEMA I",
    "seccion": "Arquitectura Moderna",
    "text": "¿Cuál es la diferencia entre Cisco Viptela y Fortinet FortiGate?",
    "texto_2": "¿Qué es Fortinet FortiGate?",
    "opts": [
      "Cisco enfatiza conectividad escalable; Fortinet enfatiza seguridad unificada en el borde (ej: Cisco es mejor para multinacionales con muchas oficinas, Fortinet para quien quiere seguridad integrada en el firewall)",
      "Son exactamente iguales",
      "Fortinet solo funciona en la nube",
      "Cisco solo para pequeñas empresas"
    ],
    "answer": 0
  }
];

// ── Metadatos de la materia (auto-registro idempotente) ──
// Meta integrado en este archivo: define la materia solo si aún no existe.
if (!SUBJECTS.redes) {
  SUBJECTS.redes = {
    "key": "redes",
    "icon": "🌐",
    "label": "Redes de Computadoras II",
    "badge": "REDES · INFORMÁTICA",
    "subtitle": "Examen Interactivo — Redes de Computadoras II: Conceptos Fundamentales",
    "temas": [
      "TODOS",
      "TEMA I"
    ],
    "temaLabels": {
      "TEMA I": "TEMA I: Redes de Computadoras II"
    },
    "secciones": [
      "TODAS",
      "Modelo OSI",
      "Capas 2 y 3",
      "Protocolos de Transporte",
      "Direccionamiento IPv4",
      "Infraestructura",
      "MPLS y SD-WAN",
      "Arquitectura Moderna"
    ],
    "exams": {}
  };
}

// ── Registro del examen en SUBJECTS (auto-registro) ──
SUBJECTS.redes.exams.general = {
  key: 'general',
  label: "General",
  questions: REDES_GENERAL_QUESTIONS,
};

// === materias/redes/parcial3.js ===
// ── EXAMEN: Parcial 3 — Redes de Computadoras II ──
// Archivo AUTOCONTENIDO: está integrado el meta de la materia, por lo que este
// único .js define la materia (si no existía) y registra este examen en SUBJECTS.
// Basta cargar este archivo (después de data.js) y la materia queda disponible.
// Si la materia ya fue registrada por otro examen, el bloque del meta se omite
// (registro idempotente) y aquí solo se agrega este examen.

const REDES_PARCIAL3_QUESTIONS = [
  {
    "id": "rp3-1",
    "tema": "TEMA I",
    "seccion": "Modelo OSI",
    "text": "Si un mensaje HTTP viaja de tu navegador a un servidor web, ¿en qué capas del OSI se encapsulan capas de datos distintas (desde la aplicación hasta la física)?",
    "opts": [
      "Solo en la Capa 7 (Aplicación), porque HTTP ya es suficiente",
      "En las capas 5, 6 y 7, que son las que manejan el software",
      "En todas las capas: la capa 7 agrega cabecera HTTP, la 4 agrega TCP/UDP, la 3 agrega IP, la 2 agrega trama Ethernet y la 1 convierte todo en bits por el cable (ej: cada capa \"mete\" su propia etiqueta como una cebolla)",
      "Solo en la Capa 1, que es donde realmente viajan los bits"
    ],
    "answer": 2
  },
  {
    "id": "rp3-2",
    "tema": "TEMA I",
    "seccion": "Modelo OSI",
    "text": "¿Qué capa del OSI es responsable de la traducción de datos entre dos sistemas con codificaciones diferentes (por ejemplo, convertir minúsculas a mayúsculas)?",
    "opts": [
      "Capa 4 (Transporte)",
      "Capa 5 (Sesión)",
      "Capa 6 (Presentación): se encarga del formato, compresión y cifrado de los datos entre el origen y el destino (ej: que un PDF se vea igual en Windows y Mac)",
      "Capa 7 (Aplicación)"
    ],
    "answer": 2
  },
  {
    "id": "rp3-3",
    "tema": "TEMA I",
    "seccion": "Modelo OSI",
    "text": "¿Cuál es la principal diferencia entre el modelo OSI y el modelo TCP/IP?",
    "opts": [
      "OSI es más rápido que TCP/IP",
      "OSI es un modelo teórico de 7 capas; TCP/IP es el modelo práctico de 4 capas que realmente usa Internet (ej: OSI es el \"libro de texto\", TCP/IP es el coche que realmente conduce)",
      "TCP/IP no admite capas",
      "OSI solo funciona en redes inalámbricas"
    ],
    "answer": 1
  },
  {
    "id": "rp3-4",
    "tema": "TEMA I",
    "seccion": "Modelo OSI",
    "text": "¿Qué protocolo pertenece a la Capa 5 (Sesión) del modelo OSI?",
    "opts": [
      "HTTP",
      "FTP",
      "NetBIOS: gestiona cuándo y cómo se abre y cierra una sesión entre dos aplicaciones (ej: mantener viva tu sesión en Zoom mientras hablas)",
      "TCP"
    ],
    "answer": 2
  },
  {
    "id": "rp3-5",
    "tema": "TEMA I",
    "seccion": "Capas 2 y 3",
    "text": "¿Qué dirección se usa para entregar un paquete solo a un dispositivo específico dentro de tu red local, y cuál para entregarlo a todos a la vez?",
    "opts": [
      "MAC para un dispositivo; IP para todos los dispositivos",
      "IP unicast para un dispositivo; MAC broadcast para todos (ej: mandar un email a Ana es unicast; anunciar \"¡actualiza mi IP!\" a toda la oficina es broadcast)",
      "TCP para un dispositivo; UDP para todos",
      "DHCP para un dispositivo; DNS para todos"
    ],
    "answer": 1
  },
  {
    "id": "rp3-6",
    "tema": "TEMA I",
    "seccion": "Capas 2 y 3",
    "text": "Un Switch recibe una trama cuya dirección MAC de destino no está en su tabla CAM. ¿Qué hace?",
    "opts": [
      "La descarta inmediatamente",
      "La reenvía a todos los puertos excepto al que la recibió (ej: como si gritaras en una sala y todos excepto tú escuchan; el destino correcto la recibe y lo demás la ignora)",
      "La envía al router",
      "La modifica para cambiar la MAC de destino"
    ],
    "answer": 1
  },
  {
    "id": "rp3-7",
    "tema": "TEMA I",
    "seccion": "Capas 2 y 3",
    "text": "¿Qué campo de la cabecera IP indica cuántos saltos (routers) puede dar un paquete antes de ser descartado?",
    "opts": [
      "TTL (Time To Live): cada router le resta 1; si llega a 0, descarta el paquete y avisa (ej: evita que un paquete dado vuelva en círculo para siempre)",
      "Protocol",
      "Checksum",
      "ToS (Type of Service)"
    ],
    "answer": 0
  },
  {
    "id": "rp3-8",
    "tema": "TEMA I",
    "seccion": "Capas 2 y 3",
    "text": "En enrutamiento, ¿qué diferencia hay entre un camino estático y uno dinámico?",
    "opts": [
      "El estático es más rápido por hardware; el dinámico es más lento por software",
      "El estático se configura a mano una vez; el dinámico se aprende automáticamente compartiendo información con otros routers (ej: estático es como una ruta fija en Google Maps; dinámico es como que todos los drivers compartan quécese atascos en tiempo real)",
      "El estático no funciona con IPv4",
      "El dinámico siempre es más seguro"
    ],
    "answer": 1
  },
  {
    "id": "rp3-9",
    "tema": "TEMA I",
    "seccion": "Protocolos de Transporte",
    "text": "En la Capa de Transporte, ¿qué proporciona UDP pero no TCP?",
    "opts": [
      "Reenvío con acknowledgements",
      "Número de secuencia para ordenar paquetes",
      "Reducción de cabecera (8 bytes) y sin establecimiento de conexión previo (ej: vocecito rápido por walkie-talkie sin confirmar si escuchaste)",
      "Control de congestión"
    ],
    "answer": 2
  },
  {
    "id": "rp3-10",
    "tema": "TEMA I",
    "seccion": "Protocolos de Transporte",
    "text": "Durante el handshake de TCP, ¿qué paquetes se intercambian para iniciar una conexión?",
    "opts": [
      "UNO, DOS, TRES: SYN, SYN-ACK, ACK (ej: \"¿Puedo entrar?\" → \"¡Sí, puedes!\" → \"¡Gracias, entré!\")",
      "UNO, DOS, TRES: SYN, ACK, FIN",
      "UNO, DOS: SYN, SYN-ACK",
      "UNO, DOS: ACK, FIN"
    ],
    "answer": 0
  },
  {
    "id": "rp3-11",
    "tema": "TEMA I",
    "seccion": "Protocolos de Transporte",
    "text": "¿Cuál es la ventaja principal del control de congestión en TCP?",
    "opts": [
      "Hace que TCP sea más rápido que UDP siempre",
      "Evita que un remitente abrumpe a la red con demasiados datos de golpe, reduciendo pérdidas y retransmisiones (ej: como un conductor que frena si ve que la autopista se llena, en vez de seguir a toda velocidad y causar un choque)",
      "Permite usar UDP cuando la red está lenta",
      "Encripta los datos del paquete"
    ],
    "answer": 1
  },
  {
    "id": "rp3-12",
    "tema": "TEMA I",
    "seccion": "Protocolos de Transporte",
    "text": "¿Qué protocolo usarías para una aplicación que necesita orden garantizado, recuperación de errores y flujo de control, como una descarga de archivo importante?",
    "opts": [
      "UDP, porque es más rápido",
      "TCP, porque es orientado a conexión y confiable (ej: para una descarga de 2 GB cada byte debe llegar correcto, en orden, y si falta se reenvía)",
      "ICMP, porque reporta errores",
      "HTTP, porque sirve para descargar"
    ],
    "answer": 1
  },
  {
    "id": "rp3-13",
    "tema": "TEMA I",
    "seccion": "Direccionamiento IPv4",
    "text": "¿Cuántos hosts utilizables hay en una red 172.16.0.0/16?",
    "opts": [
      "254 hosts (172.16.0.1 a 172.16.0.254)",
      "65534 hosts (172.16.0.1 a 172.16.255.254, restando red y broadcast) (ej: con /16 tienes 2^16 direcciones, menos 2)",
      "65536 hosts (todos los 2^16, incluido red y broadcast)",
      "128 hosts (172.16.0.0 a 172.16.0.127)"
    ],
    "answer": 1
  },
  {
    "id": "rp3-14",
    "tema": "TEMA I",
    "seccion": "Direccionamiento IPv4",
    "text": "¿Qué clase de dirección es 10.0.0.1 según el esquema de clases original de IPv4?",
    "opts": [
      "Clase B (172.16.0.0 - 172.31.255.255) (ej: redes corporativas medianas)",
      "Clase C (192.168.0.0 - 255.255.255) (ej: redes domésticas)",
      "Clase A (10.0.0.0 - 10.255.255.255) (ej: redes muy grandes, como la de una multinacional)",
      "Clase D (224.0.0.0 - 239.255.255.255) (ej: multicast)"
    ],
    "answer": 2
  },
  {
    "id": "rp3-15",
    "tema": "TEMA I",
    "seccion": "Direccionamiento IPv4",
    "text": "¿Qué es NAT y cuál es su principal beneficio?",
    "opts": [
      "Un protocolo de encriptación; su beneficio es la seguridad",
      "Traducir puertos a direcciones MAC; beneficio: evitar colisiones de nombre",
      "Traducciones de direcciones IP privadas a públicas (ej: mil dispositivos usan 192.168.1.x detrás de un router, pero Internet solo ve una IP pública), beneficio: ahorrar IPs públicas",
      "Un método para acelerar el DHCP"
    ],
    "answer": 2
  },
  {
    "id": "rp3-16",
    "tema": "TEMA I",
    "seccion": "Direccionamiento IPv4",
    "text": "¿Qué protocolo asigna dinámicamente direcciones IP, máscaras, puerta de enlace y DNS a los dispositivos de una red?",
    "opts": [
      "DNS",
      "DHCP: cuando enciendes tu laptop en una cafetería, el router te da una IP automáticamente (ej: el camarero te da una mesa asignada sin que preguntes)",
      "ARP",
      "ICMP"
    ],
    "answer": 1
  },
  {
    "id": "rp3-17",
    "tema": "TEMA I",
    "seccion": "Infraestructura",
    "text": "¿En qué consiste el puente de capa (layer) en el contexto de redes modernas?",
    "opts": [
      "Un puente físico entre dos edificios",
      "El proceso de conectar la red local (layer 2) con redes externas (layer 3) dentro del mismo dispositivo (ej: un switch multicapa que aprende MACs y también hace routing entre VLANs)",
      "El nombre que se da al cable de fibra óptica",
      "Un tipo de antenna WiFi"
    ],
    "answer": 1
  },
  {
    "id": "rp3-18",
    "tema": "TEMA I",
    "seccion": "Infraestructura",
    "text": "¿Qué resuelve una VLAN y cómo se diferencia de una red física plana?",
    "opts": [
      "Resuelve el ancho de banda; diferencia: las VLANs son más rápidas",
      "Resuelve segmentación lógica; diferencia: en una red plana todos hablan broadcast entre sí, en VLANs se divide en dominios de broadcast independientes (ej: en una oficina, finanzas y marketing no se escuchan mutuamente sin pasar por un router)",
      "Resuelve el WiFi; diferencia: las VLANs son solo inalámbricas",
      "No resuelve nada; las VLANs son solo un nombre bonito"
    ],
    "answer": 1
  },
  {
    "id": "rp3-19",
    "tema": "TEMA I",
    "seccion": "MPLS y SD-WAN",
    "text": "En una red con etiquetas MPLS, ¿por qué el reenvío es tan rápido comparado con el enrutamiento tradicional basado en busca de tabla IP larga?",
    "opts": [
      "Porque usa fibra óptica dedicada",
      "Porque el router solo compara una etiqueta corta (label) en lugar de buscar la IP completa, y puede usar hardware especializado (ej: como si en vez de leer toda la placa de una casa buscaras el número de casa, solo lees el código postal pegado en la puerta)",
      "Porque elimina la capa IP por completo",
      "Porque usa conexiones punto a punto permanentes"
    ],
    "answer": 1
  },
  {
    "id": "rp3-20",
    "tema": "TEMA I",
    "seccion": "MPLS y SD-WAN",
    "text": "¿Cuál es el orden típico de colores (clases) en la tabla de etiquetas de un proveedor MPLS?",
    "opts": [
      "Local, Spokane, Provider Edge",
      "Customer Edge, Provider, Provider Edge: el proveedor asigna etiquetas internas y el cliente mantiene la suya",
      "Provider Edge (PE), Provider (P), Customer Edge (CE): el cliente etiqueta su tráfico, el PE lo recibe y lo introduce en la red con su propia etiqueta, los routers internos (P) reenvían solo por etiqueta (ej: como un sobre con \"cliente\" que entra al correo y se le pega un sello interno)",
      "No hay colores; MPLS no usa etiquetas"
    ],
    "answer": 2
  },
  {
    "id": "rp3-21",
    "tema": "TEMA I",
    "seccion": "MPLS y SD-WAN",
    "text": "En SD-WAN, ¿qué componente decide por qué enlace (MPLS, Internet, LTE) sale cada flujo de datos?",
    "opts": [
      "El switch de capa 2, que lee la MAC",
      "El router físico, que sortea paquetes al azar",
      "El plano de control centralizado (el \"cerebro\"): aplica políticas de seguridad, costo y calidad para elegir el mejor enlace por flujo (ej: Zoom por MPLS por calidad, descargas por Internet por bajo costo)",
      "El DNS, que resuelve el nombre del destino"
    ],
    "answer": 2
  },
  {
    "id": "rp3-22",
    "tema": "TEMA I",
    "seccion": "MPLS y SD-WAN",
    "text": "Una empresa quiere reducir costos de conectividad entre sucursales reemplazando parte de su enlace MPLS por Internet. ¿por qué SD-WAN ayuda a hacer esto de forma segura?",
    "opts": [
      "SD-WAN comprime el tráfico MPLS hasta desaparecer",
      "SD-WAN cifra los flujos críticos sobre Internet (IPsec) y reserva MPLS solo para tráfico sensible, manteniendo calidad y seguridad (ej: emails por Internet cifrada, voz por MPLS)",
      "SD-WAN elimina necesidad de Internet y usa solo LTE",
      "SD-WAN duplica el ancho de banda de MPLS"
    ],
    "answer": 1
  },
  {
    "id": "rp3-23",
    "tema": "TEMA I",
    "seccion": "Arquitectura Moderna",
    "text": "En la nube y centros de datos, ¿qué patrón de diseño separa el plano de control (decisiones) del plano de datos (tráfico)?",
    "opts": [
      "NAT",
      "DHCP",
      "Arquitectura de separación controlo-datos (ej: en Software Defined Networking, un controlador central (OpenFlow) programa switches que solo reenvían paquetes, como un cerebro que dice a las manos qué mover)",
      "ARP"
    ],
    "answer": 2
  },
  {
    "id": "rp3-24",
    "tema": "TEMA I",
    "seccion": "Arquitectura Moderna",
    "text": "¿Qué problema de la topología en estrella con hubs compartidos resuelve un switch gestionado con enlaces troncales (trunk) y VLANs?",
    "opts": [
      "Resuelve el ancho de banda limitado del hub al permitir múltiples enlaces dedicados y trunking para transportar varias VLANs (etiquetadas con 802.1Q) sobre un solo cable (ej: un switch gestionado puede enviar tráfico de finanzas y marketing por el mismo cable pero separados)",
      "Resuelve el problema del WiFi sin antena",
      "Resuelve el DNS distribuido",
      "No resuelve nada; los hubs son suficientes"
    ],
    "answer": 0
  },
  {
    "id": "rp3-25",
    "tema": "TEMA I",
    "seccion": "Arquitectura Moderna",
    "text": "¿Cuál es la ventaja clave de usar un controlador inalámbrico (WLAN controller) en una red WiFi empresarial?",
    "opts": [
      "Hace que las antennas sean innecesarias",
      "Centraliza la gestión de APs: roameo sin interrupciones, políticas de seguridad uniformes y optimización de canales (ej: al caminar por la oficina tu laptop pasa de un AP a otro sin caer la llamada WiFi)",
      "Reduce el número de dispositivos a la mitad",
      "Convierte todo el WiFi en red privada sin encriptación"
    ],
    "answer": 1
  }
];

// ── Metadatos de la materia (auto-registro idempotente) ──
// Meta integrado en este archivo: define la materia solo si aún no existe.
if (!SUBJECTS.redes) {
  SUBJECTS.redes = {
    "key": "redes",
    "icon": "🌐",
    "label": "Redes de Computadoras II",
    "badge": "REDES · INFORMÁTICA",
    "subtitle": "Examen Interactivo — Redes de Computadoras II: Conceptos Fundamentales",
    "temas": [
      "TODOS",
      "TEMA I"
    ],
    "temaLabels": {
      "TEMA I": "TEMA I: Redes de Computadoras II"
    },
    "secciones": [
      "TODAS",
      "Modelo OSI",
      "Capas 2 y 3",
      "Protocolos de Transporte",
      "Direccionamiento IPv4",
      "Infraestructura",
      "MPLS y SD-WAN",
      "Arquitectura Moderna"
    ],
    "exams": {}
  };
}

// ── Registro del examen en SUBJECTS (auto-registro) ──
SUBJECTS.redes.exams.parcial3 = {
  key: 'parcial3',
  label: "Parcial 3",
  questions: REDES_PARCIAL3_QUESTIONS,
};

// === materias/trigonometria/examenfinal.js ===
// ── EXAMEN: Examen Final — Trigonometría ──
// Archivo AUTOCONTENIDO: está integrado el meta de la materia, por lo que este
// único .js define la materia (si no existía) y registra este examen en SUBJECTS.
// Basta cargar este archivo (después de data.js) y la materia queda disponible.
// Si la materia ya fue registrada por otro examen, el bloque del meta se omite
// (registro idempotente) y aquí solo se agrega este examen.
// Cargarlo (automáticamente) mediante: node tools/scan-materias.js
const TRIG_EXAMENFINAL_QUESTIONS = [
  {
    "id": "trig1",
    "tema": "TEMA I",
    "seccion": "Conceptos Fundamentales",
    "text": "¿Cuál es el valor de sen(90°)?",
    "opts": [
      "0",
      "1",
      "√2 / 2",
      "No definido"
    ],
    "answer": 1
  },
  {
    "id": "trig2",
    "tema": "TEMA I",
    "seccion": "Conceptos Fundamentales",
    "text": "En un triángulo rectángulo, la razón trigonométrica definida como cateto opuesto dividido por la hipotenusa es:",
    "opts": [
      "Coseno",
      "Seno",
      "Tangente",
      "Cotangente"
    ],
    "answer": 1
  },
  {
    "id": "trig3",
    "tema": "TEMA I",
    "seccion": "Conceptos Fundamentales",
    "text": "¿Cuál es el valor de cos(0°)?",
    "opts": [
      "1",
      "0",
      "-1",
      "0.5"
    ],
    "answer": 0
  },
  {
    "id": "trig4",
    "tema": "TEMA I",
    "seccion": "Identidades Trigonométricas",
    "text": "La identidad pitagórica fundamental establece que:",
    "opts": [
      "sen²θ + cos²θ = 1",
      "sen²θ - cos²θ = 0",
      "1 + tg²θ = sen²θ",
      "tg²θ + 1 = cos²θ"
    ],
    "answer": 0
  },
  {
    "id": "trig5",
    "tema": "TEMA I",
    "seccion": "Identidades Trigonométricas",
    "text": "¿Cuál es la expresión correcta de la tangente de un ángulo?",
    "opts": [
      "sen(θ) / cos(θ)",
      "cos(θ) / sen(θ)",
      "1 / sen(θ)",
      "1 / cos(θ)"
    ],
    "answer": 0
  },
  {
    "id": "trig6",
    "tema": "TEMA I",
    "seccion": "Identidades Trigonométricas",
    "text": "Según la identidad trigonométrica, 1 + tg²θ es igual a:",
    "opts": [
      "sec²θ",
      "csc²θ",
      "cot²θ + 1",
      "cos²θ"
    ],
    "answer": 0
  },
  {
    "id": "trig7",
    "tema": "TEMA I",
    "seccion": "Aplicaciones",
    "text": "Un observador a 20 m de un árbol mide un ángulo de elevación de 30° hasta la copa. ¿Cuál es la altura aproximada del árbol? (usar tan(30°) ≈ 0.577)",
    "opts": [
      "10.0 m",
      "11.55 m",
      "20.0 m",
      "34.64 m"
    ],
    "answer": 1
  },
  {
    "id": "trig8",
    "tema": "TEMA I",
    "seccion": "Aplicaciones",
    "text": "Desde una lancha, un pescador mira un faro de 10 m de altura con un ángulo de elevación de 45°. ¿A qué distancia está la lancha de la base del faro?",
    "opts": [
      "5 m",
      "10 m",
      "14.14 m",
      "20 m"
    ],
    "answer": 1
  },
  {
    "id": "trig9",
    "tema": "TEMA I",
    "seccion": "Resolución de Triángulos",
    "text": "En un triángulo 30°-60°-90° con hipotenusa de 10 unidades, la longitud del cateto opuesto al ángulo de 30° es:",
    "opts": [
      "5",
      "8.66",
      "10",
      "10√3"
    ],
    "answer": 0
  },
  {
    "id": "trig10",
    "tema": "TEMA I",
    "seccion": "Identidades Trigonométricas",
    "text": "La doble angular del seno se expresa como:",
    "opts": [
      "sen(2θ) = 2·sen(θ)·cos(θ)",
      "sen(2θ) = sen²θ − cos²θ",
      "sen(2θ) = 1 − 2·cos²θ",
      "sen(2θ) = 2·cos²θ − 1"
    ],
    "answer": 0
  },
  {
    "id": "trig11",
    "tema": "TEMA I",
    "seccion": "Conceptos Fundamentales",
    "text": "El rango de la función seno es:",
    "opts": [
      "[-1, 1]",
      "[0, 1]",
      "(-∞, +∞)",
      "[1, +∞)"
    ],
    "answer": 0
  },
  {
    "id": "trig12",
    "tema": "TEMA I",
    "seccion": "Aplicaciones",
    "text": "El área de un triángulo con lados de 5 y 6 unidades y ángulo incluido de 60° es: (usar sen(60°) ≈ 0.866)",
    "opts": [
      "12.99 u²",
      "15 u²",
      "13.5 u²",
      "30 u²"
    ],
    "answer": 0
  }
];

// ── Metadatos de la materia (auto-registro idempotente) ──
// Meta integrado en este archivo: define la materia solo si aún no existe.
if (!SUBJECTS.trigonometria) {
  SUBJECTS.trigonometria = {
    key: 'trigonometria',
    icon: "🔺",
    label: "Trigonometría",
    badge: "TRIG · CIENCIAS",
    subtitle: "Examen Interactivo — Trigonometría: Conceptos, Identidades y Aplicaciones",
    temas: ["TODOS", "TEMA I"],
    temaLabels: { "TEMA I": "TEMA I: Trigonometría Básica, Identidades y Aplicaciones" },
    secciones: ["TODAS", "Conceptos Fundamentales", "Identidades Trigonométricas", "Aplicaciones", "Resolución de Triángulos"],
    exams: {},
  };
}

// ── Registro del examen en SUBJECTS (auto-registro) ──
SUBJECTS.trigonometria.exams.examenfinal = {
  key: 'examenfinal',
  label: "Examen Final",
  questions: TRIG_EXAMENFINAL_QUESTIONS,
};

