import 'virtual:uno.css'

// #ifdef H5
import '@unocss/reset/normalize.css' // 微信小程序无法识别
// #endif

import App from './App.vue'

import { createSSRApp } from 'vue'

import { setupStore } from '@/stores'
import { setupI18n } from '@/locale'
import mixinUpdate from '@/mixin'

export function createApp() {
  const app = createSSRApp(App)

  // pinia 仓库管理
  setupStore(app)
  // 使用国际化
  setupI18n(app)
  app.mixin(mixinUpdate)
  return {
    app
  }
}
