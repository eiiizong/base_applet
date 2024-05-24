<template>
  <div class="demo-page-transition">
    <demo-block title="基础用法" padding>
      <ta-cell title="Fade（淡入）" @click="trigger('fade')" is-link />
      <ta-cell title="Slide-Top（上滑进入）" @click="trigger(['fade', 'slide-top'])" is-link />
      <ta-cell title="Slide Bottom（下滑进入）" @click="trigger('slide-bottom')" is-link />
      <ta-cell title="Slide Left（左滑进入）" @click="trigger('slide-left')" is-link />
      <ta-cell title="Slide Right（右滑进入）" @click="trigger('slide-right')" is-link />
      <ta-cell title="Slide Right（右滑进入）" @click="trigger('zoom-in')" is-link />
      <ta-cell title="Slide Right（右滑进入）" @click="trigger('zoom-out')" is-link />
    </demo-block>
  </div>

  <!-- <uni-transition :show="show" :mode-class="name" custom-class="block" /> -->
</template>

<script setup lang="ts">
  // import UniTransition from '@/components/uni/transition/transition.vue'

  import DemoBlock from '../components/demo-block/index.vue'

  type Name = 'fade' | 'slide-top' | 'slide-right' | 'slide-bottom' | 'slide-left' | 'zoom-in' | 'zoom-out'

  const show = ref(false)
  const name = ref<Name | Name[]>('fade')

  const trigger = (transitionName: Name | Name[]) => {
    name.value = transitionName
    show.value = !show.value
  }
</script>

<style lang="scss" scoped>
  .demo-page-transition {
    background-color: #f6f6f6;
  }
  ::v-deep {
    .block {
      position: fixed;
      top: 50%;
      left: 50%;
      width: 200rpx;
      height: 200rpx;
      margin: -100rpx 0 0 -100rpx;
      background-color: #1989fa;
      border-radius: 8rpx;
    }
  }
</style>
