<template>
  <div class="query-criteria">
    <ComponentProjectPanel title="发放详情">
      <div class="items">
        <div class="item" v-for="(item, index) in renderList" :key="index">
          <ComponentProjectCardFund :render-data="item"></ComponentProjectCardFund>
        </div>
      </div>
    </ComponentProjectPanel>
  </div>
</template>

<script setup lang="ts">
  import ComponentProjectPanel from '@/components/project/panel/panel.vue'
  import ComponentProjectCardFund from '@/components/project/card-fund/card-fund.vue'

  import type { PropType } from 'vue'

  const props = defineProps({
    renderList: {
      type: Array as PropType<any[]>,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .query-criteria {
    width: 100%;
    .items {
      display: flex;
      flex-direction: column;
    }
    .item {
      margin-bottom: $spacing;
    }
  }
</style>
