<template>
  <view :class="rootClass">
    <view :class="[basicClass + '__spinner', type ? basicClass + '__spinner--' + type : '']" :style="spinnerStyle">
      <template v-if="type === 'spinner'">
        <view v-for="item in array12" :key="item" :class="basicClass + '__dot'" />
      </template>
    </view>
    <view :class="basicClass + '__text'" :style="textStyle">
      <slot />
    </view>
  </view>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue'

  import { bem } from '../utils'
  import { GLOB_COMPONENT_CLASS_PREFIX } from '../constant'

  /**
   * 基础类名
   */
  const basicClass = `${GLOB_COMPONENT_CLASS_PREFIX}-loading`

  const props = defineProps({
    /**
     * 颜色
     */
    color: {
      type: String,
      default: () => '#c9c9c9',
    },
    /**
     * 类型，可选值为 spinner
     */
    type: {
      type: String as PropType<'circular' | 'spinner'>,
      default: () => 'circular',
    },
    /**
     * 加载图标大小，默认单位为 rpx
     */
    size: {
      type: [String, Number],
      default: () => '60rpx',
    },
    /**
     * 文字大小，默认单位为为 rpx
     */
    textSize: {
      type: [String, Number],
      default: () => '28rpx',
    },
    /**
     * 文本颜色
     */
    textColor: {
      type: String,
      default: () => '#c9c9c9',
    },
    /**
     * 是否垂直排列图标和文字内容
     */
    vertical: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 根节点样式类
     */
    customClass: {
      type: String,
      default: () => '',
    },
  })
  const array12 = ref(Array.from({ length: 12 }))

  /**
   * 动态设置根标签类名
   */
  const rootClass = computed(() => {
    let str = ''

    const { vertical, customClass } = props

    str += bem('loading', { vertical })

    if (customClass) {
      str += ' ' + customClass
    }

    return str
  })

  const spinnerStyle = computed(() => {
    let str = ''
    const { color, size } = props
    if (typeof size === 'number') {
      str = `width: ${size}rpx; height: ${size}rpx;`
    } else {
      str = `width: ${size}; height: ${size};`
    }

    if (color) {
      str += ` color: ${color};`
    }
    return str
  })

  const textStyle = computed(() => {
    let str = ''
    const { textSize, textColor } = props
    if (typeof textSize === 'number') {
      str = `font-size: ${textSize}rpx;`
    } else {
      str = `font-size: ${textSize};`
    }

    if (textColor) {
      str += ` color: ${textColor};`
    }
    return str
  })
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;
  @use 'sass:math';
  :host {
    font-size: 0;
    line-height: 1;
  }

  @keyframes #{$namespace}-rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .#{$namespace}-loading {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--loading-spinner-color, $loading-spinner-color);

    &__spinner {
      position: relative;
      box-sizing: border-box;
      width: var(--loading-spinner-size, $loading-spinner-size);
      // compatible for 0.x, users may set width or height in root element
      max-width: 100%;
      max-height: 100%;
      height: var(--loading-spinner-size, $loading-spinner-size);
      animation: #{$namespace}-rotate var(--loading-spinner-animation-duration, $loading-spinner-animation-duration) linear
        infinite;

      &--spinner {
        animation-timing-function: steps(12);
      }

      &--circular {
        border: 1px solid transparent;
        border-top-color: currentColor;
        border-radius: 100%;
      }
    }

    &__text {
      margin-left: var(--padding-xs, $padding-xs);
      color: var(--loading-text-color, $loading-text-color);
      font-size: var(--loading-text-font-size, $loading-text-font-size);
      line-height: var(--loading-text-line-height, $loading-text-line-height);

      &:empty {
        display: none;
      }
    }

    &--vertical {
      flex-direction: column;

      .#{$namespace}-loading__text {
        margin: var(--padding-xs, $padding-xs) 0 0;
      }
    }

    &__dot {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      &::before {
        display: block;
        width: 4rpx;
        height: 25%;
        margin: 0 auto;
        background-color: currentColor;
        border-radius: 40%;
        content: ' ';
      }
    }
  }

  @for $i from 1 through 24 {
    .#{$namespace}-loading__dot {
      &:nth-of-type(#{$i}) {
        transform: rotate($i * 30deg);
        opacity: 1 - math.div(0.75, 12) * ($i - 1);
      }
    }
  }
</style>
