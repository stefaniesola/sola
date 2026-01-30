export type JourneyType = "Weekend" | "Reis";

export interface Journey {
  slug: string;
  name: string;
  type: JourneyType;
  shortDescription: string;
  location: string;
  dates: string;
  price: string;
  heroImage?: string;
  longread?: string; // Markdown content for the full article
}

export interface Person {
  name: string;
  role: string;
  type: "Core" | "Expert";
  bio: string;
  logo?: string;
  isTeamMember?: boolean;
  website?: string;
}

export const journeys: Journey[] = [
  {
    slug: "exercise-is-medicine",
    name: "Beweging als medicijn",
    type: "Weekend",
    shortDescription:
      "Met Simon van Simon Endurance Lab leer je hoe inspanning je hart, uithouding en stofwisseling versterkt en hoe je beweging en sport gericht inzet voor je algemene gezondheid.",
    location: "Hoge Venen, Ardennen",
    dates: "31 juli – 2 augustus 2026",
    price: "€550",
    heroImage: "/src/assets/images/2596052607.jpg",
    longread: `Samen met Simon van Endurance Lab duik je in de kracht van beweging als fundament van gezondheid. Tijdens dit weekend komen wetenschap, ervaring en lichaamsbewustzijn samen. Je ontdekt waarom bewegen werkt, wat het doet met jouw lichaam en hoe kennis je helpt beweging vol te houden met meer vertrouwen en plezier.

## Voor wie

- Sportieve en actieve mensen met interesse in gezondheid
- Mensen die willen bewegen, maar drempels ervaren
- Gemotiveerde recreanten die het waarom achter beweging willen begrijpen
- Deelnemers met een groeimindset, met of zonder concreet sportdoel

## Wat je leert / focus

- Waarom fysieke inspanning een essentieel "medicijn" is voor gezondheid
- Hoe beweging je cardiovasculaire, metabole en mentale gezondheid beïnvloedt
- Hoe data en metingen je helpen je lichaam beter te begrijpen
- Hoe je leert luisteren naar signalen van je lichaam: meten én voelen

## Na dit weekend

- Heb je meer inzicht in hoe jouw lichaam reageert op beweging
- Weet je hoe je bewuster en consistenter kan blijven bewegen
- Kan je betere keuzes maken rond training, herstel en rust
- Ga je naar huis met concrete handvaten voor je eigen praktijk

## Begeleiding

**Simon Helleputte** – Doctor in Health Sciences, Endurance Lab

Simon combineert wetenschappelijke expertise met praktijkervaring rond beweging en gezondheid. Hij vertaalt complexe inzichten naar helder, toepasbaar begrip dat je helpt bewuster en duurzamer te bewegen.

**SOLA**

Stefanie begeleidt dit weekend en stemt het inhoudelijk af met de expert. Samen met het SOLA-team en vrijwilligers zorgen we voor een veilige en zorgzame setting waarin iedereen zich gezien voelt.

## Programma

### Dag 1 – Vrijdag | Aankomst & activatie

- Aankomst & warme kennismaking met SOLA × Endurance Lab
- Gezamenlijk avondmaal om te landen en te verbinden
- Avondreflectie: je intentie voor het weekend
- Introductie van het programma en inhoudelijke accenten door SOLA en Simon

### Dag 2 – Zaterdag | Inzichten & inspanning

- Sunrise-moment (vrijblijvend)
- Rustige ochtendwandeling
- Korte inhoudelijke sessie: wat gebeurt er met je lichaam bij het ontwaken en bij nuchter bewegen
- Ontbijt
- Praktijksessie met meetelementen: inzicht krijgen in je eigen lichaam
- Theoretische sessie: beweging en cardiovasculaire gezondheid, metabole gezondheid en glucosehuishouding, onderbouwd door wetenschap en ontdaan van mythes
- Lunch
- Namiddagactiviteit: begeleide trailrun of hike in kleine groepen
- Gezamenlijk avondmaal
- Avondsessie: slaap, herstel en het parasympatisch systeem
- Korte begeleide ontspanning om de dag af te ronden

### Dag 3 – Zondag | Integratie & vooruitblik

- Ochtendactiviteit: core en kracht als basis voor duurzaam bewegen
- Reflectiemoment: hoe vertaal je deze inzichten naar je eigen leven?
- Afsluitmoment met gezamenlijke takeaways & groepsfoto
- Gezamenlijke lunch

## Verblijf & maaltijden

We verblijven in Sourbrodt, in de Hoge Venen (Ardennen), in een ruim en comfortabel groepshuis. Je slaapt standaard in een gedeelde kamer (2 personen), met een kamerverdeling per hetzelfde geslacht. Koppels kunnen uiteraard samen op één kamer. Elke kamer beschikt over een eigen ensuite badkamer. Wie liever alleen slaapt, kan dit bij inschrijving aangeven. Dit is mogelijk mits supplement en in functie van beschikbaarheid.

Alle maaltijden zijn inbegrepen en worden afgestemd met de expert. Er wordt gewerkt met gezonde, evenwichtige voeding, met aandacht voor energie. Een deel van de groenten komt uit eigen kweek. Het eten is voedend, in balans en vooral: lekker.

## Praktisch

**Locatie:** Hoge Venen (Ardennen)  
**Data:** 31 juli – 2 augustus 2026  
**Prijs:** €550  
**Aantal deelnemers:** min. 8 – max. 14 deelnemers

### Vroegboekkado

Schrijf je in vóór 15 maart 2026 en ontvang een extra cadeau ter voorbereiding op het weekend.

### Wat is inbegrepen

- Begeleiding door Simon Helleputte en het [SOLA-team](/over-ons)
- Twee overnachtingen
- Maaltijden en snacks
- Inhoudelijke sessies, workshops en begeleide activiteiten

### Wat is niet inbegrepen

- Transport naar de locatie
- Eigen verzekering

## Boek je plek

Na je inschrijving ontvang je een bevestiging en verdere praktische info [per e-mail](mailto:hello@solatravel.be).

## Twijfel je nog?

Laat je gegevens achter en we nemen persoonlijk contact met je op om te bekijken of dit weekend bij je past.`,
  },
  {
    slug: "bewustwording-connectie",
    name: "Ontdek je kracht in verbinding",
    type: "Weekend",
    shortDescription:
      "Met Sarah van Logisch Gezond doorzie je patronen in relatie tot jezelf en anderen. Je leert technieken om met meer verbinding, vertrouwen en innerlijke helderheid in je dagelijks leven te staan.",
    location: "Hoge Venen, Ardennen",
    dates: "7 – 9 augustus 2026",
    price: "€620",
    heroImage: "/src/assets/images/2631991747.jpg",
    longread: `Beleef, ontdek en ervaar hoe je opnieuw je eigen regie in handen neemt.

## Voor wie

Dit weekend is voor jou als je:

- nieuwsgierig bent naar wat er echt in je leeft
- wil leren voelen wat bij je past, voorbij het moeten
- meer rust en helderheid wil ervaren in jezelf
- openstaat voor bewustwording, zonder zweverigheid
- wil ontdekken waar je energie van krijgt
- jezelf beter wil begrijpen in relatie tot anderen

Je komt niet om iets te fixen, maar om te ontdekken, ervaren en groeien.

## Wat je leert / focus

Tijdens dit weekend:

- vergroot je je bewustzijn over emoties, patronen en relaties
- leer je beter voelen wat écht van jou is
- krijg je praktische tools die je ook thuis kan toepassen
- ervaar je hoe rust ontstaat wanneer chaos mag zakken

_"Between stimulus and response there is a space. In that space is our power to choose our response."_ — Viktor Frankl

## Na dit weekend

- Heb je praktische tools (zoals EFT) die je zelf kan toepassen
- Weet je beter hoe je anders met situaties om kan gaan
- Kan je spanning en emoties beter herkennen en reguleren
- Ga je naar huis met concrete handvatten voor je eigen praktijk

## Begeleiding

**Sarah Deleu (Logisch Gezond)** – EFT-therapeut

Sarah leert je werken met Emotional Freedom Techniques (EFT): een praktische methode om emoties en spanning te herkennen en te ontladen. Je leert hoe je zelf kan reguleren, op een manier die eenvoudig en ook na het weekend toepasbaar blijft. De begeleiding is rustig en afgestemd op wat zich op dat moment aandient.

**Liv (Gent)** – Yoga-specialist

Via yoga en gerichte beweging helpt Liv om uit het hoofd te komen en beter in het lichaam te zakken. Dit ondersteunt wat je mentaal en emotioneel leert, en zorgt voor integratie in het lichaam.

**SOLA**

Stefanie begeleidt dit weekend en stemt het inhoudelijk af met de experts. Samen met het SOLA-team en vrijwilligers zorgen we voor een veilige en zorgzame setting waarin iedereen zich gezien voelt.

## Programma

### Dag 1 – Vrijdag | Aankomst & kennismaking

- Aankomst in het huis en aperitief
- Kennismaking met de groep
- Lichte, intuïtieve oefening om het ijs te breken
- Gezamenlijk avondmaal om te landen en te verbinden

### Dag 2 – Zaterdag | In connectie met jezelf

- Sunrise-moment (vrijblijvend, rond 6u03)
- Wakker worden & korte ochtendwandeling (± 30 min)
- Ontbijt
- Workshop: inzicht in emoties en hoe ze werken, introductie EFT, praktische oefening om spanning te reguleren
- Lunch
- Wandeling en creatieve oefening: wat je voelt vorm geven
- Gezamenlijk avondmaal
- Aesthetic dance: vrij bewegen

### Dag 3 – Zondag | Integratie & vooruitblik

- Rustige opstart en ontbijt
- Korte check-in
- Workshop: inzicht in hoe jij verbinding en afstand ervaart, herkennen van relationele patronen, EFT-oefeningen om bij jezelf te blijven in contact met anderen
- Systemische oefeningen rond je plek en grenzen
- Begeleide hartmeditatie & matrix reimprinting
- Gezamenlijke lunch
- Afsluitmoment met concrete handvatten om thuis mee verder te gaan

## Verblijf & maaltijden

We verblijven in Sourbrodt, in de Hoge Venen (Ardennen), in een ruim en comfortabel groepshuis. Je slaapt standaard in een gedeelde kamer (2 personen), met een kamerverdeling per hetzelfde geslacht. Koppels kunnen uiteraard samen op één kamer. Elke kamer beschikt over een eigen ensuite badkamer. Wie liever alleen slaapt, kan dit bij inschrijving aangeven. Dit is mogelijk mits supplement en in functie van beschikbaarheid.

Alle maaltijden zijn inbegrepen en worden afgestemd met de experts. Er wordt gewerkt met gezonde, evenwichtige voeding, met aandacht voor energie. Een deel van de groenten komt uit eigen kweek. Het eten is voedend, in balans en vooral: lekker.

## Praktisch

**Locatie:** Sourbrodt, Hoge Venen, Ardennen  
**Data:** 7 – 9 augustus 2026  
**Prijs:** €620  
**Aantal deelnemers:** min. 8 – max. 14 deelnemers

### Vroegboekkado

Schrijf je in vóór 31 maart 2026 en ontvang een persoonlijk cadeau ter voorbereiding op het weekend.

### Wat is inbegrepen

- Begeleiding door Sarah Deleu (Logisch Gezond), Liv en het [SOLA-team](/over-ons)
- Een sessie bij Sarah van Logisch Gezond na dit weekend
- Twee overnachtingen
- Maaltijden en snacks
- Inhoudelijke sessies, workshops en begeleide activiteiten
- Yoga + ecstatic dance

### Wat is niet inbegrepen

- Transport naar de locatie
- Eigen verzekering

## Goed om weten

**Moet ik ervaring hebben met lichaamswerk, meditatie of EFT?**  
Nee. Je hoeft geen enkele voorkennis te hebben. Alles wordt uitgelegd en stap voor stap begeleid. Je volgt op jouw tempo.

**Is dit therapeutisch?**  
Nee. Dit is geen therapie en geen diepgravende analyse. Het is een ervaringsgericht weekend waarin je ontdekt, voelt en leert, zonder iets te moeten oplossen.

**Moet ik persoonlijke dingen delen in de groep?**  
Nee. Delen mag, niets moet. Je bepaalt zelf wat je deelt en wat je voor jezelf houdt. Stilte is even welkom als woorden.

**Past dit bij mij als ik gewoon nieuwsgierig ben?**  
Ja. Veel deelnemers komen niet met een "probleem", maar met nieuwsgierigheid. Dit weekend draait om ontdekken, ervaren en verruimen.

## Boek je plek

Na je inschrijving ontvang je een bevestiging en verdere praktische info [per e-mail](mailto:hello@solatravel.be).

## Twijfel je nog?

Laat je gegevens achter en we nemen persoonlijk contact met je op om te bekijken of dit weekend bij je past.`,
  },
  {
    slug: "sola-terra-frankrijk",
    name: "SOLA TERRA – Frankrijk",
    type: "Reis",
    shortDescription:
      "Een natuurlijke, licht sauvage plek in de Franse bergen, het decor voor een reis vol beweging.",
    location: "Frankrijk",
    dates: "Binnenkort beschikbaar",
    price: "n.t.b.",
    heroImage: "/src/assets/images/1513986998.jpg",
  },
];

