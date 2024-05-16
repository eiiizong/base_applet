<template>
  <div class="card-policy">
    <div class="name">转发财政部 国家卫生健康委 国家医疗保障局 国家中医药局关于印发基本公共卫生服务等5项补...</div>
    <div class="cells">
      <div class="cell">
        <div class="key">业务部门：</div>
        <div class="value">区卫健委</div>
      </div>
      <div class="cell">
        <div class="key">补贴项目：</div>
        <div class="value">计划生育家庭特别扶助制度扶助</div>
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
  .panel {
    width: 690rpx;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 8rpx;
    overflow: hidden;
    margin: 0 auto;
    padding: 0 $spacing;
    .title-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 32rpx;
      font-weight: 700;
      line-height: 1;
      color: $color-text;
      padding-top: $spacing;
      .line {
        width: 8rpx;
        height: 32rpx;
        background-color: $color-primary;
        border-radius: 2rpx;
        margin-right: 10rpx;
      }
      .title {
        flex: 1;
        overflow: hidden;
        display: flex;
        align-items: center;
      }
      .more {
        font-size: 24rpx;
        font-weight: 500;
        color: $color-primary;
      }
    }
    .con {
      padding: $spacing 0;
    }
  }
</style>
