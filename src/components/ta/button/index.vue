<template>
  <button
    :id="id || buttonId"
    :data-detail="dataset"
    :class="rootClass"
    :hover-class="disabled || loading ? '' : basicClass + '--active hover-class'"
    :lang="lang"
    :form-type="formType"
    :style="rootStyle"
    :open-type="getOpenType"
    :business-id="businessId"
    :session-from="sessionFrom"
    :send-message-title="sendMessageTitle"
    :send-message-path="sendMessagePath"
    :send-message-img="sendMessageImg"
    :show-message-card="showMessageCard"
    :app-parameter="appParameter"
    :aria-label="ariaLabel"
    @click="onClick"
    @getuserinfo="onGetUserInfo"
    @contact="onContact"
    @getphonenumber="onGetPhoneNumber"
    @getrealtimephonenumber="onGetRealTimePhoneNumber"
    @agreeprivacyauthorization="onAgreePrivacyAuthorization"
    @error="onError"
    @launchapp="onLaunchApp"
    @opensetting="onOpenSetting"
    @chooseavatar="onChooseAvatar"
  >
    <block v-if="loading">
      <ta-loading custom-class="loading-class" :size="loadingSize" :type="loadingType" :color="loadingColor" />
      <view v-if="loadingText" :class="basicClass + '__loading-text'">
        {{ loadingText }}
      </view>
    </block>
    <block v-else>
      <ta-icon
        v-if="icon"
        size="1.2em"
        :name="icon"
        :class-prefix="classPrefix"
        :custom-class="basicClass + '__icon'"
        custom-style="line-height: inherit;"
      />
      <view :class="[icon ? basicClass + '__text-icon' : '', basicClass + '__text']">
        <slot />
      </view>
    </block>
  </button>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue'

  import { bem } from '../utils'
  import { GLOB_COMPONENT_CLASS_PREFIX } from '../constant'
  import { canIUseGetUserProfile } from '../common/version'
  /**
   * 基础类名
   */
  const basicClass = `${GLOB_COMPONENT_CLASS_PREFIX}-button`
  const emit = defineEmits([
    'click',
    'getuserinfo',
    'contact',
    'getphonenumber',
    'getrealtimephonenumber',
    'agreeprivacyauthorization',
    'error',
    'launchapp',
    'opensetting',
    'chooseavatar',
  ])
  const props = defineProps({
    /**
     * 标识符
     */
    id: {
      type: String,
      default: () => '',
    },
    /**
     * 标识符，作为原生button组件的id值
     */
    buttonId: {
      type: String,
      default: () => '',
    },
    /**
     * 按钮类型，可选值为 primary info warning danger
     */
    type: {
      type: String as PropType<'default' | 'primary' | 'info' | 'warning' | 'danger'>,
      default: () => 'default',
    },
    /**
     * 按钮尺寸，可选值为 normal large small mini
     */
    size: {
      type: String as PropType<'normal' | 'large' | 'small' | 'mini'>,
      default: () => 'normal',
    },
    /**
     * 按钮颜色，支持传入linear-gradient渐变色
     */
    color: {
      type: String,
      default: () => '',
    },
    /**
     * 左侧图标名称或图片链接，可选值见 Icon 组件
     */
    icon: {
      type: String,
      default: () => '',
    },
    /**
     * 图标类名前缀，同 Icon 组件的 class-prefix 属性
     */
    classPrefix: {
      type: String,
      default: () => GLOB_COMPONENT_CLASS_PREFIX + '-icon',
    },
    /**
     * 是否为朴素按钮
     */
    plain: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 是否为块级元素
     */
    block: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 是否为圆形按钮
     */
    round: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 是否为方形按钮
     */
    square: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 是否禁用按钮
     */
    disabled: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 是否使用 0.5px 边框
     */
    hairline: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 是否显示为加载状态
     */
    loading: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 加载状态提示文字
     */
    loadingText: {
      type: String,
      default: () => '',
    },
    /**
     * 加载状态图标类型，可选值为 spinner
     */
    loadingType: {
      type: String as PropType<'circular' | 'spinner'>,
      default: () => 'circular',
    },
    /**
     * 加载图标大小
     */
    loadingSize: {
      type: String,
      default: () => '40rpx',
    },
    /**
     * 自定义样式
     */
    customStyle: {
      type: String,
      default: () => '',
    },
    /**
     * 微信开放能力，具体支持可参考 微信官方文档 https://developers.weixin.qq.com/miniprogram/dev/component/button.html
     *
     * contact 打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从 bindcontact 回调中获得具体信息，具体说明
     *
     * liveActivity 通过前端获取新的一次性订阅消息下发机制使用的 code
     *
     * share 触发用户转发，使用前建议先阅读使用指引
     *
     * getPhoneNumber 手机号快速验证，向用户申请，并在用户同意后，快速填写和验证手机，具体说明 （*小程序插件中不能使用*）
     *
     * getRealtimePhoneNumber 手机号实时验证，向用户申请，并在用户同意后，快速填写和实时验证手机号。具体说明 （*小程序插件中不能使用*）
     *
     * getUserInfo 	获取用户信息，可以从bindgetuserinfo回调中获取到用户信息 （*小程序插件中不能使用*）
     *
     * launchApp 打开APP，可以通过app-parameter属性设定向APP传的参数具体说明
     *
     * openSetting 打开授权设置页
     *
     * feedback 打开“意见反馈”页面，用户可提交反馈内容并上传日志，开发者可以登录小程序管理后台后进入左侧菜单“客服反馈”页面获取到反馈内容
     *
     * chooseAvatar 获取用户头像，可以从bindchooseavatar回调中获取到头像信息
     *
     * agreePrivacyAuthorization 户同意隐私协议按钮。用户点击一次此按钮后，所有已声明过的隐私接口可以正常调用。可通过 bindagreeprivacyauthorization 监听用户同意隐私协议事件。隐私合规开发指南详情可见《小程序隐私协议开发指南》
     */
    openType: {
      type: String as PropType<
        | 'contact'
        | 'liveActivity'
        | 'share'
        | 'getPhoneNumber'
        | 'getRealtimePhoneNumber'
        | 'getUserInfo'
        | 'launchApp'
        | 'openSetting'
        | 'feedback'
        | 'chooseAvatar'
        | 'agreePrivacyAuthorization'
      >,
      default: () => '',
    },
    /**
     * 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
     */
    appParameter: {
      type: String,
      default: () => '',
    },
    /**
     * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文
     */
    lang: {
      type: String as PropType<'en' | 'zh_CN' | 'zh_TW'>,
      default: () => 'en',
    },
    /**
     * 会话来源，open-type="contact"时有效
     */
    sessionFrom: {
      type: String,
      default: () => '',
    },
    /**
     * 客服消息子商户 id
     */
    businessId: {
      type: [Number],
    },
    /**
     * 会话内消息卡片标题，open-type="contact"时有效
     */
    sendMessageTitle: {
      type: String,
      default: () => '',
    },
    /**
     * 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
     */
    sendMessagePath: {
      type: String,
      default: () => '',
    },
    /**
     * 会话内消息卡片图片，open-type="contact"时有效
     */
    sendMessageImg: {
      type: String,
      default: () => '',
    },
    /**
     * 显示会话内消息卡片
     */
    showMessageCard: {
      type: String,
      default: () => 'false',
    },
    /**
     * 按钮 dataset，open-type 为 share 时，可在 onShareAppMessage 事件的 event.target.dataset.detail 中看到传入的值
     */
    dataset: {
      type: String as PropType<any>,
      default: () => '',
    },
    /**
     * 用于 form 组件，可选值为submit reset，点击分别会触发 form 组件的 submit/reset 事件
     */
    formType: {
      type: String as PropType<'' | 'submit' | 'reset'>,
      default: () => '',
    },
    /**
     * 根节点样式类
     */
    customClass: {
      type: String,
      default: () => '',
    },
    /**
     *
     */
    ariaLabel: {
      type: String,
      default: () => '',
    },
  })

  /**
   * 动态设置openType
   */
  const getOpenType = computed(() => {
    let str = ''
    const { disabled, loading, openType } = props
    if (disabled || loading || (canIUseGetUserProfile() && openType === 'getUserInfo')) {
      str = ''
    } else {
      if (openType) {
        str = openType
      }
    }
    return str
  })

  /**
   * 动态设置根标签类名
   */
  const rootClass = computed(() => {
    const { disabled, type, size, block, round, plain, square, loading, hairline, customClass } = props
    let str = ''
    str += bem('button', [
      type,
      size,
      { block, round, plain, square, loading, disabled, hairline, unclickable: disabled || loading },
    ])

    if (customClass) {
      str += ` ${customClass}`
    }

    if (hairline) {
      str += ` ${GLOB_COMPONENT_CLASS_PREFIX}-hairline--surround`
    }

    return str
  })

  /**
   * 动态设置根标签类名
   */
  const rootStyle = computed(() => {
    const { plain, color, customStyle } = props
    let str = ''

    if (!color) {
      return customStyle
    }

    str += `color: ${plain ? color : '#fff'}; `
    str += `background-color: ${plain ? '#fff' : color}; `

    if (color.indexOf('gradient') !== -1) {
      str += `border: 0; `
      str += `background-image: ${color}; `
      str += `color: #fff; `
    } else {
      str += `border-color: ${color}; `
    }

    if (customStyle) {
      str += ` ${customStyle} `
    }

    return str
  })

  /**
   * 动态设置loadingColor
   */
  const loadingColor = computed(() => {
    const { type, color, plain } = props

    if (type === 'default') {
      return '#c9c9c9'
    }

    if (plain) {
      return color ? color : '#c9c9c9'
    }

    return '#fff'
  })

  /**
   * 点击按钮，且按钮状态不为加载或禁用时触发
   */
  const onClick = (event: WechatMiniprogram.EventCallback) => {
    console.log('onClick===', event)
    const { disabled, loading } = props
    if (!disabled && !loading) {
      emit('click')
    }
  }

  /**
   * 用户点击该按钮时，会返回获取到的用户信息，从返回参数的 detail 中获取到的值同 wx.getUserInfo
   */
  const onGetUserInfo = (event: WechatMiniprogram.ButtonGetUserInfo) => {
    console.log('onGetUserInfo===', event)
    emit('getuserinfo')
  }

  /**
   * 客服消息回调
   */
  const onContact = (event: WechatMiniprogram.ButtonContact) => {
    console.log('onContact===', event)
    emit('contact')
  }

  /**
   * 获取用户手机号回调
   */
  const onGetPhoneNumber = (event: WechatMiniprogram.ButtonGetPhoneNumber) => {
    console.log('onGetPhoneNumber===', event)
    emit('getphonenumber')
  }

  /**
   * 获取手机号实时验证回调，open-type=getRealtimePhoneNumber 时有效
   */
  const onGetRealTimePhoneNumber = (event: WechatMiniprogram.ButtonGetPhoneNumber) => {
    console.log('onGetRealTimePhoneNumber===', event)
    emit('getrealtimephonenumber')
  }

  /**
   * 同意隐私协议回调，openType="agreePrivacyAuthorization"时有效
   */
  const onAgreePrivacyAuthorization = () => {
    emit('agreeprivacyauthorization')
  }

  /**
   * 当使用开放能力时，发生错误的回调
   */
  const onError = (event: WechatMiniprogram.ButtonError) => {
    console.log('onError===', event)
    emit('error')
  }

  /**
   * 在打开app后回调
   */
  const onLaunchApp = (event: WechatMiniprogram.ButtonLaunchApp) => {
    console.log('onLaunchApp===', event)
    emit('launchapp')
  }

  /**
   * 在打开授权设置页后回调
   */
  const onOpenSetting = (event: WechatMiniprogram.ButtonOpenSetting) => {
    console.log('onOpenSetting===', event)
    emit('opensetting')
  }

  /**
   * 当 open-type 的值为 chooseAvatar 时，选择头像之后的回调
   */
  const onChooseAvatar = (event: any) => {
    console.log('onChooseAvatar===', event)
    emit('chooseavatar')
  }
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;
  @import '../common/style/hairline.scss';

  .#{$namespace}-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0;
    text-align: center;
    vertical-align: middle;
    appearance: none;
    -webkit-appearance: none;
    -webkit-text-size-adjust: 100%;
    height: var(--button-default-height, $button-default-height);
    line-height: var(--button-line-height, $button-line-height);
    font-size: var(--button-default-font-size, $button-default-font-size);
    transition: opacity $animation-duration-fast;
    border-radius: var(--button-border-radius, $button-border-radius);

    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      border: inherit;
      border-radius: inherit; /* inherit parent's border radius */
      transform: translate(-50%, -50%);
      opacity: 0;
      content: ' ';
      background-color: $black;
      border-color: $black;
    }

    // reset weapp default border
    &::after {
      border-width: 0;
    }

    &--active::before {
      opacity: 0.15;
    }

    &--unclickable::after {
      display: none;
    }

    &--default {
      color: var(--button-default-color, $button-default-color);
      background: var(--button-default-background-color, $button-default-background-color);
      border: var(--button-border-width, $button-border-width) solid
        var(--button-default-border-color, $button-default-border-color);
    }

    &--primary {
      color: var(--button-primary-color, $button-primary-color);
      background-color: var(--button-primary-background-color, $button-primary-background-color);
      border: var(--button-border-width, $button-border-width) solid
        var(--button-primary-border-color, $button-primary-border-color);
    }

    &--info {
      color: var(--button-info-color, $button-info-color);
      background-color: var(--button-info-background-color, $button-info-background-color);
      border: var(--button-border-width, $button-border-width) solid
        var(--button-info-border-color, $button-info-border-color);
    }

    &--danger {
      color: var(--button-danger-color, $button-danger-color);
      background-color: var(--button-danger-background-color, $button-danger-background-color);
      border: var(--button-border-width, $button-border-width) solid
        var(--button-danger-border-color, $button-danger-border-color);
    }

    &--warning {
      color: var(--button-warning-color, $button-warning-color);
      background-color: var(--button-warning-background-color, $button-warning-background-color);
      border: var(--button-border-width, $button-border-width) solid
        var(--button-warning-border-color, $button-warning-border-color);
    }

    &--plain {
      background-color: var(--button-plain-background-color, $button-plain-background-color);
      &.#{$namespace}-button {
        &--primary {
          color: var(--button-primary-background-color, $button-primary-background-color);
        }

        &--info {
          color: var(--button-info-background-color, $button-info-background-color);
        }

        &--danger {
          color: var(--button-danger-background-color, $button-danger-background-color);
        }

        &--warning {
          color: var(--button-warning-background-color, $button-warning-background-color);
        }
      }
    }

    &--large {
      width: 100%;
      height: var(--button-large-height, $button-large-height);
    }

    &--normal {
      padding: 0 15px;
      font-size: var(--button-normal-font-size, $button-normal-font-size);
    }

    &--small {
      min-width: var(--button-small-min-width, $button-small-min-width);
      height: var(--button-small-height, $button-small-height);
      padding: 0 var(--padding-xs, $padding-xs);
      font-size: var(--button-small-font-size, $button-small-font-size);
    }

    // mini图标默认宽度50px，文字不能超过4个
    &--mini {
      display: inline-block;
      min-width: var(--button-mini-min-width, $button-mini-min-width);
      height: var(--button-mini-height, $button-mini-height);
      font-size: var(--button-mini-font-size, $button-mini-font-size);

      & + .van-button--mini {
        margin-left: 5px;
      }
    }

    &--block {
      display: flex;
      width: 100%;
    }

    &--round {
      border-radius: var(--button-round-border-radius, $button-round-border-radius);
    }

    &--square {
      border-radius: 0;
    }

    &--disabled {
      opacity: var(--button-disabled-opacity, $button-disabled-opacity);
    }

    &__text {
      display: inline;
      &-icon.#{$namespace}-button__text:not(:empty) {
        margin-left: $padding-base;
      }
    }

    &__loading-text,
    &--hairline {
      padding-top: 1px; // add 1px padding for text vertical align middle
      border-width: 0;

      &::after {
        border-color: inherit;
        border-width: 1px;
        border-radius: calc(var(--button-border-radius, $button-border-radius) * 2);
      }
      &.#{$namespace}-button {
        &--round::after {
          border-radius: var(--button-round-border-radius, $button-round-border-radius);
        }
        &--square::after {
          border-radius: 0;
        }
      }
    }
  }

  ::v-deep.#{$namespace}-button__icon {
    min-width: 1em;
    line-height: inherit !important;
    vertical-align: top;
  }
</style>
