<script setup lang="ts">
  import { type VitePlatform, getEnvData } from '@/utils/get'
  import { checkAppletAppUpdate } from '@/utils/check'
  import { getSystemInfoSync } from '@/utils/uni'
  import {
    useCheckLogin,
    useCloseTimerCurrentDate,
    useOpenTimerCurrentDate,
    useCloseTimerOperationTime,
    useOpenTimerOperationTime
  } from '@/hooks'
  import { useStoreSystemInfo } from '@/stores/modules'

  const platform = getEnvData('VITE_PLATFORM') as VitePlatform

  onLaunch(() => {
    const systemInfo = getSystemInfoSync()
    const storeSystemInfo = useStoreSystemInfo()

    storeSystemInfo.updateStoreSystemInfo(systemInfo)

    // 小程序端和app端检测用户是否登录
    if (platform === '01' || platform === '02') {
      useCheckLogin()
    }
  })
  onShow(() => {
    // 一体机端执行
    // #ifdef APP-PLUS
    // #endif
    if (platform === '03') {
      useOpenTimerOperationTime()
      useOpenTimerCurrentDate()
      // 隐藏手机顶部状态栏
      plus.navigator.setFullscreen(true)
      // 隐藏手机底部导航按键
      plus.navigator.hideSystemNavigation()
    }

    // 微信小程序检测应用更新
    // #ifdef MP-WEIXIN
    // #endif
    if (platform === '02') {
      checkAppletAppUpdate()
    }
  })

  onHide(() => {
    // 一体机端执行
    // #ifdef APP-PLUS
    if (platform === '03') {
      useCloseTimerOperationTime()
      useCloseTimerCurrentDate()
    }
    // #endif
  })
</script>

<style lang="scss">
  // 引入全局通用样式
  @use '@/assets/styles/scss/index.scss';
</style>
