import type { GetSubsidyProjectDetailApiSuccessResponse } from '@/server/types'

import request from '@/server/request'

/**
 * 查询补贴项目详情
 * @param {string} chm030 补贴项目ID
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestAppletGetSubsidyProjectDetail = (
  chm030: string,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<GetSubsidyProjectDetailApiSuccessResponse> => {
  const data = {
    chm030
  }

  return new Promise((resolve, reject) => {
    request('/api/applet/getSubsidyProjectDetail', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestAppletGetSubsidyProjectDetail }
