declare global {
  interface Window {
    umami?: {
      track: (eventName: string, properties?: Record<string, unknown>) => void;
    };
  }
}

// Track custom events via Umami
export function trackEvent(
  eventName: string,
  properties?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && window.umami) {
    window.umami.track(eventName, properties);
  }
}

// DropVox site-specific events
export const ANALYTICS_EVENTS = {
  // Downloads
  DOWNLOAD_CLICKED: "download_clicked",
  GITHUB_CLICKED: "github_clicked",

  // Payments
  CHECKOUT_INITIATED: "checkout_initiated",
  PIX_COPIED: "pix_copied",

  // Language
  LANGUAGE_CHANGED: "language_changed",
} as const;
