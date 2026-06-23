---
sidebar_position: 5
title: Developer tools
description: PrepAI bundles 50+ free, fully client-side developer tools — converters, generators, formatters, calculators, and image utilities — that process everything in your browser.
keywords: [developer tools, online tools, PDF to Word, image compressor, JSON formatter, JWT decoder, QR code generator, hash generator, free tools]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Developer tools

**PrepAI includes a suite of 50+ free developer utilities that run entirely in your browser — converters, generators, formatters, calculators, and image tools — so nothing you process is ever uploaded to a server.** They're handy during interview prep and useful as standalone tools, and most work without signing in.

## Tool categories

| Category | Examples |
|---|---|
| **Converters** | PDF-to-Word, JSON ↔ CSV, XML-to-JSON, HTML-to-Markdown, unit converter, Base64 |
| **Generators** | UUID, password, QR code, lorem ipsum, hash (MD5/SHA), resume |
| **Developer** | JSON formatter, regex tester, JWT decoder, text diff |
| **Image** | Compressor, resizer, cropper, format converter, watermark |
| **Calculators** | Percentage, loan, BMI, age, tip, discount |
| **Text** | Word counter, case converter, Markdown preview |

## Everything runs locally

Each tool processes data **client-side**. Upload a PDF and its text is extracted in your browser; compress an image and the pixels never leave your device. The on-page "About this tool" note states this plainly: *no files are uploaded — everything is processed locally for your privacy and security.* This is a real property of how the tools are built, not a marketing line.

### Highlight: PDF to Word

The **PDF-to-Word** converter extracts selectable text from a PDF using a client-side PDF engine (pdf.js) and lets you download it as a real `.docx` Word document or as plain text. Because it relies on the PDF's embedded text, it works with text-based PDFs; scanned/image-only PDFs have no selectable text and would need OCR, which the tool tells you up front.

### Highlight: Image compressor

Compress and resize images entirely in the browser before you attach them anywhere — useful for keeping a portfolio or résumé under size limits without a third-party uploader.

## Bookmarking tools

You can **bookmark** the tools you use most. Bookmarks are stored on your device (via the app's preferences storage), so your favourites are there the next time you visit — no account required.

## Why they're part of an interview-prep app

Interview prep involves a lot of small chores: formatting JSON for a take-home, decoding a JWT while debugging an auth flow, compressing a screenshot for a write-up, generating a UUID for a sample payload. Bundling these means you don't break flow hunting for a sketchy ad-filled site to do them.

## FAQ

**Do I need an account to use the tools?** No — most tools work without signing in. Bookmarking saves to your device.

**Are my files uploaded?** No. Every tool processes data in your browser; nothing is sent to a server.

**Does PDF-to-Word work on scanned PDFs?** Only if the PDF has selectable text. Image-only/scanned PDFs need OCR, which this tool doesn't perform — and it tells you so.

**Can I download results?** Yes — converters and generators offer downloads (for example `.docx`, `.txt`, images, or QR codes).
