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
