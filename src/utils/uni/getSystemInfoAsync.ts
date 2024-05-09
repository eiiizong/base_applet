import { getIsDev } from '@/utils/get'

/**
 * 异步获取系统信息。需要一定的微信客户端版本支持，在不支持的客户端上，会使用同步实现来返回。
 * @see {@link https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfoAsync.html | 微信小程序官方文档}
 * @returns { Promise<UniApp.SystemInfo> }
 * @example
 * getSystemInfo().then(res => {
 *   // 接口调用成功
 * }).catch(err => {
 *  // 接口调用失败
 *}).finally((res) => {
 *  // 接口调用完成
 * })
 */
const getSystemInfoAsync = (): Promise<UniApp.SystemInfo> => {
  // 当前环境是否为开发环境
  const isDev = getIsDev()

  // #ifdef MP-ALIPAY
  // #endif
  return new Promise((resolve, reject) => {
    uni.getSystemInfoAsync({
      success(res) {
        resolve(res)
      },
      fail(err) {
        if (isDev) {
          console.error(
            new Error(`
            getSystemInfoAsync 接口调用失败
              错误信息：${JSON.stringify(err)}
            `)
          )
        }
        reject(err)
      }
    })
  })
}
export { getSystemInfoAsync }
