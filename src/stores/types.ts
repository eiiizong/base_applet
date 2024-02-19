/**
 * 全局状态管理类型
 */
declare namespace Store {
  /**
   * store 用户信息
   */
  export interface UserInfo {
    /**
     * 用户唯一 token
     */
    token?: string
    /**
     * session_key
     */
    sessionKey?: string
  }
}

export type { Store }
