<template>
  <div class="divider-load">
    <span class="text">{{ isLoaded ? '没有更多数据了' : '上拉加载更多' }}</span>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['loadMore'])

  const props = defineProps({
    /**
     * 是否加载完成
     */
    isLoaded: {
      type: Boolean,
      required: true
    }
  })
</script>
<style lang="scss" scoped>
  .divider-load {
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .text {
      color: $color-text-placeholder;
      position: relative;
      background-color: transparent;
      font-size: 24rpx;
      font-weight: 400;
      z-index: 1;
      padding: $spacing;
      box-sizing: border-box;
    }
  }
</style>
