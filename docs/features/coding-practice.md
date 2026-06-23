---
sidebar_position: 1
title: Coding practice drills
description: PrepAI's coding practice is a library of self-contained drills across JavaScript, TypeScript, HTML, Node.js, and Node microservices, each with hidden tests that run in your browser.
keywords: [coding practice, coding drills, javascript practice, typescript practice, node.js practice, leetcode alternative, in-browser code runner, technical interview practice]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Coding practice drills

**PrepAI's coding practice is a library of self-contained "drills" organised into language tracks, where each drill is a complete mini-problem — statement, expected output, starter code, hidden tests, layered hints, a reference solution, and complexity notes — that you solve in an in-browser editor.** Your code runs locally in a sandboxed Web Worker and is checked automatically against the drill's tests.

## Language tracks

Drills are grouped into tracks. Each track is a curated progression from fundamentals to interview-grade problems:

| Track | Focus | Status |
|---|---|---|
| **JavaScript** | Core language plus 140 Web-API drills (DOM, fetch, storage, workers, etc.) | Shipped |
| **TypeScript** | Generics, decorators, and interview classics | Shipped |
| **Node.js** | Standard library, HTTP, system primitives, protocols, advanced systems | Shipped |
| **Node microservices** | RPC, pub/sub, gateways, observability, distributed consensus | Shipped |
| **HTML** | Foundations plus forms, tables, lists, media, accessibility | In progress |
| **CSS** | Layout, the box model, selectors, grid | In progress |
| Python · AWS · Firebase | Planned | Marked "Coming soon" on the tracks hub |

Tracks that are still being authored are shown honestly as **Coming soon** on the hub so you always know what is and isn't available. Hundreds of drills are already live across the shipped tracks.

## Anatomy of a drill

Every drill is deliberately self-contained so you can practise one without depending on another:

1. **Problem statement** — what to build, in plain language.
2. **Expected output examples** — concrete input → output pairs.
3. **Starter code** — a function signature with a `// TODO` so you know exactly what to implement.
4. **Hidden tests** — typically six to eight `assertSource` assertions that grade your solution.
5. **Layered hints** — progressively more revealing nudges.
6. **Three-tier guide** — short, medium, and deep explanations.
7. **Reference solution** — the canonical answer.
8. **Complexity & follow-ups** — Big-O analysis and "what would the interviewer ask next?".

## The in-browser runner

When you press **Run**, PrepAI executes your code in a **Web Worker** — a background thread isolated from the page. This has three benefits:

- **Privacy:** your code never leaves your device. There is no server-side compiler.
- **Safety:** a runaway loop can't freeze the UI, and a time budget stops infinite loops.
- **Speed:** results come back immediately, with per-test pass/fail and the actual vs expected values.

JavaScript and TypeScript share the same worker; other languages plug in their own adapters over time.

## Editors

You can choose your editor and the choice persists across sessions (stored on-device):

- **CodeMirror 6** — the default, lightweight and fast.
- **Monaco** — the VS Code editor, opt-in from settings, with richer IntelliSense.

## Progress tracking

Completing a drill records progress to your account, keyed per user and topic. That feeds your **streak**, **per-track completion**, and **milestones** on the [dashboard](./dashboard-analytics.md), and it determines when the reference solution unlocks (after at least one real attempt on the free plan).

## Tips for effective practice

- **Attempt before revealing.** The solution unlocks after a genuine attempt for a reason — retrieval beats recognition.
- **Read the expected outputs first.** Most failing cases come from missed edge conditions (empty input, negatives, duplicates).
- **Do a track in order.** Tracks are sequenced from fundamentals upward; skipping around leaves gaps.
- **Note the follow-ups.** Interviewers rarely stop at the first solution — the follow-up prompts mirror that.

## FAQ

**Are the drills free?** Yes. Unlimited topic viewing and in-browser runs are on the free plan. Paid plans add download conveniences — see [Subscription plans](../concepts/subscription-plans.md).

**Does my code get uploaded?** No. Execution happens in a Web Worker on your device; only your completion status is saved.

**Which languages are supported today?** JavaScript, TypeScript, Node.js, and Node microservices are fully shipped, with HTML and CSS in progress. Python, AWS, and Firebase are planned and clearly marked "Coming soon".

**Can I switch to the VS Code editor?** Yes — enable Monaco in settings; your preference is remembered.
