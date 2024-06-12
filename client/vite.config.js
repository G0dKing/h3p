import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@comp': '/src/components',
      '@style': '/src/styles',
      '@asset': '/src/assets',
      '@page': '/src/pages',
    }
  },
  server: {
    "target": "0.0.0.0",
    "port": 3000,
    "cors": "true",
    "open": "false",
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
});
