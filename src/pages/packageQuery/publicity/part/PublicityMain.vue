<template>
  <div class="publicity-main">
    <div class="title">按项目统计</div>
    <div class="toolbar">
      <picker class="picker"></picker>
      <picker class="picker"></picker>
      <picker class="picker"></picker>
    </div>
    <div class="main">
      <scroll-view class="scroll-view tool" scroll-y>
        <div class="item" v-for="item in 20" :key="item">{{ '农业农村局' + item }}</div>
      </scroll-view>
      <scroll-view class="scroll-view result" scroll-y>
        <div class="total">
          <div class="card">
            <div class="value">66666</div>
            <div class="unit">万元</div>
            <div class="key">涉及金额</div>
          </div>
          <div class="card">
            <div class="value">66666</div>
            <div class="unit">人</div>
            <div class="key">覆盖户(人数)</div>
          </div>
        </div>
        <div class="items">
          <div class="item" v-for="item in 20" :key="item">
            <ComponentCardProjectTotal></ComponentCardProjectTotal>
          </div>
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ComponentCardProjectTotal from '@/components/project/card-project-total/card-project-total.vue'
</script>

<style lang="scss" scoped>
  .publicity-main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .main {
      flex: 1;
      overflow: hidden;
      display: flex;
      .tool {
        width: 240rpx;
        background-color: #fff;
        padding-top: $spacing;
        .item {
          width: 100%;
          font-size: 28rpx;
          line-height: 1;
          padding: 20rpx 10rpx;
          text-align: center;
          margin-bottom: 20rpx;
          border-radius: 8rpx;
          transition: all 0.3s;
          &.checked {
            background-color: rgba($color-primary, 0.2);
          }
        }
      }
    }
    .scroll-view {
      height: 100%;
      overflow: hidden;

      box-sizing: border-box;
      &.result {
        flex: 1;
      }
    }
    .result {
      padding-left: $spacing;
      .total {
        display: flex;
        align-items: center;
        font-size: 28rpx;
        padding-right: $spacing;
        .card {
          width: 50%;
          background-color: $color-primary;
          padding: $spacing;
          border-radius: 8rpx;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 24rpx;
          line-height: 1;
          .util {
            width: 100rpx;
            line-height: 40rpx;
            text-align: center;
            margin: 20rpx 0;
          }
        }
      }
      .items {
        padding-right: $spacing;
        padding-top: 20rpx;
        .item {
          margin-bottom: 20rpx;
        }
      }
    }
  }
</style>
