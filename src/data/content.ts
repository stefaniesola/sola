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
}

export interface Person {
  name: string;
  role: string;
  type: "Core" | "Expert";
  bio: string;
  photo?: string;
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
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
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
        items: ["Sunrise & rustige ochtendwandeling (optioneel)", "Nuchter bewegen: wat gebeurt er in je lichaam?", "Ontbijt", "Meten en begrijpen: inzicht in je eigen lichaam",
  "Beweging en gezondheid: cardio, metabolisme en glucose", "Lunch", "Namiddag: trailrun of hike", "Avondmaal", "Avondsessie: slaap & herstel"],
      },
      {
        day: "Zondag: integratie & vooruitblik",
        items: ["Ochtendactiviteit", "Reflectiemoment", "Afsluitcirkel"],
      },
    ],
    practical: {
      location: "Ardennen",
      dates: "31 juli – 2 augustus 2026",
      price: "€550",
      participants: "min. 8 – max. 14 deelnemers",
      included: [
        "Begeleiding door Simon en het SOLATRAVEL-team",
        "Twee overnachtingen",
        "Maaltijden en snacks",
        "Workshops en trainingen",
      ],
      notIncluded: ["Transport naar de locatie", "Eigen verzekering"],
      sleeping: "Comfortabele kamers, gedeeld of duo. Eerlijke, voedende maaltijden.",
    },
    guides: ["Simon Helleputte", "SOLATRAVEL team"],
    bookingStatus: "open",
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
    heroImage:
      "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?auto=format&fit=crop&w=1400&q=80",
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
        "Begeleiding door Sarah en het SOLATRAVEL-team",
        "Twee overnachtingen",
        "Eerlijke maaltijden en snacks",
        "Workshops en sessies",
      ],
      notIncluded: ["Transport naar de locatie", "Eventuele persoonlijke aankopen"],
      sleeping: "Rustige gedeelde kamers, ruimte voor stilte en integratie.",
    },
    guides: ["Sarah Deleu", "SOLATRAVEL team"],
    bookingStatus: "open",
  },
  {
    slug: "solatravel-terra-frankrijk",
    name: "SOLATRAVEL TERRA – Frankrijk",
    type: "Reis",
    shortDescription:
      "Een natuurlijke, rustige, licht sauvage plek in Frankrijk. Voor langere trajecten waar natuur, beweging en inzicht samenkomen.",
    location: "Frankrijk",
    dates: "Binnenkort beschikbaar",
    price: "n.t.b.",
    heroImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
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
    guides: ["SOLATRAVEL team"],
    bookingStatus: "Binnenkort",
  },
];

