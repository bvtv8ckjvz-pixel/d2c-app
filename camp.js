/* ═══════════════════════════════════════
   D2C CAMP DATA
═══════════════════════════════════════ */

const CAMP = {
  name:     'Campamento Juvenil 2026',
  location: 'Cachuma Lake, CA',
  dates:    'Jun 22–26, 2026',
  church:   'Iglesia Bautista Bíblica de Long Beach',
  website:  'ibblb.org/campamento-jovenes',
  contact:  'Hno. Ronnie Reynoso',
  email:    'rreynoso@ibblb.org',
  cost:     '$150 por persona',
  departureDate: '2026-06-22T06:00:00',
};

const CAMP_PAYMENTS = [
  { date:'Abr 19, 2026',  label:'Primer Pago',    amount:'$50',  paid: true  },
  { date:'May 17, 2026',  label:'Segundo Pago',   amount:'$50',  paid: true  },
  { date:'Jun 14, 2026',  label:'Pago Final',     amount:'$40',  paid: false },
];

const CAMP_PACKING = [
  {
    group: 'Esenciales',
    items: [
      'Biblia y lapicero',
      'Buena actitud y corazón abierto',
      'Tienda de acampar',
      'Sleeping bag',
      'Almohada',
      'Cobija',
    ]
  },
  {
    group: 'Ropa y Personal',
    items: [
      'Toalla',
      'Suéter / chamarra',
      'Artículos personales',
      'Lentes oscuros',
      'Bloqueador solar',
      'Ropa para agua (no algodón)',
    ]
  },
  {
    group: 'Dinero y Extras',
    items: [
      'Dinero para bañarse / quarters',
      'Dinero para snacks y refrescos',
      '$3 para la piscina',
      'Lámpara',
      'Silla de acampar',
      'Juegos de mesa y pelotas',
    ]
  },
];

const CAMP_RULES = [
  'Participar en todas las actividades',
  'Llegar a tiempo a cada sesión',
  'Mostrar conducta cristiana en todo momento',
  'No usar vulgaridades',
  'Permanecer en las áreas designadas',
  'No parejas a solas — respeto mutuo',
  'No electrónicos durante el campamento',
  'Celulares entregados al inicio del viaje',
  'Silencio de 10:00 PM a 6:30 AM',
];

const CAMP_FAQ = [
  {
    q: '¿Cuánto cuesta el campamento?',
    a: 'El costo total es $150 por persona, dividido en tres pagos: $50 en abril, $50 en mayo y $40 en junio.',
  },
  {
    q: '¿Pueden llevar su propio carro?',
    a: 'No. La transportación es en autobús. Todos los jóvenes viajan juntos.',
  },
  {
    q: '¿Cuándo se entregan los celulares?',
    a: 'Los celulares se entregan al inicio del viaje y se regresan al regresar. Es parte de la experiencia del campamento.',
  },
  {
    q: '¿Dónde recojo a mi joven?',
    a: 'El regreso es el viernes 26 de junio a las 6:00 PM en la iglesia. Te avisaremos si hay algún cambio.',
  },
  {
    q: '¿Hay cupo limitado?',
    a: 'Sí. El cupo es limitado. Si aún no has hecho tu depósito, habla con tu líder lo antes posible.',
  },
];
