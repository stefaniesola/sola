# SOLA Travel live website audit (SEO + performance)

**Date audit:** 31 March 2026  
**Site reviewed:** https://www.solatravel.be  
**Reviewer lens:** technical SEO + performance engineering + conversion-aware UX  
**Primary audience context:** Dutch-speaking Belgium/NL, premium health-travel positioning.

---

## Method & evidence base

I manually reviewed key live pages and URL variants with a browser crawler tool and spot-checked page content, link structure, page titles (as exposed in page headers), and mobile-oriented UX signals.

### Pages reviewed
- Home: `/`
- Reizen overview: `/reizen`
- Weekenden overview: `/weekenden`
- Weekend pages:
  - `/weekenden/exercise-is-medicine`
  - `/weekenden/bewustwording-connectie`
  - `/weekenden/intermittent-living`
- About: `/over-ons`
- Contact: `/contact`
- FAQ: `/faq`
- Newsletter: `/newsletter`
- Legal:
  - `/privacy` (linked as “Privacybeleid” in navigation)
  - `/terms` (linked as “Algemene Voorwaarden”)

### Important limitation
- I could not retrieve direct machine-readable `robots.txt`, `sitemap.xml`, response headers, or live Lighthouse/PageSpeed telemetry from this environment. Wherever this prevents certainty, I explicitly label assumptions.

---

## PART 1 — Executive summary

### Overall SEO assessment (current state)
**Good foundation, but currently under-leveraged for organic growth.**
- Strong thematic relevance around health + movement + nature.
- Good long-form conversion content on weekend pages.
- Internal topical depth exists, but SEO targeting is still mostly brand-led and not fully search-led (especially for Dutch search demand clusters).
- Some high-value pages have unclear keyword targeting and/or weak language consistency signals.

**SEO maturity score (practical): 6.5/10**

### Overall performance/speed assessment (current state)
**Likely decent baseline (Astro), but image-heavy templates create probable mobile bottlenecks.**
- Weekend detail pages include large image galleries and long accordion-like content blocks.
- Strong risk of slower mobile LCP on hero images and high bytes from visual media.
- Likely wins available via image pipeline, dimensions discipline, and stricter JS hydration budget.

**Performance maturity score (practical): 6/10**

### Biggest risks
1. **Missed Dutch query coverage** for non-brand intent (retreat intent, thematic health intent, location intent).  
2. **Language mismatch risk** (FAQ H1 currently English while page content is Dutch).  
3. **Potential media-weight drag** on mobile for image-heavy weekend pages.  
4. **Potential technical SEO blind spots** (robots/sitemap/canonical/schema not verifiable in this run).  
5. **Insufficient explicit “outcome/transformation” framing in some key above-the-fold areas**, limiting conversion quality and relevance signals.

### Biggest opportunities
1. Build clear **Dutch intent clusters** around scientifically-guided health weekenden in Belgium/Ardennen.  
2. Add robust **schema strategy** (Organization, WebSite, FAQ, BreadcrumbList, Event variants).  
3. Tighten **on-page keyword architecture** so each core page owns one main intent.  
4. Apply **Astro-native image + hydration optimization** for mobile speed.  
5. Make participant outcomes explicit in first screen + snippets (“wat levert het je op in je dagelijkse leven?”).

### Top 10 priority actions (ranked by impact)
1. Add/verify **technical SEO baseline**: robots, sitemap(s), canonical, hreflang/lang, indexability checks.  
2. Fix **FAQ language mismatch** (`Frequently asked questions` → Dutch H1).  
3. Implement **structured data stack** (Organization, WebSite, BreadcrumbList, FAQPage, Event on weekend pages).  
4. Rework page titles/meta descriptions for **Dutch intent + outcome clarity** on all money pages.  
5. Improve **image delivery** (responsive sizes, compression, width/height, lazy strategy) on weekend pages.  
6. Create **supporting thematic landing pages** (nervous system, stress resilience, movement/recovery, women’s health).  
7. Strengthen **internal links** between weekenden ↔ FAQ ↔ over-ons experts ↔ contact.  
8. Add **E-E-A-T trust blocks**: expert credentials, methodology, safety/contraindications, post-weekend transfer plan.  
9. Optimize **mobile CTA flow** (sticky/recurring CTA, reduced friction to consult/booking).  
10. Reduce possible JS/hydration overhead and defer non-critical third-party scripts.

---

## PART 2 — Technical SEO audit

## 2.1 Indexation & crawlability

