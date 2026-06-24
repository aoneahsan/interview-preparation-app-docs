# PrepAI Docs — Agent Guide

**Last Updated:** 2026-06-23

Mirror of `CLAUDE.md` for agent workflows. Public documentation site for **PrepAI**, built with Docusaurus 3. This repo is **PUBLIC** (the app's code lives in the private `interview-preparation-app` repo).

> **AGENTS.md ↔ CLAUDE.md are mirrors.** Update both together.

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
| Hosting | GitHub Pages + Firebase (project `interview-preparation-app-docs`) |

---

## Before any task (RULE #0)

Invoke matching skills first and say which: `docusaurus-config-setup`, `ai-seo`, `copywriting`, `technical-writing`. The global `~/.claude/AGENTS.md` is auto-loaded — don't restate it.

---

## Iron-solid rules (this repo)

1. **PUBLIC repo** — never commit secrets/keys/private config.
2. **Honest content** — document only real PrepAI features; accurate free-tier / Gemini-free-tier framing; no hype/fabricated stats.
3. **yarn only**, `nodeLinker: node-modules`, only `yarn.lock`.
4. **No dev servers** — verify with `yarn build` + `yarn typecheck`.
5. **SEO/AEO floor** — frontmatter (title, description 140–160 chars, keywords, last_update), definition-first intros, FAQ; keep `robots.txt`/`llms.txt`/JSON-LD/sitemap current.
6. **Brand** primary `#3b82f6`; cross-link the app + Play Store.
7. **`onBrokenLinks: 'throw'`** — every sidebar entry maps to a real file.

---

## Workflow

1. Read `CLAUDE.md` + the content tracker (`docs/tracking/interview-preparation-app-docs-content-tracker.json`).
2. Invoke skills (RULE #0).
3. Edit/add Markdown under `docs/`; keep `sidebars.ts` in sync.
4. Verify: `yarn typecheck` + `yarn build` (both must pass; no dev servers).
5. One commit per task on `main`, push to remote `o`.

Deploy is user-only (Firebase auth / Pages settings) — tracked in the app repo's `docs/MANUAL-TASKS.md`.

---

## Gitignore Hygiene (IRON-SOLID)
`.gitignore` stays current with the project structure — ignore only recoverable artifacts (build/`dist`/`www`/`node_modules`/logs/caches/IDE), never lose source. Custom rules always present: `*.ignore.*`, `project-record-ignore/`. This is a **PUBLIC** repo -> secrets/`.env`/keystores are NEVER tracked.
Full rule + private/public protocol: `~/.claude/rules/project-config.md`.
Gitignore Last Verified: 2026-06-24
