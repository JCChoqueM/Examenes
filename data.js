      // ── REGISTRO DE MATERIAS (escalable a futuro) ──
      const SUBJECTS = {
        legislacion: {
          key: 'legislacion',
          icon: '⚖️',
          label: 'Legislación Informática',
          badge: 'ELT-001 · ELECTIVA I',
          subtitle: 'Examen Interactivo — Universidad / Derecho Digital Bolivia',
          temas: LEGISLACION_TEMAS,
          secciones: null,
          questions: LEGISLACION_QUESTIONS,
        },
        ia: {
          key: 'ia',
          icon: '🤖',
          label: 'Inteligencia Artificial',
          badge: 'IA · INGENIERÍA',
          subtitle: 'Examen Interactivo — IA para Ingenieros: Primeros Pasos (UNIOR)',
          temas: IA_TEMAS,
          temaLabels: { 'TEMA I': 'TEMA I: IA para Ingenieros' },
          secciones: IA_SECCIONES,
          questions: IA_QUESTIONS,
        },
        redes: {
          key: 'redes',
          icon: '🌐',
          label: 'Redes de Computadoras II',
          badge: 'REDES · INFORMÁTICA',
          subtitle: 'Examen Interactivo — Redes de Computadoras II: Conceptos Fundamentales',
          temas: REDES_TEMAS,
          temaLabels: { 'TEMA I': 'TEMA I: Redes de Computadoras II' },
          secciones: REDES_SECCIONES,
          questions: REDES_QUESTIONS,
        },
      };

      let currentSubject = 'ia';
      let mode = 'practice';
      let activeTema = 'TODOS';
      let activeSeccion = 'TODAS';
      let userAnswers = {};
      let examSubmitted = false;
      let currentQuestions = [...SUBJECTS[currentSubject].questions];
      let isInitialLoad = true;
