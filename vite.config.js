import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    open: false,
    hmr: {
      clientPort: 443,
    },
    allowedHosts: [
      'hayes-scenarios-contributed-atmospheric.trycloudflare.com',
      '.trycloudflare.com'
    ],
    warmup: {
      clientFiles: [
        './src/main.jsx',
        './src/App.jsx',
        './src/pages/Home.jsx',
      ]
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'styled-components'],
    force: false
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
