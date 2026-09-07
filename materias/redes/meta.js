// ── MATERIA: Redes de Computadoras II (meta) ──
// Metadatos de la materia y catálogo de exámenes.
// Los exámenes viven en este mismo folder (parcial1.js, general.js, …).
// Este archivo se carga ANTES que los de los exámenes.

const REDES_TEMAS = [
  "TODOS",
  "TEMA I"
];
const REDES_SECCIONES = [
  "TODAS",
  "Modelo OSI",
  "Capas 2 y 3",
  "Protocolos de Transporte",
  "Direccionamiento IPv4",
  "Infraestructura",
  "MPLS y SD-WAN",
  "Arquitectura Moderna"
];
const REDES_TEMA_LABELS = {
  "TEMA I": "TEMA I: Redes de Computadoras II"
};

// ── Registro de la materia en SUBJECTS (auto-registro) ──
// "exams: {}" se rellena al cargar cada archivo de examen.
SUBJECTS.redes = {
  key: 'redes',
  icon: "🌐",
  label: "Redes de Computadoras II",
  badge: "REDES · INFORMÁTICA",
  subtitle: "Examen Interactivo — Redes de Computadoras II: Conceptos Fundamentales",
  temas: REDES_TEMAS,
  temaLabels: REDES_TEMA_LABELS,
  secciones: REDES_SECCIONES,
  exams: {},
};