### Observed
- URL canonical preference appears consistent toward `https://www.solatravel.be` via redirects from `http://solatravel.be` and `https://solatravel.be` to the `www` host.
- Trailing slash normalization appears active at least on `/weekenden/` redirecting to `/weekenden`.

### Assumptions / not fully verified in this run
- `robots.txt`, `sitemap.xml`, XML URL coverage, canonical tags, and meta robots directives could not be directly validated due environment constraints.

### Recommendations
1. **Verify and harden indexability baseline**
   - Ensure a clean `robots.txt` with sitemap reference(s).
   - Provide one canonical XML sitemap index with all live canonical URLs.
   - Confirm self-referencing canonical on all indexable pages.
   - Confirm no accidental `noindex` on core pages.
2. **Confirm single URL policy**
   - Force HTTPS + `www` + non-trailing canonical consistently.
3. **Orphan protection**
   - Ensure all weekend pages are linked from `/weekenden`, `/reizen`, home modules, and XML sitemap.

## 2.2 Meta & page-level SEO

### Strengths
- Page naming is generally clear and brand-consistent.
- Important commercial pages have dedicated URLs.

### Issues spotted
- **FAQ H1 is English** while target market/page language is Dutch (`Frequently asked questions`).
- Some pages likely under-target explicit search intent in title/meta (brand-first rather than intent-first).
- Weekend pages have strong body copy, but snippet strategy can better surface “resultaat” and “voor wie”.

### Recommendations
- Rewrite titles/meta for intent + location + transformation:
  - Example pattern: `Health weekend Ardennen | Intermittent Living | SOLA`
  - Meta pattern: “Wetenschappelijk begeleid weekend in kleine groep. Meer energie, focus en veerkracht met concrete tools voor thuis.”
- Enforce one clear primary intent per page:
  - `/reizen`: broad offer + brand category intent
  - `/weekenden`: transactional/comparison intent
  - each weekend page: specific thematic intent + booking intent

## 2.3 Structured data

### Observed
- Could not confirm JSON-LD presence from rendered extraction.

### Recommended realistic schema stack
1. **Organization** + social profiles + contact point
2. **WebSite** + `SearchAction` (if site search exists)
3. **BreadcrumbList** on all subpages
4. **FAQPage** on `/faq` and optionally section-level weekend FAQs
5. **Event** schema on each weekend detail page (best practical choice)
6. Optional: **Article** only when insight/blog content is launched

> Note: `TouristTrip` is possible but `Event` is usually easier and better-supported for date/location/price/availability.

## 2.4 Internal linking

### Observed
- Core navigation is clean.
- Weekend pages are reachable from home, reizen, weekenden.

### Gaps
- Limited contextual deep links from informational pages into specific weekend intents.
- FAQ entries could link more precisely to relevant weekend pages and contact/consult flow.
- Expert mentions on `over-ons` could link to matching weekend pages with anchor relevance.

### Recommendations
- Add thematic contextual links:
  - FAQ question about stress/focus → Intermittent Living page.
  - FAQ physical condition question → Beweging als medicijn page.
  - Emotional regulation question → Bewustwording & Connectie page.
- Add “Gerelateerd weekend” blocks on each weekend page.

## 2.5 Keyword targeting (Dutch BE/NL intent)

### Observed current positioning
- Strong brand voice, but limited explicit targeting of high-intent Dutch query variants.
- Thematic opportunity is large relative to current content footprint.

### Cannibalization risks
- `reizen` and `weekenden` pages are very similar in framing; intent separation can be clearer.

### Recommended primary intent map
- `/weekenden`: “health weekend België/Ardennen”, “gezondheidsweekend kleine groep”, “retreat gezondheid België”
- `/weekenden/intermittent-living`: “intermittent living weekend”, “stress veerkracht weekend”, “koude training ademhaling weekend België”
- `/weekenden/exercise-is-medicine`: “beweging als medicijn”, “sportwetenschap weekend”, “gezondheid door beweging weekend”
- `/weekenden/bewustwording-connectie`: “emotionele balans weekend”, “zelfregulatie weekend”, “lichaamswerk weekend Ardennen”

## 2.6 Image SEO

### Observed
- Alt texts are present broadly (good).
- Many gallery images per weekend page create high payload risk.

### Recommendations
- Ensure descriptive, non-generic alt text where image meaning is informative.
- Use responsive image generation (`srcset/sizes`) and modern formats.
- Enforce dimensions to avoid CLS.
- Lazy-load non-critical gallery images.
- Audit duplicate/near-duplicate gallery shots; keep only conversion-relevant images above fold.

