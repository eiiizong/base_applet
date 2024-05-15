<template>
  <div class="page login">
    <div class="login-con">
      <LoginHeader></LoginHeader>
      <LoginForm></LoginForm>
    </div>
  </div>
</template>
<script setup lang="ts">
  import LoginHeader from './part/LoginHeader.vue'
  import LoginForm from './part/LoginForm.vue'
</script>

<style lang="scss" scoped>
  .login {
    height: 100vh;
    background-color: $color-primary;
    overflow: auto;
    padding: $spacing;
    &-con {
      width: 100%;
      background-color: #fff;
      border-radius: 8rpx;
      min-height: 100%;
    }
  }
</style>
