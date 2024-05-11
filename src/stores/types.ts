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
  /**
   * store 用户系统内设置
   */
  export interface UserSettings {
    /**
     * 语言 zh-Tibetan 藏文 zh-Hans 中文
     */
    language: 'zh-Tibetan' | 'zh-Hans'
  }
}

export type { Store }
