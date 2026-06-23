---
sidebar_position: 4
title: Configure a Gemini API key (self-host)
description: If you run your own instance of PrepAI, the AI features need a free Google Gemini API key. This guide explains the required environment variable and how AI stays zero-cost.
keywords: [Gemini API key, Google Generative AI, self-host, environment variable, BYO key, free AI, VITE_GOOGLE_AI_API_KEY]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Configure a Gemini API key (self-host)

**PrepAI's AI mock-interview features are powered by Google Gemini's free tier. On the hosted app this is already set up; if you run your own instance, you supply your own free Gemini API key via an environment variable.** This keeps the AI features zero-cost — there is no developer-funded paid LLM behind them.

:::note Who this page is for
Most people use the hosted app at [interviewpai.aoneahsan.com](https://interviewpai.aoneahsan.com) and **don't need to do anything** — AI works out of the box. This page is for developers running their own copy of PrepAI.
:::

## How AI stays zero-cost

PrepAI deliberately uses **Google Gemini's free tier** rather than a paid model. The AI interviewer, feedback, and scoring all run within free-tier limits. You bring your own key, which Google issues for free — so neither you nor the maintainer pays a per-request bill.

## Get a free Gemini API key

1. Go to **Google AI Studio** ([aistudio.google.com](https://aistudio.google.com)).
2. Sign in with a Google account.
3. Create an **API key** (free tier).
4. Copy the key.

## Set the environment variable

PrepAI reads the key from a build-time environment variable. In your `.env` (or `.env.local`):

```bash
# [REQUIRED] Google Generative AI (Gemini) API key — powers the AI interview
# features. Use the free tier.
VITE_GOOGLE_AI_API_KEY=your_google_ai_api_key
```

This variable is part of PrepAI's environment-sync contract: every required key is listed in `.env.example` with a `[REQUIRED]`/`[OPTIONAL]` tag, and the app shows a clear setup screen on boot if a required key is missing (it logs the missing key *names*, never the values).

## Verify

After setting the key and rebuilding, start an [AI mock interview](./ai-mock-interview.md). If the interviewer responds, your key is wired correctly. If the app shows a configuration screen naming `VITE_GOOGLE_AI_API_KEY`, the key isn't set in the environment the app was built with.

## Keep the key safe

- **Never commit real keys.** Keep them in `.env.local` (git-ignored) or your host's secret manager.
- **Use a restricted key** scoped to the Generative Language API where possible.
- **Rotate** the key if it's ever exposed.

## FAQ

**Do I need a paid Google plan?** No — the free Gemini tier is sufficient for the AI features.

**Does the hosted app require my key?** No. Only self-hosted instances need their own key.

**What happens if the key is missing?** AI features won't work and the app surfaces a clear setup message naming the missing variable (never its value).
