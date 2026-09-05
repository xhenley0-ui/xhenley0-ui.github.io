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

The Performance page is intentionally empty until new concert recordings are ready. Add an object matching the `Performance` interface to `content/performances.ts`, then render the collection in `app/performance/page.tsx`. The two existing conducting videos remain attached to their original P!NK and Coldplay project detail pages through `content/projects.ts`.

Performance 页面目前按设计保持为空。之后上传演出视频时，在 `content/performances.ts` 中添加数据，并在 `app/performance/page.tsx` 中启用列表。原网站已有的两段指挥视频仍保留在 P!NK 与 Coldplay 的作品详情页。

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

A midnight-blue, starry visual direction based on the original personal website. Home starts with the full-screen performance photograph, then continues into the Dreams in Fragments feature and a concise About section. About, Portfolio, and Performance remain separate pages. Portfolio recreates the original three square artworks with 200 ms hover/focus overlay fades. Performance is an empty star-field page until new recordings are supplied. The original photographic contact footer appears on every page.

All personal content and media come from Yuheng Zhu's supplied material or the original portfolio. No reference-site photos or biographical content were copied. The unmodified generated UI catalog and its helper hook are excluded from application lint checks.
