import { hasConsent, onConsentChange } from "./consent";

const GA_MEASUREMENT_ID = "G-QKFM5L5T7R";
const GTM_CONTAINER_ID = "GTM-WXRV8S6Z";

type GtagArguments =
  | ["js", Date]
  | ["config", string]
  | ["event", string, Record<string, unknown>?];

type GtagFunction = (...args: GtagArguments) => void;

const appendScript = (src: string) => {
  if (document.querySelector(`script[src="${src}"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
};

const loadGoogleTracking = () => {
  if (window.__solaGoogleTrackingLoaded) return;
  if (!hasConsent("analytics")) return;

  window.__solaGoogleTrackingLoaded = true;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    ((...args: GtagArguments) => {
      window.dataLayer?.push(args);
    });

  appendScript(
    `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
  );
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);

  const gtmScript = document.createElement("script");
  gtmScript.async = true;
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`;
  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });
  document.head.appendChild(gtmScript);
};

export const initSolaGoogleTracking = () => {
  if (typeof window === "undefined") return;

  loadGoogleTracking();
  onConsentChange(() => loadGoogleTracking());
};

declare global {
  interface Window {
    __solaGoogleTrackingLoaded?: boolean;
    dataLayer?: Array<GtagArguments | Record<string, unknown>>;
    gtag?: GtagFunction;
  }
}

