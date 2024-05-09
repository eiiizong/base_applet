import 'virtual:uno.css'
// #ifdef H5
import '@unocss/reset/normalize.css' // 微信小程序无法识别
// #endif

import App from './App.vue'

import { createSSRApp } from 'vue'
import { createI18n } from 'vue-i18n' // v9.x'

import { getLocale } from '@/utils/uni'
import { setupStore } from '@/stores'
import messages from '@/locales'

// 获取系统已设置的语言
const locale = getLocale()

const i18nConfig = {
  locale: locale,
  messages
}

const i18n = createI18n(i18nConfig)

export function createApp() {
  const app = createSSRApp(App)

  // pinia 仓库管理
  setupStore(app)
  // 使用国际化
  app.use(i18n)
  return {
    app
  }
}
