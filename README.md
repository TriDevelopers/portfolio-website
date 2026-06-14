# Tri Ngo — Portfolio

[![Live site](https://img.shields.io/badge/live-tringodev.netlify.app-3ee08f?style=flat-square)](https://tringodev.netlify.app/)
[![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Deploys on Netlify](https://img.shields.io/badge/deploys%20on-Netlify-00c7b7?style=flat-square&logo=netlify&logoColor=white)](https://www.netlify.com/)

A single-page portfolio with a finance-terminal aesthetic: a live "career
index" candlestick panel, a rotating node-sphere, an append-only experience
"ledger", an AI-pipeline diagram, and an animated stack-allocation chart.

**Live:** <https://tringodev.netlify.app/>

Built with **React 18** (Create React App). The visual design was prototyped in
[Claude Design](https://claude.ai/design) and re-implemented here as idiomatic
React — the prototype's canvas/RAF animations live in dedicated hooks, and the
exact colors/spacing are kept 1:1 with the design via inline-style components.

## Getting started

```bash
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build into /build
```

## Architecture

The codebase is organized by **responsibility**, with absolute imports
(`jsconfig.json` sets `baseUrl: src`) so files can move without breaking
imports.

```
src/
├── index.js                  # entry point (React 18 createRoot)
├── App.jsx                   # composition root — global effects + section order
│
├── theme/
│   └── tokens.js             # design tokens: fonts (FONT), colors (C), layout (MAXW)
│
├── styles/
│   └── global.css            # reset, @keyframes, hover utilities, responsive rules
│
├── assets/
│   ├── images/               # tri.jpg (headshot)
│   └── documents/            # Resume.pdf
│
├── hooks/                    # one custom hook per file (single responsibility)
│   ├── index.js              # barrel
│   ├── useHeroSequence.js    # boot log + name "decrypt"
│   ├── useCandles.js         # candlestick <canvas>
│   ├── useLattice.js         # rotating node-sphere <canvas>
│   ├── useScrollProgress.js  # top progress bar
│   ├── useReveal.js          # IntersectionObserver scroll-reveal + bar fills
│   ├── useDragPan.js         # drag-to-pan the AI diagram
│   └── useKonami.js          # "hodl" easter-egg listener
│
└── components/
    ├── layout/               # chrome that frames the page
    │   └── Nav.jsx
    ├── sections/             # the page sections, in on-page order
    │   ├── index.js          # barrel
    │   ├── Hero.jsx
    │   ├── Ticker.jsx
    │   ├── About.jsx
    │   ├── Experience.jsx
    │   ├── AiFlow.jsx
    │   ├── Projects.jsx
    │   ├── Allocation.jsx
    │   └── Contact.jsx
    └── overlays/             # things rendered above the page
        └── HodlOverlay.jsx
```

### Conventions

- **Styling** — per-element visual styling is inline (1:1 with the design).
  `styles/global.css` holds only what inline styles can't express: `@keyframes`,
  `:hover`, `::selection`, and the responsive `@media` rules. Responsive hooks
  use `data-r="…"` / `data-pad` attributes that mirror the design's own system.
- **Animation** — every canvas/observer/listener lives in a hook that captures
  its own timeline and tears down its RAF/observer/listeners on unmount.
- **Imports** — absolute from `src` (e.g. `import { C } from 'theme/tokens'`).

## Deployment

Hosted on **Netlify** with continuous deployment from this repo. Every push to
`master` triggers a build (`npm run build`) and publishes `build/`. Build
settings live in [`netlify.toml`](./netlify.toml) — Node version, SPA redirect,
asset caching, and security headers — so the deploy is reproducible and not
dependent on dashboard configuration.
