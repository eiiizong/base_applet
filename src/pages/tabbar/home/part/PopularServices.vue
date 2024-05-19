<template>
  <div class="home-popular-services">
    <ComponentProjectPanel :title="$t('home.popularServices.name')">
      <div class="items">
        <div class="item" v-for="item in navs" :key="item.id" @click="onClick(item)">
          <div class="title">{{ item.title }}</div>
          <div class="desc">{{ item.desc }}</div>
          <img
            class="img"
            :src="item.imageSrc"
            :style="{
              width: item.imageWidth / 2 + 'rpx',
              height: item.imageHeight / 2 + 'rpx'
            }"
          />
        </div>
      </div>
    </ComponentProjectPanel>
  </div>
</template>

<script setup lang="ts">
  import imageNav01 from '../images/nav-01.png'
  import imageNav02 from '../images/nav-02.png'
  import imageNav03 from '../images/nav-03.png'
  import imageNav04 from '../images/nav-04.png'

  import ComponentProjectPanel from '@/components/project/panel/panel.vue'

  import { useI18n } from 'vue-i18n'
  import { navigateTo } from '@/utils/uni'
  import { useStoreUserInfo } from '@/stores/modules'

  interface Nav {
    id: string
    title: string
    desc: string
    name: string
    packageName: string
    isNeedLogin: boolean
    imageSrc: string
    imageWidth: number
    imageHeight: number
  }

  const storeUserInfo = useStoreUserInfo()
  const { t } = useI18n()
  const userInfo = storeUserInfo.getStoreUserInfo

  const navs = computed(() => {
    return [
      {
        id: '01',
        title: t('home.popularServices.nav01.name'),
        desc: t('home.popularServices.nav01.desc'),
        name: 'publicity',
        packageName: 'packageQuery',
        isNeedLogin: true,
        imageSrc: imageNav01,
        imageWidth: 140,
        imageHeight: 172
      },
      {
        id: '02',
        title: t('home.popularServices.nav02.name'),
        desc: t('home.popularServices.nav02.desc'),
        name: 'fund',
        packageName: 'packageQuery',
        isNeedLogin: true,
        imageSrc: imageNav02,
        imageWidth: 146,
        imageHeight: 162
      },
      {
        id: '03',
        title: t('home.popularServices.nav03.name'),
        desc: t('home.popularServices.nav03.desc'),
        name: 'project',
        packageName: 'packageQuery',
        isNeedLogin: false,
        imageSrc: imageNav03,
        imageWidth: 152,
        imageHeight: 124
      },
      {
        id: '04',
        title: t('home.popularServices.nav04.name'),
        desc: t('home.popularServices.nav04.desc'),
        name: 'policy',
        packageName: 'packageQuery',
        isNeedLogin: false,
        imageSrc: imageNav04,
        imageWidth: 146,
        imageHeight: 114
      }
    ]
  })

  const onClick = (data: Nav) => {
    const { name, packageName, isNeedLogin } = data
    if (!isNeedLogin || userInfo.id) {
      navigateTo(name, packageName)
    } else {
      navigateTo('login', 'packageCommon', { name, packageName })
    }
  }
</script>

<style lang="scss" scoped>
  .home-popular-services {
    width: 100%;
    padding-top: $spacing;
    box-sizing: border-box;
    .items {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .item {
      width: 304rpx;
      height: 168rpx;
      background-color: #edf7ff;
      box-shadow: 0rpx 2rpx 12rpx 0rpx rgba(0, 111, 255, 0.27);
      border-radius: 8rpx;
      margin-bottom: 24rpx;
      padding-left: 16rpx;
      box-sizing: border-box;
      position: relative;
      transition: all 0.3s;
      .title {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100rpx;
        font-size: 30rpx;
        line-height: 40px;
        font-weight: 700;
        color: #003b8d;
        line-height: 42rpx;
        padding-left: 20rpx;
        padding-right: 100rpx;
        box-sizing: border-box;
        z-index: 3;
        @include textOverflow(2);
      }
      .desc {
        width: 100%;
        position: absolute;
        font-weight: 400;
        line-height: 30rpx;
        height: 60rpx;
        font-size: 24rpx;
        color: rgba(0, 59, 141, 0.4);
        position: absolute;
        padding-left: 20rpx;
        padding-right: 90rpx;
        box-sizing: border-box;
        left: 0;
        bottom: 20rpx;
        z-index: 3;
        @include textOverflow(2);
      }
      .img {
        position: absolute;
        top: 50%;
        right: 20rpx;
        z-index: 1;
        transform: translateY(-50%);
      }
      &:nth-last-child(2),
      &:last-child {
        margin-bottom: 0;
      }
      &:nth-of-type(2) {
        background-color: #ecfffd;
      }
      &:nth-of-type(3) {
        background-color: #fff9df;
      }
      &:nth-of-type(4) {
        background-color: #fff5f6;
      }
    }
  }
</style>
