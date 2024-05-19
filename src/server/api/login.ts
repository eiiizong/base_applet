import type { LoginApiSuccessResponse } from '@/server/types'

import request from '@/server/request'
import { useGetLoginParams } from '@/hooks'

/**
 * 登录
 * @param {string} name 姓名
 * @param {string} idCard 身份证号
 * @param {string} avatar [avatar=''] 头像 base64
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestAppletLogin = async (
  name: string,
  idCard: string,
  avatar: string = '',
  isShowLoading = true,
  isShowErrorToast = true
): Promise<LoginApiSuccessResponse> => {
  const data = {
    name,
    idCard,
    avatar,
    ...(await useGetLoginParams())
  }

  return new Promise((resolve, reject) => {
    request('/api/applet/login', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestAppletLogin }
