<template>
  <demo-block title="基础用法" padding>
    <ta-cell title="Fade" @click="onClickFade" is-link />
    <ta-cell title="Fade Up" @click="onClickFadeUp" is-link />
    <ta-cell title="Fade Down" @click="onClickFadeDown" is-link />
    <ta-cell title="Fade Left" @click="onClickFadeLeft" is-link />
    <ta-cell title="Fade Right" @click="onClickFadeRight" is-link />
    <ta-cell title="Slide Up" @click="onClickSlideUp" is-link />
    <ta-cell title="Slide Down" @click="onClickSlideDown" is-link />
    <ta-cell title="Slide Left" @click="onClickSlideLeft" is-link />
    <ta-cell title="Slide Right" @click="onClickSlideRight" is-link />
    <ta-cell title="Custom" @click="onClickCustom" is-link />

    <ta-transition :show="show" :name="name" custom-class="block" />

    <ta-transition
      :show="showCustom"
      :duration="1000"
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
  </demo-block>
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

  const onClickFade = () => {
    trigger('fade')
  }

  const onClickFadeUp = () => {
    trigger('fade-up')
  }

  const onClickFadeDown = () => {
    trigger('fade-down')
  }

  const onClickFadeLeft = () => {
    trigger('fade-left')
  }

  const onClickFadeRight = () => {
    trigger('fade-right')
  }

  const onClickSlideUp = () => {
    trigger('slide-up')
  }

  const onClickSlideDown = () => {
    trigger('slide-down')
  }

  const onClickSlideLeft = () => {
    trigger('slide-left')
  }

  const onClickSlideRight = () => {
    trigger('slide-right')
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
  ::v-deep .block {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
    background-color: #1989fa;
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
</style>
