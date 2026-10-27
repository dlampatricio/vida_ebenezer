export const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Preguntas', href: '#preguntas' },
  { label: 'Contacto', href: '#contacto' },
];

export const SERVICES = [
  {
    title: 'Bodas',
    slug: 'bodas',
    subtitle: 'Ceremonias y recepciones atemporales',
    desc: 'Desde ceremonias íntimas en jardín hasta grandes recepciones de salón, creamos instalaciones florales, arreglos con velas y mesas que se convierten en el escenario de su para siempre.',
    img: '/wedding.webp',
  },
  {
    title: 'Cumpleaños',
    slug: 'cumpleanos',
    subtitle: 'Celebraciones dignas de recordar',
    desc: 'Los cumpleaños importantes merecen escenarios extraordinarios. Diseñamos arcos de globos inmersivos, muros florales y mesas personalizadas que reflejan quiénes son ustedes.',
    img: '/pink_quinceanera.webp',
  },
  {
    title: 'Eventos & Galas',
    slug: 'eventos-galas',
    subtitle: 'Ocasiones corporativas y sociales',
    desc: 'Lanzamientos de producto, galas benéficas, cenas de aniversario: traducimos la identidad de la marca y la historia personal en experiencias espaciales que sus invitados no olvidarán.',
    img: 'green_centerpiece.webp',
  },
];

export const PALETTE = [
  { name: 'Marfil', hex: '#FAF7F2' },
  { name: 'Champán', hex: '#E8E0D5' },
  { name: 'Topo', hex: '#C4B49A' },
  { name: 'Rosa palo', hex: '#E4C4BC' },
  { name: 'Salvia', hex: '#7B8C6E' },
  { name: 'Gris carbón', hex: '#2E2B27' },
];

export const MOOD_TAGS = [
  'Flores naturales',
  'Luz de velas',
  'Mantelería de seda',
  'Botánicos secos',
  'Metales cálidos',
  'Letreros personalizados',
];

export const GALLERY = [
  {
    img: 'trumpet_among_roses.webp',
    label: 'Castillo de Rosas',
    size: 'tall',
  },
  {
    img: 'asian_wedding.webp',
    label: 'Boda Asiática',
    size: 'wide',
  },
  {
    img: 'dock_wedding.webp',
    label: 'Boda en el Muelle',
    size: 'normal',
  },
  {
    img: 'balloon_party.webp',
    label: 'Fiesta de Globos',
    size: 'tall',
  },
  {
    img: 'blush_roses.webp',
    label: 'Ramo Rosa',
    size: 'normal',
  },
  {
    img: 'seaside_wedding.webp',
    label: 'Boda Junto al Mar',
    size: 'wide',
  },
];

export const FAQS = [
  {
    q: '¿Con cuánta anticipación debo reservar?',
    a: 'Recomendamos reservar con 6–12 meses de anticipación para bodas y galas grandes, y 2–3 meses para cumpleaños y eventos corporativos. La temporada alta se llena rápidamente.',
  },
  {
    q: '¿Se encargan del traslado, montaje y desmontaje?',
    a: 'Sí — cada paquete incluye instalación completa por nuestro equipo y desmontaje al finalizar el evento. Ustedes llegan a un espacio vestido y se van sin levantar un dedo.',
  },
  {
    q: '¿Puedo personalizar los paquetes existentes?',
    a: 'Por supuesto. Nuestros paquetes son puntos de partida. Tras una consulta inicial adaptamos cada elemento —flores, manteles, iluminación, letreros— a su visión y presupuesto.',
  },
  {
    q: '¿Qué zonas cubren?',
    a: 'Operamos en [Ciudad] y alrededores; también viajamos a destinos cercanos bajo presupuesto. Los viáticos pueden aplicar fuera de un radio de 60 km.',
  },
  {
    q: '¿Cuál es su política de pagos y cancelaciones?',
    a: 'Requerimos un anticipo del 30% para apartar la fecha, y el saldo se liquida 30 días antes del evento. Las cancelaciones con más de 60 días de anticipación reciben reembolso completo menos el anticipo.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'Vida Ebenezer transformó nuestro jardín en algo salido de un sueño. Todos los invitados preguntaron quién hizo las flores. No imaginaríamos nuestra boda sin ellos.',
    name: 'Sofía y Marcos Ávila',
    event: 'Boda · Junio 2025',
    img: 'https://images.unsplash.com/photo-1727081203667-4792c134061a?w=120&h=120&fit=crop&auto=format',
  },
  {
    quote:
      'Para los 15 años de mi hija tomaron mi tablero de Pinterest y lo convirtieron en un cuento de hadas vivo. Una ejecución absolutamente impecable.',
    name: 'Carmen Reyes',
    event: 'Quinceañera · Marzo 2025',
    img: 'https://images.unsplash.com/photo-1710587384835-0f3de33d8042?w=120&h=120&fit=crop&auto=format',
  },
  {
    quote:
      'Nuestra gala anual nunca se había visto tan bien. Solo la instalación del techo tuvo a todos tomando fotos toda la noche. Ya reservamos el próximo año.',
    name: 'Daniel Chávez, Fundación Meridian',
    event: 'Gala benéfica · Noviembre 2024',
    img: 'https://images.unsplash.com/photo-1769812343775-85a27e6a076c?w=120&h=120&fit=crop&auto=format',
  },
];

export const EVENT_TYPES = [
  'Boda',
  'Cumpleaños',
  'Evento corporativo',
  'Aniversario',
  'Quinceañera',
  'Otro',
];

export const GUEST_RANGES = ['Menos de 30', '30–75', '75–150', '150–300', '300+'];

export const FOOTER_COLUMNS = [
  {
    title: 'Servicios',
    links: [
      { label: 'Bodas', href: '#bodas' },
      { label: 'Cumpleaños', href: '#cumpleanos' },
      { label: 'Eventos corporativos', href: '#eventos-galas' },
      { label: 'Aniversarios', href: '#eventos-galas' },
      { label: 'Quinceañera', href: '#cumpleanos' },
    ],
  },
  {
    title: 'Nosotros',
    links: [
      { label: 'Quiénes somos', href: '#nosotros' },
      { label: 'Nuestro proceso', href: '#nosotros' },
      { label: 'Galería', href: '#galeria' },
      { label: 'Contacto', href: '#contacto' },
      { label: 'Preguntas frecuentes', href: '#preguntas' },
    ],
  },
];
