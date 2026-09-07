// ═══════════════════════════════════════════════════════════════════════════
// 📋 CONTRATO — Archivo examen AUTO-CONTENIDO
// Este .js se carga DESPUÉS de data.js (que define SUBJECTS={}) y ANTES de logic.js.
// Para reutilizar este template, el archivo DEBE cumplir:
//
// ▸ 1) CONSTANTES DE PREGUNTAS:
//      const <PREFIJO>_<EXAM>_QUESTIONS = [ {id,tema,seccion,text,opts,answer}, ... ]
//      - id: string único (global) con prefijo de la materia (ej. 'inv1-1').
//      - tema: valor incluido en temas de la materia (empieza por 'TODOS').
//      - seccion: valor incluido en secciones (si no null; 'TODAS' es la de 'todos').
//      - opts: array de EXACTAMENTE 4 strings.
//      - answer: índice entero (0..3) dentro de opts de la opción correcta.
//
// ▸ 2) META DE LA MATERIA — Registro IDEMPOTENTE (solo se define si no existía):
//      if (!SUBJECTS.<clave>) { SUBJECTS.<clave> = {
//        key:'<clave>',        // = nombre de la carpeta; selectSubject('<clave>')
//        icon:'<emoji>', label:'<Materia>', badge:'<BADGE · ÁREA>',
//        subtitle:'...', temas:['TODOS',...], temaLabels:{},
//        secciones:['TODAS', <sec1>, <sec2>, ...] | null,  // null = sin filtro de sección
//        exams: {} }; }
//      → El PRIMER examen de una materia define la materia; los siguientes
//        omiten este bloque (no pisan los exámenes ya registrados).
//
// ▸ 3) REGISTRO DEL EXAMEN:
//      SUBJECTS.<clave>.exams.<exam> = { key:'<exam>', label:'...', questions: <CONST>_QUESTIONS };
//      <exam> es la clave usada por selectExam('<exam>').
//
// ▸ 4) CLAVES DE index.html (NO usar bundle ni comandos; son <script> estáticos sincrónicos):
//      <script src='data.js'></script>
//      <script src='materias/<materia>/<examen>.js'></script>  ← este archivo (y los demás exámenes)
//      <script src='logic.js'></script>        ← siempre AL FINAL
//      Regla: el primer examen de una materia va ANTES que los demás de la misma.
//
// ▸ 5) REGLAS DE ORO:
//      - 'clave' de la materia = nombre de la carpeta (ej. 'investigacion').
//      - temas siempre empieza con 'TODOS'; secciones empieza con 'TODAS' (o null).
//      - Cada pregunta: opts.length === 4 y answer ∈ {0,1,2,3}.
//      - ids únicos en TODOS los exámenes de TODAS las materias.
// ═══════════════════════════════════════════════════════════════════════════
// ── EXAMEN: Parcial 3 — Redes de Computadoras II ──
// Archivo AUTOCONTENIDO: está integrado el meta de la materia, por lo que este
// único .js define la materia (si no existía) y registra este examen en SUBJECTS.
// Basta cargar este archivo (después de data.js) y la materia queda disponible.
// Si la materia ya fue registrada por otro examen, el bloque del meta se omite
// (registro idempotente) y aquí solo se agrega este examen.

