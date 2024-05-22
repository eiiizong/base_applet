import type { Store } from '@/stores/types'

import { defineStore } from 'pinia'
import { useUpdateSystemLanguageDisplay } from '@/hooks'
import { setLocale } from '@/utils/uni'

/**
 * 命名规则：
 * 数据字段如: test
 * 方法名则为： useStoreTest
 * getter方法名则为： getStoreTest
 * actions方法名则为： updateStoreTest
 */
//
/**
 * store 本系统内用户设置
 */
const useStoreUserSettings = defineStore('storeUserSettings', {
  state: (): Store.UserSettings => {
    return {
      language: 'ja'
    }
  },
  getters: {
    /**
     * 获取系统语言
     */
    getStoreUserSettingsLanguage: (state: Store.UserSettings) => state.language
  },
  actions: {
    /**
     * 更新系统语言
     */
    updateStoreUserSettingsLanguage(str: Store.UserSettings['language']) {
      this.language = str
      setLocale(str)
      useUpdateSystemLanguageDisplay(str)
    }
  },
  persist: true
})

export { useStoreUserSettings }
