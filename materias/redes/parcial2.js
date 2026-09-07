// ═════════════════════════════════════════════════════════════════════════════
// 🎓 EXAMEN CON CONFIG COMENTADO (SIMPLE)
// ═════════════════════════════════════════════════════════════════════════════
// ⚠️ NOTA DE ORDEN DE CARGA:
// Este examen introduce secciones NUEVAS respecto a general.js/parcial3.js
// (xDSL y Última Milla, Frame Relay y ATM, SD-WAN Avanzado), además de las
// 7 secciones originales de 'redes' (se mantienen en el MISMO orden/índices
// para no romper nada si este archivo NO es el primero en cargar).
// Para que el filtro de secciones muestre TODAS las opciones nuevas en el
// dropdown, este archivo debería cargarse ANTES que general.js y parcial3.js
// (así su bloque de meta, más completo, es el que registra la materia).
// Si carga después, el registro ya existente (más corto) seguirá activo y
// las preguntas de secciones nuevas simplemente no aparecerán en ese filtro,
// pero el examen funcionará igual con el filtro 'TODAS'.
// ═════════════════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  const CONFIG = {
    subject_key: 'redes', // Nombre de la carpeta: /materias/redes/ | Usa en SUBJECTS[X].exams | IDs: ${charAt(0)}
    exam_key: 'parcial2', // Nombre del examen: SUBJECTS.redes.exams[X] | IDs: ${charAt(-1)} | Archivo: parcial2.js
    icon: '🌐', // Emoji en selector de materia (visual)
    label: 'Redes de Computadoras II', // Nombre completo en encabezado, selector, tab del browser
    badge: 'REDES · INFORMÁTICA', // Clasificación debajo del label (ÁREA · CATEGORÍA)
    subtitle: 'Examen Interactivo — Redes de Computadoras II: Conceptos Fundamentales', // Descripción larga bajo el título
    temas: ['TODOS', 'TEMA I'], // Array de temas (filtro en dropdown) | SIEMPRE empieza con "TODOS"
    temaLabels: {
      // Nombres legibles de temas (tooltip al hover)
      'TEMA I': 'TEMA : Redes de Computadoras II', // Mapeo tema → descripción
    },
    secciones: [
      // Array de subsecciones (filtro en dropdown) | SIEMPRE empieza con "TODAS"
      // Índices 1-7 IDÉNTICOS a general.js/parcial3.js (compatibilidad de orden)
      'TODAS', // Opción "mostrar todas"
      'Modelo OSI', // Sección 1
      'Capas 2 y 3', // Sección 2
      'Protocolos de Transporte', // Sección 3
      'Direccionamiento IPv4', // Sección 4
      'Infraestructura', // Sección 5
      'MPLS y SD-WAN', // Sección 6
      'Arquitectura Moderna', // Sección 7
      // Secciones NUEVAS aportadas por este examen:
      'xDSL y Última Milla', // Sección 8
      'Frame Relay y ATM', // Sección 9
      'SD-WAN Avanzado', // Sección 10
    ],
    exam_label: 'Parcial 2', // Nombre del examen en selector de exámenes
  };

  // ─────────────────────────────────────────────────────────────────────────
  // PREGUNTAS (usa CONFIG para referencias, no hardcode)
  // ─────────────────────────────────────────────────────────────────────────
  const REDES_PARCIAL2_QUESTIONS = [
    // ── Infraestructura (sección 5) ──
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-1`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[5],
      text: '¿Cuál es el principal "trade-off" (intercambio) de usar MPLS como infraestructura de red?',
      opts: [
        'Es barato pero inseguro',
        'Ofrece privacidad garantizada por hardware y cero pérdida de paquetes, pero su rigidez física exige alto CAPEX y tiempos de aprovisionamiento lentos (ej: pedir un nuevo circuito MPLS puede tardar semanas)',
        'Es rápido de desplegar pero no soporta voz',
        'Funciona solo con fibra óptica',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-2`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[5],
      text: 'Al modernizar la WAN de una empresa, ¿cuál es el orden correcto de las etapas del proyecto?',
      opts: [
        'Validación en producción → Selección del proveedor → Diagnóstico',
        'Diagnóstico de requisitos → Selección del proveedor (evaluar TCO) → Diseño arquitectónico (topologías híbridas, QoS) → Integración fluida (desplegar en paralelo sin interrumpir) → Validación en producción (pruebas de failover)',
        'Diseño arquitectónico → Diagnóstico → Integración → Selección del proveedor',
        'Solo se necesita comprar el hardware e instalarlo',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-3`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[5],
      text: '¿Cuáles son la principal ventaja y la principal limitación de MPLS como "túnel corporativo estandarizado"?',
      opts: [
        'Ventaja: es gratuito. Limitación: no soporta datos',
        'Ventaja: QoS estricta, baja pérdida de paquetes, baja latencia y rutas privadas dedicadas. Limitación: extrema rigidez operativa, despliegue de nuevas sedes puede tomar semanas y alto costo por megabit',
        'Ventaja: es inalámbrico. Limitación: solo funciona en el mismo edificio',
        'Ventaja: no requiere routers. Limitación: es inseguro',
      ],
      answer: 1,
    },

    // ── MPLS y SD-WAN (sección 6) ──
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-4`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: 'El encabezado "Shim" de MPLS mide 32 bits y reside entre la Capa 2 y la Capa 3. ¿Cómo se distribuyen esos bits?',
      opts: [
        'Solo contiene la IP de origen y destino',
        'Label (20 bits) + Exp/Calidad de Servicio (3 bits) + S (1 bit) + TTL (8 bits)',
        '16 bits de dirección MAC + 16 bits de checksum',
        'Es un campo de tamaño variable sin subdivisiones',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-5`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: '¿Por qué la "Conmutación de Etiquetas" (Label Switching) de MPLS es tan rápida?',
      opts: [
        'Porque elimina completamente la capa IP',
        'Porque los routers MPLS no abren el paquete IP en cada parada: leen una etiqueta preasignada de 20 bits para un enrutamiento ultrarrápido y garantizado (ej: como leer solo el código postal en vez de toda la dirección)',
        'Porque usa exclusivamente fibra óptica dedicada',
        'Porque comprime los datos antes de enviarlos',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-6`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: 'En el paradigma de Redes Definidas por Software (SDN), ¿qué función cumple cada una de sus tres capas?',
      opts: [
        'Las tres capas hacen exactamente lo mismo por redundancia',
        'Capa de Aplicación (lógica de negocio) → Capa de Control/"el Cerebro" (el Controlador/NOS decide cómo fluye el tráfico vía APIs) → Capa de Infraestructura/"el Músculo" (dispositivos físicos o virtuales que ejecutan las órdenes)',
        'Capa Física, Capa de Enlace y Capa de Red del modelo OSI',
        'Aplicación, Presentación y Sesión únicamente',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-7`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: 'En la arquitectura SD-WAN, ¿qué hace cada uno de sus tres planos (Orquestación, Control y Datos)?',
      opts: [
        'Los tres planos gestionan únicamente el ancho de banda',
        'Orquestación: autentica componentes con Zero Touch Provisioning (ZTP) y gestiona políticas globales. Control: el "semáforo inteligente" que optimiza el flujo según el tipo de aplicación en tiempo real. Datos: establece conexiones seguras a través de infraestructuras privadas y públicas simultáneamente',
        'Orquestación cifra los datos, Control los descifra, Datos los almacena',
        'Solo existe un plano: el de datos',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-8`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: 'Según la matriz de diagnóstico arquitectónico, ¿cómo se comparan MPLS y SD-WAN en fiabilidad y modelo de costos?',
      opts: [
        'MPLS: alta disponibilidad por canal virtual/BGP con alto CAPEX. SD-WAN: conmutación dinámica de rutas en milisegundos, optimizado a OPEX con ahorro radical de costos operativos',
        'Ambos tienen exactamente el mismo modelo de costos',
        'MPLS siempre es más barato que SD-WAN',
        'SD-WAN no ofrece ningún tipo de cifrado ni seguridad',
      ],
      answer: 0,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-9`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: '¿Qué significa que "SD-WAN no reemplaza a MPLS, lo optimiza" en una arquitectura híbrida?',
      opts: [
        'Que MPLS deja de usarse por completo',
        'Que el tráfico crítico (ej: transacciones bancarias) se enruta automáticamente por MPLS con seguridad extrema, el tráfico masivo (ej: YouTube, SaaS) se descarga económicamente por Internet, y el 4G/5G LTE sirve de respaldo y agilidad con ancho de banda bajo demanda',
        'Que todo el tráfico pasa siempre por 4G/5G LTE',
        'Que SD-WAN solo funciona sin conexión a Internet',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-10`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: 'Sobre Cisco Viptela: ¿qué componentes clave forman su arquitectura y qué caso de éxito local se menciona?',
      opts: [
        'vManage (gestión centralizada vía API REST), vBond (orquestación y aprovisionamiento Zero-Touch), vSmart (implementación de políticas vía protocolo OMP) y vEdge (plano de datos en la sucursal); caso de éxito: Banco Pichincha, que redujo costos y mejoró la conectividad en tiempo real',
        'FortiGate, FortiManager y FortiAnalyzer; caso de éxito: Banco Pichincha',
        'Solo tiene un componente llamado vRouter',
        'DSLAM, ATU-C y ATU-R; caso de éxito: Universidad de los Andes',
      ],
      answer: 0,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-11`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: 'Sobre Fortinet: ¿qué componentes clave forman su enfoque de "Seguridad Unificada" (NGFW) y qué caso de éxito local se menciona?',
      opts: [
        'vManage, vBond y vSmart; caso de éxito: Uniandes',
        'FortiManager (aprovisionamiento Zero-Touch y gestión), FortiAnalyzer (monitoreo de registros y reportes) y FortiGate (firewall NGFW que unifica IPS, inspección SSL y enrutamiento SD-WAN); caso de éxito: Universidad de los Andes (Uniandes), que superó incidentes críticos de seguridad',
        'Solo ofrece un router sin funciones de seguridad',
        'Fortinet no tiene componentes de gestión centralizada',
      ],
      answer: 1,
    },

    // ── Arquitectura Moderna (sección 7) ──
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-12`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[7],
      text: '¿Cómo describe la "expansión ineludible del perímetro de red" la relación entre LAN, MAN, WAN y la nube?',
      opts: [
        'Son redes completamente aisladas sin ninguna relación',
        'Como anillos concéntricos: el Núcleo (LAN - redes de área local), el Anillo Intermedio (MAN - redes de área metropolitana), el Anillo Exterior (WAN - redes de área amplia) y "La Órbita" (Nube/SaaS), donde el tráfico moderno ya no va solo de sucursal a datacenter, sino directamente a la nube',
        'La nube reemplaza completamente a la LAN',
        'Solo existe la WAN; LAN y MAN ya no se usan',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-13`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[7],
      text: 'Según el espectro de decisión estratégica, ¿en qué se basa realmente elegir entre Cisco Viptela y Fortinet para una infraestructura empresarial?',
      opts: [
        'En cuál marca es más antigua en el mercado',
        'No en cuál es "mejor" en general, sino en la prioridad principal de la empresa: Cisco para topologías globales de alta complejidad de enrutamiento (orquestación de red pura); Fortinet si la ciberseguridad integral en el borde (Edge) es el mandato corporativo principal',
        'En el color de la interfaz gráfica de administración',
        'Ambas empresas ofrecen exactamente el mismo producto',
      ],
      answer: 1,
    },

    // ── xDSL y Última Milla (sección 8) ──
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-14`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: '¿Cuál es la diferencia física fundamental entre el cobre y la fibra óptica como medios de transmisión?',
      opts: [
        'Ambos transmiten luz de la misma manera',
        'El cobre sufre resistencia óhmica y capacitancia parásita, actuando como un filtro paso-bajo que atenúa las frecuencias altas con la distancia; la fibra transmite mediante pulsos de luz e índices de refracción, siendo inmune a interferencias electromagnéticas y ofreciendo un ancho de banda masivo',
        'La fibra es más barata pero más lenta que el cobre',
        'El cobre no sufre ningún tipo de atenuación',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-15`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: 'La tecnología xDSL aprovecha el espectro inactivo del par trenzado de cobre mediante Multiplexación por División de Frecuencia (FDM). ¿Cómo se reparten las bandas?',
      opts: [
        'Todo el espectro se usa exclusivamente para voz',
        'POTS/voz: 0 a 4 kHz; Upstream (subida): 25.8 kHz a 138 kHz; Downstream (bajada): desde 138 kHz hasta 1.1 MHz en ADSL o 2.2 MHz en ADSL2+',
        'La voz y los datos comparten exactamente la misma frecuencia',
        'El upstream siempre usa más ancho de banda que el downstream',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-16`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: '¿En qué consiste el mecanismo de "Bit-Loading" en un módem xDSL?',
      opts: [
        'En cargar un archivo de configuración fijo cada vez que se enciende el módem',
        'El módem negocia canal por canal evaluando la relación señal a ruido (SNR), asignando hasta 15 bits por ciclo usando modulación QAM en los canales más limpios',
        'En repartir siempre la misma cantidad de bits sin importar el ruido',
        'En bloquear los canales con interferencia de forma permanente',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-17`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: '¿Cuál es la diferencia entre NEXT y FEXT, los dos tipos de diafonía (crosstalk) en cables de cobre?',
      opts: [
        'Son exactamente el mismo fenómeno con nombres distintos',
        'NEXT (Near-End Crosstalk): interferencia extrema en el extremo cercano de la transmisión; FEXT (Far-End Crosstalk): interferencia acumulativa en el extremo lejano de la línea de recepción',
        'NEXT solo ocurre en fibra óptica',
        'FEXT es causado por la atenuación, no por otros cables',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-18`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: '¿Cuál es la diferencia de enfoque entre las tecnologías asimétricas (ADSL/VDSL) y las simétricas (SHDSL)?',
      opts: [
        'Las asimétricas se enfocan en el segmento residencial (descarga mayor que subida, ideal para consumo de video/web); las simétricas se enfocan en el segmento corporativo y enlaces LAN-a-LAN, con la misma capacidad en subida y bajada',
        'Ambas ofrecen exactamente la misma velocidad en ambos sentidos',
        'Las simétricas son exclusivas para uso doméstico',
        'Las asimétricas no tienen ninguna limitación de alcance',
      ],
      answer: 0,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-19`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: 'Sobre SHDSL (tecnología simétrica corporativa): ¿qué modulación usa y cuál es su rango de rendimiento?',
      opts: [
        'Usa QAM exclusivamente y ofrece solo 56 kbps fijos',
        'Usa TC-PAM para optimizar la eficiencia espectral y reducir la diafonía NEXT; rinde desde 192 kbps hasta 2.3 Mbps por par (hasta 5.7 Mbps en SHDSL.bis), permitiendo agrupar hasta 4 pares (Bonding) para enlaces E1/PBX',
        'No permite agrupar múltiples pares de cobre',
        'Solo funciona sobre fibra óptica',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-20`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: 'El perfil 35b de VDSL2 (Supervectoring), ¿qué rango de espectro utiliza y qué velocidades alcanza a corta distancia?',
      opts: [
        'Expande el espectro hasta 35.3 MHz, logrando 300 Mbps de bajada y 100 Mbps de subida a distancias menores a 300 metros',
        'Usa solo hasta 4 kHz, igual que la voz',
        'Alcanza velocidades ilimitadas sin importar la distancia',
        'Solo funciona en distancias mayores a 5 km',
      ],
      answer: 0,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-21`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: '¿Cómo funciona el "Vectoring" (ITU-T G.993.5) para llevar el cobre a su límite absoluto?',
      opts: [
        'Aumenta físicamente el grosor del cable de cobre',
        'Un procesador central mide la diafonía FEXT en todo el mazo de cables y genera una señal de contrafase en tiempo real para cancelarla activamente (cancelación cuántica de ruido)',
        'Elimina por completo la necesidad de un DSLAM',
        'Convierte automáticamente el cobre en fibra óptica',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-22`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: '¿Qué caracteriza a G.fast, el "último escalón" del cobre?',
      opts: [
        'Opera en frecuencias muy bajas, menores a 1 MHz',
        'Opera sobre espectros masivos (106 MHz a 212 MHz) usando Duplexación por División de Tiempo (TDD), superando los 500 Mbps en tramos menores a 100 metros (FTTdp)',
        'Solo funciona con fibra óptica pura, sin nada de cobre',
        'Es más lento que ADSL clásico',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-23`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: 'En la "Anatomía de la Conexión Local" (última milla), ¿qué elementos conectan el hogar/oficina con la central del ISP?',
      opts: [
        'Solo un cable directo sin ningún dispositivo intermedio',
        'CPE/Módem (ATU-R) → Splitter pasivo → Bucle Local (par trenzado) → Splitter Central → DSLAM/ATU-C en la Central ISP, mientras el splitter también deriva la línea hacia la PSTN para la voz',
        'Un router 4G/5G LTE únicamente',
        'Una conexión satelital directa',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-24`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: '¿Cómo afecta PPPoE al MTU de una conexión DSL y qué problema puede causar si no se corrige?',
      opts: [
        'PPPoE no afecta el MTU en absoluto',
        'La cabecera PPPoE consume 8 bytes, reduciendo el MTU estándar de Ethernet de 1500 a 1492 bytes; si el router no ajusta el TCP MSS Clamping, los paquetes con el flag DF (Don\'t Fragment) se descartan, bloqueando la navegación HTTPS',
        'Aumenta el MTU a 9000 bytes automáticamente',
        'Solo afecta a la velocidad de subida, nunca a la navegación',
      ],
      answer: 1,
    },

    // ── Frame Relay y ATM (sección 9) ──
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-25`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[9],
      text: '¿Cuáles son las características principales de Frame Relay como arquitectura de conmutación WAN de Capa 2?',
      opts: [
        'Usa celdas fijas de 53 bytes',
        'Conmuta tramas de tamaño variable mediante el protocolo LAPF, descarta tramas con errores sin avisar (confiando la corrección a capas superiores, lo que lo hace más ágil que X.25) y utiliza DLCI (Data Link Connection Identifier) para establecer Circuitos Virtuales Permanentes (PVC)',
        'Requiere obligatoriamente fibra óptica',
        'No permite ningún tipo de circuito virtual',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-26`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[9],
      text: '¿Cómo está estructurada una celda ATM (Asynchronous Transfer Mode) y para qué fue diseñada originalmente?',
      opts: [
        'Es de tamaño variable, igual que Frame Relay',
        'Celda rígida de exactamente 53 bytes (5 bytes de cabecera + 48 bytes de carga útil), diseñada para la RDSI de Banda Ancha, permitiendo multiplexación TDM asíncrona predecible a nivel de hardware para mezclar voz, video y datos sin latencia',
        'Usa celdas de 1500 bytes como Ethernet',
        'Fue diseñada exclusivamente para tráfico de video, sin soportar voz ni datos',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-27`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[9],
      text: '¿Cuál es la diferencia clave entre Frame Relay y ATM en la forma en que empaquetan los datos?',
      opts: [
        'Frame Relay usa tramas de tamaño variable; ATM reemplazó esas tramas por celdas rígidas y minúsculas de tamaño fijo (53 bytes), pensadas para mezclar voz, video y datos con predictibilidad',
        'Ambos usan exactamente el mismo tamaño de paquete',
        'ATM usa tramas variables y Frame Relay usa celdas fijas',
        'Ninguno de los dos divide los datos en unidades más pequeñas',
      ],
      answer: 0,
    },

    // ── SD-WAN Avanzado (sección 10) ──
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-28`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[10],
      text: 'Según la Matriz de Decisión MPLS vs. SD-WAN, ¿cómo se diferencian en Arquitectura?',
      opts: [
        'Ambas están basadas exclusivamente en software',
        'MPLS: enrutamiento manual, topología dedicada subyacente, basado en hardware. SD-WAN: overlay virtual, enrutamiento dinámico sobre cualquier enlace físico, basado en software',
        'MPLS es overlay virtual y SD-WAN es hardware dedicado',
        'No existe ninguna diferencia arquitectónica entre ambas',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-29`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[10],
      text: 'Según la Matriz de Decisión MPLS vs. SD-WAN, ¿cómo se diferencian en Rendimiento y en Gestión/Costo?',
      opts: [
        'Rendimiento: MPLS ofrece QoS garantizada de extremo a extremo con menor latencia y alta predictibilidad; SD-WAN depende de las conexiones públicas subyacentes pero optimiza y reconstruye paquetes para mitigar caídas. Gestión/Costo: MPLS es lento de escalar (semanas por sede) con costo operativo prohibitivo; SD-WAN permite despliegue rápido Zero-Touch con gestión centralizada y drástica reducción de costos',
        'Ambas tienen exactamente el mismo rendimiento y costo',
        'SD-WAN siempre es más lento de escalar que MPLS',
        'MPLS tiene menor costo operativo que SD-WAN',
      ],
      answer: 0,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-30`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[10],
      text: '¿Qué ocurre en la "Agilidad Dinámica" de SD-WAN cuando la línea MPLS principal sufre una caída?',
      opts: [
        'La empresa pierde toda la conectividad hasta que un técnico repare la línea',
        'El software SD-WAN detecta la falla en milisegundos e inyecta instantáneamente el tráfico crítico en enlaces alternativos (ej: VDSL2 o 4G LTE), reconstruyendo paquetes perdidos en tránsito mediante Forward Error Correction (FEC) para garantizar continuidad total sin cortes en la sesión',
        'El tráfico se descarta permanentemente sin ningún tipo de respaldo',
        'Se necesita reiniciar manualmente todos los routers de la sucursal',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-31`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[10],
      text: 'En el "Viaje del Dato" de arquitectura end-to-end (Origen → Última Milla → Agregación ISP → Red WAN → Destino), ¿qué ocurre en cada etapa?',
      opts: [
        'Todas las etapas realizan exactamente la misma función',
        'Origen (LAN del usuario) → Última Milla (Capa 1/2: modulación VDSL2 con vectoring cancelando el crosstalk) → Agregación ISP (DSLAM, MTU 1492 condicionado por cabecera PPPoE) → Red WAN (Capa 3/Overlay: orquestación dinámica sobre enlaces MPLS e Internet Público) → Destino (Cloud/Datacenter)',
        'El dato viaja directo del usuario a la nube sin pasar por ningún equipo intermedio',
        'La última milla ocurre después de la Red WAN',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-32`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[10],
      text: 'Según la conclusión "De la Física al Software", ¿cómo se resume la diferencia entre el dominio físico (xDSL) y el dominio lógico (SD-WAN)?',
      opts: [
        'Ambos dominios son idénticos y cumplen la misma función',
        'El dominio físico (xDSL) llevó al cobre a su límite termodinámico mediante modulaciones complejas y cancelación de ruido (Vectoring); el dominio lógico (SD-WAN) asume que la capa física eventualmente fallará, usando inteligencia centralizada por software para enrutar, proteger y orquestar servicios ininterrumpidos de forma agnóstica al medio físico',
        'El dominio lógico reemplazó por completo la necesidad de cualquier medio físico',
        'El dominio físico ya no se usa en ninguna red moderna',
      ],
      answer: 1,
    },
  ];

  // Registro idempotente de materia
  if (!SUBJECTS[CONFIG.subject_key]) {
    SUBJECTS[CONFIG.subject_key] = {
      key: CONFIG.subject_key,
      icon: CONFIG.icon,
      label: CONFIG.label,
      badge: CONFIG.badge,
      subtitle: CONFIG.subtitle,
      temas: CONFIG.temas,
      temaLabels: CONFIG.temaLabels,
      secciones: CONFIG.secciones,
      exams: {},
    };
  }

  // Registro del examen
  SUBJECTS[CONFIG.subject_key].exams[CONFIG.exam_key] = {
    key: CONFIG.exam_key,
    label: CONFIG.exam_label,
    questions: REDES_PARCIAL2_QUESTIONS,
  };
})();