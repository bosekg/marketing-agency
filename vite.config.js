import { defineConfig } from 'vite'

// Single static page. index.html is the entry, build outputs to /dist.
export default defineConfig({
  build: {
    outDir: 'dist',
  },
})
