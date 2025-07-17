// server.js (Focus on the production pathing)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';

async function createServer() {
  const app = express();

  let vite;
  if (!isProd) {
    // Development mode (local setup)
    // ... (rest of dev code - this pathing is fine locally) ...
  } else {
    // Production mode (Vercel)
    // Serve static assets from the client build
    // This is primarily for files not caught by the Vercel routes like favicon etc.
    app.use('/assets', express.static(path.resolve(__dirname, 'dist/client/assets')));
  }

  app.use(async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template;
      let render;

      if (!isProd) {
        // Development pathing
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        // PRODUCTION PATHING FIX:
        // When deployed to Vercel, server.js is likely in /var/task/.
        // And 'dist' folder is copied directly into /var/task/ due to "includeFiles": ["dist/**"]
        // So, the paths are relative to /var/task/
        const clientRoot = path.resolve(__dirname, 'dist', 'client');
        const serverRoot = path.resolve(__dirname, 'dist', 'server');

        template = fs.readFileSync(path.join(clientRoot, 'index.html'), 'utf-8');
        // Import the pre-built server bundle (it's a JS file, so no 'tsx' extension)
        render = (await import(path.join(serverRoot, 'entry-server.js'))).render;
      }

      const appHtml = render(url);
      const html = template.replace(``, appHtml);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (!isProd) {
        vite.ssrFixStacktrace(e);
      }
      console.error("SSR Error:", e.stack); // Added more context to error logging
      res.status(500).end(`SSR Error: ${e.message}<pre>${e.stack}</pre>`); // Provide more info to client
    }
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

createServer();