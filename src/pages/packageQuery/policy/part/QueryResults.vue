<template>
  <div class="query-criteria">
    <ComponentProjectPanel :title="$t('home.policy.name')">
      <div class="items"></div>
    </ComponentProjectPanel>
  </div>
</template>

<script setup lang="ts">
  import ComponentProjectPanel from '@/components/project/panel/panel.vue'
</script>

<style lang="scss" scoped>
  .query-criteria {
    width: 100%;
    padding-top: $spacing;
    .items {
      display: flex;
      flex-direction: column;
    }
    .item {
      margin-bottom: $spacing;
    }
  }
</style>
