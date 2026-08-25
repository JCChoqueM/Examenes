# Examenes

Plataforma web de **examen interactivo** para materias universitarias (modo Práctica, Examen y Repaso). Es estática y funciona abriendo `index.html` directamente en el navegador.

## Estructura del proyecto

```
examen/
├── index.html        # Página principal + etiquetas <script> (orden importante)
├── style.css          # Estilos genéricos (no dependen de la materia)
├── legislacion.js     # Preguntas: Legislación Informática
├── ia.js              # Preguntas: Inteligencia Artificial
├── redes.js           # Preguntas: Redes de Computadoras II
├── data.js            # Registro de materias en `SUBJECTS` (el "índice")
└── logic.js           # Lógica genérica: renderizado, filtros, modos
```

### ¿Cómo funciona?
- Cada materia vive en su propio `xxx.js` y define **3 constantes globales**:
  - `XXX_TEMAS` — lista de temas (siempre empieza con `'TODOS'`).
  - `XXX_SECCIONES` — lista de secciones (siempre empieza con `'TODAS'`).
  - `XXX_QUESTIONS` — array de preguntas.
- `data.js` reúne todas las materias en un objeto `SUBJECTS`.
- `logic.js` es **genérico**: construye la barra de materias, los filtros y el renderizado a partir de `SUBJECTS`. **No hay que tocarlo** para añadir una materia.

## Cómo añadir una nueva materia (paso a paso)

> ✅ **Solo hay que tocar 3 archivos.** `logic.js` y `style.css` son genéricos y no se modifican.

### Paso 1 — Crear `<materia>.js`
Copia el patrón de `redes.js`. Las constantes deben nombrarse con las iniciales del nombre de la materia, en mayúsculas.

```js
// ── MATERIA: Matemáticas I ──
const MATE_TEMAS = ['TODOS', 'TEMA I'];
const MATE_SECCIONES = [
  'TODAS',
  'Álgebra',
  'Cálculo',
  'Trigonometría',
];

const MATE_QUESTIONS = [
  {
    id: 'mate1',
    tema: 'TEMA I',
    seccion: 'Álgebra',
    text: '¿Cuál es el valor de x en 2x + 3 = 7?',
    opts: [
      'x = 1',
      'x = 2',                       // ← respuesta correcta (índice 1)
      'x = 3',
      'x = 4',
    ],
    answer: 1,
  },
  // ...más preguntas
];
```

**Reglas de formato de cada pregunta:**
- `id`: único (prefijo de la materia + número).
- `tema`: debe estar en `XXX_TEMAS` (ej. `'TEMA I'`).
- `seccion`: debe estar en `XXX_SECCIONES` (ej. `'Álgebra'`).
- `opts`: array de **exactamente 4** strings.
- `answer`: **índice** (0-3) de la opción correcta dentro de `opts`.

### Paso 2 — Incluir el script en `index.html`
> ⚠️ El orden de los `<script>` **importa**. El archivo de la nueva materia debe ir **antes de `data.js`** (que consume sus constantes), y `logic.js` va **al final**.

```html
<!-- dentro de <body>, al final -->
<script src="legislacion.js"></script>
<script src="ia.js"></script>
<script src="redes.js"></script>
<script src="mate.js"></script>   <!-- ← añadido -->
<script src="data.js"></script>
<script src="logic.js"></script>
```

### Paso 3 — Registrar la materia en `data.js`
Añade una nueva entrada al objeto `SUBJECTS`, siguiendo el patrón de las demás:

```js
const SUBJECTS = {
  legislacion: { ... },
  ia:          { ... },
  redes:       { ... },
  mate: {                              // ← nueva materia
    key: 'mate',
    icon: '📐',
    label: 'Matemáticas I',
    badge: 'MATE · CIENCIAS',
    subtitle: 'Examen Interactivo — Álgebra y Cálculo I',
    temas: MATE_TEMAS,
    temaLabels: { 'TEMA I': 'TEMA I: Álgebra y Cálculo' },
    secciones: MATE_SECCIONES,
    questions: MATE_QUESTIONS,
  },
};

let currentSubject = 'ia';   // ← (opcional) cambiar la materia por defecto
```

**Campos de la entrada:**
| Campo | Descripción |
|---|---|
| `key` | Identificador único. Se usa en `selectSubject('mate')`. |
| `icon` | Emoji que aparece en el botón de la barra. |
| `label` | Nombre visible de la materia. |
| `badge` | Texto del distintivo superior. |
| `subtitle` | Subtítulo descriptivo. |
| `temas` | Referencia a `XXX_TEMAS`. |
| `temaLabels` | *(opcional)* Etiquetas amigables por tema. |
| `secciones` | Referencia a `XXX_SECCIONES`. |
| `questions` | Referencia a `XXX_QUESTIONS`. |

> 💡 Si la materia **no** usa filtros por sección, pon `secciones: null` (como hace `legislacion`).

### Paso 4 — Verificar
Abre `index.html` en el navegador. Deberías ver un nuevo botón en la barra de materias (ej. 📐 Matemáticas I). Al hacer clic, aparecerán las preguntas con los filtros de tema y sección correspondientes.

## Ejemplo completo ilustrativo

Archivo: `mate.js`
```js
// ── MATERIA: Matemáticas I ──
const MATE_TEMAS = ['TODOS', 'TEMA I'];
const MATE_SECCIONES = ['TODAS', 'Álgebra', 'Cálculo'];

const MATE_QUESTIONS = [
  {
    id: 'mate1',
    tema: 'TEMA I',
    seccion: 'Álgebra',
    text: '¿Cuál es el valor de x en 2x + 3 = 7?',
    opts: ['x = 1', 'x = 2', 'x = 3', 'x = 4'],
    answer: 1,
  },
  {
    id: 'mate2',
    tema: 'TEMA I',
    seccion: 'Cálculo',
    text: '¿Cuál es la derivada de x² + 3x respecto a x?',
    opts: ['2x + 3', 'x² + 3', '2x', '3'],
    answer: 0,
  },
];
```

En `index.html`:
```html
<script src="mate.js"></script>
<script src="data.js"></script>
```

En `data.js`:
```js
mate: {
  key: 'mate',
  icon: '📐',
  label: 'Matemáticas I',
  badge: 'MATE · CIENCIAS',
  subtitle: 'Examen Interactivo — Álgebra y Cálculo I',
  temas: MATE_TEMAS,
  temaLabels: { 'TEMA I': 'TEMA I: Álgebra y Cálculo' },
  secciones: MATE_SECCIONES,
  questions: MATE_QUESTIONS,
},
```

## Herramientas de ayuda (opcional)
Puedes validar la sintaxis JavaScript en cualquier momento:
```bash
node --check mate.js
node --check data.js
node --check logic.js
```

---
¿Lista para añadir `redes.js` al repositorio? Sí, ya está integrado ✅.
