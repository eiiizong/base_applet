<template>
  <view class="home-statistics">
    <div class="items d-f ai-c jc-sb">
      <div v-for="(item, index) in 2" :key="index" class="item d-f ai-c">
        <div class="icon" :style="{ backgroundImage: 'url(' + (item === 1 ? imageIcon01 : imageIcon02) + ')' }"></div>
        <div class="info d-f">
          <div class="key">
            <div class="zh-cn">{{ item == 1 ? '服务' : '查询' }}</div>
            <div class="tibetan">
              <ComponentProjectTranslate :content="item == 1 ? '服务' : '查询'" />
            </div>
          </div>
          <div class="value AlibabaPuHuiTiBold">
            {{ item == 1 ? serviceNum : queryNum }}
          </div>
          <div class="unit">
            <div class="zh-cn">人次</div>
            <div class="tibetan">
              <ComponentProjectTranslate content="人次" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import imageIcon01 from './images/icon-01.png'
  import imageIcon02 from './images/icon-02.png'

  import ComponentProjectTranslate from '@/components/project/translate/translate.vue'

  const props = defineProps({
    /**
     * 服务人次
     */
    serviceNum: {
      type: Number,
      required: true
    },
    /**
     * 查询人次
     */
    queryNum: {
      type: Number,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .home-statistics {
    width: 100%;
    .items {
      .item {
        height: 7rem;

        .icon {
          width: 7rem;
          height: 100%;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        }
        .info {
          min-width: 21.5rem;
          height: 100%;
          background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
          padding: 0.875rem 1.5rem 0;
          .key {
            font-size: 2rem;
            color: #343434;
            .zh-cn {
              line-height: 2.875rem;
              font-weight: 500;
            }
            .tibetan {
              line-height: 2.5rem;
            }
          }
          .value {
            min-width: 10rem;
            font-size: 2.625rem;
            height: 2.875rem;
            line-height: 2.875rem;
            font-weight: 700;
            color: #0a7bff;
            padding: 0 1.5rem;
            text-align: center;
          }
          .unit {
            color: #999;
            .zh-cn {
              line-height: 2.875rem;
            }
            .tibetan {
              line-height: 2.5rem;
            }
          }
        }
        &:last-child {
          .info {
            .value {
              color: #ff8600;
            }
          }
        }
      }
    }
  }
</style>
