<template>
  <view :class="rootClass" :style="rootStyle">
    <slot />
  </view>
</template>

<script lang="ts" setup>
  import { computed, inject } from 'vue'

  import { bem } from '../utils'
  import { GLOB_COMPONENT_CLASS_PREFIX } from '../constant'

  /**
   * 基础类名
   */
  const basicClass = GLOB_COMPONENT_CLASS_PREFIX + '-col'

  /**
   * 列元素之间的间距（单位为 rpx）从row才能组件中获取
   */
  const gutter: number = inject('gutter') || 0

  const props = defineProps({
    /**
     * 列元素宽度
     */
    span: {
      type: [String, Number],
      default: () => '',
    },
    /**
     * 	列元素偏移距离
     */
    offset: {
      type: [String, Number],
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

  /**
   * 动态设置根标签类名
   */
  const rootClass = computed(() => {
    const { span, offset, customClass } = props
    let str = bem('col', [span])

    if (customClass) {
      str += ` ${customClass}`
    }

    if (offset) {
      str += ` ${basicClass}--offset-${offset}`
    }
    return str
  })

  /**
   * 动态设置根标签样式
   */
  const rootStyle = computed(() => {
    let str = ''
    const { customStyle } = props
    if (gutter) {
      str += `padding-right: ${gutter / 2}rpx; `
      str += `padding-left: ${gutter / 2}rpx; `
    }

    if (customStyle) {
      str += ` ${customStyle}`
    }

    return str
  })
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;
  @use 'sass:math';

  .#{$namespace}-col {
    float: left;
    box-sizing: border-box;
  }

  @for $i from 1 through 24 {
    .#{$namespace}-col--#{$i} {
      width: $i * math.div(100%, 24);
    }
    .#{$namespace}-col--offset-#{$i} {
      margin-left: $i * math.div(100%, 24);
    }
  }
</style>
