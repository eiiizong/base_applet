<template>
  <div class="page-scroll project-details">
    <ProjectDetailsHeader></ProjectDetailsHeader>
    <div class="items">
      <div class="item">
        <Card type="01"></Card>
      </div>
      <div class="item">
        <Card type="02"></Card>
      </div>
      <div class="item">
        <Card type="03"></Card>
      </div>
      <div class="item">
        <Card type="04"></Card>
      </div>
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
    .items {
      .item {
        margin-bottom: $spacing;
      }
    }
  }
</style>
