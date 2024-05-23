/**
 * 设置当前语言
 * @see {@link https://uniapp.dcloud.net.cn/api/ui/locale.html | uni-app官方文档}
 * @example
  setLocale('en')
 */
const setLocale = (locale: string): void => {
  uni.setLocale(locale)
}
export default setLocale
