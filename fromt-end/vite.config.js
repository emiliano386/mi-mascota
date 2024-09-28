import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // URL de tu backend
        changeOrigin: true,
        secure: false, // Desactiva la verificación SSL si es un entorno local
        rewrite: (path) => path.replace(/^\/api/, ''), // Reescribe la URL si es necesario
      },
    },
  },
});
