import { resolve } from 'path'

import ui from '@nuxt/ui/vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // 使用 action 时 base 需要配置为 /${仓库名}，不使用的话就移除该字段
  plugins: [
    vue(),
    ui(),
    tailwindcss(),
    visualizer({
      open: false, // 自动打开分析页面
      filename: './rollup-visualizer/index.html', // 输出文件名
      gzipSize: true, // 显示 gzip 压缩大小
      brotliSize: true // 显示 brotli 压缩大小
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
