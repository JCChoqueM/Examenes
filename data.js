      // ── REGISTRO DE MATERIAS (escalable a futuro) ──
      // SUBJECTS se inicializa vacío aquí. Cada examen .js en
      // `materias/<materia>/<examen>.js` es AUTO-CONTENIDO: integra su propio
      // meta (definición idempotente de SUBJECTS.<key>) y se autoregistra en
      // `SUBJECTS.<key>.exams.<examen>`. `materias/bundle.js` concatena todos
      // esos .js (generado por `tools/scan-materias.js`). Así, crear una materia
      // o un examen solo requiere un archivo .js + correr el escaneador (sin
      // tocar data.js ni index.html).
      const SUBJECTS = {};

      let currentSubject = 'ia';
      let currentExam = null;      // examen activo dentro de la materia (clave)
      let mode = 'practice';
      let activeTema = 'TODOS';
      let activeSeccion = 'TODAS';
      let userAnswers = {};
      let examSubmitted = false;
      let currentQuestions = [];
      let isInitialLoad = true;