## 2.7 International / locale signals

### Observed
- Main content language is Dutch.
- At least one prominent English heading appears on FAQ page.

### Recommendations
- Ensure `lang="nl-BE"` at HTML root (or `nl` with consistent locale strategy).
- If actively targeting NL + BE with locale-specific variants later: implement `hreflang` carefully.
- Keep visible copy consistently Dutch to avoid mixed-language quality signals.

---

## PART 3 — On-page SEO & content quality (page-by-page)

## 3.1 Homepage `/`

### What works
- Strong brand positioning and differentiated tone.
- Good explanation of methodology (science + movement + nature).
- Contains weekend preview cards and conversion CTAs.

### Improve
- Above-the-fold should be even more explicit on **result**:
  - energy, rust in hoofd, stressregulatie, concrete tools for daily life.
- Add tighter keyword-supporting microcopy in intro without harming premium tone.
- Add short trust strip: participant cap, expert credentials, science-based methods.

## 3.2 Reizen overview `/reizen`

### What works
- Clear card overview and pipeline (“coming soon”).

### Improve
- Distinguish from `/weekenden` (now similar). Suggested role:
  - `/reizen` = broader travel portfolio + destinations + philosophy.
  - `/weekenden` = immediate bookable offers.
- Add 150–250 words of SEO-supportive intro text with Dutch intent terms and “voor wie” framing.

## 3.3 Weekenden overview `/weekenden`

### What works
- Strong conversion utility page.
- Good scanning structure with cards.

### Improve
- Add comparison-oriented block: “Welk weekend past bij jou?”
- Add outcome matrix (energie/focus/stress/lichamelijke conditie) linked to each weekend page.
- Add FAQ teaser with internal links.

## 3.4 Weekend detail pages (all 3)

### What works
- Rich content depth and practical information.
- Clear location/date/price and CTA presence.
- Outcome statements appear (especially Intermittent Living FAQ section).

### Improve
- Tighten intro paragraphs for search intent and outcomes in first 2 sentences.
- Add quick “Resultaat in 3 punten” block near hero.
- Add trust evidence blocks:
  - expert credentials summary,
  - safety boundaries/contraindications,
  - what happens after the weekend (transfer to daily routine).
- Add structured data `Event` and page-specific FAQ schema.

## 3.5 Over ons `/over-ons`

### What works
- Strong human credibility narrative.
- Team and expert profiles are useful trust assets.

### Improve
- Add credential markers (years, certifications, domains) in a structured way for scanners.
- Add internal links from each expert profile to relevant weekend page(s).
- Add a concise “Waarom dit werkt” section with scientific references summary (plain language).

## 3.6 Contact `/contact`

### What works
- Clear low-friction human contact options.

### Improve
- Add expectation-setting copy: response time, who replies, what users get from intake call.
- Add mini FAQ block to reduce hesitation.

## 3.7 FAQ `/faq`

### What works
- Excellent breadth of practical objections and decision-stage questions.

### Critical fix
- Change H1 from English to Dutch (e.g., `Veelgestelde vragen`).

### Improve
- Group FAQs by theme (`Boeking`, `Programma`, `Fysieke haalbaarheid`, `Veiligheid`, `Annulatie`).
- Add deep links (anchor jump navigation).
- Add schema `FAQPage`.
- Link relevant answers to specific weekend pages.

## 3.8 Newsletter `/newsletter`

### What works
- Simple and focused.

### Improve
- Add clear value proposition: what frequency, what content, why subscribe.
- Add privacy reassurance near form CTA.

---

## PART 4 — Core Web Vitals & performance review

> Because field/lab telemetry was not available in this environment, items below are based on page structure observations and common Astro optimization patterns.

## 4.1 Likely bottlenecks
1. **LCP risk:** large hero images on home and weekend pages.
2. **Total bytes risk:** long horizontal gallery sections with many images.
3. **CLS risk:** if any images/cards lack intrinsic width/height.
4. **INP risk:** if interactive accordions/carousels hydrate too eagerly.
5. **Third-party risk:** external booking/contact embeds (Calendly/Tally/Mailchimp) if loaded too early.

