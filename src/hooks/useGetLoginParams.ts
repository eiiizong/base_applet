import type { LoginType } from '@/server/types'

import { getEnvData } from '@/utils/get'
import { getSystemInfoSync, login } from '@/utils/uni'

interface Param {
  // 小程序用户临时登录凭证 code
  code: string
  // 移动端设备id
  appId: string
  // 一体机设备id
  deviceId: string
  // 登录类型
  loginType?: LoginType
}
/**
 * 获取登录参数
 * 小程序 app 一体机不同传参
 */
const useGetLoginParams = async () => {
  const param: Param = {
    code: '',
    appId: '',
    deviceId: '',
    loginType: undefined
  }

  const platform = getEnvData('VITE_PLATFORM')
  const system = getSystemInfoSync()
  const { osName, deviceId } = system

  // app
  if (platform === '02') {
    if (osName === 'android') {
      param.loginType = '03'
    } else if (osName === 'ios') {
      param.loginType = '04'
    }
    param.appId = deviceId
  } else if (platform === '03') {
    // 一体机
    param.loginType = '02'
    param.deviceId = deviceId
  } else {
    // 微信小程序
    param.loginType = '01'

    try {
      const loginRes = await login()
      if (loginRes.code) {
        param.code = loginRes.code
      }
    } catch (err) {
      //
    }
  }

  return param
}

export default useGetLoginParams
