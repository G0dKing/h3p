import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['jquery-dropotron'],
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@a': '/src/assets',
      '@c': '/src/components',
      '@h': '/src/hooks',
      '@i': '/src/images',
      '@p': '/src/pages',
      '@s': '/src/styles',
      '@w': '/src/assets/webfonts'
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
