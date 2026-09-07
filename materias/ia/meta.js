// ── MATERIA: Inteligencia Artificial (meta) ──
// Metadatos de la materia y catálogo de exámenes.
// Los exámenes viven en este mismo folder (parcial1.js, general.js, …).
// Este archivo se carga ANTES que los de los exámenes.

const IA_TEMAS = [
  "TODOS",
  "TEMA I"
];
const IA_SECCIONES = [
  "TODAS",
  "¿Qué es la IA?",
  "Aprendizaje Supervisado",
  "Aprendizaje No Supervisado",
  "Aprendizaje por Refuerzo",
  "Redes Neuronales",
  "Herramientas y Lenguajes",
  "Proyecto y Preprocesamiento",
  "Ética y Responsabilidad"
];
const IA_TEMA_LABELS = {
  "TEMA I": "TEMA I: IA para Ingenieros"
};

// ── Registro de la materia en SUBJECTS (auto-registro) ──
// "exams: {}" se rellena al cargar cada archivo de examen.
SUBJECTS.ia = {
  key: 'ia',
  icon: "🤖",
  label: "Inteligencia Artificial",
  badge: "IA · INGENIERÍA",
  subtitle: "Examen Interactivo — IA para Ingenieros: Primeros Pasos (UNIOR)",
  temas: IA_TEMAS,
  temaLabels: IA_TEMA_LABELS,
  secciones: IA_SECCIONES,
  exams: {},
};