export const people: Person[] = [
  {
    name: "Stefanie Deleu",
    role: "Organisator & avonturier",
    type: "Expert",
    bio: "Stefanie  is de trekkende kracht achter SOLA en zet elke reis van A tot Z in elkaar. Ze bouwt samenwerkingen uit, coördineert de organisatie en zorgt er met haar team voor dat alles praktisch goed loopt.",
    logo: "/stefanie.jpg",
    isTeamMember: true,
  },
  {
    name: "Justine Deleu",
    role: "Facilitator & culinaire zorg",
    type: "Core",
    bio: "Justine ondersteunt SOLA praktisch en kookt de maaltijden tijdens de weekenden. Daarnaast draagt ze ook haar steentje bij aan de communicatie.",
    logo: "/src/assets/images/Justine Deleu.jpg",
    isTeamMember: true,
  },
  {
    name: "Klaas Annys",
    role: "Coördinator & facilitator",
    type: "Core",
    bio: "Klaas zorgt voor de praktische organisatie en begeleiding van onze weekenden. Met oog voor detail en passie voor natuur en beweging, creëert hij een veilige en inspirerende omgeving voor elke deelnemer.",
    logo: "/klaas.png",
    isTeamMember: true,
  },
  {
    name: "Simon Helleputte",
    role: "Performance coach & sportwetenschapper",
    type: "Expert",
    bio: "Simon vertaalt sportwetenschap, gestoeld op zijn doctoraat en onderzoek in inspanningsfysiologie naar duidelijke en haalbare stappen. Hij laat je aan den lijve ervaren wat beweging doet met je hart, uithouding en energie, en helpt je slimmer bewegen.",
    logo: "/simon-helleputte.webp",
    isTeamMember: false,
    website: "https://www.instagram.com/simonendurancelab",
  },
  {
    name: "Sarah Deleu",
    role: "EFT & orthomoleculair therapeut",
    type: "Expert",
    bio: "Sarah is biomedisch wetenschapper en therapeut in Emotional Freedom Techniques (EFT). Ze werkt rond emotionele en relationele patronen en leert je spanning reguleren, zodat je met meer rust en helderheid aanwezig kan zijn bij jezelf en anderen.",
    logo: "/sarah-deleu.jpg",
    isTeamMember: false,
    website: "https://logisch-gezond.be",
  },
  {
    name: "Lisa Vanderschelden",
    role: "Yoga & beweging",
    type: "Expert",
    bio: "Lisa is kinesitherapeut en yogadocent, met focus op herstel, blessurepreventie en duurzame trainingsopbouw bij sporters. Ze combineert wetenschappelijke kennis met lichaamsbewustzijn, ademhaling en gerichte beweging.",
    logo: "/liv.jpeg",
    isTeamMember: false,
    website: "https://livyourlife.be",
  },
];

