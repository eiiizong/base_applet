import type { GetSelfFundCollectDataApiSuccessResponse } from '@/server/types'

import request from '@/server/request'

/**
 * 查询区县乡镇级联
 * @param {string} year 年度
 * @param {string} year 年度
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestAppletGetChb015AndChb018List = (
  chb015: string,
  chb017: string,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<GetSelfFundCollectDataApiSuccessResponse> => {
  const data = {
    chb015,
    chb017
  }

  return new Promise((resolve, reject) => {
    request('/api/applet/getChb015AndChb018List', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestAppletGetChb015AndChb018List }
