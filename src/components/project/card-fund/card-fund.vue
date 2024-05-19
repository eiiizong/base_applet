<template>
  <div class="card-fund">
    <div class="name-wrapper">
      <div class="iconimg iconimg-subsidy"></div>
      <div class="name">{{ renderData?.chi031 }}</div>
      <div class="tag" :class="['tag-' + renderData?.crb00k]">
        {{ renderData?.crb00k === '1' ? '已发放' : '发放中' }}
      </div>
    </div>
    <div class="cells">
      <div class="cell">
        <div class="key">姓名：</div>
        <div class="value">{{ renderData?.aac003 }}</div>
      </div>
      <div class="cell">
        <div class="key">身份证号：</div>
        <div class="value">{{ renderData?.aac002 }}</div>
      </div>
      <div class="cell">
        <div class="key">银行卡号：</div>
        <div class="value">{{ renderData?.aae010 }}</div>
      </div>
      <div class="cell">
        <div class="key">发放金额：</div>
        <div class="value primary">{{ renderData?.aae019 || 0 }}元</div>
      </div>
      <div class="cell">
        <div class="key">发放期号：</div>
        <div class="value">{{ renderData?.aae209 }}</div>
      </div>
      <div class="cell">
        <div class="key">经办时间：</div>
        <div class="value">{{ renderData?.aae036 }}</div>
      </div>
      <div class="cell">
        <div class="key">经办部门：</div>
        <div class="value">{{ renderData?.aae017 }}</div>
      </div>
      <div class="cell">
        <div class="key">实发时间：</div>
        <div class="value">{{ renderData?.chb204 }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue'
  import type { GetSubsidyDetailPageListRow } from '@/server/types'

  const props = defineProps({
    /**
     * 渲染内容
     */
    renderData: {
      type: Object as PropType<GetSubsidyDetailPageListRow>,
      required: false
    }
  })
</script>

<style lang="scss" scoped>
  .card-fund {
    width: 100%;
    position: relative;
    padding: 0 $spacing;
    background-color: #ffffff;
    box-shadow: 0rpx 2rpx 24rpx 0rpx rgba(8, 76, 192, 0.15);
    border-radius: 16rpx;
    box-sizing: border-box;
    .name-wrapper {
      display: flex;
      align-items: center;
      border-bottom: solid 1px rgba($color-primary, 0.1);
      position: relative;
      z-index: 2;
      padding-right: 80rpx;
      .iconimg {
        margin-right: 10rpx;
      }
      .name {
        margin: 24rpx 0;
        font-size: 28rpx;
        line-height: 36rpx;
        max-height: 72rpx;
        font-weight: 700;
        color: $color-text;
        @include textOverflow(2);
      }
      .tag {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        font-size: 24rpx;
        line-height: 1;
        padding: 4rpx 8rpx;
        box-sizing: border-box;
        color: #00c290;
        background-color: rgba(#00c290, 0.2);
        border: 1px solid #00c290;
        border-radius: 4rpx;
        &.tag-0 {
          background-color: rgba(#f00, 0.2);
          color: #f00;
          border-color: #f00;
        }
      }
    }
    .cells {
      position: relative;
      z-index: 2;
      padding: 20rpx 0;
      box-sizing: border-box;
      .cell {
        display: flex;
        line-height: 1.4;
        font-size: 24rpx;
        margin-bottom: 20rpx;

        .key {
          color: rgba($color-text, 0.6);
        }
        .value {
          flex: 1;
          overflow: hidden;
          color: $color-text;
          display: flex;
          justify-content: flex-end;
          font-weight: 500;

          &.primary {
            color: $color-primary;
            font-weight: 700;
          }
        }
      }
    }
  }
</style>