export const uspTags = [
  "Kleine groep (max. 14)",
  "Deskundige begeleiding",
  "Onderbouwd en menselijk",
  "Samen met goesting!",
  "Mooie locatie in de natuur",
];

export const homeCopy = {
  tagline: "Voor wie niet gewoon weg, maar vooruit wil.",
  subline:
    "SOLA creëert weekenden waar beweging, wetenschap en natuur samenkomen. Eerlijk, helder en menselijk.",
  introLines: [
    "Voor wie wil ontdekken wat belangrijk is.",
    "Voor wie wil bewegen, nadenken en eerlijk kijken.",
    "Helderheid, richting en ruimte om echt te kiezen.",
  ],
  voorWie: [
    "Voor mensen die willen bewegen en voelen",
    "Voor wie verantwoordelijkheid neemt voor zijn of haar proces",
    "Voor wie pit heeft en zachtheid niet schuwt",
  ],
  waarom:
    "SOLA creëert groepsreizen rond gezondheid, waar beweging, wetenschap en natuur samenkomen.",
  pillars: [
    {
      title: "Deskundige begeleiding en wetenschappelijke onderbouwing",
      description: "Tijdens een SOLA-reis verdiep je je samen met een expert in een concreet gezondheidsthema. Je bouwt bewustwording op rond aspecten van mentale gezondheid, ontdekt hoe voeding en beweging samen de basis vormen voor een vitaal en lang leven, of leert hoe je met een chronische aandoening een actieve levensstijl kan verzoenen. Op een interactieve manier bouwen we samen een helder theoretisch kader op. Dat geeft je houvast en een dieper begrip van jouw persoonlijke focusthema, zodat je niet alleen ervaart, maar ook begrijpt wat je doet en waarom.",
      image: "/src/assets/images/2596052607.jpg",
    },
    {
      title: "Ervaringsgericht leren in kleine groepen",
      description: "Binnen de veilige omgeving van een kleine groep ga je tijdens de reis actief aan de slag met de opgebouwde kennis. Je toetst de theorie aan de praktijk en leert technieken die je via herhaling helpen om echte verandering in gang te zetten. Je gaat terug naar huis met een stevig pakket handvatten waar je op kunt teruggrijpen voor houvast en continuïteit.",
      image: "/src/assets/images/2631991747.jpg",
    },
    {
      title: "Beweging met beide voeten in de natuur",
      description: "Het fundament van de SOLA-reizen ligt in de natuur. Een natuurlijke omgeving biedt schoonheid, stilte en verwondering. De mentale rust die je daar ervaart scherpt je focus, stimuleert beweging en inspireert tot gerichte actie. De natuur vormt zo de onmisbare basis en het krachtige decor van jouw reis.",
      image: "/src/assets/images/hero.jpg",
    },
  ],
  afsluiting: {
    title: "Klaar om in beweging te komen?",
    primary: "Boek je plek",
    secondary: "Plan een gesprek",
  },
};

export const missionVision = {
  mission:
    "We creëren ervaringen die écht bewegen. Niet alleen je lichaam, maar ook je perspectief. Met wetenschap als kompas, natuur als klaslokaal en kleine groepen als katalysator voor echte verandering.",
  vision:
    "Gezondheid is geen bestemming, maar een reis. Een reis waar natuur je rust geeft, inspanning je kracht geeft en inzicht je richting geeft. Geen vlucht, maar een plek om wakker te worden — en te blijven.",
};

export const kernidentiteit = [
  "🌞 SOLA : licht, kracht, beweging",
  "Sola komt van soleil: licht dat richting geeft.",
  "Wij werken vanuit energie, helderheid en het lichaam dat beweegt.",
  "Gezondheid ontstaat wanneer natuur, inspanning en inzicht samenkomen.",
  "Sola is Sarah, Stefanie.",
  "SOLA : au vrai.",
];

export const weekendPage = {
  title: "SOLA | Weekenden",
  label: "Weekenden",
  heading: "Weekenden die bewegen én verdiepen",
  description:
    "Kleine groepen, deskundige begeleiding en programma's die beweging, inzicht en natuur samenbrengen.",
  metaDescription: "Alle SOLA-weekenden in een helder overzicht.",
  cta: "Bekijk weekend",
};

