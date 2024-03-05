<template>
  <root-portal v-if="rootPortal">
    <TaTransition
      :show="show"
      :custom-class="rootClass"
      :custom-style="rootStyle"
      :duration="duration"
      @click.stop="onClick"
      @touchmove.stop="onTouchmove"
    >
      <slot></slot>
    </TaTransition>
  </root-portal>
  <TaTransition
    v-else
    :show="show"
    :custom-class="rootClass"
    :custom-style="rootStyle"
    :duration="duration"
    @click.stop="onClick"
    @touchmove.stop="onTouchmove"
  >
    <slot></slot>
  </TaTransition>
</template>

<!-- 添加之后 组件之间可以样式穿透 目前未找到setup语法如何编写-->
<script lang="ts">
  export default {
    options: { styleIsolation: 'shared' },
  }
</script>

<script lang="ts" setup>
  import TaTransition from '../transition/index.vue'

  import type Ta from '../types'

  import { computed } from 'vue'
  import { GLOB_COMPONENT_CLASS_PREFIX } from '../constant'
  /**
   * 基础类名
   */
  const basicClass = `${GLOB_COMPONENT_CLASS_PREFIX}-overlay`

  const emit = defineEmits(['click', 'touchmove'])
  const props = defineProps({
    /**
     * 是否展示遮罩层
     */
    show: {
      type: Boolean,
      default: () => false,
    },
    /**
     * z-index 层级
     */
    zIndex: {
      type: [Number, String],
      default: () => 1,
    },
    /**
     * 动画时长，单位为毫秒
     */
    duration: {
      type: [Number, Object] as PropType<number | Ta.TransitionPropsDuration>,
      default: () => 300,
    },
    /**
     * 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动
     */
    lockScroll: {
      type: Boolean,
      default: () => true,
    },
    /**
     * 是否从页面中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= 2.25.2
     */
    rootPortal: {
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

  const onClick = () => {
    emit('click')
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
