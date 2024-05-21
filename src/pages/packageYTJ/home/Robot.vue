<template>
  <div class="home-robot">
    <image class="img" :src="imageRobot" alt="" />
  </div>
</template>

<script setup lang="ts">
  import imageRobot from '@/static/images/home/robot.gif'
</script>

<style lang="scss" scoped>
  .home-robot {
    width: 34.375rem;
    .img {
      width: 100%;
      height: 25rem;
    }
  }
</style>
