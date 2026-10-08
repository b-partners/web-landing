import { ThemeProvider } from '@emotion/react';
import * as Sentry from '@sentry/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useLayoutEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '@/App';
import { environment, theme } from '@/config';
import { BrowserTracing } from '@sentry/tracing';

import './index.css';

Sentry.init({
  dsn: environment.sentryDSN,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
  environment: environment.sentryENV,
});

const queryClient = new QueryClient();

// Styles captured by the build-time prerender; drop them once the app has injected its own.
const RemovePrerenderStyles = (): null => {
  useLayoutEffect(() => {
    document.querySelectorAll('style[data-prerender]').forEach((style) => style.remove());
  }, []);
  return null;
};

const appContainer = document.getElementById('root');
const root = createRoot(appContainer);
root.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <App />
          <RemovePrerenderStyles />
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
