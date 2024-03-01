<template>
  <div class="demo-page-popup">
    <demo-block title="基础用法">
      <ta-cell title="展示弹出层" is-link @click="show.basic = true" />
      <ta-popup :show="show.basic" custom-style="padding: 30px 50px" @close="show.basic = false">内容</ta-popup>
    </demo-block>

    <demo-block title="弹出位置">
      <ta-cell title="顶部弹出" is-link @click="show.top = true" />
      <ta-cell title="底部弹出" is-link @click="show.bottom = true" />
      <ta-cell title="左侧弹出" is-link @click="show.left = true" />
      <ta-cell title="右侧弹出" is-link @click="show.right = true" />

      <ta-popup :show="show.top" position="top" custom-style="height: 20%" @close="show.top = false" />
      <ta-popup :show="show.bottom" position="bottom" custom-style="height: 20%" @close="show.bottom = false" />
      <ta-popup :show="show.left" position="left" custom-style="width: 20%; height: 100%" @close="show.left = false" />
      <ta-popup
        :show="show.right"
        position="right"
        custom-style="width: 20%; height: 100%"
        @close="show.right = false"
      />
    </demo-block>

    <demo-block title="关闭图标">
      <ta-cell title="关闭图标" is-link @click="show.closeIcon = true" />
      <ta-cell title="自定义图标" is-link @click="show.customCloseIcon = true" />
      <ta-cell title="图标位置" is-link @click="show.customIconPosition = true" />

      <ta-popup
        :show="show.closeIcon"
        closeable
        position="bottom"
        custom-style="height: 20%"
        @close="show.closeIcon = false"
      />

      <ta-popup
        :show="show.customCloseIcon"
        closeable
        close-icon="close"
        position="bottom"
        custom-style="height: 20%"
        @close="show.customCloseIcon = false"
      />

      <ta-popup
        :show="show.customIconPosition"
        closeable
        close-icon-position="top-left"
        position="bottom"
        custom-style="height: 20%"
        @close="show.customIconPosition = false"
      />
    </demo-block>

    <demo-block title="圆角弹窗">
      <ta-cell title="圆角弹窗" is-link @click="show.round = true" />

      <ta-popup :show="show.round" round position="bottom" custom-style="height: 20%" @close="show.round = false" />
    </demo-block>
  </div>
</template>

<script setup lang="ts">
  import DemoBlock from '../components/demo-block/index.vue'

  const show = ref({
    basic: false,
    top: false,
    bottom: false,
    left: false,
    right: false,
    round: false,
    closeIcon: false,
    customCloseIcon: false,
    customIconPosition: false,
  })
</script>

<style lang="scss" scoped>
  .demo-page-popup {
    background-color: #f6f6f6;
  }
</style>
