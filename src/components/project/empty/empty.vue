<template>
  <div class="empty">
    <image class="image" :class="['type-' + type]" :src="iconSrc" v-if="iconSrc" alt="" />
    <div class="desc">{{ description }}</div>
  </div>
</template>

<script setup lang="ts">
  import imageIcon01 from './images/icon-01.png'
  import imageIcon02 from './images/icon-02.png'

  const props = defineProps({
    /**
     * 自定义描述内容
     */
    description: {
      type: String,
      default: () => '暂无相关数据'
    },
    /**
     * 图片类型 1 2
     */
    type: {
      type: String,
      default: () => '1'
    }
  })

  const iconSrc = computed(() => {
    const { type } = props
    if (type === '1') {
      return imageIcon01
    }
    if (type === '2') {
      return imageIcon02
    }
    return ''
  })
</script>

<style lang="scss" scoped>
  .empty {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding-top: $spacing;
    box-sizing: border-box;
    .image {
      width: 320rpx;
      height: 320rpx;
      margin: auto;
      &.type-2 {
        width: 226rpx;
        height: 190rpx;
      }
    }
    .desc {
      font-size: 24rpx;
      line-height: 1.4;
      color: $color-text-placeholder;
    }
  }
</style>
