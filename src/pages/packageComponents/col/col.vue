<template>
  <demo-block title="基础用法" padding>
    <ta-row>
      <ta-col span="8" class="dark">span: 8</ta-col>
      <ta-col span="8" class="light">span: 8</ta-col>
      <ta-col span="8" class="dark">span: 8</ta-col>
    </ta-row>

    <ta-row>
      <ta-col span="4" class="dark">span: 4</ta-col>
      <ta-col span="10" offset="4" class="light">offset: 4, span: 10</ta-col>
    </ta-row>

    <ta-row>
      <ta-col offset="12" span="12" class="dark">offset: 12, span: 12</ta-col>
    </ta-row>
  </demo-block>

  <demo-block title="在列元素之间增加间距" padding>
    <ta-row gutter="20">
      <ta-col span="8" class="dark">span: 8</ta-col>
      <ta-col span="8" class="light">span: 8</ta-col>
      <ta-col span="8" class="dark">span: 8</ta-col>
    </ta-row>
  </demo-block>
</template>

<script setup lang="ts">
  import DemoBlock from '../components/demo-block/index.vue'
</script>

<style lang="scss" scoped>
  .dark,
  .light {
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 10px;
    background-clip: content-box;
  }

  .dark {
    background-color: #39a9ed;
  }

  .light {
    background-color: #66c6f2;
  }
</style>
