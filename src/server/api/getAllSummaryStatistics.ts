import type { GetAllSummaryStatisticsApiSuccessResponse } from '@/server/types'

import request from '@/server/request'

/**
 * 综合查询汇总统计
 * @param {string} [queryName=''] 查询关键字
 * @param {string} [chb015=''] 区县
 * @param {string} [chb017=''] 乡镇
 * @param {string} [aae209=''] 期号
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestAppletGetAllSummaryStatistics = (
  queryName: string = '',
  chb015: string = '',
  chb017: string = '',
  aae209: string = '',
  isShowLoading = true,
  isShowErrorToast = true
): Promise<GetAllSummaryStatisticsApiSuccessResponse> => {
  const data = {
    queryName,
    chb015,
    chb017,
    aae209
  }

  return new Promise((resolve, reject) => {
    request('/api/applet/getAllSummaryStatistics', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestAppletGetAllSummaryStatistics }
