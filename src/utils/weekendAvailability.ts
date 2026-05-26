import type { Journey } from "../data/content";

type KeyFact = NonNullable<Journey["keyFacts"]>[number];

const OPEN_REGISTRATION = "Inschrijvingen zijn nu open zolang er plaatsen zijn.";
const STATUS_LABEL = "Kleine groep: max. 14 deelnemers. Inschrijvingen nu open.";
const INCLUDED_FOLLOW_UP =
  "Inbegrepen: een persoonlijke 1-op-1 opvolgsessie na het weekend, zodat je de inzichten concreet kan vertalen naar je dagelijks leven.";
const FOLLOW_UP_FACT = "Persoonlijke 1-op-1 opvolgsessie inbegrepen.";
const FIT_COPY = `

### Voor jou / niet voor jou

**Dit weekend is voor jou als...**

- je bewust wil investeren in je energie, gezondheid en veerkracht
- je houdt van een combinatie van natuur, beweging en inzichten
- je openstaat voor reflectie, maar zonder zweverigheid
- je graag leert in een kleine groep met professionele begeleiding

**Dit weekend is minder geschikt als...**

- je vooral op zoek bent naar een klassiek wellnessweekend
- je geen interesse hebt in actief bewegen of buiten zijn
- je liever volledig anoniem of zonder groepsmomenten deelneemt
- je verwacht dat een weekend alles oplost`;

const DEFAULT_WEEKEND_FIT = {
  isFor: [
    "je bewust wil investeren in je energie, gezondheid en veerkracht",
    "je houdt van een combinatie van natuur, beweging en inzichten",
    "je openstaat voor reflectie, maar zonder zweverigheid",
    "je graag leert in een kleine groep met professionele begeleiding",
  ],
  isNotFor: [
    "je vooral op zoek bent naar een klassiek wellnessweekend",
    "je geen interesse hebt in actief bewegen of buiten zijn",
    "je liever volledig anoniem of zonder groepsmomenten deelneemt",
    "je verwacht dat een weekend alles oplost",
  ],
};

const isRegistrationFact = (fact: KeyFact) => {
  const label = fact.label.toLowerCase();
  return (
    label.includes("early bird") ||
    label.includes("vroegboek") ||
    label.includes("inschrijven")
  );
};

const buildKeyFacts = (
  facts: Journey["keyFacts"] = [],
  registrationDeadline: string,
) => {
  const registrationFact: KeyFact = {
    label: "Inschrijven",
    lines: [OPEN_REGISTRATION, registrationDeadline],
  };
  const cleaned = facts
    .filter((fact) => !isRegistrationFact(fact))
    .map((fact) => {
      if (!fact.label.toLowerCase().includes("prijs")) return fact;
      if (fact.lines.some((line) => line.includes("1-op-1"))) return fact;
      return {
        ...fact,
        lines: [...fact.lines, FOLLOW_UP_FACT],
      };
    });
  const priceIndex = cleaned.findIndex((fact) =>
    fact.label.toLowerCase().includes("prijs"),
  );

  if (priceIndex === -1) {
    return [...cleaned, registrationFact];
  }

  return [
    ...cleaned.slice(0, priceIndex + 1),
    registrationFact,
    ...cleaned.slice(priceIndex + 1),
  ];
};

const addFitCopy = (longread: string) => {
  if (longread.includes("Voor jou / niet voor jou")) return longread;
  return longread.replace(
    /\n## (Wat je leert|Wat mag je verwachten|Wat leer je|Na dit weekend)/,
    `${FIT_COPY}\n\n## $1`,
  );
};

const buildLongread = (longread = "", registrationDeadline: string) =>
  addFitCopy(
    longread.replace(
      /## Vroegboekcadeau\s*\n\n[\s\S]*?(?=\n## Wat is inbegrepen\?)/g,
      `## Inschrijvingen\n\n${OPEN_REGISTRATION}\n\n${registrationDeadline}\n`,
    ),
  );

export const patchWeekendAvailability = (
  weekend: Journey,
  registrationDeadline: string,
): Journey => ({
  ...weekend,
  shortDescription: `${STATUS_LABEL} ${FOLLOW_UP_FACT} ${weekend.shortDescription}`,
  registrationDeadline,
  maxParticipants: 14,
  statusLabel: STATUS_LABEL,
  includedFollowUp: INCLUDED_FOLLOW_UP,
  ...DEFAULT_WEEKEND_FIT,
  keyFacts: buildKeyFacts(weekend.keyFacts, registrationDeadline),
  longread: buildLongread(weekend.longread, registrationDeadline),
});
