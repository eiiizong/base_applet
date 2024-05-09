<template>
  <demo-block title="基础用法" padding>
    <ta-tag class="demo-margin-right" type="primary">标签</ta-tag>
    <ta-tag class="demo-margin-right" type="success">标签</ta-tag>
    <ta-tag class="demo-margin-right" type="danger">标签</ta-tag>
    <ta-tag class="demo-margin-right" type="warning">标签</ta-tag>
  </demo-block>

  <demo-block title="圆角样式" padding>
    <ta-tag class="demo-margin-right" round type="primary">标签</ta-tag>
    <ta-tag class="demo-margin-right" round type="success">标签</ta-tag>
    <ta-tag class="demo-margin-right" round type="danger">标签</ta-tag>
    <ta-tag class="demo-margin-right" round type="warning">标签</ta-tag>
  </demo-block>

  <demo-block title="标记样式" padding>
    <ta-tag class="demo-margin-right" mark type="primary">标签</ta-tag>
    <ta-tag class="demo-margin-right" mark type="success">标签</ta-tag>
    <ta-tag class="demo-margin-right" mark type="danger">标签</ta-tag>
    <ta-tag class="demo-margin-right" mark type="warning">标签</ta-tag>
  </demo-block>

  <demo-block title="空心样式" padding>
    <ta-tag class="demo-margin-right" plain type="primary">标签</ta-tag>
    <ta-tag class="demo-margin-right" plain type="success">标签</ta-tag>
    <ta-tag class="demo-margin-right" plain type="danger">标签</ta-tag>
    <ta-tag class="demo-margin-right" plain type="warning">标签</ta-tag>
  </demo-block>

  <demo-block title="自定义颜色" padding>
    <ta-tag class="demo-margin-right" color="#f2826a">标签</ta-tag>
    <ta-tag class="demo-margin-right" color="#7232dd">标签</ta-tag>
    <ta-tag class="demo-margin-right" color="#7232dd" plain>标签</ta-tag>
    <ta-tag class="demo-margin-right" color="#7232dd" text-color="#f00">标签</ta-tag>
  </demo-block>

  <demo-block title="标签大小" padding>
    <ta-tag class="demo-margin-right" type="danger">标签</ta-tag>
    <ta-tag class="demo-margin-right" type="danger" size="medium">标签</ta-tag>
    <ta-tag class="demo-margin-right" type="danger" size="large">标签</ta-tag>
  </demo-block>

  <demo-block title="可关闭标签" padding>
    <ta-tag
      v-if="show.primary"
      class="demo-margin-right"
      type="primary"
      size="medium"
      closeable
      id="primary"
      @close="show.primary = false"
    >
      标签
    </ta-tag>
    <ta-tag
      v-if="show.success"
      class="demo-margin-right"
      type="success"
      size="medium"
      closeable
      id="success"
      @close="show.success = false"
    >
      标签
    </ta-tag>
  </demo-block>
</template>

<script setup lang="ts">
  import DemoBlock from '../components/demo-block/index.vue'

  const show = ref({
    success: true,
    primary: true
  })
</script>

<style lang="scss" scoped>
  .demo-margin-right {
    margin-right: 20rpx;
  }
</style>
