import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const pwaConfig = {
  includeAssets: ['favicon.svg'],
  manifest: {
    name: 'املاک',
    short_name: 'املاک',
    description: 'با این برنامه به راحتی کارمزد املاک را حساب کنید',
    theme_color: '#000000',
    icons: [
      {
        src: '/estate-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/estate-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(pwaConfig)],
  server: {
    host: '0.0.0.0',
    port: process.env.VITE_CLIENT_PORT,
  },
})
