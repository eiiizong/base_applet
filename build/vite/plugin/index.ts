import type { PluginOption } from 'vite'

import uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from 'unocss/vite'

import { configAutoImportPlugin } from './auto-import'
import { configComponentsPlugin } from './components'
import { configEslintPlugin } from './eslint'

export const createVitePlugins = (viteEnv: ViteEnv, isBuild: boolean): PluginOption[] => {
  // const { VITE_OPEN_DATA_ENCRYPTION } = viteEnv
  console.log(viteEnv, 99)

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    uni(),
    UnoCSS(),
    configComponentsPlugin(),
    configAutoImportPlugin(),
    configEslintPlugin(),
  ]

  if (isBuild) {
    //
  }

  return vitePlugins
}
