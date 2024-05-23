<template>
  <YtjPageWrapper>
    <YtjContentWrapper>
      <view class="login">
        <div class="title">请选择登录方式</div>
        <LoginTypes @click="onClickLogin" />
        <LoginTips />
      </view>
    </YtjContentWrapper>

    <LoginPopupIdCard v-model="isShowPopupIdCardLogin" />
  </YtjPageWrapper>
</template>

<script setup lang="ts">
  import YtjPageWrapper from '@/components/project/ytj-page-wrapper/ytj-page-wrapper.vue'
  import YtjContentWrapper from '@/components/project/ytj-content-wrapper/ytj-content-wrapper.vue'

  import LoginTips from './LoginTips.vue'
  import LoginTypes from './LoginTypes.vue'
  import LoginPopupIdCard from './LoginPopupIdCard.vue'

  import { usePlayAudio } from '@/hooks'

  /**
   * 是否显示身份证登录弹窗
   */
  const isShowPopupIdCardLogin = ref(false)

  /**
   * 点击登录方式登录
   */
  const onClickLogin = (type: string) => {
    if (type === 'idCard') {
      isShowPopupIdCardLogin.value = true
      usePlayAudio('/static/audio/02.mp3')
    }
  }

  onShow(() => {
    usePlayAudio('/static/audio/01.mp3')
  })
</script>

<style lang="scss" scoped>
  .login {
    width: 100%;
    padding: 12rem 1.125rem;
    .title {
      width: 100%;
      text-align: center;
      font-size: 2.25rem;
      line-height: 1;
      color: $color-text;
      font-weight: 700;
    }
  }
</style>
