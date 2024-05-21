<template>
  <div class="publicity-header">
    <input
      v-model="keyword"
      class="input"
      type="text"
      confirm-type="search"
      placeholder-style="color:rgba(255, 255, 255, 0.8);"
      :placeholder="$t('project.header.searchPlaceholder')"
      @confirm="onSearch"
    />
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['query'])

  /**
   * 查询关键词
   */
  const keyword = ref('')

  /**
   * 点击查询按钮
   */
  const onSearch = () => {
    emit('query', keyword.value)
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
