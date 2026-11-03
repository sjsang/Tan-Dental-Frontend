import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'REACT_APP_')

  return {
    plugins: [react()],
    // Giữ nguyên cách đọc biến môi trường process.env.REACT_APP_* của CRA
    define: Object.fromEntries(
      Object.entries(env).map(([key, value]) => [`process.env.${key}`, JSON.stringify(value)])
    ),
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'build',
    },
  }
})
