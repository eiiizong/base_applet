import type { GetLatestPolicyListApiSuccessResponse } from '@/server/types'

import request from '@/server/request'

/**
 * 获取最新政策前五条数据
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestAppletGetLatestPolicyList = (
  isShowLoading = true,
  isShowErrorToast = true
): Promise<GetLatestPolicyListApiSuccessResponse> => {
  const data = {}

  return new Promise((resolve, reject) => {
    request('/api/applet/getLatestPolicyList', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestAppletGetLatestPolicyList }
