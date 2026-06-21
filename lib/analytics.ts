declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: Record<string, unknown>
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export type AnalyticsEvent =
  | "cta_click"
  | "form_start"
  | "form_submit_attempt"
  | "form_submit_success"
  | "form_submit_error"
  | "section_view";

export function trackEvent(
  event: AnalyticsEvent,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, params ?? {});
}

export function trackCTAClick(label: string, position: string): void {
  trackEvent("cta_click", { label, position });
}

export function trackFormStart(): void {
  trackEvent("form_start");
}

export function trackFormSuccess(): void {
  trackEvent("form_submit_success");
}

export function trackFormError(reason: string): void {
  trackEvent("form_submit_error", { reason });
}

export function trackSectionView(sectionId: string): void {
  trackEvent("section_view", { section_id: sectionId });
}
