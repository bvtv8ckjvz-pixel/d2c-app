/* ═══════════════════════════════════════
   D2C SERMON DATA
═══════════════════════════════════════ */

const SERIES = {
  title:    'Discípulos de Cristo',
  theme:    'De las Tinieblas a Su Luz Admirable',
  passage:  '1 Pedro 2:9',
  verse:    '"Mas vosotros sois linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios, para que anunciéis las virtudes de aquel que os llamó de las tinieblas a su luz admirable."',
  ref:      '— 1 Pedro 2:9 (RVR1960)',
  speaker:  'Pastor Ronnie Reynoso',
  current:  3,
  total:    6,
};

const SERMONS = [
  {
    num:      1,
    title:    'Discípulos de Cristo',
    subtitle: 'De las Tinieblas a Su Luz Admirable',
    passages: ['1 Pedro 2:9'],
    quote:    '"Fuimos llamados de las tinieblas… para reflejar Su luz."',
    intro: [
      '¿Alguna vez te has preguntado si realmente importas?',
      'Vivimos en un mundo donde constantemente nos dicen quiénes somos. Las redes sociales. Los comentarios de la gente. Los likes. Las críticas.',
      'Y muchos jóvenes crecen creyendo que su valor depende de cuántos los siguen, cuántos los aprueban, o cuánto tienen.',
      '<em>Pero ¿qué pasa cuando todo eso desaparece?</em>',
      'La Biblia dice algo completamente diferente sobre quién eres. Y esta noche vamos a verlo juntos.',
    ],
    points: [
      {
        num: 1, title: 'ESCOGIDOS',
        subs: [
          'Dios nos escogió y nos llamó a Él mismo',
          'Tu identidad se encuentra en Cristo, no en la opinión de los demás',
          'Efesios 1:4 — "Según nos escogió en él antes de la fundación del mundo"',
        ]
      },
      {
        num: 2, title: 'COMPRADOS',
        subs: [
          'Pertenecemos a Cristo porque Él pagó el precio',
          '1 Corintios 6:20 — "Fuisteis comprados por precio"',
          'Cuando entiendes que perteneces a Dios, cambias cómo vives',
        ]
      },
      {
        num: 3, title: 'ENVIADOS',
        subs: [
          'Fuimos llamados a reflejar a Cristo públicamente',
          'Mateo 5:14 — "Vosotros sois la luz del mundo"',
          'Un discípulo no solamente recibe luz — también la refleja',
        ]
      },
    ],
    conclusion: [
      'No eres un accidente. No eres un número. No eres lo que dicen de ti.',
      'Fuiste escogido. Fuiste comprado. Y fuiste enviado con propósito.',
      'Dios no te salvó para que te quedes quieto. Te salvó para que reflejes Su luz en el lugar donde Él te puso.',
    ],
    steps: [
      'Encuentro mi identidad en Cristo',
      'Decido vivir como alguien que pertenece a Dios',
      'Uso mi vida para reflejar la luz de Cristo',
    ],
    takeaway: '"Dios no te salvó para quedarte quieto."',
  },
  {
    num:      2,
    title:    'Fuiste Hecho para Más',
    subtitle: 'Llamados a Vivir en Su Luz',
    passages: ['1 Pedro 2:9', 'Efesios 2:10'],
    passageStyles: [null, { background:'#F3F0FF', color:'#7C3AED', borderColor:'rgba(124,58,237,.2)' }],
    quote:    '"No fuimos llamados a encajar. Fuimos llamados a reflejar Su luz."',
    intro: [
      'Piensa en alguien que tiene todo. Buenas calificaciones. Popularidad. Familia estable. Todo lo que el mundo diría que necesitas para ser feliz.',
      'Y aun así… algo no cuadra. Hay un vacío que no saben cómo llenar.',
      'Porque vivir bien no es lo mismo que vivir con propósito.',
      '<em>Dios no te creó solamente para existir. Te creó para más.</em>',
    ],
    points: [
      {
        num: 1, title: 'MÁS QUE EXISTIR',
        subs: [
          'Los creyentes fueron creados con propósito divino',
          'Deja de vivir espiritualmente en piloto automático',
          'Efesios 2:10 — "Somos hechura suya, creados en Cristo Jesús para buenas obras"',
        ]
      },
      {
        num: 2, title: 'MÁS QUE ENCAJAR',
        subs: [
          'Los creyentes no fueron llamados a encajar en el mundo',
          'No bajes tus convicciones por aceptación temporal',
          'Romanos 12:2 — "No os conforméis a este siglo"',
        ]
      },
      {
        num: 3, title: 'MÁS QUE TENER ÉXITO',
        subs: [
          'El éxito sin propósito nunca satisface el alma',
          'Marcos 8:36 — "¿Qué aprovechará al hombre ganar todo el mundo?"',
          'Vive para un impacto eterno',
        ]
      },
    ],
    conclusion: [
      'Fuiste hecho para más que existir. Más que encajar. Más que tener éxito.',
      'Fuiste hecho para reflejar la gloria de Dios en cada área de tu vida.',
      '<em>La pregunta no es si tienes propósito. La pregunta es si lo estás viviendo.</em>',
    ],
    steps: [
      'Dejo de vivir distraído espiritualmente',
      'Decido vivir diferente aunque otros no lo hagan',
      'Uso mi vida para algo eterno',
    ],
    takeaway: '"Fuiste hecho para más."',
  },
  {
    num:      3,
    title:    'Casi',
    subtitle: 'Lo Que Toma Seguir Verdaderamente a Cristo',
    passages: ['Lucas 9:62'],
    current:  true,
    quote:    '"Empezar algo emociona… pero permanecer requiere compromiso."',
    intro: [
      'Piensa en alguien que llegó al campamento la primera noche completamente emocionado.',
      '"¡Este campamento me va a cambiar la vida!"',
      'Pero al segundo día… ya tenía calor, ya no quería caminar, ya extrañaba su cama.',
      '<em>Empezar algo emociona. Permanecer requiere compromiso.</em>',
      'Y honestamente, muchos jóvenes siguen a Cristo de la misma manera. Se emocionan en el campamento. Se emocionan en el retiro. Se emocionan con la predicación.',
      'Pero cuando vuelven a casa… todo sigue igual.',
      'Lucas 9:62 nos da una de las frases más directas que Jesús ever dijo sobre el discipulado. Y esta noche vamos a enfrentarla juntos.',
    ],
    points: [
      {
        num: 1, title: 'PERMANECER',
        subs: [
          'El discipulado no es emoción temporal — es constancia y fidelidad',
          'Lo que más importa es la fidelidad después de los momentos emocionales',
          'Gálatas 6:9 — "No nos cansemos de hacer el bien"',
        ]
      },
      {
        num: 2, title: 'PRIORIDAD',
        subs: [
          'Lo que amas se refleja en lo que priorizas',
          'Lo que ocupa el corazón eventualmente ocupa toda la vida',
          'Mateo 6:33 — "Buscad primeramente el reino de Dios"',
        ]
      },
      {
        num: 3, title: 'PLENITUD',
        subs: [
          'Cristo vino para dar vida en abundancia — no compromiso a medias',
          'Juan 10:10 — "Yo he venido para que tengan vida, y vida en abundancia"',
          'Dios no busca perfección. Busca entrega.',
        ]
      },
    ],
    conclusion: [
      'Jesús nunca llama a alguien para arruinarle la vida. Lo llama para darle la vida que realmente estaba buscando.',
      'El problema no es que Cristo pida demasiado. El problema es que nosotros le ofrecemos muy poco.',
      '<em>Hoy la pregunta es: ¿vas a seguirlo de verdad, o vas a seguir viviendo "casi" comprometido?</em>',
    ],
    steps: [
      'Decido permanecer aun cuando seguir a Cristo cueste',
      'Pongo a Dios primero sobre mis comodidades',
      'Dejo de vivir "casi" comprometido',
    ],
    takeaway: '"El discipulado verdadero cuesta… pero siempre vale la pena."',
  },
];

const SERIES_QUOTES = [
  { text: '"Dios no está buscando perfección. Está buscando entrega."', src: 'Sermón 3 · Casi' },
  { text: '"Fuiste hecho para más."',                                    src: 'Sermón 2 · Fuiste Hecho para Más' },
  { text: '"Fuimos llamados de las tinieblas… para reflejar Su luz."',   src: 'Sermón 1 · Discípulos de Cristo' },
];
