import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  base: './', // Change to your desired base path
  build: {
    outDir: '../public_html/vuer', // Change to your desired output directory
    assetsDir: './delete-assets', // Change to your desired assets directory
    emptyOutDir : true,
  },
})
