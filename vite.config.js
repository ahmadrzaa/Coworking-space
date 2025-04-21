// ------------------------------------------------------------
// © 2025 Ahmad Raza  (@ahmadrzaa on GitHub)
// All rights reserved. Do not distribute without permission.
// ------------------------------------------------------------

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Coworking-space/',
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      // your aliases if any
    }
  },
  // 👇 Add this part to fix 404 on refresh
  server: {
    historyApiFallback: true,
  }
})
