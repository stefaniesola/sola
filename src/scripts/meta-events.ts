import type {
  MetaEventName,
  MetaEventParameters,
  MetaPageEvent,
} from "../lib/meta";
import {
  INTERMITTENT_LIVING_CONTENT_ID,
  INTERMITTENT_LIVING_PRICE,
} from "../lib/meta";
import { hasConsent, onConsentChange } from "./consent";

const META_SCRIPT_SRC = "https://connect.facebook.net/en_US/fbevents.js";
const PAGE_EVENT_SCRIPT_ID = "sola-meta-page-event";
const UTM_STORAGE_KEY = "sola_session_utm_v1";
const SESSION_DEDUPE_PREFIX = "sola_meta_event:";
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;
const COMPLETION_ID_KEYS = [
  "submissionId",
  "submission_id",
  "responseId",
  "response_id",
  "invitee_uuid",
  "event_type_uuid",
] as const;

type FbqArguments =
  | ["init", string]
  | ["track", MetaEventName, MetaEventParameters?];

type FbqFunction = {
  (...args: FbqArguments): void;
  callMethod?: (...args: FbqArguments) => void;
  queue?: FbqArguments[];
  push?: FbqFunction;
  loaded?: boolean;
  version?: string;
};

type SolaMetaConfig = {
  pixelId: string;
  enabled: boolean;
  environment: string;
  debug: boolean;
};

const standardEvents: ReadonlySet<MetaEventName> = new Set([
  "PageView",
  "ViewContent",
  "InitiateCheckout",
  "Lead",
  "Contact",
  "Schedule",
]);

let lastPageViewKey = "";
let lastPageEventKey = "";
const recentClickEvents = new WeakMap<Element, number>();

const debugLog = (message: string, details?: unknown) => {
  if (!window.solaMetaConfig?.debug) return;
  console.info(`[SOLA Meta] ${message}`, details ?? "");
};

const getConfig = (): SolaMetaConfig | null => {
  const config = window.solaMetaConfig;
  if (!config?.enabled || !config.pixelId) return null;
  return config;
};

const installFbqStub = () => {
  if (window.fbq) return;

  const fbqStub: FbqFunction = (...args) => {
    if (fbqStub.callMethod) {
      fbqStub.callMethod(...args);
      return;
    }

    fbqStub.queue?.push(args);
  };

  fbqStub.queue = [];
  fbqStub.push = fbqStub;
  fbqStub.loaded = true;
  fbqStub.version = "2.0";
  window.fbq = fbqStub;
  window._fbq = fbqStub;
};

