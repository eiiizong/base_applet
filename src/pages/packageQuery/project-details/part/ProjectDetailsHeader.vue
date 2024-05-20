<template>
  <div class="project-details-header">
    <div class="bg"></div>
    <div class="card">
      <div class="name">{{ renderData?.chi031 }}</div>
      <div class="cells">
        <div class="cell">
          <div class="key">主管部门：</div>
          <div class="value">{{ renderData?.chi037 }}</div>
        </div>
        <div class="cell">
          <div class="key">更新时间：</div>
          <div class="value">{{ renderData?.updateTime || '暂无' }}</div>
        </div>
      </div>
      <image class="image" :src="imageIcon01"></image>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue'
  import imageIcon01 from '../images/icon-01.png'

  const props = defineProps({
    /**
     * 渲染数据
     */
    renderData: {
      type: Object as PropType<{
        chi031: string
        chi037: string
        updateTime: string
      }>
    }
  })
</script>

<style lang="scss" scoped>
  .project-details-header {
    width: 100%;
    height: 260rpx;
    position: relative;
    .bg {
      width: 100%;
      height: 140rpx;
      background-color: $color-primary;
      border-bottom-left-radius: 80rpx;
      border-bottom-right-radius: 80rpx;
    }
    .card {
      width: 672rpx;
      position: absolute;
      bottom: $spacing;
      left: 50%;
      transform: translateX(-50%);
      background-color: #fff;
      box-shadow: 0 0 8rpx 2rpx rgba(0, 0, 0, 0.1);
      padding: $spacing;
      border-radius: 12rpx;
      box-sizing: border-box;

      .name {
        font-size: 32rpx;
        font-weight: 700;
        color: $color-text;
        line-height: 1;
      }
      .cells {
        padding-top: 20rpx;
        box-sizing: border-box;
      }
      .cell {
        display: flex;
        align-items: center;
        font-size: 26rpx;
        color: $color-text-placeholder;
        line-height: 1.8;
      }
      .image {
        width: 126rpx;
        height: 116rpx;
        position: absolute;
        right: $spacing;
        bottom: $spacing;
      }
    }
  }
</style>
