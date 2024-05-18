<template>
  <div class="page publicity">
    <PublicityHeader></PublicityHeader>
    <PublicityTotal></PublicityTotal>
    <div class="wrapper">
      <PublicityMain></PublicityMain>
    </div>
  </div>
</template>
<script setup lang="ts">
  import PublicityHeader from './part/PublicityHeader.vue'
  import PublicityTotal from './part/PublicityTotal.vue'
  import PublicityMain from './part/PublicityMain.vue'
</script>

<style lang="scss" scoped>
  .publicity {
    width: 100%;
    padding-bottom: 0;
    .wrapper {
      flex: 1;
      overflow: hidden;
    }
  }
</style>
