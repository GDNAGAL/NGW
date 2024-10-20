import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '192.168.64.123', 
  //   port: 5200, 
  // },
  define: {
    'process.env': {},  // Define an empty object for `process.env`
  },
})
