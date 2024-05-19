import type { LoginApiSuccessResponse } from '@/server/types'

import request from '@/server/request'
import { useGetLoginType } from '@/hooks'
import { getEnvData } from '@/utils/get'
import { getSystemInfoSync, login } from '@/utils/uni'

/**
 * 获取码表
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
    // 小程序用户临时登录凭证 code
    code: '',
    name,
    idCard,
    avatar,
    // 移动端设备id
    appId: '',
    // 一体机设备id
    deviceId: '',
    loginType: useGetLoginType()
  }

  const platform = getEnvData('VITE_PLATFORM')
  const system = getSystemInfoSync()
  const { deviceId } = system
  // app
  if (platform === '02') {
    data.appId = deviceId
  } else if (platform === '03') {
    // 一体机
    data.deviceId = deviceId
  } else {
    // 微信小程序
    try {
      const loginRes = await login()
      if (loginRes.code) {
        data.code = loginRes.code
      }
    } catch (err) {
      //
    }
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
