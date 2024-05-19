<template>
  <div class="fund-total">
    <div class="item">
      <image class="image" :src="imageIcon01"></image>
      <div class="info">
        <div class="key">发放总金额(元)</div>
        <div class="value">{{ renderData.totalMoney || 0 }}</div>
      </div>
    </div>
    <div class="item">
      <image class="image" :src="imageIcon02"></image>
      <div class="info">
        <div class="key">发放总次数</div>
        <div class="value">{{ renderData.totalTime || 0 }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue'
  import imageIcon01 from '../images/icon-01.png'
  import imageIcon02 from '../images/icon-02.png'

  import type { GetSelfFundCollectDataApiSuccessResponse } from '@/server/types'

  const props = defineProps({
    /**
     * 渲染数据
     */
    renderData: {
      type: Object as PropType<GetSelfFundCollectDataApiSuccessResponse>,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .fund-total {
    width: 100%;
    border-radius: 16rpx;
    background-color: rgba($color-primary, 0.2);
    display: flex;
    padding: $spacing 0;
    display: flex;
    align-items: center;
    .item {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      position: relative;
      border-right: 1px dashed rgba($color-primary, 0.6);
      .image {
        width: 56rpx;
        height: 56rpx;
        border-radius: 50%;
        background-color: #fff;
      }
      .info {
        padding-left: $spacing;
        .key {
          font-size: 24rpx;
          line-height: 1;
          color: rgba($color-text, 0.6);
        }
        .value {
          color: $color-text;
          font-weight: 700;
          font-size: 30rpx;
          line-height: 1;
          padding-top: 10rpx;
        }
      }
      &:last-child {
        border-right: 0;
      }
    }
  }
</style>
