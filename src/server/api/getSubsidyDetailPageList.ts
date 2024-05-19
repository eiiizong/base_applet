import type { GetSubsidyDetailPageListApiSuccessResponse } from '@/server/types'

import request from '@/server/request'

/**
 * 查询个人民生资金发放详情信息
 * @param {string} year 年度
 * @param {number} pageSize 页数
 * @param {number} pageNum 每页条数
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestAppletGetSubsidyDetailPageList = (
  year: string,
  pageSize: number,
  pageNum: number,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<GetSubsidyDetailPageListApiSuccessResponse> => {
  const data = {
    year,
    pageSize,
    pageNum
  }

  return new Promise((resolve, reject) => {
    request('/api/applet/getSubsidyDetailPageList', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestAppletGetSubsidyDetailPageList }
