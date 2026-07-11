export type MetaEventName =
  | "PageView"
  | "ViewContent"
  | "InitiateCheckout"
  | "Lead"
  | "Contact"
  | "Schedule";

export type MetaEventParameters = {
  content_name?: string;
  content_category?: string;
  content_type?: string;
  content_ids?: string[];
  value?: number;
  currency?: "EUR";
};

export type MetaPageEvent = {
  eventName: Exclude<MetaEventName, "PageView">;
  parameters?: MetaEventParameters;
  dedupe?: "pageview" | "session";
  dedupeKey?: string;
};

export const INTERMITTENT_LIVING_CONTENT_ID = "intermittent-living";
export const INTERMITTENT_LIVING_PRICE = 685;

