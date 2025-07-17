// server.js (Adding Diagnostic Logging)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } = import 'node:url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';

const app = express();

async function setupApp() {
  let vite;

  if (!isProd) {
    // Development mode (local setup)
    vite = await (
      await import('vite')
    ).createServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    // Production mode (Vercel)
    // DIAGNOSTIC LOGGING: Check available files in /var/task/
    console.log('--- Vercel Runtime Paths ---');
    console.log('__dirname:', __dirname);
    try {
      console.log('Files in /var/task/:', fs.readdirSync(__dirname));
      // If 'dist' folder appears, check its contents too
      if (fs.existsSync(path.join(__dirname, 'dist'))) {
        console.log('Files in /var/task/dist/:', fs.readdirSync(path.join(__dirname, 'dist')));
      }
      if (fs.existsSync(path.join(__dirname, 'dist/client'))) {
        console.log('Files in /var/task/dist/client/:', fs.readdirSync(path.join(__dirname, 'dist/client')));
      }
      if (fs.existsSync(path.join(__dirname, 'dist/server'))) {
        console.log('Files in /var/task/dist/server/:', fs.readdirSync(path.join(__dirname, 'dist/server')));
      }
    } catch (e) {
      console.error('Error listing directory contents:', e);
    }
    console.log('----------------------------');
  }

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
        // PRODUCTION PATHING FOR VERCEL:
        // Attempt to import using the direct path
        template = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
        render = (await import(path.join(__dirname, 'entry-server.js'))).render;
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