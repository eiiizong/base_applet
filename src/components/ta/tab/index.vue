<template>
  <view :class="rootClass" :style="shouldShow ? '' : 'display: none;'">
    <slot v-if="shouldRender" />
  </view>
</template>

<script lang="ts" setup>
  import { computed, ref, inject } from 'vue'

  import { bem } from '../utils'
  // import { GLOB_COMPONENT_CLASS_PREFIX } from '../constant'

  /**
   * 基础类名
   */
  // const basicClass = GLOB_COMPONENT_CLASS_PREFIX + '-tab'

  const emit = defineEmits(['click'])
  const props = defineProps({
    /**
     * 标签名称，作为匹配的标识符
     */
    name: {
      type: [String, Number],
      default: () => '',
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: () => '',
    },
    /**
     * 是否禁用标签
     */
    disabled: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 是否显示小红点
     */
    dot: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 图标右上角提示信息
     */
    info: {
      type: [String, Number],
      default: () => '',
    },
    /**
     * 自定义标题样式
     */
    titleStyle: {
      type: String,
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

  const active = ref(false)
  const shouldShow = inject('shouldShow')
  const shouldRender = inject('shouldRender')

  /**
   * 动态获取根标签类名
   */
  const rootClass = computed(() => {
    const { customClass } = props
    let str = ''
    str += bem('tab__pane', { active: active.value, inactive: !active.value })

    if (customClass) {
      str += ` ${customClass}`
    }
    return str
  })
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;
  .#{$namespace}-tab {
    &__pane {
      box-sizing: border-box;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;

      &--active {
        height: auto;
      }

      &--inactive {
        height: 0;
        overflow: visible;
      }
    }
  }
</style>
