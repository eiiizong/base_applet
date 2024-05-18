<template>
  <div class="page-scroll publicity">
    <PublicityHeader></PublicityHeader>
    <PublicityTotal></PublicityTotal>
  </div>
</template>
<script setup lang="ts">
  import PublicityHeader from './part/PublicityHeader.vue'
  import PublicityTotal from './part/PublicityTotal.vue'
</script>

<style lang="scss" scoped>
  .publicity {
    width: 100%;
  }
</style>
