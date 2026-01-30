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
  keyFacts?: { label: string; lines: string[] }[];
  faq?: { question: string; answer: string }[];
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
    keyFacts: [
      {
        label: "Wanneer",
        lines: [
          "31 juli t.e.m. 2 augustus",
          "Welkom op vrijdag vanaf 18u",
          "Afsluiting op zondag na de lunch",
        ],
      },
      {
        label: "Waar",
        lines: ["Sourbrodt, Hoge Venen, Ardennen"],
      },
      {
        label: "Prijs",
        lines: ["€550 per persoon (all-in)"],
      },
      {
        label: "Early bird",
        lines: ["Cadeau bij inschrijving vóór 15 maart 2026"],
      },
      {
        label: "Groepsgrootte",
        lines: ["Minimum 8, maximum 14 deelnemers"],
      },
    ],
    faq: [
      {
        question: "Is dit weekend ook voor mij als ik geen marathon loop?",
        answer:
          "Ja. Je hoeft geen marathon te lopen of wedstrijden te plannen. Veel deelnemers bewegen recreatief of willen net een sportief doel opbouwen. Het weekend focust op gezondheid en inzicht.",
      },
      {
        question: "Moet ik sportief zijn?",
        answer: "Basisconditie en motivatie volstaan.",
      },
      {
        question: "Moet ik data of sporthorloges hebben?",
        answer:
          "Nee. Dat is niet nodig. De metingen (zoals rusthartslag of bloeddruk) gebeuren ter plaatse. Heb je een sporthorloge, dan mag je dat zeker gebruiken, maar het is geen vereiste.",
      },
      {
        question: "Is dit medisch?",
        answer:
          "Nee. Het is geen medische diagnose, wel wetenschappelijk onderbouwde educatie.",
      },
      {
        question: "Wat als ik blessuregevoelig ben?",
        answer:
          "Dat kan. Je hoeft niets te forceren. Bewegingen worden aangepast en je kan activiteiten overslaan. De inhoud helpt je net begrijpen hoe je blessures kan voorkomen door slimmer te bewegen.",
      },
      {
        question: "Hoe intens is de trailrun / hike?",
        answer:
          "Het gaat om bewegen in de natuur, geen training. We bekijken ter plaatse hoe de groep is samengesteld en delen indien nodig op in kleinere subgroepen. Je kan wandelen of licht joggen, op een tempo dat voor jou haalbaar is. Er is geen vooraf vastgelegd tempo of afstand. We stemmen de activiteit af op de groep.",
      },
    ],
    longread: `## Voor wie

- Graag beweegt en actief in het leven staat, zonder dat sport je volledige identiteit moet zijn
- voelt dat beweging essentieel is voor je gezondheid, en daar graag meer inzicht in krijgt
- een sportief doel hebt, of ermee speelt er één te formuleren (bv. marathon, trail, fietsevenement, Hyrox, …)
- nieuwsgierig bent naar wat beweging doet met je metabole en cardiovasculaire gezondheid

## Wat je leert / focus

Tijdens dit weekend ontdek je:

- waarom fysieke inspanning essentieel is voor gezondheid en vitaliteit
- hoe beweging werkt als medicijn voor zowel lichaam als geest
- wat er écht gebeurt in je lichaam tijdens inspanning (metabolisme en hart)
- hoe voeding, herstel en beweging samenhangen
- hoe je data (meten) en lichaamsgevoel (voelen) in balans brengt

## Na dit weekend

Je gaat naar huis met

- inzicht in je persoonlijke gezondheids- en bewegingsprofiel
- concrete handvatten om beweging duurzaam en haalbaar te integreren in je leven
- enkele praktische leefstijl- en bewegingsgewoontes waar jij effectief mee aan de slag gaat
- een sterker fundament voor je sportieve én cardiovasculaire gezondheid op lange termijn

Dit weekend draait niet om méér doen, maar om beter begrijpen en bewuster bewegen.

## Expertise & coördinatie

Dit weekend wordt georganiseerd door SOLA (Stefanie Deleu) in samenwerking met Simon Helleputte van Simon Endurance Lab.  
Simon is bewegingswetenschapper en coach, gespecialiseerd in de impact van fysieke activiteit op gezondheid, prestaties en mentale veerkracht. Hij vertaalt wetenschap naar begrijpelijke, relevante en toepasbare inzichten, zonder dogma’s.  
SOLA zorgt voor de omkadering en integratie.

## Programma

### Vrijdagavond: Aankomen & kennismaking

We starten het weekend rustig.

- Aankomen in het huis en aperitief
- Kennismaking met de groep
- persoonlijke intentie voor het weekend
- Samen avondeten

### Zaterdag: Inzichten en inspanning

**Ochtend**

- Sunrise-moment voor wie wil (rond 6u03)
- Wakker worden & rustige ochtendwandeling (± 30 min)
- Korte sessie Simon (± 30 min): Nuchter bewegen: wat doet dat met je lichaam? Mythes ontkracht
- Ontbijt

**Voormiddag**

- Praktijksessie: persoonlijke metingen
- Theoretische sessie Simon (± 1u15): Cardiovasculaire gezondheid, risico’s en impact van beweging met koppeling aan jouw eigen data

**Middag**

- Lunch

**Namiddag**

- Beweging in de natuur (trailrun / hike, in groepen)
- Signal de Botrange (hoogste punt van België)

**Avond**

- Avondmaal
- Korte avondmodule (30–45 min): Wat gebeurt er ’s nachts in je lichaam? Herstel & het parasympatisch systeem

### Zondag: Integratie

**Ochtend**

- Rustige opstart
- Ontbijt
- Korte check-in
- Core- & krachtoefeningen (1u)

**Voormiddag: workshop**

- Reflectie: wat neem ik mee in mijn dagelijks leven?
- Concrete takeaways & persoonlijke actiepunten

**Middag**

- Samen lunch
- Afronden van het weekend met concrete handvatten om thuis mee verder te gaan

## Verblijf

Je verblijft in Sourbrodt in de Oostkantons, te midden van het Natuurpark Hoge Venen - Eifel. Vanaf 570 m hoogte kijkt het huis langs de achterkant uit over het meest ruige stukje natuur van België. Geniet tijdens je verblijf van een dip in de hottub of laat je actieve benen uit in de grote tuin. Je slaapt standaard in een gedeelde kamer (twee personen), met een kamerverdeling volgens geslacht. Koppels kunnen uiteraard samen op een kamer. Elke kamer is voorzien van douche en toilet. Wie liever alleen slaapt, kan dit bij inschrijving aangeven. Dit is mogelijk mits een supplement van 115 euro en in functie van beschikbaarheid.

## Maaltijden

Smakelijk op reis met SOLA. Alle maaltijden zijn inbegrepen, van het avondmaal op de dag van aankomst tot de lunch op de dag van vertrek. De focus ligt op gezonde, evenwichtige voeding, in balans met de activiteiten tijdens je reis.

## Praktisch

**Locatie:** Sourbrodt, Hoge Venen, Ardennen  
**Data:** Vrijdag 31 juli t.e.m. zondag 2 augustus 2026  
**Prijs:** €550 per persoon. Deze prijs is all-in.  
**Aantal deelnemers:** min. 8 – max. 14 deelnemers

## Vroegboekcadeau

Schrijf je in vóór 15 maart 2026 en ontvang een extra cadeau.

## Wat is inbegrepen?

- 3-daags / 2-nachten weekendtraject
- Inhoudelijke begeleiding door Simon van Endurance Lab
- Een sessie bij Simon van Endurance Lab na dit weekend
- Alle workshops & sessies
- Praktijkmomenten en metingen
- Verblijf op locatie
- Maaltijden van vrijdagavond t.e.m. zondagmiddag

## Wat is niet inbegrepen?

- Transport naar de locatie
- Eigen verzekering

## Boek je plek

Na je inschrijving ontvang je een bevestiging en verdere praktische info [per e-mail](mailto:hello@solatravel.be).

## Twijfel je nog? Plan een gesprek

Laat je gegevens achter en we nemen persoonlijk contact met je op om te bekijken of dit weekend bij je past.

## Goed om weten - FAQ

## Na inschrijving

Je ontvangt praktische info, een overzicht van wat mee te brengen en alle timing per mail.`,
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
    keyFacts: [
      {
        label: "Wanneer",
        lines: ["Vrijdag 7 augustus t.e.m. zondag 9 augustus 2026"],
      },
      {
        label: "Waar",
        lines: ["Sourbrodt, Hoge Venen, Ardennen"],
      },
      {
        label: "Prijs",
        lines: ["€620 per persoon (all-in)"],
      },
      {
        label: "Early bird",
        lines: ["Cadeau bij inschrijving vóór 31 maart 2026"],
      },
      {
        label: "Groepsgrootte",
        lines: ["Minimum 8, maximum 14 deelnemers"],
      },
    ],
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

