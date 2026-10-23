import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Caminhos relativos: funciona em tutorials.corporategames.app
  // e também em lucas-spml.github.io/corporate-games-tutoriais/
  base: './',
})
