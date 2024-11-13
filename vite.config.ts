import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
})