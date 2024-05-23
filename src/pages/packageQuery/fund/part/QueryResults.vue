<template>
  <div class="query-results">
    <div class="items">
      <div class="item" v-for="(item, index) in renderList" :key="index">
        <ComponentProjectCardFund :render-data="item"></ComponentProjectCardFund>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ComponentProjectCardFund from '@/components/project/card-fund/card-fund.vue'

  import type { GetSubsidyDetailPageListRow } from '@/server/types'
  import type { PropType } from 'vue'

  const props = defineProps({
    renderList: {
      type: Array as PropType<GetSubsidyDetailPageListRow[]>,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .query-results {
    width: 100%;
    padding: 0 $spacing;
    box-sizing: border-box;
    .items {
      background-color: #fff;
      display: flex;
      flex-direction: column;
      padding: $spacing;
      box-sizing: border-box;
      border-radius: 8rpx;
    }
    .item {
      margin-bottom: $spacing;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
