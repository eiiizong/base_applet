<template>
  <div class="page-scroll home">
    <HomeHeader></HomeHeader>
    <PopularServices></PopularServices>
    <Policy></Policy>
  </div>
</template>

<script setup lang="ts">
  import HomeHeader from './part/HomeHeader.vue'
  import PopularServices from './part/PopularServices.vue'
  import Policy from './part/Policy.vue'
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
  }
</style>
