import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from './plugins/dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), dts()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/components/odometer.ts'),
      name: 'odometer',
      fileName: (format) => `odometer.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
