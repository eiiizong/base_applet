<template>
  <div class="login-header">
    <div class="avatar">
      <image :src="avatarIcon" class="avatar" />
    </div>

    <!-- #ifdef MP-WEIXIN -->
    <template>
      <div class="title">
        <span>请您进行人脸识别身份验证</span>
      </div>
      <div class="tip">
        <span class="zh">信息将与当前微信绑定（用于身份验证）</span>
      </div>
    </template>
    <!-- #endif -->

    <!-- #ifndef MP-WEIXIN -->
    <template>
      <div class="title">
        <span>请您登录</span>
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
    padding: 26rpx 0;
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
