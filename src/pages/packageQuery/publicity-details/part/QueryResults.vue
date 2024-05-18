<template>
  <div class="query-result">
    <div class="items">
      <div class="item" v-for="(item, index) in renderList" :key="index">
        <ComponentProjectCardGrantDetails :render-data="item"></ComponentProjectCardGrantDetails>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ComponentProjectCardGrantDetails from '@/components/project/card-grant-details/card-grant-details.vue'

  import type { PropType } from 'vue'

  const props = defineProps({
    renderList: {
      type: Array as PropType<any[]>,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .query-result {
    width: 100%;

    .items {
      display: flex;
      flex-direction: column;
      padding: $spacing;
    }
    .item {
      margin-bottom: $spacing;
    }
  }
</style>
