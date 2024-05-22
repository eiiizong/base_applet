import type { GetChi037AndChi031ListApiSuccessResponse } from '@/server/types'

import request from '@/server/request'

/**
 * 获取政策数据
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestAppletGetChi037AndChi031List = (
  isShowLoading = true,
  isShowErrorToast = true
): Promise<GetChi037AndChi031ListApiSuccessResponse> => {
  const data = {}

  return new Promise((resolve, reject) => {
    request('/api/applet/getChi037AndChi031List', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestAppletGetChi037AndChi031List }
