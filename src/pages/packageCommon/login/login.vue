<template>
  <div class="page login">
    <div class="login-con">
      <LoginHeader></LoginHeader>
    </div>
  </div>
</template>
<script setup lang="ts">
  import LoginHeader from './part/LoginHeader.vue'
  import { useUpdateNavigationBarTitle } from '@/hooks/useUpdateNavigationBarTitle'

  onShow(() => {
    useUpdateNavigationBarTitle()
  })
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
      border-radius: 4rpx;
    }
  }
</style>
