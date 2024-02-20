import { defineConfig, loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import eslintPlugin from 'vite-plugin-eslint'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
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
      // 加上下面的配置
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
        ],
        imports: ['vue', 'uni-app', 'pinia'],
        // eslint报错解决
        eslintrc: {
          enabled: true, // Default `false`
          filepath: '.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        dts: 'auto-imports.d.ts',
      }),
      Components({
        // dirs 指定组件所在位置，默认为 src/components
        // 可以让我们使用自己定义组件的时候免去 import 的麻烦
        dirs: ['src/components'],
        // 配置需要将哪些后缀类型的文件进行自动按需引入，'vue'为默认值
        // extensions: ['vue'],
        // 解析组件，这里以 Element Plus 为例
        // resolvers: [],
        // 生成components.d.ts
        dts: 'components.d.ts',
        // 遍历子目录
        deep: true,
      }),
    ],
  }
})
