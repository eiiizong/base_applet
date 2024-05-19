import type { GetSelfFundCollectDataApiSuccessResponse } from '@/server/types'

import request from '@/server/request'

/**
 * 查询个人民生资金查询汇总信息
 * @param {string} year 年度
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestAppletGetSelfFundCollectData = (
  year: string,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<GetSelfFundCollectDataApiSuccessResponse> => {
  const data = {
    year
  }

  return new Promise((resolve, reject) => {
    request('/api/applet/getSelfFundCollectData', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestAppletGetSelfFundCollectData }
