<template>
  <view :class="[customClass, basicClass]" :style="rootStyle">
    <view :class="wrapClass" :style="wrapStyle">
      <slot />
    </view>
  </view>
</template>

<script lang="ts" setup>
  import { computed, ref, onMounted, nextTick } from 'vue'

  import { bem } from '../utils'
  import { GLOB_COMPONENT_CLASS_PREFIX } from '../constant'

  /**
   * 基础类名
   */
  const basicClass = GLOB_COMPONENT_CLASS_PREFIX + '-sticky'

  const emit = defineEmits(['click', 'scroll'])
  const props = defineProps({
    /**
     * 粘性定位布局下与顶部的最小距离，单位rpx
     */
    offsetTop: {
      type: Number,
      default: () => 0,
    },
    /**
     * z-index 层级
     */
    zIndex: {
      type: Number,
      default: () => 99,
    },
    /**
     * 当前滚动区域的滚动位置，非 null 时会禁用页面滚动事件的监听
     */
    scrollTop: {
      type: Number,
      default: () => 0,
    },
    /**
     * 当前滚动区域的滚动位置，非 null 时会禁用页面滚动事件的监听
     */
    disabled: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 一个函数，返回容器对应的 NodesRef 节点
     */
    container: {
      type: Function,
    },
    /**
     * 根节点样式
     */
    customStyle: {
      type: String,
      default: () => '',
    },
    /**
     * 根节点样式类
     */
    customClass: {
      type: String,
      default: () => '',
    },
  })

  const transform = ref(0)
  const height = ref(0)
  const fixed = ref(false)

  /**
   * 动态设置根标签样式
   */
  const rootStyle = computed(() => {
    const { customStyle, zIndex } = props
    let str = ''

    if (zIndex) {
      str += `z-index: ${zIndex}; `
    }

    if (fixed.value) {
      if (height.value) {
        if (typeof height.value === 'string') {
          str += `height: ${height.value}; `
        } else {
          str += `height: ${height.value}rpx; `
        }
      }
    }

    if (customStyle) {
      str += `${customStyle}`
    }
    return str
  })

  /**
   * 动态设置类名
   */
  const wrapClass = computed(() => {
    const { customClass } = props
    let str = ''
    str += bem('sticky-wrap', { fixed: fixed.value })

    if (customClass) {
      str += ` ${customClass}`
    }
    return str
  })

  /**
   * 动态设置样式
   */
  const wrapStyle = computed(() => {
    const { offsetTop, zIndex } = props
    let str = ''

    if (transform.value) {
      str += `translate3d(0, ${transform.value}px, 0); `
    }

    if (fixed.value) {
      if (offsetTop) {
        if (typeof offsetTop === 'string') {
          str += `top: ${offsetTop}; `
        } else {
          str += `top: ${offsetTop}rpx; `
        }
      }
    }

    if (zIndex) {
      str += `z-index:${zIndex}; `
    }

    return str
  })

  const setDataAfterDiff = (data: any) => {
    nextTick(() => {
      if (data['fixed'] !== fixed.value) {
        fixed.value = data['fixed']
      }

      if (data['transform'] !== transform.value) {
        transform.value = data['transform']
      }

      if (data['height'] !== height.value) {
        height.value = data['height']
      }

      emit('scroll', {
        scrollTop: props.scrollTop,
        isFixed: data.fixed || fixed.value,
      })
    })
  }

  const getContainerRect = () => {
    const { container } = props

    if (container) {
      const nodesRef: WechatMiniprogram.NodesRef = container()

      return new Promise<WechatMiniprogram.BoundingClientRectCallbackResult>((resolve) =>
        nodesRef.boundingClientRect(resolve).exec()
      )
    } else {
      return Promise.reject(new Error('not found container'))
    }
  }

  const onScroll = ({ scrollTop }: { scrollTop?: number } = {}) => {
    const { container, offsetTop, disabled } = props
    // const { container, offsetTop, disabled } = this.data;

    //

    if (disabled) {
      setDataAfterDiff({
        fixed: false,
        transform: 0,
      })
      return
    }
  }

  onMounted(() => {
    onScroll()
  })
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;
  .#{$namespace}-sticky {
    position: relative;

    &-wrap {
      &--fixed {
        position: fixed;
        right: 0;
        left: 0;
      }
    }
  }
</style>
