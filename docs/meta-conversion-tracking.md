# Meta en GA4 conversion tracking

SOLA meet browser-events alleen na cookieconsent. Er is geen Meta Conversions API en er worden geen persoonsgegevens, vrije tekst of gezondheidsgegevens verstuurd.

## Bestanden

- `src/components/analytics/MetaPixel.astro`: publieke Meta Pixel-config.
- `src/scripts/meta-events.ts`: Meta-events, UTM-behoud en sessie-deduplicatie.
- `src/scripts/google-tracking.ts`: directe GA4-load en GA4-events.
- `src/components/analytics/ConsentBanner.astro`: analytics- en marketingtoestemming.
- `src/pages/bedankt.astro`: enige bedankpagina, met `noindex, nofollow`.

## Environment variables

| Variabele | Preview | Production |
| --- | --- | --- |
| `PUBLIC_META_PIXEL_ID` | `2265839607276716` | `2265839607276716` |
| `PUBLIC_META_PIXEL_ENABLED` | `true` | `true` |
| `PUBLIC_META_PIXEL_ENV` | `preview` | `production` |
| `PUBLIC_META_PIXEL_DEBUG` | `true` | `false` |

## Google-keuze

De site gebruikt directe GA4 met Measurement ID `G-QKFM5L5T7R`. De GTM-container `GTM-WXRV8S6Z` wordt niet door de websitecode geladen. Als GTM later terugkomt, controleer eerst dat er geen tweede GA4-pageview of Meta Pixel-tag in zit.

## Eventmatrix

| Platform | Event | Trigger | Consent |
| --- | --- | --- | --- |
| Meta | `PageView` | pagina bekeken | marketing |
| Meta | `ViewContent` | `/weekenden/intermittent-living` | marketing |
| Meta | `InitiateCheckout` | klik op Tally `pbogoy` CTA | marketing |
| Meta | `Lead` | exact `/bedankt?type=tally` | marketing, sessie-dedupe |
| Meta | `Contact` | klik op Calendly `hello-solatravel/30min` | marketing |
| GA4 | `generate_lead` | exact `/bedankt?type=tally` | analytics, sessie-dedupe |
| GA4 | `contact_click` | klik op Calendly `hello-solatravel/30min` | analytics |

Er wordt geen boekingsevent verstuurd. Een Calendly-click is geen geboekte afspraak.

## Parameters

Meta `Lead` gebruikt alleen:

```js
{
  content_name: 'SOLA Tally inzending',
  content_category: 'SOLA lead'
}
```

Calendly-clicks gebruiken `content_name` en `content_category`; Intermittent Living krijgt `Intermittent Living - Plan een gesprek` en `SOLA weekend`, andere pagina's krijgen `SOLA kennismakingsgesprek` en `Contact`.

## Tally-bedank-URL

Alle Tally-inzendingen moeten exact redirecten naar:

```text
https://www.solatravel.be/bedankt?type=tally
```

Voeg geen `form`, `submission_id`, formulier-ID, UTM of andere queryparameters toe. Alleen exact `/bedankt?type=tally` verstuurt Meta `Lead` en GA4 `generate_lead`. `/bedankt`, andere `type`-waarden, extra queryparameters en bedanksubroutes versturen geen Tally Lead. Een refresh in dezelfde browsersessie verstuurt geen tweede conversie.

## Calendly

Calendly Free wordt voorlopig alleen als klik gemeten:

- Meta `Contact`
- GA4 `contact_click`

Er wordt geen voltooide afspraak gemeten.

## UTM-behoud

`utm_source`, `utm_medium`, `utm_campaign`, `utm_content` en `utm_term` worden per sessie bewaard en alleen toegevoegd aan uitgaande Tally- en Calendly-links wanneer die parameter nog ontbreekt. Interne links en de Tally-bedankredirect blijven schoon.

## Testprocedure Preview

1. Zet de Preview-env vars uit de tabel.
2. Zonder consent mogen `connect.facebook.net` en `googletagmanager.com/gtag/js` niet laden.
3. Met marketingconsent: controleer `PageView`, `ViewContent`, `InitiateCheckout`, `Lead` op exact `/bedankt?type=tally`, en `Contact` op Calendly-click.
4. Refresh `/bedankt?type=tally`: geen tweede Meta `Lead`.
5. Met analyticsconsent: controleer `generate_lead` op exact `/bedankt?type=tally` en `contact_click` op Calendly-click.
6. Refresh `/bedankt?type=tally`: geen tweede GA4 `generate_lead`.
7. Controleer dat `/bedankt`, `/bedankt?type=nieuwsbrief`, `/bedankt?type=contact` en URL's met extra queryparameters geen Tally Lead sturen.
8. Controleer dat er geen aparte bedankroutes meer bestaan en dat de sitemap geen bedank-URL's bevat.

Gebruik Meta Events Manager Test Events en GA4 DebugView.

## Testprocedure Production

1. Zet de Production-env vars uit de tabel.
2. Controleer maximaal een directe GA4 `gtag/js` load en geen GTM-script vanuit de websitecode.
3. Controleer een enkele Meta Pixel-ID: `2265839607276716`.
4. Herhaal de Preview-test voor de Tally-URL, refresh, alternatieve `type`-waarden, Calendly-clicks en sitemap.
