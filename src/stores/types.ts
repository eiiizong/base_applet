import type { LoginApiSuccessResponse } from '@/server/types'
/**
 * 全局状态管理类型
 */
declare namespace Store {
  /**
   * store 用户信息
   */
  export interface UserInfo extends LoginApiSuccessResponse {
    /**
     * 用户唯一 token
     */
    token?: string
  }
  /**
   * store 用户系统内设置
   */
  export interface UserSettings {
    /**
     * 语言 ja 藏文 zh-Hans 中文
     */
    language: 'ja' | 'zh-Hans'
  }

  /**
   * store 当前路由信息
   */
  export interface CurrentRouteInfo {
    /**
     * 路由名称
     */
    name: 'home' | 'login' | ''
  }
}

export type { Store }