## Expertise & coördinatie

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

## Verblijf

We verblijven in Sourbrodt, in de Hoge Venen (Ardennen), in een ruim en comfortabel groepshuis. Je slaapt standaard in een gedeelde kamer (2 personen), met een kamerverdeling per hetzelfde geslacht. Koppels kunnen uiteraard samen op één kamer. Elke kamer beschikt over een eigen ensuite badkamer. Wie liever alleen slaapt, kan dit bij inschrijving aangeven. Dit is mogelijk mits supplement en in functie van beschikbaarheid.

## Maaltijden

Alle maaltijden zijn inbegrepen en worden afgestemd met de experts. Er wordt gewerkt met gezonde, evenwichtige voeding, met aandacht voor energie. Een deel van de groenten komt uit eigen kweek. Het eten is voedend, in balans en vooral: lekker.

## Praktisch

**Locatie:** Sourbrodt, Hoge Venen, Ardennen  
**Data:** 7 – 9 augustus 2026  
**Prijs:** €620  
**Aantal deelnemers:** min. 8 – max. 14 deelnemers

## Vroegboekcadeau

Schrijf je in vóór 31 maart 2026 en ontvang een persoonlijk cadeau ter voorbereiding op het weekend.

## Wat is inbegrepen?

- Begeleiding door Sarah Deleu (Logisch Gezond), Liv en het [SOLA-team](/over-ons)
- Een sessie bij Sarah van Logisch Gezond na dit weekend
- Twee overnachtingen
- Maaltijden en snacks
- Inhoudelijke sessies, workshops en begeleide activiteiten
- Yoga + ecstatic dance

