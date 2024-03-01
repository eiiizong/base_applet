<template>
  <div class="demo-page-overlay">
    <demo-block title="基础用法" padding>
      <ta-button type="primary" @click="show = true">显示遮罩层</ta-button>
      <ta-overlay :show="show" @click="show = false" />
    </demo-block>

    <demo-block title="从页面中脱离" padding>
      <ta-button type="primary" @click="showRootPortal = true">显示遮罩层</ta-button>
      <ta-overlay :show="showRootPortal" root-portal @click="showRootPortal = false" />
    </demo-block>

    <demo-block title="嵌入内容" padding>
      <ta-button type="primary" @click="showEmbedded = true">嵌入内容</ta-button>
      <ta-overlay :show="showEmbedded" @click="showEmbedded = false">
        <view class="wrapper">
          <div class="block" @click.stop="noop" />
        </view>
      </ta-overlay>
    </demo-block>
  </div>
</template>

<script setup lang="ts">
  import DemoBlock from '../components/demo-block/index.vue'

  const show = ref(false)
  const showRootPortal = ref(false)
  const showEmbedded = ref(false)

  const noop = () => {
    //
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .block {
      width: 240rpx;
      height: 240rpx;
      background-color: #fff;
    }
  }
</style>
