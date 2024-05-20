import { defineConfig, loadEnv } from 'vite'

import { resolve } from 'path'
import { wrapperEnv } from './build/utils'
import { createVitePlugins } from './build/vite/plugin'

const pathResolve = (dir: string): string => {
  /**
   *  process.cwd()方法是流程模块的内置应用程序编程接口，用于获取node.js流程的当前工作目录。
   *  此方法返回一个字符串，该字符串指定node.js进程的当前工作目录。保证文件在不同的目录下执行时，路径始终不变
   */
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  // loadEnv读取的布尔类型是字符串。此函数可以转换为布尔类型
  const viteEnv = wrapperEnv(env)
  const isBuild = command === 'build'
  return {
    root,
    resolve: {
      // 配置路径别名
      alias: {
        '@': pathResolve('src') + '/',
        '~': pathResolve('src') + '/',
        '#': pathResolve('types') + '/'
      }
    },
    define: { 'process.env': { ...viteEnv } },
    plugins: createVitePlugins(viteEnv, isBuild)
  }
})
