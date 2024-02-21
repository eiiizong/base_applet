<template>
  <view :class="rootClass" :style="customStyle" v-if="(info !== null && info !== '') || dot">
    {{ dot ? '' : info }}
  </view>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'

  import { bem } from '../utils'

  const emit = defineEmits(['click'])
  const props = defineProps({
    /**
     * 是否显示图标右上角小红点
     */
    dot: {
      type: Boolean,
      default: false,
    },
    /**
     * 	图标右上角文字提示
     */
    info: {
      type: [String, Number],
      default: '',
    },

    /**
     * 自定义样式
     */
    customStyle: {
      type: String,
      default: '',
    },
  })

  /**
   * 动态获取根标签类名
   */
  const rootClass = computed(() => {
    const { dot } = props
    let str = ''
    str += bem('info', { dot })

    return str
  })
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;
  $class: 'ta';
  .#{$class}-info {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    white-space: nowrap;
    transform: translate(50%, -50%);
    transform-origin: 100%;
    height: var(--info-size, $info-size);
    min-width: var(--info-size, $info-size);
    padding: var(--info-padding, $info-padding);
    color: var(--info-color, $info-color);
    font-weight: var(--info-font-weight, $info-font-weight);
    font-size: var(--info-font-size, $info-font-size);
    font-family: var(--info-font-family, $info-font-family);
    background-color: var(--info-background-color, $info-background-color);
    border: var(--info-border-width, $info-border-width) solid $white;
    border-radius: var(--info-size, $info-size);

    &--dot {
      min-width: 0;
      border-radius: 100%;
      width: var(--info-dot-size, $info-dot-size);
      height: var(--info-dot-size, $info-dot-size);
      background-color: var(--info-dot-color, $info-dot-color);
    }
  }
</style>
