# Examenes

Plataforma web de **examen interactivo** para materias universitarias (modo Práctica, Examen y Repaso). Es estática y funciona abriendo `index.html` directamente en el navegador.

> 📐 **Arquitectura:** cada materia vive en su **propia subcarpeta** dentro de `materias/`. Cada examen es un **archivo `.js` auto-contenido**: integra los metadatos de la materia (el antiguo `meta.js`) y las preguntas, y se autoregistra en `SUBJECTS`. En `index.html` hay **un `<script>` estático por examen** (cargado de forma sincrónica, por lo que abre sin problemas con `file://`, sin servidor ni comandos extra). Para añadir un examen: **crear el `.js` y agregar su `<script>` a `index.html`** — punto. No modificás `data.js` ni `logic.js`, ni corré comandos.

## Estructura del proyecto

```
examen/
├── index.html           # Página principal (data.js + un <script> por examen + logic.js)
├── style.css            # Estilos genéricos (no dependen de la materia)
├── data.js              # Inicializa SUBJECTS = {} + estado global
├── logic.js             # Lógica genérica: barra de materias, selector, filtros, renderizado
└── materias/
    ├── ia/
    │   ├── parcial1.js  # auto-contenido: define materia + SUBJECTS.ia.exams.parcial1
    │   └── parcial2.js
    ├── legislacion/
    │   └── general.js
    ├── lenguaje/
    │   └── parcial1.js
    ├── mate/
    │   └── general.js
    ├── redes/
    │   ├── general.js
    │   └── parcial3.js
    └── trigonometria/
        └── examenfinal.js
```

### ¿Cómo funciona?

- **`data.js`** se carga **primero**. Inicializa `const SUBJECTS = {};` (vacío) y el estado global (`currentSubject`, `currentExam`, `mode`, `activeTema`, `userAnswers`, …). **No contiene preguntas.**
- Cada **archivo de examen** (`materias/<materia>/<examen>.js`) es **auto-contenido**: define su materia dentro de `if (!SUBJECTS.<materia>)` (registro idempotente) y luego registra su examen con `SUBJECTS.<materia>.exams.<examen> = {...}`.
- **`logic.js`** se carga **al final**. Como los `<script>` de los exámenes son sincrónicos y preceden al de `logic.js`, `SUBJECTS` ya está completo al iniciar. Es completamente genérico: **no hay que tocarlo** para añadir materias ni exámenes.

> 🧠 El registro idempotente (`if (!SUBJECTS.<materia>)`) permite que varios exámenes de la **misma** materia coexistan: el primero define la materia y el resto sólo añaden su examen (sin borrar los anteriores). Cada archivo sigue siendo independiente y cargable por sí solo.

### Orden de carga en `index.html`

`index.html` contiene estos `<script>` (el orden es el único detalle que importa):

```html
<!-- 1) estado: SUBJECTS vacío -->
<script src="data.js"></script>
<!-- 2) exámenes (uno por archivo; el primero de cada materia define la materia) -->
<script src="materias/ia/parcial1.js"></script>
<script src="materias/ia/parcial2.js"></script>
<script src="materias/legislacion/general.js"></script>
<script src="materias/lenguaje/parcial1.js"></script>
<script src="materias/mate/general.js"></script>
<script src="materias/redes/general.js"></script>
<script src="materias/redes/parcial3.js"></script>
<script src="materias/trigonometria/examenfinal.js"></script>
<!-- 3) UI -->
<script src="logic.js"></script>
```

### Cómo añadir una nueva materia o un examen

> ✅ **No corras comandos.** Solo: creá el `.js` auto-contenido y agregá su `<script>` en `index.html`.

#### Paso 1 — Crear `materias/<materia>/<examen>.js`

Un solo archivo con las preguntas **+** el metadato de la materia (registro idempotente) **+** el autoregistro del examen. Por ejemplo `materias/trigonometria/examenfinal.js`:

```js
// ── EXAMEN: Examen Final — Trigonometría ──
// AUTO-CONTENIDO: define la materia (si no existía) y registra este examen.
const TRIG_EXAMENFINAL_QUESTIONS = [
  {
    "id": "trig1",
    "tema": "TEMA I",
    "seccion": "Conceptos Fundamentales",
    "text": "¿Cuál es el valor de sen(90°)?",
    "opts": ["0", "1", "√2 / 2", "No definido"],
    "answer": 1
  }
  // ...más preguntas
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
```

**Reglas de formato de cada pregunta:**

| Campo | Requisito |
|---|---|
| `id` | Único (prefijo de la materia + número, ej. `trig1`). |
| `tema` | Debe estar en `temas` de la materia (ej. `'TEMA I'`). |
| `seccion` | Debe estar en `secciones` (ej. `'Conceptos Fundamentales'`). |
| `opts` | Array de **exactamente 4** strings. |
| `answer` | **Índice** (0-3) de la opción correcta dentro de `opts`. |

**Campos del registro `SUBJECTS.<clave>`:**

| Campo | Descripción |
|---|---|
| `key` | Identificador único = **nombre de la carpeta** (`selectSubject('<key>')`). |
| `icon` | Emoji del botón de la barra de materias. |
| `label` | Nombre visible de la materia. |
| `badge` | Texto del distintivo superior. |
| `subtitle` | Subtítulo descriptivo. |
| `temas` | Siempre empieza con `'TODOS'`. |
| `temaLabels` | *(opcional)* Etiquetas amigables por tema. |
| `secciones` | Siempre empieza con `'TODAS'`; `null` si no usa filtros por sección. |
| `exams` | Catálogo de exámenes (se rellena con cada archivo de examen). |

> 💡 Si la materia **no** usa filtros por sección, pon `secciones: null` (como hace `legislacion`).

#### Paso 2 — Agregar su `<script>` a `index.html`

```html
<script src="materias/trigonometria/examenfinal.js"></script>
```

> 📝 Para materias con varios exámenes, pon el que cree que será el "primero" antes que los demás (aunque el registro idempotente protege de errores, mantener el orden alfabético/tradicional ayuda a la legibilidad).

#### Paso 3 — Abrir / recargar

Abrí `index.html` (directo con doble-clic, sin servidor) y la nueva materia aparece en la barra con su selector de exámenes.

## Herramientas de ayuda (opcional, no obligatorio)

Validar la sintaxis de un examen o de todo el árbol (esto **no** es un paso obligatorio; sirve para chequear antes de abrir):

```bash
node --check materias/trigonometria/examenfinal.js       # un solo examen
find . -name '*.js' -not -path './.git/*' | xargs -n1 node --check   # todo el proyecto
```

---

¿Listo para añadir más exámenes? Creá `materias/<materia>/<examen>.js` (un solo archivo, auto-contenido), agregá su `<script>` en `index.html` y recargá ✨.
