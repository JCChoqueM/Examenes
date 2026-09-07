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
