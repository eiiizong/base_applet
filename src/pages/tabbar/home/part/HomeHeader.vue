<template>
  <div class="home-header">
    <image :src="imageBgHeader" class="bg image"></image>
    <div class="con">
      <div class="toolbar">
        <div class="language" @click="onClickSetLanguage">
          <image class="image" :src="locale === 'zh-Hans' ? imageLang01 : imageLang02"></image>
          <div class="info">
            <div class="cell">语言切换</div>
            <div class="cell">སྐད་བརྡ་བརྗེ་བ།</div>
          </div>
          <div class="value">
            {{ locale === 'zh-Hans' ? '简体中文' : 'བོད་སྐད་' }}
          </div>
        </div>
        <div class="avatar" @click="onClickToLogin">
          <image :src="userInfo.avatar ? userInfo.avatar : imageAvatar" alt="" class="image" />
          <div class="name">{{ userInfo.id ? userInfo.name : $t('home.header.loginPlaceholder') }}</div>
        </div>
      </div>

      <div class="search" @click="navigateTo('policy', 'packageQuery', { focus: true })">
        {{ $t('home.header.searchPlaceholder') }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import imageLang01 from '../images/lang01.png'
  import imageLang02 from '../images/lang02.png'
  import imageBgHeader from '../images/bg-header.png'
  import imageAvatar from '../images/avatar.png'

  import type { Store } from '@/stores/types'

  import { navigateTo, showModal } from '@/utils/uni'
  import { useI18n } from 'vue-i18n'
  import { useStoreUserSettings, useStoreUserInfo } from '@/stores/modules'
  import { useUpdateNavigationBarTitle, useLogOut } from '@/hooks'

  const storeUserInfo = useStoreUserInfo()
  const storeUserSettings = useStoreUserSettings()
  const { locale } = useI18n()
  const userInfo = storeUserInfo.getStoreUserInfo

  /**
   * 切换语言
   */
  const onClickSetLanguage = () => {
    locale.value = locale.value === 'ja' ? 'zh-Hans' : 'ja'
    storeUserSettings.updateStoreUserSettingsLanguage(locale.value as Store.UserSettings['language'])
    useUpdateNavigationBarTitle()
  }

  /**
   * 点击头像去登录
   */
  const onClickToLogin = () => {
    if (userInfo.id) {
      showModal('是否确定退出登录？', '提示', true).then(() => {
        useLogOut()
      })
    } else {
      navigateTo('login', 'packageCommon')
    }
  }
</script>

<style lang="scss" scoped>
  .home-header {
    background-color: $color-primary;
    position: relative;
    height: 300rpx;
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
      box-sizing: border-box;
    }
    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .language {
        display: flex;
        align-items: center;
        .image {
          width: 88rpx;
          height: 88rpx;
          margin-right: 10rpx;
        }
        .info {
          font-size: 24rpx;
        }
        .value {
          font-size: 26rpx;
          padding-left: 8rpx;
          box-sizing: border-box;
          font-weight: 700;
        }
      }
      .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .image {
          width: 88rpx;
          height: 88rpx;
          border-radius: 50%;
        }
        .name {
          font-size: 24rpx;
          line-height: 36rpx;
        }
      }
    }

    .search {
      width: 100%;
      height: 84rpx;
      line-height: 84rpx;
      background-color: rgba(#ffffff, 0.53);
      border-radius: 42rpx;
      font-size: 28rpx;
      margin-top: $spacing;
      padding: 0 $spacing;
      box-sizing: border-box;
    }
  }
</style>
