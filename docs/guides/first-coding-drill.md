---
sidebar_position: 1
title: Finish your first coding drill
description: A step-by-step guide to completing your first PrepAI coding drill — choosing a track, writing a solution, passing the hidden tests, and recording progress.
keywords: [first coding drill, how to practice coding, PrepAI tutorial, pass coding tests, beginner coding practice]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Finish your first coding drill

**This guide walks you through completing one coding drill from start to finish, so you understand the full loop: choose a track, read the problem, write a solution, run the hidden tests, and record your progress.** It takes about five minutes.

## Before you start

- Be signed in (Google sign-in — see [Accounts & sign-in](../getting-started/account-and-sign-in.md)).
- Open [interviewpai.aoneahsan.com](https://interviewpai.aoneahsan.com).

## Steps

1. **Open the tracks hub.** Go to **Learn → Tracks** (`/learn/tracks`).
2. **Pick a track.** Start with **JavaScript** if you're unsure — it has the most drills.
3. **Open a topic, then a drill.** Each card shows difficulty and your progress.
4. **Read the problem and examples.** Note the expected input → output pairs above the editor.
5. **Implement the starter code.** Replace the `// TODO` in the provided function signature.
6. **Run.** Your code executes locally in a Web Worker and is checked against the drill's tests.
7. **Iterate on failures.** Read the actual vs expected output for each failing case and fix your logic.
8. **Use hints if stuck.** Each drill has layered hints and a three-tier guide before the full solution.
9. **Reveal the solution.** After your tests pass (or after a genuine attempt), open the reference solution, complexity analysis, and follow-ups.
10. **Done.** Your completion is saved; your streak and per-track stats update on the [dashboard](../features/dashboard-analytics.md).

## Worked example

A classic first drill is "Two Sum": given an array and a target, return the indices of the two numbers that add up to the target.

```javascript
function twoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need), i];
    seen.set(nums[i], i);
  }
  return [-1, -1];
}
```

Run it and the hidden tests confirm it handles the examples plus edge cases (no match, duplicates). Then read the reference solution and its `O(n)` complexity note.

## Tips

- **Attempt before revealing.** Retrieval beats recognition — the solution unlocks after a real try for a reason.
- **Watch the edge cases.** Empty arrays, negatives, and duplicates are where most attempts fail.
- **Keep a streak.** One drill a day compounds faster than occasional marathons.

## Next

Try a [mock interview](./ai-mock-interview.md) to rehearse explaining a solution out loud.
