export type SolaConsentCategory = "analytics" | "marketing";

export type SolaConsentState = {
  version: 1;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

export const SOLA_CONSENT_STORAGE_KEY = "sola_cookie_consent_v1";
export const SOLA_CONSENT_EVENT = "sola:consent-updated";

const defaultConsent = (): SolaConsentState => ({
  version: 1,
  necessary: true,
  analytics: false,
  marketing: false,
  updatedAt: "",
});

const isConsentState = (value: unknown): value is SolaConsentState => {
  if (!value || typeof value !== "object") return false;
  const state = value as Partial<SolaConsentState>;
  return (
    state.version === 1 &&
    state.necessary === true &&
    typeof state.analytics === "boolean" &&
    typeof state.marketing === "boolean" &&
    typeof state.updatedAt === "string"
  );
};

export const readStoredConsent = (): SolaConsentState | null => {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(SOLA_CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);
    return isConsentState(parsed) ? parsed : null;
  } catch {
    return null;
  }
};

export const getConsent = (): SolaConsentState => {
  const stored = readStoredConsent();
  const state = stored ?? defaultConsent();

  if (typeof window !== "undefined") {
    window.solaConsent = state;
  }

  return state;
};

export const hasConsent = (category: SolaConsentCategory): boolean =>
  getConsent()[category] === true;

export const saveConsent = (choices: {
  analytics: boolean;
  marketing: boolean;
}): SolaConsentState => {
  const state: SolaConsentState = {
    version: 1,
    necessary: true,
    analytics: choices.analytics,
    marketing: choices.marketing,
    updatedAt: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    window.localStorage.setItem(SOLA_CONSENT_STORAGE_KEY, JSON.stringify(state));
    window.solaConsent = state;
    window.dispatchEvent(
      new CustomEvent<SolaConsentState>(SOLA_CONSENT_EVENT, { detail: state }),
    );
  }

  return state;
};

export const onConsentChange = (
  callback: (state: SolaConsentState) => void,
): (() => void) => {
  if (typeof window === "undefined") return () => undefined;

  const handler = (event: Event) => {
    if (event instanceof CustomEvent && isConsentState(event.detail)) {
      callback(event.detail);
      return;
    }

    callback(getConsent());
  };

  window.addEventListener(SOLA_CONSENT_EVENT, handler);
  return () => window.removeEventListener(SOLA_CONSENT_EVENT, handler);
};

declare global {
  interface Window {
    solaConsent?: SolaConsentState;
  }
}

