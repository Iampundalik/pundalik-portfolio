# Pundalik Mhamal — QA Engineer Portfolio

Personal portfolio site for **Pundalik Mhamal**, Senior Associate QA Engineer at Light & Wonder.

iGaming · Automation · AI-assisted Testing · ISTQB Certified.

🌐 **Live:** _coming soon_

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Framer Motion** — micro-interactions, scroll reveals, parallax, page transitions
- **react-fast-marquee** — scrolling tickers and gallery rows
- **Lucide React** — icon set
- Custom SVG mockups for QA dashboards, test reports, terminals, and AI anomaly detection

No backend. Static site, deployable to any host (Vercel, Netlify, GitHub Pages, etc.).

## Features

- **Apple-style loader** — outlined marquee, percent-fill button, morphs into a full-screen welcome reveal
- **Animated background** — canvas particles, ambient orbs, mouse-reactive
- **Parallax scroll layers** — code blocks, terminals, and dashboards drift behind content at different speeds
- **Custom cursor** — spring-tracked ring (auto-disabled on touch)
- **Bento skills grid** — 10 expertise cards with mixed spans
- **Experience timeline** — Light & Wonder + Claysys Technologies, accent-coded
- **Tech stack** — 8 categories, 72+ tools (Playwright, Cypress, k6, Allure, Datadog, Argo CD, Terraform, OWASP ZAP, AI/LLM testing, etc.) with proficiency dots
- **QA Lab gallery** — scrolling marquee of test reports, dashboards, browser sessions, terminals, and AI signal mockups
- **Mobile-first responsive** — verified at 375px through desktop

## Run locally

```bash
npm install
npm run dev          # dev server with HMR (http://localhost:5173)
npm run build        # type-check + production build → dist/
npm run preview      # preview production build
npm run lint         # eslint
```

## Project structure

```
src/
├── App.tsx                    # composition + reveal animation
├── main.tsx                   # entry
├── index.css                  # design tokens + base styles
├── App.css                    # section primitives, tags
├── data/
│   └── portfolio.ts           # all content (profile, skills, experience, stack, projects, certs)
└── components/
    ├── Loading.tsx            # apple-style loader screen
    ├── Background.tsx         # animated canvas (orbs + particle web)
    ├── ParallaxBg.tsx         # scroll-driven mockup layers
    ├── Cursor.tsx             # custom cursor
    ├── ScrollProgress.tsx     # top progress bar
    ├── Nav.tsx                # sticky nav with mobile sheet
    ├── Hero.tsx               # full name + intro + CTAs + metrics
    ├── Marquee.tsx            # tools ticker
    ├── Skills.tsx             # bento grid
    ├── Experience.tsx         # work timeline
    ├── Stack.tsx              # tech stack categories
    ├── Projects.tsx           # featured projects with QA media
    ├── QALab.tsx              # scrolling QA artefact gallery
    ├── QAMockups.tsx          # SVG components (test report, browser, terminal, dashboard, AI)
    ├── Certs.tsx              # certifications + education
    ├── Contact.tsx            # email + socials
    ├── Footer.tsx
    ├── Reveal.tsx             # framer-motion in-view reveal helper
    └── BrandIcons.tsx         # GitHub / LinkedIn icons
```

## Deployment

Any static host. For GitHub Pages with the `gh-pages` branch:

```bash
npm run build
# upload dist/ to your host of choice
```

For Vercel/Netlify, point the project at this repo — they auto-detect Vite.

## Contact

- **Email** — pundalik.mhamal.work@gmail.com
- **LinkedIn** — [linkedin.com/in/iampundalik](https://linkedin.com/in/iampundalik)
- **GitHub** — [github.com/Iampundalik](https://github.com/Iampundalik)
- **Phone** — +91 98907 03905
- **Location** — Goa, India · Remote / Hybrid / Open to relocation

---

Open to **Senior QA / SDET / Automation** roles.
