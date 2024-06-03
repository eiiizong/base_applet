import type { App } from 'vue'

import { createI18n } from 'vue-i18n' // 引入vue-i18n组件
import messages from './messages'
import pinia from '@/stores'
import { useStoreUserSettings } from '@/stores/modules'

// 获取系统缓存的用户设置信息
const storeUserSettings = useStoreUserSettings(pinia)
const { language } = toRefs(storeUserSettings)
// 注册i8n实例并引入语言文件
const localeData = {
  legacy: false, // 使用CompotitionAPI必须添加这条.
  locale: language.value,
  messages,
  globalInjection: true
}

const i18n = createI18n(localeData)

const setupI18n = (app: App) => {
  app.use(i18n)
}

export { i18n, setupI18n }
