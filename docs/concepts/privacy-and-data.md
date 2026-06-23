---
sidebar_position: 2
title: Privacy & data
description: What PrepAI stores, what stays on your device, which third-party services it uses, and how to delete your account and data.
keywords: [privacy, data, account deletion, GDPR, what data is stored, code privacy, firebase, analytics]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Privacy & data

**PrepAI is built so that your code and files are processed on your device, while your account record and progress live in your Firebase user data — and you can delete all of it at any time.** This page summarises what's stored, what stays local, and which services are involved. The app's in-product privacy policy is the authoritative legal document.

## What stays on your device

- **Your code.** Drill solutions run in a sandboxed Web Worker locally; they are not uploaded to a server to be graded.
- **Tool inputs.** The 50+ developer tools process files and text in your browser — PDFs, images, JSON, and so on never leave your device.
- **Local preferences.** Theme and editor choices are cached on your device (and synced to your account when signed in).

## What is stored with your account

| Data | Why |
|---|---|
| Google profile (name, email, avatar) | Identify and greet you. |
| Role and plan | Determine what you can access. |
| Practice progress | Track completion, streaks, and unlocks. |
| Mock-interview sessions & scores | Show your trend over time. |
| Reviews & reputation | Power the peer-review system. |
| Preferences | Sync your theme/editor across devices. |

## Third-party services

PrepAI uses a small set of services, each chosen to fit the [zero-cost architecture](./zero-cost-architecture.md):

- **Firebase** (Google) — authentication and the Firestore database (free tier).
- **Google Gemini** — the AI mock-interview features (free tier).
- **FilesHub** — file storage for any uploads.
- **Analytics & error monitoring** — used to understand usage and catch bugs; these activate only when configured and are designed to fail open (the app works even if they're off).

The in-app privacy policy lists the providers actually in use and the data each handles.

## Permissions

PrepAI requests only the permissions a feature needs, at the moment it's used (for example, notification permission when you opt into reminders). Declining a permission doesn't break the app — features degrade gracefully (for instance, you'll still see updates in the in-app notification centre).

## Deleting your account and data

PrepAI offers a self-service **account deletion** flow (the `/data-deletion` page in the app, also linked from the privacy policy). Deleting your account removes your account record and associated data. If any minimal data must be retained for legal or anti-abuse reasons, the privacy policy spells that out.

## FAQ

**Is my code private?** Yes — it executes in a Web Worker on your device and isn't uploaded.

**Can I delete everything?** Yes, via the in-app account-deletion flow.

**Which analytics do you use?** Usage analytics and error monitoring that activate only when configured; the app works regardless.

**Where's the legal privacy policy?** Inside the app — it's the authoritative source; this page is a plain-language summary.
