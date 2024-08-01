import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { HashRouter } from 'react-router-dom';
import App from './app/App';
import NotificationProvider from '../src/components/common/NotificationProvider';
import i18n from './i18n';
import initializeAnalytics from './utils/analytics';

initializeAnalytics();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationProvider>
      <HashRouter>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </HashRouter>
    </NotificationProvider>
  </React.StrictMode>
);
