<template>
  <div class="query-criteria">
    <ComponentProjectPanel :title="$t('app.query.result.name')">
      <div class="items">
        <div class="item" v-for="(item, index) in renderList" :key="index">
          <ComponentProjectCardPolicy :render-data="item"></ComponentProjectCardPolicy>
        </div>
      </div>
    </ComponentProjectPanel>
  </div>
</template>

<script setup lang="ts">
  import ComponentProjectPanel from '@/components/project/panel/panel.vue'
  import ComponentProjectCardPolicy from '@/components/project/card-policy/card-policy.vue'

  import type { PropType } from 'vue'
  import type { PolicyVo } from '@/server/types'

  const props = defineProps({
    renderList: {
      type: Array as PropType<PolicyVo[]>,
      required: true
    }
  })
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
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
