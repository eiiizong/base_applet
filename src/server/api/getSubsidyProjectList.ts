import type { GetSubsidyProjectListApiSuccessResponse } from '@/server/types'

import request from '@/server/request'

/**
 * 查询补贴项目列表
 * @param {string} chi031 补贴项目名称
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestAppletGetSubsidyProjectList = (
  chi031: string,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<GetSubsidyProjectListApiSuccessResponse> => {
  const data = {
    chi031
  }

  return new Promise((resolve, reject) => {
    request('/api/applet/getSubsidyProjectList', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestAppletGetSubsidyProjectList }
