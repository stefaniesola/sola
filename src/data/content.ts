export type JourneyType = "Weekend" | "Reis";

export interface Journey {
  slug: string;
  name: string;
  type: JourneyType;
  shortDescription: string;
  location: string;
  dates: string;
  price: string;
  minParticipants?: number;
  maxParticipants?: number;
  heroImage?: string;
  intro: string[];
  audience: string[];
  focus: string[];
  program: { day: string; items: string[] }[];
  practical: {
    included: string[];
    notIncluded: string[];
    sleeping: string;
  } & Record<string, string>;
  guides?: string[];
  bookingStatus?: string;
  longread?: string; // Markdown content for the full article
}

export interface Person {
  name: string;
  role: string;
  type: "Core" | "Expert";
  bio: string;
  photo?: string;
  logo?: string;
  isFounder?: boolean;
}

export const journeys: Journey[] = [
  {
    slug: "exercise-is-medicine",
    name: "Exercise is Medicine",
    type: "Weekend",
    shortDescription:
      "Met Simon van Endurance Lab leer je hoe beweging, data en lichaamsbewustzijn samen je gezondheid versterken.",
    location: "Hoge Venen (Ardennen)",
    dates: "31 juli – 2 augustus 2026",
    price: "€550",
    minParticipants: 8,
    maxParticipants: 14,
    heroImage: "/src/assets/images/2596052607.jpg",
    intro: [
      "Samen met Simon van Endurance Lab duik je in de kracht van beweging als fundament van gezondheid.",
      "Tijdens dit weekend komen wetenschap, ervaring en lichaamsbewustzijn samen. Je ontdekt waarom bewegen werkt, wat het doet met jouw lichaam en hoe kennis je helpt beweging vol te houden met meer vertrouwen en plezier.",
    ],
    audience: [
      "Sportieve mensen met interesse in gezondheid",
      "Mensen die willen bewegen, maar drempels ervaren",
      "Actievelingen die het waarom van beweging willen begrijpen",
      "Deelnemers met een groeimindset, met of zonder concreet sportdoel",

    ],
    focus: [
      "Fysieke inspanning als medicijn",
      "Cardiovasculaire, metabole en mentale effecten van beweging",
      "Hoe data je helpt je lichaam beter te begrijpen",
      "Consistentie en mindset",
    ],
    program: [
      {
        day: "Vrijdag: aankomst",
        items: ["Welkom bij SOLA x Simon", "Samen aan tafel", "Waarom bewegen?"],
      },
      {
        day: "Zaterdag: inzicht & beweging",
        items: ["Sunrise & ochtendwandeling (optioneel)", "Nuchter bewegen: wat gebeurt er in je lichaam?", "Ontbijt", "Meten en begrijpen: inzicht in je eigen lichaam",
  "Beweging en gezondheid: cardio, metabolisme en glucose", "Lunch", "Namiddag: trailrun of hike", "Aperitief & avondmaal", "Avondsessie: slaap & herstel"],
      },
      {
        day: "Zondag: integratie & vooruitblik",
        items: ["Core- en krachttraining", "Van inzicht naar toepassing", "Gezamenlijke takeaways", "Lunch"],
      },
    ],
    practical: {
      location: "Sourbrodt, Hoge Venen",
      dates: "31 juli – 2 augustus 2026",
      price: "€550",
      participants: "min. 8 – max. 14 deelnemers",
      included: [
        "Begeleiding door Simon en het SOLA-team",
        "Twee overnachtingen",
        "Maaltijden en snacks",
        "Workshops en trainingen",
      ],
      notIncluded: ["Transport naar de locatie", "Eigen verzekering"],
      sleeping: "We verblijven in Sourbrodt in een ruim en comfortabel groepshuis. Je slaapt standaard in een gedeelde kamer (2 personen), met kamerindeling per hetzelfde geslacht. Koppels kunnen samen op één kamer. Elke kamer beschikt over een eigen ensuite badkamer. Wie liever alleen slaapt, kan dit bij inschrijving aangeven. Dit is mogelijk mits supplement en afhankelijk van beschikbaarheid. Alle maaltijden zijn inbegrepen. Er wordt gewerkt met gezonde, evenwichtige voeding, met aandacht voor energie. Een deel van de groenten komt uit eigen kweek. Het eten is voedend, in balans en vooral lekker.",
    },
    guides: ["Simon Helleputte", "SOLA team"],
    bookingStatus: "open",
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

Stefanie begeleidt dit weekend en stem het inhoudelijk af met de expert. Samen met het SOLA-team en vrijwilligers zorgen we voor een veilige en zorgzame setting waarin iedereen zich gezien voelt.

## Programma

### Dag 1 – Vrijdag | Aankomst & activatie

- Aankomst & warme kennismaking met SOLA × Endurance Lab
- Gezamenlijk avondmaal om te landen en te verbinden
- Avondreflectie: je intentie voor het weekend
- Introductie van het programma en inhoudelijke accenten door SOLA en Simon

### Dag 2 – Zaterdag | Inzichten & inspanning

- Vrije sunrise voor wie dat wil
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

## Praktisch (logistiek)

**Locatie:** Ardennen  
**Data:** 31 juli – 2 augustus 2026  
**Prijs:** €550

### Vroegboekkado

Schrijf je in vóór 15 maart 2026 en ontvang een extra cadeau ter voorbereiding op het weekend.

**Aantal deelnemers:** min. 8 – max. 14 deelnemers

### Wat is inbegrepen

- Begeleiding door Simon Helleputte en het SOLA-team
- Twee overnachtingen
- Maaltijden en snacks
- Inhoudelijke sessies, workshops en begeleide activiteiten

### Wat is niet inbegrepen

- Transport naar de locatie
- Eigen verzekering

## Boek je plek

Na je inschrijving ontvang je een bevestiging en verdere praktische info per e-mail.

## Twijfel je nog?

Laat je gegevens achter en we nemen persoonlijk contact met je op om te bekijken of dit weekend bij je past.`,
  },
  {
    slug: "bewustwording-connectie",
    name: "Weekend – Bewustwording × Connectie",
    type: "Weekend",
    shortDescription:
      "Met Sarah Deleu verdiep je in emoties, EFT en verbinding. Voor wie helder en eerlijk wil kijken.",
    location: "Ardennen",
    dates: "7 – 9 augustus 2026",
    price: "€620",
    minParticipants: 8,
    maxParticipants: 12,
    heroImage: "/src/assets/images/2631991747.jpg",
    intro: [
      "Een weekend dat ruimte maakt voor voelen, verbinden en thuiskomen bij jezelf.",
      "Met EFT, beweging en open gesprekken krijg je handvaten om met nuance en zachtheid te leven.",
    ],
    audience: [
      "Mensen die niet willen ontsnappen maar begrijpen",
      "Wie zachtheid wil combineren met pit",
      "Wie avontuur wil mét inzicht",
    ],
    focus: [
      "EFT en emotionele regulatie",
      "Bewustwording van patronen",
      "Connectie met jezelf en anderen",
      "Beweging als ingang naar voelen",
      "Praktische tools om thuis verder te gaan",
    ],
    program: [
      {
        day: "Dag 1 – Aankomen",
        items: ["Welkom & intenties", "Verkennende sessie", "Avondmaal"],
      },
      {
        day: "Dag 2 – Verdiepen",
        items: ["Ochtendbeweging", "EFT en emoties in praktijk", "Wandeling en gesprekssessies"],
      },
      {
        day: "Dag 3 – Integreren",
        items: ["Stiltewandeling", "Afronding en concrete stappen", "Gezamenlijke lunch"],
      },
    ],
    practical: {
      location: "Ardennen",
      dates: "7 – 9 augustus 2026",
      price: "€620",
      participants: "min. 8 – max. 12 deelnemers",
      included: [
        "Begeleiding door Sarah en het SOLA-team",
        "Twee overnachtingen",
        "Eerlijke maaltijden en snacks",
        "Workshops en sessies",
      ],
      notIncluded: ["Transport naar de locatie", "Eventuele persoonlijke aankopen"],
      sleeping: "Rustige gedeelde kamers, ruimte voor stilte en integratie.",
    },
    guides: ["Sarah Deleu", "SOLA team"],
    bookingStatus: "open",
    longread: `Een weekend dat ruimte maakt voor voelen, verbinden en thuiskomen bij jezelf. Met EFT, beweging en open gesprekken krijg je handvaten om met nuance en zachtheid te leven.

## Voor wie

- Mensen die niet willen ontsnappen maar begrijpen
- Wie zachtheid wil combineren met pit
- Wie avontuur wil mét inzicht

## Wat je leert / focus

- EFT en emotionele regulatie
- Bewustwording van patronen
- Connectie met jezelf en anderen
- Beweging als ingang naar voelen
- Praktische tools om thuis verder te gaan

## Na dit weekend

- Heb je meer inzicht in je eigen emotionele patronen
- Weet je hoe je EFT kan toepassen in je dagelijks leven
- Voel je je meer verbonden met jezelf en anderen
- Ga je naar huis met concrete handvaten voor verdere groei

## Begeleiding

**Sarah Deleu** – EFT-coach & therapeut

Sarah creëert ruimte voor emotie en connectie. Ze werkt met EFT en open gesprekken zodat je met meer zachtheid en kracht in beweging komt.

**SOLA**

Stefanie begeleidt dit weekend en stem het inhoudelijk af met de expert. Samen met het SOLA-team en vrijwilligers zorgen we voor een veilige en zorgzame setting waarin iedereen zich gezien voelt.

## Programma

### Dag 1 – Aankomen

- Welkom & intenties
- Verkennende sessie
- Avondmaal

### Dag 2 – Verdiepen

- Ochtendbeweging
- EFT en emoties in praktijk
- Wandeling en gesprekssessies

### Dag 3 – Integreren

- Stiltewandeling
- Afronding en concrete stappen
- Gezamenlijke lunch

## Verblijf & maaltijden

We verblijven in de Ardennen in rustige gedeelde kamers, met ruimte voor stilte en integratie. Alle maaltijden zijn inbegrepen en worden afgestemd met de expert. Er wordt gewerkt met gezonde, evenwichtige voeding, met aandacht voor energie. Het eten is voedend, in balans en vooral: lekker.

## Praktisch (logistiek)

**Locatie:** Ardennen  
**Data:** 7 – 9 augustus 2026  
**Prijs:** €620

**Aantal deelnemers:** min. 8 – max. 12 deelnemers

### Wat is inbegrepen

- Begeleiding door Sarah Deleu en het SOLA-team
- Twee overnachtingen
- Eerlijke maaltijden en snacks
- Workshops en sessies

### Wat is niet inbegrepen

- Transport naar de locatie
- Eventuele persoonlijke aankopen

## Boek je plek

Na je inschrijving ontvang je een bevestiging en verdere praktische info per e-mail.

## Twijfel je nog?

Laat je gegevens achter en we nemen persoonlijk contact met je op om te bekijken of dit weekend bij je past.`,
  },
  {
    slug: "sola-terra-frankrijk",
    name: "SOLA TERRA – Frankrijk",
    type: "Reis",
    shortDescription:
      "Een natuurlijke, rustige, licht sauvage plek in Frankrijk. Voor langere trajecten waar natuur, beweging en inzicht samenkomen.",
    location: "Frankrijk",
    dates: "Binnenkort beschikbaar",
    price: "n.t.b.",
    heroImage: "/src/assets/images/1513986998.jpg",
    intro: [
      "Een plek in Frankrijk waar natuur en licht richting geven.",
      "Voor wie langere trajecten zoekt met beweging, voeding en helderheid als basis.",
    ],
    audience: [
      "Mensen die verdieping willen in langere trajecten",
      "Wie wil bewegen in de natuur en zich laten dragen door de omgeving",
      "Wie zich wil voorbereiden op het echte werk dat volgt na het weekend",
    ],
    focus: [
      "Natuur als partner in je proces",
      "Verdieping rond beweging, voeding en mentale helderheid",
      "Eerlijke gesprekken en tijd om te integreren",
    ],
    program: [
      { day: "Programma", items: ["Volledige programma-details volgen."] },
    ],
    practical: {
      location: "Frankrijk",
      dates: "Binnenkort beschikbaar",
      price: "n.t.b.",
      participants: "Kleine groep, details volgen",
      included: ["Volledig programma wordt later gedeeld"],
      notIncluded: ["Wordt later gedeeld"],
      sleeping: "Natuurplek met comfort en rust.",
    },
    guides: ["SOLA team"],
    bookingStatus: "Binnenkort",
  },
];

export const people: Person[] = [
  {
    name: "Stefanie Deleu",
    role: "Organisator & avonturier",
    type: "Expert",
    bio: "Stefanie is de verbindende kracht achter SOLA. Ze organiseert weekenden waar beweging en natuur samenkomen en zorgt dat elke deelnemer zich gedragen voelt.",
    logo: "/stefanie.webp",
    isFounder: true,
  },
  {
    name: "Sarah Van den Daele",
    role: "Organisator & marketeer",
    type: "Core",
    bio: "Sarah vertelt het verhaal van SOLA en bewaakt de helderheid in elke ervaring. Ze zorgt dat elke sessie praktisch, warm en toegankelijk blijft.",
    logo: "/sarah.webp",
    isFounder: true,
  },
  {
    name: "Simon Helleputte",
    role: "Endurance coach & sportwetenschapper",
    type: "Expert",
    bio: "Simon vertaalt sportwetenschap naar haalbare stappen. Hij begeleidt beweging als medicijn en helpt je trainen met richting en nuance.",
    logo: "/simon.webp",
    isFounder: false,
  },
];

export const uspTags = [
  "Kleine groep (max. 14)",
  "Helder programma",
  "Deskundige begeleiding",
  "Onderbouwd en menselijk",
  "Samen met goesting!",
  "Mooie locatie in de natuur",
];

export const homeCopy = {
  tagline: "Voor wie niet gewoon weg wil, maar vooruit wil.",
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
    "Reizen die je doen thuiskomen. Met rust, beweging en eerlijke gesprekken, in een omgeving die helder maakt wat klopt.",
  pillars: [
    {
      title: "Deskundige begeleiding",
      description: "Begeleiding door mensen die hun vak verstaan. Per thema werken we met een expert, met kennis van zaken en oog voor de groep.",
    },
    {
      title: "Wetenschappelijk onderbouwd",
      description: "Wat we doen vertrekt vanuit kennis en onderzoek. Elke reis wordt samen met een expert opgebouwd, zodat inhoud en ervaring elkaar versterken.",
    },
    {
      title: "Ervaringsgericht",
      description: "Je blijft niet hangen in theorie. Wat je leert en ervaart, kan je ook meenemen naar huis en inpassen in je dagelijks leven.",
    },
    {
      title: "Kleine groepen",
      description: "Kleine groepen zorgen voor rust en aandacht. Er is ruimte om te luisteren, te delen of stil te zijn, op jouw tempo en zonder verwachtingen.",
    },
    {
      title: "Gezond en lekker eten",
      description: "Eten dat voedt en smaakt. Met verse ingrediënten, met zorg bereid en afgestemd op wat je lichaam nodig heeft.",
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
    "SOLA bouwt ervaringen die je in beweging zetten met inzicht. Met een onderbouwde aanpak, in de natuur, in kleine groepen.",
  vision:
    "We geloven dat gezondheid ontstaat wanneer natuur, inspanning en inzicht samenkomen. Geen vlucht, wel een plek om wakker te worden.",
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
  label: "Weekenden",
  title: "Weekenden die bewegen én verdiepen",
  description:
    "Kleine groepen, deskundige begeleiding en programma's die beweging, inzicht en natuur samenbrengen.",
  cta: "Bekijk weekend",
};

export const homePage = {
  brandLabel: "SOLA",
  ctaDiscover: "Ontdek onze reizen",
  ctaContact: "Contact opnemen",
  sectionVoorWie: "Voor wie",
  sectionWaarom: "Waarom SOLA",
  sectionHoeWeWerken: "Hoe we werken",
  sectionAanbod: {
    label: "Aanbod",
    title: "Onze weekenden",
    description: "Selectie van de eerstvolgende ervaringen.",
    link: "Bekijk alle weekenden →",
  },
  ctaDiscoverWeekend: "Ontdek weekend",
  sectionOverOns: {
    label: "Over ons",
    title: "Wie SOLA draagt",
    description:
      "SOLA wordt gedragen door twee kernfiguren die de combinatie van beweging, inzicht en natuur bewaken.",
    cta: "Leer ons kennen",
  },
};

export const contactPage = {
  label: "Contact",
  title: "Contact en gesprek plannen",
  description:
    "Stuur ons een bericht of plan een gesprek. We antwoorden snel via hello@solatravel.be.",
  form: {
    title: "Stuur een bericht",
    description: "We willen graag weten hoe we je kunnen helpen.",
    labels: {
      naam: "Naam",
      email: "E-mail",
      telefoon: "Telefoon",
      bericht: "Bericht",
    },
    submit: "Verstuur",
    success: "Bedankt! We hebben je bericht ontvangen.",
  },
  directContact: {
    title: "Direct contact",
    email: "hello@solatravel.be",
    location: "Gevestigd in Gent.",
  },
  planMeeting: {
    title: "Plan een gesprek",
    description: "Liever even bellen of videobel? Plan een moment dat past.",
    cta: "Plan via e-mail",
  },
};

export const aboutPage = {
  label: "Over SOLA",
  title: "Wie we zijn",
  description:
    "Sola creëert ervaringen waar beweging, wetenschap en natuur samenkomen. We werken met artsen, therapeuten en coaches die handelen vanuit KPNI, fysiologie, gedrag en voeding.",
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
  label: "Samenwerkingen",
  title: "Onze samenwerkingen",
  description:
    "We werken samen met experts die hun vak verstaan. Mensen met kennis, ervaring en oog voor wat echt werkt.",
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

