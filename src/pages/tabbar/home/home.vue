<template>
  <div class="home uno-center uno-w-750">
    <div @click="onClick">组件</div>
    <div @click="onClick">{{ $t('common.name') }}</div>
    <button @click="onC">切换语言</button>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { locale } = useI18n()

  const onClick = () => {
    uni.navigateTo({
      url: '/pages/packageComponents/dashboard/dashboard',
    })
  }

  const onC = () => {
    console.log(locale.value)

    locale.value = locale.value === 'tibetan' ? 'zh-Hans' : 'tibetan'
  }
</script>

<style lang="scss" scoped>
  .home {
    background-color: $color-primary;
    // @include textOverflow(1);
  }
</style>
