// ── MATERIA: Matemáticas I (meta) ──
// Metadatos de la materia y catálogo de exámenes.
// Los exámenes viven en este mismo folder (parcial1.js, general.js, …).
// Este archivo se carga ANTES que los de los exámenes.

const MATE_TEMAS = [
  "TODOS",
  "TEMA I"
];
const MATE_SECCIONES = [
  "TODAS",
  "Álgebra",
  "Cálculo",
  "Trigonometría"
];
const MATE_TEMA_LABELS = {
  "TEMA I": "TEMA I: Álgebra y Cálculo"
};

// ── Registro de la materia en SUBJECTS (auto-registro) ──
// "exams: {}" se rellena al cargar cada archivo de examen.
SUBJECTS.mate = {
  key: 'mate',
  icon: "📐",
  label: "Matemáticas I",
  badge: "MATE · CIENCIAS",
  subtitle: "Examen Interactivo — Álgebra, Cálculo y Trigonometría I (UNIOR)",
  temas: MATE_TEMAS,
  temaLabels: MATE_TEMA_LABELS,
  secciones: MATE_SECCIONES,
  exams: {},
};
