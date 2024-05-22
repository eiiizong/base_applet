import type { GetDepartPolicyListApiSuccessResponse } from '@/server/types'

import request from '@/server/request'

/**
 * 获取主管部门及其补贴项目数据
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestAppletGetDepartPolicyList = (
  isShowLoading = true,
  isShowErrorToast = true
): Promise<GetDepartPolicyListApiSuccessResponse> => {
  const data = {}

  return new Promise((resolve, reject) => {
    request('/api/applet/getDepartPolicyList', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestAppletGetDepartPolicyList }
