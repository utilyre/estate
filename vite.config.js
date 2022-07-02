import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const pwaConfig = {
  base: '/commission/',
  includeAssets: ['favicon.svg'],
  manifest: {
    name: 'محاسبه گر کمیسیون',
    short_name: 'کمیسیون',
    description: 'با این برنامه به راحتی کمیسیون املاک را حساب کنید',
    theme_color: '#000000',
    icons: [
      {
        src: '/commission/commission-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/commission/commission-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(pwaConfig)],
  base: '/commission/',
})
