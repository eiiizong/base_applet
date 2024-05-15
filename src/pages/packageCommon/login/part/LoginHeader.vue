<template>
  <div class="login-header">
    <div class="avatar">
      <image :src="avatarIcon" class="avatar" />
    </div>

    <!-- #ifdef MP-WEIXIN -->
    <template>
      <div class="title">
        <span>{{ $t('login.header.name') }}</span>
      </div>
      <div class="tip">
        <span class="zh">{{ $t('login.header.tip') }}</span>
      </div>
    </template>
    <!-- #endif -->

    <!-- #ifndef MP-WEIXIN -->
    <template>
      <div class="title">
        <span>{{ $t('login.headerApp.title') }}</span>
      </div>
    </template>

    <!-- #endif -->
  </div>
</template>
<script setup lang="ts">
  import avatarIcon from '../images/icon-avatar.png'
</script>

<style lang="scss" scoped>
  .login-header {
    width: 100%;
    text-align: center;
    padding-top: 26rpx;
    color: $color-text;

    .avatar {
      width: 190rpx;
      height: 174rpx;
      margin: 0 auto;
    }

    .title {
      width: 100%;
      font-size: 30rpx;
      font-weight: 600;
      color: $color-text;
      margin-top: 20rpx;
      line-height: 1;
    }

    .tip {
      width: 100%;
      font-size: 26rpx;
      color: $color-text-placeholder;
      margin-top: 20rpx;
      line-height: 1;

      .zh {
        font-weight: 400;
      }

      .zw {
        font-size: 26rpx;
      }
    }
  }
</style>
