/**
 * unplugin-auto-import
 * 可以帮助我们在项目中，自动导入常用的使用的第三方库的 API，就可以方便我们开发，提升开发效率。
 */
import type { PluginOption } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'

export function configAutoImportPlugin(): PluginOption {
  const plugins: PluginOption = AutoImport({
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
  })
  return plugins
}
