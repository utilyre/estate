import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const pwaConfig = {
  base: '/estate/',
  includeAssets: ['favicon.svg'],
  manifest: {
    name: 'بنگاه',
    short_name: 'بنگاه',
    description: 'با این برنامه به راحتی کارمزد املاک را حساب کنید',
    theme_color: '#000000',
    icons: [
      {
        src: '/estate/estate-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/estate/estate-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(pwaConfig)],
  base: '/estate/',
})
