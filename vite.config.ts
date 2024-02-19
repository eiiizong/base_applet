import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 配置路径别名
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    uni(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
    }),
  ],
})
