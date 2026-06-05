# D2C — Discípulos de Cristo

App web del ministerio D2C — Discípulos de Cristo de la Iglesia Bautista Bíblica de Long Beach.

---

## Estructura del proyecto

```
d2c-app/
├── index.html           # Estructura HTML principal
├── src/
│   ├── styles.css       # Todos los estilos
│   ├── app.js           # Lógica de navegación, countdown, standings
│   └── data/
│       ├── events.js    # Datos de La Liga y La Red (equipos, resultados, calendario)
│       ├── sermons.js   # Serie actual, sermones y frases clave
│       └── camp.js      # Información del Campamento Juvenil 2026
└── README.md
```

---

## Tecnología

- HTML / CSS / JavaScript vanilla — sin frameworks
- Fuentes: [Instrument Serif + Outfit](https://fonts.google.com) vía Google Fonts
- Estático — listo para Vercel, Netlify, o GitHub Pages

---

## Páginas

| Página        | Descripción                                  |
|---------------|----------------------------------------------|
| Home          | Versículo, countdown, acceso rápido, eventos |
| Notas         | Serie actual y notas de los 3 sermones       |
| Calendario    | Eventos de junio y julio 2026                |
| Biblia        | Próximamente                                 |
| Más           | Menú de navegación secundario                |
| Campamento    | Info, pagos, lista de maleta, reglas         |
| Posiciones    | La Liga ⚽ y La Red 🏐 — tabla y resultados  |

---

## Deploy en Vercel

1. Sube este repositorio a GitHub
2. Entra a [vercel.com](https://vercel.com) → New Project
3. Importa el repositorio
4. Framework: **Other** (o sin framework)
5. Build command: *(vacío)*
6. Output directory: *(vacío / raíz)*
7. Deploy ✓

---

## Ministerio

**D2C — Discípulos de Cristo**  
Iglesia Bautista Bíblica de Long Beach  
1 Pedro 2:9

> "Fuimos llamados de las tinieblas… para reflejar Su luz."
