import 'virtual:uno.css'
// #ifdef H5
import '@unocss/reset/normalize.css' // 微信小程序无法识别
// #endif

import App from './App.vue'

import { createSSRApp } from 'vue'
import { createI18n } from 'vue-i18n' // v9.x'

import { setupStore } from '@/stores'
import { useStoreUserSettings } from '@/stores/modules/useStoreUserSettings'
import messages from '@/locale'
import { useUpdateSystemLanguageDisplay } from '@/hooks'

/**
 * 创建国际化
 */
const createLocalI18n = () => {
  let locale = ''
  // 获取系统缓存的用户设置信息
  const storeUserSettings = useStoreUserSettings()
  const storeLanguage = storeUserSettings.getStoreUserSettingsLanguage

  if (storeLanguage) {
    locale = storeLanguage
  }

  const i18nConfig = {
    locale,
    messages
  }
  // useUpdateNavigationBarTitle('home')
  useUpdateSystemLanguageDisplay(storeLanguage)

  return createI18n(i18nConfig)
}

export function createApp() {
  const app = createSSRApp(App)

  // pinia 仓库管理
  setupStore(app)
  // 使用国际化
  app.use(createLocalI18n())
  return {
    app
  }
}
