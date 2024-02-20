/**
 * 获取系统信息同步接口
 * @see {@link https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfoSync.html | 微信小程序官方文档}
 * @see {@link https://uniapp.dcloud.io/api/system/info?id=getsysteminfosync | uni-app官方文档}
 * @returns {UniApp.GetSystemInfoResult}
 * @example
 * try {
 *  const res = getSystemInfoSync();
 *  console.log(res.model);
 *  console.log(res.pixelRatio);
 *  console.log(res.windowWidth);
 *  console.log(res.windowHeight);
 *  console.log(res.language);
 *  console.log(res.version);
 *  console.log(res.platform);
 * } catch (e) {
 *   // error
 * }
 */
const getSystemInfoSync = (): UniApp.GetSystemInfoResult => {
  return uni.getSystemInfoSync()
}
export { getSystemInfoSync }
