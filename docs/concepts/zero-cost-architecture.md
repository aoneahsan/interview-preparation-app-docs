---
sidebar_position: 1
title: Zero-cost architecture
description: How PrepAI stays free — client-side code execution, Firebase free tier, Google Gemini free tier, and FilesHub storage — without a developer-funded paid backend.
keywords: [zero-cost architecture, free app, client-side, firebase free tier, gemini free tier, no paid services, web worker]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Zero-cost architecture

**PrepAI is built on a "zero-cost" architecture: it deliberately uses only free-tier services and client-side processing, so the app can stay free to use without anyone footing a usage-based bill.** Understanding this explains both *why* PrepAI is free and *why* certain features work the way they do.

## The principle

Every part of PrepAI is chosen so that ordinary usage costs nothing:

| Concern | How PrepAI handles it | Why it's free |
|---|---|---|
| **Running your code** | A sandboxed **Web Worker** in your browser | No server-side compiler farm to pay for. |
| **Database & auth** | **Firebase free tier** (Firestore + Auth) | Generous free quotas cover normal use. |
| **AI features** | **Google Gemini free tier** | Free-tier model calls, with a bring-your-own-key option for self-hosters. |
| **File storage** | **FilesHub** (free file API) | Avoids paid object storage. |
| **Charts & tools** | **Client-side** (D3, pdf.js, image libs) | Processing happens on your device. |

## Client-first by design

The most important decision is that **your code and your files are processed on your device**, not on a server:

- **Coding drills** run in a Web Worker — private and free.
- **Developer tools** (PDF-to-Word, image compression, formatters) process everything locally.
- **PDF exports** are generated in the browser.

This isn't just a cost decision; it's a privacy benefit. There's no server that sees your solutions.

## What this means for features

The architecture shapes the product honestly:

- **No remote code judge.** Grading is done against each drill's expected output and tests, locally — there's no farm compiling submissions in 40 languages.
- **AI is free-tier.** The AI interviewer is genuinely useful but bounded by free-tier limits; PrepAI doesn't pretend a paid model is running behind it.
- **Storage uses FilesHub, not paid buckets.** Uploaded assets go through a free file API.

## Sustainability

A free-tier architecture is sustainable precisely because it doesn't scale into a usage bill. Optional **[Pro and Ultimate plans](./subscription-plans.md)** add convenience features for people who want to support the project, but the core experience — practice, mock interviews, reviews, analytics, and tools — is free.

## FAQ

**Is PrepAI really free?** Yes, the core experience is free. Optional paid plans add conveniences.

**Where does my code run?** In a Web Worker on your device. It is not uploaded.

**Does the AI cost the maintainer money?** No — it uses Google Gemini's free tier, and self-hosters bring their own free key.

**What stores my data?** Firebase's free tier for account data and progress; FilesHub for any file uploads. See [Privacy & data](./privacy-and-data.md).
