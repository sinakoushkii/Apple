import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Use import instead of require

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
