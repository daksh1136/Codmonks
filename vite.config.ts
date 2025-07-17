// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Configure SSR-specific options
  ssr: {
    // List any dependencies that should NOT be externalized (i.e., bundled by Vite)
    // This is often needed for UI component libraries that use React context or
    // other client-side specific features.
    // For your current app, you likely won't need anything here, but keep it in mind.
    // noExternal: ['some-ui-library'],
  },
  // Configure build output directories
  build: {
    // Default output directory for the client-side build
    outDir: 'dist/client',
  },
});