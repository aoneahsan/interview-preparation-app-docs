# PrepAI Docs — Project Guidelines

**Last Updated:** 2026-06-23

Public documentation site for **PrepAI** (the interview-preparation app). Built with Docusaurus 3, deployed to GitHub Pages + Firebase Hosting. This repo is **PUBLIC** — the app's code lives in the private `interview-preparation-app` repo.

> **CLAUDE.md ↔ AGENTS.md are mirrors.** Any rule change here must be applied to `AGENTS.md` too.

---

## Identity

| Property | Value |
|---|---|
| Repo | `aoneahsan/interview-preparation-app-docs` (PUBLIC) |
| Docs URL | https://interview-preparation-app-docs.aoneahsan.com |
| App URL | https://interviewpai.aoneahsan.com |
| Play Store | https://play.google.com/store/apps/details?id=com.aoneahsan.interviewpai |
| Stack | Docusaurus 3 + React 19 + TypeScript |
| Dev port | 5972 (start) / 5973 (serve) |
| Hosting | GitHub Pages (`.github/workflows/deploy.yml`) + Firebase (`firebase.json`, project `interview-preparation-app-docs`) |

---

## Global rules apply

The global `~/.claude/CLAUDE.md` is auto-loaded; do not restate it. Relevant here: RULE #0 (invoke matching skills first — `docusaurus-config-setup`, `ai-seo`, `copywriting`, `technical-writing`), yarn-only + `npm-check-updates` upgrades, no dev/preview servers (verify with `yarn build`), one-commit-per-prompt, CLAUDE.md↔AGENTS.md sync, doc freshness.

---

## Iron-solid rules (this repo)

| # | Rule | Requirement |
|---|------|-------------|
| 1 | PUBLIC repo | NEVER commit secrets, API keys, or private config. The app repo is private; this one is not. |
| 2 | Honest content | Document only real features. No fabricated stats, no "best/#1/free-forever" hype. Free-tier / Gemini-free-tier framing must be accurate. |
| 3 | Package manager | `yarn` only. Only `yarn.lock`. `nodeLinker: node-modules` (PnP breaks Docusaurus + recent Node). |
| 4 | No dev servers | Verify with one-shot `yarn build` + `yarn typecheck`. Never start `yarn start`. |
| 5 | SEO/AEO floor | Every page: frontmatter (title, description 140–160 chars, keywords, last_update), definition-first intro, FAQ where natural. Keep `robots.txt`, `llms.txt`, JSON-LD, sitemap current. |
| 6 | Brand | Primary `#3b82f6`; logo/favicon/social-card under `static/img/`. Keep cross-links to the app + Play Store. |
| 7 | Broken links | `onBrokenLinks: 'throw'` — every sidebar entry must map to a real file. |

---

## Content map

- `docs/intro.md` — overview
- `docs/getting-started/` — installation, quick-start, account-and-sign-in
- `docs/features/` — coding-practice, mock-interviews, peer-reviews, dashboard-analytics, developer-tools, chat-rooms, gamification, notifications, theme-customizer
- `docs/guides/` — first-coding-drill, ai-mock-interview, export-progress-pdf, configure-gemini-key, install-as-pwa
- `docs/concepts/` — zero-cost-architecture, privacy-and-data, subscription-plans
- `docs/faq.md`, `docs/about-the-author.md`

Content tracker: `docs/tracking/interview-preparation-app-docs-content-tracker.json`.

---

## Commands

```bash
yarn install        # deps
yarn build          # static build (verify gate)
yarn typecheck      # tsc --noEmit
yarn firebase:deploy
```

Deploy is user-only (needs Firebase auth / Pages settings) — see the app repo's `docs/MANUAL-TASKS.md`.

---

## Gitignore Hygiene (IRON-SOLID)
`.gitignore` stays current with the project structure — ignore only recoverable artifacts (build/`dist`/`www`/`node_modules`/logs/caches/IDE), never lose source. Custom rules always present: `*.ignore.*`, `project-record-ignore/`. This is a **PUBLIC** repo -> secrets/`.env`/keystores are NEVER tracked.
Full rule + private/public protocol: `~/.claude/rules/project-config.md`.
Gitignore Last Verified: 2026-06-24