export const reizenPage = {
  title: "SOLA | Reizen",
  label: "Reizen",
  heading: "Reizen die bewegen én verdiepen",
  description:
    "Kleine groepen, deskundige begeleiding en programma's die beweging, inzicht en natuur samenbrengen.",
  metaDescription: "Reizen waar natuur, beweging en inzicht samenkomen.",
};

export const homePage = {
  title: "SOLA | Groepsreizen & gezondheid",
  description: "Voor wie niet gewoon weg wil, maar vooruit wil. SOLA creëert weekenden waar beweging, wetenschap en natuur samenkomen. Eerlijk, helder en menselijk.",
  brandLabel: "SOLA",
  ctaDiscover: "Ontdek onze reizen",
  ctaContact: "Contact opnemen",
  sectionAanbod: {
    label: "Aanbod",
    title: "Onze weekenden",
    description: "Selectie van de eerstvolgende afreizen.",
    link: "Bekijk alle weekenden →",
  },
  ctaDiscoverWeekend: "Ontdek weekend",
  sectionOverOns: {
    label: "Over ons",
    title: "Wie SOLA draagt",
    description:
      "SOLA wordt gedragen door Stefanie Deleu, samen met een netwerk van experten, coaches en therapeuten en betrokken SOLA-enthousiastelingen. Per reis werken we rond één gezondheidsthema met een specialist en streven we naar het samenbrengen van beweging, wetenschap en natuur in een ervaring die verder gaat dan ontspanning alleen. SOLA ontstond op het kruispunt van reizen en gezondheid. Hier wandel je in de natuur, beweeg je bewust, leer je bij over je lichaam en kom je mentaal tot rust, met inzichten en gewoontes die je ook thuis blijven ondersteunen.",
    cta: "Leer ons kennen",
  },
};

