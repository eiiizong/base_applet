import type { GetAllQueryDetailApiSuccessResponse } from '@/server/types'

import request from '@/server/request'

/**
 * 综合查询详情
 * @param {string} chi031 补贴项目名称
 * @param {number} [pageSize=1] 页数，默认第1页。
 * @param {number} [pageNum=10] 每页条数，默认10条每页。
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestAppletGetAllQueryDetaila = (
  chi031: string,
  pageNum: number = 1,
  pageSize: number = 10,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<GetAllQueryDetailApiSuccessResponse> => {
  const data = {
    chi031,
    pageNum,
    pageSize
  }

  return new Promise((resolve, reject) => {
    request('/api/applet/getAllQueryDetail', data, isShowLoading, isShowErrorToast, 'GET', true)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestAppletGetAllQueryDetaila }
