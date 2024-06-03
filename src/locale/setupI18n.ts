import type { App } from 'vue'
import { createI18n } from 'vue-i18n' // 引入vue-i18n组件
import { useStoreUserSettings } from '@/stores/modules'

import ja from './ja.json'
import uniAppJa from './uni-app.ja.json'
import zhHans from './zh-Hans.json'
import uniAppZhHans from './uni-app.zh-Hans.json'

const messages = {
  ja: { ...uniAppJa, ...ja },
  'zh-Hans': { ...uniAppZhHans, ...zhHans }
}

// 获取系统缓存的用户设置信息
const storeUserSettings = useStoreUserSettings()
const { language } = toRefs(storeUserSettings)

// 注册i8n实例并引入语言文件
const localeData = {
  legacy: false, // 使用CompotitionAPI必须添加这条.
  locale: language.value,
  messages,
  globalInjection: true
}

export const i18n = createI18n(localeData)

// setup i18n instance with glob
export const setupI18n = {
  install(app: App) {
    app.use(i18n)
  }
}
