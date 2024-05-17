<template>
  <div class="project-details-card">
    <image class="image" :src="imageSrc" />
  </div>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue'
  import image01 from '../images/01.png'
  import image02 from '../images/02.png'
  import image03 from '../images/03.png'
  import image04 from '../images/04.png'

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
</script>

<style lang="scss" scoped>
  .project-details-card {
    width: 672rpx;
    height: 300rpx;
    position: relative;
    margin: 0 auto;
    .image {
      width: 100%;
      height: 272rpx;
    }
  }
</style>
