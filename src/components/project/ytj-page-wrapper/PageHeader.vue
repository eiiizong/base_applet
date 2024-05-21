<template>
  <view class="page-header" :style="{ backgroundImage: 'url(' + imageBgHeader + ')' }">
    <div v-if="deviceInfo && deviceInfo.aab300Desc" class="left address flex items-center">
      <div class="icon" :style="{ backgroundImage: 'url(' + imageIconAddress + ')' }"></div>
      <div class="text">
        <div class="zh-cn">{{ deviceInfo.aab300Desc || '' }}</div>
      </div>
    </div>

    <div class="flex items-center center justify-center flex-col">
      <div class="zh-cn AlibabaPuHuiTiBold">{{ websiteTitle }}</div>
    </div>

    <div class="right">
      <div class="col flex items-center">
        <div class="date">{{ currentDate.date }}</div>
        <div class="week">{{ currentDate.week }}</div>
      </div>
      <div class="time">{{ currentDate.time }}</div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import imageBgHeader from './images/bg-header.png'
  import imageIconAddress from './images/icon-address.png'

  import type { PropType } from 'vue'

  import { useI18n } from 'vue-i18n'
  import { useStoreDeviceInfo } from '@/stores/modules'

  const storeDeviceInfo = useStoreDeviceInfo()
  const { deviceInfo } = storeDeviceInfo
  const { t } = useI18n()

  const websiteTitle = computed(() => t('app.name'))

  const props = defineProps({
    currentDate: {
      type: Object as PropType<{
        date: string
        week: string
        time: string
      }>,
      required: true
    }
  })
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
    .address {
      position: absolute;
      top: 1.375rem;
      left: 2rem;
      height: 4rem;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.16) 100%);
      border-radius: 20rem;
      border: 0.0625rem solid rgba(255, 255, 255, 0.24);
      padding: 0 1.5rem;
      .icon {
        width: 1.25rem;
        height: 1.75rem;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-right: 0.5rem;
      }
      .text {
        font-size: 1.375rem;
        line-height: 1.5rem;
        font-weight: 500;
        text-align: center;
      }
      .tibetan {
        line-height: 1.5rem;
        font-size: 1.125rem;
      }
    }
    .center {
      width: 100%;
      padding-top: 2rem;
      .zh-cn {
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.25rem;
      }
      .tibetan {
        font-size: 1.5rem;
        line-height: 2rem;
        padding-top: 0.5rem;
      }
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
          padding-left: 1rem;
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
