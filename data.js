      // ── REGISTRO DE MATERIAS (escalable a futuro) ──
      // SUBJECTS se inicializa vacío aquí. Cada examen .js en
      // `materias/<materia>/<examen>.js` es AUTO-CONTENIDO: integra su propio
      // meta (definición idempotente de SUBJECTS.<key>) y se autoregistra en
      // `SUBJECTS.<key>.exams.<examen>`. Los .js de exámenes se cargan con
      // <script> estáticos en index.html (uno por examen; el primero de cada
      // materia define la materia y el resto sólo agregan su examen). Así,
      // crear una materia/examen = crear el .js + agregar su <script> en
      // index.html (sin tocar data.js ni logic.js).
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
