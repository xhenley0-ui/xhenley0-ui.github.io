# Yuheng Zhu — personal website

A responsive recreation of https://yuhengzhu.squarespace.com, built with React 19, strict TypeScript, and Vinext (Vite with the Next.js App Router API). Source content was migrated on September 5, 2026.

## Development

Install Node.js 22.13+ and pnpm, then run:

```sh
pnpm install
pnpm dev
```

Open the URL printed by the server. Production: `pnpm build`. Type checking: `pnpm exec tsc --noEmit`. Lint: `pnpm lint`.

## Where to edit

| Change                                                    | File                  |
| --------------------------------------------------------- | --------------------- |
| Name, biography, contact, navigation, social links        | `content/site.ts`     |
| Projects, descriptions, artwork, credits, video streams   | `content/projects.ts` |
| Audio titles, durations, and file paths                   | `content/media.json`  |
| Colors, fonts, spacing, responsive layouts                | `app/globals.css`     |
| Header, footer, background sections, audio/video behavior | `components/site/`    |
| Home, About, Portfolio layouts                            | `app/`                |
| Images                                                    | `public/images/`      |

### Add a project

Add an object matching the `Project` interface to `projects` in `content/projects.ts`. Choose a unique URL-safe slug, add images under `public/images/`, and supply the title, description paragraphs, tracks, and credits. The portfolio grid, detail route, page metadata, and previous/next links update automatically. No copied page template is needed. A track accepts an MP3 URL or a local path such as `/audio/my-piece.mp3`. Videos accept MP4 or HLS `.m3u8` URLs.

### Architecture

Server-rendered route components keep public content and metadata available without waiting for JavaScript. Only mobile navigation and media controls require client components. Base UI/Shadcn provides an accessible mobile navigation sheet. Native audio controls support seeking, volume, and keyboard interaction; hls.js supports the original video streams on browsers without native HLS. Starting another player pauses the previous recording.

The project uses standard React components and Next.js App Router conventions, with Vinext for the Cloudflare-compatible build. No Squarespace account or SDK is needed for editing. Images are stored locally; original asset URLs are recorded in `content/asset-sources.json`. All 12 audio recordings are stored locally in `public/audio/`, with paths listed in `content/media.json`; the optional `scripts/mirror-audio.mjs` migration utility copies remote audio locally. Conducting videos remain on the original Squarespace CDN and must be migrated to your own video storage before cancelling Squarespace. Their full URLs are in `content/projects.ts`.

Keep original media rights and credits with any migration. This recreation retains the original copy and visual direction; responsive layouts and media controls are implemented anew rather than copying Squarespace's generated layout engine and image effects.

## Deployment

`pnpm build` creates a Cloudflare Workers-compatible site in `dist/`. `.openai/hosting.json` links this checkout to the private Sites preview. The same source can be adapted for another host that supports Vinext/Cloudflare Workers. Review sharing settings before making the site public. No contact form or analytics service is configured; the contact link opens the visitor's email app.

The lint configuration excludes the unmodified generated UI catalog and its helper hook. Original recordings do not include caption files; supply reviewed captions when available.
