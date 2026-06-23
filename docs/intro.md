---
sidebar_position: 1
title: Introduction
description: PrepAI is a free, browser-first interview-preparation platform with coding drills, AI/peer/mentor mock interviews, peer reviews, progress analytics, and 50+ developer tools.
keywords: [PrepAI, interview preparation, coding practice, mock interview, AI mock interview, peer code review, leetcode alternative, free interview prep]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Introduction

**PrepAI is a free, browser-first interview-preparation platform that combines card-based coding drills, AI/peer/mentor-led mock interviews, peer code reviews, progress analytics, and 50+ client-side developer tools in one app.** It is built so a developer can prepare for a technical interview end to end — practising problems, rehearsing interviews, getting feedback, and tracking progress — without paying for a course or signing up for a paid service.

PrepAI is live at [interviewpai.aoneahsan.com](https://interviewpai.aoneahsan.com), ships as an installable Progressive Web App, and is published on Google Play as `com.aoneahsan.interviewpai`. It is built and maintained by [Ahsan Mahmood](https://aoneahsan.com).

## What PrepAI does

| Area | What it gives you | One-line summary |
|---|---|---|
| **Coding practice** | Card-based drills across language tracks | Self-contained problems with hidden tests that run in your browser. |
| **Mock interviews** | AI, peer, or mentor formats | Timed sessions with optional recording, structured feedback, and scoring. |
| **Peer reviews** | Request/review queue + inline comments | Learn by reading and critiquing real solutions; build reputation. |
| **Analytics** | D3 dashboard | Streaks, milestones, per-track completion, and PDF export. |
| **Developer tools** | 50+ client-side utilities | Converters, generators, formatters — nothing is uploaded. |

Supporting features round out the experience: real-time study **chat rooms**, **gamification** (points, badges, streaks, leaderboards), push and in-app **notifications**, a full **theme customizer** with cross-device sync, and a blog with an admin CMS.

## Who it is for

- **Developers preparing for technical interviews** who want structured practice plus realistic mock interviews in one place.
- **Self-taught and bootcamp learners** who need a free, no-friction way to drill fundamentals and read other people's solutions.
- **Study groups and peers** who want to review each other's code and run peer/mentor mock interviews.
- **Anyone who wants free developer utilities** — the 50+ tools work standalone, with no account required.

## What it is not

Honesty matters more than marketing, so here are the explicit non-claims:

- **Not a paid course or a job guarantee.** PrepAI is a practice and rehearsal tool, not a curriculum with instructors or a placement service.
- **Not a server-side code judge.** Your code runs locally in a Web Worker and is checked against the drill's expected output and tests. There is no remote compilation farm (that keeps it free and private).
- **Not an "AI that grades you perfectly."** The AI mock interviewer (Google Gemini free tier) gives useful, structured feedback, but it is a language model — treat its scores as guidance, not a verdict.
- **Not a data-harvesting product.** The free tier runs on Firebase's free tier; your solutions execute on your device.

## How this documentation is organised

- **[Getting Started](./getting-started/installation.md)** — how to open, install, and sign in to PrepAI, plus a five-minute quick start.
- **[Features](./features/coding-practice.md)** — one page per feature area, describing exactly what it does and how to use it.
- **[How-to guides](./guides/first-coding-drill.md)** — short, task-focused walkthroughs.
- **[Concepts](./concepts/zero-cost-architecture.md)** — the architecture, privacy model, and subscription tiers behind the product.
- **[FAQ](./faq.md)** — quick answers to common questions.

Ready to start? Head to **[Installation & access](./getting-started/installation.md)** or jump straight to the **[Quick Start](./getting-started/quick-start.md)**.
