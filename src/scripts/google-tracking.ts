import { hasConsent, onConsentChange } from './consent';

const GA_MEASUREMENT_ID = 'G-QKFM5L5T7R';
const GA4_DEDUPE_PREFIX = 'sola_ga4_event:';

export type GoogleEventName = 'generate_lead' | 'contact_click';
type GoogleEventParameters = Record<string, string | number | boolean>;

type GtagArguments =
  | ['js', Date]
  | ['config', string, Record<string, unknown>?]
  | ['event', GoogleEventName, GoogleEventParameters?];

type GtagFunction = (...args: GtagArguments) => void;

const appendScript = (src: string) => {
  if (document.querySelector(`script[src='${src}']`)) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
};

const loadGoogleTracking = (): boolean => {
  if (window.__solaGoogleTrackingLoaded) return true;
  if (!hasConsent('analytics')) return false;

  window.__solaGoogleTrackingLoaded = true;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    ((...args: GtagArguments) => {
      window.dataLayer?.push(args);
    });

  appendScript(`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`);
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: true });

  return true;
};

const hasGoogleDedupe = (key: string): boolean => {
  try {
    return window.sessionStorage.getItem(`${GA4_DEDUPE_PREFIX}${key}`) !== null;
  } catch {
    return false;
  }
};

const markGoogleDedupe = (key: string) => {
  try {
    window.sessionStorage.setItem(
      `${GA4_DEDUPE_PREFIX}${key}`,
      new Date().toISOString(),
    );
  } catch {
    // Session storage only prevents duplicate analytics events.
  }
};

export const trackGoogleEvent = (
  eventName: GoogleEventName,
  parameters?: GoogleEventParameters,
  options: { dedupe?: 'session'; dedupeKey?: string } = {},
) => {
  if (options.dedupe === 'session' && options.dedupeKey) {
    if (hasGoogleDedupe(options.dedupeKey)) return;
  }

  if (!loadGoogleTracking()) return;

  window.gtag?.('event', eventName, parameters);

  if (options.dedupe === 'session' && options.dedupeKey) {
    markGoogleDedupe(options.dedupeKey);
  }
};

export const initSolaGoogleTracking = () => {
  if (typeof window === 'undefined') return;

  loadGoogleTracking();
  onConsentChange(() => loadGoogleTracking());
};

declare global {
  interface Window {
    __solaGoogleTrackingLoaded?: boolean;
    dataLayer?: Array<GtagArguments>;
    gtag?: GtagFunction;
  }
}
