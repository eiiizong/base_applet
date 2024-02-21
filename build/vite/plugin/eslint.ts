/**
 * vite-plugin-eslint
 * 是一个用于在 Vite 构建过程中集成 ESLint 检查的插件。
 * 它可以帮助您在开发过程中检查代码是否符合 ESLint 规则，并在控制台输出错误或警告信息。
 */
import type { PluginOption } from 'vite'

import eslintPlugin from 'vite-plugin-eslint'

export function configEslintPlugin(): PluginOption {
  const plugins: PluginOption = eslintPlugin({
    include: ['src/**/*.ts', 'src/**/*.vue', 'types/**/*.ts', 'types/**/*.d.ts', 'build/**/*.ts', 'build/**/*.d.ts'],
  })
  return plugins
}
