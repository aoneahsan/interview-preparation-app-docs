---
sidebar_position: 9
title: Theme customizer
description: PrepAI's theme customizer lets every user tune appearance, accent colour, gray tone, border radius, UI scaling, and panel background — with cross-device sync when signed in.
keywords: [theme customizer, dark mode, accent color, UI scaling, Radix themes, appearance settings, accessibility]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Theme customizer

**PrepAI ships a full theme customizer that lets any user — signed in or not — tune the app's appearance, accent colour, gray tone, border radius, UI scaling, and panel background, with the choices synced across devices once you sign in.** It's built on Radix UI Themes, so the whole app re-skins consistently and accessibly.

## What you can customise

| Option | Choices |
|---|---|
| **Appearance** | Light, Dark, or System (follows your OS). |
| **Accent colour** | A palette of Radix accent colours. |
| **Gray tone** | The neutral palette paired with your accent. |
| **Border radius** | From square to fully rounded. |
| **UI scaling** | Make everything a little larger or smaller. |
| **Font size** | Small, medium, or large body text. |
| **Panel background** | Solid or translucent surfaces. |

Selectors are **card-based** — you pick a visual tile, not an abstract dropdown — so you can see what you're choosing.

## Available to everyone

The customizer is open to **signed-out visitors too**, not just account holders. Your preferences are saved on your device immediately, so the next visit in the same browser restores your look. A palette icon in the header opens the customizer, and a quick button cycles Light → Dark → System.

## Cross-device sync

When you're **signed in**, your preferences also sync to your account, so the theme you set on your laptop follows you to your phone. The app merges your local and saved preferences on sign-in and keeps them in step as you make changes.

## No flash of the wrong theme

PrepAI shows a full-page loader on first paint until the theme has hydrated and your sign-in state has resolved. That avoids the jarring "flash" where an app briefly renders in light mode before snapping to your saved dark theme.

## Accessibility

Because the customizer is built on Radix primitives, it respects keyboard navigation and screen readers, and the appearance options (including larger scaling and font size, and a System mode that follows your OS contrast preference) help you set up a comfortable, readable interface.

## FAQ

**Do I need an account to change the theme?** No — preferences save to your device. Signing in adds cross-device sync.

**Does it have a true dark mode?** Yes, plus a System option that follows your OS.

**Will my theme follow me across devices?** Yes, once you're signed in.
