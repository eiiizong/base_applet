<template>
  <view :class="rootClass" :style="rootStyle">
    <slot />
    <Icon v-if="closeable" :class="basicClass + '__close'" name="cross" @click="emit('close', $event)" />
  </view>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue'

  import Icon from '../icon/index.vue'

  import { computed } from 'vue'
  import { bem } from '../utils'
  import { GLOB_COMPONENT_CLASS_PREFIX } from '../constant'

  /**
   * 基础类名
   */
  const basicClass = GLOB_COMPONENT_CLASS_PREFIX + '-tag'

  const emit = defineEmits(['close'])
  const props = defineProps({
    /**
     * 类型，可选值为 primary success danger warning default
     */
    type: {
      type: String as PropType<'primary' | 'success' | 'danger' | 'warning' | 'default'>,
      default: () => 'default',
    },
    /**
     * 大小, 可选值为 large medium default
     */
    size: {
      type: String as PropType<'large' | 'medium' | 'default'>,
      default: () => 'default',
    },
    /**
     * 标签颜色
     */
    color: {
      type: String,
      default: () => '',
    },
    /**
     * 是否为空心样式
     */
    plain: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 是否为圆角样式
     */
    round: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 是否为标记样式
     */
    mark: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 文本颜色，优先级高于 color 属性
     */
    textColor: {
      type: String,
      default: () => '',
    },
    /**
     * 是否为可关闭标签
     */
    closeable: {
      type: Boolean,
      default: () => false,
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
    const { customClass, type, size, mark, plain, round } = props
    let str = ''
    str += bem('tag', [type, size, { mark, plain, round }])

    if (customClass) {
      str += ` ${customClass}`
    }
    return str
  })

  /**
   * 动态设置根标签样式
   */
  const rootStyle = computed(() => {
    const { customStyle, color, plain, textColor } = props
    let str = ''

    if (textColor || plain) {
      if (textColor || color) {
        str += `color: ${textColor || color}; `
      }
    }

    if (!plain && color) {
      str += `background-color: ${color}; `
    }

    if (customStyle) {
      str += ` ${customStyle}`
    }
    return str
  })
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;
  .#{$namespace}-tag {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: var(--tag-padding, $tag-padding);
    color: var(--tag-text-color, $tag-text-color);
    font-size: var(--tag-font-size, $tag-font-size);
    line-height: var(--tag-line-height, $tag-line-height);
    border-radius: var(--tag-border-radius, $tag-border-radius);

    &--default {
      background-color: var(--tag-default-color, $tag-default-color);

      &.#{$namespace}-tag--plain {
        color: var(--tag-default-color, $tag-default-color);
      }
    }

    &--danger {
      background-color: var(--tag-danger-color, $tag-danger-color);

      &.#{$namespace}-tag--plain {
        color: var(--tag-danger-color, $tag-danger-color);
      }
    }

    &--primary {
      background-color: var(--tag-primary-color, $tag-primary-color);

      &.#{$namespace}-tag--plain {
        color: var(--tag-primary-color, $tag-primary-color);
      }
    }

    &--success {
      background-color: var(--tag-success-color, $tag-success-color);

      &.#{$namespace}-tag--plain {
        color: var(--tag-success-color, $tag-success-color);
      }
    }

    &--warning {
      background-color: var(--tag-warning-color, $tag-warning-color);

      &.#{$namespace}-tag--plain {
        color: var(--tag-warning-color, $tag-warning-color);
      }
    }

    &--plain {
      background-color: var(--tag-plain-background-color, $tag-plain-background-color);

      &::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 1px solid currentColor;
        border-radius: inherit;
        content: '';
        pointer-events: none;
      }
    }

    &--medium {
      padding: var(--tag-medium-padding, $tag-medium-padding);
    }

    &--large {
      padding: var(--tag-large-padding, $tag-large-padding);
      font-size: var(--tag-large-font-size, $tag-large-font-size);
      border-radius: var(--tag-large-border-radius, $tag-large-border-radius);
    }

    &--mark {
      border-radius: 0 var(--tag-round-border-radius, var(--tag-round-border-radius, $tag-round-border-radius))
        var(--tag-round-border-radius, var(--tag-round-border-radius, $tag-round-border-radius)) 0;

      &::after {
        display: block;
        width: 4rpx;
        content: '';
      }
    }

    &--round {
      border-radius: var(--tag-round-border-radius, $tag-round-border-radius);
    }
    &__close {
      min-width: 1em;
      margin-left: 4rpx;
      font-size: inherit;
    }
  }
</style>
