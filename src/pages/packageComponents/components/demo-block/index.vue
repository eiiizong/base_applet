<template>
  <view class="demo-block" :class="padding ? 'demo-block--padding' : ''">
    <view v-if="title" class="demo-block__title">{{ title }}</view>
    <view class="demo-block__card" v-if="card">
      <slot />
    </view>
    <slot v-else />
  </view>
</template>

<script lang="ts" setup>
  const props = defineProps({
    /**
     *
     */
    title: {
      type: String,
      default: () => '',
    },
    /**
     *
     */
    padding: {
      type: Boolean,
      default: () => false,
    },
    /**
     *
     */
    card: {
      type: Boolean,
      default: () => false,
    },
  })
</script>

<style lang="scss" scoped>
  .demo-block {
    &__title {
      margin: 0;
      padding: 40rpx 30rpx 30rpx;
      color: rgba(69, 90, 100, 0.6);
      font-weight: 400;
      font-size: 28rpx;
    }
    &__card {
      overflow: hidden;
      border-radius: 16rpx;
    }
    &--padding {
      padding: 0 30rpx;
      .demo-block {
        &__title {
          padding-left: 0;
        }
      }
    }
  }
</style>
