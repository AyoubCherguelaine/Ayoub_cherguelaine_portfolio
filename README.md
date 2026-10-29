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

## Profile Counters

GitHub public repository and follower counts refresh from the GitHub API hourly. The saved GitHub fallback was checked on **October 29, 2026** (48 public repositories, 43 followers). Public repositories may include forks and are not a count of licensed open-source projects.

Hugging Face counters use a verified snapshot dated **September 1, 2026**.

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

- Node.js **>= 22.12.0** (required by the Netlify Blobs SDK)

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

GitHub counters refresh automatically through `lib/github-profile.ts`. Update the fallback GitHub values and the static Hugging Face values in `profileSnapshot` in `lib/portfolio-data.ts` as needed.

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


## Visitor Tracking and Campaign Links

After deploying these changes to Netlify, use these links:

- LinkedIn profile/posts: https://portfolio4ayoub.netlify.app/?source=linkedin
- Portfolio link inside your CV: https://portfolio4ayoub.netlify.app/?source=cv

The homepage footer shows total unique browsers, visitors from LinkedIn, and visitors from the CV link. `utm_source=linkedin` and `utm_source=cv` are also supported. Untagged LinkedIn visits can be recognized when the browser sends a LinkedIn referrer. CV attribution requires the tagged portfolio link; opening the PDF itself is not a tracked visit.

Tracking runs across portfolio pages and starts after deployment; historical visits cannot be recovered. An anonymous, HttpOnly browser cookie lasts one year. Refreshes and repeat visits with that cookie do not increase totals. Clearing cookies or using another browser counts as another visitor. A browser can appear in both source totals, so they are not additive. No IP addresses, names, or full referrer URLs are stored. Basic known-bot filtering is applied; counts remain estimates, not verified people or raw click totals.

`POST /api/visitors` stores one key per browser and source in the site-wide `portfolio-visitors` Netlify Blobs store, which persists across deploys. Totals are public. See [Netlify Blobs documentation](https://docs.netlify.com/build/data-and-storage/netlify-blobs/). Netlify supplies storage credentials in its runtime; no external database is required. Local `next dev` without a Netlify storage context shows “Visitor statistics unavailable” instead of fake counts. For full local tracking, run through Netlify Dev with the site linked. Preview deployments share site-wide storage; use a separate Netlify site for isolated analytics.

Run the storage and attribution checks with:

```bash
node --test tests/visitor-analytics.test.cjs
```
