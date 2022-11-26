import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns'
import * as fs from 'fs';

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    // https: {
    //   key: fs.readFileSync('./.cert/privkey.pem'),
    //   cert: fs.readFileSync('./.cert/cert.pem'),
    // }
  }
})
