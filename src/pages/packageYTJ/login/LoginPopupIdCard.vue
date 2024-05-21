<template>
  <YhPopup ref="popupRef" :is-mask-click="false">
    <div class="login-popup-idcard">
      <div class="title">
        <div class="left">
          <div class="zh-cn">身份证登录</div>
          <div class="tibetan">
            <ComponentProjectTranslate content="身份证登录" />
          </div>
        </div>
        <div class="right" @click="emit('update:modelValue', false)">
          <yh-icons type="closeempty" size="2.5rem" color="#d8d8d8" />
        </div>
      </div>

      <div class="text-tip">
        <div class="zh-cn">
          <span>请将您的身份证放置于</span>
          <span class="val">屏幕左下方</span>
          <span>的识别框内</span>
        </div>
        <div class="tibetan">
          <ComponentProjectTranslate content="请将您的身份证放置于屏幕左下方的识别框内" />
        </div>
      </div>

      <div class="img-tip" @click="getDataByUserInfo(null)">
        <image class="img" src="/static/images/login/idcard.gif" alt="" />
      </div>
    </div>
  </YhPopup>
</template>

<script setup lang="ts">
  import ComponentProjectTranslate from '@/components/project/translate/translate.vue'
  import YhPopup from '@/components/yh/popup/popup.vue'
  import YhIcons from '@/components/yh/icons/icons.vue'

  import { ref, watch, nextTick } from 'vue'

  import { useStoreUserInfo } from '@/stores/modules'
  import { requestLogin } from '@/server/api'
  import { hideLoading, navigateBack, redirectTo, showLoading, showModal } from '@/utils/uni-api'

  import type { ApiResponseResult } from '@/server/types'

  /**
   * 插件接口返回格式
   */
  interface PluginResponseResult<T> {
    /**
     * 错误信息
     */
    message: string
    /**
     * 状态码 200 正常 -1 错误
     */
    code: '200' | '-1'
    /**
     * 数据
     */
    data: T
  }

  /**
   * 身份证数据格式
   */
  interface IdCardInfo {
    /**
     * 身份证号
     */
    aac002: string
    /**
     * 姓名
     */
    aac003: string
    /**
     * 出生日期
     */
    birthday: string
    /**
     * 签发机构
     */
    grantdept: string
    /**
     * 住址
     */
    address: string
    /**
     * 身份证有效期开始日期
     */
    userlifebegin: string
    /**
     * 身份证有效期结束日期
     */
    userlifeend: string
    /**
     * 民族
     */
    nation: string
    /**
     * 身份证头像
     */
    imgth: string
  }

  const emit = defineEmits(['update:modelValue'])
  const props = defineProps({
    /**
     * 是否显示弹窗
     */
    modelValue: {
      type: Boolean,
      required: true
    },
    /**
     * 跳转的路由名称
     */
    path: {
      type: String,
      required: true
    }
  })

  const storeUserInfo = useStoreUserInfo()

  const popupRef = ref<any>(null)
  const timer = ref<NodeJS.Timer | null>(null)

  // #ifdef APP
  const plugin = uni.requireNativePlugin('mylibrary')
  // #endif

  // 登录成功处理
  const loginSuccess = (res: ApiResponseResult.Login) => {
    const { path } = props

    storeUserInfo.updateStoreUserInfo({ token: res.aac002, ...res })

    showLoading()
    if (path) {
      redirectTo(path)
    } else {
      navigateBack()
    }
  }

  // 根据身份证号获取用户信息
  const getDataByUserInfo = (userInfo: IdCardInfo | null) => {
    // #ifdef APP
    if (userInfo) {
      emit('update:modelValue', false)
      const { aac002, aac003, address, userlifebegin, userlifeend, nation, grantdept } = userInfo
      requestLogin(aac003, aac002, '01', address, nation, grantdept, userlifebegin + '-' + userlifeend)
        .then((res) => {
          loginSuccess(res)
        })
        .catch(() => {
          showModal('登录失败')
        })
    }
    // #endif

    // #ifdef H5
    emit('update:modelValue', false)
    requestLogin(
      '曾小明',
      '540102200005134754',
      '01',
      '四川省遂宁市安居区白马镇',
      '汉',
      '遂宁市安居区公安机关',
      '20220201-20220909'
    ).then((res) => {
      hideLoading()
      loginSuccess(res)
    })
    // #endif
  }

  // 获取身份证号
  const pluginGetIdcard = () => {
    timer.value && clearInterval(timer.value)

    timer.value = setInterval(() => {
      plugin.getIdcard('', (res: PluginResponseResult<IdCardInfo>) => {
        const { code, data } = res
        if (code === '200') {
          timer.value && clearInterval(timer.value)
          getDataByUserInfo(data)
        }
      })
    }, 5000)
  }

  // 初始化设备
  const pluginInit = () => {
    // #ifdef APP
    plugin.funInit('', (res: PluginResponseResult<any>) => {
      const { code, message } = res
      if (code === '200') {
        pluginGetIdcard()
      } else {
        showModal(message)
      }
    })
    // #endif
  }

  // 打开弹窗
  const opnePopup = () => {
    nextTick(() => {
      popupRef.value && popupRef.value.open('center')
      pluginInit()
    })
  }

  // 关闭弹窗
  const closePopup = () => {
    nextTick(() => {
      timer.value && clearInterval(timer.value)
      popupRef.value && popupRef.value.close()
    })
  }

  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        opnePopup()
      } else {
        closePopup()
      }
    }
  )
</script>

<style lang="scss" scoped>
  .login-popup-idcard {
    width: 100%;
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.25rem;
    .title {
      border-bottom: 1px solid #dbe2ea;
      position: relative;
      padding-right: 2rem;
      padding-bottom: 1.5rem;
      .left {
        color: #343434;
        line-height: 1;
        font-size: 1.875rem;
        .zh-cn {
          font-weight: 700;
        }
        .tibetan {
          line-height: 2.375rem;
          font-weight: 400;
          padding-top: 1rem;
        }
      }
      .right {
        position: absolute;
        right: 0;
        top: 1rem;
        color: #d8d8d8;
        font-size: 2rem;
      }
    }
    .text-tip {
      font-size: 1.75rem;
      color: #676767;
      line-height: 3.625rem;
      padding-top: 1.5rem;
      .zh-cn {
        display: flex;
        align-items: center;
        .val {
          color: #0a7bff;
        }
      }
      .text-tip {
        font-size: 1.5rem;
        padding-top: 0.25rem;
        line-height: 2.625rem;
      }
    }
    .img-tip {
      padding-top: 1.5rem;
      padding-bottom: 0.625rem;
      .img {
        display: block;
        width: 37.5rem;
        height: 21.25rem;
        margin: 0 auto;
      }
    }
  }
</style>
