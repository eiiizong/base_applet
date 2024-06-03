<template>
  <div class="login page">
    <div class="login-con">
      <LoginHeader></LoginHeader>
      <LoginForm @click="onClickLogin"></LoginForm>
    </div>
  </div>
</template>
<script setup lang="ts">
  import type { LoginPageForm } from '@/types'

  import LoginHeader from './part/LoginHeader.vue'
  import LoginForm from './part/LoginForm.vue'

  import { navigateBack, redirectTo, startFacialRecognitionVerifyWX } from '@/utils/uni'
  import { getIsDev, getEnvData } from '@/utils/get'
  import { requestAppletLogin } from '@/server/api'
  import { useStoreUserInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()

  /**
   * 编译类型 01 微信小程序 02 app 03一体机
   */
  const platform = ref(getEnvData('VITE_PLATFORM'))

  /**
   * 路由重定向参数
   */
  const redirect = ref({
    name: '',
    packageName: ''
  })

  /**
   * 处理登录成功返回逻辑
   */
  const loginSucccess = () => {
    const { name, packageName } = redirect.value
    if (name && packageName) {
      redirectTo(name, packageName)
    } else {
      navigateBack()
    }
  }

  /**
   * 登录
   */
  const login = (data: LoginPageForm) => {
    const { name, idcard, avatar } = data
    requestAppletLogin(name, idcard, avatar).then((res) => {
      storeUserInfo.updateStoreUserInfo(res)
      loginSucccess()
    })
  }

  /**
   *
   * 点击立即登录按钮
   */
  const onClickLogin = (data: LoginPageForm) => {
    const { name, idcard } = data
    // 微信小程序端登录
    if (platform.value === '01') {
      // 开发模式跳过人脸
      if (getIsDev()) {
        login(data)
      } else {
        startFacialRecognitionVerifyWX(name, idcard).then(() => {
          login(data)
        })
      }
    } else {
      // app 端登录
      login(data)
    }
  }

  onLoad((e) => {
    const { name, packageName } = (e as AnyObject) || {}
    if (name) {
      redirect.value.name = name
    }
    if (packageName) {
      redirect.value.packageName = packageName
    }
  })
</script>

<style lang="scss" scoped>
  .login {
    background-color: $color-primary;
    overflow: auto;
    padding: $spacing;
    box-sizing: border-box;
    &-con {
      width: 100%;
      background-color: #fff;
      border-radius: 8rpx;
      min-height: 100%;
    }
  }
</style>
