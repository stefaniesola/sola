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
    slug: "sport-voeding",
    name: "Weekend – Sport × Voeding",
    type: "Weekend",
    shortDescription:
      "Met endurance coach Simon Helleputte ontdek je hoe beweging en voeding samenwerken voor duurzame energie.",
    location: "Ardennen",
    dates: "31 juli – 2 augustus 2026",
    price: "€550",
    minParticipants: 8,
    maxParticipants: 14,
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    intro: [
      "Met Simon ontdek je hoe beweging en voeding bijdragen aan vitaliteit. Beweging als medicijn, voeding als brandstof, inzicht als kompas.",
      "We combineren onderbouwde training met eerlijke voeding, zodat je helder naar je eigen lichaam leert luisteren.",
    ],
    audience: [
      "Ambitieuze recreanten die met meer richting willen trainen",
      "Mensen die willen bewegen maar drempels ervaren",
      "Sportieve zielen met een groeimindset",
    ],
    focus: [
      "Fysieke inspanning als medicijn",
      "Slim en haalbaar trainen",
      "Sportvoeding die werkt in de praktijk",
      "Consistentie en mindset",
      "Herstel en rustmomenten herkennen",
    ],
    program: [
      {
        day: "Dag 1 – Aankomst",
        items: ["Welkom & kennismaking", "Avondmaal", "Korte avondwandeling"],
      },
      {
        day: "Dag 2 – Inzicht & beweging",
        items: ["Ochtendworkshop over training", "Trail of fietsrit in kleine groepen", "Avondsessie: voeding & herstel"],
      },
      {
        day: "Dag 3 – Integratie",
        items: ["Ochtendactiviteit", "Reflectiemoment", "Afsluitcirkel"],
      },
    ],
    practical: {
      location: "Ardennen",
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
      sleeping: "Comfortabele kamers, gedeeld of duo. Eerlijke, voedende maaltijden.",
    },
    guides: ["Simon Helleputte", "SOLA team"],
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
    guides: ["SOLA team"],
    bookingStatus: "Binnenkort",
  },
];

export const people: Person[] = [
  {
    name: "Stefanie Deleu",
    role: "Organisator & avonturier",
    type: "Core",
    bio: "Stefanie is de verbindende kracht achter SOLA. Ze organiseert weekenden waar beweging en natuur samenkomen en zorgt dat elke deelnemer zich gedragen voelt.",
  },
  {
    name: "Sarah Van den Daele",
    role: "Organisator & marketeer",
    type: "Core",
    bio: "Sarah vertelt het verhaal van SOLA en bewaakt de helderheid in elke ervaring. Ze zorgt dat elke sessie praktisch, warm en toegankelijk blijft.",
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
  "Kleine groep",
  "Helder programma",
  "Deskundige begeleiding",
  "Onderbouwd & menselijk",
  "Mooie plek in natuur",
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
    "Voor mensen die willen bewegen en voelen.",
    "Voor wie verantwoordelijkheid wil nemen voor zijn proces.",
    "Voor wie pit heeft — en zachtheid niet schuwt.",
  ],
  waarom:
    "We geloven niet in reizen die je doen ontsnappen, maar in reizen die je doen thuiskomen. In rust. In open gesprekken. In landschappen die met je meedenken.",
  pillars: [
    "Kleine groepen",
    "Expertise uit sport, psychologie en KPNI",
    "Eerlijke voeding",
    "Ervaringsgericht, helder en menselijk",
    "Ruimte voor nuance en je eigen ritme",
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
