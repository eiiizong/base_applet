<template>
  <demo-block title="按钮类型" padding>
    <view class="row">
      <ta-button class="demo-margin-right">默认按钮</ta-button>
      <ta-button type="primary" class="demo-margin-right">主要按钮</ta-button>
      <ta-button type="info" class="demo-margin-right">信息按钮</ta-button>
    </view>
    <ta-button type="danger" class="demo-margin-right">危险按钮</ta-button>
    <ta-button type="warning">警告按钮</ta-button>
  </demo-block>

  <demo-block title="朴素按钮" padding>
    <ta-button type="primary" plain class="demo-margin-right">朴素按钮</ta-button>
    <ta-button type="info" plain>朴素按钮</ta-button>
  </demo-block>

  <demo-block title="细边框" padding>
    <ta-button type="primary" plain hairline class="demo-margin-right">细边框按钮</ta-button>
    <ta-button type="info" plain hairline>细边框按钮</ta-button>
  </demo-block>

  <demo-block title="禁用状态" padding>
    <ta-button type="primary" disabled class="demo-margin-right">禁用状态</ta-button>
    <ta-button type="info" disabled>禁用状态</ta-button>
  </demo-block>

  <demo-block title="加载状态" padding>
    <ta-button loading type="primary" class="demo-margin-right" />
    <ta-button loading type="primary" loading-type="spinner" class="demo-margin-right" />
    <ta-button loading type="info" loading-text="加载中..." />
  </demo-block>

  <demo-block title="按钮形状" padding>
    <ta-button type="primary" square class="demo-margin-right">方形按钮</ta-button>
    <ta-button type="info" round>圆形按钮</ta-button>
  </demo-block>

  <demo-block title="图标按钮" padding>
    <ta-button type="primary" icon="star-o" class="demo-margin-right" />
    <ta-button type="primary" icon="star-o" class="demo-margin-right">按钮</ta-button>
    <ta-button plain type="primary" icon="https://img.yzcdn.cn/vant/logo.png">按钮</ta-button>
  </demo-block>

  <demo-block title="按钮尺寸" padding>
    <ta-button type="primary" size="large" block custom-class="demo-margin-bottom">大号按钮</ta-button>
    <ta-button type="primary" class="demo-margin-right">普通按钮</ta-button>
    <ta-button type="primary" size="small" class="demo-margin-right">小型按钮</ta-button>
    <ta-button type="primary" size="mini">迷你按钮</ta-button>
  </demo-block>

  <demo-block title="块级元素" padding>
    <ta-button type="primary" custom-class="demo-margin-bottom">普通按钮</ta-button>
    <ta-button type="primary" block>块级元素</ta-button>
  </demo-block>

  <demo-block title="自定义颜色" padding>
    <ta-button color="#7232dd" class="demo-margin-right">单色按钮</ta-button>
    <ta-button color="#7232dd" class="demo-margin-right" plain>单色按钮</ta-button>
    <ta-button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</ta-button>
  </demo-block>
</template>

<script setup lang="ts">
  import DemoBlock from '../components/demo-block/index.vue'
</script>

<style lang="scss" scoped>
  .row {
    height: 88rpx;
    margin-bottom: 30rpx;
  }

  .demo-margin-left {
    margin-left: 20rpx;
  }

  .demo-margin-right {
    margin-right: 20rpx;
  }

  .demo-margin-bottom {
    display: block;
    margin-bottom: 30rpx;
  }

  ::v-deep .demo-col-dark {
    //
  }
</style>
