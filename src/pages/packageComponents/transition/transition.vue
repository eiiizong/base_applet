<template>
  <div class="demo-page-transition">
    <demo-block title="基础用法" padding>
      <ta-cell title="Fade" @click="trigger('fade')" is-link />
      <ta-cell title="Fade Up" @click="trigger('fade-up')" is-link />
      <ta-cell title="Fade Down" @click="trigger('fade-down')" is-link />
      <ta-cell title="Fade Left" @click="trigger('fade-left')" is-link />
      <ta-cell title="Fade Right" @click="trigger('fade-right')" is-link />
      <ta-cell title="Slide Up" @click="trigger('slide-up')" is-link />
      <ta-cell title="Slide Down" @click="trigger('slide-down')" is-link />
      <ta-cell title="Slide Left" @click="trigger('slide-up')" is-link />
      <ta-cell title="Slide Right" @click="trigger('slide-right')" is-link />
      <ta-cell title="Custom" @click="onClickCustom" is-link />
    </demo-block>
  </div>

  <ta-transition :show="show" :name="name" custom-class="block" />
  <ta-transition
    :show="showCustom"
    name=""
    :duration="{ enter: 300, leave: 1000 }"
    custom-class="block"
    enter-class="ta-enter-class"
    enter-active-class="ta-enter-active-class"
    leave-active-class="ta-leave-active-class"
    leave-to-class="ta-leave-to-class"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
    @after-leave="onAfterLeave"
  />
</template>

<script setup lang="ts">
  import DemoBlock from '../components/demo-block/index.vue'

  type Name =
    | 'fade'
    | 'fade-up'
    | 'fade-down'
    | 'fade-left'
    | 'fade-right'
    | 'slide-up'
    | 'slide-down'
    | 'slide-left'
    | 'slide-right'

  const show = ref(false)
  const name = ref<Name>('fade')
  const showCustom = ref(false)

  const trigger = (transitionName: Name) => {
    name.value = transitionName
    show.value = true
    setTimeout(() => {
      show.value = false
    }, 500)
  }

  const onClickCustom = () => {
    showCustom.value = true

    setTimeout(() => {
      showCustom.value = false
    }, 1000)
  }

  const onBeforeEnter = () => {
    console.log('before enter')
  }

  const onEnter = () => {
    console.log('enter')
  }

  const onAfterEnter = () => {
    console.log('after enter')
  }

  const onBeforeLeave = () => {
    console.log('before leave')
  }

  const onLeave = () => {
    console.log('leave')
  }

  const onAfterLeave = () => {
    console.log('after leave')
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
    .ta-enter-active-class,
    .ta-leave-active-class {
      transition-property: background-color, transform;
    }

    .ta-enter-class,
    .ta-leave-to-class {
      background-color: red;
      transform: rotate(-360deg) translate3d(-100%, -100%, 0);
    }
  }
</style>
