<template>
  <div class="card-policy">
    <div class="name-wrapper">
      <div class="iconimg iconimg-subsidy"></div>
      <div class="name">转发财政部 国家卫生健康委</div>
    </div>
    <div class="cells">
      <div class="cell">
        <div class="key">业务部门：</div>
        <div class="value">区卫健委</div>
      </div>
      <div class="cell">
        <div class="key">补贴项目：</div>
        <div class="value">计划生育家庭特别扶助制度扶助计划生育家庭特别扶助制度扶助</div>
      </div>
      <div class="cell">
        <div class="key">发布时间：</div>
        <div class="value">2024-5-2</div>
      </div>
      <div class="cell">
        <div class="key">有效期：</div>
        <div class="value">长期有效</div>
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
  .card-policy {
    width: 100%;
    min-height: 214rpx;
    position: relative;
    padding: 0 $spacing;
    .name-wrapper {
      display: flex;
      align-items: center;
      border-bottom: solid 1px rgba($color-primary, 0.2);
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
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      left: 0;
      height: 80px;
      background-image: linear-gradient(180deg, #f6f7f8 0%, #ffffff 100%);
      z-index: 1;
    }
  }
</style>
