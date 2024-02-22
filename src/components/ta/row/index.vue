<template>
  <view :class="basicClass">
    <slot />
  </view>
</template>

<script lang="ts" setup>
  import { provide } from 'vue'

  import { GLOB_COMPONENT_CLASS_PREFIX } from '../constant'

  /**
   * 基础类名
   */
  const basicClass = `${GLOB_COMPONENT_CLASS_PREFIX}-row`

  const props = defineProps({
    /**
     * 列元素之间的间距（单位为 rpx，默认0）
     */
    gutter: {
      type: Number,
      default: () => 0,
    },
  })

  provide('gutter', props.gutter)
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;
  .#{$namespace}-row {
    width: 100%;
    &::after {
      display: table;
      clear: both;
      content: '';
    }
  }
</style>
