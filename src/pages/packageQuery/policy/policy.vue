<template>
  <div class="page-scroll policy">
    <QueryCriteria></QueryCriteria>
    <QueryResults></QueryResults>
  </div>
</template>
<script setup lang="ts">
  import QueryCriteria from './part/QueryCriteria.vue'
  import QueryResults from './part/QueryResults.vue'
</script>

<style lang="scss" scoped>
  .policy {
    width: 100%;
    padding-top: $spacing;
  }
</style>
