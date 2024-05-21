<template>
  <YhPopup ref="popupRef" :is-mask-click="false">
    <div class="login-popup-ssc">
      <div class="title">
        <div class="left">
          <div class="zh-cn">社保卡登录</div>
          <div class="tibetan">
            <ComponentProjectTranslate content="社保卡登录" />
          </div>
        </div>
        <div class="right" @click="emit('update:modelValue', false)">
          <yh-icons type="closeempty" size="2.5rem" color="#d8d8d8" />
        </div>
      </div>

      <div class="text-tip">
        <div class="zh-cn">
          <span>请将您的社保卡</span>
          <span class="val">芯片朝上</span>
          <span>插入</span>
          <span class="val">屏幕右下方</span>
          <span>的读卡槽内</span>
        </div>
        <div class="tibetan">
          <ComponentProjectTranslate content="请将您的社保卡芯片朝上插入屏幕右下方的读卡槽内" />
        </div>
      </div>

      <div class="img-tip">
        <image class="img" src="/static/images/login/ssc.gif" alt="" />
      </div>
    </div>
  </YhPopup>
</template>

<script setup lang="ts">
  import ComponentProjectTranslate from '@/components/project/translate/translate.vue'
  import YhPopup from '@/components/yh/popup/popup.vue'
  import YhIcons from '@/components/yh/icons/icons.vue'

  import { ref, watch, nextTick } from 'vue'

  const emit = defineEmits(['update:modelValue'])
  const props = defineProps({
    /**
     * 是否显示弹窗
     */
    modelValue: {
      type: Boolean,
      required: true
    }
  })

  const popupRef = ref<any>(null)

  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        nextTick(() => {
          popupRef.value && popupRef.value.open('center')
        })
      } else {
        nextTick(() => {
          popupRef.value && popupRef.value.close()
        })
      }
    }
  )
</script>

<style lang="scss" scoped>
  .login-popup-ssc {
    width: 100%;
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.25rem;
    .title {
      border-bottom: 1px solid #dbe2ea;
      position: relative;
      padding-right: 2rem;
      padding-bottom: 1.5rem;
      .left {
        color: #343434;
        line-height: 1;
        font-size: 1.875rem;
        .zh-cn {
          font-weight: 700;
        }
        .tibetan {
          line-height: 2.375rem;
          font-weight: 400;
          padding-top: 1rem;
        }
      }
      .right {
        position: absolute;
        right: 0;
        top: 1rem;
        color: #d8d8d8;
        font-size: 2rem;
      }
    }
    .text-tip {
      font-size: 1.75rem;
      color: #676767;
      line-height: 3.625rem;
      padding-top: 1.5rem;
      .zh-cn {
        display: flex;
        align-items: center;
        .val {
          color: #0a7bff;
        }
      }
      .text-tip {
        font-size: 1.5rem;
        padding-top: 0.25rem;
        line-height: 2.625rem;
      }
    }
    .img-tip {
      padding-top: 1.5rem;
      padding-bottom: 0.625rem;
      .img {
        display: block;
        width: 37.5rem;
        height: 21.25rem;
        margin: 0 auto;
      }
    }
  }
</style>
