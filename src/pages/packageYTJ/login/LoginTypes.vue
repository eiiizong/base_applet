<template>
  <div class="login-types uno-center">
    <div v-for="item in loginType" :key="item.id" class="item" @click="emit('click', item.id)">
      <image class="img" :src="item.bgSrc" />
      <div class="name">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import imageIdcard from './images/idcard.png'

  const emit = defineEmits(['click'])
  const loginType = ref([
    {
      id: 'idCard',
      name: '身份证登录',
      bgSrc: imageIdcard
    }
  ])

  onMounted(() => {
    //
  })
</script>

<style lang="scss" scoped>
  .login-types {
    width: 100%;
    padding-top: 5rem;
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
        font-weight: 700;
      }
    }
  }
</style>
