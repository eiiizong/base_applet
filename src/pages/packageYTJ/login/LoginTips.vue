<template>
  <div class="login-tips">
    <div class="tip uno-center">
      <image class="image" :src="imageIconLeft" />
      <div class="text">温馨提示</div>
      <image class="image" :src="imageIconRight" />
    </div>
    <div class="cells">
      <div class="cell">1、使用证件扫描登录后，请及时取回证件，以免遗失;</div>
      <div class="cell">2、业务办理结束后请点击“退出”按钮，以免个人信息泄露;</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import imageIconLeft from './images/icon-left.png'
  import imageIconRight from './images/icon-right.png'
</script>

<style lang="scss" scoped>
  .login-tips {
    width: 100%;
    padding-top: 7.5rem;
    box-sizing: border-box;
    .tip {
      margin-bottom: 20rpx;
      .image {
        width: 13.75rem;
        height: 1rem;
      }
      .text {
        color: $color-text;
        font-size: 1.75rem;
        line-height: 1;
        font-weight: 500;
        text-align: center;
        padding: 0 1rem;
        box-sizing: border-box;
      }
    }
    .cells {
      padding: 0 6.375rem;
      padding-top: 2.625rem;
      box-sizing: border-box;
      .cell {
        color: rgba($color-text, 0.6);
        font-size: 1.5rem;
        line-height: 1;
        margin-bottom: 2rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
