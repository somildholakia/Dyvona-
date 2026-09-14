# Dyvona — dyvona.com

**Building technology for problems that matter.**

The public site of Dyvona, an early-stage technology venture out of Mumbai.
Editorial by design: warm paper, charcoal statement sections, one lime accent,
and typography doing most of the work.

## Stack

- **Next.js 16** (App Router, static prerender)
- **TypeScript**
- **Tailwind CSS v4** (CSS-first design tokens in `src/app/globals.css`)
- **Framer Motion** (masked line reveals, hairline draws, subtle parallax — all gated behind `prefers-reduced-motion`)
- **Geist / Geist Mono** (self-hosted via `geist`) + **Caveat** for the rare handwritten margin note (self-hosted via `@fontsource-variable/caveat`)

No component library, no stock imagery, no AI-generated illustrations. The two
"product screenshots" are hand-built interfaces:

- `src/components/mocks/CommandCenterShot.tsx` — the Open Source Command Center dashboard (live streak counter, contribution heatmap, quest progress, chart draw-on)
- `src/components/mocks/SurvivalShot.tsx` — the Survival Game dusk scene + HUD (pure vector layers)

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static production build
npm run start
```

## Content lives in `src/data/`

Everything editorial is data-driven — no hunting through JSX:

| File              | What it controls                                            |
| ----------------- | ----------------------------------------------------------- |
| `site.ts`         | Name, tagline, nav, socials, hero copy + metadata, about/ledger |
| `services.ts`     | The two directions (01 LinkedIn, 02 Studio) and their offerings |
| `projects.ts`     | Work entries: name, status, figure captions, detail tables   |
| `journal.ts`      | Studio journal — add a note at the top of the array, done    |
| `principles.ts`   | Build. Listen. Experiment. Repeat.                           |

## Structure

```
src/
  app/            layout, page, globals.css, OG image, icon, sitemap, robots, 404
  components/     Navbar, Hero, Intro, Services, Projects, Journal,
                  Principles, About, Contact, Footer
    ui/           Reveal, MaskedHeading, Hairline, AccentUnderline, MarkerSwipe,
                  SectionHeader, OutlineNumber, CountUp, ProcessLoop, Grain, …
    mocks/        the two product "screenshots"
  data/           all content (see above)
  lib/            motion constants, class helper, seeded RNG
```

## Design system, in short

- Paper `#F1EFE6` / Ink `#191917` / Accent lime `#C7F04A` (signature, never surface)
- 12-column grid with generous margins; figures intentionally bleed past it
- Section folios `§ 01–§ 07`, mono metadata labels, hairline rules that draw themselves
- One easing curve site-wide: `cubic-bezier(0.22, 1, 0.36, 1)`

## Before deploying

Replace the placeholders in `src/data/site.ts`:

- `siteUrl` (currently `https://dyvona.com`) — also drives `metadataBase`, sitemap, robots
- `email` (currently `hello@dyvona.com`)
- `socials` URLs (LinkedIn / X / GitHub handles)

© Dyvona — built in public.
