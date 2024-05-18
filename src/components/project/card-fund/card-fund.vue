<template>
  <div class="card-fund">
    <div class="name-wrapper">
      <div class="iconimg iconimg-subsidy"></div>
      <div class="name">残疾人生活补贴和重度残疾人护理补贴</div>
    </div>
    <div class="cells">
      <div class="cell">
        <div class="key">业务状态：</div>
        <div class="value">张三</div>
      </div>
      <div class="cell">
        <div class="key">姓名：</div>
        <div class="value">张三</div>
      </div>
      <div class="cell">
        <div class="key">身份证号：</div>
        <div class="value">510902222222222222</div>
      </div>
      <div class="cell">
        <div class="key">银行卡号：</div>
        <div class="value">8232323232323232323232</div>
      </div>
      <div class="cell">
        <div class="key">发放金额：</div>
        <div class="value primary">800元</div>
      </div>
      <div class="cell">
        <div class="key">发放期号：</div>
        <div class="value primary">202223</div>
      </div>
      <div class="cell">
        <div class="key">经办时间：</div>
        <div class="value primary">2024-3-2 16:25:26</div>
      </div>
      <div class="cell">
        <div class="key">经办部门：</div>
        <div class="value primary">安多县残联</div>
      </div>
      <div class="cell">
        <div class="key">实发时间：</div>
        <div class="value primary">2024-3-15 16:25:51</div>
      </div>
    </div>
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
  .card-fund {
    width: 100%;
    position: relative;
    padding: 0 $spacing;
    background-color: #ffffff;
    box-shadow: 0rpx 2rpx 24rpx 0rpx rgba(8, 76, 192, 0.15);
    border-radius: 32rpx;
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
  }
</style>
