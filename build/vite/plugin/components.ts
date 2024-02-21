/**
 * unplugin-vue-components
 * 插件可以在Vue文件中自动引入组件，无需手动导入
 */
import type { PluginOption } from 'vite'

import Components from 'unplugin-vue-components/vite'

export function configComponentsPlugin(): PluginOption {
  const plugins: PluginOption = Components({
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
    // 允许子目录作为组件的命名空间前缀。
    directoryAsNamespace: true,
    include: [/.vue$/, /.vue?vue/],
    exclude: [/[\/]node_modules[\/]/, /[\/].git[\/]/, /[\/].nuxt[\/]/],
  })
  return plugins
}
