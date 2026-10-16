import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'




const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