## Wat is niet inbegrepen?

- Transport naar de locatie
- Eigen verzekering

## Boek je plek

Na je inschrijving ontvang je een bevestiging en verdere praktische info [per e-mail](mailto:hello@solatravel.be).

## Twijfel je nog? Plan een gesprek

Laat je gegevens achter en we nemen persoonlijk contact met je op om te bekijken of dit weekend bij je past.

## Goed om weten - FAQ

**Moet ik ervaring hebben met lichaamswerk, meditatie of EFT?**  
Nee. Je hoeft geen enkele voorkennis te hebben. Alles wordt uitgelegd en stap voor stap begeleid. Je volgt op jouw tempo.

**Is dit therapeutisch?**  
Nee. Dit is geen therapie en geen diepgravende analyse. Het is een ervaringsgericht weekend waarin je ontdekt, voelt en leert, zonder iets te moeten oplossen.

**Moet ik persoonlijke dingen delen in de groep?**  
Nee. Delen mag, niets moet. Je bepaalt zelf wat je deelt en wat je voor jezelf houdt. Stilte is even welkom als woorden.

**Past dit bij mij als ik gewoon nieuwsgierig ben?**  
Ja. Veel deelnemers komen niet met een "probleem", maar met nieuwsgierigheid. Dit weekend draait om ontdekken, ervaren en verruimen.

## Na inschrijving

