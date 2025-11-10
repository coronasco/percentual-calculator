// Lightweight GA4 helper to safely send events in the browser
type GAParams = Record<string, unknown>;

type Gtag = {
  (command: 'js', date: Date): void;
  (command: 'config', measurementId: string, config?: GAParams): void;
  (command: 'event', eventName: string, params?: GAParams): void;
};

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

export function trackEvent(event: string, params?: GAParams) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', event, params || {});
}

export function trackNavClick(href: string, source: 'desktop' | 'mobile' | 'dropdown') {
  trackEvent('nav_click', { href, source });
}

export function trackCalcSubmit(group: string, type: string) {
  trackEvent('calc_submit', { calc_group: group, calc_type: type });
}

export function trackCalcReset(group: string, type: string) {
  trackEvent('calc_reset', { calc_group: group, calc_type: type });
}

export function trackCalcTypeChange(group: string, type: string) {
  trackEvent('calc_type_change', { calc_group: group, calc_type: type });
}

export function trackPrecisionChange(group: string, precision: number) {
  trackEvent('precision_change', { calc_group: group, precision });
}

export function trackCopy(group: string, type: string) {
  trackEvent('calc_copy', { calc_group: group, calc_type: type });
}

export function trackShare(group: string, type: string) {
  trackEvent('calc_share', { calc_group: group, calc_type: type });
}

export function trackHistoryExport(group: string, count: number) {
  trackEvent('history_export', { calc_group: group, count });
}

export function trackHistoryClear(group: string) {
  trackEvent('history_clear', { calc_group: group });
}

export function trackFavoriteToggle(group: string, action: 'add' | 'remove') {
  trackEvent('favorite_toggle', { calc_group: group, action });
}
