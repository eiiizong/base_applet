<template>
  <div class="page home uno-center uno-w-750">
    <div @click="onClick">组件</div>
    <div @click="onClick">{{ $t('app.name') }}</div>
    <button @click="onC">切换语言</button>
    <button @click="onClick2">modal</button>
    <button @click="onClick3">login</button>
  </div>
</template>

<script setup lang="ts">
  import type { Store } from '@/stores/types'

  import { showModal, navigateTo, showShareMenu } from '@/utils/uni'
  import { useI18n } from 'vue-i18n'
  import { useStoreUserSettings } from '@/stores/modules/useStoreUserSettings'

  const { locale } = useI18n()

  const onClick = () => {
    uni.navigateTo({
      url: '/pages/packageComponents/dashboard/dashboard'
    })
  }

  const onC = () => {
    locale.value = locale.value === 'ja' ? 'zh-Hans' : 'ja'

    useStoreUserSettings().updateStoreUserSettingsLanguage(locale.value as Store.UserSettings['language'])
  }

  const onClick2 = () => {
    showModal('hahhahaha')
  }

  const onClick3 = () => {
    navigateTo('login', 'packageCommon')
  }
  showShareMenu()
</script>

<style lang="scss" scoped>
  .home {
    background-color: $color-primary;
    // @include textOverflow(1);
  }
</style>
