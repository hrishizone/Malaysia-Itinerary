import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo is served from https://<user>.github.io/Malaysia-Itinerary/
export default defineConfig({
  base: '/Malaysia-Itinerary/',
  plugins: [react()],
  build: { outDir: 'dist', assetsInlineLimit: 4096 },
})
