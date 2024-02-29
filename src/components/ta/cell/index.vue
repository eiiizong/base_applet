<template>
  <view
    :class="rootClass"
    :hover-class="basicClass + '--hover hover-class'"
    hover-stay-time="70"
    :content-style-type="customStyle"
    @click="onClick"
  >
    <ta-icon
      v-if="icon"
      :name="icon"
      :class="basicClass + '__left-icon-wrap'"
      :custom-class="basicClass + '__left-icon'"
    />
    <slot v-else name="icon" />

    <view :style="titleStyle" :class="basicClass + '__title title-class'">
      <block v-if="title">{{ title }}</block>
      <slot v-else name="title" />

      <view v-if="label || useLabelSlot" :class="basicClass + '__label label-class'">
        <slot v-if="useLabelSlot" name="label" />
        <block v-else-if="label">{{ label }}</block>
      </view>
    </view>

    <view :class="basicClass + '__value value-class'">
      <block v-if="value">{{ value }}</block>
      <slot v-else />
    </view>

    <ta-icon
      v-if="isLink"
      :name="arrowDirection ? 'arrow-' + arrowDirection : 'arrow'"
      :class="basicClass + '__right-icon-wrap right-icon-class'"
      :custom-class="basicClass + '__right-icon'"
    />
    <slot v-else name="right-icon" />

    <slot name="extra" />
  </view>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue'
  import { computed } from 'vue'

  import { bem } from '../utils'
  import { GLOB_COMPONENT_CLASS_PREFIX } from '../constant'
  /**
   * 基础类名
   */
  const basicClass = `${GLOB_COMPONENT_CLASS_PREFIX}-cell`
  const emit = defineEmits(['click'])
  const props = defineProps({
    /**
     * 左侧图标名称或图片链接，可选值见 Icon 组件
     */
    icon: {
      type: String,
      default: () => '',
    },
    /**
     * 左侧标题
     */
    title: {
      type: String,
      default: () => '',
    },
    /**
     * 标题宽度，须包含单位 rpx
     */
    titleWidth: {
      type: String,
      default: () => '',
    },
    /**
     * 右侧内容
     */
    value: {
      type: String,
      default: () => '',
    },
    /**
     * 标题下方的描述信息
     */
    label: {
      type: String,
      default: () => '',
    },
    /**
     * 单元格大小，可选值为 large
     */
    size: {
      type: String as PropType<'' | 'large'>,
      default: () => '',
    },
    /**
     * 是否显示下边框
     */
    border: {
      type: Boolean,
      default: () => true,
    },
    /**
     * 是否使内容垂直居中
     */
    center: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 点击后跳转的链接地址
     */
    url: {
      type: String,
      default: () => '',
    },
    /**
     * 链接跳转类型，可选值为 redirectTo switchTab reLaunch
     */
    linkType: {
      type: String as PropType<'redirectTo' | 'switchTab' | 'reLaunch' | 'navigateTo'>,
      default: () => 'navigateTo',
    },
    /**
     * 是否开启点击反馈
     */
    clickable: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 是否展示右侧箭头并开启点击反馈
     */
    isLink: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 是否显示表单必填星号
     */
    required: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 箭头方向，可选值为 left up down
     */
    arrowDirection: {
      type: String as PropType<'' | 'left' | 'up' | 'down'>,
      default: () => '',
    },
    /**
     * 是否使用 label slot
     */
    useLabelSlot: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 标题样式
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

  /**
   * 动态设置根标签类名
   */
  const rootClass = computed(() => {
    const { size, center, customClass, required, border, isLink, clickable } = props
    let str = ''
    str += bem('cell', [size, { center, required, borderless: !border, clickable: isLink || clickable }])
    if (customClass) {
      str += ` ${customClass}`
    }
    return str
  })

  /**
   * 动态设置根标签类名
   */
  const titleStyle = computed(() => {
    const { titleWidth, titleStyle } = props
    let str = ''

    if (titleWidth) {
      str += `width: ${titleWidth}; `
    }

    if (titleStyle) {
      str += ` ${titleStyle}`
    }
    return str
  })

  const onClick = () => {
    emit('click')
  }
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;

  .#{$namespace}-cell {
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: var(--cell-vertical-padding, $cell-vertical-padding)
      var(--cell-horizontal-padding, $cell-horizontal-padding);
    font-size: var(--cell-font-size, $cell-font-size);
    line-height: var(--cell-line-height, $cell-line-height);
    color: var(--cell-text-color, $cell-text-color);
    background-color: var(--cell-background-color, $cell-background-color);

    &::after {
      // .hairline-bottom(@border-color, @padding-md, @padding-md);
    }

    &--borderless::after {
      display: none;
    }

    &-group {
      background-color: var(--cell-background-color, $cell-background-color);
    }

    &__label {
      margin-top: var(--cell-label-margin-top, $cell-label-margin-top);
      font-size: var(--cell-label-font-size, $cell-label-font-size);
      line-height: var(--cell-label-line-height, $cell-label-line-height);
      color: var(--cell-label-color, $cell-label-color);
    }

    &__value {
      overflow: hidden;
      text-align: right;
      vertical-align: middle;
      color: var(--cell-value-color, $cell-value-color);
    }

    &__title,
    &__value {
      flex: 1;

      &:empty {
        display: none;
      }
    }

    &__left-icon-wrap,
    &__right-icon-wrap {
      display: flex;
      align-items: center;
      height: var(--cell-line-height, $cell-line-height);
      font-size: var(--cell-icon-size, $cell-icon-size);
    }

    &__left-icon-wrap {
      margin-right: var(--padding-base, $padding-base);
    }

    &__right-icon-wrap {
      margin-left: var(--padding-base, $padding-base);
      color: var(--cell-right-icon-color, $cell-right-icon-color);
    }

    &__left-icon {
      vertical-align: middle;
      line-height: var(--cell-line-height, $cell-line-height);
    }

    &__right-icon {
      line-height: var(--cell-line-height, $cell-line-height);
    }

    &--clickable,
    &--hover {
      background-color: var(--cell-active-color, $cell-active-color);
    }

    &--required {
      overflow: visible;

      &::before {
        position: absolute;
        content: '*';
        left: var(--padding-xs, $padding-xs);
        font-size: var(--cell-font-size, $cell-font-size);
        color: var(--cell-required-color, $cell-required-color);
      }
    }

    &--center {
      align-items: center;
    }

    &--large {
      padding-top: var(--cell-large-vertical-padding, $cell-large-vertical-padding);
      padding-bottom: var(--cell-large-vertical-padding, $cell-large-vertical-padding);

      .#{$namespace}-cell {
        &__title {
          font-size: var(--cell-large-title-font-size, $cell-large-title-font-size);
        }

        &__value {
          font-size: var(--cell-large-value-font-size, $cell-large-value-font-size);
        }

        &__label {
          font-size: var(--cell-large-label-font-size, $cell-large-label-font-size);
        }
      }
    }
  }
</style>
