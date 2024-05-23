<template>
  <view
    v-if="isShow"
    ref="ani"
    :animation="animationData"
    :class="customClass"
    :style="transformStyles"
    @click="onClick"
  >
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue'

  import { createAnimation } from './createAnimation'

  /**
   * 内置过渡动画类型
   *
   * fade 渐隐渐出过渡
   *
   * slide-top 由上至下过渡
   *
   * slide-right 由右至左过渡
   *
   * slide-bottom 由下至上过渡
   *
   * slide-left 由左至右过渡
   *
   * zoom-in 由小到大过渡
   *
   * zoom-out 由大到小过渡
   */
  type Mode = 'fade' | 'slide-top' | 'slide-right' | 'slide-bottom' | 'slide-left' | 'zoom-in' | 'zoom-out'

  const emit = defineEmits(['click', 'change'])
  const props = defineProps({
    /**
     * 控制组件显示或隐藏
     */
    show: {
      type: Boolean,
      default: false
    },
    /**
     * 内置过渡动画类型
     */
    modeClass: {
      type: [Array as PropType<Mode[]>, String as PropType<Mode>],
      default: () => 'fade'
    },
    /**
     * 过渡动画持续时间，单位ms
     */
    duration: {
      type: Number,
      default: () => 300
    },
    /**
     * 组件样式，同 css 样式，注意带’-‘连接符的属性需要使用小驼峰写法如：backgroundColor:red
     */
    styles: {
      type: Object,
      default: () => {
        return {}
      }
    },
    /**
     * 自定义类名
     */
    customClass: {
      type: String,
      default: () => ''
    }
  })

  const isShow = ref(false)
  const transform = ref('')
  const opacity = ref(1)
  const animationData = ref({})
  const durationTime = ref(300)
  const config = ref({})
  const timer = ref<NodeJS.Timeout | null>(null)
  const animation = ref<any>(null)

  const toLine = (name: string) => {
    return name.replace(/([A-Z])/g, '-$1').toLowerCase()
  }
  /**
   * 生成样式数据
   */
  const stylesObject = computed(() => {
    let transform = ''
    const { styles, duration } = props
    let _styles = {
      ...styles,
      'transition-duration': duration / 1000 + 's'
    }

    for (let i in _styles) {
      let line = toLine(i)
      transform += line + ':' + _styles[i] + ';'
    }
    return transform
  })

  /**
   * 初始化动画条件
   */
  const transformStyles = computed(() => {
    return 'transform:' + transform.value + ';' + 'opacity:' + opacity.value + ';' + stylesObject.value + ';'
  })

  /**
   * ref 触发 初始化动画
   */
  const init = (obj: { duration?: number } = {}) => {
    if (obj.duration) {
      durationTime.value = obj.duration
    }
    animation.value = createAnimation(Object.assign(config.value, obj), this)
  }

  /**
   * 处理动画开始前的默认样式
   */
  const styleInit = (type: string) => {
    let styles = {
      transform: ''
    }
    let buildStyle = (type, mode) => {
      if (mode === 'fade') {
        styles.opacity = animationType(type)[mode]
      } else {
        styles.transform += animationType(type)[mode] + ' '
      }
    }
    if (typeof this.modeClass === 'string') {
      buildStyle(type, this.modeClass)
    } else {
      this.modeClass.forEach((mode) => {
        buildStyle(type, mode)
      })
    }
    return styles
  }

  /**
   * 开始过渡动画
   */
  const open = () => {
    timer.value && clearTimeout(timer.value)
    transform.value = ''
    isShow.value = true
    let { opacity, transform } = styleInit(false)
    if (typeof opacity !== 'undefined') {
      this.opacity = opacity
    }
    this.transform = transform
    // 确保动态样式已经生效后，执行动画，如果不加 nextTick ，会导致 wx 动画执行异常
    this.$nextTick(() => {
      // TODO 定时器保证动画完全执行，目前有些问题，后面会取消定时器
      this.timer = setTimeout(() => {
        this.animation = createAnimation(this.config, this)
        this.tranfromInit(false).step()
        this.animation.run()
        this.$emit('change', {
          detail: this.isShow
        })
      }, 20)
    })
  }

  /**
   * 关闭过渡动画
   */
  const close = () => {
    //
  }

  watch(
    () => props.show,
    (val) => {
      if (val) {
        open()
      } else {
        // 避免上来就执行 close,导致动画错乱
        if (isShow.value) {
          close()
        }
      }
    },
    {
      immediate: true
    }
  )

  onBeforeMount(() => {
    const { duration } = props
    // 动画默认配置
    config.value = {
      duration,
      timingFunction: 'ease',
      transformOrigin: '50% 50%',
      delay: 0
    }
    durationTime.value = duration
  })

  defineExpose({
    init
  })
</script>

<style lang="scss" scoped></style>
