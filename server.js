// server.js
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';

// Resolve __dirname equivalent for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';

async function createServer() {
  const app = express(); // 'app' is defined here

  let vite;
  if (!isProd) {
    // In development, use Vite's dev server middleware
    vite = await (
      await import('vite')
    ).createServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve static assets from the client build
    app.use('/assets', express.static(path.resolve(__dirname, 'dist/client/assets')));
  }

  // Universal route handler for all incoming requests
  // THIS app.use CALL MUST BE INSIDE createServer() after app is defined
  app.use(async (req, res, next) => {
    const url = req.originalUrl; // This already gets the URL

    try {
      let template;
      let render;

      if (!isProd) {
        // 1. Read index.html from project root
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        // 2. Apply Vite HTML transforms. This injects the Vite HMR client and
        //    also applies HTML transforms from Vite plugins (e.g., @vitejs/plugin-react)
        template = await vite.transformIndexHtml(url, template);
        // 3. Load the server entry. vite.ssrLoadModule automatically transforms your ESM source code to be usable in Node.js!
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        // In production, read the pre-built index.html and server entry
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
        // Import the pre-built server bundle
        render = (await import('./dist/server/entry-server.js')).render;
      }

      // 4. Render the React app HTML. Pass the URL here!
      const appHtml = render(url); // Pass the URL to the render function

      // 5. Inject the app-rendered HTML into the template placeholder
      const html = template.replace(``, appHtml);

      // 6. Send the complete HTML response
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      // If an error is caught, let Vite fix it.
      if (!isProd) {
        vite.ssrFixStacktrace(e);
      }
      console.error(e.stack);
      res.status(500).end(e.stack);
    }
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

createServer();