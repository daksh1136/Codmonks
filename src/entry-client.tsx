// src/entry-client.tsx
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import './main.css';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your App with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);