import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project page at https://aldoadi.github.io/Website-test/ — assets 404 without this base.
// Build into docs/ so GitHub Pages can serve it straight off main (no CI workflow).
export default defineConfig({
  plugins: [react()],
  base: '/Website-test/',
  build: { outDir: 'docs', emptyOutDir: true },
})
