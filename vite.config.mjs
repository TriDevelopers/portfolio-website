import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// Recreate the CRA jsconfig baseUrl=src absolute imports as Vite aliases,
// so `import { C } from 'theme/tokens'` etc. resolve unchanged.
const fromSrc = (p) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      theme: fromSrc('./src/theme'),
      hooks: fromSrc('./src/hooks'),
      components: fromSrc('./src/components'),
      assets: fromSrc('./src/assets'),
      styles: fromSrc('./src/styles'),
    },
  },
  // Publish dir stays `build/` so netlify.toml (publish = "build") is unchanged.
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: false,
  },
});
