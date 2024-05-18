<template>
  <div class="publicity-header">
    <input
      v-model="keyword"
      class="input"
      type="text"
      confirm-type="search"
      placeholder-style="color:rgba(255, 255, 255, 0.8);"
      placeholder="请输入关键字搜索"
      @confirm="onSearch"
    />
  </div>
</template>

<script setup lang="ts">
  const keyword = ref('')

  const onSearch = () => {
    console.log(keyword.value)
  }
</script>

<style lang="scss" scoped>
  .publicity-header {
    width: 100%;
    position: relative;
    background-color: $color-primary;
    padding: $spacing;
    box-sizing: border-box;
    .input {
      display: block;
      width: 100%;
      height: 72rpx;
      border-radius: 50px;
      background-color: rgba(#ffff, 0.6);
      padding: 16rpx 24rpx;
      font-size: 28rpx;
      line-height: 40rpx;
      font-weight: 400;
      text-align: left;
      color: #fff;
      box-sizing: border-box;
    }
  }
</style>
