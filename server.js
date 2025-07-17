// server.js
// This file will be the entry point for your Vercel serverless function.
// It will export the Express app.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';

// Resolve __dirname equivalent for ES modules for Vercel's environment
// In Vercel, this is likely /var/task
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';

// This is where your Vercel function will find the built files.
// They are likely at the root of the serverless function bundle.
// Example: /var/task/client/index.html
//          /var/task/server/entry-server.js
const CLIENT_BUILD_PATH = path.resolve(__dirname, 'client'); // This refers to the 'client' dir *inside* the serverless bundle
const SERVER_BUILD_PATH = path.resolve(__dirname, 'server'); // This refers to the 'server' dir *inside* the serverless bundle

const app = express(); // Initialize Express app

async function setupApp() {
  let vite;

  if (!isProd) {
    // Development mode (local setup) - standard Vite dev server
    vite = await (
      await import('vite')
    ).createServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    // Production mode (Vercel) - no need to serve /assets via Express, Vercel routes handle it.
    // However, if you have other static files that aren't under /assets and need to be served by Express,
    // you might keep this line. For now, let's remove it for clarity and rely on Vercel routes.
    // app.use('/assets', express.static(path.resolve(__dirname, 'dist/client/assets'))); // Remove or adjust if needed
  }

  // Universal route handler for all incoming requests not handled by Vercel's static routes
  app.use(async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template;
      let render;

      if (!isProd) {
        // Development pathing (local)
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        // PRODUCTION PATHING FOR VERCEL
        // Read index.html from the client build which Vercel would copy
        template = fs.readFileSync(path.join(CLIENT_BUILD_PATH, 'index.html'), 'utf-8');
        // Import the server bundle (relative to where server.js is deployed)
        render = (await import(path.join(SERVER_BUILD_PATH, 'entry-server.js'))).render;
      }

      const appHtml = render(url);
      const html = template.replace(``, appHtml);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (!isProd) {
        vite.ssrFixStacktrace(e);
      }
      console.error("SSR Error:", e.stack);
      // For Vercel, it's crucial to send an error response with details.
      res.status(500).end(`SSR Error: ${e.message}<pre>${e.stack}</pre>`);
    }
  });
}

// Call setupApp to configure the Express instance
await setupApp(); // Use await because setupApp is async

// Export the app for Vercel
export default app;

// For local development, we still want to listen
if (!isProd) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}