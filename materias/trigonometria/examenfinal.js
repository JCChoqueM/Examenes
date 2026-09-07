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
// ── EXAMEN: Examen Final — Trigonometría ──
// Archivo AUTOCONTENIDO: está integrado el meta de la materia, por lo que este
// único .js define la materia (si no existía) y registra este examen en SUBJECTS.
// Basta cargar este archivo (después de data.js) y la materia queda disponible.
// Si la materia ya fue registrada por otro examen, el bloque del meta se omite
// (registro idempotente) y aquí solo se agrega este examen.
// Cargarlo (automáticamente) mediante: node tools/scan-materias.js
// IIFE: cuerpo aislado — consts locales (reutilizable: se pueden reusar los mismos nombres de constante sin colisionar).
(function () {
"use strict";
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

})();
