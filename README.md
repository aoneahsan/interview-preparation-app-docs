# PrepAI Documentation

Public documentation site for **PrepAI** — a free, browser-first interview-preparation platform with coding drills, AI/peer/mentor mock interviews, peer reviews, progress analytics, and 50+ developer tools.

- **App:** https://interviewpai.aoneahsan.com
- **Google Play:** https://play.google.com/store/apps/details?id=com.aoneahsan.interviewpai
- **Docs (this site):** https://interviewpai-docs.aoneahsan.com
- **Author:** [Ahsan Mahmood](https://aoneahsan.com)

Built with [Docusaurus](https://docusaurus.io/). This repository is **public** (the app's source is private).

## Local development

```bash
yarn install --immutable  # install pinned dependencies
yarn start          # dev server on http://localhost:5972
yarn build          # static build into build/
yarn typecheck      # tsc --noEmit
yarn serve          # serve the built site on http://localhost:5973
```

> Do not run the dev server in CI/agent contexts — use `yarn build` to verify.

## Deployment

The active GitHub Pages workflow serves the `build/` output at the custom domain
`interviewpai-docs.aoneahsan.com` (via `static/CNAME`):

`.github/workflows/deploy-pages.yml` builds and publishes on every push to `main`.
Legacy Firebase Hosting configuration remains in the repository but is not a deployment target for this maintenance run.

**Maintenance checkpoint (2026-10-14):** The public docs checkout is now a sibling of the private product
inside `interview-preparation-app-root/`. Existing feature claims have not been reverified in this technical
maintenance pass; consult the product's current code and approved content plan before changing them.

## Structure

```
docs/                 # Markdown content (intro, getting-started, features, guides, concepts, faq, about)
src/css/custom.css    # brand palette
src/pages/index.tsx   # landing page
static/               # robots.txt, llms.txt, CNAME, img/, .well-known/
docusaurus.config.ts  # site config + JSON-LD (WebSite, Organization, SoftwareApplication)
sidebars.ts           # sidebar layout
```

## Content principles

- **Honest framing** — describe what PrepAI actually does (free tier, client-side execution, Gemini free tier). No fabricated claims.
- **AI-citability** — each page is definition-first with FAQ blocks; JSON-LD + llms.txt + an AI-bot-friendly robots.txt help AI search engines cite the docs.
- **No secrets** — this is a public repo; never commit keys or private config.

## License

Documentation © Ahsan Mahmood. Built with Docusaurus.