Je ontvangt praktische info, een overzicht van wat mee te brengen en alle timing per mail.`,
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
  missionAccordion: [
    {
      title: "De betekenis van SOLA",
      body:
        "De naam SOLA verwijst naar de zon, sol in het Spaans, sola als vrouwelijke vorm in het Latijn. De zon staat voor energie, warmte en levenskracht. Dat is wat ik met deze reizen wil doorgeven.",
    },
    {
      title: "Reizen als vertrekpunt",
      body:
        "Ik studeerde toerisme (en bedrijfseconomie) en werk al zo’n acht jaar in de reissector. Reizen verbreedt je blik, brengt je in beweging en haalt je uit je dagelijkse context.",
    },
    {
      title: "Het keerpunt in 2024",
      body:
        "In 2024 werd ik in Sumatra ziek door een geperforeerde appendix. Later bleek een chronische darmaandoening aan de basis te liggen. Het herstel was intens: twee weken ziekenhuis in Medan, daarna nog enkele weken in België en maanden terug opbouwen, gevolgd door een extra operatie. Het was een stevig jaar, maar ik haal er vandaag veel kracht uit en het was een stimulans om bewuster met gezondheid bezig te zijn.",
    },
    {
      title: "Wat ik daaruit meenam",
      body:
        "Mijn passie voor sport en reizen werd aangevuld met een derde passie: actief werken aan gezondheid. Ik ontdekte hoe krachtig de basis is; slaap, voeding en beweging. Door daar bewust mee om te gaan, kom je al heel ver. Die eenvoud wil ik laten voelen tijdens SOLA-reizen.",
    },
    {
      title: "Waarom SOLA vandaag bestaat",
      body:
        "Mijn eigen traject bracht me in contact met gepassioneerde experten. Ik ging langs bij het KPNI-huis (klinische psycho-neuro-immunologie), woonde lezingen bij en leerde breder naar gezondheid kijken. Ik begon me te verdiepen in vragen waar veel mensen mee zitten, zoals hoe het komt dat je een ijzertekort kan hebben zonder “te weinig ijzer te eten” en kwam zo bij verrassende inzichten. Vanuit die insteek wil ik anderen in contact brengen met specialisten die hun vak verstaan. Van expertise kan je leren.\n\nEn dat samen, in een kleine groep gelijkgezinden, waar de positieve dynamiek elkaar versterkt. Let’s go.\n\n— Stefanie",
    },
  ],
  visionHtml: `<p>Er is een gevoel dat er meer mogelijk is: meer energie, meer rust in je hoofd, meer verbinding met je lichaam.</p>
<p>Niet zomaar op reis, maar bewust tijd maken om te vertragen, bij te leren en te voelen wat jou sterker maakt, fysiek én mentaal. Vanuit beweging, natuur en onderbouwde kennis groeit een helder inzicht in wat voor jou werkt.</p>
<p>Geen ontsnapping aan je leven, wel een investering in hoe je het wil leven.</p>`,
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
  label: "Waarom SOLA reizen anders zijn",
  heading: "Over SOLA",
  description: `<p><strong>Met SOLA trachten we iedereen met interesse in diverse gezondheidsthema’s warm te maken voor verdieping en begrip. Omdat dit het fundament is waarop je een toekomst kunt bouwen, omdat het een katalysator is voor blijvende verandering.</strong></p>
<p>De wetenschap brengt een kader en kennis, de natuur biedt schoonheid en rust en de beweging nodigt uit om alles te laten bezinken en inzichten te verweven met je eigen realiteit.</p>
<p>Heeft het leven je uit evenwicht gebracht, sta je dicht bij iemand met gezondheidsuitdagingen, of voel je je sterk aangesproken door onze thema’s? Dan is SOLA er voor jou.</p>`,
  metaDescription: "Wie we zijn, waar we voor staan en met wie we werken.",
  quote: "« Le corps dit vrai. » — Het lichaam liegt niet.",
  sectionVoorWie: "Voor wie",
  sectionMissieVisie: "Missie & visie",
  missieLabel: "Hoe SOLA ontstond",
  visieLabel: "Voor wie?",
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
