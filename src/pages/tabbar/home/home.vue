<template>
  <div class="home uno-center uno-w-750">
    <div @click="onClick">组件</div>
    <div @click="onClick">{{ $t('tabbar.home.text') }}</div>
    <button @click="onC">切换语言</button>
    <button @click="onClick2">modal</button>
  </div>
</template>

<script setup lang="ts">
  import type { Store } from '@/stores/types'

  import { showModal } from '@/utils/uni'
  import { useI18n } from 'vue-i18n'
  import { useStoreUserSettings } from '@/stores/modules/useStoreUserSettings'
  import { useUpdateNavigationBarTitle } from '@/hooks'

  const { locale } = useI18n()

  const onClick = () => {
    uni.navigateTo({
      url: '/pages/packageComponents/dashboard/dashboard'
    })
  }

  const onC = () => {
    console.log(locale.value)

    locale.value = locale.value === 'tibetan' ? 'zh-Hans' : 'tibetan'

    useStoreUserSettings().updateStoreUserSettingsLanguage(locale.value as Store.UserSettings['language'])
    // useUpdateNavigationBarTitle(locale.value as Store.UserSettings['language'], 'home')
  }

  const onClick2 = () => {
    showModal('hahhahaha')
  }

  onLoad(() => {
    useUpdateNavigationBarTitle('home')

    // setNavigationBarTitle('23')
    // useUpdateNavigationBarTitle(locale.value as Store.UserSettings['language'], 'home')
  })
</script>

<style lang="scss" scoped>
  .home {
    background-color: $color-primary;
    // @include textOverflow(1);
  }
</style>
