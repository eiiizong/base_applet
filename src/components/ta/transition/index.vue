<template>
  <view
    v-if="inited"
    :class="rootClass"
    :style="rootStyle"
    class="van-transition custom-class {{ classes }}"
    style="{{ computed.rootStyle({ currentDuration, display, customStyle }) }}"
    @transitionend="onTransitionEnd"
  >
    <slot />
  </view>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue'
  import { computed } from 'vue'

  import { bem } from '../utils'

  const emit = defineEmits(['click'])
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
      type: Number,
      default: () => 300,
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
  const status = ref('')
  const inited = ref(false)
  const display = ref(false)
  const transitionEnded = ref(true)
  const currentDuration = ref(300)

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

    return str
  })

  /**
   * 动态设置根标签样式
   */
  const rootStyle = computed(() => {
    const { customStyle } = props
    let str = ''
    if (customStyle) {
      str += ` ${customStyle}`
    }

    return str
  })

  const onTransitionEnd = () => {
    //
  }
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
