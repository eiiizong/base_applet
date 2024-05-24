<template>
  <view v-if="inited" :class="rootClass" :style="rootStyle" @transitionend="onTransitionEnd" @click="emit('click')">
    <slot />
  </view>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue'
  import type Ta from '../types'

  import { computed } from 'vue'
  import { bem } from '../utils'
  import { useTransition } from '../hooks/transition'

  const emit = defineEmits(['click', 'before-enter', 'enter', 'before-leave', 'leave', 'after-leave', 'after-enter'])
  const props = defineProps({
    /**
     * 动画类型
     *
     * fade 淡入
     *
     * fade-up 上滑淡入
     *
     * fade-down 下滑淡入
     *
     * fade-left 左滑淡入
     *
     * fade-right 右滑淡入
     *
     * slide-up 上滑进入
     *
     * slide-down 下滑进入
     *
     * slide-left 左滑进入
     *
     * slide-right 右滑进入
     */
    name: {
      type: String as PropType<Ta.TransitionPropsName>,
      default: () => 'fade'
    },
    /**
     * 	是否展示组件
     */
    show: {
      type: Boolean,
      default: () => true
    },
    /**
     * 动画时长，单位为毫秒
     */
    duration: {
      type: [Number, Object] as PropType<number | Ta.TransitionPropsDuration>,
      default: () => 300
    },
    /**
     * 定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
     */
    enterClass: {
      type: String,
      default: () => ''
    },
    /**
     * 定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
     */
    enterActiveClass: {
      type: String,
      default: () => ''
    },
    /**
     * 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 enter-class 被移除)，在过渡/动画完成之后移除。
     */
    enterToClass: {
      type: String,
      default: () => ''
    },
    /**
     * 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除
     */
    leaveClass: {
      type: String,
      default: () => ''
    },
    /**
     * 定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
     */
    leaveActiveClass: {
      type: String,
      default: () => ''
    },
    /**
     * 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 leave-class 被删除)，在过渡/动画完成之后移除
     */
    leaveToClass: {
      type: String,
      default: () => ''
    },
    /**
     * 自定义根节点样式
     */
    customStyle: {
      type: String,
      default: () => ''
    },
    /**
     * 自定义根节点类名
     */
    customClass: {
      type: String,
      default: () => ''
    }
  })

  const { inited, display, classes, currentDuration, onTransitionEnd } = useTransition(props, emit)

  /**
   * 动态设置根标签类名
   */
  const rootClass = computed(() => {
    const { customClass } = props
    let str = ''

    str = bem('transition', {})

    if (customClass) {
      str += ` ${customClass}`
    }

    if (classes.value) {
      str += ` ${classes.value}`
    }

    return str
  })

  /**
   * 动态设置根标签样式
   */
  const rootStyle = computed(() => {
    const { customStyle } = props
    let str = ''

    if (currentDuration.value) {
      str += `transition-duration: ${currentDuration.value}ms; `
      str += `-webkit-transition-duration: ${currentDuration.value}ms; `
    }

    if (!display.value) {
      str += `display: none; `
    }

    if (customStyle) {
      str += `${customStyle}`
    }

    return str
  })
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;

  .#{$namespace} {
    &-transition {
      transition-timing-function: ease;
    }
    &-fade {
      &-enter-active,
      &-leave-active {
        transition-property: opacity;
      }
      &-enter,
      &-leave-to {
        opacity: 0;
      }

      &-down-enter-active,
      &-down-leave-active,
      &-left-enter-active,
      &-left-leave-active,
      &-right-enter-active,
      &-right-leave-active,
      &-up-enter-active,
      &-up-leave-active {
        transition-property: opacity, transform;
      }

      &-up-enter,
      &-up-leave-to {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }

      &-down-enter,
      &-down-leave-to {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
      }

      &-left-enter,
      &-left-leave-to {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }

      &-right-enter,
      &-right-leave-to {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }
    }
    &-slide {
      &-down-enter-active,
      &-down-leave-active,
      &-left-enter-active,
      &-left-leave-active,
      &-right-enter-active,
      &-right-leave-active,
      &-up-enter-active,
      &-up-leave-active {
        transition-property: transform;
      }

      &-up-enter,
      &-up-leave-to {
        transform: translate3d(0, 100%, 0);
      }

      &-down-enter,
      &-down-leave-to {
        transform: translate3d(0, -100%, 0);
      }

      &-left-enter,
      &-left-leave-to {
        transform: translate3d(-100%, 0, 0);
      }

      &-right-enter,
      &-right-leave-to {
        transform: translate3d(100%, 0, 0);
      }
    }
  }
</style>
