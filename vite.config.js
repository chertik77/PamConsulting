import { glob } from 'glob'
import { defineConfig } from 'vite'
import injectHTML from 'vite-plugin-html-inject'

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html')
    },
    outDir: '../dist'
  },
  plugins: [injectHTML()]
})
