<template>
  <div class="login-types d-f ai-c jc-c">
    <div v-for="item in loginType" :key="item.id" class="item" @click="emit('click', item.id)">
      <image class="img" :src="item.bgSrc" />
      <div class="name">
        <div class="zh-cn">{{ item.name }}</div>
        <div class="tibetan">
          <ComponentProjectTranslate :content="item.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ComponentProjectTranslate from '@/components/project/translate/translate.vue'

  import { ref, onMounted } from 'vue'

  const emit = defineEmits(['click'])
  const loginType = ref([
    // {
    //   id: 'SSC',
    //   name: '社保卡登录',
    //   bgSrc: '/static/images/login/ssc.png'
    // },
    {
      id: 'idCard',
      name: '身份证登录',
      bgSrc: '/static/images/login/idcard.png'
    }
  ])

  onMounted(() => {
    //
  })
</script>

<style lang="scss" scoped>
  .login-types {
    width: 100%;
    padding-top: 3.375rem;
    .item {
      position: relative;
      .img {
        width: 28.75rem;
        height: 32.6875rem;
      }
      .name {
        width: 100%;
        position: absolute;
        left: 0;
        text-align: center;
        bottom: 5.875rem;
        color: #fff;
        font-size: 2rem;
        line-height: 1;
        .zh-cn {
          font-weight: 700;
        }
        .tibetan {
          font-weight: 500;
          padding-top: 1rem;
        }
      }
    }
  }
</style>
