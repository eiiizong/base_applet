<template>
  <div class="home uno-center uno-w-750">
    <div @click="onClick">组件</div>
  </div>
</template>

<script setup lang="ts">
  const onClick = () => {
    uni.navigateTo({
      url: '/pages/packageComponents/dashboard/dashboard',
    })
  }
</script>

<style lang="scss" scoped>
  .home {
    background-color: $color-primary;
    // @include textOverflow(1);
  }
</style>
