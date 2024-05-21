<template>
  <div class="project-header">
    <div class="search-wrapper">
      <input
        v-model="keyword"
        class="input"
        type="text"
        confirm-type="search"
        placeholder-style="color:rgba(255, 255, 255, 0.8);"
        :placeholder="$t('project.header.searchPlaceholder')"
        @confirm="onSearch"
      />
    </div>

    <scroll-view
      class="scroll-view"
      scroll-x
      :scroll-into-view="scrollViewId"
      scroll-with-animation
      v-if="renderList.length"
    >
      <div
        class="item"
        :class="item.chi037 === scrollViewId ? 'checked' : ''"
        v-for="item in renderList"
        :id="item.chi037"
        :key="item.chi037"
        @click="emit('click', item.chi037)"
      >
        <div class="text">{{ item.chi037Desc }}</div>
      </div>
    </scroll-view>
  </div>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue'

  const emit = defineEmits(['query', 'click'])

  const props = defineProps({
    /**
     * 渲染数据
     */
    renderList: {
      type: Array as PropType<
        {
          chi037: string
          chi037Desc: string
        }[]
      >,
      required: true
    },
    /**
     * 当前滚动到顶部的id
     */
    scrollViewId: {
      type: String,
      required: true
    }
  })

  /**
   * 查询关键词
   */
  const keyword = ref('')

  /**
   * 点击查询按钮
   */
  const onSearch = () => {
    emit('query', keyword.value)
  }
</script>

<style lang="scss" scoped>
  $scroll-view-height: 96rpx;
  .project-header {
    width: 100%;
    background-color: $color-primary;

    .search-wrapper {
      padding: $spacing;
      box-sizing: border-box;
      .input {
        display: block;
        width: 100%;
        height: 72rpx;
        border-radius: 50px;
        background-color: rgba(#ffff, 0.6);
        padding: 16rpx 24rpx;
        font-size: 28rpx;
        line-height: 40rpx;
        font-weight: 400;
        text-align: left;
        color: #fff;
        box-sizing: border-box;
      }
    }

    .scroll-view {
      width: 100%;
      height: $scroll-view-height;
      white-space: nowrap;
      overflow: hidden;
      background-color: #fff;
      border-bottom: 1px solid $color-border;
      .item {
        display: inline-block;
        padding-left: $spacing;
        box-sizing: border-box;
        .text {
          line-height: $scroll-view-height;
          font-size: 32rpx;
          color: $color-text;
          position: relative;
          transition: all 0.3s;
          &::before {
            content: '';
            width: 0;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
            height: 0;
            border-radius: 50px;
            transition: all 0.3s;
          }
        }

        &:last-child {
          padding-right: $spacing;
        }
        &.checked {
          color: $color-primary;
          font-weight: 700;
          .text {
            &::before {
              width: 80%;
              height: 6rpx;
              background-color: $color-primary;
            }
          }
        }
      }
    }
  }
</style>