// IIFE: cuerpo aislado — consts locales (reutilizable: se pueden reusar los mismos nombres de constante sin colisionar).
(function () {
"use strict";
const REDES_PARCIAL3_QUESTIONS = [
  {
    "id": "rp3-1",
    "tema": "TEMA I",
    "seccion": "Modelo OSI",
    "text": "Si un mensaje HTTP viaja de tu navegador a un servidor web, ¿en qué capas del OSI se encapsulan capas de datos distintas (desde la aplicación hasta la física)?",
    "opts": [
      "Solo en la Capa 7 (Aplicación), porque HTTP ya es suficiente",
      "En las capas 5, 6 y 7, que son las que manejan el software",
      "En todas las capas: la capa 7 agrega cabecera HTTP, la 4 agrega TCP/UDP, la 3 agrega IP, la 2 agrega trama Ethernet y la 1 convierte todo en bits por el cable (ej: cada capa \"mete\" su propia etiqueta como una cebolla)",
      "Solo en la Capa 1, que es donde realmente viajan los bits"
    ],
    "answer": 2
  },
  {
    "id": "rp3-2",
    "tema": "TEMA I",
    "seccion": "Modelo OSI",
    "text": "¿Qué capa del OSI es responsable de la traducción de datos entre dos sistemas con codificaciones diferentes (por ejemplo, convertir minúsculas a mayúsculas)?",
    "opts": [
      "Capa 4 (Transporte)",
      "Capa 5 (Sesión)",
      "Capa 6 (Presentación): se encarga del formato, compresión y cifrado de los datos entre el origen y el destino (ej: que un PDF se vea igual en Windows y Mac)",
      "Capa 7 (Aplicación)"
    ],
    "answer": 2
  },
  {
    "id": "rp3-3",
    "tema": "TEMA I",
    "seccion": "Modelo OSI",
    "text": "¿Cuál es la principal diferencia entre el modelo OSI y el modelo TCP/IP?",
    "opts": [
      "OSI es más rápido que TCP/IP",
      "OSI es un modelo teórico de 7 capas; TCP/IP es el modelo práctico de 4 capas que realmente usa Internet (ej: OSI es el \"libro de texto\", TCP/IP es el coche que realmente conduce)",
      "TCP/IP no admite capas",
      "OSI solo funciona en redes inalámbricas"
    ],
    "answer": 1
  },
  {
    "id": "rp3-4",
    "tema": "TEMA I",
    "seccion": "Modelo OSI",
    "text": "¿Qué protocolo pertenece a la Capa 5 (Sesión) del modelo OSI?",
    "opts": [
      "HTTP",
      "FTP",
      "NetBIOS: gestiona cuándo y cómo se abre y cierra una sesión entre dos aplicaciones (ej: mantener viva tu sesión en Zoom mientras hablas)",
      "TCP"
    ],
    "answer": 2
  },
  {
    "id": "rp3-5",
    "tema": "TEMA I",
    "seccion": "Capas 2 y 3",
    "text": "¿Qué dirección se usa para entregar un paquete solo a un dispositivo específico dentro de tu red local, y cuál para entregarlo a todos a la vez?",
    "opts": [
      "MAC para un dispositivo; IP para todos los dispositivos",
      "IP unicast para un dispositivo; MAC broadcast para todos (ej: mandar un email a Ana es unicast; anunciar \"¡actualiza mi IP!\" a toda la oficina es broadcast)",
      "TCP para un dispositivo; UDP para todos",
      "DHCP para un dispositivo; DNS para todos"
    ],
    "answer": 1
  },
  {
    "id": "rp3-6",
    "tema": "TEMA I",
    "seccion": "Capas 2 y 3",
    "text": "Un Switch recibe una trama cuya dirección MAC de destino no está en su tabla CAM. ¿Qué hace?",
    "opts": [
      "La descarta inmediatamente",
      "La reenvía a todos los puertos excepto al que la recibió (ej: como si gritaras en una sala y todos excepto tú escuchan; el destino correcto la recibe y lo demás la ignora)",
      "La envía al router",
      "La modifica para cambiar la MAC de destino"
    ],
    "answer": 1
  },
  {
    "id": "rp3-7",
    "tema": "TEMA I",
    "seccion": "Capas 2 y 3",
    "text": "¿Qué campo de la cabecera IP indica cuántos saltos (routers) puede dar un paquete antes de ser descartado?",
    "opts": [
      "TTL (Time To Live): cada router le resta 1; si llega a 0, descarta el paquete y avisa (ej: evita que un paquete dado vuelva en círculo para siempre)",
      "Protocol",
      "Checksum",
      "ToS (Type of Service)"
    ],
    "answer": 0
  },
  {
    "id": "rp3-8",
    "tema": "TEMA I",
    "seccion": "Capas 2 y 3",
    "text": "En enrutamiento, ¿qué diferencia hay entre un camino estático y uno dinámico?",
    "opts": [
      "El estático es más rápido por hardware; el dinámico es más lento por software",
      "El estático se configura a mano una vez; el dinámico se aprende automáticamente compartiendo información con otros routers (ej: estático es como una ruta fija en Google Maps; dinámico es como que todos los drivers compartan quécese atascos en tiempo real)",
      "El estático no funciona con IPv4",
      "El dinámico siempre es más seguro"
    ],
    "answer": 1
  },
  {
    "id": "rp3-9",
    "tema": "TEMA I",
    "seccion": "Protocolos de Transporte",
    "text": "En la Capa de Transporte, ¿qué proporciona UDP pero no TCP?",
    "opts": [
      "Reenvío con acknowledgements",
      "Número de secuencia para ordenar paquetes",
      "Reducción de cabecera (8 bytes) y sin establecimiento de conexión previo (ej: vocecito rápido por walkie-talkie sin confirmar si escuchaste)",
      "Control de congestión"
    ],
    "answer": 2
  },
  {
    "id": "rp3-10",
    "tema": "TEMA I",
    "seccion": "Protocolos de Transporte",
    "text": "Durante el handshake de TCP, ¿qué paquetes se intercambian para iniciar una conexión?",
    "opts": [
      "UNO, DOS, TRES: SYN, SYN-ACK, ACK (ej: \"¿Puedo entrar?\" → \"¡Sí, puedes!\" → \"¡Gracias, entré!\")",
      "UNO, DOS, TRES: SYN, ACK, FIN",
      "UNO, DOS: SYN, SYN-ACK",
      "UNO, DOS: ACK, FIN"
    ],
    "answer": 0
  },
  {
    "id": "rp3-11",
    "tema": "TEMA I",
    "seccion": "Protocolos de Transporte",
    "text": "¿Cuál es la ventaja principal del control de congestión en TCP?",
    "opts": [
      "Hace que TCP sea más rápido que UDP siempre",
      "Evita que un remitente abrumpe a la red con demasiados datos de golpe, reduciendo pérdidas y retransmisiones (ej: como un conductor que frena si ve que la autopista se llena, en vez de seguir a toda velocidad y causar un choque)",
      "Permite usar UDP cuando la red está lenta",
      "Encripta los datos del paquete"
    ],
    "answer": 1
  },
  {
    "id": "rp3-12",
    "tema": "TEMA I",
    "seccion": "Protocolos de Transporte",
    "text": "¿Qué protocolo usarías para una aplicación que necesita orden garantizado, recuperación de errores y flujo de control, como una descarga de archivo importante?",
    "opts": [
      "UDP, porque es más rápido",
      "TCP, porque es orientado a conexión y confiable (ej: para una descarga de 2 GB cada byte debe llegar correcto, en orden, y si falta se reenvía)",
      "ICMP, porque reporta errores",
      "HTTP, porque sirve para descargar"
    ],
    "answer": 1
  },
  {
    "id": "rp3-13",
    "tema": "TEMA I",
    "seccion": "Direccionamiento IPv4",
    "text": "¿Cuántos hosts utilizables hay en una red 172.16.0.0/16?",
    "opts": [
      "254 hosts (172.16.0.1 a 172.16.0.254)",
      "65534 hosts (172.16.0.1 a 172.16.255.254, restando red y broadcast) (ej: con /16 tienes 2^16 direcciones, menos 2)",
      "65536 hosts (todos los 2^16, incluido red y broadcast)",
      "128 hosts (172.16.0.0 a 172.16.0.127)"
    ],
    "answer": 1
  },
  {
    "id": "rp3-14",
    "tema": "TEMA I",
    "seccion": "Direccionamiento IPv4",
    "text": "¿Qué clase de dirección es 10.0.0.1 según el esquema de clases original de IPv4?",
    "opts": [
      "Clase B (172.16.0.0 - 172.31.255.255) (ej: redes corporativas medianas)",
      "Clase C (192.168.0.0 - 255.255.255) (ej: redes domésticas)",
      "Clase A (10.0.0.0 - 10.255.255.255) (ej: redes muy grandes, como la de una multinacional)",
      "Clase D (224.0.0.0 - 239.255.255.255) (ej: multicast)"
    ],
    "answer": 2
  },
  {
    "id": "rp3-15",
    "tema": "TEMA I",
    "seccion": "Direccionamiento IPv4",
    "text": "¿Qué es NAT y cuál es su principal beneficio?",
    "opts": [
      "Un protocolo de encriptación; su beneficio es la seguridad",
      "Traducir puertos a direcciones MAC; beneficio: evitar colisiones de nombre",
      "Traducciones de direcciones IP privadas a públicas (ej: mil dispositivos usan 192.168.1.x detrás de un router, pero Internet solo ve una IP pública), beneficio: ahorrar IPs públicas",
      "Un método para acelerar el DHCP"
    ],
    "answer": 2
  },
  {
    "id": "rp3-16",
    "tema": "TEMA I",
    "seccion": "Direccionamiento IPv4",
    "text": "¿Qué protocolo asigna dinámicamente direcciones IP, máscaras, puerta de enlace y DNS a los dispositivos de una red?",
    "opts": [
      "DNS",
      "DHCP: cuando enciendes tu laptop en una cafetería, el router te da una IP automáticamente (ej: el camarero te da una mesa asignada sin que preguntes)",
      "ARP",
      "ICMP"
    ],
    "answer": 1
  },
  {
    "id": "rp3-17",
    "tema": "TEMA I",
    "seccion": "Infraestructura",
    "text": "¿En qué consiste el puente de capa (layer) en el contexto de redes modernas?",
    "opts": [
      "Un puente físico entre dos edificios",
      "El proceso de conectar la red local (layer 2) con redes externas (layer 3) dentro del mismo dispositivo (ej: un switch multicapa que aprende MACs y también hace routing entre VLANs)",
      "El nombre que se da al cable de fibra óptica",
      "Un tipo de antenna WiFi"
    ],
    "answer": 1
  },
  {
    "id": "rp3-18",
    "tema": "TEMA I",
    "seccion": "Infraestructura",
    "text": "¿Qué resuelve una VLAN y cómo se diferencia de una red física plana?",
    "opts": [
      "Resuelve el ancho de banda; diferencia: las VLANs son más rápidas",
      "Resuelve segmentación lógica; diferencia: en una red plana todos hablan broadcast entre sí, en VLANs se divide en dominios de broadcast independientes (ej: en una oficina, finanzas y marketing no se escuchan mutuamente sin pasar por un router)",
      "Resuelve el WiFi; diferencia: las VLANs son solo inalámbricas",
      "No resuelve nada; las VLANs son solo un nombre bonito"
    ],
    "answer": 1
  },
  {
    "id": "rp3-19",
    "tema": "TEMA I",
    "seccion": "MPLS y SD-WAN",
    "text": "En una red con etiquetas MPLS, ¿por qué el reenvío es tan rápido comparado con el enrutamiento tradicional basado en busca de tabla IP larga?",
    "opts": [
      "Porque usa fibra óptica dedicada",
      "Porque el router solo compara una etiqueta corta (label) en lugar de buscar la IP completa, y puede usar hardware especializado (ej: como si en vez de leer toda la placa de una casa buscaras el número de casa, solo lees el código postal pegado en la puerta)",
      "Porque elimina la capa IP por completo",
      "Porque usa conexiones punto a punto permanentes"
    ],
    "answer": 1
  },
  {
    "id": "rp3-20",
    "tema": "TEMA I",
    "seccion": "MPLS y SD-WAN",
    "text": "¿Cuál es el orden típico de colores (clases) en la tabla de etiquetas de un proveedor MPLS?",
    "opts": [
      "Local, Spokane, Provider Edge",
      "Customer Edge, Provider, Provider Edge: el proveedor asigna etiquetas internas y el cliente mantiene la suya",
      "Provider Edge (PE), Provider (P), Customer Edge (CE): el cliente etiqueta su tráfico, el PE lo recibe y lo introduce en la red con su propia etiqueta, los routers internos (P) reenvían solo por etiqueta (ej: como un sobre con \"cliente\" que entra al correo y se le pega un sello interno)",
      "No hay colores; MPLS no usa etiquetas"
    ],
    "answer": 2
  },
  {
    "id": "rp3-21",
    "tema": "TEMA I",
    "seccion": "MPLS y SD-WAN",
    "text": "En SD-WAN, ¿qué componente decide por qué enlace (MPLS, Internet, LTE) sale cada flujo de datos?",
    "opts": [
      "El switch de capa 2, que lee la MAC",
      "El router físico, que sortea paquetes al azar",
      "El plano de control centralizado (el \"cerebro\"): aplica políticas de seguridad, costo y calidad para elegir el mejor enlace por flujo (ej: Zoom por MPLS por calidad, descargas por Internet por bajo costo)",
      "El DNS, que resuelve el nombre del destino"
    ],
    "answer": 2
  },
  {
    "id": "rp3-22",
    "tema": "TEMA I",
    "seccion": "MPLS y SD-WAN",
    "text": "Una empresa quiere reducir costos de conectividad entre sucursales reemplazando parte de su enlace MPLS por Internet. ¿por qué SD-WAN ayuda a hacer esto de forma segura?",
    "opts": [
      "SD-WAN comprime el tráfico MPLS hasta desaparecer",
      "SD-WAN cifra los flujos críticos sobre Internet (IPsec) y reserva MPLS solo para tráfico sensible, manteniendo calidad y seguridad (ej: emails por Internet cifrada, voz por MPLS)",
      "SD-WAN elimina necesidad de Internet y usa solo LTE",
      "SD-WAN duplica el ancho de banda de MPLS"
    ],
    "answer": 1
  },
  {
    "id": "rp3-23",
    "tema": "TEMA I",
    "seccion": "Arquitectura Moderna",
    "text": "En la nube y centros de datos, ¿qué patrón de diseño separa el plano de control (decisiones) del plano de datos (tráfico)?",
    "opts": [
      "NAT",
      "DHCP",
      "Arquitectura de separación controlo-datos (ej: en Software Defined Networking, un controlador central (OpenFlow) programa switches que solo reenvían paquetes, como un cerebro que dice a las manos qué mover)",
      "ARP"
    ],
    "answer": 2
  },
  {
    "id": "rp3-24",
    "tema": "TEMA I",
    "seccion": "Arquitectura Moderna",
    "text": "¿Qué problema de la topología en estrella con hubs compartidos resuelve un switch gestionado con enlaces troncales (trunk) y VLANs?",
    "opts": [
      "Resuelve el ancho de banda limitado del hub al permitir múltiples enlaces dedicados y trunking para transportar varias VLANs (etiquetadas con 802.1Q) sobre un solo cable (ej: un switch gestionado puede enviar tráfico de finanzas y marketing por el mismo cable pero separados)",
      "Resuelve el problema del WiFi sin antena",
      "Resuelve el DNS distribuido",
      "No resuelve nada; los hubs son suficientes"
    ],
    "answer": 0
  },
  {
    "id": "rp3-25",
    "tema": "TEMA I",
    "seccion": "Arquitectura Moderna",
    "text": "¿Cuál es la ventaja clave de usar un controlador inalámbrico (WLAN controller) en una red WiFi empresarial?",
    "opts": [
      "Hace que las antennas sean innecesarias",
      "Centraliza la gestión de APs: roameo sin interrupciones, políticas de seguridad uniformes y optimización de canales (ej: al caminar por la oficina tu laptop pasa de un AP a otro sin caer la llamada WiFi)",
      "Reduce el número de dispositivos a la mitad",
      "Convierte todo el WiFi en red privada sin encriptación"
    ],
    "answer": 1
  }
];

// ── Metadatos de la materia (auto-registro idempotente) ──
// Meta integrado en este archivo: define la materia solo si aún no existe.
if (!SUBJECTS.redes) {
  SUBJECTS.redes = {
    "key": "redes",
    "icon": "🌐",
    "label": "Redes de Computadoras II",
    "badge": "REDES · INFORMÁTICA",
    "subtitle": "Examen Interactivo — Redes de Computadoras II: Conceptos Fundamentales",
    "temas": [
      "TODOS",
      "TEMA I"
    ],
    "temaLabels": {
      "TEMA I": "TEMA I: Redes de Computadoras II"
    },
    "secciones": [
      "TODAS",
      "Modelo OSI",
      "Capas 2 y 3",
      "Protocolos de Transporte",
      "Direccionamiento IPv4",
      "Infraestructura",
      "MPLS y SD-WAN",
      "Arquitectura Moderna"
    ],
    "exams": {}
  };
}

// ── Registro del examen en SUBJECTS (auto-registro) ──
SUBJECTS.redes.exams.parcial3 = {
  key: 'parcial3',
  label: "Parcial 3",
  questions: REDES_PARCIAL3_QUESTIONS,
};

})();
