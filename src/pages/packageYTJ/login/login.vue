<template>
  <LayoutFullScreen>
    <ComponentPageBgFullContent>
      <view class="login">
        <div class="title">
          <div class="zh-cn">请选择登录方式</div>
          <div class="tibetan">
            <ComponentProjectTranslate content="请选择登录方式" />
          </div>
        </div>
        <LoginTypes @click="onClicKLoginType" />
        <LoginTips />
      </view>
    </ComponentPageBgFullContent>

    <LoginPopupSSC v-model="isShowPopupSSCLogin" :path="path" />
    <LoginPopupIdCard v-model="isShowPopupIdCardLogin" :path="path" />
  </LayoutFullScreen>
</template>

<script setup lang="ts">
  import LayoutFullScreen from '@/layouts/fullscreen/index.vue'
  import ComponentPageBgFullContent from '@/components/project/page-bg-full-content/page-bg-full-content.vue'
  import ComponentProjectTranslate from '@/components/project/translate/translate.vue'

  import LoginTips from './LoginTips.vue'
  import LoginTypes from './LoginTypes.vue'
  import LoginPopupSSC from './LoginPopupSSC.vue'
  import LoginPopupIdCard from './LoginPopupIdCard.vue'

  import { ref } from 'vue'
  import { onShow, onLoad } from '@dcloudio/uni-app'

  import { useUpdateRoute, usePlayAudio } from '@/hooks/project'
  import { hideLoading } from '@/utils/uni-api'

  const isShowPopupSSCLogin = ref(false)
  const isShowPopupIdCardLogin = ref(false)
  const path = ref('')

  const onClicKLoginType = (type: string) => {
    if (type === 'SSC') {
      isShowPopupSSCLogin.value = true
      usePlayAudio('/static/audio/03.mp3')
    }

    if (type === 'idCard') {
      isShowPopupIdCardLogin.value = true
      usePlayAudio('/static/audio/02.mp3')
    }
  }

  onLoad((e) => {
    const { pathName } = e || {}
    if (pathName) {
      path.value = pathName
    }
  })

  onShow(() => {
    hideLoading()
    usePlayAudio('/static/audio/01.mp3')
    useUpdateRoute()
  })
</script>

<style lang="scss" scoped>
  .login {
    width: 100%;
    padding: 12.25rem 1.125rem;
    .title {
      width: 100%;
      text-align: center;
      font-size: 2.25rem;
      line-height: 1;
      color: #343434;
      .zh-cn {
        font-weight: 700;
      }
      .tibetan {
        font-weight: 400;
        padding-top: 1rem;
      }
    }
  }
</style>
