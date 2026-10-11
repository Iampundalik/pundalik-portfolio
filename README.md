# Pundalik Mhamal — QA Engineer Portfolio

Personal portfolio site for **Pundalik Mhamal**, SDET @ Amazon (Quest Global).

Test Automation · API & Integration · GenAI Evaluation · ISTQB CTFL Certified.

3.5+ years building test automation — frameworks in Playwright + TypeScript and Python + Selenium, CI build gates, and LLM-powered tooling.

🌐 **Live:** [iampundalikportfolio.netlify.app](https://iampundalikportfolio.netlify.app/)

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Framer Motion** — micro-interactions, scroll reveals, parallax, page transitions
- **Lenis** — inertial smooth scrolling (disabled under `prefers-reduced-motion`)
- **react-fast-marquee** — scrolling tickers and gallery rows
- **Lucide React** — icon set
- Custom SVG mockups for Allure reports, QA dashboards, browser sessions, terminals, and the AI defect-intake flow

No backend. Static site, deployable to any host (Vercel, Netlify, GitHub Pages, etc.).

## Features

- **Apple-style loader** — outlined marquee, percent-fill button, morphs into a full-screen welcome reveal
- **Animated background** — canvas particles, ambient orbs, mouse-reactive
- **Parallax scroll layers** — code blocks, terminals, and dashboards drift behind content at different speeds
- **Custom cursor** — spring-tracked ring (auto-disabled on touch)
- **Editorial hero + About** — oversized display type, a magnetic 3D object and word-by-word animated text
- **Capabilities index** — an inverted light slab listing six numbered capabilities
- **Experience timeline** — Amazon (Quest Global), Light & Wonder and ClaySys Technologies
- **Projects** — a sticky, scroll-scaled card stack (BetSettings, BugLogger, an autonomous AI pipeline, BDD suite, SwagLabs)
- **Tech stack** — 7 resume-backed categories (Playwright, Selenium, TypeScript, Python, REST/SOAP, Gemini API, LLM evaluation, Jenkins, AWS, etc.) with proficiency dots
- **QA Lab gallery** — scrolling marquee of Allure reports, dashboards, browser sessions, terminals, and AI defect-intake mockups
- **Mobile-first responsive** — verified at 360px through 1440px
- **Accessible** — WCAG AA contrast throughout, skip link, visible focus rings, full `prefers-reduced-motion` support
- **Hardened** — CSP, HSTS, frame-ancestors none, and related headers set in `netlify.toml`

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
├── lib/
│   └── smoothScroll.ts        # Lenis setup + reduced-motion opt-out
└── components/
    ├── Loading.tsx            # apple-style loader screen
    ├── Background.tsx         # animated canvas (orbs + particle web)
    ├── ParallaxBg.tsx         # scroll-driven mockup layers
    ├── Cursor.tsx             # custom cursor
    ├── ScrollProgress.tsx     # top progress bar
    ├── Nav.tsx                # sticky nav with mobile sheet
    ├── Hero.tsx               # oversized heading + magnetic 3D object
    ├── About.tsx              # animated intro + metrics
    ├── Marquee.tsx            # scroll-driven stat / word / mockup tiles
    ├── Skills.tsx             # numbered capabilities slab
    ├── Decor.tsx              # 3D decor objects (SVG)
    ├── AnimatedText.tsx       # word-by-word text reveal
    ├── FadeIn.tsx             # in-view fade + offset helper
    ├── Experience.tsx         # work timeline
    ├── Stack.tsx              # tech stack categories
    ├── Projects.tsx           # sticky project card stack
    ├── QALab.tsx              # scrolling QA artefact gallery
    ├── QAMockups.tsx          # SVG components (test report, browser, terminal, dashboard, AI)
    ├── Certs.tsx              # certifications + education
    ├── Contact.tsx            # email + socials
    ├── Footer.tsx
    ├── Reveal.tsx             # framer-motion in-view reveal helper
    ├── SectionHead.tsx        # per-character heading reveal
    ├── ScrambleText.tsx       # decode-on-view text effect
    ├── Magnetic.tsx           # cursor-magnetised wrapper
    ├── Tilt.tsx               # 3D tilt wrapper
    ├── BackToTop.tsx          # progress-ring scroll-to-top
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
- **Location** — Hyderabad, India · IST (UTC+5:30)

---

SDET @ Amazon (Quest Global) · Test Automation · GenAI Evaluation.
