import type { Store } from '@/stores/types'

import { defineStore } from 'pinia'
/**
 * 命名规则：
 * 数据字段如: test
 * 方法名则为： useStoreTest
 * getter方法名则为： getStoreTest
 * actions方法名则为： updateStoreTest
 */
//
/**
 * store【一体机使用】当前页面路由信息
 */
const useStoreCurrentRouteInfo = defineStore('storeCurrentRouteInfo', {
  state: (): Store.CurrentRouteInfo => {
    return {
      name: ''
    }
  },
  getters: {},
  actions: {
    /**
     * 更新路由信息
     */
    updateCurrentRouteInfo() {
      const pages = getCurrentPages()
      if (pages && pages.length) {
        const { route } = pages[pages.length - 1]
        if (route) {
          const name = route?.split('/')[2]
          if (name) {
            this.name = name as Store.CurrentRouteInfo['name']
          }
        }
      } else {
        this.name = ''
      }
    }
  }
})

export default useStoreCurrentRouteInfo
