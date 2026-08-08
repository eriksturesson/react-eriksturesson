# What is this?

This repository contains the source code for my personal website: eriksturesson.se. The website showcases my professional background, skills, and portfolio.

Currently, it is a simple frontend-only project using React, Material-UI, and TypeScript. The only Firebase feature used is hosting for now (no database, authentication, or other Firebase services).

# Setting Up Locally

To host and test the website locally:

1. `npm install`
2. `npm run dev` for the Vite dev server, or `npm run build && npm run start:server` to run against the same Express server used in production.

`src/config.ts` (Firebase client config) is already committed - it's not treated as a secret here, since Firebase enforces access via `database.rules.json` / `storage.rules`, not by hiding this file. If you're forking this for your own project: swap in your own Firebase project's config, and run `firebase init` to generate your own `.firebaserc`.

# VITE

Changed from CRA (Create React App) to Vite.

## Hosting & Deploy

The site is self-hosted on my own hardware, not a hosting provider. A Cloudflare Worker routes every request to whichever machine answers first, in priority order:

1. **M70Q** (Lenovo ThinkCentre M70Q, primary)
2. **Pi4**
3. **Pi3**
4. **Firebase Hosting** (last resort only, so it stays on the free tier)

GitHub Actions builds and pushes a Docker image to Docker Hub on every push to `master`. Each machine pulls independently on its own schedule - there's no push-deploy onto the hardware from this repo.

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the full picture (health-check mechanics, per-node URLs, deploy details) - treat that file as the source of truth for the hosting setup, this section is just the summary.
