<template>
  <div class="card-project" @click="navigateTo('publicity-details', 'packageQuery')">
    <div class="name-wrapper">
      <div class="name">{{ renderData?.chi031 }}</div>
    </div>
    <div class="cells">
      <div class="cell">
        <div class="value">{{ renderData?.totalMoney }}</div>
        <div class="unit">万元</div>
        <div class="key">涉及金额</div>
      </div>
      <div class="cell">
        <div class="value">{{ renderData?.totalPerson }}</div>
        <div class="unit">人</div>
        <div class="key">覆盖户(人数)</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { navigateTo } from '@/utils/uni'

  import type { PropType } from 'vue'
  import type { GetAllSummaryStatisticsSubsidyCountVo } from '@/server/types'

  const props = defineProps({
    /**
     * 渲染内容
     */
    renderData: {
      type: Object as PropType<GetAllSummaryStatisticsSubsidyCountVo>,
      required: false
    }
  })
</script>

<style lang="scss" scoped>
  $color2: #f00;
  .card-project {
    width: 100%;
    position: relative;
    padding: 0 $spacing;
    background-image: linear-gradient(to bottom, rgba($color-primary, 0.1) 0, #fff 80%);
    background-color: #fff;
    border-radius: 8rpx;
    box-sizing: border-box;
    .name-wrapper {
      padding-top: $spacing;
      .name {
        font-size: 28rpx;
        line-height: 36rpx;
        max-height: 72rpx;
        font-weight: 700;
        color: $color-text;
        @include textOverflow(2);
      }
    }
    .cells {
      display: flex;
      padding: $spacing 0;

      .cell {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 1.4;
        font-size: 24rpx;
        margin-bottom: 12rpx;
        border-right: 1px solid rgba($color-text, 0.1);
        .key {
          color: rgba($color-text, 0.6);
          line-height: 1;
          font-size: 26rpx;
        }
        .unit {
          width: 100rpx;
          border-radius: 40px;
          text-align: center;
          line-height: 40rpx;
          font-size: 24rpx;
          background-color: rgba($color-text, 0.1);
          color: $color-text;
          margin: 20rpx 0;
        }
        .value {
          color: $color-text;
          font-size: 32rpx;
          font-weight: 700;
          line-height: 1;
        }
        &:first-child {
          .value {
            color: $color2;
          }
          .unit {
            background-color: rgba($color2, 0.1);
            color: $color2;
          }
        }
        &:last-child {
          border-right: 0;
        }
      }
    }
  }
</style>
