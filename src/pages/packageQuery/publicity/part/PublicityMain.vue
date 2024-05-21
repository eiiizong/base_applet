<template>
  <div class="publicity-main">
    <div class="title">按项目统计</div>
    <div class="toolbar">
      <picker class="picker">
        <div class="picker-value" v-if="form.chb015">{{ form.chb015 }}</div>
        <div class="picker-placeholder" v-else>请选择区县</div>
        <div class="picker-icon">
          <ta-icon name="arrow-down" size="26rpx"></ta-icon>
        </div>
      </picker>
      <picker class="picker">
        <div class="picker-value" v-if="form.chb017">{{ form.chb017 }}</div>
        <div class="picker-placeholder" v-else>请选择乡镇</div>
        <div class="picker-icon">
          <ta-icon name="arrow-down" size="26rpx"></ta-icon>
        </div>
      </picker>
      <picker class="picker" fields="year" mode="date" start="2000" :end="moment().format('YYYY')">
        <div class="picker-value" v-if="form.year">{{ form.year }}</div>
        <div class="picker-placeholder" v-else>请选择年月</div>
        <div class="picker-icon">
          <ta-icon name="arrow-down" size="26rpx"></ta-icon>
        </div>
      </picker>
    </div>
    <div class="main">
      <scroll-view class="scroll-view tool" scroll-y>
        <div class="item" v-for="item in 20" :key="item" :class="[item === 1 ? 'checked' : '']">
          <div class="text">{{ '农业农村局' }}</div>
        </div>
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
  import moment from 'moment'

  const form = ref({
    chb015: '',
    chb017: '',
    year: ''
  })
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
      box-sizing: border-box;
    }
    .toolbar {
      background-color: $color-primary;
      border-top-left-radius: 32rpx;
      border-top-right-radius: 32rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: $spacing;
      box-sizing: border-box;
      .picker {
        width: 210rpx;
        line-height: 1;
        background-color: #fff;
        border-radius: 8rpx;
        position: relative;
        &-value,
        &-placeholder {
          width: 100%;
          line-height: 40rpx;
          padding: 10rpx 12rpx;
          font-size: 26rpx;
          padding-right: 40rpx;
          box-sizing: border-box;
        }
        &-icon,
        &-placeholder {
          color: rgba($color-text, 0.6);
        }
        &-icon {
          position: absolute;
          top: 50%;
          right: 12rpx;
          transform: translateY(-50%);
        }
      }
    }
    .main {
      flex: 1;
      overflow: hidden;
      display: flex;
      .tool {
        width: 220rpx;
        background-color: #fff;
        padding: $spacing;

        .item {
          width: 100%;
          text-align: center;
          padding: 12rpx 10rpx;
          border-radius: 8rpx;
          box-sizing: border-box;
          margin-bottom: 8rpx;
          transition: all 0.3s;
          background-color: transparent;
          color: $color-text;
          .text {
            max-width: 100%;
            display: inline-block;
            font-size: 28rpx;
            line-height: 1.2;
            text-align: left;
            transition: all 0.3s;
          }
          &:last-child {
            margin-bottom: 0;
          }
          &.checked {
            background-color: $color-primary;
            color: #fff;
          }
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
            background-color: rgba($color2, 0.8);
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
              background-color: rgba($color1, 0.8);
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
      .scroll-view {
        height: 100%;
        overflow: hidden;
        box-sizing: border-box;
        &.result {
          flex: 1;
        }
      }
    }
  }
</style>
