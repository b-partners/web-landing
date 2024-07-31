import { ThemeProvider } from '@emotion/react';
import * as Sentry from '@sentry/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { BrowserTracing } from '@sentry/tracing';

import App from './App';
import { theme } from './config/bp-theme';
import environment from './config/environment';
import './index.css';
import reportWebVitals from './reportWebVitals';

Sentry.init({
  dsn: environment.sentryDSN,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
  environment: environment.sentryENV,
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
