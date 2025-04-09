// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/movie-review-app/', // 👈 important!
  plugins: [react()],
})
