# Yuheng Zhu — portfolio & performance

Bilingual personal website: **https://xhenley0-ui.github.io/**

React 19 + strict TypeScript, using Vinext/Vite and Next.js App Router conventions. The site exports static HTML for GitHub Pages. No server, Squarespace account, or database is required to run the pages.

## Develop

Use Node.js 24 and pnpm 11.19.0:

```sh
pnpm install
pnpm dev
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

The static website is generated in `dist/client/`. Never upload `dist/server/` to GitHub Pages. `.nojekyll` is added by the deployment workflow.

## Edit content / 修改内容

| What / 内容                                               | File / 文件                    |
| --------------------------------------------------------- | ------------------------------ |
| English biography, email, social accounts                 | `content/site.ts`              |
| Chinese biography, project copy, album track translations | `content/translations.ts`      |
| Project descriptions, artwork, audio lists, credits       | `content/projects.ts`          |
| **Performance video entries / 演出视频**                  | **`content/performances.ts`**  |
| Local audio paths and titles                              | `content/media.json`           |
| EN / 中文 switch and remembered preference                | `components/site/language.tsx` |
| Colors, typography, spacing, responsive composition       | `app/globals.css`              |
| Shared header, footer, media players                      | `components/site/`             |
| Home, About, Portfolio, Performance, project layouts      | `app/`                         |
| Local photographs and artwork                             | `public/images/`               |
| All 12 local audio recordings                             | `public/audio/`                |

### Add a performance / 添加演出视频

Add an object matching the `Performance` interface to `content/performances.ts`. Supply a unique `id`, English/Chinese title, category, venue, a `src` URL, and a poster path. Use a local MP4 (`/video/concert.mp4`) or an HTTPS HLS stream (`.m3u8`). Put the poster under `public/images/`. `projectSlug` optionally links the video to a portfolio project. The Performance page updates automatically.

目前的两个视频是原网站已有的 P!NK 与 Coldplay 指挥片段。新增钢琴演奏、室内乐或其他演出时，在同一个数据文件中增加条目即可；不需要复制页面。

The two existing conducting videos still stream from Squarespace. Migrate those streams to your own MP4 or video host before cancelling Squarespace. Their source URLs are explicit in `content/performances.ts`. The original recordings include no supplied captions; add reviewed caption tracks when available. New photos are used with layout cropping and optimized JPEG copies; original files are unchanged.

### Add a project / 添加作品

Add a `Project` in `content/projects.ts` and a matching Chinese entry in `content/translations.ts`. Use a unique slug. Add audio references in `content/media.json` if needed. The portfolio, static detail route, metadata, and previous/next navigation update automatically. Song and event names may retain their original language.

### Language behavior

The server exports English HTML. After hydration, EN / 中文 updates the interface, descriptions, biography, and album titles. The preference is remembered in local storage, synchronizes across tabs, and updates the document language for assistive technology. Switching also works if browser storage is unavailable.

## Version management with gh

Repository: https://github.com/xhenley0-ui/xhenley0-ui.github.io

```sh
gh repo clone xhenley0-ui/xhenley0-ui.github.io
cd xhenley0-ui.github.io
git switch -c feature/your-change
# edit, then run checks and build
git add .
git commit -m "Describe the change"
git push -u origin feature/your-change
gh pr create --base main --fill
# Merge after reviewing the change:
gh pr merge --merge --delete-branch
```

`.github/workflows/pages.yml` checks types, lints, builds, and deploys every push to `main`. View progress with `gh run list` and `gh run watch`. Tagged releases record major versions; use a new commit to revert a change and publish the rollback. Keep credentials out of the repository.

This is a GitHub **user site**, so `SITE_BASE_PATH` is empty. If moving to a project repository, set `SITE_BASE_PATH=/repository-name` during both local preview and build. Application image/audio paths use `lib/paths.ts`; native route links also use the base-path helper.

## Design

A midnight-blue, starry visual direction based on the original personal website. Home is a standalone full-screen performance photograph with centered name and a portfolio link. About, Portfolio, and Performance are separate pages. Portfolio recreates the original three square artworks with 200 ms hover/focus overlay fades. The two original blue background images overlap with gradient masks inside one continuous surface, fading to the common footer color. Touch devices keep titles visible; reduced-motion preferences disable transitions. About and Performance use independent photographs and midnight-blue color blocks. Home does not repeat category contents.

All personal content and media come from Yuheng Zhu's supplied material or the original portfolio. No reference-site photos or biographical content were copied. The unmodified generated UI catalog and its helper hook are excluded from application lint checks.
