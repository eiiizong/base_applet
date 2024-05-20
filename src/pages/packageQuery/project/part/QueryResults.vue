<template>
  <div class="query-result">
    <div class="items">
      <div class="item" v-for="item in renderList" :key="item.chi037">
        <div class="item-name">{{ item.chi037Desc }}</div>
        <div class="cards">
          <div class="item" v-for="(card, index) in item.list" :key="index">
            <ComponentProjectCardProject :render-data="card"></ComponentProjectCardProject>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ComponentProjectCardProject from '@/components/project/card-project/card-project.vue'

  import type { PropType } from 'vue'
  import type { GetSubsidyProjectListRow } from '@/server/types'

  const props = defineProps({
    renderList: {
      type: Array as PropType<
        {
          chi037: string
          chi037Desc: string
          list: GetSubsidyProjectListRow[]
        }[]
      >,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .query-result {
    width: 100%;
    padding-bottom: $spacing;
    box-sizing: border-box;
    .items {
      display: flex;
      flex-direction: column;
      padding: 0 $spacing;
      box-sizing: border-box;
    }

    .item {
      &-name {
        font-weight: 700;
        line-height: 1;
        padding: $spacing 0;
        position: relative;
        padding-left: $spacing;
        font-size: 32rpx;
        box-sizing: border-box;
        &::before {
          content: '';
          position: absolute;
          width: 8rpx;
          height: 32rpx;
          background-color: $color-primary;
          border-radius: 2rpx;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
      }
    }
  }
</style>
