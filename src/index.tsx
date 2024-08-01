import { ThemeProvider } from '@emotion/react';
import * as Sentry from '@sentry/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { BrowserTracing } from '@sentry/tracing';

import App from './App';
import { theme } from './config/bp-theme';
import environment from './config/environment';
import './index.css';

Sentry.init({
  dsn: environment.sentryDSN,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
  environment: environment.sentryENV,
});

const queryClient = new QueryClient();

const appContainer = document.getElementById('root');
const root = createRoot(appContainer);
root.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
