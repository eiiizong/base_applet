/**
 * 获取当前设置的语言
 * @see {@link https://uniapp.dcloud.net.cn/api/ui/locale.html | uni-app官方文档}
 * @example
  getLocale()
 */
const getLocale = (): string => {
  return uni.getLocale()
}
export default getLocale
