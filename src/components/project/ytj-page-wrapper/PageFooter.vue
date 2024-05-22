<template>
  <view class="page-footer">
    <div class="tools" :class="'tools-' + pathName">
      <template v-if="pathName !== 'login'">
        <!-- 退出登录 -->
        <div v-if="token" class="logout">
          <div class="info">您好，{{ name }}</div>
          <button class="login-btn btn" @click="onClickLogout">
            <div class="bg"></div>
            <div class="con uno-center">退出登录</div>
          </button>
        </div>

        <!-- 登录 -->
        <div v-else class="login">
          <button class="login-btn btn" @click="onClickJumpRoute('login')">
            <div class="bg"></div>
            <div class="con uno-center">立即登录</div>
          </button>
        </div>
      </template>

      <div v-if="pathName !== 'home' || token" class="tips" :class="token ? 'tips-login' : ''">
        <span>无操作</span>
        <span class="value AlibabaPuHuiTiBold">{{ operationTime }}</span>
        <span>秒</span>
        <span v-if="token">退出登录</span>
        <span v-else>返回首页</span>
      </div>

      <div v-if="pathName !== 'home'" class="navigation">
        <button class="btn btn-home" @click="onClickJumpRoute('home')">
          <div class="bg"></div>
          <div class="con uno-center">首页</div>
        </button>
        <button class="btn btn-back" @click="onClickJumpRoute('back')">
          <div class="bg"></div>
          <div class="con uno-center">返回</div>
        </button>
      </div>
    </div>

    <div class="wrapper uno-flex uno-items-center">
      <div class="cell uno-flex uno-items-center">
        <div class="key">终端设备编号：</div>
        <div class="value">{{ deviceInfo?.hostname || '--' }}</div>
      </div>
      <div class="cell uno-flex uno-items-center">
        <div class="key">建设单位：</div>
        <div class="value">中国农业银行股份有限公司西藏自治区分行</div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import { useStoreUserInfo, useStoreCurrentRouteInfo, useStoreDeviceInfo } from '@/stores/modules'

  import { navigateBack, navigateTo, reLaunch, showLoading } from '@/utils/uni'

  const props = defineProps({
    operationTime: {
      type: Number,
      required: true
    }
  })

  const storeUserInfo = useStoreUserInfo()
  const storeCurrentRouteInfo = useStoreCurrentRouteInfo()
  const storeDeviceInfo = useStoreDeviceInfo()

  const { name, token } = toRefs(storeUserInfo)
  const { name: pathName } = toRefs(storeCurrentRouteInfo)
  const { deviceInfo } = toRefs(storeDeviceInfo)

  /**
   * 跳转路由
   */
  const onClickJumpRoute = (pathName: string) => {
    showLoading()
    if (pathName === 'back') {
      navigateBack()
    } else if (pathName === 'home') {
      reLaunch(pathName, 'packageYTJ')
    } else {
      navigateTo(pathName, 'packageYTJ')
    }
  }

  /**
   * 退出登录
   */
  const onClickLogout = () => {
    reLaunch('home', 'packageYTJ')
    storeUserInfo.$reset()
  }
</script>

<style lang="scss" scoped>
  .page-footer {
    width: 100%;
    height: 14.75rem;
    background: linear-gradient(360deg, #0a7bff 0%, #3c96ff 100%);
    border-top: 0.3125rem solid rgba(#fff, 0.8);
    color: #fff;
    font-size: 1.25rem;
    line-height: 1.75rem;
    padding-left: 2rem;
    padding-top: 0.625rem;
    .tools {
      width: 100%;
      position: relative;
      height: 5.5rem;
      padding-right: 2rem;

      .btn {
        width: 11.625rem;
        height: 5.5rem;
        position: relative;
        color: #fff;
        padding: 0;
        border: 0;
        background-color: transparent;
        .bg {
          width: 100%;
          height: 100%;
          background-color: rgba(#fff, 0.27);
          border-radius: 20rem;
        }
        .con {
          width: 10.875rem;
          height: 5.5rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: linear-gradient(180deg, #ff8200 0%, #f7b500 100%);
          box-shadow: inset 0px -0.125rem 0.625rem 0px rgba(0, 0, 0, 0.2);
          border-radius: 40rem;
        }
        .zh-cn {
          font-size: 1.5rem;
          line-height: 1;
          font-weight: 700;
        }
        .tibetan {
          font-size: 1.375rem;
          line-height: 1.75rem;
          font-weight: 400;
          padding-top: 0.25rem;
        }
        &::after {
          content: '';
          border: 0;
        }
        &.button-hover {
          opacity: 0.8;
        }
      }
      .login,
      .logout {
        width: 11.625rem;
        position: absolute;
        top: 0;
        left: -0.375rem;
        height: 100%;
        .info {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translate(100%, -50%);
          color: #fff;
          white-space: nowrap;
          font-size: 1.75rem;
          font-weight: 500;
          padding-left: 1rem;
        }
      }
      .tips {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-left: 0;
        font-size: 1.5rem;
        line-height: 2.875rem;
        color: #fff;
        .value {
          width: 3.375rem;
          font-size: 1.875rem;
          line-height: 2.875rem;
          color: #ffb200;
          text-align: center;
          margin: 0 0.75rem;
          font-weight: 700;
        }
        &.tips-login {
          padding-left: 3rem;
        }
      }
      .navigation {
        position: absolute;
        top: 0;
        right: 1.625rem;
        display: flex;
        align-items: center;
        .btn-home,
        .btn-back {
          width: 9.625rem;

          .con {
            width: 8.625rem;
            background: linear-gradient(360deg, #9aaaff 0%, #4a65ef 100%);
          }
        }
        .btn-back {
          margin-left: 0.75rem;
          .con {
            background: linear-gradient(360deg, #0a7bff 0%, #3c96ff 100%);
          }
        }
      }
      &.tools-home {
        width: 100%;
        .login,
        .logout {
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          .info {
            right: auto;
            left: 0;
            transform: translate(-100%, -50%);
            padding-left: 0;
            padding-right: 1rem;
          }
        }
        .tips {
          transform: translateY(-50%);
          margin-left: 8rem;
          &.tips-login {
            padding-left: 0;
          }
        }
      }
    }
    .wrapper {
      width: 100%;
      padding-top: 0.5rem;

      .cell {
        margin-right: 2.5rem;
        font-size: 1.25rem;
        line-height: 1.75rem;
        white-space: nowrap;

        .key {
          opacity: 0.8;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>
