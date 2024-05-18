<template>
  <div class="panel">
    <div class="title-wrapper">
      <div class="line"></div>
      <div class="title">{{ title }}</div>
      <div class="more" v-if="moreText" @click="emit('clickMore')">{{ moreText }}</div>
    </div>
    <div class="con">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['clickMore'])
  const props = defineProps({
    /**
     * 标题
     */
    title: {
      type: String,
      required: true
    },
    /**
     * 按钮名称
     */
    moreText: {
      type: String,
      default: () => ''
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
    box-sizing: border-box;
    .title-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 32rpx;
      font-weight: 700;
      line-height: 1;
      color: $color-text;
      padding-top: $spacing;
      box-sizing: border-box;
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
      box-sizing: border-box;
    }
  }
</style>
