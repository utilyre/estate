import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const pwaConfig = {
  includeAssets: ['favicon.svg', 'favicon.png'],
  manifest: {
    name: 'Commission Calculator',
    short_name: 'Commission',
    description: 'Allows you to easily calculate commission related stuff',
    theme_color: '#000000',
    icons: [
      {
        src: 'favicon.png',
        sizes: '512x512',
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
