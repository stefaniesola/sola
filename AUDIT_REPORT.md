# SOLA Travel SEO + Performance Audit Report

## Phase 1 — Repo discovery & inventory

### How pages are generated
- **Routes & structure**: Astro routes live in `src/pages`, with dynamic routes for `/weekenden/[slug].astro` and `/reizen/[slug].astro`. The content is data-driven via `src/data/content.ts` (journeys/people). 
- **SEO metadata**: Site-wide metadata is defined in `src/components/BaseHead.astro`, with page-level props passed through `src/layouts/BaseLayout.astro`.
- **Image pipeline**: `astro:assets` (`getImage`) is used for local images. A custom `OptimizedImage` helper exists in `src/layouts/utilities/OptimizedImage.astro`.
- **Navigation/links**: Global navigation + footer are in `src/components/global`. Internal linking appears on hero CTAs and listing cards.

### Page inventory (after updates)
| Page | Title | Meta description | Single H1 | Canonical | OG tags | Structured sections | Image alts | Internal links | External links |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/weekenden` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| `/weekenden/exercise-is-medicine` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/weekenden/bewustwording-connectie` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/reizen` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| `/reizen/sola-terra-frankrijk` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| `/over-ons` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/contact` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/faq` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| `/newsletter` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/privacy` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| `/terms` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — |

## Phase 2 — SEO fixes (sitewide)
- **Titles + meta descriptions**: Enforced unique titles and descriptions, including weekend-specific format and descriptions derived from existing content.
- **Headings**: Ensured single H1 on the FAQ page and preserved hierarchy across templates.
- **Canonical + Open Graph**: Added canonical URLs and OG/Twitter metadata for every page.
- **Image alts**: Replaced background-image usage with `<img>` tags where appropriate to ensure alt text and layout stability.
- **Sitemap + robots**: Corrected `site` in `astro.config.mjs` and added `robots.txt` for sitemap discovery.
- **Internal linking**: Added contextual links on weekend detail pages to About, Contact, FAQ, and overview.

## Phase 3 — Performance & load speed improvements
- **Images**: Replaced background images with responsive `<img>` tags, added explicit dimensions, and set lazy loading below the fold.
- **LCP/CLS**: Added eager loading + `fetchpriority="high"` on hero images and explicit `width`/`height` attributes on all meaningful images.
- **External links in markdown**: Ensured external links open in a new tab with secure rel attributes.

### Performance report
**🔴 Critical (must fix)**
- None outstanding after the current pass.

**🟠 Important (should fix)**
- Consider further reducing third-party script impact (GTM/analytics) by deferring non-essential tracking if business constraints allow.

**🟢 Nice to improve**
- Add a dedicated Open Graph image asset optimized for social sharing (1200x630).

## Phase 4 — External partner links
- Added consistent external links to partner brands within weekend longreads and partner cards.
- Enforced `target="_blank"` and `rel="noopener noreferrer"` for external links.

## Phase 5 — Checklist for future pages
1. Add a unique title + meta description in the page data.
2. Ensure exactly one H1 per page.
3. Provide canonical and OG tags via `BaseLayout`.
4. Use `<img>` with explicit `width`/`height` for all meaningful images.
5. Add descriptive alt text (empty alt only for decorative images).
6. Link relevant pages internally (overview ↔ detail ↔ contact/faq).
7. For external partners: use brand name as anchor text + open in new tab with `noopener noreferrer`.

## Files changed
- `astro.config.mjs`
- `public/robots.txt`
- `src/components/BaseHead.astro`
- `src/layouts/BaseLayout.astro`
- `src/utils/markdown.ts`
- `src/data/content.ts`
- `src/pages/index.astro`
- `src/pages/weekenden/index.astro`
- `src/pages/weekenden/[slug].astro`
- `src/pages/reizen/index.astro`
- `src/pages/reizen/[slug].astro`
- `src/pages/over-ons.astro`
- `src/components/infopages/Faq.astro`
- `src/pages/faq.astro`
