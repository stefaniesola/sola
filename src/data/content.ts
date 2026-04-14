import type { ImageMetadata } from "astro";
import heroExerciseMedicine from "../assets/images/GeoPark Famenne Ardenne - landschap Hoge Venen (1).jpg";
import sfeer1 from "../assets/images/Ardennen Belgiê.jpg";
import sfeer2 from "../assets/images/Lekker eten - SOLA Travel (1).jpg";
import sfeer3 from "../assets/images/Justine Deleu - lopen.jpg";
import sfeer4 from "../assets/images/Simon Endurance Lab - performance coach (1) bike.jpeg";
import sfeer5 from "../assets/images/GeoPark Famenne Ardenne - landschap Hoge Venen (3).jpg";
import sfeer6 from "../assets/images/Hoge Venen - Johan Annys (1).jpg";
import sfeer7 from "../assets/images/Stefanie Deleu - Sola Travel - brug.jpg";
import sfeer8 from "../assets/images/Zaal Hoge Venen.avif";
import sfeer9 from "../assets/images/Verblijf in Hoge Venen.avif";
import sfeer10 from "../assets/images/Ontbijt op weekend.avif";
import sfeer11 from "../assets/images/Badkamer Hoge Venen.avif";
import sfeer12 from "../assets/images/Kamer Sourbrodt.avif";
import sarahSfeer1 from "../assets/images/GeoPark Famenne Ardenne - landschap Hoge Venen (3).jpg";
import sarahSfeer2 from "../assets/images/EFT therapie - Sarah Deleu.jpg";
import sarahSfeer3 from "../assets/images/Lekker eten - SOLA Travel (3).jpg";
import sarahSfeer4 from "../assets/images/Hoge Venen - Johan Annys (2).JPG";
import sarahSfeer5 from "../assets/images/Zaal Hoge Venen.avif";
import sarahSfeer6 from "../assets/images/Verblijf in Hoge Venen.avif";
import sarahSfeer7 from "../assets/images/Logisch gezond - Sarah Deleu.jpg";
import sarahSfeer8 from "../assets/images/yoga Lisa LIV.png";
import sarahSfeer9 from "../assets/images/Ontbijt op weekend.avif";
import sarahSfeer10 from "../assets/images/Badkamer Hoge Venen.avif";
import sarahSfeer11 from "../assets/images/Kamer Sourbrodt.avif";
import sarahSfeer12 from "../assets/images/Hoge Venen - Johan Annys (3).jpg";
import sarahSfeer13 from "../assets/images/Logisch gezond EFT - Sarah.jpg";
import sarahSfeer14 from "../assets/images/Logisch gezond - foto.jpg";
import sarahSfeer15 from "../assets/images/Sarah Deleu - therapeut 3.jpg";
import sarahBewustwordingNieuw1 from "../assets/images/Water infused orange.jpg";
import sarahBewustwordingNieuw2 from "../assets/images/EFT techniek - Sarah.jpg";
import sarahBewustwordingNieuw5 from "../assets/images/Sarah - Logisch Gezond - Bewustwording en connectie (1).jpg";
import intermittentHero from "../assets/images/GeoPark Famenne Ardenne - landschap Hoge Venen (4).jpg";
import intermittentSfeer1 from "../assets/images/Simon Endurance Lab - performance coach (1) bike.jpeg";
import intermittentSfeer2 from "../assets/images/Justine Deleu - lopen.jpg";
import intermittentSfeer3 from "../assets/images/Hoge Venen - Johan Annys (1).jpg";
import intermittentSfeer4 from "../assets/images/GeoPark Famenne Ardenne - landschap Hoge Venen (6).jpg";
import intermittentSfeer5 from "../assets/images/Hoge Venen - Barbara winter.jpeg";
import intermittentSfeer6 from "../assets/images/Hoge Venen omgeving.jpeg";
import intermittentSfeer7 from "../assets/images/Zaal Hoge Venen.avif";
import intermittentSfeer8 from "../assets/images/Ontbijt op weekend.avif";
import intermittentSfeer9 from "../assets/images/Verblijf in Hoge Venen.avif";
import intermittentSfeer10 from "../assets/images/Kamer Sourbrodt.avif";
import solaTerraFrankrijk from "../assets/images/SOLA TERRA Frankrijk.jpg";

export type JourneyType = "Weekend" | "Reis";

