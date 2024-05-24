<template>
  <div class="card-policy" @click="onClick">
    <div class="name-wrapper">
      <div class="iconimg iconimg-subsidy"></div>
      <div class="name">{{ renderData?.chm051 }}</div>
    </div>
    <div class="cells">
      <div class="cell">
        <div class="key">业务部门：</div>
        <div class="value">{{ renderData?.chi037 || '暂无' }}</div>
      </div>
      <div class="cell">
        <div class="key">补贴项目：</div>
        <div class="value">{{ renderData?.chi031 }}</div>
      </div>
      <div class="cell">
        <div class="key">发布时间：</div>
        <div class="value">{{ moment(renderData?.chm052).format('YYYY年MM月DD日') }}</div>
      </div>
      <div class="cell">
        <div class="key">有效期：</div>
        <div class="value">
          <span v-if="renderData?.chm053">{{ moment(renderData?.chm053).format('YYYY年MM月DD日') }}</span>
          <span>至</span>
          <span v-if="renderData?.chm054">{{ moment(renderData?.chm054).format('YYYY年MM月DD日') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue'
  import type { PolicyVo } from '@/server/types'

  import moment from 'moment'
  import { usePreviewPDF } from '@/hooks'
  import { showModal } from '@/utils/uni'

  const props = defineProps({
    /**
     * 渲染内容
     */
    renderData: {
      type: Object as PropType<PolicyVo>,
      required: false
    }
  })

  const onClick = () => {
    const { chm056 } = props.renderData || {}
    if (chm056) {
      usePreviewPDF(chm056)
    } else {
      showModal('暂无')
    }
  }
</script>

<style lang="scss" scoped>
  .card-policy {
    width: 100%;
    min-height: 214rpx;
    position: relative;
    padding: 0 $spacing;
    box-sizing: border-box;
    .name-wrapper {
      display: flex;
      align-items: center;
      border-bottom: solid 1px rgba($color-primary, 0.2);
      position: relative;
      z-index: 2;
      .iconimg {
        margin-right: 10rpx;
      }
      .name {
        margin: 24rpx 0;
        font-size: 28rpx;
        line-height: 36rpx;
        max-height: 72rpx;
        font-weight: 700;
        color: $color-text;
        @include textOverflow(2);
      }
    }
    .cells {
      position: relative;
      z-index: 2;
      padding: 20rpx 0;
      box-sizing: border-box;
      .cell {
        display: flex;
        line-height: 1.4;
        font-size: 24rpx;
        margin-bottom: 12rpx;
        .key {
          color: rgba($color-text, 0.6);
        }
        .value {
          flex: 1;
          overflow: hidden;
          color: $color-text;
        }
      }
    }
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      left: 0;
      height: 80px;
      background-image: linear-gradient(180deg, #f6f7f8 0%, #ffffff 100%);
      z-index: 1;
    }
  }
</style>
