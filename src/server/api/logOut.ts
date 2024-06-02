import request from '@/server/request'

/**
 * 退出登录
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestLogout = (isShowLoading = true, isShowErrorToast = false): Promise<any> => {
  const data = {}

  return new Promise((resolve, reject) => {
    request('/logout', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export default requestLogout