## 4.2 High-value no-design-change improvements
- Use Astro `Image`/`Picture` components for all content images.
- Serve AVIF/WebP with robust `srcset` + `sizes`.
- Preload only one true LCP asset per page.
- `loading="lazy"` + `decoding="async"` on offscreen media.
- Set explicit width/height or aspect ratio placeholders.
- Defer non-critical third-party scripts until interaction/idle.
- Audit hydration and switch interactive islands to `client:visible` / `client:idle` where possible.

## 4.3 Astro-specific optimization focus
- Prefer static rendering for content-heavy pages.
- Keep components server-rendered by default; hydrate only when needed.
- Split long pages with heavy interactive UI into minimal islands.
- Ensure critical CSS is not bloated by unused utility classes.

## 4.4 Mobile-first priorities
1. Hero media bytes (LCP).
2. Gallery lazy strategy and smarter image counts above fold.
3. Keep CTA persistent and tappable (book/plan call).
4. Reduce interaction cost in accordions/menus.

---

## PART 5 — Page-specific technical checks

## 5.1 Unique titles/meta descriptions
- Titles appear unique on major pages (observed in page headers/tool titles).
- Meta descriptions could not be directly validated; recommend automated crawl check to ensure uniqueness and quality.

## 5.2 Header image consistency
- Visual pattern is consistent across weekend pages (good brand coherence).
- Need technical consistency: ensure all hero assets follow same responsive pipeline and byte budget.

## 5.3 Card/hero/page-header optimization
- Weekend cards and hero galleries likely dominate payload.
- Prioritize card image sizes for mobile list views.

## 5.4 Structured data on weekend pages
- Add `Event` (+ `Offer`, `Place`, `Organizer`) with date/location/price/availability.

## 5.5 Mobile CTA/form ease
- CTAs are present; improve with sticky/recurring mobile CTA for long pages.
- External booking flow should open fast and with context continuity.

## 5.6 Accessibility items influencing SEO/performance
- Verify heading order (currently seems reasonable but needs DOM-level audit).
- Ensure accordion controls are keyboard and ARIA-compliant.
- Ensure tap target sizing for mobile nav/CTAs.

## 5.7 Thin-content risk
- Core pages are not thin overall; content is substantial.
- Some overview pages could use richer, intent-explicit intro blocks to rank better for generic queries.

## 5.8 Unnecessary media/scripts
- Investigate loading policy for gallery images and third-party embeds.

---

## PART 6 — Content & information architecture opportunities

Recommended cluster expansion (brand-fit and intent-fit):

1. **Pillar page:** `Gezondheidsweekend België: welke aanpak past bij jou?`
2. **Cluster pages:**
   - `Intermittent Living uitgelegd (praktisch, wetenschappelijk, veilig)`
   - `Beweging en herstel: hoe bouw je duurzame energie op?`
   - `Stress, zenuwstelsel en zelfregulatie in het dagelijks leven`
   - `Ademhaling, koude en veerkracht: wat werkt echt?`
   - `Women’s health weekends / hormonale balans & energie` (if truly in offer roadmap)
3. **Local intent pages (careful, non-spam):**
   - `Health retreat Ardennen`
   - `Kleinschalig gezondheidsweekend België`
4. **Evidence-forward insights/blog**
   - monthly expert-led article cadence to build topical authority and trust.

Guiding principle: each page must translate theory into **daily life outcomes** with practical steps.

---

## PART 7 — Prioritized action plan

## 1) Must fix now (0–30 days)

1. **Fix FAQ H1 language mismatch**  
   - Why: consistency + quality signal + UX trust.  
   - Impact: SEO + UX + conversion clarity.  
   - Difficulty: Low.  
   - Type: SEO/UX.

2. **Verify technical indexation stack** (`robots`, sitemap, canonical, noindex, redirects)  
   - Why: prevents crawl/index errors at foundation level.  
   - Impact: SEO.  
   - Difficulty: Low/Medium.  
   - Type: Technical SEO.

3. **Implement/validate structured data baseline** (Organization/WebSite/Breadcrumb/FAQ/Event)  
   - Why: richer SERP eligibility and entity clarity.  
   - Impact: SEO + CTR.  
   - Difficulty: Medium.  
   - Type: Technical SEO.

4. **Optimize hero + gallery image delivery on weekend pages**  
   - Why: likely primary mobile speed bottleneck.  
   - Impact: Performance + SEO + conversion.  
   - Difficulty: Medium.  
   - Type: Speed/Technical.

## 2) High impact next (1–2 months)

5. **Retune titles/meta for Dutch intent + transformation language**  
   - Why: stronger query match and click relevance.  
   - Impact: SEO + CTR.  
   - Difficulty: Medium.  
   - Type: SEO/Content.