export interface Journey {
  slug: string;
  name: string;
  type: JourneyType;
  shortDescription: string;
  location: string;
  dates: string;
  price: string;
  heroImage?: string | ImageMetadata;
  galleryImages?: ImageMetadata[];
  galleryAlts?: string[];
  heroImageData?: {
    src: string;
    width: number;
    height: number;
    format?: string;
  };
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
    heroImage: heroExerciseMedicine,
    galleryImages: [
      sfeer1,
      sfeer2,
      sfeer3,
      sfeer4,
      sfeer5,
      sfeer6,
      sfeer7,
      sfeer8,
      sfeer9,
      sfeer10,
      sfeer11,
      sfeer12,
    ],
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

### Persoonlijke opvolgsessie na het weekend

Na het weekend krijg je de mogelijkheid tot een 1-op-1 sessie met Simon. Hier vertaal je de inzichten uit het weekend naar jouw eigen lichaam en doelen, van training en energie tot herstel en cardiometabole gezondheid.

Je kan zelf kiezen waar je op wil focussen (bv. nuchter trainen, trainingsopbouw, intensiteit, …).

Extra testen zoals een lactaattest zijn mogelijk, maar optioneel en betalend.

## Expertise & coördinatie

Dit weekend wordt georganiseerd door SOLA (Stefanie Deleu) in samenwerking met Simon Helleputte van [Simon Endurance Lab](https://www.instagram.com/simonendurancelab/).  
Simon is bewegingswetenschapper en coach, gespecialiseerd in de impact van fysieke activiteit op gezondheid, prestaties en mentale veerkracht. Hij vertaalt wetenschap naar begrijpelijke, relevante en toepasbare inzichten, zonder dogma’s.  
SOLA zorgt voor de omkadering en integratie.

## Programma

### DAG 1 – Vrijdag 31.07

**Vanaf 18.00**  
Onthaal met cocktails, mocktails en suikerarme dranken  
Kamerverdeling, praktische info en passen van je SOLA T-shirt ☀️

Kennismaking in spelvorm  
Intro van het weekend, de groep en je persoonlijke intentie

**19.30**  
Avondmaal met de groep

### DAG 2 – Zaterdag 1.08

**06.00**  
Sunrise-moment (vrijblijvend)

**07.00**  
Dauwwandeling in de omgeving maken

**07.30**  
Infosessie: nuchter bewegen en het effect op je lichaam  
Met Simon Helleputte (Simon Endurance Lab, All In Gent)

**08.15**  
Ontbijt  
Evenwichtig buffet met focus op energie en vezels

**09.00**  
Praktijksessie – persoonlijke metingen (o.a. rusthartslag)

gevolgd door  
Theoretische sessie: cardiovasculaire gezondheid en impact van beweging  
Vertrekkend vanuit je eigen meetresultaten

**12.30**  
Lunch  
Inclusief korte toelichting rond sportvoeding voor, tijdens en na inspanning

**14.30**  
Trailrun richting Signal de Botrange (694 m)  
Gevarieerd parcours over bosgrond, vlonderpaden en het veenplateau, met beperkte hoogtemeters  
Alternatief: hike (±8 km)

Na afloop: douchen en tijd om even te ontspannen

**19.00**  
Avondmaal

**20.30**  
Avondsessie: herstel na inspanning en hoe je dit optimaliseert  
’s Nachts schakelt je lichaam over op herstel via het parasympathisch systeem, dat zorgt voor rust en ontspanning

Afsluiter van de dag  
Ontspannen in de hottub, aan de bar of rond het vuur buiten

### DAG 3 – Zondag 2.08

**08.00**  
Ontbijt  
(Voorheen is er een ruimte beschikbaar voor rustige beweging of yoga)

**09.00**  
Workshop: analyse van je metingen en persoonlijke doelen  
Concrete inzichten en actiepunten voor je dagelijks leven

Cirkelsessie rond sportuitrusting (±30 min)  
Ervaringen en praktische tips

**11.00**  
Sessie krachttraining: core & stability  
Gericht bewegen om je lichaam te activeren en ondersteunen

**12.00**  
Lunch

## Verblijf

Je verblijft in Sourbrodt in de Oostkantons, te midden van het Natuurpark Hoge Venen - Eifel. Vanaf 570 m hoogte kijkt het huis langs de achterkant uit over het meest ruige stukje natuur van België. Geniet tijdens je verblijf van een dip in de hottub of laat je actieve benen uit in de grote tuin. Je slaapt standaard in een gedeelde kamer (twee personen), met een kamerverdeling volgens geslacht. Koppels kunnen uiteraard samen op een kamer. Elke kamer is voorzien van douche en toilet. Wie liever alleen slaapt, kan dit bij inschrijving aangeven. Dit is mogelijk mits een supplement van 115 euro en in functie van beschikbaarheid.

## Maaltijden

Smakelijk op reis met SOLA. Alle maaltijden zijn inbegrepen, van het avondmaal op de dag van aankomst tot de lunch op de dag van vertrek. De focus ligt op gezonde, evenwichtige voeding, in balans met de activiteiten tijdens je reis. Heb je allergieën of specifieke voedingswensen (zoals vegetarisch)? Geef dit zeker door bij je inschrijving, dan houden we daar graag rekening mee.

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
- SOLA T-shirt: ademend sportshirt, ontwikkeld met <a href="https://www.decca.cc" target="_blank" rel="noopener noreferrer">Decca Sportswear</a>

## Wat is niet inbegrepen?

- Transport naar de locatie
- Eigen verzekering

## Boek je plek

Na je inschrijving ontvang je een bevestiging en verdere praktische info [per e-mail](mailto:hello@solatravel.be).

## Twijfel je?

Laat je gegevens achter en we nemen persoonlijk contact met je op om te bekijken of dit weekend bij je past.

## Na inschrijving

–
Je ontvangt praktische info, een overzicht van wat mee te brengen en alle timing per mail.

## Goed om weten - FAQ`,
  },
  {
    slug: "bewustwording-connectie",
    name: "Mentale helderheid & connectie",
    type: "Weekend",
    shortDescription:
      "Krijg inzicht in wat je gedrag stuurt en hoe je daar bewust mee omgaat. Tijdens dit weekend met Sarah van Logisch Gezond leer je patronen doorbreken, emoties reguleren en sterker staan in je dagelijkse leven.",
    location: "Hoge Venen, Ardennen",
    dates: "7 – 9 augustus 2026",
    price: "€620",
    heroImage: "/src/assets/images/2631991747.jpg",
    galleryImages: [
      sarahBewustwordingNieuw1,
      sarahSfeer1,
      sarahSfeer2,
      sarahSfeer3,
      sarahSfeer4,
      sarahSfeer5,
      sarahSfeer6,
      sarahSfeer7,
      sarahSfeer8,
      sarahSfeer9,
      sarahSfeer10,
      sarahSfeer11,
      sarahSfeer12,
      sarahSfeer13,
      sarahSfeer14,
      sarahSfeer15,
    ],
    keyFacts: [
      {
        label: "Wanneer",
        lines: [
          "Vrijdag 7 t.e.m. zondag 9 augustus",
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
        lines: ["€620 per persoon. Deze prijs is all-in."],
      },
      {
        label: "Early bird",
        lines: ["Wie voor 15 maart inschrijft, ontvangt een persoonlijk cadeau."],
      },
      {
        label: "Groepsgrootte",
        lines: ["Minimum 8, maximum 14 deelnemers"],
      },
    ],
    faq: [
      {
        question: "Moet ik ervaring hebben met lichaamswerk, meditatie of EFT?",
        answer:
          "Nee. Je hoeft geen enkele voorkennis te hebben. Alles wordt uitgelegd en stap voor stap begeleid. Je volgt op jouw tempo.",
      },
      {
        question: "Is dit therapeutisch?",
        answer:
          "Nee. Dit is geen therapie en geen diepgravende analyse. Het is een ervaringsgericht weekend waarin je ontdekt, voelt en leert, zonder iets te moeten oplossen.",
      },
      {
        question: "Moet ik persoonlijke dingen delen in de groep?",
        answer:
          "Nee. Delen mag, niets moet. Je bepaalt zelf wat je deelt en wat je voor jezelf houdt. Stilte is even welkom als woorden.",
      },
      {
        question: "Wat neem ik concreet mee naar huis?",
        answer:
          "Je gaat naar huis met:\n\n- eenvoudige tools (zoals EFT) die je zelf kan toepassen\n- ervaringen die je helpen om anders met situaties te gaan",
      },
      {
        question: "Past dit bij mij als ik gewoon nieuwsgierig ben?",
        answer:
          "Ja. Veel deelnemers komen niet met een “probleem”, maar met nieuwsgierigheid. Dit weekend draait om ontdekken, ervaren en verruimen.",
      },
      {
        question: "Wat na dit weekend?",
        answer:
          "- Je beheerst praktische EFT-technieken om spanning te verlagen en jezelf te reguleren bij stress of emotionele lading.\n- Je herkent oude patronen en kan bewuster pauzeren in plaats van automatisch te reageren.\n- Je leert lichamelijke signalen gebruiken als richtingaanwijzers en weet hoe je jezelf weer in evenwicht brengt.\n- Door systemisch werk krijg je inzicht in bredere familiepatronen, waardoor meer ruimte ontstaat.\n- Met Matrix Reimprinting oefende je om beladen ervaringen op een veiligere manier te verankeren, zodat ze minder grip hebben op je reacties.\n- Je hebt deze technieken niet alleen begrepen, maar ook geoefend, zodat je ze thuis verder toepast.\n- Je vertrekt met inzicht en concrete vaardigheden om jezelf te ondersteunen wanneer het leven schuurt of uitdaagt.",
      },
      {
        question:
          "Kan ik alleen komen of samen met iemand (partner, vriend(in), ouder/kind…)?",
        answer:
          "Beide zijn welkom. Je kan alleen komen of samen met iemand die je nabij is. We werken in groep, met ruimte voor je eigen proces. Verbinding ontstaat vanzelf, en er is naast diepgang ook ruimte voor spontaniteit en samen lachen.",
      },
    ],
    longread: `## Voor wie

Dit weekend is voor jou als je:

- merkt dat je soms vastloopt in terugkerende gedachten, emoties of situaties
- beter wil begrijpen hoe je reageert onder druk of in contact met anderen
- wil leren wat voor jou werkt en wat niet, in plaats van automatisch door te gaan
- meer inzicht wil in wat je energie geeft en wat ze kost

Misschien voel je dat er iets schuurt, maar kan je er nog niet goed de vinger op leggen. Of merk je dat je nood hebt aan rust, richting en meer grip in hoe je met jezelf en anderen omgaat.

## Wat je leert / focus

Tijdens dit weekend krijg je inzicht in wat jouw gedrag, emoties en reacties stuurt — en leer je hoe je daar bewust mee omgaat.

We werken met technieken uit de psychologie en stressregulatie, zoals Emotional Freedom Techniques (EFT) en systemisch werk. Daarmee maak je patronen zichtbaar én leer je hoe je ze doorbreekt.

Je ontwikkelt drie concrete vaardigheden:

- **Patronen herkennen**  
Inzicht in terugkerende gedachten en reacties

- **Emoties reguleren**  
Spanning herkennen en actief tot rust brengen

- **Bewuster reageren**  
Meer keuzevrijheid in contact met anderen

Via yoga en beweging in de natuur ondersteunen we ook je lichaam en zenuwstelsel, zodat wat je leert niet alleen inzicht blijft, maar ook echt voelbaar en toepasbaar wordt.

Je werkt in een kleine groep, met duidelijke begeleiding en ruimte om te integreren — zodat je naar huis gaat met rust, helderheid en concrete tools.

## Na dit weekend

- Je verlaagt spanning en stress met concrete technieken zoals Emotional Freedom Techniques (EFT)
- Je herkent automatische patronen en kan bewust pauzeren in plaats van te reageren
- Je gebruikt signalen van je lichaam als richting en brengt jezelf terug in balans
- Je krijgt inzicht in bredere (ook familiale) patronen, waardoor meer ruimte ontstaat
- Je leert anders omgaan met emotioneel geladen ervaringen, zodat ze minder grip hebben

Je hebt deze technieken niet alleen begrepen, maar ook geoefend, zodat je ze thuis meteen kan toepassen.

Je vertrekt met meer rust, helderheid en praktische tools om jezelf te ondersteunen wanneer het schuurt of moeilijk wordt.

## Expertise & coördinatie

Expertise & begeleiding

Dit weekend wordt begeleid door Sarah Deleu ([Logisch Gezond](https://logisch-gezond.be/)), biomedisch wetenschapper en EFT-therapeut, in samenwerking met SOLA.

Sarah werkt rond emotionele en relationele patronen en leert je hoe je spanning reguleert, zodat je met meer rust en helderheid aanwezig kan zijn bij jezelf en anderen.

We combineren inzichten uit psychologie, stressregulatie en lichaamsgericht werk met methodes die je ook meteen oefent:

- EFT helpt je spanning en emotionele lading herkennen en verlagen
- Systemisch werk geeft inzicht in terugkerende patronen en dynamieken
- Matrix Reimprinting helpt om beladen ervaringen anders te verwerken
- [Yoga en beweging](https://www.livyourlife.be/) ondersteunen je lichaam en zenuwstelsel bij integratie

Zo ga je naar huis met meer inzicht, meer rust en concrete tools die je ook na het weekend blijft gebruiken.

## Programma

### Dag 1 - vrijdag

Vanaf 18.00
Aankomst in het huis, onthaal met cocktails, mocktails en suikerarme dranken
Kamerverdeling, praktische info en passen van je SOLA T-shirt ☀️

Kennismaking met de groep
Kleine oefening via kaartspel om het ijs te breken

19.30
Samen avondeten

### Dag 2 - zaterdag

In connectie met jezelf

Ochtend

06.00
Sunrise-moment (vrijblijvend)
Voor wie wil: samen naar buiten om de dag te zien beginnen

07.00
Dauwwandeling in de omgeving (±30 min)

08.00
Uitgebreid ontbijt met focus op energie

Voormiddag – workshop EFT (±09.30 – 12.30)

Inzicht in patronen van emoties versus ratio
Introductie EFT: leren voelen en spanning reguleren
Praktische oefening om dit meteen te ervaren

Focus: jezelf beter aanvoelen, zonder analyse of moeten

12.30
Lunch

Namiddag – natuur & systemisch werk (±14.00 – 17.30)

Wandeling in het natuurpark over vlonderpaden, met veen, heide en bos — een mooie mix van natuur en beweging vlakbij Signal de Botrange (hoogste punt van België)

Systemisch werkmodel 1 rond:
– verlangen
– hindernissen
– je huidige situatie

Wat wil er in jou geleefd worden?
Wat houdt je tegen?
Waar sta je vandaag echt?

Via een creatieve oefening maak je dit concreet en zichtbaar
Na afloop: douchen en tijd om even te ontspannen

Avond

18.30
Samen avondeten

20.30
Ecstatic dance (vrijblijvend)
Vrij bewegen op muziek, spanning loslaten en terug in je lichaam komen

### Dag 3 - zondag

In connectie met de ander

Ochtend

08.00
Rustige opstart en ontbijt

09.00
Korte check-in

Voormiddag – workshop (±09.30 – 11.30)

Systemisch werkmodel 2 rond relationele patronen

We werken rond:
– dragen
– leunen
– aannemen
– uitreiken

Onderzoeken hoe jij in relatie staat tot anderen
EFT integreren om bij jezelf te blijven in contact

Late voormiddag – verdieping (±11.30 – 12.30)

Eenvoudige systemische oefeningen rond je plek en grenzen
Begeleide hartmeditatie
Matrix reimprinting voor nieuwe perspectieven

12.30
Samen lunch

## Verblijf

Je verblijft in Sourbrodt in de Oostkantons, te midden van het Natuurpark Hoge Venen - Eifel. Vanaf 570 m hoogte kijkt het huis langs de achterkant uit over het meest ruige stukje natuur van België. Geniet tijdens je verblijf van een dip in de hottub of laat je actieve benen uit in de grote tuin. Je slaapt standaard in een gedeelde kamer (twee personen), met een kamerverdeling volgens geslacht. Koppels kunnen uiteraard samen op een kamer. Elke kamer is voorzien van douche en toilet. Wie liever alleen slaapt, kan dit bij inschrijving aangeven. Dit is mogelijk mits een supplement van 115 euro en in functie van beschikbaarheid.

## Maaltijden

Smakelijk op reis met SOLA. Alle maaltijden zijn inbegrepen, van het avondmaal op de dag van aankomst tot de lunch op de dag van vertrek. De focus ligt op gezonde, evenwichtige voeding, in balans met de activiteiten tijdens je reis. Heb je allergieën of specifieke voedingswensen (zoals vegetarisch)? Geef dit zeker door bij je inschrijving, dan houden we daar graag rekening mee.

## Praktisch

**Locatie:** Sourbrodt, Hoge Venen, Ardennen  
**Data:** Vrijdag 7 t.e.m. zondag 9 augustus  
**Prijs:** €620 per persoon. Deze prijs is all-in.  
**Aantal deelnemers:** min. 8 – max. 14 deelnemers

## Vroegboekcadeau

Early birds ontvangen een persoonlijk cadeau tot 15 maart 2026  
Beperkt aantal plaatsen — kleine groep, bewust gekozen.

## Wat is inbegrepen?

- 3-daags / 2-nachten weekendtraject
- Inhoudelijke begeleiding door Sarah van Logisch Gezond
- Een sessie bij Sarah van Logisch Gezond na dit weekend
- Alle workshops en sessies
- Yoga en ecstatic dance
- Verblijf op locatie
- Maaltijden van vrijdagavond t.e.m. zondagmiddag
- SOLA T-shirt: ademend sportshirt, ontwikkeld met <a href="https://www.decca.cc" target="_blank" rel="noopener noreferrer">Decca Sportswear</a>

## Wat is niet inbegrepen?

- Reis naar de locatie
- Persoonlijke uitgaven

## Boek je plek

Na je inschrijving ontvang je een bevestiging en verdere praktische info [per e-mail](mailto:hello@solatravel.be).

## Twijfel je?

Laat je gegevens achter en we nemen persoonlijk contact met je op om te bekijken of dit weekend bij je past.

## Na inschrijving

Je ontvangt praktische info, een overzicht van wat mee te brengen en alle timing per mail.

## Goed om weten - FAQ
`,
  },
  {
    slug: "intermittent-living",
    name: "Intermittent Living",
    type: "Weekend",
    shortDescription:
      "Een wetenschappelijk onderbouwde reset in de Hoge Venen. Je leert via gerichte prikkels hoe je energie, focus en herstel duurzaam versterkt.",
    location: "Hoge Venen, Ardennen",
    dates: "18 – 20 september 2026",
    price: "€685",
    heroImage: intermittentHero,
    galleryImages: [
      intermittentSfeer1,
      intermittentSfeer2,
      intermittentSfeer3,
      intermittentSfeer4,
      intermittentSfeer5,
      intermittentSfeer6,
      intermittentSfeer7,
      intermittentSfeer8,
      intermittentSfeer9,
      intermittentSfeer10,
    ],
    keyFacts: [
      {
        label: "Wanneer",
        lines: [
          "Vrijdag 18 september t.e.m. zondag 20 september 2026",
          "Welkom op vrijdag om 10u",
          "Afsluiting op zondag na de lunch",
        ],
      },
      {
        label: "Waar",
        lines: ["Sourbrodt, Hoge Venen, Ardennen"],
      },
      {
        label: "Prijs",
        lines: ["€685 per persoon. Deze prijs is all-in."],
      },
      {
        label: "Early bird",
        lines: ["Cadeau bij inschrijving vóór 15 mei 2026"],
      },
      {
        label: "Groepsgrootte",
        lines: ["Minimum 8, maximum 14 deelnemers"],
      },
    ],
    faq: [
      {
        question: "Ga ik mij effectief energieker voelen?",
        answer:
          "Ja. Veel mensen merken dat ze ’s ochtends makkelijker opstaan, minder dips ervaren en doorheen de dag constanter energie hebben.",
      },
      {
        question: "Wat verandert er mentaal?",
        answer:
          "Meer rust in je hoofd en tegelijk meer scherpte. Je reageert minder automatisch op stress en hebt meer ruimte om bewuste keuzes te maken.",
      },
      {
        question: "Wat betekent ‘meer veerkracht’ concreet?",
        answer:
          "Dat je sneller herstelt na stress, fysiek én mentaal. Minder blijven hangen, sneller terug in balans.",
      },
      {
        question: "Ga ik mij sterker voelen?",
        answer:
          "Ja. Niet alleen fysiek, maar ook mentaal. Je merkt dat je meer aankan en minder snel uit evenwicht geraakt.",
      },
      {
        question: "Wat met stress?",
        answer:
          "Je leert stress beter begrijpen en sturen. Niet alles vermijden, maar er anders mee omgaan.",
      },
      {
        question: "Helpt dit ook in mijn dagelijkse leven of werk?",
        answer:
          "Ja. Meer energie en rust zorgen automatisch voor meer focus en daadkracht. Dingen die je uitstelt, worden plots haalbaar.",
      },
      {
        question:
          "Kan dit impact hebben op mijn keuzes of richting in het leven?",
        answer:
          "Ja. Door rust en helderheid ontstaat er ruimte. Veel mensen voelen na zo’n weekend duidelijker wat ze willen en durven daar ook stappen in zetten.",
      },
      {
        question: "Is dit iets wat blijft of tijdelijk?",
        answer:
          "Je neemt concrete tools en inzichten mee. Het effect stopt dus niet na het weekend, je kan er nadien verder op bouwen.",
      },
      {
        question: "Moet ik sportief zijn?",
        answer:
          "Nee. Je hoeft geen topconditie te hebben. Wel goesting om actief mee te doen. Alles wordt opgebouwd en begeleid.",
      },
      {
        question: "Is dit veilig?",
        answer:
          "Ja. We werken met gecontroleerde prikkels (koude, warmte, ademhaling, fasting) en bouwen alles stap voor stap op. Niemand wordt in iets geduwd.",
      },
      {
        question: "Ga ik wel genoeg eten?",
        answer:
          "Ja. Er is voldoende en doordachte voeding voorzien. We werken met principes zoals intermittent fasting, maar dit wordt begeleid en duidelijk uitgelegd.",
      },
      {
        question: "Moet ik honger lijden?",
        answer:
          "Nee. Het gaat niet over afzien, maar over begrijpen hoe je lichaam werkt en daarop inspelen.",
      },
      {
        question: "Mag ik drinken wanneer ik wil?",
        answer:
          "We werken met intermittent drinking. Dat betekent dat we bewust omgaan met wanneer en hoeveel je drinkt. Dit wordt praktisch uitgelegd tijdens het weekend.",
      },
      {
        question: "Ga ik genoeg slapen?",
        answer:
          "Ja. Slaap en herstel zijn essentieel. We respecteren het ritme van het weekend en zorgen voor voldoende rust.",
      },
      {
        question: "Moet ik ervaring hebben met ijsbaden of ademhaling?",
        answer:
          "Nee. Alles wordt uitgelegd en rustig opgebouwd. Je hoeft niets te kunnen vooraf.",
      },
      {
        question: "Wat moet ik meebrengen?",
        answer:
          "Na inschrijving krijg je een duidelijke paklijst. Denk aan sportkledij, warme kledij en handdoeken (ook voor koude training).",
      },
      {
        question: "Is er eten en drank voorzien?",
        answer: "Ja. Alles wat je nodig hebt tijdens het weekend is voorzien.",
      },
      {
        question: "Wat als ik gezondheidsklachten heb?",
        answer:
          "Laat dit op voorhand weten. Dan bekijken we samen wat mogelijk is.",
      },
      {
        question: "Is dit een medisch traject?",
        answer:
          "Nee. Dit is geen therapie of behandeling, maar een begeleid weekend rond leefstijl, energie en herstel.",
      },
      {
        question: "Wordt het zwaar?",
        answer: "Neen, het wordt uitdagend én fun. Je wordt geprikkeld.",
      },
      {
        question: "Wat als ik twijfel?",
        answer:
          "Dat is normaal. Je hoeft niets te forceren. Je kiest zelf hoe ver je meegaat.",
      },
    ],
    longread: `## Voor wie is dit weekend?

Voor mensen die voelen dat hun energie, focus of veerkracht beter kan.
Voor wie niet gewoon wil ontspannen, maar wil begrijpen hoe lichaam en geest opnieuw sterker kunnen samenwerken.
Voor wie openstaat voor een actieve, onderbouwde aanpak en niet op zoek is naar vrijblijvende wellness, maar naar een ervaring die echt iets in beweging zet.

Dit weekend is er voor wie:

- meer grip wil krijgen op energie, focus en herstel
- interesse heeft in een onderbouwde aanpak, zonder zweverigheid
- openstaat voor gerichte fysieke en mentale prikkels

## Wat mag je verwachten?

Een wetenschappelijk onderbouwde reset die je opnieuw energie geeft en je terug controle laat nemen over je eigen gezondheid.

We leren je lichaam opnieuw omgaan met stress, zodat je veerkrachtiger, scherper en energieker wordt. Door gerichte, evolutionaire prikkels maken we je systeem terug anti-fragiel, precies wat nodig is om jouw volle potentieel te benutten.

We doen dat via een innovatieve en praktische aanpak waarin we je lichaam stap voor stap opnieuw flexibel maken met:

- ijsbaden en koude training
- intensieve bewegingsprikkels zoals HIIT
- intermittent fasting en drinking
- ademhaling, met hypoxie- en CO₂-training
- fysieke, mentale en cognitieve training en prikkels
- nieuwe voedingsstrategieën
- omgaan met acute en chronische stress

Daarnaast krijg je concrete inzichten in je bioritme en levensstijl, zodat je ook na de retreat consistent kan blijven groeien.

## Wat leer je?

Na dit weekend neem je meer mee dan een goed gevoel alleen.
Je mag rekenen op:

- meer energie, minder dips
- betere stressbestendigheid en focus
- een sterker metabolisme en meer hormonale balans
- efficiëntere vetverbranding
- meer controle over lichaam en geest

Het resultaat is een echte reset van body & mind. En een ervaring die blijft doorwerken: fysiek, mentaal en emotioneel.

## Programma

### Dag 1 - vrijdag

- Welkom om 10u in Sourbrodt, Hoge Venen
- Kennismaking met de groep en startkader van het weekend
- Eerste fysieke en mentale activatie
- Avondmaal en rustmoment

### Dag 2 - zaterdag

- Ochtendroutine met ademhaling en gerichte activatie
- Sessies rond koude- en warmteprikkels
- Intermittent fasting en drinking in praktijk
- Cognitieve en fysieke prikkels met integratie in de natuur
- Avondmodule rond stressregulatie en herstel

### Dag 3 - zondag

- Rustige opstart met focus op bioritme en herstel
- Integratiesessie: vertaalslag naar je dagelijks leven
- Afronding na de lunch

## Begeleiding / Experts

Johan De Coninck is expert in KPNI (Klinische Psycho-Neuro-Immunologie) en oprichter van Antwerp Rehab & Training (ART).
Hij werkt sinds 2004 met mensen rond gezondheid, beweging en gedragsverandering. Zijn aanpak vertrekt vanuit de samenhang tussen het zenuwstelsel, het immuunsysteem en psycho-emotionele processen.

Binnen KPNI combineert hij onder andere:

- beweging
- voeding
- ademhaling
- lichaamswerk
- mindset

Hij brengt die elementen samen in een geïntegreerde aanpak, met als doel het lichaam beter te laten functioneren en mensen meer grip te geven op hun energie, herstel en prestaties.

Johan werkt vanuit recente wetenschappelijke inzichten, maar vertaalt die naar iets dat praktisch toepasbaar is. Wat je leert, kan je ook effectief gebruiken.

Meer over Johan en ART:

- Website: [www.rehab-training.be](https://www.rehab-training.be/)
- Team (Johan staat bovenaan): [ART Team](https://www.rehab-training.be/team/)
- Facebook: [Antwerp Rehab & Training](https://www.facebook.com/ARehabTraining/?locale=nl_NL)
- Instagram: [@antwerp_rehab_training](https://www.instagram.com/antwerp_rehab_training)

## Praktisch

### Verblijf

Je verblijft in Sourbrodt in de Oostkantons, te midden van het Natuurpark Hoge Venen - Eifel. Vanaf 570 m hoogte kijkt het huis langs de achterkant uit over het meest ruige stukje natuur van België. Geniet tijdens je verblijf van een dip in de hottub of laat je actieve benen uit in de grote tuin. Je slaapt standaard in een gedeelde kamer (twee personen), met een kamerverdeling volgens geslacht. Koppels kunnen uiteraard samen op een kamer. Elke kamer is voorzien van douche en toilet. Wie liever alleen slaapt, kan dit bij inschrijving aangeven. Dit is mogelijk mits een supplement van 115 euro en in functie van beschikbaarheid.

### Maaltijden

Smakelijk op reis met SOLA. Alle maaltijden zijn inbegrepen, van het avondmaal op de dag van aankomst tot de lunch op de dag van vertrek. De focus ligt op gezonde, evenwichtige voeding, in balans met de activiteiten tijdens je reis. Heb je allergieën of specifieke voedingswensen (zoals vegetarisch)? Geef dit zeker door bij je inschrijving, dan houden we daar graag rekening mee.

**Locatie:** Sourbrodt, Hoge Venen, Ardennen  
**Data:** Vrijdag 18 september tot zondag 20 september 2026  
**Prijs:** €685 per persoon. Deze prijs is all-in.  
**Aantal deelnemers:** min. 8 – max. 14 deelnemers

## Vroegboekcadeau

Schrijf je in vóór 15 mei 2026 en ontvang een extra cadeau.

## Wat is inbegrepen?

- 3-daags / 2-nachten weekendtraject
- Inhoudelijke begeleiding door Johan De Coninck
- Een sessie bij Johan van ART na dit weekend
- Alle workshops & sessies
- Praktische tools en challenges voor nadien
- Verblijf op locatie
- Maaltijden van vrijdagochtend t.e.m. zondagmiddag
- SOLA T-shirt: ademend sportshirt, ontwikkeld met <a href="https://www.decca.cc" target="_blank" rel="noopener noreferrer">Decca Sportswear</a>

## Wat is niet inbegrepen?

- Transport van en naar de locatie
- Persoonlijke extra’s
- Aankopen buiten het voorziene programma

## Boek je plek

Klaar om terug in controle en actie te komen? Reserveer je plek.

## Twijfel je?

Twijfel je of dit weekend bij je past? Plan gerust een kort gesprek in. Dan bekijken we samen of deze ervaring op dit moment klopt voor jou.

## Na inschrijving

Je ontvangt praktische info, een overzicht van wat mee te brengen en alle timing per mail.

## Goed om weten - FAQ
`,
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
    heroImage: solaTerraFrankrijk,
  },
];

export const people: Person[] = [
  {
    name: "Stefanie Deleu",
    role: "Organisator & avonturier",
    type: "Expert",
    bio: "Stefanie  is de trekkende kracht achter SOLA en zet elke reis van A tot Z in elkaar. Ze bouwt samenwerkingen uit, coördineert de organisatie en zorgt er met haar team voor dat alles praktisch goed loopt.",
    logo: "Stefanie Deleu - SOLA Travel - profiel.JPG",
    isTeamMember: true,
  },
  {
    name: "Justine Deleu",
    role: "Facilitator & culinaire zorg",
    type: "Core",
    bio: "Justine ondersteunt SOLA praktisch en kookt de maaltijden tijdens de weekenden. Daarnaast draagt ze ook haar steentje bij aan de communicatie.",
    logo: "/src/assets/images/Justine Deleu logistiek.jpeg",
    isTeamMember: true,
  },
  {
    name: "Klaas Annys",
    role: "Coördinator & facilitator",
    type: "Core",
    bio: "Klaas zorgt voor de praktische organisatie en begeleiding van onze weekenden. Met oog voor detail en passie voor natuur en beweging, creëert hij een veilige en inspirerende omgeving voor elke deelnemer.",
    logo: "/src/assets/images/Klaas Annys Sola Travel profiel.jpg",
    isTeamMember: true,
  },
  {
    name: "Simon Helleputte",
    role: "Performance coach & sportwetenschapper",
    type: "Expert",
    bio: "Simon vertaalt sportwetenschap, gestoeld op zijn doctoraat en onderzoek in inspanningsfysiologie naar duidelijke en haalbare stappen. Hij laat je aan den lijve ervaren wat beweging doet met je hart, uithouding en energie, en helpt je slimmer bewegen.",
    logo: "/src/assets/images/Simon Endurance Lab - performance coach (1).png",
    isTeamMember: false,
    website: "https://www.instagram.com/simonendurancelab/",
  },
  {
    name: "Johan De Coninck",
    role: "KPNI-therapeut & oprichter van ART",
    type: "Expert",
    bio: "Johan De Coninck is therapeut in de klinische psycho-neuro-immunologie (KPNI) en oprichter van Antwerp Rehab & Training (ART). Hij werkt rond beweging, voeding en herstel en leert je je energie en veerkracht versterken, praktisch, no-nonsense en voelbaar in je dagelijks leven.",
    logo: "/src/assets/images/johanportret.jpg",
    isTeamMember: false,
    website: "https://www.antwerprehabtraining.be/",
  },
  {
    name: "Sarah Deleu",
    role: "EFT & orthomoleculair therapeut",
    type: "Expert",
    bio: "Sarah is biomedisch wetenschapper en therapeut in Emotional Freedom Techniques (EFT). Ze werkt rond emotionele en relationele patronen en leert je spanning reguleren, zodat je met meer rust en helderheid aanwezig kan zijn bij jezelf en anderen.",
    logo: "/src/assets/images/Sarah Deleu therapeut - groen.jpg",
    isTeamMember: false,
    website: "https://logisch-gezond.be",
  },
  {
    name: "Lisa Vanderschelden",
    role: "Yoga & beweging",
    type: "Expert",
    bio: "Lisa is kinesitherapeut en yogadocent, met focus op herstel, blessurepreventie en duurzame trainingsopbouw bij sporters. Ze combineert wetenschappelijke kennis met lichaamsbewustzijn, ademhaling en gerichte beweging.",
    logo: "/src/assets/images/Lisa Vanderschelden - LIV kine en yoga SOLA Travel.png",
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
      image: "/src/assets/images/Verblijf in Hoge Venen.avif",
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
      "SOLA wordt gedragen door Stefanie Deleu, samen met een netwerk van experten, coaches, therapeuten en betrokken SOLA-enthousiastelingen. SOLA ontstond op het kruispunt van reizen en gezondheid. Per reis werken we rond één gezondheidsthema waarvoor we een geschikte specialist zoeken. We willen beweging, wetenschap en natuur samenbrengen in een ervaring die verder gaat dan ontspanning alleen. Hier wandel je in de natuur, beweeg je bewust, leer je bij over je lichaam en kom je mentaal tot rust. Die nieuwe inzichten en gewoontes kun je ook thuis integreren.",
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
  ctaTitle: "Ook als expert bijdragen aan een SOLA-weekend of reis?",
  ctaDescription:
    "We bouwen samen met professionals in gezondheid, beweging en persoonlijke groei aan kleinschalige, inhoudelijk sterke weekenden en reizen in de natuur.",
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
  title: "Privacybeleid – SOLA",
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
