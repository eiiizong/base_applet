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
   * 动态获取根标签类名
   */
  const rootClass = computed(() => {
    const classes: string[] = ['custom-class']

    const { name, classPrefix } = props

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
   * 动态获取根标签样式
   */
  const rootStyle = computed(() => {
    let str = ''
    return str
  })
</script>

<style lang="scss" scoped></style>