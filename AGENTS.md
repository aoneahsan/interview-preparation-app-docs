# PrepAI public docs context

**Last optimized:** 2026-10-14

**Next routine optimization eligible:** 2026-11-13

Public Docusaurus repository `aoneahsan/interview-preparation-app-docs` on `main`. Source content is under `docs/`; route/sidebar config is `sidebars.ts` and `docusaurus.config.ts`. The private product is a sibling at `../interview-preparation-app/`. Do not copy its tracked `.env` or unpublished configuration into this repository. Keep feature claims supported by the current product; the old docs content has not been reverified in this maintenance pass.

Use Yarn. `yarn typecheck` and `yarn build` verify the site. `.github/workflows/deploy-pages.yml` deploys GitHub Pages on `main` pushes; inspect the fresh build in a controlled browser before pushing. `static/CNAME` pins `interviewpai-docs.aoneahsan.com`. Firebase Hosting references in old docs are historical and are not a deployment target for this fleet run. When writing public content, follow the project's Story Bible gates once established.