export const people: Person[] = [
  {
    name: "Stefanie Deleu",
    role: "Organisator & avonturier",
    type: "Core",
    bio: "Stefanie is de verbindende kracht achter SOLATRAVEL. Ze organiseert weekenden waar beweging en natuur samenkomen en zorgt dat elke deelnemer zich gedragen voelt.",
  },
  {
    name: "Sarah Van den Daele",
    role: "Organisator & marketeer",
    type: "Core",
    bio: "Sarah vertelt het verhaal van SOLATRAVEL en bewaakt de helderheid in elke ervaring. Ze zorgt dat elke sessie praktisch, warm en toegankelijk blijft.",
  },
  {
    name: "Simon Helleputte",
    role: "Endurance coach & sportwetenschapper",
    type: "Expert",
    bio: "Simon vertaalt sportwetenschap naar haalbare stappen. Hij begeleidt beweging als medicijn en helpt je trainen met richting en nuance.",
  },
  {
    name: "Sarah Deleu",
    role: "EFT-coach & therapeut",
    type: "Expert",
    bio: "Sarah creëert ruimte voor emotie en connectie. Ze werkt met EFT en open gesprekken zodat je met meer zachtheid en kracht in beweging komt.",
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
    "SOLATRAVEL creëert weekenden waar beweging, wetenschap en natuur samenkomen. Eerlijk, helder en menselijk.",
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
    "SOLATRAVEL bouwt ervaringen die je in beweging zetten met inzicht. Met een onderbouwde aanpak, in de natuur, in kleine groepen.",
  vision:
    "We geloven dat gezondheid ontstaat wanneer natuur, inspanning en inzicht samenkomen. Geen vlucht, wel een plek om wakker te worden.",
};

export const kernidentiteit = [
  "🌞 SOLATRAVEL : licht, kracht, beweging",
  "Solatravel komt van soleil: licht dat richting geeft.",
  "Wij werken vanuit energie, helderheid en het lichaam dat beweegt.",
  "Gezondheid ontstaat wanneer natuur, inspanning en inzicht samenkomen.",
  "Solatravel is Sarah, Stefanie.",
  "SOLATRAVEL : au vrai.",
];

export const weekendPage = {
  label: "Weekenden",
  title: "Weekenden die bewegen én verdiepen",
  description:
    "Kleine groepen, deskundige begeleiding en programma's die beweging, inzicht en natuur samenbrengen.",
  cta: "Bekijk weekend",
};

export const homePage = {
  brandLabel: "SOLATRAVEL",
  heroQuote: "La simplicité est la sophistication suprême",
  heroQuoteAuthor: "— Léonard de Vinci",
  ctaDiscover: "Ontdek onze weekenden",
  ctaContact: "Contact opnemen",
  sectionVoorWie: "Voor wie",
  sectionWaarom: "Waarom SOLATRAVEL",
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
    title: "Wie SOLATRAVEL draagt",
    description:
      "SOLATRAVEL wordt gedragen door twee kernfiguren die de combinatie van beweging, inzicht en natuur bewaken.",
    cta: "Leer ons kennen",
  },
};

export const weekendDetailPage = {
  ctaBook: "Boek nu",
  ctaMoreInfo: "Meer info",
  sectionVoorWie: "Voor wie",
  sectionFocus: "Wat je leert / focus",
  sectionProgramma: "Programma",
  sectionPraktisch: "Praktisch",
  practicalLabels: {
    location: "Locatie",
    dates: "Data",
    price: "Prijs",
    participants: "Deelnemers",
    included: "Inbegrepen",
    notIncluded: "Niet inbegrepen",
    sleeping: "Slaap & maaltijden",
  },
  bookingForm: {
    title: "Boek nu",
    description:
      "We sturen je een bevestiging en verdere details per e-mail.",
    labels: {
      naam: "Naam",
      email: "E-mail",
      telefoon: "Telefoon",
      weekend: "Gekozen weekend",
    },
    submit: "Verstuur",
    success: "Bedankt! Je aanvraag is verstuurd.",
  },
  interestForm: {
    title: "Interesseformulier",
    description:
      "Nog twijfels? Laat je gegevens achter, we nemen contact op.",
    labels: {
      naam: "Naam",
      email: "E-mail",
      telefoon: "Telefoon",
    },
    submit: "Verstuur",
    success: "Bedankt! We nemen snel contact op.",
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
  label: "Over SOLATRAVEL",
  title: "Wie we zijn",
  description:
    "Solatravel creëert ervaringen waar beweging, wetenschap en natuur samenkomen. We werken met artsen, therapeuten en coaches die handelen vanuit KPNI, fysiologie, gedrag en voeding.",
  quote: "« Le corps dit vrai. » — het lichaam liegt niet.",
  sectionVoorWie: "Voor wie",
  sectionMissieVisie: "Missie & visie",
  missieLabel: "Onze missie",
  visieLabel: "Onze visie",
  sectionWatOnsAndersMaakt: "Wat ons anders maakt",
  sectionTeam: "Team",
  sectionExperten: "Experten",
  sectionKernidentiteit: "SOLATRAVEL – kernidentiteit",
  sectionTerra: {
    title: "SOLATRAVEL TERRA (Frankrijk)",
    description1:
      "Een natuurlijke, rustige, licht sauvage plek in Frankrijk.",
    description2:
      "Natuur die draagt. Licht dat richting geeft. Een plek om te bewegen.",
    quote: "« Au cœur du vivant. »",
    cta: "Blijf op de hoogte →",
  },
  ctaDiscover: "Ontdek onze weekenden",
};
