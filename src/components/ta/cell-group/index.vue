<template>
  <view v-if="title" :class="titleClass">
    {{ title }}
  </view>
  <view :class="groupClass">
    <slot />
  </view>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'

  import { bem } from '../utils'
  import { GLOB_COMPONENT_CLASS_PREFIX } from '../constant'

  const emit = defineEmits(['click'])
  const props = defineProps({
    /**
     * 分组标题
     */
    title: {
      type: String,
      default: () => '',
    },
    /**
     * 	是否展示为圆角卡片风格
     */
    inset: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 	是否显示外边框
     */
    border: {
      type: Boolean,
      default: () => true,
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
   * 动态设置标签类名
   */
  const titleClass = computed(() => {
    const { inset } = props
    let str = ''
    str += bem('cell-group__title', { inset })

    return str
  })

  /**
   * 动态设置标签类名
   */
  const groupClass = computed(() => {
    const { inset, border, customClass } = props
    let str = ''
    str += bem('cell-group', { inset })

    if (customClass) {
      str += ` ${customClass}`
    }

    if (border) {
      str += ` ${GLOB_COMPONENT_CLASS_PREFIX}-hairline--top-bottom`
    }
    return str
  })
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;
  .#{$namespace}-cell-group {
    &--inset {
      margin: var(--cell-group-inset-padding, $cell-group-inset-padding);
      border-radius: var(--cell-group-inset-border-radius, $cell-group-inset-border-radius);
      overflow: hidden;
    }

    &__title {
      padding: var(--cell-group-title-padding, $cell-group-title-padding);
      font-size: var(--cell-group-title-font-size, $cell-group-title-font-size);
      line-height: var(--cell-group-title-line-height, $cell-group-title-line-height);
      color: var(--cell-group-title-color, $cell-group-title-color);

      &--inset {
        padding: var(--cell-group-inset-title-padding, $cell-group-inset-title-padding);
      }
    }
  }
</style>
