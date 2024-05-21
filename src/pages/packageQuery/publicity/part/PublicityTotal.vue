<template>
  <div class="publicity-total">
    <div class="left">
      <div class="item">
        <div class="key">补贴总金额</div>
        <div class="value">
          <div class="val">{{ renderData.totalMoney || 0 }}</div>
          <div class="unit">万元</div>
        </div>
        <image class="image" :src="image01"></image>
      </div>
    </div>
    <div class="right">
      <div class="item">
        <div class="key">补贴项目数</div>
        <div class="value">{{ renderData.projectNum || 0 }}</div>
        <image class="image" :src="image02"></image>
      </div>
      <div class="item">
        <div class="key">覆盖户(人数)</div>
        <div class="value">
          <div class="val">{{ renderData.totalPerson || 0 }}</div>
          <div class="unit">万人</div>
        </div>
        <image class="image" :src="image03"></image>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import image01 from '../images/01.png'
  import image02 from '../images/02.png'
  import image03 from '../images/03.png'

  import type { PropType } from 'vue'
  import type { GetAllSummaryStatisticsBaseVo } from '@/server/types'

  const props = defineProps({
    /**
     * 渲染数据
     */
    renderData: {
      type: Object as PropType<GetAllSummaryStatisticsBaseVo>,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  @use 'sass:math';
  $item-height: 150rpx;
  $color1: #436efe;
  $color2: #ff6853;
  $color3: #00c290;
  .publicity-total {
    width: 100%;
    padding: $spacing;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    .item {
      width: 100%;
      white-space: nowrap;
      position: relative;
      padding: $spacing;
      box-sizing: border-box;
      border-radius: 12rpx;
      height: $item-height;
      background-image: linear-gradient(to bottom, rgba($color1, 0.2), #fff);
      .image {
        position: absolute;
        right: $spacing;
        bottom: 20rpx;
        width: 140rpx;
        height: 172rpx;
      }
      .key {
        font-size: 30rpx;
        line-height: 1;
        color: rgba($color-text, 1);
        font-weight: 500;
      }
      .value {
        color: $color1;
        font-weight: 700;
        font-size: 36rpx;
        line-height: 1;
        padding-top: 20rpx;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        .val {
          font-weight: 700;
        }

        .unit {
          font-size: 26rpx;
          line-height: 1;
          padding-left: 4rpx;
          box-sizing: border-box;
          color: rgba($color-text, 0.6);
        }
      }
      &:last-child {
        border-right: 0;
      }
    }
    .left {
      flex: 1;
      overflow: hidden;
      .item {
        height: 2 * $item-height + 20rpx;
      }
    }
    .right {
      width: math.div((750rpx - $spacing * 2), 2) - 10rpx;
      margin-left: 20rpx;
      .item {
        background-image: linear-gradient(to bottom, rgba($color2, 0.2), #fff);
        margin-bottom: 20rpx;
        .value {
          color: $color2;
        }
        .image {
          width: 90rpx;
          height: 100rpx;
        }
        &:last-child {
          background-image: linear-gradient(to bottom, rgba($color3, 0.2), #fff);
          margin-bottom: 0;
          .value {
            color: $color3;
          }
          .image {
            width: 90rpx;
            height: 74rpx;
          }
        }
      }
    }
  }
</style>
