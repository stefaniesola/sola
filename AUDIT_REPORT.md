# SOLA Travel — SEO + Web Performance Audit Report

## A) Repo discovery & inventory

### Routes & page templates
- **Static pages (Astro):** `src/pages/index.astro`, `src/pages/contact.astro`, `src/pages/faq.astro`, `src/pages/newsletter.astro`, `src/pages/over-ons.astro`, `src/pages/privacy.astro`, `src/pages/terms.astro`.
- **Collection-like pages:** `src/pages/reizen/index.astro`, `src/pages/weekenden/index.astro`.
- **Dynamic routes:** `src/pages/reizen/[slug].astro`, `src/pages/weekenden/[slug].astro`.
- **Layouts:** `src/layouts/BaseLayout.astro` and head/meta handler `src/components/BaseHead.astro`.
- **Content source:** `src/data/content.ts` (journeys, page metadata, copy); `src/data/faq.ts` (FAQ content).
- **Images:** mostly in `src/assets/images` with Astro asset pipeline (`getImage`, `Image`).

### Shared components
- **Navigation + footer:** `src/components/global/Navigation.astro`, `src/components/global/Footer.astro`.
- **FAQ accordion:** `src/components/infopages/Faq.astro`.
- **Optimized images:** `src/layouts/utilities/OptimizedImage.astro`.

---

## B) Audit findings (P0 / P1 / P2)

### P0 — Critical
- **Missing structured data coverage for journeys and FAQs.**
  - **Impact:** Reduced eligibility for rich results; weaker SERP enhancement signals.
  - **Files:** `src/pages/weekenden/[slug].astro`, `src/pages/reizen/[slug].astro`, `src/pages/faq.astro`, `src/components/BaseHead.astro`, `src/layouts/BaseLayout.astro`.

### P1 — High priority
- **Internal linking gaps in on-page copy for key journey terms and entry points.**
  - **Impact:** Weaker crawl paths + reduced contextual relevance for priority routes.
  - **Files:** `src/pages/index.astro`, `src/pages/reizen/index.astro`, `src/pages/weekenden/[slug].astro`, `src/pages/over-ons.astro`.
- **Footer missing FAQ link.**
  - **Impact:** Reduced global discoverability + crawl depth for FAQ.
  - **Files:** `src/components/global/Footer.astro`.

### P2 — Medium priority
- **Legacy public image usage for primary portraits.**
  - **Impact:** Missed asset pipeline optimizations (responsive formats, size metadata).
  - **Files:** `src/pages/over-ons.astro`.

---

## C) Implementation plan (exact files)

1. **Structured data**
   - Add Organization + WebSite JSON-LD sitewide in `BaseLayout/BaseHead`.
   - Add TouristTrip JSON-LD for journey pages and FAQPage JSON-LD where FAQs are present.
   - **Files:**
     - `src/components/BaseHead.astro`
     - `src/layouts/BaseLayout.astro`
     - `src/pages/weekenden/[slug].astro`
     - `src/pages/reizen/[slug].astro`
     - `src/pages/faq.astro`

2. **Internal linking + UX crawl paths**
   - Link “reizen”/“weekenden” in existing text blocks.
   - Link “inschrijving” to terms in weekend detail pages.
   - **Files:**
     - `src/pages/index.astro`
     - `src/pages/reizen/index.astro`
     - `src/pages/weekenden/[slug].astro`
     - `src/pages/over-ons.astro`

3. **Footer navigation completeness**
   - Add FAQ link in footer.
   - **Files:**
     - `src/components/global/Footer.astro`

4. **Image pipeline consistency**
   - Move primary portrait to Astro image pipeline for sizing + CLS stability.
   - **Files:**
     - `src/pages/over-ons.astro`

---

## D) Expected impact summary
- **Core Web Vitals:** Improved CLS stability for key portrait imagery; maintain LCP priority handling for hero images.
- **Technical SEO:** Consistent structured data across the site; stronger canonical + OG coverage; improved rich result eligibility.
- **On-page SEO:** Better internal linking and contextual relevance for high-intent routes.
- **UX/conversion:** Clearer wayfinding to FAQ and terms without adding new copy.

---

## E) Verification plan (commands + checks)

### Build + preview
- `pnpm build`
- `pnpm preview`

### Checklist
- **No broken links:** run a link checker (e.g., `npx linkinator http://localhost:4321 --skip "https://calendly.com/*" --skip "https://tally.so/*"`).
- **Lighthouse:** run `npx lighthouse http://localhost:4321 --view` and verify LCP/CLS/INP improvements.
- **Sitemap:** confirm `https://solatravel.be/sitemap-index.xml` includes all routes.
- **Robots:** confirm `/robots.txt` is accessible and references the sitemap.
- **Rich results:** validate JSON-LD (Organization, WebSite, TouristTrip, FAQPage) in Google Rich Results Test.
