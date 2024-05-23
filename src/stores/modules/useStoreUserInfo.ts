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
 * store 用户信息
 */
const useStoreUserInfo = defineStore('storeUserInfo', {
  state: (): Store.UserInfo => {
    return {
      token: '',
      avatar: '',
      id: '',
      idCard: '',
      name: ''
    }
  },
  getters: {
    /**
     * 获取token
     */
    getStoreUserInfoToken: (state: Store.UserInfo) => state.token,
    /**
     * 获取用户信息
     */
    getStoreUserInfo: (state: Store.UserInfo) => state
  },
  actions: {
    /**
     * 更新token
     */
    updateStoreUserInfoToken(str: Store.UserInfo['token']) {
      this.token = str
    },
    /**
     * 更新用户信息
     */
    updateStoreUserInfo(data: Store.UserInfo) {
      const { token, avatar, id, idCard, name } = data
      this.token = token
      this.avatar = avatar
      this.id = id
      this.idCard = idCard
      this.name = name
    }
  },
  persist: true
})

export default useStoreUserInfo
