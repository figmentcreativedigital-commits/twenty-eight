/**
 * Centralized analytics.
 * All measurement flows through `track()`. When NEXT_PUBLIC_GA_ID is set,
 * events are forwarded to GA4 via gtag (loaded in app/layout.tsx). With no
 * ID configured, events no-op in production and log to the console in dev,
 * so nothing breaks and there are no hard-coded credentials.
 */

export type AnalyticsEvent =
  | 'cta_click'
  | 'provider_card_click'
  | 'experience_click'
  | 'membership_interest'
  | 'consultation_start'
  | 'consultation_step_complete'
  | 'consultation_submit'
  | 'booking_link_click';

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

export function track(event: AnalyticsEvent, params: Params = {}): void {
  if (typeof window === 'undefined') return;

  if (GA_ID && typeof window.gtag === 'function') {
    window.gtag('event', event, params);
    return;
  }

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.info('[analytics]', event, params);
  }
}

/** GA4 page_view — call on route change if you add a client analytics wrapper. */
export function pageview(url: string): void {
  if (typeof window === 'undefined') return;
  if (GA_ID && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', { page_path: url });
  }
}
