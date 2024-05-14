<template>
  <div class="login">
    <div class="login-card">
      <div class="face d-f fd-c jc-c ai-c">
        <image :src="avatarIcon ? avatarIcon : icon" :class="avatarIcon ? 'avatar-style' : ''" />
        <!-- #ifdef MP-WEIXIN -->
        <div class="title">
          <span>请您进行人脸识别身份验证</span>
          <ComponentProjectTranslate class="zw" content="请您进行人脸识别身份验证" />
        </div>
        <div class="tip">
          <span class="zh">信息将与当前微信绑定（用于身份验证）</span>
          <ComponentProjectTranslate class="zw" content="信息将与当前微信绑定（用于身份验证）" />
        </div>
        <!-- #endif -->
        <!-- #ifdef H5 -->
        <div class="title">
          <span>请您登录</span>
          <ComponentProjectTranslate class="zw" content="请您登录" />
        </div>
        <!-- #endif -->
      </div>
      <div class="form-wrapper">
        <div class="input-content">
          <div class="label">
            <span class="required">*</span>
            <span class="name">姓名</span>
            <ComponentProjectTranslate class="zw" content="姓名" />
          </div>
          <div class="input-con">
            <input
              v-model="name"
              class="input-style"
              placeholder-class="placeholder-style"
              type="text"
              placeholder="请输入您的姓名 ཁྱེད་རང་གི་རུས་མིང་ནང་འཇུག་རོགས་།" />
          </div>
        </div>
        <div class="input-content">
          <div class="label">
            <span class="required">*</span>
            <span class="name">身份证号码</span>
            <ComponentProjectTranslate class="zw" content="身份证号码" />
          </div>
          <div class="input-con">
            <input
              v-model="idCard"
              class="input-style"
              placeholder-class="placeholder-style"
              type="text"
              placeholder="请输入您的身份证号码 ཁྱེད་རང་གི་ཐོབ་ཐང་ལག་ཁྱེར་ཨང་གྲངས་ནང་འཇུག་རོགས་།" />
          </div>
        </div>
        <!-- #ifdef MP-WEIXIN -->
        <div class="input-content">
          <div class="label">
            <span class="required">*</span>
            <span class="name">手机号码</span>
            <ComponentProjectTranslate class="zw" content="手机号码" />
          </div>
          <div class="input-con d-f ai-c">
            <input
              v-model="tel"
              class="input-style"
              placeholder-class="placeholder-style"
              disabled
              type="tel"
              placeholder="点击获取您的手机号码 གནོན་ལེན་ཁྱེད་རང་གི་ཁ་པར་ཨང་གྲངས་།" />
            <button class="btn-phone" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
              <span class="zh">获取手机号</span>
              <ComponentProjectTranslate class="zw" content="获取手机号" />
            </button>
          </div>
        </div>
        <!-- #endif -->
      </div>
      <!-- #ifdef MP-WEIXIN -->
      <div class="agree-wrapper">
        <div class="aw-checkbox d-f">
          <checkbox-group @change="handleCheckboxChange">
            <checkbox value="cb" color="#0063FE" class="checkbox-style" />
          </checkbox-group>
          <div class="awc-con">
            <span class="zh">我同意惠农惠民一卡通平台收集、保存、使用/转交我所提交的信息用于快捷登录</span>
            <ComponentProjectTranslate
              class="zw"
              content="我同意惠农惠民一卡通平台收集、保存、使用/转交我所提交的信息用于快捷登录" />
          </div>
        </div>
        <div class="view-service">
          <div class="zh">
            查看
            <span class="zh-c" @click="jumpToPages(1)">《用户服务协议》</span>
            及
            <span class="zh-c" @click="jumpToPages(2)">《隐私条款》</span>
          </div>
          <div class="zh">
            <span class="zh-c" @click="jumpToPages(1)">《སྤྱོད་མཁན་གྱི་ཞབས་ཞུའི་གྲོས་མཐུན་》</span>དང་
            <span class="zh-c" @click="jumpToPages(2)">《གསང་དོན་དོན་ཚན་》</span>ལ་ལྟ་ཞིབ་།
          </div>
        </div>
      </div>
      <!-- #endif -->
      <!-- #ifdef MP-WEIXIN -->
      <div class="start-login">
        <button open-type="chooseAvatar" :disabled="disabledLoginBtn" @chooseavatar="onChooseAvatar">
          <span class="zh">开始人脸识别认证</span>
          <span class="zw">མགོ་བརྩམས་།མིའི་གདོང་ངོས་འཛིན་དཔང་དངོས་བདེན་པ་ཡིན་པའི་ར་སྤྲོད་</span>
        </button>
      </div>
      <!-- #endif -->
      <!-- #ifdef H5 -->
      <div class="start-login">
        <button open-type="chooseAvatar" :disabled="disabledLoginBtn" @click="loginByAAC002">
          <span class="zh">登录</span>
          <span class="zw">མགོ་བརྩམས་།མིའི་གདོང་ངོས་འཛིན་དཔང་དངོས་བདེན་པ་ཡིན་པའི་ར་སྤྲོད་</span>
        </button>
      </div>
      <!-- #endif -->
      <div class="desc">
        <span class="zh">本服务由久远银海股份有限公司提供数据支持</span>
        <ComponentProjectTranslate class="zw" content="本服务由久远银海股份有限公司提供数据支持" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useStoreUserInfo } from '@/stores/modules'
  import icon from './images/icon.png'
  import ComponentProjectTranslate from '@/components/project/translate/index.vue'
  import { requestWXGetFaceInfo, requestWXGetRealPhone, requestWXLogin } from '@/server/api'
  import { navigateBack, navigateTo, showModal, showToast, startFacialRecognitionVerify } from '@/utils/uni-api'
  import { ref, toRefs } from 'vue'
  import { checkIDCard } from '@/utils/check'
  import { getIsDev } from '@/utils/get'
  import { formatIDCardNumber } from '@/utils/format'

  const storeUserInfo = useStoreUserInfo()
  const { userInfo } = toRefs(storeUserInfo)

  const tel = ref('')
  const name = ref('')
  const idCard = ref('')
  const avatarIcon = ref('')
  const isChoseCheckBox = ref(false)
  const disabledLoginBtn = ref(false)

  // 获取手机号
  const getPhoneNumber = (e: WechatMiniprogram.ButtonGetPhoneNumber) => {
    const { encryptedData, iv, errMsg } = e.detail
    const { session_key } = userInfo.value

    if (errMsg === 'getPhoneNumber:ok') {
      requestWXGetRealPhone(encryptedData || '', iv || '', decodeURIComponent(session_key || '')).then((res) => {
        const { phoneNum } = res
        if (phoneNum) {
          tel.value = phoneNum
        } else {
          showModal('获取手机号失败，请稍后重试！')
        }
      })
    } else {
      showModal('请点击允许按钮，才能获取您的电话号码！')
    }
  }

  // 图片转 base64
  const urlTobase64 = (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const fs = wx.getFileSystemManager()
      let suffix = url.substr(url.lastIndexOf('.') + 1)
      let base64 = ''
      try {
        let base64Data = fs.readFileSync(url, 'base64')
        base64 = 'data:image/' + suffix + ';base64,' + base64Data
        resolve(base64)
      } catch (err) {
        showModal('获取头像数据失败')
        reject(err)
      }
    })
  }

  // 登录
  const handleLogin = () => {
    const { openid } = userInfo.value

    requestWXLogin(openid as string, idCard.value, name.value, tel.value, avatarIcon.value).then((res) => {
      const { sessionId, token, userId } = res
      showToast('登录成功！')
      storeUserInfo.updateStoreUserInfo({
        sessionId,
        token,
        userId,
        userName: name.value,
        tel: tel.value,
        portraiturl: avatarIcon.value,
        idCard: formatIDCardNumber(idCard.value),
        oldIdCard: idCard.value
      })
      navigateBack(1)
    })
  }

  // h5登录校验
  const checkH5Form = () => {
    if (!name.value) {
      showModal('请输入您的姓名')
      return false
    }
    if (!idCard.value) {
      showModal('请输入您的身份证号')
      return false
    } else {
      const checkResult = checkIDCard(idCard.value)
      const { errMsg, isOk } = checkResult
      // 校验身份证失败
      if (!isOk) {
        showModal(errMsg)
        return false
      }
    }

    return true
  }

  // h5登录 身份证
  const loginByAAC002 = () => {
    const result = checkH5Form()
    if (!result) {
      return
    }
    const sessionId = '1',
      token = '12',
      userId = '123'
    storeUserInfo.updateStoreUserInfo({
      sessionId,
      token,
      userId,
      userName: name.value,
      tel: tel.value,
      portraiturl: avatarIcon.value,
      idCard: formatIDCardNumber(idCard.value),
      oldIdCard: idCard.value
    })
    showToast('登录成功！')
    navigateBack(1)
  }

  // 二次确认人脸识别
  const reconfirm = (code: string) => {
    requestWXGetFaceInfo(code).then((res) => {
      const { data } = res
      const { errcode, identify_ret } = data
      if (errcode == 0 && identify_ret == 0) {
        handleLogin()
      } else {
        showModal('人脸识别信息认证出错，请重新认证！')
      }
    })
  }

  // 开始人脸识别
  const handleStartFacialRecognitionVerify = () => {
    const isDev = getIsDev()

    if (isDev) {
      handleLogin()
    } else {
      startFacialRecognitionVerify(name.value, idCard.value).then((res) => {
        const { verifyResult } = res
        reconfirm(verifyResult as string)
      })
    }
  }

  // 校验是否可以进行人脸识别
  const checkForm = () => {
    if (!name.value) {
      showModal('请输入您的姓名')
      return false
    }
    if (!idCard.value) {
      showModal('请输入您的身份证号')
      return false
    } else {
      const checkResult = checkIDCard(idCard.value)
      const { errMsg, isOk } = checkResult
      // 校验身份证失败
      if (!isOk) {
        showModal(errMsg)
        return false
      }
    }
    if (!tel.value) {
      showModal('请点击获取手机号按钮')
      return false
    }
    if (!isChoseCheckBox.value) {
      showModal('请选择我同意惠农惠民一卡通平台收集、保存、使用/转交我所提交的信息用于快捷登录')
      return false
    }

    handleStartFacialRecognitionVerify()
  }

  // 选中/取消同意选项
  const handleCheckboxChange = (e: WechatMiniprogram.CheckboxGroupChange) => {
    const { value } = e.detail
    if (value.length > 0) {
      isChoseCheckBox.value = true
    } else {
      isChoseCheckBox.value = false
    }
  }

  // 选择头像并且校验
  const onChooseAvatar = async (e: any) => {
    const { avatarUrl } = e.detail
    if (avatarUrl) {
      const imgBase64 = await urlTobase64(avatarUrl)
      avatarIcon.value = imgBase64
    }
    checkForm()
  }

  // 跳转到用户协议和隐私条款
  const jumpToPages = (id: 1 | 2) => {
    if (id === 1) {
      navigateTo('login-user-agreement', 'packageCommon')
    }
    if (id === 2) {
      navigateTo('login-privacy-policy', 'packageCommon')
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    width: 100%;
    /* #ifdef H5 */
    min-height: 100vh;
    /* #endif */
    background-color: #0063fe;
    padding: 32rpx 32rpx 80rpx 32rpx;

    .login-card {
      width: 100%;
      /* #ifdef H5 */
      min-height: calc(100vh - 112rpx);
      /* #endif */
      background-color: #fff;
      padding: 45rpx 32rpx 32rpx 32rpx;
      border-radius: 8rpx;

      .face {
        width: 100%;
        text-align: center;

        image {
          width: 164rpx;
          height: 165rpx;

          &.avatar-style {
            border-radius: 100%;
          }
        }

        .title {
          width: 100%;
          font-size: 30rpx;
          font-weight: 600;
          color: #333333;
          margin-top: 20rpx;
          line-height: 1;

          .zw {
            font-size: 30rpx;
            font-weight: bold;
            color: #333333;
          }
        }

        .tip {
          width: 100%;
          font-size: 26rpx;
          color: #999999;
          margin-top: 12rpx;
          line-height: 1;

          .zh {
            font-weight: 400;
          }

          .zw {
            font-size: 26rpx;
          }
        }
      }

      .form-wrapper {
        width: 100%;
        margin-top: 32rpx;

        .input-content {
          width: 100%;

          &:not(:first-child) {
            margin-top: 24rpx;
          }

          .label {
            display: flex;
            font-size: 28rpx;
            width: 100%;

            .required {
              font-weight: 400;
              color: #e50707;
            }

            .name {
              font-weight: 400;
              color: #333333;
              white-space: nowrap;
            }

            .zw {
              margin-left: 8rpx;
              color: #333333;
            }
          }

          .input-con {
            width: 100%;
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-top: 12rpx;

            .input-style {
              width: 100%;
              display: block;
              height: 66rpx;
              background: #f6f9fe;
              border-radius: 8rpx;
              padding: 20rpx 24rpx;
              @include textOverflow(1);
            }

            .placeholder-style {
              font-size: 26rpx;
              font-weight: 400;
              color: #999999;
            }

            .btn-phone {
              width: 198rpx;
              background: #0063fe;
              border-radius: 8rpx;
              margin-left: 16rpx;
              line-height: 1;
              padding: 12rpx 8rpx;

              .zh {
                font-size: 26rpx;
                font-weight: 400;
                color: #ffffff;
              }

              .zw {
                font-size: 26rpx;
                color: #ffffff;
              }
            }
          }
        }
      }

      .agree-wrapper {
        width: 100%;
        margin-top: 32rpx;

        .aw-checkbox {
          width: 100%;

          .checkbox-style {
            transform: scale(0.7);
          }

          .awc-con {
            font-size: 24rpx;
            color: #999999;

            .zh {
              font-weight: 400;
            }

            .zw {
              font-size: 24rpx;
              color: #999999;
            }
          }
        }

        .view-service {
          width: 100%;
          line-height: 1;
          margin-top: 20rpx;
          padding-left: 58rpx;

          .zh {
            font-size: 24rpx;
            font-weight: 400;
            color: #999999;

            &:not(:first-child) {
              margin-top: 12rpx;
            }

            .zh-c {
              color: #0063fe;
            }
          }
        }
      }

      .start-login {
        width: 100%;
        margin-top: 32rpx;

        button {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 120rpx;
          background: #0063fe;
          border-radius: 8rpx;
          line-height: 1;

          .zh {
            font-size: 36rpx;
            font-weight: 500;
            color: #ffffff;
            margin-top: 16rpx;
          }

          .zw {
            font-size: 24rpx;
            color: #ffffff;
            margin-top: 8rpx;
          }
        }
      }

      .desc {
        width: 100%;
        font-size: 24rpx;
        color: #999999;
        line-height: 1;
        text-align: center;
        margin-top: 50rpx;

        .zh {
          font-weight: 400;
        }

        .zw {
          margin-top: 8rpx;
        }
      }
    }
  }
</style>
