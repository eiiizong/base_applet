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

  <view
    v-if="inited"
    class="custom-class {{ classes }} {{ utils.bem('popup', [position, { round, safe: safeAreaInsetBottom, safeTop: safeAreaInsetTop, safeTabBar: safeAreaTabBar }]) }}"
    style="{{ computed.popupStyle({ zIndex, currentDuration, display, customStyle }) }}"
    @transitionend="onTransitionEnd"
  >
    <slot />
    <ta-icon
      v-if="closeable"
      :name="closeIcon"
      class="close-icon-class van-popup__close-icon van-popup__close-icon--{{ closeIconPosition }}"
      @click="emit('close')"
    />
  </view>
</template>

<!-- 添加之后 组件之间可以样式穿透 目前未找到setup语法如何编写-->
<!-- <script lang="ts">
  export default {
    options: { styleIsolation: 'shared' },
  }
</script> -->

<script lang="ts" setup>
  import TaOverlay from '../overlay/index.vue'
  import TaIcon from '../icon/index.vue'

  import type { PropType } from 'vue'
  import { computed, ref } from 'vue'

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

  /**
   * 动态设置根标签类名
   */
  const rootClass = computed(() => {
    const { customClass } = props
    let str = basicClass

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

  const onTouchmove = () => {
    const { lockScroll } = props
    if (!lockScroll) {
      emit('touchmove')
    }
  }
</script>

<style lang="scss">
  @use '../common/style/var.scss' as *;
  ::v-deep .#{$namespace}-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--overlay-background-color, $overlay-background-color);
  }
</style>