const appendMetaScript = () => {
  if (window.__solaMetaPixelScriptLoaded) return;
  if (document.querySelector(`script[src="${META_SCRIPT_SRC}"]`)) {
    window.__solaMetaPixelScriptLoaded = true;
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = META_SCRIPT_SRC;
  document.head.appendChild(script);
  window.__solaMetaPixelScriptLoaded = true;
};

const ensurePixelReady = (): boolean => {
  const config = getConfig();
  if (!config || !hasConsent("marketing")) return false;

  installFbqStub();
  appendMetaScript();

  if (!window.__solaMetaPixelInitialized) {
    window.fbq?.("init", config.pixelId);
    window.__solaMetaPixelInitialized = true;
    debugLog("Pixel initialized", {
      pixelId: config.pixelId,
      environment: config.environment,
    });
  }

  return typeof window.fbq === "function";
};

const cleanParameters = (
  parameters: MetaEventParameters = {},
): MetaEventParameters => {
  const cleaned: MetaEventParameters = {};

  if (parameters.content_name) cleaned.content_name = parameters.content_name;
  if (parameters.content_category) {
    cleaned.content_category = parameters.content_category;
  }
  if (parameters.content_type) cleaned.content_type = parameters.content_type;
  if (parameters.content_ids?.length) {
    cleaned.content_ids = parameters.content_ids.filter(Boolean);
  }
  if (typeof parameters.value === "number" && Number.isFinite(parameters.value)) {
    cleaned.value = parameters.value;
  }
  if (parameters.currency === "EUR") cleaned.currency = "EUR";

  return cleaned;
};

const isSessionDuplicate = (key: string): boolean => {
  try {
    if (window.sessionStorage.getItem(`${SESSION_DEDUPE_PREFIX}${key}`)) {
      return true;
    }
  } catch {
    return false;
  }

  return false;
};

const markSessionDedupe = (key: string) => {
  try {
    window.sessionStorage.setItem(
      `${SESSION_DEDUPE_PREFIX}${key}`,
      new Date().toISOString(),
    );
  } catch {
    // Session storage is a dedupe aid only; tracking should remain non-blocking.
  }
};

export const trackMetaEvent = (
  eventName: MetaEventName,
  parameters?: MetaEventParameters,
  options: { dedupe?: "session"; dedupeKey?: string } = {},
) => {
  if (!standardEvents.has(eventName)) return;
  if (options.dedupe === "session" && options.dedupeKey) {
    if (isSessionDuplicate(options.dedupeKey)) {
      debugLog("Skipped duplicate session event", {
        eventName,
        dedupeKey: options.dedupeKey,
      });
      return;
    }
  }

  if (!ensurePixelReady()) {
    debugLog("Skipped event before marketing consent or Pixel config", {
      eventName,
      parameters,
    });
    return;
  }

  const cleaned = cleanParameters(parameters);
  window.fbq?.("track", eventName, cleaned);

  if (options.dedupe === "session" && options.dedupeKey) {
    markSessionDedupe(options.dedupeKey);
  }

  debugLog("Tracked event", { eventName, parameters: cleaned });
};

const parsePageEvent = (): MetaPageEvent | null => {
  const element = document.getElementById(PAGE_EVENT_SCRIPT_ID);
  if (!element?.textContent) return null;

  try {
    const parsed: unknown = JSON.parse(element.textContent);
    if (!parsed || typeof parsed !== "object") return null;

    const event = parsed as Partial<MetaPageEvent>;
    if (!event.eventName || !standardEvents.has(event.eventName)) return null;
    if (event.eventName === "PageView") return null;

    return {
      eventName: event.eventName,
      parameters: cleanParameters(event.parameters),
      dedupe: event.dedupe,
      dedupeKey: event.dedupeKey,
    };
  } catch {
    return null;
  }
};

const getCompletionId = (): string | null => {
  const params = new URLSearchParams(window.location.search);
  for (const key of COMPLETION_ID_KEYS) {
    const value = params.get(key);
    if (value) return `${key}:${value}`;
  }

  return null;
};

const trackCurrentPage = () => {
  if (!hasConsent("marketing")) return;

  const pageKey = `${window.location.pathname}${window.location.search}`;
  if (lastPageViewKey !== pageKey) {
    trackMetaEvent("PageView");
    lastPageViewKey = pageKey;
  }

  const pageEvent = parsePageEvent() ?? implicitPageEventForCurrentRoute();
  if (!pageEvent) return;

  const baseDedupeKey =
    pageEvent.dedupeKey ?? `${pageEvent.eventName}:${window.location.pathname}`;
  const pageEventKey = `${pageKey}:${baseDedupeKey}`;
  const completionId = getCompletionId();
  const sessionDedupeKey = `${baseDedupeKey}:${
    completionId ?? window.location.pathname
  }`;

  if (pageEvent.dedupe === "session") {
    trackMetaEvent(pageEvent.eventName, pageEvent.parameters, {
      dedupe: "session",
      dedupeKey: sessionDedupeKey,
    });
    return;
  }

  if (lastPageEventKey === pageEventKey) return;
  trackMetaEvent(pageEvent.eventName, pageEvent.parameters);
  lastPageEventKey = pageEventKey;
};

const readStoredUtm = (): URLSearchParams => {
  const params = new URLSearchParams();

  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    if (!raw) return params;

    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return params;

    for (const key of UTM_KEYS) {
      const value = (parsed as Record<string, unknown>)[key];
      if (typeof value === "string" && value) params.set(key, value);
    }
  } catch {
    return params;
  }

  return params;
};

const captureUtmParams = () => {
  const current = new URLSearchParams(window.location.search);
  const captured: Partial<Record<(typeof UTM_KEYS)[number], string>> = {};

  for (const key of UTM_KEYS) {
    const value = current.get(key);
    if (value) captured[key] = value;
  }

  if (!Object.keys(captured).length) return;

  try {
    window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(captured));
  } catch {
    // Attribution persistence is helpful but must never break navigation.
  }
};

const shouldDecorateUrl = (url: URL): boolean => {
  const host = url.hostname.replace(/^www\./, "");
  return host === "tally.so" || host === "calendly.com";
};

const withStoredUtmParams = (href: string): string => {
  const stored = readStoredUtm();
  if ([...stored.keys()].length === 0) return href;

  try {
    const url = new URL(href, window.location.href);
    if (!shouldDecorateUrl(url)) return href;

    stored.forEach((value, key) => {
      if (!url.searchParams.has(key)) url.searchParams.set(key, value);
    });

    return url.toString();
  } catch {
    return href;
  }
};

const decorateOutboundAttribution = () => {
  document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((link) => {
    const nextHref = withStoredUtmParams(link.href);
    if (nextHref !== link.href) link.href = nextHref;
  });

  document
    .querySelectorAll<HTMLIFrameElement>('iframe[src*="tally.so"]')
    .forEach((frame) => {
      if (!frame.src) return;

      const nextSrc = withStoredUtmParams(frame.src);
      if (nextSrc !== frame.src) frame.src = nextSrc;
    });
};

