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
  } & Record<string, string | string[]>;
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

## Praktisch

**Locatie:** Ardennen  
**Data:** 31 juli – 2 augustus 2026  
**Prijs:** €550

### Vroegboekkado

Schrijf je in vóór 15 maart 2026 en ontvang een extra cadeau ter voorbereiding op het weekend.

**Aantal deelnemers:** min. 8 – max. 14 deelnemers

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
    name: "Weekend – Bewustwording × Connectie",
    type: "Weekend",
    shortDescription:
      "Beleef, ontdek en ervaar hoe je opnieuw je eigen regie in handen neemt.",
    location: "Sourbrodt, Hoge Venen, Ardennen",
    dates: "7 – 9 augustus 2026",
    price: "€620",
    minParticipants: 8,
    maxParticipants: 14,
    heroImage: "/src/assets/images/2631991747.jpg",
    intro: [
      "Beleef, ontdek en ervaar hoe je opnieuw je eigen regie in handen neemt.",
    ],
    audience: [
      "nieuwsgierig bent naar wat er echt in je leeft",
      "wil leren voelen wat bij je past, voorbij het moeten",
      "meer rust en helderheid wil ervaren in jezelf",
      "openstaat voor bewustwording, zonder zweverigheid",
      "wil ontdekken waar je energie van krijgt",
      "jezelf beter wil begrijpen in relatie tot anderen",
    ],
    focus: [
      "vergroot je je bewustzijn over emoties, patronen en relaties",
      "leer je beter voelen wat écht van jou is",
      "krijg je praktische tools die je ook thuis kan toepassen",
      "ervaar je hoe rust ontstaat wanneer chaos mag zakken",
    ],
    program: [
      {
        day: "Vrijdagavond: Aankomen & kennismaking",
        items: [
          "Aankomen in het huis en aperitief",
          "Kennismaking met de groep",
          "Lichte, intuïtieve oefening om het ijs te breken",
          "Samen avondeten",
        ],
      },
      {
        day: "Zaterdag: In connectie met jezelf",
        items: [
          "06u Sunrise-moment (vrijblijvend)",
          "Wakker worden & korte ochtendwandeling (± 30 min)",
          "Ontbijt",
          "Voormiddag: workshop - Inzicht in emoties en hoe ze werken, Introductie EFT: leren voelen en spanning reguleren, Praktische oefening om dit meteen te ervaren",
          "Namiddag: Wandeling, Creatieve oefening: wat je voelt vorm geven",
          "Avond: Samen avondeten, Aesthetic dance: vrij bewegen",
        ],
      },
      {
        day: "Zondag: In connectie met de ander",
        items: [
          "Rustige opstart",
          "Ontbijt",
          "Korte check-in",
          "Voormiddag: workshop - Inzicht in hoe jij verbinding en afstand ervaart, Herkennen van relationele patronen, EFT-oefeningen om bij jezelf te blijven in contact met anderen",
          "Late voormiddag: Eenvoudige systemische oefeningen rond je plek en grenzen, Begeleide hartmeditatie & matrix reimprinting",
          "Middag: Samen lunch, Afronden van het weekend met concrete handvatten om thuis mee verder te gaan",
        ],
      },
    ],
    practical: {
      location: "Sourbrodt, Hoge Venen, Ardennen",
      dates: "Vrijdag 7 t.e.m. zondag 9 augustus 2026",
      welcomeTime: "Welkom op vrijdag vanaf 18u",
      closingTime: "Afsluiting op zondag na de lunch",
      price: "€620 per persoon. Deze prijs is all-in (zie hieronder).",
      earlyBird: "Wie voor 31 maart inschrijft, ontvangt een persoonlijk cadeau.",
      participants: "Minimum 8, maximum 14 deelnemers",
      included: [
        "3-daags / 2-nachten weekendtraject",
        "Inhoudelijke begeleiding door Sarah van Logisch Gezond",
        "Een sessie bij Sarah van Logisch Gezond na dit weekend",
        "Alle workshops & sessies",
        "Yoga + ecstatic dance",
        "Verblijf op locatie",
        "Maaltijden van vrijdagavond t.e.m. zondagmiddag",
      ],
      notIncluded: ["Transport naar de locatie", "Eigen verzekering"],
      sleeping: "We verblijven in Sourbrodt, in de Hoge Venen (Ardennen), in een ruim en comfortabel groepshuis. Je slaapt standaard in een gedeelde kamer (2 personen), met een kamerverdeling per hetzelfde geslacht. Koppels kunnen uiteraard samen op één kamer. Elke kamer beschikt over een eigen ensuite badkamer. Wie liever alleen slaapt, kan dit bij inschrijving aangeven. Dit is mogelijk mits supplement en in functie van beschikbaarheid.",
      meals: "Alle maaltijden zijn inbegrepen. Er wordt gewerkt met gezonde, evenwichtige voeding, met aandacht voor energie. Een deel van de groenten komt uit eigen kweek. Het eten is voedend en vooral: lekker.",
    },
    guides: ["Sarah Deleu (Logisch Gezond)", "Liv (Gent)", "SOLA team"],
    bookingStatus: "open",
    longread: `Beleef, ontdek en ervaar hoe je opnieuw je eigen regie in handen neemt.

## Wanneer?

📅 Vrijdag 7 t.e.m. zondag 9 augustus  
🕕 Welkom op vrijdag vanaf 18u  
🍽️ Afsluiting op zondag na de lunch

## Waar?

📍 Sourbrodt, Hoge Venen, Ardennen

## Prijs

€620 per persoon. Deze prijs is all-in (zie hieronder).

✨ **Early bird**

Wie voor 31 maart inschrijft, ontvangt een persoonlijk cadeau.

## Wat is inbegrepen?

- 3-daags / 2-nachten weekendtraject
- Inhoudelijke begeleiding door Sarah van Logisch Gezond
- Een sessie bij Sarah van Logisch Gezond na dit weekend
- Alle workshops & sessies
- Yoga + ecstatic dance
- Verblijf op locatie
- Maaltijden van vrijdagavond t.e.m. zondagmiddag

## Groepsgrootte

Minimum 8, maximum 14 deelnemers

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

## Expertise & coördinatie

Dit weekend wordt begeleid door **Sarah Deleu (Logisch Gezond)**, EFT-therapeut, in samenwerking met SOLA.

Sarah leert je werken met Emotional Freedom Techniques (EFT): een praktische methode om emoties en spanning te herkennen en te ontladen. Je leert hoe je zelf kan reguleren, op een manier die eenvoudig en ook na het weekend toepasbaar blijft. De begeleiding is rustig en afgestemd op wat zich op dat moment aandient.

Daarnaast is **Liv (Gent)** betrokken als yoga-specialist. Via yoga en gerichte beweging helpt zij om uit het hoofd te komen en beter in het lichaam te zakken. Dit ondersteunt wat je mentaal en emotioneel leert, en zorgt voor integratie in het lichaam.

## Programma

### Vrijdagavond: Aankomen & kennismaking

We starten het weekend rustig.

- Aankomen in het huis en aperitief
- Kennismaking met de groep
- Lichte, intuïtieve oefening om het ijs te breken
- Samen avondeten

### Zaterdag: In connectie met jezelf

**Ochtend**

- 06u Sunrise-moment (vrijblijvend)  
  Voor wie wil: samen naar buiten om de dag te zien beginnen (rond 6u03).
- Wakker worden & korte ochtendwandeling (± 30 min)
- Ontbijt

We starten de dag rustig en brengen aandacht naar het lichaam en het moment.

**Voormiddag: workshop**

- Inzicht in emoties en hoe ze werken
- Introductie EFT: leren voelen en spanning reguleren
- Praktische oefening om dit meteen te ervaren

De focus ligt op jezelf beter aanvoelen, zonder analyse of moeten.

**Namiddag**

- Wandeling
- Creatieve oefening: wat je voelt vorm geven

**Avond**

- Samen avondeten
- Aesthetic dance: vrij bewegen

De dag bouwt geleidelijk op en laat ook voldoende ruimte om te integreren.

### Zondag: In connectie met de ander

**Ochtend**

- Rustige opstart
- Ontbijt
- Korte check-in

**Voormiddag: workshop**

- Inzicht in hoe jij verbinding en afstand ervaart
- Herkennen van relationele patronen
- EFT-oefeningen om bij jezelf te blijven in contact met anderen

**Late voormiddag**

- Eenvoudige systemische oefeningen rond je plek en grenzen
- Begeleide hartmeditatie & matrix reimprinting

**Middag**

- Samen lunch
- Afronden van het weekend met concrete handvatten om thuis mee verder te gaan

## Verblijf

We verblijven in Sourbrodt, in de Hoge Venen (Ardennen), in een ruim en comfortabel groepshuis. Je slaapt standaard in een gedeelde kamer (2 personen), met een kamerverdeling per hetzelfde geslacht. Koppels kunnen uiteraard samen op één kamer. Elke kamer beschikt over een eigen ensuite badkamer. Wie liever alleen slaapt, kan dit bij inschrijving aangeven. Dit is mogelijk mits supplement en in functie van beschikbaarheid.

## Maaltijden

Alle maaltijden zijn inbegrepen. Er wordt gewerkt met gezonde, evenwichtige voeding, met aandacht voor energie. Een deel van de groenten komt uit eigen kweek. Het eten is voedend en vooral: lekker.

## CTA + early bird

✨ **Early birds ontvangen een persoonlijk cadeau tot 31 maart 2026**

Beperkt aantal plaatsen — kleine groep, bewust gekozen.

## Boek je plek

Na je inschrijving ontvang je een bevestiging en verdere praktische info per e-mail.

## Twijfel je nog? Plan een gesprek

Laat je gegevens achter en we nemen persoonlijk contact met je op om te bekijken of dit weekend bij je past.

## Goed om weten – FAQ

**Moet ik ervaring hebben met lichaamswerk, meditatie of EFT?**

Nee. Je hoeft geen enkele voorkennis te hebben. Alles wordt uitgelegd en stap voor stap begeleid. Je volgt op jouw tempo.

**Is dit therapeutisch?**

Nee. Dit is geen therapie en geen diepgravende analyse. Het is een ervaringsgericht weekend waarin je ontdekt, voelt en leert, zonder iets te moeten oplossen.

**Moet ik persoonlijke dingen delen in de groep?**

Nee. Delen mag, niets moet. Je bepaalt zelf wat je deelt en wat je voor jezelf houdt. Stilte is even welkom als woorden.

**Wat neem ik concreet mee naar huis?**

Je gaat naar huis met:

- eenvoudige tools (zoals EFT) die je zelf kan toepassen
- ervaringen die je helpen om anders met situaties om te gaan

**Past dit bij mij als ik gewoon nieuwsgierig ben?**

Ja. Veel deelnemers komen niet met een "probleem", maar met nieuwsgierigheid. Dit weekend draait om ontdekken, ervaren en verruimen.

## Na inschrijving

Je ontvangt:

- praktische info over de locatie, aankomst en programma
- wat mee te brengen naar het weekend`,
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
    "SOLA creëert groepsreizen rond gezondheid, waar beweging, wetenschap en natuur samenkomen.",
  pillars: [
    {
      title: "Deskundige begeleiding en wetenschappelijke onderbouwing",
      description: "Begeleiding door mensen die hun vak verstaan. Per thema werken we met een expert, met kennis van zaken en oog voor de groep. Wat we doen vertrekt vanuit kennis en onderzoek. Elke reis wordt samen met een expert opgebouwd, zodat inhoud en ervaring elkaar versterken.",
      image: "/src/assets/images/2596052607.jpg",
    },
    {
      title: "Ervaringsgericht leren in kleine groepen",
      description: "Je toetst de theorie aan de praktijk. Wat je leert en ervaart neem je ook mee naar huis en kun je inpassen in je dagelijkse leven.",
      image: "/src/assets/images/2631991747.jpg",
    },
    {
      title: "Beweging met beide voeten in de natuur",
      description: "We kiezen voor beweging in de natuur. Omdat het goed is voor lichaam en hoofd, en omdat het inspireert en aanzet tot actie.",
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

