<template>
  <view class="home-navs">
    <div class="title d-f ai-c jc-sb">
      <div class="name">业务查询服务</div>
      <!-- <div class="icon" :style="{ backgroundImage: 'url(' + imageIconTitle + ')' }"></div> -->
    </div>

    <div class="items d-f ai-c jc-sb fw-w">
      <div
        v-for="item in navs"
        :key="item.id"
        class="item"
        :style="{ backgroundImage: 'url(' + item.bgSrc + ')' }"
        @click="onClickJumpRoute(item)"
      >
        <div class="name-wrapper d-f">
          <div class="name">
            <div class="zh-cn">{{ item.name }}</div>
            <div class="tibetan">
              <ComponentProjectTranslate :content="item.name" />
            </div>
            <div class="icon-arrow" :style="{ backgroundImage: 'url(' + imageIconArrow + ')' }"></div>
          </div>
        </div>
        <div class="desc">{{ item.desc }}</div>
        <div class="icon" :style="{ backgroundImage: 'url(' + item.iconSrc + ')' }"></div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import imageNavBg01 from './images/nav-bg-01.png'
  import imageNavBg02 from './images/nav-bg-02.png'
  import imageNavBg03 from './images/nav-bg-03.png'
  import imageNavBg04 from './images/nav-bg-04.png'
  import imageNavIcon01 from './images/nav-icon-01.png'
  import imageNavIcon02 from './images/nav-icon-02.png'
  import imageNavIcon03 from './images/nav-icon-03.png'
  import imageNavIcon04 from './images/nav-icon-04.png'
  // import imageIconTitle from './images/icon-title.png'
  import imageIconArrow from './images/icon-arrow.png'

  import ComponentProjectTranslate from '@/components/project/translate/translate.vue'

  import { ref, toRefs } from 'vue'

  import { navigateTo, showLoading } from '@/utils/uni-api'
  import { useStoreUserInfo } from '@/stores/modules'

  interface NavItem {
    id: string
    name: string
    desc: string
    bgSrc: string
    iconSrc: string
    /**
     * 路由名称
     */
    pathName: string
    /**
     * 是否需要登录才能访问
     */
    isAuth: boolean
  }

  const navs = ref<NavItem[]>([
    {
      id: 'wyc',
      name: '我要查',
      desc: '身份证放在一体机上就可以查询补贴',
      bgSrc: imageNavBg01,
      iconSrc: imageNavIcon01,
      pathName: 'query',
      isAuth: true
    },
    {
      id: 'sbzn',
      name: '申报指南',
      desc: '了解惠民惠农补贴的补贴对象、补贴标准等信',
      bgSrc: imageNavBg02,
      iconSrc: imageNavIcon02,
      pathName: 'declare-guide',
      isAuth: false
    },
    {
      id: 'zcwj',
      name: '政策文件',
      desc: '查看国家关于惠民惠农的政策文件',
      bgSrc: imageNavBg03,
      iconSrc: imageNavIcon03,
      pathName: 'policy',
      isAuth: false
    },
    {
      id: 'gsl',
      name: '公示栏',
      desc: '看看身边谁在领取补贴',
      bgSrc: imageNavBg04,
      iconSrc: imageNavIcon04,
      pathName: 'publicity',
      isAuth: false
    }
  ])

  const storeUserInfo = useStoreUserInfo()
  const { userInfo } = toRefs(storeUserInfo)

  const onClickJumpRoute = (data: NavItem) => {
    showLoading()
    const { isAuth, pathName } = data

    if (isAuth) {
      if (!userInfo.value.token) {
        navigateTo('login', '', { pathName })
        return
      }
    }

    navigateTo(pathName)
  }
</script>

<style lang="scss" scoped>
  .home-navs {
    width: 100%;
    border: 0.125rem solid #ffffff;
    border-radius: 0.25rem;
    margin-top: 3.625rem;
    .title {
      height: 4.875rem;
      background: linear-gradient(to bottom, #cee4ff, #eaf4ff);
      border-radius: 0.25rem;
      padding: 0 1.5rem;
      .name {
        color: #004ea8;
        font-size: 1.875rem;
        font-weight: 700;
      }
      .icon {
        width: 2.5rem;
        height: 2.9375rem;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }
    }

    .items {
      padding: 1.5rem;
      background-color: rgba(#fff, 0.7);

      .item {
        height: 20.5rem;
        width: 29.5rem;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        margin-bottom: 1.5rem;
        position: relative;
        padding: 2rem;
        .name {
          color: #fff;
          position: relative;
          padding-right: 2.75rem;
          .zh-cn {
            font-size: 2rem;
            line-height: 1;
            font-weight: 700;
          }
          .tibetan {
            font-size: 2rem;
            line-height: 2.5rem;
            padding-top: 0.5rem;
            font-weight: 700;
          }
          .icon-arrow {
            position: absolute;
            right: 0;
            top: 0;
            width: 2rem;
            height: 2rem;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
          }
        }
        .desc {
          color: #fff;
          font-size: 1.5rem;
          line-height: 2rem;
          margin-top: 0.75rem;
          opacity: 0.6;
        }
        .icon {
          position: absolute;
          right: 1.875rem;
          bottom: 1.25rem;
          width: 5.75rem;
          height: 6.125rem;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
        }
        &:nth-of-type(3),
        &:nth-of-type(4) {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
