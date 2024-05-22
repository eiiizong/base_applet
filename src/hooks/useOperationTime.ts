import { useStoreCurrentRouteInfo, useStoreUserInfo, useStoreOperationTime } from '@/stores/modules'
import { reLaunch } from '@/utils/uni'

const timer = ref<NodeJS.Timeout | null>(null)

/**
 * 剩余操作时间 清除定时器
 */
const useCloseTimerOperationTime = () => {
  timer.value && clearInterval(timer.value)
}

/**
 * 剩余操作时间 开始执行定时器
 */
const useOpenTimerOperationTime = () => {
  useCloseTimerOperationTime()

  const storeCurrentRouteInfo = useStoreCurrentRouteInfo()
  const storeUserInfo = useStoreUserInfo()
  const storeOperationTime = useStoreOperationTime()

  const { name: pathName } = toRefs(storeCurrentRouteInfo)
  const { token } = toRefs(storeUserInfo)
  const { operationTime } = toRefs(storeOperationTime)

  timer.value = setInterval(() => {
    // 首页并且未登录清除定时器
    if (pathName.value === 'home' && !token?.value) {
      useCloseTimerOperationTime()
    }

    // 剩余操作时间归0 退出登录返回首页
    if (operationTime.value <= 1) {
      useCloseTimerOperationTime()
      storeUserInfo.$reset()
      if (pathName.value !== 'home') {
        reLaunch('home', 'packageYTJ')
      }
    } else {
      storeOperationTime.updateOperationTime(operationTime.value - 1)
    }
  }, 1000)
}

export { useOpenTimerOperationTime, useCloseTimerOperationTime }