export const contactPage = {
  title: "SOLA | Contact",
  label: "Contact",
  heading: "Contact en gesprek plannen",
  description:
    "Stuur ons een bericht of plan een gesprek. We antwoorden snel via hello@solatravel.be.",
  metaDescription: "Neem contact op met SOLA voor boekingen, vragen of een gesprek.",
};

export const aboutPage = {
  title: "SOLA | Over ons",
  label: "Over SOLA",
  heading: "Hoe is SOLA ontstaan?",
  description:
    "SOLA ontstond op het kruispunt van twee werelden die mijn leven sterk hebben gevormd: reizen en gezondheid. De naam SOLA verwijst naar de zon, *sol* in het Portugees en Spaans, *sola* als vrouwelijke vorm in het Latijn. De zon staat voor energie, warmte en levenskracht. Dat is wat ik met deze reizen wil doorgeven.

Ik studeerde toerisme (en bedrijfseconomie) en werk al zo’n acht jaar in de reissector. Reizen verbreedt je blik, brengt je in beweging en haalt je uit je dagelijkse context.

In 2024 werd ik in Sumatra ziek door een geperforeerde appendix. Later bleek een chronische darmaandoening aan de basis te liggen. Het herstel was intens: twee weken ziekenhuis in Medan, daarna nog enkele weken in België en maanden terug opbouwen, gevolgd door een extra operatie. Het was een stevig jaar, maar ik haal er vandaag veel kracht uit en het was een stimulans om bewuster met gezondheid bezig te zijn.

Mijn passie voor sport en reizen werd aangevuld met een derde passie: actief werken aan gezondheid. Ik ontdekte hoe krachtig de basis is: slaap, voeding en beweging. Door daar bewust mee om te gaan, kom je al heel ver. Die eenvoud wil ik laten voelen tijdens SOLA-reizen.

Mijn eigen traject bracht me in contact met gepassioneerde experten. Ik ging langs bij het KPNI-huis (klinische psycho-neuro-immunologie), waar gezondheid vanuit een leefstijlgerichte en deels orthomoleculaire visie wordt bekeken, woonde lezingen bij en leerde breder naar gezondheid kijken. Ik begon me te verdiepen in vragen waar veel mensen mee zitten, zoals hoe het komt dat je een ijzertekort kan hebben zonder “te weinig ijzer te eten” en kwam zo bij verrassende inzichten. Vanuit die insteek wil ik anderen in contact brengen met specialisten die hun vak verstaan. Van expertise kan je leren.

En dat samen, in een kleine groep gelijkgezinden, waar de positieve dynamiek elkaar versterkt. Let’s go.",
  metaDescription: "Wie we zijn, waar we voor staan en met wie we werken.",
  quote: "« Le corps dit vrai. » — het lichaam liegt niet.",
  sectionVoorWie: "Voor wie",
  sectionMissieVisie: "Missie & visie",
  missieLabel: "Onze missie",
  visieLabel: "Onze visie",
  sectionWatOnsAndersMaakt: "Wat ons anders maakt",
  sectionTeam: "Team",
  sectionExperten: "Experten",
  sectionKernidentiteit: "SOLA – kernidentiteit",
  sectionTerra: {
    title: "SOLA TERRA (Frankrijk)",
    description1:
      "Een natuurlijke, rustige, licht sauvage plek in Frankrijk.",
    description2:
      "Natuur die draagt. Licht dat richting geeft. Een plek om te bewegen.",
    quote: "« Au cœur du vivant. »",
    cta: "Blijf op de hoogte →",
  },
  ctaDiscover: "Ontdek onze reizen",
};

