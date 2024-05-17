<template>
  <div class="card-project">
    <div class="name-wrapper">
      <div class="iconimg iconimg-subsidy"></div>
      <div class="name">转发财政部 国家卫生健康委</div>
    </div>
    <div class="cells">
      <div class="cell">
        <div class="key">补贴对象：</div>
        <div class="value">全区实施草原奖补政策范围内所有县（区、市)、乡镇、村（居）及牧户</div>
      </div>
      <div class="cell">
        <div class="key">补贴标准：</div>
        <div class="value">禁牧补助每亩每年7.5元，草畜平衡奖励每亩每年2.5元</div>
      </div>
      <div class="cell">
        <div class="key">执行年限：</div>
        <div class="value">2018-2026年</div>
      </div>
      <div class="cell">
        <div class="key">更新时间：</div>
        <div class="value">2024年5月14日</div>
      </div>
    </div>
    <div class="button">查看详情</div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    /**
     * 渲染内容
     */
    renderData: {
      type: Object,
      required: false
    }
  })
</script>

<style lang="scss" scoped>
  .card-project {
    width: 100%;
    position: relative;
    padding: 0 $spacing;
    background-color: #fff;
    border-radius: 8rpx;
    .name-wrapper {
      display: flex;
      align-items: center;
      border-bottom: solid 1px rgba($color-primary, 0.1);
      position: relative;
      z-index: 2;
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
    }
    .cells {
      position: relative;
      z-index: 2;
      padding: 20rpx 0;
      .cell {
        display: flex;
        line-height: 1.4;
        font-size: 24rpx;
        margin-bottom: 12rpx;
        .key {
          color: rgba($color-text, 0.6);
        }
        .value {
          flex: 1;
          overflow: hidden;
          color: $color-text;
        }
      }
    }
    .button {
      border-top: solid 1px rgba($color-primary, 0.1);
      line-height: 80rpx;
      font-size: 28rpx;
      text-align: center;
      color: $color-primary;
    }
  }
</style>
