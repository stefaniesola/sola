import type { ImageMetadata } from "astro";
import heroExerciseMedicine from "../assets/images/GeoPark Famenne Ardenne - landschap Hoge Venen (1).jpg";
import sfeer1 from "../assets/images/Ardennen BelgiÃª.jpg";
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
import intermittentSfeer1 from "../assets/images/GeoPark Famenne Ardenne - landschap Hoge Venen (1).jpg";
import intermittentSfeer2 from "../assets/images/GeoPark Famenne Ardenne - landschap Hoge Venen (4).jpg";
import intermittentSfeer3 from "../assets/images/Intermittent Living - Hoge Venen - op weekend (4).jpeg";
import intermittentSfeer4 from "../assets/images/Intermittent Living - Hoge Venen - op weekend (5).jpeg";
import intermittentSfeer5 from "../assets/images/Intermittent Living - Hoge Venen - op weekend (10).jpeg";
import intermittentSfeer6 from "../assets/images/johanportret.jpg";
import intermittentSfeer7 from "../assets/images/Johan De Coninck - Antwerp Training - Intermittent Living - Kevin Hermans Photography-19 (1).jpeg";
import intermittentSfeer8 from "../assets/images/Johan De Coninck - Antwerp Training - Intermittent Living - Kevin Hermans Photography-19 (3).jpeg";
import intermittentSfeer9 from "../assets/images/Johan De Coninck - Antwerp Training - Intermittent Living - Kevin Hermans Photography-19 (4).jpeg";
import intermittentSfeer10 from "../assets/images/Verblijf in Hoge Venen.avif";
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
  categoryLabel?: string;
  subtitle?: string;
  badgeLabel?: string;
  isHidden?: boolean;
  isTeaser?: boolean;
  maxParticipants?: number;
  statusLabel?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  tags?: string[];
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
    dates: "31 juli â€“ 2 augustus 2026",
    price: "â‚¬550",
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
        lines: ["â‚¬550 per persoon (all-in)"],
      },
      {
        label: "Early bird",
        lines: ["Cadeau bij inschrijving vÃ³Ã³r 15 maart 2026"],
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
- een sportief doel hebt, of ermee speelt er Ã©Ã©n te formuleren (bv. marathon, trail, fietsevenement, Hyrox, â€¦)
- nieuwsgierig bent naar wat beweging doet met je metabole en cardiovasculaire gezondheid

## Wat je leert / focus

Tijdens dit weekend ontdek je:

- waarom fysieke inspanning essentieel is voor gezondheid en vitaliteit
- hoe beweging werkt als medicijn voor zowel lichaam als geest
- wat er Ã©cht gebeurt in je lichaam tijdens inspanning (metabolisme en hart)
- hoe voeding, herstel en beweging samenhangen
- hoe je data (meten) en lichaamsgevoel (voelen) in balans brengt

## Na dit weekend

Je gaat naar huis met

- inzicht in je persoonlijke gezondheids- en bewegingsprofiel
- concrete handvatten om beweging duurzaam en haalbaar te integreren in je leven
- enkele praktische leefstijl- en bewegingsgewoontes waar jij effectief mee aan de slag gaat
- een sterker fundament voor je sportieve Ã©n cardiovasculaire gezondheid op lange termijn

Dit weekend draait niet om mÃ©Ã©r doen, maar om beter begrijpen en bewuster bewegen.

### Persoonlijke opvolgsessie na het weekend

Na het weekend krijg je de mogelijkheid tot een 1-op-1 sessie met Simon. Hier vertaal je de inzichten uit het weekend naar jouw eigen lichaam en doelen, van training en energie tot herstel en cardiometabole gezondheid.

Je kan zelf kiezen waar je op wil focussen (bv. nuchter trainen, trainingsopbouw, intensiteit, â€¦).

Extra testen zoals een lactaattest zijn mogelijk, maar optioneel en betalend.

## Expertise & coÃ¶rdinatie

Dit weekend wordt georganiseerd door SOLA (Stefanie Deleu) in samenwerking met Simon Helleputte van [Simon Endurance Lab](https://www.instagram.com/simonendurancelab/).  
Simon is bewegingswetenschapper en coach, gespecialiseerd in de impact van fysieke activiteit op gezondheid, prestaties en mentale veerkracht. Hij vertaalt wetenschap naar begrijpelijke, relevante en toepasbare inzichten, zonder dogmaâ€™s.  
SOLA zorgt voor de omkadering en integratie.

## Programma

### DAG 1 â€“ Vrijdag 31.07

**Vanaf 18.00**  
Onthaal met cocktails, mocktails en suikerarme dranken  
Kamerverdeling, praktische info en passen van je SOLA T-shirt â˜€ï¸

Kennismaking in spelvorm  
Intro van het weekend, de groep en je persoonlijke intentie

**19.30**  
Avondmaal met de groep

### DAG 2 â€“ Zaterdag 1.08

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
Praktijksessie â€“ persoonlijke metingen (o.a. rusthartslag)

gevolgd door  
Theoretische sessie: cardiovasculaire gezondheid en impact van beweging  
Vertrekkend vanuit je eigen meetresultaten

**12.30**  
Lunch  
Inclusief korte toelichting rond sportvoeding voor, tijdens en na inspanning

**14.30**  
Trailrun richting Signal de Botrange (694 m)  
Gevarieerd parcours over bosgrond, vlonderpaden en het veenplateau, met beperkte hoogtemeters  
Alternatief: hike (Â±8 km)

Na afloop: douchen en tijd om even te ontspannen

**19.00**  
Avondmaal

**20.30**  
Avondsessie: herstel na inspanning en hoe je dit optimaliseert  
â€™s Nachts schakelt je lichaam over op herstel via het parasympathisch systeem, dat zorgt voor rust en ontspanning

Afsluiter van de dag  
Ontspannen in de hottub, aan de bar of rond het vuur buiten

### DAG 3 â€“ Zondag 2.08

**08.00**  
Ontbijt  
(Voorheen is er een ruimte beschikbaar voor rustige beweging of yoga)

**09.00**  
Workshop: analyse van je metingen en persoonlijke doelen  
Concrete inzichten en actiepunten voor je dagelijks leven

Cirkelsessie rond sportuitrusting (Â±30 min)  
Ervaringen en praktische tips

**11.00**  
Sessie krachttraining: core & stability  
Gericht bewegen om je lichaam te activeren en ondersteunen

**12.00**  
Lunch

## Verblijf

Je verblijft in Sourbrodt in de Oostkantons, te midden van het Natuurpark Hoge Venen - Eifel. Vanaf 570 m hoogte kijkt het huis langs de achterkant uit over het meest ruige stukje natuur van BelgiÃ«. Geniet tijdens je verblijf van een dip in de hottub of laat je actieve benen uit in de grote tuin. Je slaapt standaard in een gedeelde kamer (twee personen), met een kamerverdeling volgens geslacht. Koppels kunnen uiteraard samen op een kamer. Elke kamer is voorzien van douche en toilet. Wie liever alleen slaapt, kan dit bij inschrijving aangeven. Dit is mogelijk mits een supplement van 115 euro en in functie van beschikbaarheid.

## Maaltijden

Smakelijk op reis met SOLA. Alle maaltijden zijn inbegrepen, van het avondmaal op de dag van aankomst tot de lunch op de dag van vertrek. De focus ligt op gezonde, evenwichtige voeding, in balans met de activiteiten tijdens je reis. Heb je allergieÃ«n of specifieke voedingswensen (zoals vegetarisch)? Geef dit zeker door bij je inschrijving, dan houden we daar graag rekening mee.

## Praktisch

**Locatie:** Sourbrodt, Hoge Venen, Ardennen  
**Data:** Vrijdag 31 juli t.e.m. zondag 2 augustus 2026  
**Prijs:** â‚¬550 per persoon. Deze prijs is all-in.  
**Aantal deelnemers:** min. 8 â€“ max. 14 deelnemers

## Vroegboekcadeau

Schrijf je in vÃ³Ã³r 15 maart 2026 en ontvang een extra cadeau.

## Wat is inbegrepen?

- 3-daags / 2-nachten weekendtraject
- Inhoudelijke begeleiding door Simon van Endurance Lab
- Persoonlijke 1-op-1 opvolgsessie met Simon van Endurance Lab na het weekend (inbegrepen)
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

â€“
Je ontvangt praktische info, een overzicht van wat mee te brengen en alle timing per mail.

## Goed om weten - FAQ`,
  },
  {
    slug: "bewustwording-connectie",
    name: "Van inzicht naar verdiepend denken en voelen",
    type: "Weekend",
    shortDescription:
      "Krijg inzicht in wat je gedrag stuurt en hoe je daar bewust mee omgaat. Tijdens dit weekend met Sarah van Logisch Gezond leer je patronen doorbreken, emoties reguleren en sterker staan in je dagelijkse leven.",
    location: "Hoge Venen, Ardennen",
    dates: "7 â€“ 9 augustus 2026",
    price: "â‚¬620",
    heroImage: "/src/assets/images/2631991747.jpg",
    galleryImages: [
      sarahBewustwordingNieuw1,
      sarahSfeer1,
      sarahSfeer2,
      sarahSfeer3,
      sarahSfeer4,
 ó®t¶‰ËkºwµçtÁÉ½™¥•°¹)Aˆ°4(€€€¥ÍQ•…µ5•µ‰•ÈèÑÉÕ”°4(€ô°4(€ì4(€€€¹…µ”è€‰)ÕÍÑ¥¹”•±•Ôˆ°4(€€€É½±”è€‰…¥±¥Ñ…Ñ½È€˜Õ±¥¹…¥É”é½Éœˆ°4(€€€ÑåÁ”è€‰½É”ˆ°4(€€€‰¥¼è€‰)ÕÍÑ¥¹”½¹‘•ÉÍÑ•Õ¹ĞM=1ÁÉ…­Ñ¥Í •¸­½½­Ğ‘”µ……±Ñ¥©‘•¸Ñ¥©‘•¹Ì‘”İ••­•¹‘•¸¸……É¹……ÍĞ‘É……Ğé”½½¬¡……ÈÍÑ••¹Ñ©”‰¥¨……¸‘”½µµÕ¹¥…Ñ¥”¸ˆ°4(€€€±½¼è€ˆ½ÍÉŒ½…ÍÍ•ÑÌ½¥µ…•Ì½)ÕÍÑ¥¹”•±•Ô±½¥ÍÑ¥•¬¹©Á•œˆ°4(€€€¥ÍQ•…µ5•µ‰•ÈèÑÉÕ”°4(€ô°4(€ì(€€€¹…µ”è€‰-±……Ì¹¹åÌˆ°(€€€É½±”è€‰¿ÙÉ‘¥¹…Ñ½È€˜™…¥±¥Ñ…Ñ½Èˆ°4(€€€ÑåÁ”è€‰½É”ˆ°4(€€€‰¥¼è€‰-±……Ìé½ÉĞÙ½½È‘”ÁÉ…­Ñ¥Í¡”½É…¹¥Í…Ñ¥”•¸‰••±•¥‘¥¹œÙ…¸½¹é”İ••­•¹‘•¸¸5•Ğ½½œÙ½½È‘•Ñ…¥°•¸Á…ÍÍ¥”Ù½½È¹…ÑÕÕÈ•¸‰•İ•¥¹œ°É—­•ÉĞ¡¥¨••¸Ù•¥±¥”•¸¥¹ÍÁ¥É•É•¹‘”½µ•Ù¥¹œÙ½½È•±­”‘••±¹•µ•È¸ˆ°4(€€€±½¼è€ˆ½ÍÉŒ½…ÍÍ•ÑÌ½¥µ…•Ì½-±……Ì¹¹åÌM½±„QÉ…Ù•°ÁÉ½™¥•°¹©Áœˆ°(€€€¥ÍQ•…µ5•µ‰•ÈèÑÉÕ”°(€ô°(€ì(€€€¹…µ”è€‰)½É¥•¸I…•åµ…•­•ÉÌˆ°(€€€É½±”è€‰-±¥¹¥Í ÁÍå¡½±½½œ€˜ÍåÍÑ•µ¥Í İ•É­•Èˆ°(€€€ÑåÁ”è€‰áÁ•ÉĞˆ°(€€€‰¥¼è€‰)½É¥•¸İ•É­ĞÉ½¹ÍÑÉ•ÍÌ°¡•ÉÍÑ•°•¸¡•Ğ…ÕÑ½¹½µ”é•¹ÕİÍÑ•±Í•°è¡•ĞÍåÍÑ••´‘…Ğ©”±¥¡……´¡•±ÁĞÍ¡…­•±•¸ÑÕÍÍ•¸…Ñ¥”•¸ÉÕÍĞ¸i”¡•±ÁĞ‘••±¹•µ•ÉÌ‰•É¥©Á•¸İ……É½´¡•ÉÍÑ•°Í½µÌÕ¥Ñ‰±¥©™Ğ°½½¬İ…¹¹••Èé”Í±…Á•¸°‰•İ••¸•¸•é½¹±•Ù•¸¸ˆ°(€€€±½¼è€‰©½É¥•¸µÉ…•åµ…•­•ÉÌ¹©Áœˆ°(€€€¥ÍQ•…µ5•µ‰•Èè™…±Í”°(€€€İ•‰Í¥Ñ”è€‰¡ÑÑÁÌè¼½¥­‰•¹©½É¥•¸¹‰”¼ˆ°(€ô°(€ì(€€€¹…µ”è€‰M¥µ½¸!•±±•ÁÕÑÑ”ˆ°(€€€É½±”è€‰A•É™½Éµ…¹”½… €˜ÍÁ½ÉÑİ•Ñ•¹Í¡…ÁÁ•Èˆ°4(€€€ÑåÁ”è€‰áÁ•ÉĞˆ°4(€€€‰¥¼è€‰M¥µ½¸Ù•ÉÑ……±ĞÍÁ½ÉÑİ•Ñ•¹Í¡…À°•ÍÑ½•±½Àé¥©¸‘½Ñ½É……Ğ•¸½¹‘•Éé½•¬¥¸¥¹ÍÁ…¹¹¥¹Í™åÍ¥½±½¥”¹……È‘Õ¥‘•±¥©­”•¸¡……±‰…É”ÍÑ…ÁÁ•¸¸!¥¨±……Ğ©”……¸‘•¸±¥©Ù”•ÉÙ…É•¸İ…Ğ‰•İ•¥¹œ‘½•Ğµ•Ğ©”¡…ÉĞ°Õ¥Ñ¡½Õ‘¥¹œ•¸•¹•É¥”°•¸¡•±ÁĞ©”Í±¥µµ•È‰•İ••¸¸ˆ°4(€€€±½¼è€ˆ½ÍÉŒ½…ÍÍ•ÑÌ½¥µ…•Ì½M¥µ½¸¹‘ÕÉ…¹”1…ˆ€´Á•É™½Éµ…¹”½… € Ä¤¹Á¹œˆ°4(€€€¥ÍQ•…µ5•µ‰•Èè™…±Í”°4(€€€İ•‰Í¥Ñ”è€‰¡ÑÑÁÌè¼½İİÜ¹¥¹ÍÑ…É…´¹½´½Í¥µ½¹•¹‘ÕÉ…¹•±…ˆ¼ˆ°4(€ô°4(€ì4(€€€¹…µ”è€‰)½¡…¸”½¹¥¹¬ˆ°4(€€€É½±”è€‰-A9$µÑ¡•É…Á•ÕĞ€˜½ÁÉ¥¡Ñ•ÈÙ…¸IPˆ°4(€€€ÑåÁ”è€‰áÁ•ÉĞˆ°4(€€€‰¥¼è€‰)½¡…¸”½¹¥¹¬¥ÌÑ¡•É…Á•ÕĞ¥¸‘”­±¥¹¥Í¡”ÁÍå¡¼µ¹•ÕÉ¼µ¥µµÕ¹½±½¥”€¡-A9$¤•¸½ÁÉ¥¡Ñ•ÈÙ…¸¹Ñİ•ÉÀI•¡…ˆ€˜QÉ…¥¹¥¹œ€¡IP¤¸!¥¨İ•É­ĞÉ½¹‰•İ•¥¹œ°Ù½•‘¥¹œ•¸¡•ÉÍÑ•°•¸±••ÉĞ©”©”•¹•É¥”•¸Ù••É­É…¡ĞÙ•ÉÍÑ•É­•¸°ÁÉ…­Ñ¥Í °¹¼µ¹½¹Í•¹Í”•¸Ù½•±‰……È¥¸©”‘…•±¥©­Ì±•Ù•¸¸ˆ°4(€€€±½¼è€ˆ½ÍÉŒ½…ÍÍ•ÑÌ½¥µ…•Ì½©½¡…¹Á½ÉÑÉ•Ğ¹©Áœˆ°4(€€€¥ÍQ•…µ5•µ‰•Èè™…±Í”°4(€€€İ•‰Í¥Ñ”è€‰¡ÑÑÁÌè¼½İİÜ¹…¹Ñİ•ÉÁÉ•¡…‰ÑÉ…¥¹¥¹œ¹‰”¼ˆ°4(€ô°4(€ì4(€€€¹…µ”è€‰M…É… •±•Ôˆ°4(€€€É½±”è€‰P€˜½ÉÑ¡½µ½±•Õ±…¥ÈÑ¡•É…Á•ÕĞˆ°4(€€€ÑåÁ”è€‰áÁ•ÉĞˆ°4(€€€‰¥¼è€‰M…É… ¥Ì‰¥½µ•‘¥Í İ•Ñ•¹Í¡…ÁÁ•È•¸Ñ¡•É…Á•ÕĞ¥¸µ½Ñ¥½¹…°É••‘½´Q•¡¹¥ÅÕ•Ì€¡P¤¸i”İ•É­ĞÉ½¹•µ½Ñ¥½¹•±”•¸É•±…Ñ¥½¹•±”Á…ÑÉ½¹•¸•¸±••ÉĞ©”ÍÁ…¹¹¥¹œÉ•Õ±•É•¸°é½‘…Ğ©”µ•Ğµ••ÈÉÕÍĞ•¸¡•±‘•É¡•¥……¹İ•é¥œ­…¸é¥©¸‰¥¨©•é•±˜•¸…¹‘•É•¸¸ˆ°4(€€€±½¼è€ˆ½ÍÉŒ½…ÍÍ•ÑÌ½¥µ…•Ì½M…É… •±•ÔÑ¡•É…Á•ÕĞ€´É½•¸¹©Áœˆ°4(€€€¥ÍQ•…µ5•µ‰•Èè™…±Í”°4(€€€İ•‰Í¥Ñ”è€‰¡ÑÑÁÌè¼½±½¥Í µ•é½¹¹‰”ˆ°4(€ô°4(€ì4(€€€¹…µ”è€‰1¥Í„Y…¹‘•ÉÍ¡•±‘•¸ˆ°4(€€€É½±”è€‰e½„€˜‰•İ•¥¹œˆ°4(€€€ÑåÁ”è€‰áÁ•ÉĞˆ°4(€€€‰¥¼è€‰1¥Í„¥Ì­¥¹•Í¥Ñ¡•É…Á•ÕĞ•¸å½…‘½•¹Ğ°µ•Ğ™½ÕÌ½À¡•ÉÍÑ•°°‰±•ÍÍÕÉ•ÁÉ•Ù•¹Ñ¥”•¸‘ÕÕÉé…µ”ÑÉ…¥¹¥¹Í½Á‰½ÕÜ‰¥¨ÍÁ½ÉÑ•ÉÌ¸i”½µ‰¥¹••ÉĞİ•Ñ•¹Í¡…ÁÁ•±¥©­”­•¹¹¥Ìµ•Ğ±¥¡……µÍ‰•İÕÍÑé¥©¸°…‘•µ¡…±¥¹œ•¸•É¥¡Ñ”‰•İ•¥¹œ¸ˆ°4(€€€±½¼è€ˆ½ÍÉŒ½…ÍÍ•ÑÌ½¥µ…•Ì½1¥Í„Y…¹‘•ÉÍ¡•±‘•¸€´1%X­¥¹”•¸å½„M=1QÉ…Ù•°¹Á¹œˆ°4(€€€¥ÍQ•…µ5•µ‰•Èè™…±Í”°4(€€€İ•‰Í¥Ñ”è€‰¡ÑÑÁÌè¼½±¥Ùå½ÕÉ±¥™”¹‰”ˆ°4(€ô°4)tì4(4)•áÁ½ÉĞ½¹ÍĞÕÍÁQ…Ì€ôl4(€€‰-±•¥¹”É½•À€¡µ…à¸€ÄĞ¤ˆ°4(€€‰•Í­Õ¹‘¥”‰••±•¥‘¥¹œˆ°4(€€‰=¹‘•É‰½Õİ•¸µ•¹Í•±¥©¬ˆ°4(€€‰M…µ•¸µ•Ğ½•ÍÑ¥¹œ„ˆ°4(€€‰5½½¥”±½…Ñ¥”¥¸‘”¹…ÑÕÕÈˆ°4)tì4(4)•áÁ½ÉĞ½¹ÍĞ¡½µ•½Áä€ôì4(€Ñ…±¥¹”è€‰Y½½Èİ¥”¹¥•Ğ•İ½½¸İ•œ°µ……ÈÙ½½ÉÕ¥Ğİ¥°¸ˆ°4(€ÍÕ‰±¥¹”è4(€€€€‰M=1É—­•ÉĞİ••­•¹‘•¸İ……È‰•İ•¥¹œ°İ•Ñ•¹Í¡…À•¸¹…ÑÕÕÈÍ…µ•¹­½µ•¸¸•É±¥©¬°¡•±‘•È•¸µ•¹Í•±¥©¬¸ˆ°4(€¥¹ÑÉ½1¥¹•Ìèl4(€€€€‰Y½½Èİ¥”İ¥°½¹Ñ‘•­­•¸İ…Ğ‰•±…¹É¥©¬¥Ì¸ˆ°4(€€€€‰Y½½Èİ¥”İ¥°‰•İ••¸°¹…‘•¹­•¸•¸••É±¥©¬­¥©­•¸¸ˆ°4(€€€€‰!•±‘•É¡•¥°É¥¡Ñ¥¹œ•¸ÉÕ¥µÑ”½´•¡ĞÑ”­¥•é•¸¸ˆ°4(€t°4(€Ù½½É]¥”èl4(€€€€‰Y½½Èµ•¹Í•¸‘¥”İ¥±±•¸‰•İ••¸•¸Ù½•±•¸ˆ°4(€€€€‰Y½½Èİ¥”Ù•É…¹Ñİ½½É‘•±¥©­¡•¥¹••µĞÙ½½Èé¥©¸½˜¡……ÈÁÉ½•Ìˆ°4(€€€€‰Y½½Èİ¥”Á¥Ğ¡••™Ğ•¸é…¡Ñ¡•¥¹¥•ĞÍ¡ÕİĞˆ°4(€t°4(€İ……É½´è4(€€€€‰M=1É—­•ÉĞÉ½•ÁÍÉ•¥é•¸É½¹•é½¹‘¡•¥°İ……È‰•İ•¥¹œ°İ•Ñ•¹Í¡…ÁÁ•±¥©¬½¹‘•É‰½Õİ‘”¥¹é¥¡Ñ•¸•¸¹…ÑÕÕÈÍ…µ•¹­½µ•¸¸ˆ°4(€Á¥±±…ÉÌèl4(€€€ì4(€€€€€Ñ¥Ñ±”è€‰•Í­Õ¹‘¥”‰••±•¥‘¥¹œ•¸İ•Ñ•¹Í¡…ÁÁ•±¥©­”½¹‘•É‰½Õİ¥¹œˆ°4(€€€€€‘•ÍÉ¥ÁÑ¥½¸è€‰Q¥©‘•¹Ì••¸M=1µÉ•¥ÌÙ•É‘¥•À©”©”Í…µ•¸µ•Ğ••¸•áÁ•ÉĞ¥¸••¸½¹É••Ğ•é½¹‘¡•¥‘ÍÑ¡•µ„¸)”‰½ÕİĞ‰•İÕÍÑİ½É‘¥¹œ½ÀÉ½¹…ÍÁ•Ñ•¸Ù…¸µ•¹Ñ…±”•é½¹‘¡•¥°½¹Ñ‘•­Ğ¡½”Ù½•‘¥¹œ•¸‰•İ•¥¹œÍ…µ•¸‘”‰…Í¥ÌÙ½Éµ•¸Ù½½È••¸Ù¥Ñ……°•¸±…¹œ±•Ù•¸°½˜±••ÉĞ¡½”©”µ•Ğ••¸¡É½¹¥Í¡”……¹‘½•¹¥¹œ••¸…Ñ¥•Ù”±•Ù•¹ÍÍÑ¥©°­…¸Ù•Éé½•¹•¸¸=À••¸¥¹Ñ•É…Ñ¥•Ù”µ…¹¥•È‰½Õİ•¸İ”Í…µ•¸••¸¡•±‘•ÈÑ¡•½É•Ñ¥Í ­…‘•È½À¸…Ğ••™Ğ©”¡½ÕÙ…ÍĞ•¸••¸‘¥•Á•È‰•É¥ÀÙ…¸©½ÕÜÁ•ÉÍ½½¹±¥©­”™½ÕÍÑ¡•µ„°é½‘…Ğ©”¹¥•Ğ…±±••¸•ÉÙ……ÉĞ°µ……È½½¬‰•É¥©ÁĞİ…Ğ©”‘½•Ğ•¸İ……É½´¸ˆ°4(€€€€€¥µ…”è€ˆ½ÍÉŒ½…ÍÍ•ÑÌ½¥µ…•Ì¼ÈÔäØÀÔÈØÀÜ¹©Áœˆ°4(€€€ô°4(€€€ì4(€€€€€Ñ¥Ñ±”è€‰ÉÙ…É¥¹Í•É¥¡Ğ±•É•¸¥¸­±•¥¹”É½•Á•¸ˆ°4(€€€€€‘•ÍÉ¥ÁÑ¥½¸è€‰	¥¹¹•¸‘”Ù•¥±¥”½µ•Ù¥¹œÙ…¸••¸­±•¥¹”É½•À„©”Ñ¥©‘•¹Ì‘”É•¥Ì…Ñ¥•˜……¸‘”Í±…œµ•Ğ‘”½Á•‰½Õİ‘”­•¹¹¥Ì¸)”Ñ½•ÑÍĞ‘”Ñ¡•½É¥”……¸‘”ÁÉ…­Ñ¥©¬•¸±••ÉĞÑ•¡¹¥•­•¸‘¥”©”Ù¥„¡•É¡…±¥¹œ¡•±Á•¸½´•¡Ñ”Ù•É…¹‘•É¥¹œ¥¸…¹œÑ”é•ÑÑ•¸¸)”……ĞÑ•ÉÕœ¹……È¡Õ¥Ìµ•Ğ••¸ÍÑ•Ù¥œÁ…­­•Ğ¡…¹‘Ù…ÑÑ•¸İ……È©”½À­Õ¹ĞÑ•ÉÕÉ¥©Á•¸Ù½½È¡½ÕÙ…ÍĞ•¸½¹Ñ¥¹×½Ñ•¥Ğ¸ˆ°4(€€€€€¥µ…”è€ˆ½ÍÉŒ½…ÍÍ•ÑÌ½¥µ…•Ì½Y•É‰±¥©˜¥¸!½”Y•¹•¸¹…Ù¥˜ˆ°4(€€€ô°4(€€€ì4(€€€€€Ñ¥Ñ±”è€‰	•İ•¥¹œµ•Ğ‰•¥‘”Ù½•Ñ•¸¥¸‘”¹…ÑÕÕÈˆ°4(€€€€€‘•ÍÉ¥ÁÑ¥½¸è€‰!•Ğ™Õ¹‘…µ•¹ĞÙ…¸‘”M=1µÉ•¥é•¸±¥Ğ¥¸‘”¹…ÑÕÕÈ¸•¸¹…ÑÕÕÉ±¥©­”½µ•Ù¥¹œ‰¥•‘ĞÍ¡½½¹¡•¥°ÍÑ¥±Ñ”•¸Ù•Éİ½¹‘•É¥¹œ¸”µ•¹Ñ…±”ÉÕÍĞ‘¥”©”‘……È•ÉÙ……ÉĞÍ¡•ÉÁĞ©”™½ÕÌ°ÍÑ¥µÕ±••ÉĞ‰•İ•¥¹œ•¸¥¹ÍÁ¥É••ÉĞÑ½Ğ•É¥¡Ñ”…Ñ¥”¸”¹…ÑÕÕÈÙ½ÉµĞé¼‘”½¹µ¥Í‰…É”‰…Í¥Ì•¸¡•Ğ­É…¡Ñ¥”‘•½ÈÙ…¸©½ÕÜÉ•¥Ì¸ˆ°4(€€€€€¥µ…”è(€€€€€€€€ˆ½ÍÉŒ½…ÍÍ•ÑÌ½¥µ…•Ì½•½A…É¬…µ•¹¹”É‘•¹¹”€´±…¹‘Í¡…À!½”Y•¹•¸€ Ø¤¹©Áœˆ°(€€€ô°4(€t°4(€…™Í±Õ¥Ñ¥¹œèì4(€€€Ñ¥Ñ±”è€‰-±……È½´¥¸‰•İ•¥¹œÑ”­½µ•¸üˆ°4(€€€ÁÉ¥µ…Éäè€‰	½•¬©”Á±•¬ˆ°4(€€€Í•½¹‘…Éäè€‰A±…¸••¸•ÍÁÉ•¬ˆ°4(€ô°4)ôì4(4)•áÁ½ÉĞ½¹ÍĞµ¥ÍÍ¥½¹Y¥Í¥½¸€ôì4(€µ¥ÍÍ¥½¹½É‘¥½¸èl4(€€€ì4(€€€€€Ñ¥Ñ±”è€‰”‰•Ñ•­•¹¥ÌÙ…¸M=1ˆ°4(€€€€€‰½‘äè4(€€€€€€€€‰”¹……´M=1Ù•Éİ¥©ÍĞ¹……È‘”é½¸°Í½°¥¸¡•ĞMÁ……¹Ì°Í½±„…±ÌÙÉ½Õİ•±¥©­”Ù½É´¥¸¡•Ğ1…Ñ¥©¸¸”é½¸ÍÑ……ĞÙ½½È•¹•É¥”°İ…ÉµÑ”•¸±•Ù•¹Í­É…¡Ğ¸…Ğ¥Ìİ…Ğ¥¬µ•Ğ‘•é”É•¥é•¸İ¥°‘½½É•Ù•¸¸ˆ°4(€€€ô°4(€€€ì4(€€€€€Ñ¥Ñ±”è€‰I•¥é•¸…±ÌÙ•ÉÑÉ•­ÁÕ¹Ğˆ°4(€€€€€‰½‘äè4(€€€€€€€€‰%¬ÍÑÕ‘••É‘”Ñ½•É¥Íµ”€¡•¸‰•‘É¥©™Í•½¹½µ¥”¤•¸İ•É¬…°é¿Še¸…¡Ğ©……È¥¸‘”É•¥ÍÍ•Ñ½È¸I•¥é•¸Ù•É‰É••‘Ğ©”‰±¥¬°‰É•¹Ğ©”¥¸‰•İ•¥¹œ•¸¡……±Ğ©”Õ¥Ğ©”‘…•±¥©­Í”½¹Ñ•áĞ¸ˆ°4(€€€ô°4(€€€ì4(€€€€€Ñ¥Ñ±”è€‰!•Ğ­••ÉÁÕ¹Ğ¥¸€ÈÀÈĞˆ°4(€€€€€‰½‘äè4(€€€€€€€€‰%¸€ÈÀÈĞİ•É¥¬¥¸MÕµ…ÑÉ„é¥•¬‘½½È••¸•Á•É™½É••É‘”…ÁÁ•¹‘¥à¸1…Ñ•È‰±••¬••¸¡É½¹¥Í¡”‘…Éµ……¹‘½•¹¥¹œ……¸‘”‰…Í¥ÌÑ”±¥•¸¸!•Ğ¡•ÉÍÑ•°İ…Ì¥¹Ñ•¹ÌèÑİ•”İ•­•¸é¥•­•¹¡Õ¥Ì¥¸5•‘…¸°‘……É¹„¹½œ•¹­•±”İ•­•¸¥¸	•±§¬•¸µ……¹‘•¸Ñ•ÉÕœ½Á‰½Õİ•¸°•Ù½±‘½½È••¸•áÑÉ„½Á•É…Ñ¥”¸!•Ğİ…Ì••¸ÍÑ•Ù¥œ©……È°µ……È¥¬¡……°•ÈÙ…¹‘……œÙ••°­É…¡ĞÕ¥Ğ•¸¡•Ğİ…Ì••¸ÍÑ¥µÕ±…¹Ì½´‰•İÕÍÑ•Èµ•Ğ•é½¹‘¡•¥‰•é¥œÑ”é¥©¸¸ˆ°4(€€€ô°4(€€€ì4(€€€€€Ñ¥Ñ±”è€‰]…Ğ¥¬‘……ÉÕ¥Ğµ••¹…´ˆ°4(€€€€€‰½‘äè4(€€€€€€€€‰5¥©¸Á…ÍÍ¥”Ù½½ÈÍÁ½ÉĞ•¸É•¥é•¸İ•É……¹•ÙÕ±µ•Ğ••¸‘•É‘”Á…ÍÍ¥”è…Ñ¥•˜İ•É­•¸……¸•é½¹‘¡•¥¸%¬½¹Ñ‘•­Ñ”¡½”­É…¡Ñ¥œ‘”‰…Í¥Ì¥ÌìÍ±……À°Ù½•‘¥¹œ•¸‰•İ•¥¹œ¸½½È‘……È‰•İÕÍĞµ•”½´Ñ”……¸°­½´©”…°¡••°Ù•È¸¥”••¹Ù½Õİ¥°¥¬±…Ñ•¸Ù½•±•¸Ñ¥©‘•¹ÌM=1µÉ•¥é•¸¸ˆ°4(€€€ô°4(€€€ì4(€€€€€Ñ¥Ñ±”è€‰]……É½´M=1Ù…¹‘……œ‰•ÍÑ……Ğˆ°4(€€€€€‰½‘äè4(€€€€€€€€‰5¥©¸•¥•¸ÑÉ…©•Ğ‰É…¡Ğµ”¥¸½¹Ñ…Ğµ•Ğ•Á…ÍÍ¥½¹••É‘”•áÁ•ÉÑ•¸¸%¬¥¹œ±…¹Ì‰¥¨¡•Ğ-A9$µ¡Õ¥Ì€¡­±¥¹¥Í¡”ÁÍå¡¼µ¹•ÕÉ¼µ¥µµÕ¹½±½¥”¤°İ½½¹‘”±•é¥¹•¸‰¥¨•¸±••É‘”‰É•‘•È¹……È•é½¹‘¡•¥­¥©­•¸¸%¬‰•½¸µ”Ñ”Ù•É‘¥•Á•¸¥¸ÙÉ…•¸İ……ÈÙ••°µ•¹Í•¸µ•”é¥ÑÑ•¸°é½…±Ì¡½”¡•Ğ­½µĞ‘…Ğ©”••¸¥©é•ÉÑ•­½ÉĞ­…¸¡•‰‰•¸é½¹‘•ÈƒŠqÑ”İ•¥¹¥œ¥©é•ÈÑ”•Ñ•»Št•¸­İ…´é¼‰¥¨Ù•ÉÉ…ÍÍ•¹‘”¥¹é¥¡Ñ•¸¸Y…¹Õ¥Ğ‘¥”¥¹ÍÑ••¬İ¥°¥¬…¹‘•É•¸¥¸½¹Ñ…Ğ‰É•¹•¸µ•ĞÍÁ•¥…±¥ÍÑ•¸‘¥”¡Õ¸Ù…¬Ù•ÉÍÑ……¸¸Y…¸•áÁ•ÉÑ¥Í”­…¸©”±•É•¸¹q¹q¹¸‘…ĞÍ…µ•¸°¥¸••¸­±•¥¹”É½•À•±¥©­•é¥¹‘•¸°İ……È‘”Á½Í¥Ñ¥•Ù”‘å¹…µ¥•¬•±­……ÈÙ•ÉÍÑ•É­Ğ¸1•ÓŠeÌ¼¹q¹q»ŠPMÑ•™…¹¥”ˆ°4(€€€ô°4(€t°4(€Ù¥Í¥½¹!Ñµ°è€ñÀùÈ¥Ì••¸•Ù½•°‘…Ğ•Èµ••Èµ½•±¥©¬¥Ìèµ••È•¹•É¥”°µ••ÈÉÕÍĞ¥¸©”¡½½™°µ••ÈÙ•É‰¥¹‘¥¹œµ•Ğ©”±¥¡……´¸ğ½Àø4(ñÀù9¥•Ğé½µ……È½ÀÉ•¥Ì°µ……È‰•İÕÍĞÑ¥©µ…­•¸½´Ñ”Ù•ÉÑÉ…•¸°‰¥¨Ñ”±•É•¸•¸Ñ”Ù½•±•¸İ…Ğ©½ÔÍÑ•É­•Èµ……­Ğ°™åÍ¥•¬ƒ¥¸µ•¹Ñ……°¸Y…¹Õ¥Ğ‰•İ•¥¹œ°¹…ÑÕÕÈ•¸½¹‘•É‰½Õİ‘”­•¹¹¥ÌÉ½•¥Ğ••¸¡•±‘•È¥¹é¥¡Ğ¥¸İ…ĞÙ½½È©½Ôİ•É­Ğ¸ğ½Àø4(ñÀù••¸½¹ÑÍ¹…ÁÁ¥¹œ……¸©”±•Ù•¸°İ•°••¸¥¹Ù•ÍÑ•É¥¹œ¥¸¡½”©”¡•Ğİ¥°±•Ù•¸¸ğ½Àù€°4)ôì4(4)•áÁ½ÉĞ½¹ÍĞ­•É¹¥‘•¹Ñ¥Ñ•¥Ğ€ôl4(€€‹Â~2xM=1€è±¥¡Ğ°­É…¡Ğ°‰•İ•¥¹œˆ°4(€€‰M½±„­½µĞÙ…¸Í½±•¥°è±¥¡Ğ‘…ĞÉ¥¡Ñ¥¹œ••™Ğ¸ˆ°4(€€‰]¥¨İ•É­•¸Ù…¹Õ¥Ğ•¹•É¥”°¡•±‘•É¡•¥•¸¡•Ğ±¥¡……´‘…Ğ‰•İ••Ğ¸ˆ°4(€€‰•é½¹‘¡•¥½¹ÑÍÑ……Ğİ…¹¹••È¹…ÑÕÕÈ°¥¹ÍÁ…¹¹¥¹œ•¸¥¹é¥¡ĞÍ…µ•¹­½µ•¸¸ˆ°4(€€‰M½±„¥ÌM…É… °MÑ•™…¹¥”¸ˆ°4(€€‰M=1€è…ÔÙÉ…¤¸ˆ°4)tì4(4)•áÁ½ÉĞ½¹ÍĞİ••­•¹‘A…”€ôì4(€Ñ¥Ñ±”è€‰M=1ğ]••­•¹‘•¸ˆ°4(€±…‰•°è€‰]••­•¹‘•¸ˆ°4(€¡•…‘¥¹œè€‰]••­•¹‘•¸‘¥”‰•İ••¸ƒ¥¸Ù•É‘¥•Á•¸ˆ°4(€‘•ÍÉ¥ÁÑ¥½¸è4(€€€€‰-±•¥¹”É½•Á•¸°‘•Í­Õ¹‘¥”‰••±•¥‘¥¹œ•¸ÁÉ½É…µµ„Ì‘¥”‰•İ•¥¹œ°¥¹é¥¡Ğ•¸¹…ÑÕÕÈÍ…µ•¹‰É•¹•¸¸ˆ°4(€µ•Ñ…•ÍÉ¥ÁÑ¥½¸è€‰±±”M=1µİ••­•¹‘•¸¥¸••¸¡•±‘•È½Ù•Éé¥¡Ğ¸ˆ°4(€Ñ„è€‰	•­¥©¬İ••­•¹ˆ°4)ôì4(4)•áÁ½ÉĞ½¹ÍĞÉ•¥é•¹A…”€ôì4(€Ñ¥Ñ±”è€‰M=1ğI•¥é•¸ˆ°4(€±…‰•°è€‰I•¥é•¸ˆ°4(€¡•…‘¥¹œè€‰I•¥é•¸‘¥”‰•İ••¸ƒ¥¸Ù•É‘¥•Á•¸ˆ°4(€‘•ÍÉ¥ÁÑ¥½¸è4(€€€€‰-±•¥¹”É½•Á•¸°‘•Í­Õ¹‘¥”‰••±•¥‘¥¹œ•¸ÁÉ½É…µµ„Ì‘¥”‰•İ•¥¹œ°¥¹é¥¡Ğ•¸¹…ÑÕÕÈÍ…µ•¹‰É•¹•¸¸ˆ°4(€µ•Ñ…•ÍÉ¥ÁÑ¥½¸è€‰I•¥é•¸İ……È¹…ÑÕÕÈ°‰•İ•¥¹œ•¸¥¹é¥¡ĞÍ…µ•¹­½µ•¸¸ˆ°4)ôì4(4)•áÁ½ÉĞ½¹ÍĞ¡½µ•A…”€ôì4(€Ñ¥Ñ±”è€‰M=1ğÉ½•ÁÍÉ•¥é•¸€˜•é½¹‘¡•¥ˆ°4(€‘•ÍÉ¥ÁÑ¥½¸è€‰Y½½Èİ¥”¹¥•Ğ•İ½½¸İ•œİ¥°°µ……ÈÙ½½ÉÕ¥Ğİ¥°¸M=1É—­•ÉĞİ••­•¹‘•¸İ……È‰•İ•¥¹œ°İ•Ñ•¹Í¡…À•¸¹…ÑÕÕÈÍ…µ•¹­½µ•¸¸•É±¥©¬°¡•±‘•È•¸µ•¹Í•±¥©¬¸ˆ°4(€‰É…¹‘1…‰•°è€‰M=1ˆ°4(€Ñ…¥Í½Ù•Èè€‰=¹Ñ‘•¬½¹é”É•¥é•¸ˆ°4(€Ñ…½¹Ñ…Ğè€‰½¹Ñ…Ğ½Á¹•µ•¸ˆ°4(€Í•Ñ¥½¹…¹‰½èì4(€€€±…‰•°è€‰…¹‰½ˆ°4(€€€Ñ¥Ñ±”è€‰=¹é”İ••­•¹‘•¸ˆ°4(€€€‘•ÍÉ¥ÁÑ¥½¸è€‰M•±•Ñ¥”Ù…¸‘”••ÉÍÑÙ½±•¹‘”…™É•¥é•¸¸ˆ°4(€€€±¥¹¬è€‰	•­¥©¬…±±”İ••­•¹‘•¸ƒŠHˆ°4(€ô°4(€Ñ…¥Í½Ù•É]••­•¹è€‰=¹Ñ‘•¬İ••­•¹ˆ°4(€Í•Ñ¥½¹=Ù•É=¹Ìèì4(€€€±…‰•°è€‰=Ù•È½¹Ìˆ°4(€€€Ñ¥Ñ±”è€‰]¥”M=1‘É……Ğˆ°4(€€€‘•ÍÉ¥ÁÑ¥½¸è4(€€€€€€‰M=1İ½É‘Ğ•‘É…•¸‘½½ÈMÑ•™…¹¥”•±•Ô°Í…µ•¸µ•Ğ••¸¹•Ñİ•É¬Ù…¸•áÁ•ÉÑ•¸°½…¡•Ì°Ñ¡•É…Á•ÕÑ•¸•¸‰•ÑÉ½­­•¸M=1µ•¹Ñ¡½ÕÍ¥…ÍÑ•±¥¹•¸¸M=1½¹ÑÍÑ½¹½À¡•Ğ­ÉÕ¥ÍÁÕ¹ĞÙ…¸É•¥é•¸•¸•é½¹‘¡•¥¸A•ÈÉ•¥Ìİ•É­•¸İ”É½¹ƒ§¥¸•é½¹‘¡•¥‘ÍÑ¡•µ„İ……ÉÙ½½Èİ”••¸•Í¡¥­Ñ”ÍÁ•¥…±¥ÍĞé½•­•¸¸]”İ¥±±•¸‰•İ•¥¹œ°İ•Ñ•¹Í¡…À•¸¹…ÑÕÕÈÍ…µ•¹‰É•¹•¸¥¸••¸•ÉÙ…É¥¹œ‘¥”Ù•É‘•È……Ğ‘…¸½¹ÑÍÁ…¹¹¥¹œ…±±••¸¸!¥•Èİ…¹‘•°©”¥¸‘”¹…ÑÕÕÈ°‰•İ••œ©”‰•İÕÍĞ°±••È©”‰¥¨½Ù•È©”±¥¡……´•¸­½´©”µ•¹Ñ……°Ñ½ĞÉÕÍĞ¸¥”¹¥•Õİ”¥¹é¥¡Ñ•¸•¸•İ½½¹Ñ•Ì­Õ¸©”½½¬Ñ¡Õ¥Ì¥¹Ñ•É•É•¸¸ˆ°4(€€€Ñ„è€‰1••È½¹Ì­•¹¹•¸ˆ°4(€ô°4)ôì4(4)•áÁ½ÉĞ½¹ÍĞ½¹Ñ…ÑA…”€ôì4(€Ñ¥Ñ±”è€‰M=1ğ½¹Ñ…Ğˆ°4(€±…‰•°è€‰½¹Ñ…Ğˆ°4(€¡•…‘¥¹œè€‰½¹Ñ…Ğ•¸•ÍÁÉ•¬Á±…¹¹•¸ˆ°4(€‘•ÍÉ¥ÁÑ¥½¸è4(€€€€‰MÑÕÕÈ½¹Ì••¸‰•É¥¡Ğ½˜Á±…¸••¸•ÍÁÉ•¬¸]”…¹Ñİ½½É‘•¸Í¹•°Ù¥„¡•±±½Í½±…ÑÉ…Ù•°¹‰”¸ˆ°4(€µ•Ñ…•ÍÉ¥ÁÑ¥½¸è€‰9••´½¹Ñ…Ğ½Àµ•ĞM=1Ù½½È‰½•­¥¹•¸°ÙÉ…•¸½˜••¸•ÍÁÉ•¬¸ˆ°4)ôì4(4)•áÁ½ÉĞ½¹ÍĞ…‰½ÕÑA…”€ôì4(€Ñ¥Ñ±”è€‰M=1ğ=Ù•È½¹Ìˆ°4(€±…‰•°è€‰]……É½´M=1É•¥é•¸…¹‘•ÉÌé¥©¸ˆ°4(€¡•…‘¥¹œè€‰=Ù•ÈM=1ˆ°4(€‘•ÍÉ¥ÁÑ¥½¸è€ñÀøñÍÑÉ½¹œù5•ĞM=1ÑÉ…¡Ñ•¸İ”¥•‘•É••¸µ•Ğ¥¹Ñ•É•ÍÍ”¥¸‘¥Ù•ÉÍ”•é½¹‘¡•¥‘ÍÑ¡•µ‡ŠeÌİ…É´Ñ”µ…­•¸Ù½½ÈÙ•É‘¥•Á¥¹œ•¸‰•É¥À¸=µ‘…Ğ‘¥Ğ¡•Ğ™Õ¹‘…µ•¹Ğ¥Ìİ……É½À©”••¸Ñ½•­½µÍĞ­Õ¹Ğ‰½Õİ•¸°½µ‘…Ğ¡•Ğ••¸­…Ñ…±åÍ…Ñ½È¥ÌÙ½½È‰±¥©Ù•¹‘”Ù•É…¹‘•É¥¹œ¸ğ½ÍÑÉ½¹œøğ½Àø4(ñÀù”İ•Ñ•¹Í¡…À‰É•¹Ğ••¸­…‘•È•¸­•¹¹¥Ì°‘”¹…ÑÕÕÈ‰¥•‘ĞÍ¡½½¹¡•¥•¸ÉÕÍĞ•¸‘”‰•İ•¥¹œ¹½‘¥ĞÕ¥Ğ½´…±±•ÌÑ”±…Ñ•¸‰•é¥¹­•¸•¸¥¹é¥¡Ñ•¸Ñ”Ù•Éİ•Ù•¸µ•Ğ©”•¥•¸É•…±¥Ñ•¥Ğ¸ğ½Àø4(ñÀù!••™Ğ¡•Ğ±•Ù•¸©”Õ¥Ğ•Ù•¹İ¥¡Ğ•‰É…¡Ğ°ÍÑ„©”‘¥¡Ğ‰¥¨¥•µ…¹µ•Ğ•é½¹‘¡•¥‘ÍÕ¥Ñ‘…¥¹•¸°½˜Ù½•°©”©”ÍÑ•É¬……¹•ÍÁÉ½­•¸‘½½È½¹é”Ñ¡•µ‡ŠeÌü…¸¥ÌM=1•ÈÙ½½È©½Ô¸ğ½Àù€°4(€µ•Ñ…•ÍÉ¥ÁÑ¥½¸è€‰]¥”İ”é¥©¸°İ……Èİ”Ù½½ÈÍÑ……¸•¸µ•Ğİ¥”İ”İ•É­•¸¸ˆ°4(€ÅÕ½Ñ”è€‹
¬1”½ÉÁÌ‘¥ĞÙÉ…¤¸ƒ
ìƒŠP!•Ğ±¥¡……´±¥•Ğ¹¥•Ğ¸ˆ°4(€Í•Ñ¥½¹Y½½É]¥”è€‰Y½½Èİ¥”ˆ°4(€Í•Ñ¥½¹5¥ÍÍ¥•Y¥Í¥”è€‰5¥ÍÍ¥”€˜Ù¥Í¥”ˆ°4(€µ¥ÍÍ¥•1…‰•°è€‰!½”M=1½¹ÑÍÑ½¹ˆ°4(€Ù¥Í¥•1…‰•°è€‰Y½½Èİ¥”üˆ°4(€Í•Ñ¥½¹]…Ñ=¹Í¹‘•ÉÍ5……­Ğè€‰]…Ğ½¹Ì…¹‘•ÉÌµ……­Ğˆ°4(€Í•Ñ¥½¹Q•…´è€‰Q•…´ˆ°4(€Í•Ñ¥½¹áÁ•ÉÑ•¸è€‰áÁ•ÉÑ•¸ˆ°4(€Í•Ñ¥½¹-•É¹¥‘•¹Ñ¥Ñ•¥Ğè€‰M=1ƒŠL­•É¹¥‘•¹Ñ¥Ñ•¥Ğˆ°4(€Í•Ñ¥½¹Q•ÉÉ„èì4(€€€Ñ¥Ñ±”è€‰M=1QII€¡É…¹­É¥©¬¤ˆ°4(€€€‘•ÍÉ¥ÁÑ¥½¸Äè4(€€€€€€‰•¸¹…ÑÕÕÉ±¥©­”°ÉÕÍÑ¥”°±¥¡ĞÍ…ÕÙ…”Á±•¬¥¸É…¹­É¥©¬¸ˆ°4(€€€‘•ÍÉ¥ÁÑ¥½¸Èè4(€€€€€€‰9…ÑÕÕÈ‘¥”‘É……Ğ¸1¥¡Ğ‘…ĞÉ¥¡Ñ¥¹œ••™Ğ¸•¸Á±•¬½´Ñ”‰•İ••¸¸ˆ°4(€€€ÅÕ½Ñ”è€‹
¬ÔMÕÈ‘ÔÙ¥Ù…¹Ğ¸ƒ
ìˆ°4(€€€Ñ„è€‰	±¥©˜½À‘”¡½½Ñ”ƒŠHˆ°4(€ô°4(€Ñ…¥Í½Ù•Èè€‰=¹Ñ‘•¬½¹é”É•¥é•¸ˆ°4)ôì4(4)•áÁ½ÉĞ½¹ÍĞÁ…ÉÑ¹•ÉÍ¡¥ÁÍA…”€ôì4(€Ñ¥Ñ±”è€‰M=1ğM…µ•¹İ•É­¥¹•¸ˆ°4(€±…‰•°è€‰M…µ•¹İ•É­¥¹•¸ˆ°4(€¡•…‘¥¹œè€‰=¹é”Í…µ•¹İ•É­¥¹•¸ˆ°4(€‘•ÍÉ¥ÁÑ¥½¸è4(€€€€‰]”İ•É­•¸Í…µ•¸µ•Ğ•áÁ•ÉÑÌ‘¥”¡Õ¸Ù…¬Ù•ÉÍÑ……¸¸5•¹Í•¸µ•Ğ­•¹¹¥Ì°•ÉÙ…É¥¹œ•¸½½œÙ½½Èİ…Ğ•¡Ğİ•É­Ğ¸ˆ°4(€µ•Ñ…•ÍÉ¥ÁÑ¥½¸è€‰=¹é”Í…µ•¹İ•É­¥¹•¸µ•Ğ•áÁ•ÉÑÌ‘¥”¡Õ¸Ù…¬Ù•ÉÍÑ……¸¸ˆ°4(€Í•Ñ¥½¹A…ÉÑ¹•ÉÌè€‰M…µ•¹İ•É­¥¹•¸ˆ°4(€Ñ…Q¥Ñ±”è€‰=½¬…±Ì•áÁ•ÉĞ‰¥©‘É…•¸……¸••¸M=1µİ••­•¹½˜É•¥Ìüˆ°4(€Ñ…•ÍÉ¥ÁÑ¥½¸è4(€€€€‰]”‰½Õİ•¸Í…µ•¸µ•ĞÁÉ½™•ÍÍ¥½¹…±Ì¥¸•é½¹‘¡•¥°‰•İ•¥¹œ•¸Á•ÉÍ½½¹±¥©­”É½•¤……¸­±•¥¹Í¡…±¥”°¥¹¡½Õ‘•±¥©¬ÍÑ•É­”İ••­•¹‘•¸•¸É•¥é•¸¥¸‘”¹…ÑÕÕÈ¸ˆ°4(€™½É´èì4(€€€±…‰•±Ìèì4(€€€€€¹……´è€‰9……´ˆ°4(€€€€€•µ…¥°è€‰µµ…¥°ˆ°4(€€€€€Ñ•±•™½½¸è€‰Q•±•™½½¸ˆ°4(€€€€€½É…¹¥Í…Ñ¥”è€‰=É…¹¥Í…Ñ¥”ˆ°4(€€€€€‰•É¥¡Ğè€‰	•É¥¡Ğˆ°4(€€€ô°4(€€€ÍÕ‰µ¥Ğè€‰Y•ÉÍÑÕÕÈˆ°4(€€€ÍÕ•ÍÌè€‰	•‘…¹­Ğ„]”¹•µ•¸Í¹•°½¹Ñ…Ğ½À¸ˆ°4(€ô°4)ôì4(4)•áÁ½ÉĞ½¹ÍĞ¹•İÍ±•ÑÑ•ÉA…”€ôì4(€Ñ¥Ñ±”è€‰M=1ğ9¥•ÕİÍ‰É¥•˜ˆ°4(€±…‰•°è€‰9¥•ÕİÍ‰É¥•˜ˆ°4(€¡•…‘¥¹œè€‰M¡É¥©˜©”¥¸Ù½½È½¹é”¹¥•ÕİÍ‰É¥•˜ˆ°4(€‘•ÍÉ¥ÁÑ¥½¸è€‰	±¥©˜½À‘”¡½½Ñ”Ù…¸½¹é”±……ÑÍÑ”É•¥é•¸°İ••­•¹‘•¸•¸ÕÁ‘…Ñ•Ì¸ˆ°4(€µ•Ñ…•ÍÉ¥ÁÑ¥½¸è€‰	±¥©˜½À‘”¡½½Ñ”Ù…¸½¹é”±……ÑÍÑ”¹¥•ÕİÌ•¸ÕÁ‘…Ñ•Ì¸ˆ°4)ôì4(4)•áÁ½ÉĞ½¹ÍĞ™…ÅA…”€ôì4(€Ñ¥Ñ±”è€‰M=1ğY••±•ÍÑ•±‘”ÙÉ…•¸ˆ°4(€±…‰•°è€‰Y••±•ÍÑ•±‘”ÙÉ…•¸ˆ°4(€¡•…‘¥¹œè€‰É•ÅÕ•¹Ñ±ä…Í­•ÅÕ•ÍÑ¥½¹Ìˆ°4(€‘•ÍÉ¥ÁÑ¥½¸è€‰¹Ñİ½½É‘•¸½ÀÙ••±•ÍÑ•±‘”ÙÉ…•¸½Ù•ÈM=1¸ˆ°4(€µ•Ñ…•ÍÉ¥ÁÑ¥½¸è€‰¹Ñİ½½É‘•¸½ÀÙ••±•ÍÑ•±‘”ÙÉ…•¸½Ù•ÈM=1¸ˆ°4)ôì4(4)•áÁ½ÉĞ½¹ÍĞÁÉ¥Ù…åA…”€ôì4(€Ñ¥Ñ±”è€‰AÉ¥Ù…å‰•±•¥ƒŠLM=1ˆ°4(€±…‰•°è€‰AÉ¥Ù…å‰•±•¥ˆ°4(€¡•…‘¥¹œè€‰AÉ¥Ù…å‰•±•¥ˆ°4(€‘•ÍÉ¥ÁÑ¥½¸è€‰=¹ÌÁÉ¥Ù…å‰•±•¥•¸¡½”İ”½µ……¸µ•Ğ©”••Ù•¹Ì¸ˆ°4(€µ•Ñ…•ÍÉ¥ÁÑ¥½¸è€‰=¹ÌÁÉ¥Ù…å‰•±•¥•¸¡½”İ”½µ……¸µ•Ğ©”••Ù•¹Ì¸ˆ°4)ôì4(4)•áÁ½ÉĞ½¹ÍĞÑ•ÉµÍA…”€ôì4(€Ñ¥Ñ±”è€‰M=1ğ±•µ•¹”Y½½Éİ……É‘•¸ˆ°4(€±…‰•°è€‰±•µ•¹”Ù½½Éİ……É‘•¸ˆ°4(€¡•…‘¥¹œè€‰±•µ•¹”Y½½Éİ……É‘•¸ˆ°4(€‘•ÍÉ¥ÁÑ¥½¸è€‰”…±•µ•¹”Ù½½Éİ……É‘•¸Ù½½È¡•Ğ‰½•­•¸Ù…¸½¹é”É•¥é•¸•¸İ••­•¹‘•¸¸ˆ°4(€µ•Ñ…•ÍÉ¥ÁÑ¥½¸è€‰”…±•µ•¹”Ù½½Éİ……É‘•¸Ù½½È¡•Ğ‰½•­•¸Ù…¸½¹é”É•¥é•¸•¸İ••­•¹‘•¸¸ˆ°4)ôì4