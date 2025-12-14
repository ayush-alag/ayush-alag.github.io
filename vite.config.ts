import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages user/organization site is served from the root.
  // (If you later move to a project repo pages like /repo-name/, change this accordingly.)
  base: '/',
  plugins: [react()],
})
