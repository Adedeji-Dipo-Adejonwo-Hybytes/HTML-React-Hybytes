import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  test: {
    global:true,
    environment: 'jsdom',
    setupFiles: './src/components/tests/setup.js',
  },
  base:"/",
  server: {
    historyApiFallback: true, 
  }
})
