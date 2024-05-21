<template>
  <view class="page-full-screen" :style="{ backgroundImage: 'url(' + imageBg + ')' }" @click="onClick">
    <PageHeader :current-date="new Date()" />
    <!-- <div class="page-main">
      <slot></slot>
    </div>
    <PageFooter :operation-time="operationTime" /> -->
  </view>
</template>

<script setup lang="ts">
  import imageBg from './images/bg.png'

  import PageHeader from './PageHeader.vue'
  // import PageFooter from './PageFooter.vue'

  // import { getEnvData } from '@/utils/get'
  // import { useStoreOperationTime, useStoreCurrentDate } from '@/stores/modules'

  // const storeOperationTime = useStoreOperationTime()
  // const storeCurrentDate = useStoreCurrentDate()

  // const { operationTime } = toRefs(storeOperationTime)
  // const { currentDate } = toRefs(storeCurrentDate)

  const onClick = () => {
    // storeOperationTime.$reset()
  }

  onMounted(() => {
    //
  })

  onUnmounted(() => {
    //
  })
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
