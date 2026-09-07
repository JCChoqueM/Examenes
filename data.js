      // ── REGISTRO DE MATERIAS (escalable a futuro) ──
      // SUBJECTS se inicializa vacío aquí. Cada subcarpeta en `materias/`
      // contiene un `meta.js` (metadatos + shell SUBJECTS.<key>) y uno o más
      // archivos de examen (`parcial1.js`, `general.js`, …) que se auto-registran
      // en `SUBJECTS.<key>.exams.<exam>`. Así, crear una materia o un examen solo
      // requiere sus archivos .js (sin tocar data.js).
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
