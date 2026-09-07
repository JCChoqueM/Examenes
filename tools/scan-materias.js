#!/usr/bin/env node
/*
 * tools/scan-materias.js
 *
 * Genera `materias/bundle.js`, un archivo estático que concatena (en orden
 * alfabético) TODOS los archivos de exámenes auto-contenidos de `materias/`.
 *
 * Cada examen .js es AUTO-CONTENIDO (integra su propio meta con registro
 * idempotente), por lo que concatenarlos en un solo bundle funciona sin
 * ambigüedades: el `if (!SUBJECTS.<materia>)` garantiza que, para materias con
 * varios exámenes, la primera definición de la materia se mantenga y las
 * siguientes solo agreguen su examen (sin borrar los anteriores).
 *
 * Ventajas de este enfoque (sin loader.js ni manifest.js):
 *   - index.html carga data.js, bundle.js y logic.js como <script> estáticos
 *     (funciona sin problemas al abrir index.html directamente con file://).
 *   - Añadir una materia/examen = crear UN .js + correr este escaneador.
 *     No se edita index.html ni se crea un meta.js por separado.
 *
 * Uso:  node tools/scan-materias.js
 */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, ".."); // raíz del proyecto
const MATDIR = path.join(ROOT, "materias");
const BUNDLE = path.join(MATDIR, "bundle.js");

function collectExamFiles() {
  const out = [];
  if (!fs.existsSync(MATDIR)) return out;
  for (const sub of fs.readdirSync(MATDIR).sort()) {
    const subPath = path.join(MATDIR, sub);
    if (!fs.statSync(subPath).isDirectory()) continue;
    for (const f of fs.readdirSync(subPath).sort()) {
      if (!f.endsWith(".js")) continue;
      if (f === "bundle.js") continue; // no incluirse a sí mismo
      out.push({ rel: `materias/${sub}/${f}`, abs: path.join(subPath, f) });
    }
  }
  return out;
}

function syntaxOk(file) {
  const Module = require("module");
  // node --check equivalent: compile without executing
  try {
    new Function(fs.readFileSync(file, "utf8"));
    return true;
  } catch (e) {
    return "ERROR en " + path.relative(ROOT, file) + ": " + e.message;
  }
}

const files = collectExamFiles();
if (files.length === 0) {
  console.error("No se encontraron archivos de examen en materias/*/*.js");
  process.exit(1);
}

// Validar sintaxis de cada archivo ANTES de concatenar.
let hasErrors = false;
for (const { rel, abs } of files) {
  const ok = syntaxOk(abs);
  if (ok !== true) {
    console.error(ok);
    hasErrors = true;
  }
}
if (hasErrors) {
  console.error("\nNo se generó bundle.js por errores de sintaxis.");
  process.exit(1);
}

// Concatenar con un separador de comentario (evita fusiones de tokens entre archivos).
const parts = files.map(({ rel, abs }) => {
  const body = fs.readFileSync(abs, "utf8");
  const head = body.startsWith("//") ? "" : "";
  return `// === ${rel} ===\n${body.replace(/\n+$/, "")}\n`;
});

const header =
  "// AUTOGENERADO — no editar a mano.\n" +
  "// Generado por: node tools/scan-materias.js\n" +
  "// Concatena todos los exámenes auto-contenidos de materias/<materia>/*.js.\n" +
  "// Cada archivo define su materia con registro idempotente (if (!SUBJECTS.<k>)).\n\n";

fs.writeFileSync(BUNDLE, header + parts.join("\n") + "\n");
console.log(`materias/bundle.js generado con ${files.length} archivo(s):`);
for (const { rel } of files) console.log("  - " + rel);
