---
sidebar_position: 5
title: FAQ
description: Frequently asked questions about PrepAI — pricing, privacy, the AI interviewer, supported languages, platforms, and how code execution works.
keywords: [PrepAI FAQ, is PrepAI free, AI interview, privacy, supported languages, platforms, questions]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Frequently asked questions

**Quick answers to the most common questions about PrepAI — what it costs, how your data is handled, how the AI works, and what's supported.** For deeper detail, follow the links into the relevant docs.

## General

**What is PrepAI?**
PrepAI is a free, browser-first interview-preparation platform with coding drills, AI/peer/mentor mock interviews, peer reviews, progress analytics, and 50+ developer tools. See the [Introduction](./intro.md).

**Is it really free?**
Yes. The core experience is free; optional [Pro and Ultimate plans](./concepts/subscription-plans.md) add conveniences like unlimited downloads. You can prepare fully without paying.

**Do I need to install anything?**
No. It runs in any modern browser. You can optionally [install the PWA](./guides/install-as-pwa.md) or get the [Android app](https://play.google.com/store/apps/details?id=com.aoneahsan.interviewpai).

## Accounts

**How do I sign in?**
With Google, only — there's no email/password. Your first sign-in creates your account. See [Accounts & sign-in](./getting-started/account-and-sign-in.md).

**Can I delete my account?**
Yes, via the in-app account-deletion flow. See [Privacy & data](./concepts/privacy-and-data.md).

## Practice & AI

**Where does my code run?**
Locally, in a sandboxed Web Worker in your browser. It is not uploaded to a server. See [Coding practice](./features/coding-practice.md).

**Which languages can I practise?**
JavaScript, TypeScript, Node.js, and Node microservices are fully shipped; HTML and CSS are in progress. Python, AWS, and Firebase are planned and shown as "Coming soon".

**Is the AI interviewer free, and how good is it?**
It uses Google Gemini's free tier, so it's free on the hosted app. It's a strong rehearsal partner for spotting gaps and practising articulation, but it's a language model — treat its scores as guidance, not a verdict. See [Mock interviews](./features/mock-interviews.md).

**Do I need my own API key?**
Only if you self-host. The hosted app is already configured. See [Configure a Gemini API key](./guides/configure-gemini-key.md).

## Privacy

**Are my files uploaded when I use the tools?**
No. The 50+ [developer tools](./features/developer-tools.md) process everything in your browser.

**What data do you store?**
Your Google profile, role/plan, practice progress, mock-interview sessions, reviews, and preferences. See [Privacy & data](./concepts/privacy-and-data.md).

## Platforms

**Is there an iOS app?**
PrepAI is built cross-platform, but the iOS App Store build isn't published yet. iPhone/iPad users can use the web app or add it to the Home Screen from Safari.

**Does it work offline?**
Already-loaded drills and tools work offline; sign-in, syncing, mock interviews, and reviews need a connection.

## Support

**How do I report a bug or get help?**
Contact the maintainer — see [About the author](./about-the-author.md).
