# Tech Spec — Hostmann Media

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 15.1.0 | Framework |
| react | ^19.0.0 | UI library |
| react-dom | ^19.0.0 | React DOM renderer |
| lucide-react | ^0.460.0 | Icons |
| clsx | ^2.1.1 | Conditional class names |
| tailwind-merge | ^2.6.0 | Tailwind class deduplication |
| typescript | ^5.7.0 | Type safety |
| @types/node | ^22.0.0 | Node.js types |
| @types/react | ^19.0.0 | React types |
| @types/react-dom | ^19.0.0 | React DOM types |
| tailwindcss | ^3.4.0 | CSS framework |
| postcss | ^8.4.0 | CSS processing |
| autoprefixer | ^10.4.0 | CSS vendor prefixes |
| eslint | ^8.57.0 | Linting |
| eslint-config-next | 15.1.0 | Next.js ESLint config |

---

## Component Inventory

### Layout

| Component | Source | Reuse | Notes |
|-----------|--------|-------|-------|
| Header | Custom | All pages | Client component: scroll state, mobile menu toggle |
| Footer | Custom | All pages | Server component |

### Sections (Page-specific, used once each)

| Component | Source | Used On |
|-----------|--------|---------|
| HeroSection | Custom | Home |
| ServicesSection | Custom | Home |
| AboutSection | Custom | Home |
| BlogPreviewSection | Custom | Home |
| CTASection | Custom | Home, Leistungen, Über Mich, Blog, Kontakt |
| ContactSection | Custom | Home |
| SubHeroSection | Custom | Leistungen, Blog, Kontakt (title + description variant) |
| ServicesDetailSection | Custom | Leistungen |
| AboutHeroSection | Custom | Über Mich |
| BadgesSection | Custom | Über Mich |
| ValuesSection | Custom | Über Mich |
| TimelineSection | Custom | Über Mich |
| BlogPostsSection | Custom | Blog |
| ContactContentSection | Custom | Kontakt |
| MapPlaceholderSection | Custom | Kontakt |
| FAQSection | Custom | Kontakt |
| LegalContentSection | Custom | Impressum, Datenschutz |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| Button | Custom | All sections — 4 variants: primary, secondary, white, ghost + size modifiers |
| SectionHeader | Custom | ServicesSection, ValuesSection, BlogPreviewSection, TimelineSection, FAQSection — 3 variants: center, left, left-accent |
| ServiceCard | Custom | ServicesSection — icon + title + description + link |
| BlogCard | Custom | BlogPreviewSection, BlogPostsSection — image + date + title + excerpt |
| ValueCard | Custom | ValuesSection — icon + title + description |
| TimelineEntry | Custom | TimelineSection — dot + year + title + description |
| FAQItem | Custom | FAQSection — question + answer display |
| FeatureRow | Custom | ServicesDetailSection — alternating 2-col layout with icon box, features list |
| CheckItem | Custom | AboutSection, FeatureRow — check icon + text |
| Badge | Custom | HeroSection, AboutSection, AboutHeroSection, BadgesSection — icon + text pill |
| SkeletonCard | Custom | BlogPreviewSection, BlogPostsSection — pulsing placeholder |
| ContactForm | Custom | ContactSection, ContactContentSection — form fields + validation + states |

---

