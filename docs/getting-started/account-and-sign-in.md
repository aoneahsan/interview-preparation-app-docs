---
sidebar_position: 3
title: Accounts & sign-in
description: PrepAI uses Google sign-in only. Learn how authentication works on web and mobile, what a new account stores, and how to delete your account and data.
keywords: [PrepAI sign in, Google sign in, authentication, account, data deletion, privacy]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Accounts & sign-in

**PrepAI uses Google sign-in as its only authentication method — there is no email/password form, no separate sign-up page, and no password to forget.** Your first sign-in creates your account automatically.

## Why Google-only

Google sign-in keeps the security surface small (no password storage, no reset flows to abuse) and gets you in with one click. It is the right fit for a free, zero-cost product: PrepAI never has to store or protect a password.

## How it works on each platform

| Platform | Mechanism |
|---|---|
| **Web** (desktop and mobile browsers) | Firebase Authentication Google popup (`signInWithPopup`). If a popup is blocked, the app falls back to a redirect flow. |
| **Native Android app** | The native Google sign-in plugin obtains a Google ID token on-device, which is exchanged for the same Firebase session. This avoids embedding a web login inside the app, in line with store policies. |

Either way you end up as the same Firebase user, so your progress and settings are identical across web and mobile.

## What a new account stores

On your first sign-in, PrepAI creates a user record containing:

- Your Google **display name, email, and avatar URL** (so the app can greet you and show your profile).
- A default **role** of *candidate* and a default **plan** of *free*.
- A **last-seen timestamp**, updated on subsequent sign-ins.

As you use the app, it also stores your **practice progress**, **mock-interview sessions**, **reviews**, **gamification stats**, and **preferences** (theme, editor choice). Your code solutions execute locally; see [Privacy & data](../concepts/privacy-and-data.md) for the full picture.

## Roles

PrepAI supports several roles that unlock different capabilities:

| Role | Can do |
|---|---|
| Candidate | Practice, take mock interviews, request and give peer reviews. |
| Mentor | Conduct mentor-led interviews and review solutions. |
| Instructor | Author content and questions. |
| HR reviewer | Access candidate data with consent, assign tests. |
| Admin | Moderation, analytics, and feature toggles. |

Most users are candidates. Elevated roles are granted by an administrator.

## Signing out

Use the profile or settings menu to sign out. On the web, signing out clears your Firebase session in that browser; your saved progress stays safely on the server and returns the next time you sign in.

## Deleting your account and data

PrepAI provides a self-service **account deletion** flow (the `/data-deletion` page in the app), which removes your account record and associated data. This is also linked from the app's privacy policy. See [Privacy & data](../concepts/privacy-and-data.md) for what is deleted and what (if anything) is retained for legal reasons.

## Troubleshooting sign-in

- **"Popup closed by user" / popup blocked.** Allow popups for the site or let the app use its redirect fallback.
- **Wrong Google account.** Sign out, then sign in again and pick the correct account from Google's chooser.
- **Stuck on a loading screen.** PrepAI waits for both the theme and your auth state before showing the app; a slow network can delay this. Refresh if it persists.
