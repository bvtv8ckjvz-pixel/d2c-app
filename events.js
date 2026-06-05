/* ═══════════════════════════════════════
   D2C EVENTS DATA
═══════════════════════════════════════ */

const LIGA_TEAMS = [
  { name:'Blue',     coach:'Coach Abraham', color:'#1565C0', w:3, l:1, e:0 },
  { name:'Orange',   coach:'Coach Jesús',   color:'#E65100', w:3, l:1, e:0 },
  { name:'Blue/Red', coach:'Coach Kique',   color:'#880E4F', w:1, l:2, e:1 },
  { name:'White',    coach:'Coach Yosak',   color:'#9E9E9E', w:0, l:4, e:1 },
];

const RED_TEAMS = [
  { name:'Black',      color:'#212121', w:3, l:0 },
  { name:'Scarlet',    color:'#C0392B', w:2, l:1 },
  { name:'Royal',      color:'#1565C0', w:1, l:2 },
  { name:'Light Blue', color:'#4DD0E1', w:0, l:3 },
];

const LIGA_RESULTS = [
  { week:'Semana 1 — Sáb, 9 de mayo', matches:[
    { home:'Blue',     away:'White',    score:'2 – 0', winner:'Blue',    hc:'#1565C0', ac:'#9E9E9E' },
    { home:'Blue/Red', away:'Orange',   score:'0 – 1', winner:'Orange',  hc:'#880E4F', ac:'#E65100' },
  ]},
  { week:'Semana 2 — Sáb, 16 de mayo', matches:[
    { home:'Blue',     away:'Blue/Red', score:'3 – 2', winner:'Blue',    hc:'#1565C0', ac:'#880E4F' },
    { home:'White',    away:'Orange',   score:'1 – 4', winner:'Orange',  hc:'#9E9E9E', ac:'#E65100' },
  ]},
  { week:'Semana 3 — Sáb, 23 de mayo', matches:[
    { home:'Blue/Red', away:'White',    score:'2 – 2', winner:null,      hc:'#880E4F', ac:'#9E9E9E' },
    { home:'Blue',     away:'Orange',   score:'1 – 3', winner:'Orange',  hc:'#1565C0', ac:'#E65100' },
  ]},
  { week:'Semana 4 — Sáb, 30 de mayo', matches:[
    { home:'Blue',     away:'White',    score:'— – —', winner:'Blue',    hc:'#1565C0', ac:'#9E9E9E' },
    { home:'Blue/Red', away:'Orange',   score:'2 – 0', winner:'Blue/Red',hc:'#880E4F', ac:'#E65100' },
  ]},
];

const LIGA_SCHEDULE = [
  { week:'Semana 5 — Sáb, 6 de junio', matches:[
    { home:'Blue',     away:'Blue/Red', hc:'#1565C0', ac:'#880E4F' },
    { home:'White',    away:'Orange',   hc:'#9E9E9E', ac:'#E65100' },
  ]},
  { week:'Semana 6 — Sáb, 13 de junio', matches:[
    { home:'Blue/Red', away:'White',    hc:'#880E4F', ac:'#9E9E9E' },
    { home:'Blue',     away:'Orange',   hc:'#1565C0', ac:'#E65100' },
  ]},
  { week:'🏆 Campeonato — Sáb, 11 de julio', matches:[
    { home:'Por definir', away:'Por definir', hc:'#B8790A', ac:'#B8790A' },
  ]},
];

const RED_RESULTS = [
  { week:'Semana 1', matches:[
    { home:'Black',   away:'Royal',      winner:'Black',  hc:'#212121', ac:'#1565C0' },
    { home:'Scarlet', away:'Light Blue', winner:'Scarlet',hc:'#C0392B', ac:'#4DD0E1' },
  ]},
  { week:'Semana 2', matches:[
    { home:'Black',   away:'Scarlet',    winner:'Black',  hc:'#212121', ac:'#C0392B' },
    { home:'Royal',   away:'Light Blue', winner:'Royal',  hc:'#1565C0', ac:'#4DD0E1' },
  ]},
  { week:'Semana 3', matches:[
    { home:'Black',   away:'Light Blue', winner:'Black',  hc:'#212121', ac:'#4DD0E1' },
    { home:'Royal',   away:'Scarlet',    winner:'Scarlet',hc:'#1565C0', ac:'#C0392B' },
  ]},
];

const RED_SCHEDULE = [
  { week:'Semana 4 — Sáb, 6 de junio', matches:[
    { home:'Black',   away:'Royal',      hc:'#212121', ac:'#1565C0' },
    { home:'Scarlet', away:'Light Blue', hc:'#C0392B', ac:'#4DD0E1' },
  ]},
  { week:'Semana 5 — Sáb, 13 de junio', matches:[
    { home:'Black',   away:'Scarlet',    hc:'#212121', ac:'#C0392B' },
    { home:'Royal',   away:'Light Blue', hc:'#1565C0', ac:'#4DD0E1' },
  ]},
  { week:'Semana 6 — Sáb, 11 de julio', matches:[
    { home:'Black',   away:'Light Blue', hc:'#212121', ac:'#4DD0E1' },
    { home:'Royal',   away:'Scarlet',    hc:'#1565C0', ac:'#C0392B' },
  ]},
  { week:'🏆 Campeonato — Sáb, 18 de julio', matches:[
    { home:'Por definir', away:'Por definir', hc:'#B8790A', ac:'#B8790A' },
  ]},
];
