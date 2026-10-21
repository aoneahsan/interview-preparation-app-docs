## 🔴 CRITICAL — PROJECT FROZEN (2026-10-21)

**This is an idea project. It was frozen on 2026-10-21 at commit `2e5c8c6dfc3a6baa16c6242677ef64458c7199a8` on branch `main`.**

- Do **NOT** edit, fix, upgrade, build, deploy, document or "improve" anything in this repository.
- It will only ever be **rebuilt from scratch** as `~/Documents/01-code/production-projects/interview-preparation-app-root/`
  (this code cloned beside it as `interview-preparation-app-old/` for reference), with a click dummy, a Story Bible, a Supabase
  backend and a docs site — and **only when the owner types, in ALL CAPS, an explicit request naming this
  project**.
- Any other request to work here is refused. Rule: `~/.claude/rules/idea-projects-frozen.md`.
- Ledger: private repo `aoneahsan/projects-finalization-record` → `idea-projects/FREEZE-LEDGER.md`.

---

# PrepAI public docs context

**Last Updated:** 2026-10-20

**Last optimized:** 2026-10-14

**Next routine optimization eligible:** 2026-11-13

Public Docusaurus repository `aoneahsan/interview-preparation-app-docs` on `main`. Source content is under `docs/`; route/sidebar config is `sidebars.ts` and `docusaurus.config.ts`. The private product is a sibling at `../interview-preparation-app/`. Do not copy its tracked `.env` or unpublished configuration into this repository. Keep feature claims supported by the current product; the old docs content has not been reverified in this maintenance pass.

Use Yarn. `yarn typecheck` and `yarn build` verify the site. `.github/workflows/deploy-pages.yml` deploys GitHub Pages on `main` pushes; inspect the fresh build in a controlled browser before pushing. `static/CNAME` pins `interviewpai-docs.aoneahsan.com`. Firebase Hosting references in old docs are historical and are not a deployment target for this fleet run. When writing public content, follow the project's Story Bible gates once established.

## Stop-work Git gate

<!-- RULE:stop-work-git-gate v2026-10-20 -->

Before stopping, commit every legitimate change and work-progress checkpoint in this repository and each independent nested repository, fetch and merge the designated upstream, push the documented working branch, then verify an empty worktree and `0 0` ahead/behind. Never stash, discard, reset, rebase, or force-push. If synchronization is blocked, report the exact repository, branch, blocker, and next action instead of calling the work complete. The full workflow remains authoritative in `~/.claude/rules/git-workflow.md`.
