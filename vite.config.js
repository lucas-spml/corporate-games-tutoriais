import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // O site é publicado na raiz de tutorials.corporategames.app
  base: '/',
})
