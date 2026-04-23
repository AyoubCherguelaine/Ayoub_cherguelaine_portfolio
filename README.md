# Ayoub Cherguelaine Portfolio

Personal portfolio built with Next.js App Router, focused on AI/NLP case studies and verified public evidence.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4 + shadcn/ui

## Highlights

- Dark, AI-oriented visual theme
- Dynamic project detail pages at `/projects/[id]`
- Structured project content model in `lib/portfolio-data.ts`
- Hybrid portfolio strategy:
  - private case studies with confidentiality-safe implementation details
  - public proof links (GitHub/Hugging Face) where available
- SEO and sharing support:
  - metadata in `app/layout.tsx`
  - Open Graph/Twitter image routes
  - `robots.txt` and `sitemap.xml`

## Verified Snapshot (Static)

This portfolio uses a static verified snapshot dated **April 23, 2026**.

Snapshot source fields are stored in `profileSnapshot` inside:

- `lib/portfolio-data.ts`

## Project Structure

- `app/` - routes, metadata, image routes, sitemap, robots
- `components/` - homepage sections and UI blocks
- `lib/portfolio-data.ts` - project dataset and public evidence model
- `lib/site-config.ts` - site identity, links, and canonical URL helper
- `public/` - static assets (CV, project covers, Hugging Face logo)

## Local Development

### Prerequisites

- Node.js **>= 20.9.0**

### Install

```bash
npm install
```

### Run dev server

```bash
npm run dev
```

### Production build

```bash
npm run build
npm run start
```

## Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run eslint (requires eslint setup in this repo)

## Content Editing Guide

### Update homepage counters and verification date

Edit:

- `profileSnapshot` in `lib/portfolio-data.ts`

### Update project cards and detail pages

Edit each project object in:

- `lib/portfolio-data.ts`

Important fields:

- `summary`, `problem`, `solution`, `impact`
- `details` (timeline, architecture, evaluation, ops, lessons)
- `publicEvidence[]` (platform, URL, visibility, metrics, verifiedOn)

### Update sharing images

- Global social preview: `app/opengraph-image.tsx`, `app/twitter-image.tsx`
- Per-project previews: `app/projects/[id]/opengraph-image.tsx`, `app/projects/[id]/twitter-image.tsx`

## Deployment Notes

Set `NEXT_PUBLIC_SITE_URL` to your production domain for correct canonical/Open Graph URLs.

Example:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```
