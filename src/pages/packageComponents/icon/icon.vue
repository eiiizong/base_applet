<template>
  <div class="demo-icon">
    <demo-block title="基础用法">
      <ta-col custom-class="col" span="6">
        <ta-icon :name="demoIcon" size="32px" custom-class="icon" />
      </ta-col>
      <ta-col custom-class="col" span="6">
        <ta-icon :name="demoImage" size="32px" custom-class="icon" />
      </ta-col>
    </demo-block>
    <demo-block title="提示信息">
      <ta-col custom-class="col" span="6">
        <ta-icon :name="demoIcon" size="32px" custom-class="icon" dot />
      </ta-col>
      <ta-col custom-class="col" span="6">
        <ta-icon :name="demoIcon" size="32px" custom-class="icon" info="9" />
      </ta-col>
      <ta-col custom-class="col" span="6">
        <ta-icon :name="demoIcon" size="32px" custom-class="icon" info="99+" />
      </ta-col>
    </demo-block>
    <demo-block title="图标颜色">
      <ta-col custom-class="col" span="6">
        <ta-icon :name="demoIcon" size="32px" custom-class="icon" color="#1989fa" />
      </ta-col>
      <ta-col custom-class="col" span="6">
        <ta-icon :name="demoIcon" size="32px" custom-class="icon" color="#07c160" />
      </ta-col>
    </demo-block>
    <demo-block title="图标大小">
      <ta-col custom-class="col" span="6">
        <ta-icon :name="demoIcon" size="40" custom-class="icon" />
      </ta-col>
      <ta-col custom-class="col" span="6">
        <ta-icon :name="demoIcon" size="3rem" custom-class="icon" />
      </ta-col>
    </demo-block>
  </div>
</template>

<script setup lang="ts">
  import DemoBlock from '../components/demo-block/index.vue'

  const demoIcon = ref('chat-o')
  const demoImage = ref('https://b.yzcdn.cn/vant/icon-demo-1126.png')
</script>

<style lang="scss" scoped>
  .home {
    background-color: $color-primary;
    // @include textOverflow(1);
  }
</style>
