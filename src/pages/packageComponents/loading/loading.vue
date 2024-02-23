<template>
  <demo-block title="加载类型" padding>
    <ta-loading custom-class="demo-loading" />
    <ta-loading custom-class="demo-loading" type="spinner" />
  </demo-block>

  <demo-block title="自定义颜色" padding>
    <ta-loading custom-class="demo-loading" color="#1989fa" />
    <ta-loading custom-class="demo-loading" type="spinner" color="#1989fa" />
  </demo-block>

  <demo-block title="自定义大小" padding>
    <ta-loading custom-class="demo-loading" size="40rpx" />
    <ta-loading custom-class="demo-loading" type="spinner" size="40rpx" />
  </demo-block>

  <demo-block title="加载文案" padding>
    <ta-loading custom-class="demo-loading" size="48rpx">加载中...</ta-loading>
  </demo-block>

  <demo-block title="垂直排列" padding>
    <ta-loading custom-class="demo-loading" size="48rpx" vertical>加载中...</ta-loading>
  </demo-block>

  <demo-block title="自定义文本颜色" padding>
    <ta-loading custom-class="demo-loading" vertical color="#1989fa" text-color="#1989fa">加载中...</ta-loading>
    <ta-loading custom-class="demo-loading" vertical color="#1989fa">加载中...</ta-loading>
  </demo-block>
</template>

<script setup lang="ts">
  import DemoBlock from '../components/demo-block/index.vue'
</script>

<style lang="scss" scoped>
  ::v-deep .demo-loading {
    margin: 8rpx 32rpx 8rpx 0;
  }
</style>
