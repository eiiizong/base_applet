import type { LoginType } from '@/server/types'

import { getSystemInfoSync } from '@/utils/uni'
import { getEnvData } from '@/utils/get'

/**
 * 获取登录类型
 */
const useGetLoginType = () => {
  let loginType: LoginType = '01'

  const platform = getEnvData('VITE_PLATFORM')
  const system = getSystemInfoSync()
  const { osName } = system

  // app
  if (platform === '02') {
    if (osName === 'android') {
      loginType = '03'
    } else if (osName === 'ios') {
      loginType = '04'
    }
  } else if (platform === '03') {
    // 一体机
    loginType = '02'
  } else {
    // 微信小程序
    loginType = '01'
  }

  return loginType
}

export { useGetLoginType }
