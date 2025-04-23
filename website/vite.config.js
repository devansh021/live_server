import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.gltf', '**/*.glb'],
  server: {
    // This ensures Vite can handle client-side routing correctly (like /about, /model)
    historyApiFallback: true,
  },
})
