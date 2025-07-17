// src/entry-server.tsx
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './App';
import { StaticRouter } from 'react-router-dom';

export function render(url: string) { // Accept the current URL as a parameter
  const appHtml = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}> {/* Pass the current URL to StaticRouter */}
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
  return appHtml;
}