import type { GetDepartPolicyListApiSuccessResponse } from '@/server/types'

import request from '@/server/request'

/**
 * 获取政策数据
 * @param {string} [policyName=''] 政策名称
 * @param {string} [chi037=''] 业务局
 * @param {string} [chi031=''] 补贴项目
 * @param {number} [pageSize=1] 页数，默认第1页。
 * @param {number} [pageNum=10] 每页条数，默认10条每页。
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestAppletGetDepartPolicyList = (
  policyName: string = '',
  chi037: string = '',
  chi031: string = '',
  pageNum: number = 1,
  pageSize: number = 10,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<GetDepartPolicyListApiSuccessResponse> => {
  const data = {
    policyName,
    chi037,
    chi031,
    pageSize,
    pageNum
  }

  return new Promise((resolve, reject) => {
    request('/api/applet/getDepartPolicyList', data, isShowLoading, isShowErrorToast, 'GET', true)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestAppletGetDepartPolicyList }
