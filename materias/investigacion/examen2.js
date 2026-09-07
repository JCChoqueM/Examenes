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
// ── EXAMEN: Examen 2 — Investigación Operativa ──
// Archivo AUTOCONTENIDO: define la materia (si no existía) y registra este examen.
// IIFE: cuerpo aislado — consts locales (reutilizable: se pueden reusar los mismos nombres de constante sin colisionar).
(function () {
"use strict";
const INV_EXAMEN2_QUESTIONS = [
  {
    "id": "inv2-1",
    "tema": "TEMA II",
    "seccion": "Teoría de Grafos y Redes",
    "text": "Un árbol de expansión mínima (MST) de un grafo con n nodos contiene exactamente:",
    "opts": [
      "n - 1 aristas",
      "n aristas",
      "n + 1 aristas",
      "n / 2 aristas"
    ],
    "answer": 0
  },
  {
    "id": "inv2-2",
    "tema": "TEMA II",
    "seccion": "Teoría de Grafos y Redes",
    "text": "El algoritmo de Kruskal construye el MST ordenando las aristas por:",
    "opts": [
      "Peso (costo)",
      "Nodo origen",
      "Cercanía al origen",
      "Orden aleatorio"
    ],
    "answer": 0
  },
  {
    "id": "inv2-3",
    "tema": "TEMA II",
    "seccion": "Teoría de Grafos y Redes",
    "text": "En el método del camino crítico (CPM), la duración mínima del proyecto coincide con:",
    "opts": [
      "La suma de todas las duraciones de actividades",
      "La duración de la ruta crítica",
      "El promedio de las duraciones",
      "La actividad de mayor duración"
    ],
    "answer": 1
  },
  {
    "id": "inv2-4",
    "tema": "TEMA II",
    "seccion": "Teoría de Grafos y Redes",
    "text": "Una actividad se considera crítica cuando su holgura total es:",
    "opts": [
      "Máxima",
      "Cero",
      "Mínima y positiva",
      "Variable"
    ],
    "answer": 1
  },
  {
    "id": "inv2-5",
    "tema": "TEMA II",
    "seccion": "Teoría de Grafos y Redes",
    "text": "El teorema del corte-máximo establece que el flujo máximo entre s y t coincide con:",
    "opts": [
      "El costo mínimo del corte",
      "La capacidad mínima del corte",
      "La capacidad del corte mínimo",
      "La suma de capacidades de salida de s"
    ],
    "answer": 2
  },
  {
    "id": "inv2-6",
    "tema": "TEMA II",
    "seccion": "Teoría de Grafos y Redes",
    "text": "Un grafo con n vértices y n - 1 aristas que es conectado se denomina:",
    "opts": [
      "Camino",
      "Ciclo",
      "Árbol",
      "Bosque"
    ],
    "answer": 2
  },
  {
    "id": "inv2-7",
    "tema": "TEMA II",
    "seccion": "Inventarios y EOQ",
    "text": "En el modelo EOQ, si la demanda anual (D) se duplica, el lote óptimo (Q*) lo hace:",
    "opts": [
      "Se duplica",
      "Aumenta pero menos del doble",
      "Se reduce a la mitad",
      "No cambia"
    ],
    "answer": 1
  },
  {
    "id": "inv2-8",
    "tema": "TEMA II",
    "seccion": "Inventarios y EOQ",
    "text": "Permitir faltantes (backordering) en un modelo de inventario generalmente:",
    "opts": [
      "Aumenta los costos totales",
      "Reduce los costos totales",
      "No afecta los costos",
      "Aumenta el lote óptimo"
    ],
    "answer": 1
  },
  {
    "id": "inv2-9",
    "tema": "TEMA II",
    "seccion": "Simulación",
    "text": "La simulación de Monte Carlo se basa fundamentalmente en:",
    "opts": [
      "Generación de números aleatorios",
      "Tablas de multiplicar",
      "Soluciones analíticas exactas",
      "Variables constantes"
    ],
    "answer": 0
  },
  {
    "id": "inv2-10",
    "tema": "TEMA II",
    "seccion": "Simulación",
    "text": "Un modelo determinista asume que:",
    "opts": [
      "Existe incertidumbre en los parámetros",
      "Todo es desconocido",
      "Todo parámetro ciertamente conocido",
      "Depende del azar"
    ],
    "answer": 2
  }
];

// ── Metadatos de la materia (auto-registro idempotente) ──
// Meta integrado en este archivo: define la materia solo si aún no existe.
// (Este archivo es el segundo examen de 'investigacion'; el bloque del meta se
//  omite por el registro idempotente y aquí sólo se agrega este examen.)
if (!SUBJECTS.investigacion) {
  SUBJECTS.investigacion = {
    key: 'investigacion',
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
SUBJECTS.investigacion.exams.examen2 = {
  key: 'examen2',
  label: "Examen 2",
  questions: INV_EXAMEN2_QUESTIONS,
};

})();
