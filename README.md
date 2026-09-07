# Examenes

Plataforma web de **examen interactivo** para materias universitarias (modo Práctica, Examen y Repaso). Es estática y funciona abriendo `index.html` directamente en el navegador.

> 📐 **Arquitectura:** cada materia vive en su **propia subcarpeta** dentro de `materias/`. Cada examen es un **archivo `.js` auto-contenido**: integra los metadatos de la materia (el antiguo `meta.js`) y las preguntas, y se autoregistra en `SUBJECTS`. `materias/bundle.js` concatena todos esos archivos (generado por `tools/scan-materias.js`) y `index.html` los carga con **scripts estáticos**. Para añadir una materia o un examen solo creas **un archivo** y corres el escaneador; **no tocas `data.js`, `logic.js` ni `index.html`.

## Estructura del proyecto

```
examen/
├── index.html           # Página principal + 3 <script> estáticos (data, bundle, logic)
├── style.css            # Estilos genéricos (no dependen de la materia)
├── data.js              # Índice base: inicializa SUBJECTS = {} + estado global
├── logic.js             # Lógica genérica: barra de materias, selector, filtros, renderizado
├── tools/
│   └── scan-materias.js # genera materias/bundle.js (auto-generado)
└── materias/
    ├── bundle.js        # AUTOGENERADO — concat de todos los exámenes auto-contenidos
    ├── ia/
    │   ├── parcial1.js  # auto-contenido: define materia + SUBJECTS.ia.exams.parcial1
    │   └── parcial2.js
    ├── legislacion/
    │   └── general.js
    ├── lenguaje/
    │   └── parcial1.js
    ├── mate/
    │   └── general.js
    └── redes/
        ├── general.js
        └── parcial3.js
```

### ¿Cómo funciona?

- **`data.js`** se carga **primero**. Inicializa `const SUBJECTS = {};` (vacío) y el estado global (`currentSubject`, `currentExam`, `mode`, `activeTema`, `userAnswers`, …). **No contiene preguntas.**
- **`materias/bundle.js`** (auto-generado por `tools/scan-materias.js`) concatena en orden todos los `materias/<materia>/<examen>.js`. Cada uno es **auto-contenido**: define su materia dentro de `if (!SUBJECTS.<materia>)` (registro idempotente) y luego registra su examen.
- **`logic.js`** se carga **al final** y, como `bundle.js` es un `<script>` sincrónico que precede al suyo, `SUBJECTS` ya está completo al iniciar. Es completamente genérico: **no hay que tocarlo** para añadir materias ni exámenes.

> 🧠 El registro idempotente (`if (!SUBJECTS.<materia>)`) permite que varios exámenes de la **misma** materia coexistan: el primero define la materia y el resto solo añaden su examen (sin borrar los anteriores). Cada archivo sigue siendo independiente y cargable por sí solo.

### Orden de carga en `index.html`

`index.html` sólo contiene **3 scripts estáticos** (el orden es el único que importa):

```html
<script src="data.js"></script>            <!-- inicializa SUBJECTS -->
<script src="materias/bundle.js"></script> <!-- todos los exámenes (auto-generado) -->
<script src="logic.js"></script>           <!-- init y renderizado -->
```

No necesitas añadir `<script>` por cada examen: `bundle.js` los incluye a todos.

## Cómo añadir una nueva materia

> ✅ **No toques `data.js`, `logic.js` ni `index.html`.** Solo creas **un archivo** `materias/<materia>/<examen>.js` (auto-contenido) y regeneras el bundle.

### Paso 1 — Crear `materias/<materia>/<examen>.js`

Un solo archivo con las preguntas **+** el metadato de la materia (registro idempotente) **+** el autoregistro del examen. Por ejemplo `materias/lenguaje/parcial1.js`:

```js
// ── EXAMEN: Parcial 1 — Lenguajes de Programación ──
// Archivo AUTOCONTENIDO: define la materia (si no existía) y registra este examen.
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
  // ...más preguntas
];

// ── Metadatos de la materia (auto-registro idempotente) ──
// Meta integrado en este archivo: define la materia solo si aún no existe.
if (!SUBJECTS.lenguaje) {
  SUBJECTS.lenguaje = {
    key: 'lenguaje',
    icon: "💻",
    label: "Lenguajes de Programación",
    badge: "LENG · INFORMÁTICA",
    subtitle: "Examen Interactivo — Lenguajes de Programación: Conceptos y Paradigmas",
    temas: ["TODOS", "TEMA I"],
    temaLabels: { "TEMA I": "TEMA I: Lenguajes de Programación" },
    secciones: ["TODAS", "¿Qué es un Lenguaje de Programación?", "Paradigmas de Programación", "Lenguajes Funcionales", "Programación Orientada a Objetos", "Lenguajes de Scripting", "Compilación e Interpretación"],
    exams: {},
  };
}

// ── Registro del examen en SUBJECTS (auto-registro) ──
SUBJECTS.lenguaje.exams.parcial1 = {
  key: 'parcial1',
  label: "Parcial 1",
  questions: LEN_PARCIAL1_QUESTIONS,
};
```

**Reglas de formato de cada pregunta:**

| Campo | Requisito |
|---|---|
| `id` | Único (prefijo de la materia + número, ej. `len1`). |
| `tema` | Debe estar en `temas` de la materia (ej. `'TEMA I'`). |
| `seccion` | Debe estar en `secciones` (ej. `'Álgebra'`). |
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

### Paso 2 — Regenerar el bundle

```bash
node tools/scan-materias.js
```

El escananedor valida la sintaxis de cada `materias/*/*.js`, los ordena alfabéticamente y escribe `materias/bundle.js`. Es el **único paso necesario** después de crear o borrar un archivo de examen; `index.html` no cambia.

### Paso 3 — Verificar

Abre `index.html`, haz clic en la nueva materia y verás el selector de exámenes; al elegir uno aparecen las preguntas con los filtros de tema y sección.

## Cómo añadir un examen a una materia EXISTENTE

Creas **un solo archivo** `materias/<materia>/<nuevo-examen>.js` (auto-contenido, con su propio `if (!SUBJECTS.<materia>)` idempotente) y regeneras el bundle:

```bash
node tools/scan-materias.js
```

La materia ya está en la barra; el nuevo examen aparecerá automáticamente en su selector. Ejemplo: añadir `parcial2.js` a `materias/ia/`.

## Herramientas de ayuda (opcional)

```bash
node --check materias/lenguaje/parcial1.js   # valida sintaxis del examen
node --check materias/bundle.js              # valida el bundle generado
node --check data.js
node --check logic.js
node --check tools/scan-materias.js
node tools/scan-materias.js                 # regenera materias/bundle.js
```

---

¿Listo para añadir más exámenes? Crea `materias/<materia>/<examen>.js` (un solo archivo, auto-contenido), autoregistra en `SUBJECTS.<materia>.exams.<examen>` y corre `node tools/scan-materias.js` ✨.
