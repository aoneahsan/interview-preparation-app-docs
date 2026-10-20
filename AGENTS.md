# PrepAI public docs context

**Last Updated:** 2026-10-20

**Last optimized:** 2026-10-14

**Next routine optimization eligible:** 2026-11-13

Public Docusaurus repository `aoneahsan/interview-preparation-app-docs` on `main`. Source content is under `docs/`; route/sidebar config is `sidebars.ts` and `docusaurus.config.ts`. The private product is a sibling at `../interview-preparation-app/`. Do not copy its tracked `.env` or unpublished configuration into this repository. Keep feature claims supported by the current product; the old docs content has not been reverified in this maintenance pass.

Use Yarn. `yarn typecheck` and `yarn build` verify the site. `.github/workflows/deploy-pages.yml` deploys GitHub Pages on `main` pushes; inspect the fresh build in a controlled browser before pushing. `static/CNAME` pins `interviewpai-docs.aoneahsan.com`. Firebase Hosting references in old docs are historical and are not a deployment target for this fleet run. When writing public content, follow the project's Story Bible gates once established.

## Stop-work Git gate

<!-- RULE:stop-work-git-gate v2026-10-20 -->

Before stopping, commit every legitimate change and work-progress checkpoint in this repository and each independent nested repository, fetch and merge the designated upstream, push the documented working branch, then verify an empty worktree and `0 0` ahead/behind. Never stash, discard, reset, rebase, or force-push. If synchronization is blocked, report the exact repository, branch, blocker, and next action instead of calling the work complete. The full workflow remains authoritative in `~/.claude/rules/git-workflow.md`.
