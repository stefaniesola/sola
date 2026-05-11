export const SITE_NAME = "SOLA Travel";
export const SITE_URL = "https://www.solatravel.be";
export const DEFAULT_TITLE =
  "SOLA Travel | Gezondheidsweekends in de natuur";
export const DEFAULT_DESCRIPTION =
  "SOLA Travel organiseert kleinschalige, evidence-informed gezondheidsweekends in de natuur rond beweging, voeding, stressregulatie en leefstijl.";
export const BOOKING_URL = "https://tally.so/r/pbogoy";
export const CONSULT_URL = "https://calendly.com/hello-solatravel/30min";

export const SOLA_SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/sola.travel_/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587448796785",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/sola-travel%E2%98%80/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@s.sola.travel",
  },
  {
    label: "Google",
    href: "https://share.google/Vnue12TRimkBP442X",
  },
];

export const SOLA_FOOTER_SOCIAL_LINKS = SOLA_SOCIAL_LINKS.filter(
  (link) => link.label !== "Google",
);
