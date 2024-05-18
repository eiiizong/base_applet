<template>
  <div class="project-details-card">
    <image class="image" :src="imageSrc" />
    <div class="con-wrapper">
      <div class="name">{{ name }}</div>
      <div class="con" v-if="type === '01'">
        <div class="list">
          <div class="text">1、农牧区“一孩、双女”户困难家庭人数农牧区“一孩、双女”户困难家庭人数</div>
          <div class="text">2、农牧区“一孩、双女”户困难家庭人数</div>
        </div>
      </div>
      <div class="con" v-if="type === '02'">
        <div class="item">
          <div class="item-name">农牧区“一孩、双女”户困难家农牧区“一孩、双女”户困难家庭庭</div>
          <div class="list">
            <div class="text">1、身份证</div>
            <div class="text">2、户口本</div>
          </div>
        </div>
        <div class="item">
          <div class="item-name">农牧区“一孩、双女”户困难家庭</div>
          <div class="list">
            <div class="text">1、身份证</div>
            <div class="text">2、户口本</div>
          </div>
        </div>
      </div>

      <div class="con" v-if="type === '03'">
        <div class="process-item">
          <div class="text">流程名称1</div>
        </div>
        <div class="process-item">
          <div class="text">流程名称2</div>
        </div>
        <div class="process-item">
          <div class="text">流程名称31流程名流程名称31流程名称31流程称31流程</div>
        </div>
        <div class="process-item">
          <div class="text">流程名称4</div>
        </div>
        <div class="process-item">
          <div class="text">流程名称5</div>
        </div>
      </div>

      <div class="con" v-if="type === '04'">
        <ComponentProjectCardPolicy></ComponentProjectCardPolicy>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue'

  import image01 from '../images/01.png'
  import image02 from '../images/02.png'
  import image03 from '../images/03.png'
  import image04 from '../images/04.png'

  import ComponentProjectCardPolicy from '@/components/project/card-policy/card-policy.vue'

  const props = defineProps({
    /**
     * 类型 01
     */
    type: {
      type: String as PropType<'01' | '02' | '03' | '04'>,
      required: true
    }
  })

  const imageSrc = computed(() => {
    const { type } = props
    if (type === '01') {
      return image01
    }
    if (type === '02') {
      return image02
    }
    if (type === '03') {
      return image03
    }
    if (type === '04') {
      return image04
    }
    return ''
  })

  const name = computed(() => {
    const { type } = props
    if (type === '01') {
      return '领取对象'
    }
    if (type === '02') {
      return '申报材料'
    }
    if (type === '03') {
      return '办理流程'
    }
    if (type === '04') {
      return '政策材料'
    }
    return ''
  })
</script>

<style lang="scss" scoped>
  .project-details-card {
    width: 672rpx;
    position: relative;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 12rpx;
    .image {
      width: 100%;
      height: 272rpx;
    }
    .con-wrapper {
      .name {
        font-size: 30rpx;
        text-align: center;
        line-height: 1;
        padding: $spacing 0;
        font-weight: 700;
        color: $color-text;
      }
      .con {
        padding: $spacing;
        padding-bottom: $spacing * 2;
      }
      .item {
        margin-bottom: 20rpx;
        .item-name {
          font-size: 28rpx;
          font-weight: 500;
          color: rgba($color-text, 0.9);
          line-height: 1.2;
          margin-bottom: 20rpx;
          position: relative;
          padding-left: 20rpx;
          &::before {
            content: '';
            position: absolute;
            width: 6rpx;
            height: 28rpx;
            background-color: $color-primary;
            border-radius: 2rpx;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }
        }
      }
      .list {
        font-size: 26rpx;
        font-weight: 400;
        line-height: 1.4;
        color: rgba($color-text, 0.8);
        .text {
          margin-bottom: 8rpx;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .process-item {
        margin-bottom: 20rpx;
        padding: 20rpx 40rpx;
        border-radius: 8rpx;
        line-height: 1.2;
        font-size: 26rpx;
        color: #fff;
        background-image: linear-gradient(to right, $color-primary 0%, rgba($color-primary, 0.8) 100%);
        text-align: center;
        position: relative;

        .text {
          @include textOverflow(1);
        }

        &::before {
          content: '';
          position: absolute;
          left: 20rpx;
          top: 50%;
          transform: translateY(-50%);
          width: 14rpx;
          height: 14rpx;
          border: 1px solid $color-primary;
          border-radius: 50%;
          background-color: #fff;
          z-index: 3;
        }
        &::after {
          content: '';
          position: absolute;
          left: 26rpx;
          top: 50%;
          width: 1px;
          height: calc(100% + 20rpx);
          background-color: #ddd;
          z-index: 2;
        }
        &:last-child {
          margin-bottom: 0;
          &::after {
            width: 0;
            display: none;
          }
        }
      }
    }
  }
</style>
