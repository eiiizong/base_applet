<template>
  <div class="page-scroll project-details">
    <ProjectDetailsHeader></ProjectDetailsHeader>
    <div class="items">
      <Card type="01"></Card>
      <Card type="02"></Card>
      <Card type="03"></Card>
      <Card type="04"></Card>
    </div>
  </div>
</template>
<script setup lang="ts">
  import ProjectDetailsHeader from './part/ProjectDetailsHeader.vue'
  import Card from './part/Card.vue'

  // const data = ref([
  //   {
  //     name: '领取对象'
  //   }
  // ])
</script>

<style lang="scss" scoped>
  .project-details {
    .scroll-view {
      flex: 1;
      overflow: hidden;
    }
  }
</style>
