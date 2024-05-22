<script setup lang="ts">
  import { getSystemInfoSync } from '@/utils/uni'
  import { getEnvData } from '@/utils/get'
  import { useCheckLogin } from '@/hooks'
  import { useStoreSystemInfo } from '@/stores/modules'

  onLaunch(() => {
    const systemInfo = getSystemInfoSync()
    const storeSystemInfo = useStoreSystemInfo()
    const platform = getEnvData('VITE_PLATFORM')

    storeSystemInfo.updateStoreSystemInfo(systemInfo)

    if (platform === '1' || platform === '2') {
      useCheckLogin()
    }
  })
  onShow(() => {
    // console.log('App Show')
  })
  onHide(() => {
    // console.log('App Hide')
  })
</script>

<style lang="scss">
  // 引入全局通用样式
  @use '@/assets/styles/scss/index.scss';
</style>