## Animation Implementation

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Header scroll state transition | CSS | `transition-all` on background/shadow/border, class toggle via scroll listener | Low |
| Mobile menu overlay | CSS + React state | Fixed overlay, opacity transition, staggered link fade with CSS animation-delay | Medium |
| Hero entrance sequence | GSAP | Timeline with sequential fade-up + opacity, staggered children with incremental delays | Medium |
| Background blob floating | CSS keyframes | `@keyframes float` with translateY oscillation, different `animation-delay` per blob | Low |
| Pulsing green dot | CSS keyframes | `@keyframes pulse` scale + opacity oscillation, 2s infinite | Low |
| Scroll-triggered fade-up | GSAP + ScrollTrigger | `gsap.from()` with ScrollTrigger, opacity 0/y 40→0, 700ms, ease `power3.out` | Medium |
| Scroll-triggered fade-in | GSAP + ScrollTrigger | `gsap.from()` opacity 0→1, 600ms | Low |
| Scroll-triggered scale-in | GSAP + ScrollTrigger | `gsap.from()` opacity 0/scale 0.95→1, 600ms | Low |
| Stagger children | GSAP + ScrollTrigger | `gsap.from()` with `stagger: 0.1` on child selector | Low |
| Service block slide-in | GSAP + ScrollTrigger | Alternating: odd blocks text from right (-40px), image from left; even blocks reversed. Coordinated timeline per block | Medium |
| Timeline line draw | GSAP + ScrollTrigger | `scaleY: 0→1`, `transform-origin: top`, scrubbed to scroll position | Medium |
| Timeline dot pop | GSAP + ScrollTrigger | `scale: 0→1` with `back.out` easing | Low |
| Card hover effects | CSS | `transition-all 300ms`, `translateY(-4px)`, shadow/border changes on `:hover` | Low |
| Button hover/active | CSS | `transition-all 300ms`, `translateY(-1px)` on hover, `scale(0.98)` on active | Low |
| Blog card image zoom | CSS | `transition-transform 500ms`, `scale(1.05)` on card hover via group-hover | Low |
| Skeleton pulse | CSS keyframes | `animate-pulse` Tailwind class, 2s infinite | Low |
| Form success/error | CSS | `transition-all 300ms`, `scale(0.95)→scale(1)` on appear | Low |
| Smooth scroll | CSS | `scroll-behavior: smooth` on html | Low |
| Footer stagger | GSAP + ScrollTrigger | `stagger: 0.1` on footer column children | Low |

**Reduced motion**: All GSAP animations respect `prefers-reduced-motion: reduce` — animations disabled, elements appear in final state. CSS keyframe animations also wrapped in `@media (prefers-reduced-motion: no-preference)`.

---

## State & Logic

### WordPress GraphQL Client

`lib/wordpress.ts` — thin fetch wrapper around WPGraphQL endpoint:

- `fetchGraphQL(query, variables)`: POST to `NEXT_PUBLIC_WP_GRAPHQL_URL`, 60s ISR revalidate, error handling returns null
- `getPosts(first)`: query posts with id, title, slug, excerpt, date, featuredImage
- `getPageBySlug(slug)`: query single page content (reserved for future use)

### Contact Form State Machine

`ContactForm` component manages 4 states via `useState`:

- **idle**: Form visible, empty fields
- **validating**: On submit — client-side validation (required: name, email, service, message; email format regex)
- **error**: Validation failed — error message banner + field-level error indicators
- **success**: Validation passed — success message banner, form hidden

State transitions: `idle → validating → error | success`. Reset not implemented (page refresh required).

### Header Scroll State

`Header` component tracks scroll position via `useEffect` scroll listener:

- `< 50px`: transparent bg, no shadow
- `≥ 50px`: glassmorphic bg (`rgba(255,255,255,0.85)` + `backdrop-blur(12px)`), shadow, subtle border
- Scroll listener throttled via `requestAnimationFrame` or passive event listener

### Blog Data Fetching Pattern

Two different patterns by page:

- **Home (BlogPreviewSection)**: Client component (`"use client"`), `useEffect` calls `getPosts(3)` on mount, manages loading/error/empty states
- **Blog (BlogPostsSection)**: Server component, calls `getPosts(12)` directly at render time, ISR revalidates every 60s. Error handled with try/catch → error UI

---

## Other Key Decisions

### Static Export with Standalone Output

`next.config.js` uses `output: 'standalone'` (not static export). This produces a self-contained Node.js server for Coolify deployment while preserving Next.js features (SSR, ISR, image optimization). The standalone output includes all necessary server files and dependencies.

### WordPress Image Domain

`next.config.js` `images.remotePatterns` includes `wp.hostmann-media.de` for Next.js Image optimization. `unoptimized: true` set as fallback for standalone deployment compatibility — images served directly from WordPress without Next.js optimization pipeline.

### No shadcn/ui

All UI components built from scratch with Tailwind CSS. The design is simple enough (buttons, cards, inputs, badges) that shadcn overhead (additional deps, registry) is unnecessary. Custom components match the exact design spec without abstraction compromise.

### Form Backend — None

Contact form is frontend-only. No API route or external service integration. Success state simulates submission. Future backend connection (WordPress form plugin, email service, or Next.js API route) is straightforward to add.

### Metadata Strategy

Each page exports a `Metadata` object via Next.js `generateMetadata` or static `metadata` export. Includes: title (with template `%s | Hostmann Media`), description, Open Graph (type, locale, url, siteName, title, description), Twitter card, robots (index/follow). `metadataBase` set to `https://hostmann-media.de`.
