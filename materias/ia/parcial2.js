// ═══════════════════════════════════════════════════════════════════════════
// 📋 CONTRATO — Archivo examen AUTO-CONTENIDO
// Este .js se carga DESPUÉS de data.js (que define SUBJECTS={}) y ANTES de logic.js.
// Para reutilizar este template, el archivo DEBE cumplir:
//
// ▸ 1) CONSTANTES DE PREGUNTAS:
//      const <PREFIJO>_<EXAM>_QUESTIONS = [ {id,tema,seccion,text,opts,answer}, ... ]
//      - id: string único (global) con prefijo de la materia (ej. 'inv1-1').
//      - tema: valor incluido en temas de la materia (empieza por 'TODOS').
//      - seccion: valor incluido en secciones (si no null; 'TODAS' es la de 'todos').
//      - opts: array de EXACTAMENTE 4 strings.
//      - answer: índice entero (0..3) dentro de opts de la opción correcta.
//
// ▸ 2) META DE LA MATERIA — Registro IDEMPOTENTE (solo se define si no existía):
//      if (!SUBJECTS.<clave>) { SUBJECTS.<clave> = {
//        key:'<clave>',        // = nombre de la carpeta; selectSubject('<clave>')
//        icon:'<emoji>', label:'<Materia>', badge:'<BADGE · ÁREA>',
//        subtitle:'...', temas:['TODOS',...], temaLabels:{},
//        secciones:['TODAS', <sec1>, <sec2>, ...] | null,  // null = sin filtro de sección
//        exams: {} }; }
//      → El PRIMER examen de una materia define la materia; los siguientes
//        omiten este bloque (no pisan los exámenes ya registrados).
//
// ▸ 3) REGISTRO DEL EXAMEN:
//      SUBJECTS.<clave>.exams.<exam> = { key:'<exam>', label:'...', questions: <CONST>_QUESTIONS };
//      <exam> es la clave usada por selectExam('<exam>').
//
// ▸ 4) CLAVES DE index.html (NO usar bundle ni comandos; son <script> estáticos sincrónicos):
//      <script src='data.js'></script>
//      <script src='materias/<materia>/<examen>.js'></script>  ← este archivo (y los demás exámenes)
//      <script src='logic.js'></script>        ← siempre AL FINAL
//      Regla: el primer examen de una materia va ANTES que los demás de la misma.
//
// ▸ 5) REGLAS DE ORO:
//      - 'clave' de la materia = nombre de la carpeta (ej. 'investigacion').
//      - temas siempre empieza con 'TODOS'; secciones empieza con 'TODAS' (o null).
//      - Cada pregunta: opts.length === 4 y answer ∈ {0,1,2,3}.
//      - ids únicos en TODOS los exámenes de TODAS las materias.
// ═══════════════════════════════════════════════════════════════════════════
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
