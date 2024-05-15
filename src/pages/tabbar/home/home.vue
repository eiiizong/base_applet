<template>
  <div class="page-scroll home">
    <HomeHeader></HomeHeader>
    <PopularServices></PopularServices>
  </div>
</template>

<script setup lang="ts">
  import HomeHeader from './part/HomeHeader.vue'
  import PopularServices from './part/PopularServices.vue'
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
  }
</style>
