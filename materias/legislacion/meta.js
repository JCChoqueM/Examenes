// ── MATERIA: Legislación Informática (meta) ──
// Metadatos de la materia y catálogo de exámenes.
// Los exámenes viven en este mismo folder (parcial1.js, general.js, …).
// Este archivo se carga ANTES que los de los exámenes.

const LEGISLACION_TEMAS = [
  "TODOS",
  "TEMA I",
  "TEMA II",
  "TEMA III",
  "TEMA IV",
  "TEMA V"
];

// ── Registro de la materia en SUBJECTS (auto-registro) ──
// "exams: {}" se rellena al cargar cada archivo de examen.
SUBJECTS.legislacion = {
  key: 'legislacion',
  icon: "⚖️",
  label: "Legislación Informática",
  badge: "ELT-001 · ELECTIVA I",
  subtitle: "Examen Interactivo — Universidad / Derecho Digital Bolivia",
  temas: LEGISLACION_TEMAS,
  temaLabels: {},
  secciones: null,
  exams: {},
};
