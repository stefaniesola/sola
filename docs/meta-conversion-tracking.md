# Meta conversion tracking

Deze implementatie meet de SOLA Meta-funnel consent-aware via de browser-Pixel.
Er wordt geen Meta Conversions API-token of andere server-side secret gebruikt.

## Bestanden

- `src/components/analytics/MetaPixel.astro`: zet de publieke Pixel-config klaar en laadt de browserhelper.
- `src/scripts/meta-events.ts`: initialiseert `fbq`, bewaart UTM's per sessie, koppelt CTA-clicks en dedupliceert bedankpagina-events.
- `src/scripts/consent.ts`: bewaart cookievoorkeuren in `localStorage`.
- `src/components/analytics/ConsentBanner.astro`: lichte cookiebanner met noodzakelijke, analytics- en marketingkeuze.
- `src/scripts/google-tracking.ts`: laadt GA/GTM pas na analytics-toestemming.
- `src/pages/bedankt/intermittent-living-inschrijving.astro`: Tally-successpagina voor `Lead`.
- `src/pages/bedankt/gesprek-gepland.astro`: Calendly-successpagina voor `Schedule`.
- `src/pages/bedankt/contact.astro`: contactformulier-successpagina voor `Contact`.

## Environment variables

Zet geen echte waarde in Git.

| Variabele | Gebruik |
| --- | --- |
| `PUBLIC_META_PIXEL_ID` | Publieke Meta Pixel/Dataset ID voor browsertracking. |
| `PUBLIC_META_PIXEL_ENABLED` | `true` om tracking te activeren, `false` om tijdelijk uit te zetten. |
| `PUBLIC_META_PIXEL_ENV` | Vrij label zoals `preview` of `production`, alleen voor debugcontext. |
| `PUBLIC_META_PIXEL_DEBUG` | `true` toont beperkte consolelogs zonder persoonsgegevens. |

Lokale development stuurt standaard geen Meta-events, tenzij
`PUBLIC_META_PIXEL_ENABLED=true` en `PUBLIC_META_PIXEL_ID` lokaal expliciet gezet
zijn. Vercel Preview en Production kunnen dezelfde code gebruiken met een test-
of productiepixel.

## Eventoverzicht

| Event | Trigger | URL of element |
| --- | --- | --- |
| `PageView` | pagina bekeken na marketingconsent | hele website |
| `ViewContent` | Intermittent Living bekeken | `/weekenden/intermittent-living` |
| `InitiateCheckout` | klik op Boek nu | Tally `pbogoy` CTA's op Intermittent Living |
| `Lead` | Tally succesvol ingediend | `/bedankt/intermittent-living-inschrijving` |
| `Contact` | klik op Plan een gesprek | Calendly `hello-solatravel/30min` |
| `Schedule` | Calendly succesvol geboekt | `/bedankt/gesprek-gepland` |
| `Contact` | geldige contactactie | e-mail/WhatsApp op `/contact` of `/bedankt/contact` |

## Eventparameters

`ViewContent`

```js
{
  content_name: "Intermittent Living",
  content_category: "SOLA weekend",
  content_type: "product",
  content_ids: ["intermittent-living"],
  value: 685,
  currency: "EUR"
}
```

`InitiateCheckout`

```js
{
  content_name: "Intermittent Living inschrijving",
  content_category: "SOLA weekend",
  content_ids: ["intermittent-living"],
  value: 685,
  currency: "EUR"
}
```

`Lead`

```js
{
  content_name: "Intermittent Living inschrijving",
  content_category: "SOLA weekend",
  content_ids: ["intermittent-living"]
}
```

`Contact`

```js
{
  content_name: "Intermittent Living - Plan een gesprek",
  content_category: "SOLA weekend"
}
```

`Schedule`

```js
{
  content_name: "SOLA kennismakingsgesprek",
  content_category: "Intermittent Living"
}
```

De waarde `685` wordt alleen gebruikt zolang de websitecontent voor Intermittent
Living nog `€685` bevat. Er wordt geen `Purchase` verstuurd.

## Consent

Meta laadt pas na marketingtoestemming. GA/GTM laden pas na
analytics-toestemming. Weigeren of niet kiezen betekent dat er geen Meta-events
verstuurd worden. Via de footerlink `Cookievoorkeuren` kan de bezoeker de keuze
opnieuw openen.

## UTM-behoud

De helper leest bij de eerste landing deze parameters en bewaart ze in
`sessionStorage`:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`

Bij uitgaande Tally- en Calendly-links worden ontbrekende UTM-parameters aan de
URL toegevoegd. Bestaande parameters worden niet overschreven. Interne links
worden niet vervuild.

## Externe instellingen

Tally-formulier `pbogoy` moet na succesvolle inzending redirecten naar:

```text
https://www.solatravel.be/bedankt/intermittent-living-inschrijving
```

Contactformulier `yP4R2x` moet na succesvolle inzending redirecten naar:

```text
https://www.solatravel.be/bedankt/contact
```

Calendly eventtype `hello-solatravel/30min` moet na succesvolle boeking
redirecten naar:

```text
https://www.solatravel.be/bedankt/gesprek-gepland
```

Als Tally of Calendly een submission/invitee ID aan de redirect toevoegt, gebruikt
de helper die mee voor session-deduplicatie. Zonder ID voorkomt sessionStorage
dat een refresh dezelfde conversie opnieuw verstuurt.

## Testprocedure

1. Open Preview zonder toestemming en controleer dat `connect.facebook.net` niet laadt.
2. Accepteer marketingcookies en controleer `PageView`.
3. Open `/weekenden/intermittent-living` en controleer `PageView` + `ViewContent`.
4. Klik op `Boek nu` en controleer precies een `InitiateCheckout`.
5. Dien Tally `pbogoy` in en controleer redirect + precies een `Lead`.
6. Klik op `Plan een gesprek` en controleer precies een `Contact`.
7. Boek een Calendly-testgesprek en controleer redirect + precies een `Schedule`.
8. Open `/contact`; een pageview mag geen `Contact` zijn.
9. Klik e-mail/WhatsApp of voltooi het contactformulier en controleer een `Contact`.
10. Refresh bedankpagina's en controleer dat `Lead`, `Schedule` of formulier-`Contact` niet dubbel afgaat.

Gebruik Meta Events Manager Test Events of een testpixel voor Preview. Controleer
ook dat de GTM-container geen tweede Meta Pixel-tag afvuurt.

## Privacy

De implementatie stuurt alleen neutrale marketingcontext naar Meta:
paginanaam, eventtype, contentcategorie, interne content-ID, prijs en valuta.
Formuliergegevens, vrije tekst, contactgegevens, medische of gezondheidsinfo
worden niet naar Meta gestuurd.

