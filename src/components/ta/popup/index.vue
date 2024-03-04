<template>
  <ta-overlay
    v-if="overlay"
    :show="show"
    :z-index="zIndex"
    :custom-style="overlayStyle"
    :duration="duration"
    @click="onClickOverlay"
    :lock-scroll="lockScroll"
    :root-portal="rootPortal"
  />

  <view v-if="inited" :class="rootClass" :style="rootStyle" @transitionend="onTransitionEnd">
    <slot />
    <ta-icon
      v-if="closeable"
      :name="closeIcon"
      class="close-icon-class"
      :class="[basicClass + '__close-icon', basicClass + '__close-icon--' + closeIconPosition]"
      @click="emit('close')"
    />
  </view>
</template>

<script lang="ts" setup>
  import TaOverlay from '../overlay/index.vue'
  import TaIcon from '../icon/index.vue'

  import type { PropType } from 'vue'
  import { computed, ref } from 'vue'

  import { bem } from '../utils'
  import { GLOB_COMPONENT_CLASS_PREFIX } from '../constant'
  /**
   * 基础类名
   */
  const basicClass = `${GLOB_COMPONENT_CLASS_PREFIX}-popup`

  const emit = defineEmits([
    'click',
    'touchmove',
    'close',
    'click-overlay',
    'before-enter',
    'enter',
    'after-enter',
    'before-leave',
    'leave',
    'after-leave',
  ])
  const props = defineProps({
    /**
     * 是否显示弹出层
     */
    show: {
      type: Boolean,
      default: () => false,
    },
    /**
     * z-index 层级
     */
    zIndex: {
      type: Number,
      default: () => 100,
    },
    /**
     * 是否显示遮罩层
     */
    overlay: {
      type: Boolean,
      default: () => true,
    },
    /**
     * 弹出位置，可选值为 top bottom right left center
     */
    position: {
      type: String as PropType<'center' | 'top' | 'right' | 'left' | 'top'>,
      default: () => 'center',
    },
    /**
     * 动画时长，单位为毫秒
     */
    duration: {
      type: Number,
      default: () => 300,
    },
    /**
     * 是否显示圆角
     */
    round: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动
     */
    lockScroll: {
      type: Boolean,
      default: () => true,
    },
    /**
     * 是否在点击遮罩层后关闭
     */
    closeOnClickOverlay: {
      type: Boolean,
      default: () => true,
    },
    /**
     * 是否显示关闭图标
     */
    closeable: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 关闭图标名称或图片链接
     */
    closeIcon: {
      type: String,
      default: () => 'cross',
    },
    /**
     * 关闭图标位置，可选值为 top-left bottom-left bottom-right top-right
     */
    closeIconPosition: {
      type: String as PropType<'top-left' | 'bottom-left' | 'bottom-right' | 'top-right'>,
      default: () => 'top-right',
    },
    /**
     * 是否为 iPhoneX 留出底部安全距离
     */
    safeAreaInsetBottom: {
      type: Boolean,
      default: () => true,
    },
    /**
     * 是否留出顶部安全距离（状态栏高度）
     */
    safeAreaInsetTop: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 是否留出底部 tabbar 安全距离（在使用 tabbar 组件 & 小程序自定义 tabbar 时，popup 组件层级无法盖住 tabbar）
     */
    safeAreaTabBar: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 是否从页面中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= 2.25.2
     */
    rootPortal: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 	自定义遮罩层样式
     */
    overlayStyle: {
      type: String,
      default: () => '',
    },
    /**
     * 自定义弹出层样式
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

  const inited = ref(false)
  const classes = ref('')
  const currentDuration = ref(0)
  const display = ref(false)

  /**
   * 动态设置根标签类名
   */
  const rootClass = computed(() => {
    const { customClass, position, round, safeAreaInsetBottom, safeAreaInsetTop, safeAreaTabBar } = props
    let str = ''
    str = bem('popup', [
      position,
      { round, safe: safeAreaInsetBottom, safeTop: safeAreaInsetTop, safeTabBar: safeAreaTabBar },
    ])

    if (classes.value) {
      str += ` ${classes.value}`
    }

    if (customClass) {
      str += ` ${customClass}`
    }

    return str
  })

  /**
   * 动态设置根标签样式
   */
  const rootStyle = computed(() => {
    const { customStyle, zIndex } = props
    let str = ''

    if (zIndex) {
      str += `z-index: ${zIndex}; `
    }

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

  const onClickOverlay = () => {
    emit('click-overlay')
    const { closeOnClickOverlay } = props
    if (closeOnClickOverlay) {
      emit('close')
    }
  }

  // const onTouchmove = () => {
  //   const { lockScroll } = props
  //   if (!lockScroll) {
  //     emit('touchmove')
  //   }
  // }

  const onTransitionEnd = () => {
    //
  }
</script>

<style lang="scss">
  @use '../common/style/var.scss' as *;

  .#{$namespace} {
    &-popup {
      position: fixed;
      box-sizing: border-box;
      max-height: 100%;
      overflow-y: auto;
      transition-timing-function: ease;
      animation: ease both;
      -webkit-overflow-scrolling: touch;
      background-color: var(--popup-background-color, $popup-background-color);

      &--center {
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);

        &.#{$namespace}-popup--round {
          border-radius: var(--popup-round-border-radius, $popup-round-border-radius);
        }
      }

      &--top {
        top: 0;
        left: 0;
        width: 100%;

        &.#{$namespace}-popup--round {
          border-radius: 0 0
            var(--popup-round-border-radius, var(--popup-round-border-radius, $popup-round-border-radius))
            var(--popup-round-border-radius, var(--popup-round-border-radius, $popup-round-border-radius));
        }
      }

      &--right {
        top: 50%;
        right: 0;
        transform: translate3d(0, -50%, 0);

        &.#{$namespace}-popup--round {
          border-radius: var(--popup-round-border-radius, var(--popup-round-border-radius, $popup-round-border-radius))
            0 0 var(--popup-round-border-radius, var(--popup-round-border-radius, $popup-round-border-radius));
        }
      }

      &--bottom {
        bottom: 0;
        left: 0;
        width: 100%;

        &.#{$namespace}-popup--round {
          border-radius: var(--popup-round-border-radius, var(--popup-round-border-radius, $popup-round-border-radius))
            var(--popup-round-border-radius, var(--popup-round-border-radius, $popup-round-border-radius)) 0 0;
        }
      }

      &--left {
        top: 50%;
        left: 0;
        transform: translate3d(0, -50%, 0);

        &.#{$namespace}-popup--round {
          border-radius: 0
            var(--popup-round-border-radius, var(--popup-round-border-radius, $popup-round-border-radius))
            var(--popup-round-border-radius, var(--popup-round-border-radius, $popup-round-border-radius)) 0;
        }
      }

      &--bottom {
        &.#{$namespace}-popup--safe {
          padding-bottom: constant(safe-area-inset-bottom);
          padding-bottom: env(safe-area-inset-bottom);
        }
      }

      &--bottom.#{$namespace}-popup--safeTabBar,
      &--top.#{$namespace}-popup--safeTabBar {
        bottom: var(--tabbar-height, $tabbar-height);
      }

      &--safeTop {
        padding-top: constant(safe-area-inset-top);
        padding-top: env(safe-area-inset-top);
      }

      &__close-icon {
        position: absolute;
        z-index: var(--popup-close-icon-z-index, $popup-close-icon-z-index);
        color: var(--popup-close-icon-color, $popup-close-icon-color);
        font-size: var(--popup-close-icon-size, $popup-close-icon-size);

        &--top-left {
          top: var(--popup-close-icon-margin, $popup-close-icon-margin);
          left: var(--popup-close-icon-margin, $popup-close-icon-margin);
        }

        &--top-right {
          top: var(--popup-close-icon-margin, $popup-close-icon-margin);
          right: var(--popup-close-icon-margin, $popup-close-icon-margin);
        }

        &--bottom-left {
          bottom: var(--popup-close-icon-margin, $popup-close-icon-margin);
          left: var(--popup-close-icon-margin, $popup-close-icon-margin);
        }

        &--bottom-right {
          right: var(--popup-close-icon-margin, $popup-close-icon-margin);
          bottom: var(--popup-close-icon-margin, $popup-close-icon-margin);
        }

        &:active {
          opacity: 0.6;
        }
      }
    }
    &-scale-enter-active,
    &-scale-leave-active {
      transition-property: opacity, transform;
    }
    &-scale-enter,
    &-scale-leave-to {
      transform: translate3d(-50%, -50%, 0) scale(0.7);
      opacity: 0;
    }

    &-fade-enter-active,
    &-fade-leave-active {
      transition-property: opacity;
    }

    &-fade-enter,
    &-fade-leave-to {
      opacity: 0;
    }

    &-center-enter-active,
    &-center-leave-active {
      transition-property: opacity;
    }

    &-center-enter,
    &-center-leave-to {
      opacity: 0;
    }

    &-bottom-enter-active,
    &-bottom-leave-active,
    &-top-enter-active,
    &-top-leave-active,
    &-left-enter-active,
    &-left-leave-active,
    &-right-enter-active,
    &-right-leave-active {
      transition-property: transform;
    }

    &-bottom-enter,
    &-bottom-leave-to {
      transform: translate3d(0, 100%, 0);
    }

    &-top-enter,
    &-top-leave-to {
      transform: translate3d(0, -100%, 0);
    }

    &-left-enter,
    &-left-leave-to {
      transform: translate3d(-100%, -50%, 0);
    }

    &-right-enter,
    &-right-leave-to {
      transform: translate3d(100%, -50%, 0);
    }
  }
</style>
