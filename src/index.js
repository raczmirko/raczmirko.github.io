import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { NotificationProvider } from './NotificationProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </NotificationProvider>
  </React.StrictMode>
);
