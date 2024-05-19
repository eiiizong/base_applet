import type { LoginApiSuccessResponse } from '@/server/types'

import request from '@/server/request'
import { useGetLoginParams } from '@/hooks'

/**
 * 获取码表
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */

const requestAppletCheckLogin = async (
  isShowLoading = true,
  isShowErrorToast = false
): Promise<LoginApiSuccessResponse> => {
  const data = await useGetLoginParams()

  return new Promise((resolve, reject) => {
    request('/api/applet/checkLogin', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestAppletCheckLogin }
