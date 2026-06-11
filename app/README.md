# Hostmann Media Frontend

Next.js 15 Webseite für Hostmann Media — eine Webagentur für KMUs mit Fokus auf Webdesign, SEO und Online-Marketing.

## Technologie-Stack

- **Framework:** Next.js 15 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **CMS:** WordPress Headless (WPGraphQL)
- **Deployment:** Coolify (Standalone Output)

## Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# App öffnen
http://localhost:3000
```

## Build & Deployment

```bash
# Production Build
npm run build

# Start (nach Build)
npm start
```

### Coolify Deployment

1. GitHub Repository erstellen und pushen
2. In Coolify: Add New Resource → Application → GitHub
3. Build Command: `npm run build`
4. Start Command: `npm start`
5. Domain: `hostmann-media.de`
6. Environment Variables setzen (siehe `.env.local.example`)

### Environment Variables

| Variable | Beschreibung |
|----------|-------------|
| `NEXT_PUBLIC_WP_URL` | WordPress URL |
| `NEXT_PUBLIC_WP_GRAPHQL_URL` | WPGraphQL Endpoint |
| `WP_APPLICATION_PASSWORD` | WordPress App Password |
| `WP_USERNAME` | WordPress Username |

## Projektstruktur

```
src/
├── app/                    # Next.js App Router Pages
│   ├── page.tsx            # Startseite
│   ├── layout.tsx          # Root Layout
│   ├── globals.css         # Global Styles
│   ├── leistungen/         # Leistungen Page
│   ├── about/              # Über mich Page
│   ├── kontakt/            # Kontakt Page
│   ├── blog/               # Blog Page
│   ├── impressum/          # Impressum Page
│   └── datenschutz/        # Datenschutz Page
├── components/             # React Komponenten
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── BlogPreview.tsx
│   ├── CTA.tsx
│   ├── ContactSection.tsx
│   ├── ContactForm.tsx
│   ├── Button.tsx
│   ├── SectionHeader.tsx
│   ├── ServiceCard.tsx
│   ├── BlogCard.tsx
│   ├── CheckItem.tsx
│   └── Badge.tsx
└── lib/                    # Utilities
    ├── utils.ts
    └── wordpress.ts        # WPGraphQL Client
```

## WordPress Integration

Blog-Posts werden dynamisch von WordPress geladen:
- **Homepage:** Client-seitiges Laden (3 Posts)
- **Blog-Seite:** Server-seitiges Laden mit ISR (12 Posts, 60s Revalidate)
- **Fallback:** Wenn WordPress nicht erreichbar ist, werden Platzhalter angezeigt

## SEO

- Meta-Titel und -Beschreibungen für alle Seiten
- Open Graph Tags
- Twitter Cards
- Robots Meta Tag (index, follow)
- Semantic HTML

## Lizenz

© 2026 Hostmann Media. Alle Rechte vorbehalten.
