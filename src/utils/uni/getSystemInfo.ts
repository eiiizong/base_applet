/**
 * 获取系统信息。由于历史原因，wx.getSystemInfo 是异步的调用格式，但是是同步返回，需要异步获取系统信息请使用 wx.getSystemInfoAsync。
 * @see {@link https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfo.html | 微信小程序官方文档}
 * @see {@link https://uniapp.dcloud.io/api/system/info?id=getsysteminfo | uni-app官方文档}
 * @returns { Promise<UniApp.GetSystemInfoResult> }
 * @example
 * getSystemInfo().then(res => {
 *   // 接口调用成功
 * }).catch(err => {
 *  // 接口调用失败
 *}).finally((res) => {
 *  // 接口调用完成
 * })
 */
const getSystemInfo = (): Promise<UniApp.GetSystemInfoResult> =>
  new Promise((resolve, reject) => {
    uni.getSystemInfo({
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('uni.getSystemInfo 接口调用失败 => ', err)
        reject(err)
      },
    })
  })

export { getSystemInfo }
