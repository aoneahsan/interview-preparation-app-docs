---
sidebar_position: 4
title: Dashboard & analytics
description: PrepAI's dashboard visualises your progress with D3 charts — streaks, milestones, per-track completion, and mock-interview scores — and exports a shareable PDF.
keywords: [progress dashboard, coding analytics, streaks, milestones, D3 charts, PDF export, interview progress]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Dashboard & analytics

**PrepAI's dashboard is a personal analytics view that turns your activity into D3-powered visualisations — practice streaks, milestones, per-track completion, and mock-interview scores — and can export the whole thing as a PDF you can share.** It answers one question well: *am I actually getting better?*

## What the dashboard shows

| Widget | What it tells you |
|---|---|
| **Streak** | Consecutive days you've practised — the simplest motivator. |
| **Per-track completion** | How far through each language track you are. |
| **Milestones** | Achievement markers as you hit thresholds. |
| **Mock-interview scores** | Your interview performance over time. |
| **Activity charts** | D3 visualisations of practice volume and trends. |

## Why D3

All charts are rendered with **D3.js** rather than a generic chart library. D3 gives precise control over how the data is drawn, which keeps the visualisations sharp, accessible, and consistent with the app's theme — including dark mode and your chosen accent colour.

## PDF export

You can export your dashboard as a **PDF**. This is handy for:

- Sharing progress with a **mentor** who is coaching you.
- Showing a **recruiter** or hiring manager that you've been preparing systematically.
- Keeping a personal **record** of milestones.

The PDF is generated client-side, so your data isn't sent anywhere to produce it.

## Reading your trends honestly

Metrics are a mirror, not a scoreboard:

- **Streaks reward consistency**, which is the single best predictor of improvement — but don't let a broken streak discourage you. Start a new one.
- **Scores are directional.** Mock-interview scores (especially AI ones) are guidance; look at the *trend*, not any single session.
- **Completion isn't mastery.** Finishing a track is a great milestone, but revisit the drills you found hard.

## How to use it

1. Practise daily to build a streak; even one drill counts.
2. Check per-track completion weekly to decide what to focus on next.
3. After a batch of mock interviews, look at the score trend, not the latest number.
4. Export a PDF before a real interview as a confidence boost and a study summary.

## FAQ

**Is my analytics data private?** Your progress is tied to your account; your code runs locally. See [Privacy & data](../concepts/privacy-and-data.md).

**Does the PDF cost anything?** No — export is part of the free experience and is generated on your device.

**What charts library is used?** D3.js, exclusively, for full control and theme consistency.
