import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public',
  plugins: [
    react(),
    sitemap({
      hostname: "https://narainglobalacademy.com",
      dynamicRoutes: [
        "/about",
        "/why-choose-us",
        "/classroom-facilities",
        "/hostel-facilities",
        "/safety-security",
        "/daily-schedule",
      ], // Add all important pages
    })
  ],
  // server: {
  //   host: '192.168.64.123', 
  //   port: 5200, 
  // },
  define: {
    'process.env': {},  // Define an empty object for `process.env`
  },
  build: {
    sourcemap: false, // Disable sourcemaps generation
    chunkSizeWarningLimit: 10000  
  },
})
