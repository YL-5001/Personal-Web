import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 配置全局sass文件
  css: {
    preprocessorOptions: {
      scss: {
        // 文件路径，注意最后需要添加 ';'
        additionalData: '@import "@/assets/css/global.scss";',
        javascriptEnabled: true
      }
    }
  }
})
