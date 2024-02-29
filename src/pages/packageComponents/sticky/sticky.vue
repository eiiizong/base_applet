<template>
  <demo-block title="基础用法">
    <ta-sticky>
      <ta-button type="primary" custom-style="margin-left: 30rpx">基础用法</ta-button>
    </ta-sticky>
  </demo-block>

  <demo-block title="吸顶距离">
    <ta-sticky :offset-top="50">
      <ta-button type="info" custom-style="margin-left: 230rpx">吸顶距离</ta-button>
    </ta-sticky>
  </demo-block>

  <demo-block title="指定容器">
    <view ref="container" style="height: 150px; background-color: #fff">
      <ta-sticky :container="container">
        <ta-button type="warning" custom-style="margin-left: 430rpx;">指定容器</ta-button>
      </ta-sticky>
    </view>
  </demo-block>

  <demo-block title="嵌套在 scroll-view 内使用">
    <scroll-view @scroll="onScroll" scroll-y id="scroller" style="height: 500rpx; background-color: #eee">
      <view style="height: 1000rpx; padding-top: 100rpx; padding-left: 30rpx">
        <ta-sticky :scroll-top="scrollTop" :offset-top="offsetTop">
          <ta-button type="warning">嵌套在 scroll-view 内</ta-button>
        </ta-sticky>
      </view>
    </scroll-view>
  </demo-block>
</template>

<script setup lang="ts">
  import DemoBlock from '../components/demo-block/index.vue'

  const offsetTop = ref(0)
  const scrollTop = ref(0)

  const container = ref(() => {
    //
  })

  const onScroll = (event: any) => {
    uni
      .createSelectorQuery()
      .select('#scroller')
      .boundingClientRect((res) => {
        scrollTop.value = event.detail.scrollTop
        offsetTop.value = res.top
      })
      .exec()
  }

  onMounted(() => {
    container.value = () => uni.createSelectorQuery().select('#container')
  })
</script>

<style lang="scss" scoped></style>
