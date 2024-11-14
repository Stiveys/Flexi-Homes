import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Uncomment if you want to use vite-plugin-mock and install it properly
// import vitePluginMock from 'vite-plugin-mock';

export default defineConfig({
  plugins: [
    react(),
    // Uncomment if using vite-plugin-mock
    // vitePluginMock({ /* options */ })
  ],
});

