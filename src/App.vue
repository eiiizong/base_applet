<script setup lang="ts">
  import { useCheckLogin } from '@/hooks'
  onLaunch(() => {
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