export const partnershipsPage = {
  title: "SOLA | Samenwerkingen",
  label: "Samenwerkingen",
  heading: "Onze samenwerkingen",
  description:
    "We werken samen met experts die hun vak verstaan. Mensen met kennis, ervaring en oog voor wat echt werkt.",
  metaDescription: "Onze samenwerkingen met experts die hun vak verstaan.",
  sectionPartners: "Samenwerkingen",
  ctaTitle: "Ook partner?",
  ctaDescription: "Laat je gegevens achter en we nemen contact op.",
  form: {
    labels: {
      naam: "Naam",
      email: "E-mail",
      telefoon: "Telefoon",
      organisatie: "Organisatie",
      bericht: "Bericht",
    },
    submit: "Verstuur",
    success: "Bedankt! We nemen snel contact op.",
  },
};

export const newsletterPage = {
  title: "SOLA | Nieuwsbrief",
  label: "Nieuwsbrief",
  heading: "Schrijf je in voor onze nieuwsbrief",
  description: "Blijf op de hoogte van onze laatste reizen, weekenden en updates.",
  metaDescription: "Blijf op de hoogte van onze laatste nieuws en updates.",
};

export const faqPage = {
  title: "SOLA | Veelgestelde vragen",
  label: "Veelgestelde vragen",
  heading: "Frequently asked questions",
  description: "Antwoorden op veelgestelde vragen over SOLA.",
  metaDescription: "Antwoorden op veelgestelde vragen over SOLA.",
};

export const privacyPage = {
  title: "SOLA | Privacybeleid",
  label: "Privacybeleid",
  heading: "Privacybeleid",
  description: "Ons privacybeleid en hoe we omgaan met je gegevens.",
  metaDescription: "Ons privacybeleid en hoe we omgaan met je gegevens.",
};

export const termsPage = {
  title: "SOLA | Algemene Voorwaarden",
  label: "Algemene voorwaarden",
  heading: "Algemene Voorwaarden",
  description: "De algemene voorwaarden voor het boeken van onze reizen en weekenden.",
  metaDescription: "De algemene voorwaarden voor het boeken van onze reizen en weekenden.",
};
