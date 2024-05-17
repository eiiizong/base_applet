<template>
  <div class="project-details-header">
    <div class="bg"></div>
    <div class="card">
      <div class="name">计划生育家庭特别扶助制度扶助</div>
      <div class="cells">
        <div class="cell">
          <div class="key">主管部门：</div>
          <div class="value">卫健委</div>
        </div>
        <div class="cell">
          <div class="key">更新时间：</div>
          <div class="value">2022-01-01</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .project-details-header {
    width: 100%;
    height: 300rpx;
    position: relative;
    .bg {
      width: 100%;
      height: 200rpx;
      background-color: $color-primary;
      border-bottom-left-radius: 50%;
      border-bottom-right-radius: 50%;
    }
    .card {
      width: 672rpx;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: #fff;
      box-shadow: 0 0 8rpx 2rpx rgba(0, 0, 0, 0.1);
      padding: $spacing;
      border-radius: 12rpx;

      .name {
        font-size: 32rpx;
        font-weight: 700;
        color: $color-text;
        line-height: 1;
      }
      .cells {
        padding-top: 20rpx;
      }
      .cell {
        display: flex;
        align-items: center;
        font-size: 26rpx;
        color: $color-text-placeholder;
        line-height: 1.8;
      }
    }
  }
</style>
