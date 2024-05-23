<template>
  <view class="page-header" :style="getStyleBackgroundImage(imageBgHeader)">
    <div class="language uno-flex uno-items-center" @click="onClickSetLanguage">
      <image class="image" :src="locale === 'zh-Hans' ? imageLang01 : imageLang02"></image>
      <div class="info">
        <div class="cell">语言切换</div>
        <div class="cell">སྐད་བརྡ་བརྗེ་བ།</div>
      </div>
    </div>

    <div class="center uno-center uno-flex-col">
      <div class="AlibabaPuHuiTiBold">{{ websiteTitle }}</div>
    </div>

    <div class="right">
      <div class="col uno-flex uno-items-center">
        <div class="date">{{ currentDate.date }}</div>
        <div class="week">{{ currentDate.week }}</div>
      </div>
      <div class="time">{{ currentDate.time }}</div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import imageBgHeader from './images/bg-header.png'
  import imageLang01 from './images/lang01.png'
  import imageLang02 from './images/lang02.png'

  import type { PropType } from 'vue'
  import type { Store } from '@/stores/types'

  import { useI18n } from 'vue-i18n'

  import { getStyleBackgroundImage } from '@/utils/get'
  import { useStoreUserSettings } from '@/stores/modules'

  const { t, locale } = useI18n()
  const storeUserSettings = useStoreUserSettings()
  const websiteTitle = computed(() => t('app.name'))

  const props = defineProps({
    /**
     * 当前日期时间
     */
    currentDate: {
      type: Object as PropType<{
        date: string
        week: string
        time: string
      }>,
      required: true
    }
  })

  /**
   * 切换语言
   */
  const onClickSetLanguage = () => {
    locale.value = locale.value === 'ja' ? 'zh-Hans' : 'ja'
    storeUserSettings.updateStoreUserSettingsLanguage(locale.value as Store.UserSettings['language'])
  }
</script>

<style lang="scss" scoped>
  .page-header {
    width: 100%;
    height: 9.4375rem;
    color: #fff;
    padding: 0 2rem;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .language {
      position: absolute;
      top: 1.375rem;
      left: 2rem;
      height: 4rem;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.16) 100%);
      border-radius: 20rem;
      border: 0.0625rem solid rgba(255, 255, 255, 0.24);
      padding: 0 1.5rem;
      .image {
        width: 88rpx;
        height: 88rpx;
      }
      .info {
        margin-left: 8rpx;
      }
    }
    .center {
      width: 100%;
      padding-top: 2rem;
      font-size: 2rem;
      font-weight: 700;
      line-height: 2.25rem;
    }
    .right {
      position: absolute;
      top: 1.375rem;
      right: 2rem;
      font-size: 1rem;
      line-height: 1.5rem;

      .col {
        .date {
          font-weight: 500;
        }
        .week {
          font-weight: 500;
          padding-left: 0.5rem;
        }
      }
      .time {
        text-align: center;
        font-size: 1.75rem;
        line-height: 2rem;
        padding-top: 0.5rem;
        font-weight: 700;
      }
    }
  }
</style>
