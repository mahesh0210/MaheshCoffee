import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/MaheshCoffee/', // This should match your GitHub Pages repo name
  build: {
    outDir: 'dist',
  },
});
