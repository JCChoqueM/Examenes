# Examenes

Plataforma web de **examen interactivo** para materias universitarias (modo Práctica, Examen y Repaso). Es estática y funciona abriendo `index.html` directamente en el navegador.

> 📐 **Arquitectura:** cada materia vive en su **propia subcarpeta** dentro de `materias/`. Dentro hay un archivo `meta.js` (metadatos de la materia) y **uno o varios archivos de examen** (`parcial1.js`, `parcial2.js`, `general.js`, …). Al seleccionar una materia, la app muestra la lista de exámenes para elegir cuál responder. Nada de esto requiere tocar `data.js` ni `logic.js`.

## Estructura del proyecto

```
examen/
├── index.html        # Página principal + etiquetas <script> (orden importante)
├── style.css          # Estilos genéricos (no dependen de la materia)
├── data.js            # Índice base: inicializa SUBJECTS = {} + estado global
├── logic.js           # Lógica genérica: barra de materias, selector de exámenes, filtros, renderizado
└── materias/          # ← una subcarpeta POR materia
    ├── ia/
    │   ├── meta.js          #   metadatos + SUBJECTS.ia = { ..., exams: {} }
    │   ├── parcial1.js      #   examen: SUBJECTS.ia.exams.parcial1
    │   └── parcial2.js      #   examen: SUBJECTS.ia.exams.parcial2
    ├── legislacion/
    │   ├── meta.js
    │   └── general.js
    ├── redes/
    │   ├── meta.js
    │   └── general.js
    └── mate/
        ├── meta.js
        └── general.js
```

### ¿Cómo funciona?

- **`data.js`** se carga **primero**. Inicializa `const SUBJECTS = {};` (vacío) y el estado global
  (`currentSubject`, `currentExam`, `mode`, `activeTema`, `userAnswers`, …). **No contiene preguntas.**
  Es el "índice base".
- **`materias/<materia>/meta.js`** define la materia: sus constantes de temas/secciones
  (`XXX_TEMAS`, `XXX_SECCIONES`, `XXX_TEMA_LABELS`) y su entrada `SUBJECTS.<materia>` con un
  catálogo `exams: {}` vacío. Se carga **antes** de los exámenes de esa materia.
- **`materias/<materia>/<examen>.js`** contiene las preguntas del examen y se **auto-registra**
  al final: `SUBJECTS.<materia>.exams.<examen> = { key, label, questions }`. El nombre del archivo
  (ej. `parcial1.js`) es la **clave** del examen y se muestra como opción en el selector.
- **`logic.js`** se carga **al final**. Al iniciar, llama a `selectSubject(currentSubject)` que
  muestra la **barra de materias**; al elegir una materia, se muestra la **barra de exámenes**;
  al elegir un examen, aparecen los filtros de tema/sección y las preguntas. Es completamente
  genérico: **no hay que tocarlo** para añadir materias ni exámenes.

### Orden de carga en `index.html`

El orden de las etiquetas `<script>` **importa**. Regla: *data.js primero*, *para cada materia
meta.js antes que sus exámenes*, y *logic.js al final*:

```html
<script src="data.js"></script>
<!-- Inteligencia Artificial -->
<script src="materias/ia/meta.js"></script>
<script src="materias/ia/parcial1.js"></script>
<script src="materias/ia/parcial2.js"></script>
<!-- Legislación Informática -->
<script src="materias/legislacion/meta.js"></script>
<script src="materias/legislacion/general.js"></script>
<!-- Redes de Computadoras II -->
<script src="materias/redes/meta.js"></script>
<script src="materias/redes/general.js"></script>
<!-- Matemáticas I -->
<script src="materias/mate/meta.js"></script>
<script src="materias/mate/general.js"></script>
<script src="logic.js"></script>
```

## Cómo añadir una nueva materia

> ✅ **No toques `data.js` ni `logic.js`.** Creato **una subcarpeta**
> `materias/<materia>/` con un `meta.js` y al menos un archivo de examen, y registra los `<script>`
> en `index.html`.

### Paso 1 — Crear `materias/<materia>/meta.js`

Define las constantes de temas/secciones y registra la materia en `SUBJECTS` con `exams: {}`:

```js
// ── MATERIA: Matemáticas I (meta) ──
const MATE_TEMAS = ["TODOS", "TEMA I"];
const MATE_SECCIONES = ["TODAS", "Álgebra", "Cálculo", "Trigonometría"];
const MATE_TEMA_LABELS = { "TEMA I": "TEMA I: Álgebra y Cálculo" };

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
```

