<template>
  <view :class="rootClass">
    <van-sticky
      disabled="{{ !sticky }}"
      z-index="{{ zIndex }}"
      offset-top="{{ offsetTop }}"
      container="{{ container }}"
      bind:scroll="onTouchScroll"
    >
      <view
        class="{{ utils.bem('tabs--') + type }} {{ utils.bem('tabs__wrap', { scrollable }) }} {{ type === 'line' && border ? 'van-hairline--top-bottom' : '' }} wrap-class"
      >
        <slot name="nav-left" />

        <scroll-view
          scroll-x="{{ scrollable }}"
          scroll-with-animation="{{ scrollWithAnimation }}"
          scroll-left="{{ scrollLeft }}"
          class="{{ utils.bem('tabs__scroll', [type]) }}"
          style="{{ color ? 'border-color: ' + color : '' }}"
        >
          <view
            class="{{ utils.bem('tabs__nav', [type, { complete: !ellipsis }]) }} nav-class"
            style="{{ computed.navStyle(color, type) }}"
          >
            <view
              wx:if="{{ type === 'line' }}"
              class="van-tabs__line"
              style="{{ computed.lineStyle({ color, lineOffsetLeft, lineHeight, skipTransition, duration, lineWidth, inited }) }}"
            />
            <view
              wx:for="{{ tabs }}"
              wx:key="index"
              data-index="{{ index }}"
              class="{{ computed.tabClass(index === currentIndex, ellipsis) }} {{ utils.bem('tab', { active: index === currentIndex, disabled: item.disabled, complete: !ellipsis }) }}"
              style="{{ computed.tabStyle({ active: index === currentIndex, ellipsis, color, type, disabled: item.disabled, titleActiveColor, titleInactiveColor, swipeThreshold, scrollable }) }}"
              bind:tap="onTap"
            >
              <view class="{{ ellipsis ? 'van-ellipsis' : '' }}" style="{{ item.titleStyle }}">
                {{ item.title }}
                <van-info
                  wx:if="{{ item.info !== null || item.dot }}"
                  info="{{ item.info }}"
                  dot="{{ item.dot }}"
                  custom-class="van-tab__title__info"
                />
              </view>
            </view>
          </view>
        </scroll-view>

        <slot name="nav-right" />
      </view>
    </van-sticky>

    <view
      class="van-tabs__content"
      bind:touchstart="onTouchStart"
      bind:touchmove="onTouchMove"
      bind:touchend="onTouchEnd"
      bind:touchcancel="onTouchEnd"
    >
      <view
        class="{{ utils.bem('tabs__track', [{ animated }]) }} van-tabs__track"
        style="{{ computed.trackStyle({ duration, currentIndex, animated }) }}"
      >
        <slot />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue'

  import { computed } from 'vue'

  import { bem } from '../utils'

  const emit = defineEmits(['click'])
  const props = defineProps({
    /**
     * 样式风格，可选值为card
     */
    type: {
      type: String as PropType<'card' | 'line'>,
      default: () => 'line',
    },
    /**
     * 标签主题色
     */
    color: {
      type: String,
      default: () => '#ee0a24',
    },
    /**
     * 当前选中标签的标识符
     */
    active: {
      type: [String, Number],
      default: () => '0',
    },
    /**
     * 动画时间，单位秒
     */
    duration: {
      type: Number,
      default: () => 0.3,
    },
    /**
     * 底部条宽度，默认单位rpx
     */
    lineWidth: {
      type: [Number, String],
      default: () => '80rpx',
    },
    /**
     * 底部条高度，默认单位rpx
     */
    lineHeight: {
      type: [Number, String],
      default: () => '6rpx',
    },
    /**
     * 是否开启切换标签内容时的转场动画
     */
    animated: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 是否展示外边框，仅在 line 风格下生效
     */
    border: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 是否省略过长的标题文字
     */
    ellipsis: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 是否使用粘性定位布局
     */
    sticky: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 是否开启手势滑动切换
     */
    swipeable: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 是否开启标签页内容延迟渲染
     */
    lazyRender: {
      type: Boolean,
      default: () => true,
    },
    /**
     * 粘性定位布局下与顶部的最小距离，单位rpx
     */
    offsetTop: {
      type: Number,
      default: () => 0,
    },
    /**
     * 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动
     */
    swipeThreshold: {
      type: Number,
      default: () => 5,
    },
    /**
     * 标题选中态颜色
     */
    titleActiveColor: {
      type: String,
      default: () => '',
    },
    /**
     * 标题默认态颜色
     */
    titleInactiveColor: {
      type: String,
      default: () => '',
    },
    /**
     * z-index 层级
     */
    zIndex: {
      type: Number,
      default: () => 1,
    },
    /**
     * 是否开启切换前校验
     */
    useBeforeChange: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 自定义样式
     */
    customStyle: {
      type: String,
      default: () => '',
    },
    /**
     * 根节点样式类
     */
    customClass: {
      type: String,
      default: () => '',
    },
  })

  /**
   * 动态获取根标签类名
   */
  const rootClass = computed(() => {
    const { customClass } = props
    let str = ''
    str += bem('tabs', {})

    if (customClass) {
      str += ` ${customClass}`
    }

    return str
  })
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;
  .#{$namespace}-info {
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
