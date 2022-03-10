import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@styles': resolve(__dirname, 'styles'),
    },
  },
})
