<template>
  <div class="publicity-main">
    <div class="title">按项目统计</div>
    <div class="toolbar">
      <picker class="picker">
        <div class="picker-value" v-if="false"></div>
        <div class="picker-placeholder" v-else>请选择区县</div>
        <div class="picker-icon">
          <ta-icon name="arrow-down" size="28rpx"></ta-icon>
        </div>
      </picker>
      <picker class="picker">
        <div class="picker-value" v-if="false"></div>
        <div class="picker-placeholder" v-else>请选择乡镇</div>
        <div class="picker-icon">
          <ta-icon name="arrow-down" size="28rpx"></ta-icon>
        </div>
      </picker>
      <picker class="picker">
        <div class="picker-value" v-if="false"></div>
        <div class="picker-placeholder" v-else>请选择年月</div>
        <div class="picker-icon">
          <ta-icon name="arrow-down" size="28rpx"></ta-icon>
        </div>
      </picker>
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
  $color1: #436efe;
  $color2: #ff6853;
  .publicity-main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 32rpx;
      line-height: 1;
      color: $color-text;
      padding-left: $spacing;
      padding-bottom: $spacing;
      font-weight: 700;
    }
    .toolbar {
      background-color: $color-primary;
      border-top-left-radius: 32rpx;
      border-top-right-radius: 32rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: $spacing;
      .picker {
        width: 30%;
        line-height: 1;
        background-color: #fff;
        border-radius: 8rpx;
        position: relative;
        &-value,
        &-placeholder {
          line-height: 40rpx;
          padding: 10rpx;
          font-size: 28rpx;
          width: 100%;
          padding-right: 30rpx;
        }
        &-icon,
        &-placeholder {
          color: rgba($color-text, 0.6);
        }
        &-icon {
          position: absolute;
          top: 50%;
          right: 10rpx;
          transform: translateY(-50%);
        }
      }
    }
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
      padding-top: $spacing;
      .total {
        display: flex;
        align-items: center;
        font-size: 28rpx;
        padding-right: $spacing;
        .card {
          flex: 1;
          overflow: hidden;
          background-color: rgba($color2, 1);
          padding: $spacing;
          border-radius: 8rpx;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 24rpx;
          line-height: 1;
          margin-right: 20rpx;
          .value {
            font-size: 32rpx;
            font-weight: 700;
          }
          .unit {
            width: 100rpx;
            line-height: 40rpx;
            text-align: center;
            margin: 20rpx 0;
            background-color: rgba(#fff, 0.2);
            font-size: 24rpx;
            border-radius: 50px;
          }
          .key {
            font-size: 26rpx;
            line-height: 1;
          }
          &:last-child {
            margin-right: 0;
            background-color: rgba($color1, 1);
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
