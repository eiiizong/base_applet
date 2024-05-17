<script setup lang="ts">
  import { getSystemInfoSync } from '@/utils/uni'
  import { useCheckLogin } from '@/hooks'
  import { useStoreSystemInfo } from '@/stores/modules'

  onLaunch(() => {
    const systemInfo = getSystemInfoSync()
    const storeSystemInfo = useStoreSystemInfo()

    storeSystemInfo.updateStoreSystemInfo(systemInfo)
    useCheckLogin()
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
