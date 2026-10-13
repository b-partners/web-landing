import { type Metric, onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

// GA4 event values must be integers, so CLS (a unitless score) is scaled by 1000.
const toEventValue = (name: Metric['name'], value: number) => Math.round(name === 'CLS' ? value * 1000 : value);

// Pushed to the GTM dataLayer (set up in index.html), which queues events until GTM itself loads.
const sendToDataLayer = ({ name, value, delta, id, rating, navigationType }: Metric) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'web_vitals',
    metric_name: name,
    metric_value: toEventValue(name, value),
    metric_delta: toEventValue(name, delta),
    metric_id: id,
    metric_rating: rating,
    navigation_type: navigationType,
  });
};

/** Reports Core Web Vitals (LCP, INP, CLS) plus FCP and TTFB from real visitors as `web_vitals` dataLayer events. */
export const reportWebVitals = (): void => {
  // Skip the build-time prerender, which runs in headless Chrome driven by puppeteer.
  if (navigator.webdriver) return;
  onCLS(sendToDataLayer);
  onINP(sendToDataLayer);
  onLCP(sendToDataLayer);
  onFCP(sendToDataLayer);
  onTTFB(sendToDataLayer);
};
