<template>
  <view v-if="inited" :class="rootClass" :style="rootStyle" @transitionend="onTransitionEnd" @click="emit('click')">
    <slot />
  </view>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue'
  import { computed, watch, nextTick } from 'vue'

  import { bem } from '../utils'
  import { GLOB_COMPONENT_CLASS_PREFIX } from '../constant'
  import { requestAnimationFrame } from '../common/utils'
  import { isObj } from '../common/validator'

  interface Duration {
    enter: number
    leave: number
  }
  type Status = 'leave' | 'enter' | ''

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
      type: String as PropType<
        | 'fade'
        | 'fade-up'
        | 'fade-down'
        | 'fade-left'
        | 'fade-right'
        | 'slide-up'
        | 'slide-down'
        | 'slide-left'
        | 'slide-right'
        | ''
      >,
      default: () => 'fade',
    },
    /**
     * 	是否展示组件
     */
    show: {
      type: Boolean,
      default: () => true,
    },
    /**
     * 动画时长，单位为毫秒
     */
    duration: {
      type: [Number, Object] as PropType<Number | Duration>,
      default: () => 300,
    },
    /**
     * 定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
     */
    enterClass: {
      type: String,
      default: () => '',
    },
    /**
     * 定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
     */
    enterActiveClass: {
      type: String,
      default: () => '',
    },
    /**
     * 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 enter-class 被移除)，在过渡/动画完成之后移除。
     */
    enterToClass: {
      type: String,
      default: () => '',
    },
    /**
     * 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除
     */
    leaveClass: {
      type: String,
      default: () => '',
    },
    /**
     * 定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
     */
    leaveActiveClass: {
      type: String,
      default: () => '',
    },
    /**
     * 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 leave-class 被删除)，在过渡/动画完成之后移除
     */
    leaveToClass: {
      type: String,
      default: () => '',
    },
    /**
     * 自定义根节点样式
     */
    customStyle: {
      type: String,
      default: () => '',
    },
    /**
     * 自定义根节点类名
     */
    customClass: {
      type: String,
      default: () => '',
    },
  })

  const classes = ref(`enter-class enter-active-class enter-to-class leave-class leave-active-class leave-to-class `)
  const status = ref<Status>('')
  const inited = ref(false)
  const display = ref(false)
  const transitionEnded = ref(true)
  const currentDuration = ref(300)
  const enterFinishedPromise = ref<Promise<boolean> | null>(null)

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

  const getClassNames = (name: string) => {
    const prefix = GLOB_COMPONENT_CLASS_PREFIX
    const { enterClass, enterActiveClass, enterToClass, leaveActiveClass, leaveClass, leaveToClass } = props
    return {
      enter: `${prefix}-${name}-enter ${prefix}-${name}-enter-active ${enterClass} ${enterActiveClass} `,
      'enter-to': `${prefix}-${name}-enter-to ${prefix}-${name}-enter-active ${enterToClass} ${enterActiveClass} `,
      leave: `${prefix}-${name}-leave ${prefix}-${name}-leave-active ${leaveClass} ${leaveActiveClass} `,
      'leave-to': `${prefix}-${name}-leave-to ${prefix}-${name}-leave-active ${leaveToClass} ${leaveActiveClass}  `,
    }
  }

  const enter = () => {
    if (enterFinishedPromise.value) return

    enterFinishedPromise.value = new Promise((resolve) => {
      const { duration, name } = props
      const classNames = getClassNames(name)
      const _currentDuration = isObj(duration) ? duration.enter : duration

      if (status.value === 'enter') {
        return
      }

      status.value = 'enter'
      emit('before-enter')

      requestAnimationFrame(() => {
        if (status.value !== 'enter') {
          return
        }

        emit('enter')

        inited.value = true
        display.value = true
        classes.value = classNames.enter
        currentDuration.value = _currentDuration as number

        requestAnimationFrame(() => {
          if (status.value !== 'enter') {
            return
          }

          transitionEnded.value = false
          classes.value = classNames['enter-to']

          resolve(true)
        })
      })
    })
  }

  const leave = () => {
    if (!enterFinishedPromise.value) return

    enterFinishedPromise.value.then(() => {
      if (!display.value) {
        return
      }

      const { duration, name } = props
      const classNames = getClassNames(name)
      const _currentDuration = isObj(duration) ? duration.leave : duration

      status.value = 'leave'
      emit('before-leave')

      requestAnimationFrame(() => {
        if (status.value !== 'leave') {
          return
        }

        emit('leave')

        classes.value = classNames.leave
        currentDuration.value = _currentDuration as number

        requestAnimationFrame(() => {
          if (status.value !== 'leave') {
            return
          }

          transitionEnded.value = false
          setTimeout(() => {
            onTransitionEnd()
            enterFinishedPromise.value = null
          }, _currentDuration as number)
          classes.value = classNames['leave-to']
        })
      })
    })
  }

  const onTransitionEnd = () => {
    if (transitionEnded.value) {
      return
    }

    transitionEnded.value = true
    if (status.value) {
      emit(`after-${status.value}`)
    }

    const { show } = props
    if (!show && display.value) {
      display.value = false
    }
  }

  watch(
    () => props.show,
    (newVal, oldVal) => {
      if (newVal === oldVal) {
        return
      }
      if (newVal) {
        nextTick(() => {
          enter()
        })
      } else {
        nextTick(() => {
          leave()
        })
      }
    }
  )
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
