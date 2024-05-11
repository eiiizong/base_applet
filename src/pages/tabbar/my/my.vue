<template>
  <div class="my">my</div>
</template>

<script setup lang="ts">
  import { useUpdateNavigationBarTitle } from '@/hooks/useUpdateNavigationBarTitle'

  onShow(() => {
    useUpdateNavigationBarTitle()
  })
</script>

<style lang="scss" scoped>
  .my {
    width: 100%;
    min-height: 100%;
    background: #efeffe;
  }
</style>
