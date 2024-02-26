<template>
  <!-- #ifdef MP-WEIXIN -->
  <demo-block title="微信开放能力" padding>
    <ta-button
      type="primary"
      open-type="contact"
      custom-class="demo-margin-bottom demo-margin-right"
      @contact="onContact"
    >
      打开客服会话
    </ta-button>
    <ta-button type="primary" open-type="liveActivity" custom-class="demo-margin-bottom demo-margin-right">
      获取新的一次性订阅消息下发机制使用的 code
    </ta-button>
    <ta-button type="primary" open-type="share" custom-class="demo-margin-bottom demo-margin-right">分享</ta-button>
    <ta-button type="primary" open-type="getPhoneNumber" custom-class="demo-margin-bottom demo-margin-right">
      获取手机号
    </ta-button>
    <ta-button type="primary" open-type="getRealtimePhoneNumber" custom-class="demo-margin-bottom demo-margin-right">
      手机号实时验证
    </ta-button>
    <ta-button type="primary" open-type="getUserInfo" custom-class="demo-margin-bottom demo-margin-right">
      获取用户信息
    </ta-button>
    <ta-button type="primary" open-type="launchApp" custom-class="demo-margin-bottom demo-margin-right">
      打开APP
    </ta-button>
    <ta-button type="primary" open-type="openSetting" custom-class="demo-margin-bottom demo-margin-right">
      打开授权设置页
    </ta-button>
    <ta-button type="primary" open-type="feedback" custom-class="demo-margin-bottom demo-margin-right">
      打开“意见反馈”页面
    </ta-button>
    <ta-button type="primary" open-type="chooseAvatar" custom-class="demo-margin-bottom demo-margin-right">
      获取用户头像
    </ta-button>
    <ta-button type="primary" open-type="agreePrivacyAuthorization" custom-class="demo-margin-bottom demo-margin-right">
      用户同意隐私协议按钮
    </ta-button>
  </demo-block>
  <!-- #endif -->
  <demo-block title="按钮类型" padding>
    <view class="row">
      <ta-button custom-class="demo-margin-right">默认按钮</ta-button>
      <ta-button type="primary" custom-class="demo-margin-right">主要按钮</ta-button>
      <ta-button type="info" custom-class="demo-margin-right">信息按钮</ta-button>
    </view>
    <ta-button type="danger" custom-class="demo-margin-right">危险按钮</ta-button>
    <ta-button type="warning">警告按钮</ta-button>
  </demo-block>

  <demo-block title="按钮尺寸" padding>
    <ta-button type="primary" size="large" block custom-class="demo-margin-bottom">大号按钮</ta-button>
    <ta-button type="primary" custom-class="demo-margin-right">普通按钮</ta-button>
    <ta-button type="primary" size="small" custom-class="demo-margin-right">小型按钮</ta-button>
    <ta-button type="primary" size="mini">迷你按钮</ta-button>
  </demo-block>

  <demo-block title="自定义颜色" padding>
    <ta-button color="#7232dd" custom-class="demo-margin-right">单色按钮</ta-button>
    <ta-button color="#7232dd" custom-class="demo-margin-right" plain>单色按钮</ta-button>
    <ta-button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</ta-button>
  </demo-block>

  <demo-block title="图标按钮" padding>
    <ta-button type="primary" icon="star-o" custom-class="demo-margin-right" />
    <ta-button type="primary" icon="star-o" custom-class="demo-margin-right">按钮</ta-button>
    <ta-button plain type="primary" icon="https://img.yzcdn.cn/vant/logo.png">按钮</ta-button>
  </demo-block>

  <demo-block title="块级元素" padding>
    <ta-button type="primary" custom-class="demo-margin-bottom">普通按钮</ta-button>
    <ta-button type="primary" block>块级元素</ta-button>
  </demo-block>

  <demo-block title="朴素按钮" padding>
    <ta-button type="primary" plain custom-class="demo-margin-right">朴素按钮</ta-button>
    <ta-button type="info" plain>朴素按钮</ta-button>
  </demo-block>

  <demo-block title="按钮形状" padding>
    <ta-button type="primary" square custom-class="demo-margin-right">方形按钮</ta-button>
    <ta-button type="info" round>圆形按钮</ta-button>
  </demo-block>

  <demo-block title="禁用状态" padding>
    <ta-button type="primary" disabled custom-class="demo-margin-right">禁用状态</ta-button>
    <ta-button type="info" disabled>禁用状态</ta-button>
  </demo-block>

  <demo-block title="细边框" padding>
    <ta-button type="primary" plain hairline custom-class="demo-margin-right">细边框按钮</ta-button>
    <ta-button type="info" plain hairline>细边框按钮</ta-button>
  </demo-block>

  <demo-block title="加载状态" padding>
    <ta-button loading type="primary" custom-class="demo-margin-right" />
    <ta-button loading type="primary" loading-type="spinner" custom-class="demo-margin-right" />
    <ta-button loading type="info" loading-text="加载中..." />
  </demo-block>
</template>

<script setup lang="ts">
  import DemoBlock from '../components/demo-block/index.vue'

  /* #ifdef MP-WEIXIN */
  /**
   * 客服消息回调，open-type="contact"时有效
   */
  const onContact = (e: any) => {
    console.log(e, 99)
  }
  /* #endif */
</script>

<style lang="scss" scoped>
  .row {
    height: 88rpx;
    margin-bottom: 30rpx;
  }

  ::v-deep.demo-margin-left {
    margin-left: 20rpx;
  }

  ::v-deep.demo-margin-right {
    margin-right: 20rpx;
  }

  ::v-deep.demo-margin-bottom {
    margin-bottom: 30rpx;
  }
</style>
