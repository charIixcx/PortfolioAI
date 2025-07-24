import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration to enable React and TypeScript support.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  server: {
    port: 3000,
    open: true
  }
});