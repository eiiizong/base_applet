<template>
  <view class="page-full-screen" :style="{ backgroundImage: 'url(' + imageBg + ')' }" @click.stop.prevent="onClick">
    <PageHeader :current-date="currentDate" />
    <div class="page-main">
      <slot></slot>
    </div>
    <PageFooter :operation-time="operationTime" />
  </view>
</template>

<script setup lang="ts">
  import imageBg from './images/bg.png'

  import PageHeader from './PageHeader.vue'
  import PageFooter from './PageFooter.vue'

  import { useStoreOperationTime, useStoreCurrentDate } from '@/stores/modules'

  const storeOperationTime = useStoreOperationTime()
  const storeCurrentDate = useStoreCurrentDate()

  const { operationTime } = toRefs(storeOperationTime)
  const { currentDate } = toRefs(storeCurrentDate)

  /**
   * 点击屏幕任意位置重置剩余操作时间
   */
  const onClick = () => {
    storeOperationTime.$reset()
  }
</script>

<style lang="scss" scoped>
  .page-full-screen {
    width: 100%;
    height: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    .page-main {
      flex: 1;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      // align-items: center;
      // justify-content: center;
    }
  }
</style>
