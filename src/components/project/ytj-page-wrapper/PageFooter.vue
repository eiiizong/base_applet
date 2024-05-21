<template>
  <view class="page-footer">
    <div class="tools" :class="'tools-' + route.path">
      <template v-if="route.path !== 'login'">
        <!-- 退出登录 -->
        <div v-if="userInfo.token" class="logout">
          <div class="info">您好，{{ formatUserName(userInfo.aac003) }}</div>

          <button class="login-btn btn" @click="onClickLogout">
            <div class="bg"></div>
            <div class="con d-f ai-c jc-c fd-c">
              <div class="zh-cn">退出登录</div>
            </div>
          </button>
        </div>

        <!-- 登录 -->
        <div v-else class="login">
          <button class="login-btn btn" @click="onClickJumpRoute('login')">
            <div class="bg"></div>
            <div class="con d-f ai-c jc-c fd-c">
              <div class="zh-cn">立即登录</div>
            </div>
          </button>
        </div>
      </template>

      <div v-if="route.path !== 'home' || userInfo.token" class="tips" :class="userInfo.token ? 'tips-login' : ''">
        <span>无操作</span>
        <span class="value AlibabaPuHuiTiBold">{{ operationTime }}</span>
        <span>秒</span>
        <span v-if="userInfo.token">退出登录</span>
        <span v-else>返回首页</span>
      </div>

      <div v-if="route.path !== 'home'" class="navigation">
        <button class="btn btn-home" @click="onClickJumpRoute('home')">
          <div class="bg"></div>
          <div class="con d-f ai-c jc-c fd-c">
            <div class="zh-cn">首页</div>
          </div>
        </button>
        <button class="btn btn-back" @click="onClickJumpRoute('back')">
          <div class="bg"></div>
          <div class="con d-f ai-c jc-c fd-c">
            <div class="zh-cn">返回</div>
          </div>
        </button>
      </div>
    </div>

    <div class="wrapper d-f ai-c">
      <div class="cell">
        <div class="zh-cn">
          <div class="key">终端设备编号：</div>
          <div class="value">{{ deviceInfo?.hostname || '--' }}</div>
        </div>
      </div>
      <div class="cell">
        <div class="zh-cn">
          <div class="key">建设单位：</div>
          <div class="value">中国农业银行股份有限公司西藏自治区分行</div>
        </div>
      </div>
      <div class="cell">
        <div class="zh-cn">
          <div class="key">技术支持：</div>
          <div class="value">四川久远银海软件股份有限公司</div>
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import { toRefs } from 'vue'

  import { useStoreUserInfo, useStoreRoute, useStoreDeviceInfo } from '@/stores/modules'
  import { formatUserName } from '@/utils/format'
  import { navigateBack, navigateTo, reLaunch, showLoading } from '@/utils/uni-api'

  const props = defineProps({
    operationTime: {
      type: Number,
      required: true
    }
  })

  const storeUserInfo = useStoreUserInfo()
  const storeRoute = useStoreRoute()
  const storeDeviceInfo = useStoreDeviceInfo()

  const { userInfo } = toRefs(storeUserInfo)
  const { route } = toRefs(storeRoute)
  const { deviceInfo } = toRefs(storeDeviceInfo)

  const onClickJumpRoute = (pathName: string) => {
    showLoading()
    if (pathName === 'back') {
      navigateBack()
    } else if (pathName === 'home') {
      reLaunch(pathName)
    } else {
      navigateTo(pathName)
    }
  }

  // 退出登录
  const onClickLogout = () => {
    showLoading()
    reLaunch('home')
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
        .zh-cn,
        .tibetan {
          display: flex;
          align-items: center;
        }
        .zh-cn {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
        .tibetan {
          font-size: 1rem;
          line-height: 1.375rem;
          color: rgba(#fff, 0.8);
          padding-top: 0.375rem;
          .key {
            display: flex;
            align-items: center;
            color: inherit;
          }
        }
        .key {
          white-space: nowrap;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>
