<template>
  <demo-block title="基础用法" padding>
    <ta-row>
      <ta-col span="8" custom-class="demo-col-dark">span: 8</ta-col>
      <ta-col span="8" custom-class="demo-col-light">span: 8</ta-col>
      <ta-col span="8" custom-class="demo-col-dark">span: 8</ta-col>
    </ta-row>

    <ta-row>
      <ta-col span="4" custom-class="demo-col-dark">span: 4</ta-col>
      <ta-col span="10" offset="4" custom-class="demo-col-light">offset: 4, span: 10</ta-col>
    </ta-row>

    <ta-row>
      <ta-col offset="12" span="12" custom-class="demo-col-dark">offset: 12, span: 12</ta-col>
    </ta-row>
  </demo-block>

  <demo-block title="在列元素之间增加间距" padding>
    <ta-row :gutter="20">
      <ta-col span="6" custom-class="demo-col-dark">span: 6</ta-col>
      <ta-col span="6" custom-class="demo-col-light">span: 6</ta-col>
      <ta-col span="6" custom-class="demo-col-dark">span: 6</ta-col>
      <ta-col span="6" custom-class="demo-col-dark">span: 6</ta-col>
    </ta-row>
  </demo-block>
</template>

<script setup lang="ts">
  import DemoBlock from '../components/demo-block/index.vue'
</script>

<style lang="scss" scoped>
  ::v-deep .demo-col-dark,
  ::v-deep .demo-col-light {
    color: #fff;
    font-size: 26rpx;
    line-height: 60rpx;
    text-align: center;
    margin-bottom: 20rpx;
    background-clip: content-box;
  }

  ::v-deep .demo-col-dark {
    background-color: #39a9ed;
  }

  ::v-deep .demo-col-light {
    background-color: #66c6f2;
  }
</style>
