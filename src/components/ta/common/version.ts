interface WxWorkSystemInfo extends UniApp.GetSystemInfoResult {
  environment?: 'wxwork'
}

interface SystemInfo extends WxWorkSystemInfo, UniApp.GetSystemInfoResult {}

let systemInfo: SystemInfo

export const getSystemInfoSync = () => {
  if (!systemInfo) {
    systemInfo = uni.getSystemInfoSync()
  }

  return systemInfo as SystemInfo
}

const compareVersion = (v1: string, v2: string) => {
  const v1Arr = v1.split('.')
  const v2Arr = v2.split('.')

  const len = Math.max(v1Arr.length, v2Arr.length)

  while (v1Arr.length < len) {
    v1Arr.push('0')
  }
  while (v2Arr.length < len) {
    v2Arr.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1Arr[i], 10)
    const num2 = parseInt(v2Arr[i], 10)

    if (num1 > num2) {
      return 1
    }
    if (num1 < num2) {
      return -1
    }
  }

  return 0
}

const gte = (version: string) => {
  const system = getSystemInfoSync()

  return compareVersion(system.SDKVersion, version) >= 0
}

export const canIUseModel = () => {
  return gte('2.9.3')
}

export const canIUseFormFieldButton = () => {
  return gte('2.10.3')
}

export const canIUseAnimate = () => {
  return gte('2.9.0')
}

export const canIUseGroupSetData = () => {
  return gte('2.4.0')
}

export const canIUseNextTick = () => {
  try {
    return uni.canIUse('nextTick')
  } catch (e) {
    return gte('2.7.1')
  }
}

export const canIUseCanvas2d = () => {
  return gte('2.9.0')
}

export const canIUseGetUserProfile = () => {
  return !!uni.getUserProfile
}
