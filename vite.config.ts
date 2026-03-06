import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: "/My-Portfolio/",
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
})
