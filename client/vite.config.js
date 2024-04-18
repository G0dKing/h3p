import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
})
