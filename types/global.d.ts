declare type Recordable<T = any> = Record<string, T>
declare type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T
}

declare interface ViteEnv {
  /**
   * 是否开启加密。（false 不加密、true 加密）
   */
  VITE_OPEN_DATA_ENCRYPTION: boolean
  /**
   * 后台请求地址
   */
  VITE_API_REQUEST_URL: string
  /**
   * 当前开发环境。（development 开发、production 正式）
   */
  VITE_NODE_ENV: 'development' | 'production'
}
