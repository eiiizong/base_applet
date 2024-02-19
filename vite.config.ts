import { defineConfig, loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'

const pathResolve = (dir: string): string => {
  /**
   *  process.cwd()方法是流程模块的内置应用程序编程接口，用于获取node.js流程的当前工作目录。
   *  此方法返回一个字符串，该字符串指定node.js进程的当前工作目录。保证文件在不同的目录下执行时，路径始终不变
   */
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    resolve: {
      // 配置路径别名
      alias: {
        '@': pathResolve('src') + '/',
        '~': pathResolve('src') + '/',
      },
    },
    define: { 'process.env': { ...env } },
    plugins: [
      uni(),
      eslintPlugin({
        include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
      }),
    ],
  }
})