> 💡 Si la materia **no** usa filtros por sección, pon `secciones: null` (como hace `legislacion`).

**Campos del registro `SUBJECTS.<clave>`:**

| Campo | Descripción |
|---|---|
| `key` | Identificador único = **nombre de la carpeta**. Se usa en `selectSubject('<key>')`. |
| `icon` | Emoji del botón de la barra de materias. |
| `label` | Nombre visible de la materia. |
| `badge` | Texto del distintivo superior. |
| `subtitle` | Subtítulo descriptivo. |
| `temas` | Referencia a `XXX_TEMAS` (siempre empieza con `'TODOS'`). |
| `temaLabels` | *(opcional)* Etiquetas amigables por tema. |
| `secciones` | Referencia a `XXX_SECCIONES` (siempre empieza con `'TODAS'`); `null` si no aplica. |
| `exams` | Catálogo de exámenes; se rellena con cada archivo de examen. |

### Paso 2 — Crear el primer examen `materias/<materia>/<examen>.js`

Copia el patrón. Las constantes llevan el prefijo de la materia. **Al final**, autoregistra el examen.
El nombre del archivo (ej. `parcial1`) será la **clave** que se muestra en el selector de exámenes.

```js
// ── EXAMEN: Parcial 1 — Matemáticas I ──
const MATE_PARCIAL1_QUESTIONS = [
  {
    id: 'mate1',
    tema: 'TEMA I',
    seccion: 'Álgebra',
    text: '¿Cuál es el valor de x en 2x + 3 = 7?',
    opts: [
      'x = 1',
      'x = 2',            // ← respuesta correcta (índice 1)
      'x = 3',
      'x = 4',
    ],
    answer: 1,
  },
  // ...más preguntas
];

// ── Registro del examen en SUBJECTS (auto-registro) ──
SUBJECTS.mate.exams.parcial1 = {
  key: 'parcial1',
  label: 'Parcial 1',
  questions: MATE_PARCIAL1_QUESTIONS,
};
```

**Reglas de formato de cada pregunta:**

| Campo | Requisito |
|---|---|
| `id` | Único (prefijo de la materia + número, ej. `mate1`). |
| `tema` | Debe estar en `XXX_TEMAS` (ej. `'TEMA I'`). |
| `seccion` | Debe estar en `XXX_SECCIONES` (ej. `'Álgebra'`). |
| `opts` | Array de **exactamente 4** strings. |
| `answer` | **Índice** (0-3) de la opción correcta dentro de `opts`. |

> 💡 **Importante:** el registro `SUBJECTS.<m>.exams.<examen>` debe ir **después** de declarada
> `XXX_<EXAM>_QUESTIONS`, ya que la referencia. Además, `meta.js` debe cargarse **antes** que
> este archivo (para que `SUBJECTS.<m>.exams` exista).

### Paso 3 — Añadir los `<script>` en `index.html`

```html
<script src="materias/mate/meta.js"></script>        <!-- ← antes de sus exámenes -->
<script src="materias/mate/parcial1.js"></script>     <!-- ← el examen -->
<script src="logic.js"></script>
```

> ⚠️ El `meta.js` de una materia debe ir **después de `data.js`** y **antes de sus archivos de examen**;
> `logic.js` siempre va **al final**.

### Paso 4 — Verificar

Abre `index.html`, haz clic en 📐 Matemáticas I y verás el selector de exámenes con `Parcial 1`;
al elegirlo aparecen las preguntas con los filtros de tema y sección.

## Cómo añadir un examen a una materia EXISTENTE

Solo creas **un archivo** `materias/<materia>/<nuevo-examen>.js` con las preguntas y el autoregistro,
y añades su `<script>` (después del `meta.js` de esa materia). La materia ya está en la barra; el
nuevo examen aparecerá automáticamente en su selector. Ejemplo: añadir `parcial2.js` a `materias/ia/`.

## Herramientas de ayuda (opcional)

```bash
node --check materias/mate/meta.js
node --check materias/mate/parcial1.js
node --check data.js
node --check logic.js
```

---

¿Listo para añadir más exámenes? Crea `materias/<materia>/<examen>.js`, autoregistra en
`SUBJECTS.<materia>.exams.<examen>` y añade la etiqueta `<script>` ✨.
