// Google Analytics 4 utility functions

// Type definitions for gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

let ga4Initialized = false;

/**
 * Initialize Google Analytics 4
 * Only loads if not already initialized
 */
const loadGA4Script = () => {
  if (ga4Initialized) return;
  
  const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID;
  
  if (!measurementId) {
    console.warn('GA4 Measurement ID not found in environment variables');
    return;
  }

  // Load gtag.js script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure',
  });

  ga4Initialized = true;
  console.log('GA4 initialized with consent');
};

/**
 * Initialize Google Analytics 4 with consent check
 * Call this once when your app starts
 */
export const initGA4 = () => {
  // Check if user has already consented
  const consent = localStorage.getItem('sonia-cookie-consent');
  
  if (consent === 'accepted') {
    // User has already consented, load GA4 immediately
    loadGA4Script();
  } else {
    // Wait for user consent - expose function to window for cookie banner
    window.initGA4AfterConsent = loadGA4Script;
  }
};

// Extend Window type for TypeScript
declare global {
  interface Window {
    initGA4AfterConsent?: () => void;
  }
}

/**
 * Send a custom event to Google Analytics
 * @param eventName - The name of the event
 * @param eventParams - Optional parameters for the event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Track page views (useful for SPA navigation)
 * @param pageTitle - The title of the page
 * @param pagePath - The path of the page
 */
export const trackPageView = (pageTitle: string, pagePath: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_path: pagePath,
    });
  }
};

/**
 * Track outbound link clicks
 * @param url - The URL being clicked
 * @param label - Optional label for the link
 */
export const trackOutboundLink = (url: string, label?: string) => {
  trackEvent('click', {
    event_category: 'outbound',
    event_label: label || url,
    value: url,
  });
};

/**
 * Track email clicks
 * @param email - The email address
 */
export const trackEmailClick = (email: string) => {
  trackEvent('contact', {
    method: 'email',
    email: email,
  });
};

/**
 * Track button clicks
 * @param buttonName - The name/label of the button
 * @param location - Where the button is located
 */
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location,
  });
};
