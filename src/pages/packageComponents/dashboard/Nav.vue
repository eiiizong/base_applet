<template>
  <view class="demo-home-nav">
    <view class="demo-home-nav__title">{{ renderData.groupName }}</view>
    <view class="demo-home-nav__group">
      <view
        v-for="(item, index) in renderData.list"
        :key="index"
        class="demo-home-nav__block"
        :class="item.path ? '' : 'demo-home-nav__block-disabled'"
        @click="onClick(item.path)"
      >
        <text>{{ item.title }}</text>
        <ta-icon name="arrow" class="demo-home-nav__icon" />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue'
  import type { NavItem } from './type'

  const props = defineProps({
    /**
     * 渲染数据
     */
    renderData: {
      type: Object as PropType<NavItem>,
      required: true,
    },
  })

  /**
   * 点击跳转路由
   */
  const onClick = (path: string) => {
    if (path) {
      const url = `/pages/packageComponents/${path}/${path}`
      uni.navigateTo({
        url,
      })
    } else {
      uni.showToast({
        title: '暂未开发完成，敬请期待！！！',
        icon: 'none',
      })
    }
  }
</script>

<style lang="scss" scoped>
  .demo-home-nav {
    &__title {
      margin: 48rpx 0 16rpx 32rpx;
      color: rgba(69, 90, 100, 0.6);
      font-size: 28rpx;
    }
    &__block {
      position: relative;
      display: flex;
      margin: 0 0 24rpx;
      padding-left: 40rpx;
      color: #323233;
      font-weight: 500;
      font-size: 28rpx;
      line-height: 80rpx;
      background: #f7f8fa;
      border-radius: 99px;
      transition: background 0.3s;
      &:hover {
        background: darken(#f7f8fa, 3%);
      }
      &:active {
        background: darken(#f7f8fa, 6%);
      }
      &-disabled {
        opacity: 0.6;
      }
    }
    &__icon {
      position: absolute !important;
      top: 50%;
      right: 32rpx;
      width: 32rpx;
      height: 32rpx;
      margin-top: -16px;
      color: rgb(182, 195, 210);
      font-weight: 900 !important;
    }
  }
</style>
