// ── MATERIA: REDES DE COMPUTADORAS II ──
// Generado a partir de "Redes de Computadoras II: Conceptos Fundamentales"
const REDES_TEMAS = ['TODOS', 'TEMA I'];
const REDES_SECCIONES = [
  'TODAS',
  'Modelo OSI',
  'Capas 2 y 3',
  'Protocolos de Transporte',
  'Direccionamiento IPv4',
  'Infraestructura',
  'MPLS y SD-WAN',
  'Arquitectura Moderna',
];

const REDES_QUESTIONS = [
  // ── Modelo OSI ──
  {
    id: 'redes1',
    tema: 'TEMA I',
    seccion: 'Modelo OSI',
    text: '¿Cuál es el propósito principal del Modelo OSI?',
    opts: [
      'Hacer Internet más rápido',
      'Organizar la comunicación en 7 capas para que diferentes tecnologías hablen el mismo idioma (ej: Ethernet y WiFi funcionen juntas)',
      'Reemplazar protocolos antiguos',
      'Proteger contra hackers'
    ],
    answer: 1,
  },
  {
    id: 'redes2',
    tema: 'TEMA I',
    seccion: 'Modelo OSI',
    text: '¿Qué capa del Modelo OSI maneja la transmisión física de bits?',
    opts: [
      'Capa 2 (Enlace de Datos)',
      'Capa 1 (Física): transmisión de bits, señales, cables, conectores (ej: tu cable Ethernet)',
      'Capa 3 (Red)',
      'Capa 4 (Transporte)'
    ],
    answer: 1,
  },
  {
    id: 'redes3',
    tema: 'TEMA I',
    seccion: 'Modelo OSI',
    text: '¿Cuál es la función de la Capa 4 (Transporte)?',
    opts: [
      'Transmitir bits por cables',
      'Determinar rutas entre redes',
      'Garantizar entrega ordenada y completa usando TCP/UDP (ej: TCP para descargas, UDP para videojuegos en tiempo real)',
      'Detectar colisiones en red'
    ],
    answer: 2,
  },
  {
    id: 'redes4',
    tema: 'TEMA I',
    seccion: 'Modelo OSI',
    text: '¿Qué capa del OSI define cómo se ven los datos en la pantalla?',
    opts: [
      'Capa 3 (Red)',
      'Capa 4 (Transporte)',
      'Capa 6 (Presentación): formato y cifrado de datos (ej: cómo se ve un PDF en tu navegador)',
      'Capa 7 (Aplicación)'
    ],
    answer: 2,
  },

  // ── Capas 2 y 3 ──
  {
    id: 'redes5',
    tema: 'TEMA I',
    seccion: 'Capas 2 y 3',
    text: '¿Cuál es la función principal de un Switch?',
    opts: [
      'Conectar redes diferentes a Internet',
      'Aprender direcciones MAC y conmutar tramas dentro de una LAN local (ej: conectar tu PC con la impresora de oficina)',
      'Traducir IPs a direcciones MAC',
      'Encriptar datos entre edificios'
    ],
    answer: 1,
  },
  {
    id: 'redes6',
    tema: 'TEMA I',
    seccion: 'Capas 2 y 3',
    text: '¿Cuál es la función principal de un Router?',
    opts: [
      'Conectar dispositivos en la misma red',
      'Seleccionar rutas óptimas usando direcciones IP para conectar redes diferentes (ej: tu oficina con otra ciudad)',
      'Amplificar señales WiFi',
      'Almacenar direcciones MAC'
    ],
    answer: 1,
  },
  {
    id: 'redes7',
    tema: 'TEMA I',
    seccion: 'Capas 2 y 3',
    text: '¿Qué identifica un dispositivo en la Capa 2?',
    opts: [
      'La dirección IP del dispositivo',
      'La dirección MAC del dispositivo: formato físico de la tarjeta de red (ej: 00:1A:2B:3C:4D:5E)',
      'El número de puerto del dispositivo',
      'El nombre de host del dispositivo'
    ],
    answer: 1,
  },
  {
    id: 'redes8',
    tema: 'TEMA I',
    seccion: 'Capas 2 y 3',
    text: '¿Qué identifica un dispositivo en la Capa 3?',
    opts: [
      'La dirección MAC física',
      'La dirección IP lógica: identifica ubicación en la red (ej: 192.168.1.25)',
      'El puerto del Switch',
      'El nombre de la computadora'
    ],
    answer: 1,
  },

  // ── Protocolos de Transporte ──
  {
    id: 'redes9',
    tema: 'TEMA I',
    seccion: 'Protocolos de Transporte',
    text: '¿Cuál es la característica principal de TCP?',
    opts: [
      'Es muy rápido pero no garantiza entrega',
      'Orientado a conexión, confiable, garantiza orden de entrega (ej: cuando descargas un archivo, cada bit debe llegar correcto)',
      'No necesita establecer conexión previa',
      'Se usa solo para juegos en línea'
    ],
    answer: 1,
  },
  {
    id: 'redes10',
    tema: 'TEMA I',
    seccion: 'Protocolos de Transporte',
    text: '¿Cuál es la característica principal de UDP?',
    opts: [
      'Garantiza entrega de todos los paquetes',
      'Sin conexión, no confiable, rápido (ej: videojuegos, videollamadas donde un paquete perdido no arruina todo)',
      'Más seguro que TCP',
      'Se usa solo para email'
    ],
    answer: 1,
  },
  {
    id: 'redes11',
    tema: 'TEMA I',
    seccion: 'Protocolos de Transporte',
    text: '¿Cuándo usarías TCP?',
    opts: [
      'Para transmitir video en vivo',
      'Para un videojuego competitivo',
      'Para transferencia de archivos bancarios donde cada dato debe llegar perfecto (ej: descargar dinero de tu cuenta)',
      'Para streaming de música'
    ],
    answer: 2,
  },
  {
    id: 'redes12',
    tema: 'TEMA I',
    seccion: 'Protocolos de Transporte',
    text: '¿Cuándo usarías UDP?',
    opts: [
      'Para transferir archivos críticos',
      'Para videollamada en WhatsApp donde algunos frames perdidos no arruinan la comunicación (velocidad importa más que perfección)',
      'Para transacciones de banco',
      'Para email'
    ],
    answer: 1,
  },

  // ── Direccionamiento IPv4 ──
  {
    id: 'redes13',
    tema: 'TEMA I',
    seccion: 'Direccionamiento IPv4',
    text: '¿Cuál es la estructura de una dirección IPv4?',
    opts: [
      'Es un código hexadecimal de 48 bits',
      '32 bits divididos en 4 octetos (ej: 192.168.1.25 donde cada número va de 0-255)',
      '64 bits divididos en 8 secciones',
      'Un código alfabético variable'
    ],
    answer: 1,
  },
  {
    id: 'redes14',
    tema: 'TEMA I',
    seccion: 'Direccionamiento IPv4',
    text: '¿Qué es la máscara de subred /24?',
    opts: [
      'Un número aleatorio de seguridad',
      'Define cuáles bits son RED (24 bits) y cuáles son HOST (8 bits), ej: 192.168.1.0/24 permite 254 dispositivos (de .1 a .254)',
      'Un protocolo de encriptación',
      'Una regla de firewall'
    ],
    answer: 1,
  },
  {
    id: 'redes15',
    tema: 'TEMA I',
    seccion: 'Direccionamiento IPv4',
    text: '¿Cuál es la dirección de RED en 192.168.1.25/24?',
    opts: [
      '192.168.1.25',
      '192.168.1.0 (todos los bits de host a 0)',
      '192.168.1.254',
      '192.168.0.0'
    ],
    answer: 1,
  },
  {
    id: 'redes16',
    tema: 'TEMA I',
    seccion: 'Direccionamiento IPv4',
    text: '¿Cuál es la dirección de BROADCAST en 192.168.1.0/24?',
    opts: [
      '192.168.1.1',
      '192.168.1.0',
      '192.168.1.255 (todos los bits de host a 1, usada para hablar con TODOS simultáneamente)',
      '192.168.2.0'
    ],
    answer: 2,
  },

  // ── Infraestructura ──
  {
    id: 'redes17',
    tema: 'TEMA I',
    seccion: 'Infraestructura',
    text: '¿En qué se diferencia conmutación local de enrutamiento global?',
    opts: [
      'Son exactamente lo mismo',
      'Conmutación local: tráfico dentro de la misma LAN usando direcciones físicas (MAC); Enrutamiento global: tráfico entre redes diferentes usando direcciones lógicas (IP)',
      'El enrutamiento es más lento',
      'La conmutación solo funciona en WiFi'
    ],
    answer: 1,
  },
  {
    id: 'redes18',
    tema: 'TEMA I',
    seccion: 'Infraestructura',
    text: '¿Qué es MPLS?',
    opts: [
      'Un tipo de cable de red',
      'Un protocolo que añade etiquetas a paquetes para enrutamiento ultra-rápido y garantizado en redes de operadores (ej: llamadas de video entre ciudades sin perder calidad)',
      'Un estándar de WiFi',
      'Un firewall de seguridad'
    ],
    answer: 1,
  },

  // ── SD-WAN ──
  {
    id: 'redes19',
    tema: 'TEMA I',
    seccion: 'Arquitectura Moderna',
    text: '¿Qué diferencia hay entre MPLS y SD-WAN?',
    opts: [
      'Son lo mismo',
      'MPLS es hardware rígido y costoso; SD-WAN separa el "cerebro" (software) del "músculo" (infraestructura física), permitiendo controlar redes desde software de forma ágil y económica',
      'SD-WAN es más lento',
      'MPLS solo funciona en la nube'
    ],
    answer: 1,
  },
  {
    id: 'redes20',
    tema: 'TEMA I',
    seccion: 'Arquitectura Moderna',
    text: '¿Cuál es el concepto clave de SD-WAN?',
    opts: [
      'Usar solo conexiones de cable',
      'Separar el control (cerebro: decisiones de software) del plano de datos (músculo: donde viajan los datos), haciendo la red programable y centralizada',
      'Eliminar completamente los routers',
      'Reemplazar Internet con MPLS'
    ],
    answer: 1,
  },
  {
    id: 'redes21',
    tema: 'TEMA I',
    seccion: 'Arquitectura Moderna',
    text: '¿Cuál es una ventaja del enfoque SD-WAN?',
    opts: [
      'Requiere más personal técnico',
      'Conectar sucursales a la nube directamente sin pasar por el datacenter central, economizando costos y mejorando velocidad (ej: tu oficina en Quito accede a YouTube directo, no va a Madrid primero)',
      'Aumenta el número de paquetes perdidos',
      'Reduce la seguridad de los datos'
    ],
    answer: 1,
  },
  {
    id: 'redes22',
    tema: 'TEMA I',
    seccion: 'Arquitectura Moderna',
    text: '¿Qué es Cisco Viptela?',
    texto_2: '¿Qué es Fortinet FortiGate?',
    text: '¿Cuál es la diferencia entre Cisco Viptela y Fortinet FortiGate?',
    opts: [
      'Cisco enfatiza conectividad escalable; Fortinet enfatiza seguridad unificada en el borde (ej: Cisco es mejor para multinacionales con muchas oficinas, Fortinet para quien quiere seguridad integrada en el firewall)',
      'Son exactamente iguales',
      'Fortinet solo funciona en la nube',
      'Cisco solo para pequeñas empresas'
    ],
    answer: 0,
  },
];