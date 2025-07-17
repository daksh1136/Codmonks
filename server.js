// server.js (Focus on production paths)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';

const app = express();

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
    // Production mode (Vercel)
    // No need for app.use('/assets') here, as Vercel's routes handle static assets.
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
        // PRODUCTION PATHING FOR VERCEL FIX:
        // Assume 'client' and 'server' directories are at the root of /var/task/
        const clientBuildDir = path.resolve(__dirname, 'client');
        const serverBuildDir = path.resolve(__dirname, 'server');

        template = fs.readFileSync(path.join(clientBuildDir, 'index.html'), 'utf-8');
        render = (await import(path.join(serverBuildDir, 'entry-server.js'))).render;
      }

      const appHtml = render(url);
      const html = template.replace(``, appHtml);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (!isProd) {
        vite.ssrFixStacktrace(e);
      }
      console.error("SSR Error:", e.stack);
      res.status(500).end(`SSR Error: ${e.message}<pre>${e.stack}</pre>`);
    }
  });
}

await setupApp();

export default app;

if (!isProd) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}