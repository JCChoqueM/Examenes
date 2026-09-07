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
//      - 'clave' de la materia = nombre de la carpeta (ej. 'investigacion2').
//      - temas siempre empieza con 'TODOS'; secciones empieza con 'TODAS' (o null).
//      - Cada pregunta: opts.length === 4 y answer ∈ {0,1,2,3}.
//      - ids únicos en TODOS los exámenes de TODAS las materias.
// ═══════════════════════════════════════════════════════════════════════════
// ── EXAMEN: Examen 1 — Investigación Operativa ──
// Archivo AUTOCONTENIDO: define la materia (si no existía) y registra este examen.
const INV_EXAMEN1_QUESTIONS = [
  {
    "id": "inv1-1",
    "tema": "TEMA I",
    "seccion": "Programación Lineal",
    "text": "En un modelo de programación lineal, la expresión que se busca maximizar o minimizar se llama:",
    "opts": [
      "Restricción",
      "Función objetivo",
      "Variable de decisión",
      "Región factible"
    ],
    "answer": 1
  },
  {
    "id": "inv1-2",
    "tema": "TEMA I",
    "seccion": "Programación Lineal",
    "text": "Para pasar una restricción de igualdad (=) a la forma estándar del método simplex, se introduce:",
    "opts": [
      "Variable de excedencia",
      "Variable de superávit",
      "Variable artificial",
      "Variable holgura"
    ],
    "answer": 2
  },
  {
    "id": "inv1-3",
    "tema": "TEMA I",
    "seccion": "Programación Lineal",
    "text": "Al terminar el método simplex, si una variable no básica tiene costo reducido cero en un problema de maximizar, la solución es:",
    "opts": [
      "Inviable",
      "Ilimitada",
      "Óptima múltiple",
      "Degenerate"
    ],
    "answer": 2
  },
  {
    "id": "inv1-4",
    "tema": "TEMA I",
    "seccion": "Programación Lineal",
    "text": "En un problema de maximización resuelto por simplex (forma estándar), si una variable no básica tiene costo reducido positivo, el tableau actual representa:",
    "opts": [
      "Solución óptima",
      "Solución no óptima",
      "Solución ilimitada",
      "Solución básica factible"
    ],
    "answer": 1
  },
  {
    "id": "inv1-5",
    "tema": "TEMA I",
    "seccion": "Programación Lineal",
    "text": "Si en el método simplex la columna de la variable entrada tiene todos sus coeficientes menores o iguales a cero, el problema:",
    "opts": [
      "Es inviable",
      "Tiene solución ilimitada",
      "Tiene solución múltiple",
      "Es degenerado"
    ],
    "answer": 1
  },
  {
    "id": "inv1-6",
    "tema": "TEMA I",
    "seccion": "Transporte y Asignación",
    "text": "En el problema del transporte con m orígenes y n destinos, el número de celdas básicas de una solución básica inicial es:",
    "opts": [
      "m + n",
      "m + n - 1",
      "m × n - 1",
      "m"
    ],
    "answer": 1
  },
  {
    "id": "inv1-7",
    "tema": "TEMA I",
    "seccion": "Transporte y Asignación",
    "text": "El método de la esquina noroeste para el problema del transporte produce:",
    "opts": [
      "La solución óptima",
      "Una solución factible pero no necesariamente óptima",
      "Una solución inviable",
      "Una solución ilimitada"
    ],
    "answer": 1
  },
  {
    "id": "inv1-8",
    "tema": "TEMA I",
    "seccion": "Dualidad y Entera",
    "text": "Si el primal tiene 3 restricciones y 2 variables de decisión, el problema dual tiene:",
    "opts": [
      "2 variables y 3 restricciones",
      "3 variables y 2 restricciones",
      "2 variables y 2 restricciones",
      "3 variables y 3 restricciones"
    ],
    "answer": 0
  },
  {
    "id": "inv1-9",
    "tema": "TEMA I",
    "seccion": "Dualidad y Entera",
    "text": "El teorema de la dualidad establece que, si ambos problemas (primal y dual) tienen solución óptima:",
    "opts": [
      "El dual vale el doble que el primal",
      "Ambos valores óptimos son iguales",
      "El dual es cero",
      "Ninguna de las anteriores"
    ],
    "answer": 1
  },
  {
    "id": "inv1-10",
    "tema": "TEMA I",
    "seccion": "Dualidad y Entera",
    "text": "En el método branch-and-bound para programación lineal entera, las ramificaciones se hacen sobre:",
    "opts": [
      "Las variables continuas",
      "Las variables enteras",
      "La función objetivo",
      "Las restricciones de holgura"
    ],
    "answer": 1
  },
  {
    "id": "inv1-11",
    "tema": "TEMA I",
    "seccion": "Teoría de Colas",
    "text": "La notación M/M/1 en teoría de colas representa:",
    "opts": [
      "Llegadas Poisson (Markovianas)",
      "Servicio con distribución exponencial",
      "Un solo servidor",
      "Todas las anteriores"
    ],
    "answer": 3
  },
  {
    "id": "inv1-12",
    "tema": "TEMA I",
    "seccion": "Inventarios y EOQ",
    "text": "En el modelo EOQ clásico (sin faltantes), el costo total anual incluye:",
    "opts": [
      "Solo el costo de pedido",
      "Solo el costo de mantenimiento",
      "El costo de faltantes",
      "Costos de pedido y de mantenimiento"
    ],
    "answer": 3
  }
];

// ── Metadatos de la materia (auto-registro idempotente) ──
// Meta integrado en este archivo: define la materia solo si aún no existe.
if (!SUBJECTS.investigacion2) {
  SUBJECTS.investigacion2 = {
    key: 'investigacion2',
    icon: "📊",
    label: "Investigación Operativa",
    badge: "INV · INGENIERÍA",
    subtitle: "Examen Interactivo — Investigación Operativa: Modelos y Técnicas",
    temas: ["TODOS", "TEMA I", "TEMA II"],
    temaLabels: {
      "TEMA I": "TEMA I: Programación Lineal, Simplex y Métodos Especiales",
      "TEMA II": "TEMA II: Teoría de Grafos, Inventarios y Simulación"
    },
    secciones: ["TODAS", "Programación Lineal", "Transporte y Asignación", "Dualidad y Entera", "Teoría de Colas", "Teoría de Grafos y Redes", "Inventarios y EOQ", "Simulación"],
    exams: {},
  };
}

// ── Registro del examen en SUBJECTS (auto-registro) ──
SUBJECTS.investigacion2.exams.examen1 = {
  key: 'examen1',
  label: "Examen 1",
  questions: INV_EXAMEN1_QUESTIONS,
};