6. **Differentiate `/reizen` vs `/weekenden` intent architecture**  
   - Why: avoid overlap/cannibalization and improve topical clarity.  
   - Impact: SEO + UX.  
   - Difficulty: Medium.  
   - Type: SEO/IA.

7. **Add contextual internal links between FAQ/experts/weekend pages**  
   - Why: better discoverability and intent reinforcement.  
   - Impact: SEO + conversion.  
   - Difficulty: Low/Medium.  
   - Type: SEO/UX.

8. **Strengthen trust and outcome blocks above fold on money pages**  
   - Why: improves qualified conversion and message clarity.  
   - Impact: Conversion + SEO satisfaction signals.  
   - Difficulty: Medium.  
   - Type: Content/UX.

## 3) Nice to improve later (2–4 months)

9. **Launch Dutch topic cluster content (science-led health travel themes)**  
   - Why: expands non-brand organic footprint and authority.  
   - Impact: SEO (high long-term).  
   - Difficulty: High (editorial cadence).  
   - Type: Content strategy.

10. **Implement performance budgets + CWV monitoring process**  
   - Why: keeps performance gains from regressing as content grows.  
   - Impact: Performance + SEO resilience.  
   - Difficulty: Medium.  
   - Type: Technical/performance ops.

---

## PART 8 — Code-level implementation suggestions (Astro)

Likely files to touch (typical Astro structure; confirm exact paths in repo):
- `src/layouts/BaseLayout.astro` (lang, canonical, default meta)
- `src/components/Seo.astro` or equivalent (title/meta/canonical/og)
- `src/components/schema/*.ts|astro` (JSON-LD injectors)
- `src/pages/faq.astro`
- `src/pages/weekenden/*.astro`
- `src/pages/reizen.astro`
- `src/components/Hero*.astro`, `Card*.astro`, `Gallery*.astro`

### Suggested change types
1. **Meta/canonical consistency layer** in one SEO component.
2. **Schema component system** with page-specific props.
3. **Image migration** to Astro `Image`/`Picture`, strict `sizes`, intrinsic dimensions.
4. **Hydration audit**: minimize `client:*` directives.
5. **Third-party script gating** (on interaction/idle).
6. **Mobile sticky CTA** component for long sales pages.

### Astro snippet examples

```astro
---
import { Image } from 'astro:assets';
import heroImg from '../assets/weekenden/intermittent-hero.jpg';
---
<Image
  src={heroImg}
  alt="Intermittent Living weekend in de Hoge Venen"
  widths={[480, 768, 1200, 1600]}
  sizes="(max-width: 768px) 100vw, 1200px"
  loading="eager"
  fetchpriority="high"
/>
```

```astro
<script type="application/ld+json" set:html={JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Intermittent Living weekend',
  startDate: '2026-09-18',
  endDate: '2026-09-20',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Hoge Venen, Ardennen'
  },
  organizer: { '@type': 'Organization', name: 'SOLA' },
  offers: {
    '@type': 'Offer',
    price: '670',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock'
  }
})} />
```

---

## Practical top-issues table

| Priority | Issue | Why it matters | Impact | Difficulty | Type |
|---|---|---|---|---|---|
| P1 | FAQ H1 in English | Language consistency, trust, SEO relevance | SEO/UX | Low | SEO |
| P1 | Unverified crawl/index stack | Risk of hidden indexation blockers | SEO | Low-Med | Technical SEO |
| P1 | Missing/unclear schema coverage | Missed rich results/entity signals | SEO/CTR | Med | Technical SEO |
| P1 | Image-heavy weekend pages | Mobile CWV and conversion speed risk | Speed/SEO/CVR | Med | Performance |
| P2 | Intent overlap reizen/weekenden | Dilutes keyword targeting | SEO | Med | IA/SEO |
| P2 | Titles/meta not fully intent-optimized | Lower CTR / weaker query match | SEO/CTR | Med | On-page SEO |
| P2 | Weak deep contextual linking | Less semantic reinforcement | SEO/CVR | Low-Med | Internal linking |
| P2 | Outcomes not explicit enough above fold | Lower conversion quality | CVR/SEO | Med | UX/Content |
| P3 | Limited Dutch topical cluster footprint | Slower authority growth | SEO | High | Content strategy |
| P3 | No explicit performance budget process | Risk of regressions | Speed/SEO | Med | Engineering process |

