<template>
  <div class="home-header">
    <image :src="imageBgHeader" class="bg"></image>
    <div class="con">
      <div class="language" @click="onClickSetLanguage">
        <div class="icon"></div>
        <div class="info">
          <div class="cell">语言选择</div>
          <div class="cell">སྐད་བརྡ་གདམ་གསེས།</div>
        </div>
        <div class="value">
          {{ locale === 'zh-Hans' ? '简体中文' : 'བོད་སྐད་' }}
        </div>
      </div>
      <div class="search" @click="navigateTo('ploce')">{{ $t('home.header.searchPlaceholder') }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import imageBgHeader from '../images/bg-header.png'
  import type { Store } from '@/stores/types'

  import { navigateTo } from '@/utils/uni'
  import { useI18n } from 'vue-i18n'
  import { useStoreUserSettings } from '@/stores/modules'
  import { useUpdateNavigationBarTitle } from '@/hooks/'

  const { locale } = useI18n()

  /**
   * 切换语言
   */
  const onClickSetLanguage = () => {
    locale.value = locale.value === 'ja' ? 'zh-Hans' : 'ja'
    useStoreUserSettings().updateStoreUserSettingsLanguage(locale.value as Store.UserSettings['language'])
    useUpdateNavigationBarTitle()
  }
</script>

<style lang="scss" scoped>
  .home-header {
    background-color: $color-primary;
    position: relative;
    height: 286rpx;
    color: #fff;
    clip-path: polygon(100% 94%, 76% 97%, 52% 99%, 40% 100%, 24% 100%, 15% 99%, 7% 97%, 0 94%, 0 0, 100% 0);
    .bg {
      width: 100%;
      height: 100%;
    }
    .con {
      padding: $spacing;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .language {
      display: inline-flex;
      align-items: center;
      .info {
        font-size: 24rpx;
      }
      .value {
        font-size: 26rpx;
        padding-left: 8rpx;
        font-weight: 700;
      }
    }
    .search {
      width: 100%;
      height: 84rpx;
      line-height: 84rpx;
      background-color: rgba(#ffffff, 0.53);
      border-radius: 42rpx;
      font-size: 28rpx;
      margin-top: $spacing * 2;
      padding: 0 $spacing;
    }
  }
</style>
