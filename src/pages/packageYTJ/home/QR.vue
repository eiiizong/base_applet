<template>
  <view class="home-qr" @click="emit('click')">
    <div class="name">
      <div class="zh-cn">手机扫码，补贴信息早知道</div>
      <div class="tibetan">
        <ComponentProjectTranslate content="手机扫码，补贴信息早知道" />
      </div>
    </div>
    <div class="qr">
      <img class="img" :src="qrSrc" alt="" />
    </div>
    <div class="desc">
      <div class="zh-cn"></div>
      <div class="tibetan">
        <ComponentProjectTranslate content="" />
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import ComponentProjectTranslate from '@/components/project/translate/translate.vue'

  // import imgUrl from './images/qr.png'

  const emit = defineEmits(['click'])
  const props = defineProps({
    /**
     * 二维码图片地址
     */
    qrSrc: {
      type: String,
      default: () =>
        'data:image/png;base64,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'
    }
  })
</script>

<style lang="scss" scoped>
  .home-qr {
    width: 25rem;
    padding: 2rem;
    background-color: rgba(#fff, 0.36);
    border-radius: 0.25rem;
    opacity: 1;
    .name {
      width: 100%;
      text-align: center;
      .zh-cn {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1;
      }
      .tibetan {
        font-size: 1.25rem;
        line-height: 1.625rem;
        padding-top: 0.5rem;
      }
    }
    .qr {
      width: 100%;
      padding: 1.5rem 2rem 1rem;
      .img {
        display: block;
        width: 9.375rem;
        height: 9.375rem;
        margin: 0 auto;
      }
    }
    .desc {
      text-align: center;
      color: #656565;
      .zh-cn {
        font-size: 1.5rem;
        line-height: 1;
      }
      .tibetan {
        font-size: 1.25rem;
        line-height: 1rem;
        padding-top: 0.5rem;
      }
    }
  }
</style>
