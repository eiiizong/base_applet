<template>
  <view :class="rootClass" :style="rootStyle">
    <ta-info v-if="info !== null || dot" :dot="dot" :info="info" custom-class="van-icon__info info-class" />
    <image v-if="isImage" :src="name" mode="aspectFit" :class="basicClass + '__image'" />
  </view>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'

  import { GLOB_COMPONENT_CLASS_PREFIX } from '../constant'

  /**
   * 基础类名
   */
  const basicClass = GLOB_COMPONENT_CLASS_PREFIX + '-icon'

  const emit = defineEmits(['click'])
  const props = defineProps({
    /**
     * 图标名称或图片链接
     */
    name: {
      type: String,
      default: '',
    },
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
     * 图标颜色
     */
    color: {
      type: String,
      default: 'inherit',
    },
    /**
     * 图标大小，如 20px，2em，默认单位为px
     */
    size: {
      type: [String, Number],
      default: 'inherit',
    },
    /**
     * 自定义样式
     */
    customStyle: {
      type: String,
      default: '',
    },
    /**
     * 自定义样式
     */
    customClass: {
      type: String,
      default: '',
    },
    /**
     * 类名前缀
     */
    classPrefix: {
      type: String,
      default: GLOB_COMPONENT_CLASS_PREFIX + '-icon',
    },
  })

  /**
   * 动态获取判断是否为图片
   */
  const isImage = computed(() => {
    const { name } = props
    return name.indexOf('/') !== -1
  })

  /**
   * 动态设置根标签类名
   */
  const rootClass = computed(() => {
    const { name, classPrefix, customClass } = props
    const classes: string[] = []

    if (customClass) {
      classes.push(customClass)
    }

    if (classPrefix !== basicClass) {
      classes.push(basicClass + '--custom')
    }

    if (classPrefix != null) {
      classes.push(classPrefix)
    }

    if (isImage.value) {
      classes.push(basicClass + '--image')
    } else if (classPrefix != null) {
      classes.push(classPrefix + '-' + name)
    }

    return classes.join(' ')
  })

  /**
   * 动态设置根标签样式
   */
  const rootStyle = computed(() => {
    let str = ''
    const { customStyle } = props
    if (customStyle) {
      str += `${customStyle}`
    }
    return str
  })
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;
  @use './font';

  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .#{$namespace}-icon {
    &--custom {
      position: relative;
    }

    &--image {
      width: 1em;
      height: 1em;
    }

    &__image {
      width: 100%;
      height: 100%;
    }

    &__info {
      z-index: 1;
    }
  }
</style>
