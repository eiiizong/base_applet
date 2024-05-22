/**
 * 自定义环境变量
 *
 * VITE_PLATFORM 编译类型 01 微信小程序 02 app 03一体机
 *
 * VITE_OPERATION_TIME 一体机剩余操作时间 单位秒
 *
 * VITE_NODE_ENV 开发模式
 *
 * VITE_API_REQUEST_URL 请求地址
 *
 * VITE_OPEN_DATA_ENCRYPTION 是否开启数据加密
 */
type Key =
  | 'VITE_PLATFORM'
  | 'VITE_OPERATION_TIME'
  | 'VITE_NODE_ENV'
  | 'VITE_API_REQUEST_URL'
  | 'VITE_OPEN_DATA_ENCRYPTION'

/**
 * 获取当前环境配置的值
 * @param key 键
 * @returns
 */
const getEnvData = (key: Key) => {
  return process.env[key]
}

export { getEnvData }
