<template>
  <view
    class="page-full-screen uno-flex uno-flex-col uno-overflow-hidden"
    :style="getStyleBackgroundImage(imageBg)"
    @click.stop.prevent="onClick"
  >
    <PageHeader :current-date="currentDate" />
    <div class="page-main uno-flex uno-flex-col uno-flex-1 uno-overflow-hidden">
      <slot></slot>
    </div>
    <PageFooter />
  </view>
</template>

<script setup lang="ts">
  import imageBg from './images/bg.png'

  import PageHeader from './PageHeader.vue'
  import PageFooter from './PageFooter.vue'

  import { useStoreOperationTime, useStoreCurrentDate } from '@/stores/modules'
  import { getStyleBackgroundImage } from '@/utils/get'

  const storeOperationTime = useStoreOperationTime()
  const storeCurrentDate = useStoreCurrentDate()

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
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
</style>