const paramsFromDataset = (
  element: HTMLElement,
): MetaEventParameters | undefined => {
  const contentName = element.dataset.metaContentName;
  const contentCategory = element.dataset.metaContentCategory;
  const contentType = element.dataset.metaContentType;
  const contentIds = element.dataset.metaContentIds
    ?.split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const value = element.dataset.metaValue
    ? Number(element.dataset.metaValue)
    : undefined;
  const currency = element.dataset.metaCurrency === "EUR" ? "EUR" : undefined;

  return cleanParameters({
    content_name: contentName,
    content_category: contentCategory,
    content_type: contentType,
    content_ids: contentIds,
    value,
    currency,
  });
};

const intermittentLivingContactParams = (): MetaEventParameters => ({
  content_name: "Intermittent Living - Plan een gesprek",
  content_category: "SOLA weekend",
});

const intermittentLivingBookingParams = (): MetaEventParameters => ({
  content_name: "Intermittent Living inschrijving",
  content_category: "SOLA weekend",
  content_ids: [INTERMITTENT_LIVING_CONTENT_ID],
  value: INTERMITTENT_LIVING_PRICE,
  currency: "EUR",
});

const intermittentLivingViewContentEvent = (): MetaPageEvent => ({
  eventName: "ViewContent",
  dedupe: "pageview",
  dedupeKey: "view-content:intermittent-living",
  parameters: {
    content_name: "Intermittent Living",
    content_category: "SOLA weekend",
    content_type: "product",
    content_ids: [INTERMITTENT_LIVING_CONTENT_ID],
    value: INTERMITTENT_LIVING_PRICE,
    currency: "EUR",
  },
});

const defaultCalendlyParams = (): MetaEventParameters => ({
  content_name: "SOLA kennismakingsgesprek",
  content_category: "Contact",
});

const isIntermittentLivingPage = (): boolean =>
  window.location.pathname === "/weekenden/intermittent-living";

const implicitPageEventForCurrentRoute = (): MetaPageEvent | null =>
  isIntermittentLivingPage() ? intermittentLivingViewContentEvent() : null;

const fallbackEventForLink = (
  link: HTMLAnchorElement,
): { eventName: MetaEventName; parameters: MetaEventParameters } | null => {
  let url: URL;
  try {
    url = new URL(link.href);
  } catch {
    return null;
  }

  if (
    url.hostname.replace(/^www\./, "") === "calendly.com" &&
    url.pathname.startsWith("/hello-solatravel/30min")
  ) {
    return {
      eventName: "Contact",
      parameters: isIntermittentLivingPage()
        ? intermittentLivingContactParams()
        : defaultCalendlyParams(),
    };
  }

  if (
    isIntermittentLivingPage() &&
    url.hostname.replace(/^www\./, "") === "tally.so" &&
    url.pathname === "/r/pbogoy"
  ) {
    return {
      eventName: "InitiateCheckout",
      parameters: intermittentLivingBookingParams(),
    };
  }

  return null;
};

const handleMetaClick = (event: MouseEvent) => {
  const target = event.target instanceof Element ? event.target : null;
  const link = target?.closest<HTMLAnchorElement>("a[href]");
  if (!link) return;

  const now = Date.now();
  const lastClick = recentClickEvents.get(link) ?? 0;
  if (now - lastClick < 900) return;
  recentClickEvents.set(link, now);

  const explicitEvent = link.dataset.metaEvent as MetaEventName | undefined;
  const fallback = fallbackEventForLink(link);
  const eventName =
    explicitEvent && standardEvents.has(explicitEvent)
      ? explicitEvent
      : fallback?.eventName;

  if (!eventName || eventName === "PageView") return;

  trackMetaEvent(
    eventName,
    explicitEvent ? paramsFromDataset(link) : fallback?.parameters,
  );
};

const initDomListeners = () => {
  captureUtmParams();
  decorateOutboundAttribution();
  trackCurrentPage();
};

export const initSolaMetaTracking = () => {
  if (typeof window === "undefined") return;
  if (window.__solaMetaTrackingReady) return;
  window.__solaMetaTrackingReady = true;

  document.addEventListener("click", handleMetaClick, { capture: true });
  onConsentChange(() => trackCurrentPage());
  document.addEventListener("astro:page-load", initDomListeners);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDomListeners, {
      once: true,
    });
  } else {
    initDomListeners();
  }
};

declare global {
  interface Window {
    fbq?: FbqFunction;
    _fbq?: FbqFunction;
    __solaMetaTrackingReady?: boolean;
    __solaMetaPixelScriptLoaded?: boolean;
    __solaMetaPixelInitialized?: boolean;
    solaMetaConfig?: SolaMetaConfig;
  }
}
