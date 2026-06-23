---
sidebar_position: 2
title: Quick Start
description: Sign in to PrepAI and finish your first coding drill in about five minutes — pick a track, write code, run the hidden tests, and reveal the solution.
keywords: [PrepAI quick start, first coding drill, practice coding, in-browser code runner, get started]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Quick Start

**This five-minute walkthrough takes you from a fresh visit to a completed coding drill: sign in with Google, choose a track, solve a drill in the in-browser editor, run the hidden tests, and reveal the reference solution.** No setup, no install, no payment.

## Step 1 — Open the app and sign in

1. Go to **[interviewpai.aoneahsan.com](https://interviewpai.aoneahsan.com)**.
2. Click **Continue with Google** on the login screen.
3. Approve the Google consent prompt. PrepAI creates your account automatically on first sign-in (there is no separate sign-up form). See [Accounts & sign-in](./account-and-sign-in.md) for details.

## Step 2 — Pick a track and a drill

1. From the dashboard, open **Learn → Tracks** (or go to `/learn/tracks`).
2. Choose a language track — for example **JavaScript** or **TypeScript**.
3. Open a topic, then pick a drill from the list. Each drill card shows its title, difficulty, and your progress.

## Step 3 — Solve it in the editor

Every drill opens with a code editor (CodeMirror by default; you can switch to Monaco in settings) pre-filled with **starter code** — usually a function signature with a `// TODO`. Read the **problem statement** and the **expected output examples** above the editor, then implement your solution.

```javascript
// Example starter code
function twoSum(nums, target) {
  // your solution here
  return [-1, -1];
}
```

## Step 4 — Run the hidden tests

Click **Run**. Your code executes locally in a sandboxed Web Worker (it never leaves your device) and is checked against the drill's `assertSource` tests — typically six to eight cases per drill. You'll see which cases pass and which fail, with the actual versus expected output.

Stuck? Each drill ships **layered hints** and a **three-tier guide**, so you can get a nudge without jumping straight to the answer.

## Step 5 — Reveal the solution and record progress

Once your tests pass — or after at least one genuine attempt — reveal the **reference solution** and read the **complexity analysis** and **follow-up questions**. Your completion is saved to your account, so the drill is marked done and your streak and stats update on the [dashboard](../features/dashboard-analytics.md).

## What to do next

| Goal | Where to go |
|---|---|
| Rehearse a full interview | [Mock interviews](../features/mock-interviews.md) |
| Get feedback on your code | [Peer reviews](../features/peer-reviews.md) |
| See your progress | [Dashboard & analytics](../features/dashboard-analytics.md) |
| Use a quick utility | [Developer tools](../features/developer-tools.md) |

## Troubleshooting

- **The Google popup is blocked.** Allow popups for `interviewpai.aoneahsan.com`, or use the redirect fallback the app offers. On the installed mobile app, native Google sign-in is used instead.
- **My code times out.** Drills run with a time budget so infinite loops don't hang the tab. Check for an unintended loop and run again.
- **Tests fail on edge cases.** Read the expected-output examples carefully — empty inputs, negatives, and duplicates are common gotchas built into the test set.
