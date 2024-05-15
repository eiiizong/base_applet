<template>
  <div class="panel">
    <div class="title">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="con">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  // import imageBgHeader from '../images/bg-header.png'
  // import type { Store } from '@/stores/types'

  // import { navigateTo } from '@/utils/uni'
  // import { useI18n } from 'vue-i18n'
  // import { useStoreUserSettings } from '@/stores/modules'
  // import { useUpdateNavigationBarTitle } from '@/hooks/'

  // const { locale } = useI18n()

  // /**
  //  * 切换语言
  //  */
  // const onClickSetLanguage = () => {
  //   locale.value = locale.value === 'ja' ? 'zh-Hans' : 'ja'
  //   useStoreUserSettings().updateStoreUserSettingsLanguage(locale.value as Store.UserSettings['language'])
  //   useUpdateNavigationBarTitle()
  // }
</script>

<style lang="scss" scoped>
  .panel {
    width: 690rpx;
    margin: 0 auto;
  }
</style>
