<template>
  <div class="page-scroll project-details">
    <ProjectDetailsHeader :render-data="projectInfo" v-if="projectInfo.chm030"></ProjectDetailsHeader>
    <div class="items">
      <div class="item">
        <Card type="01" :chm031="projectInfo.chm031"></Card>
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

  import { requestAppletGetSubsidyProjectDetail } from '@/server/api'

  /**
   * 补贴项目信息
   */
  const projectInfo = ref<{
    /**
     * 补贴项目id
     */
    chm030: string
    /**
     * 补贴项目名称
     */
    chi031: string
    /**
     * 补贴项目所属业务局
     */
    chi037: string
    /**
     * 补贴项目更新时间
     */
    updateTime: string
    /**
     * 补贴对象
     */
    chm031: string[]
    /**
     * 补贴标准
     */
    chm032: string[]
  }>({
    chm030: '',
    chi031: '',
    chi037: '',
    updateTime: '',
    chm031: [],
    chm032: []
  })

  /**
   * 获取数据
   */
  const getData = () => {
    const { chm030 } = projectInfo.value
    requestAppletGetSubsidyProjectDetail(chm030).then((res) => {
      const { chm031, chm032 } = res
      projectInfo.value.chm031 = [chm031]
      projectInfo.value.chm032 = [chm032]
      console.log(res)
    })
  }

  onLoad((e) => {
    const { chm030, chi031, chi037, updateTime } = e || {}
    if (chm030) {
      projectInfo.value.chm030 = chm030
      getData()
    }
    if (chi031) {
      projectInfo.value.chi031 = chi031
    }
    if (chi037) {
      projectInfo.value.chi037 = chi037
    }
    if (updateTime) {
      projectInfo.value.updateTime = updateTime
    }
  })
</script>

<style lang="scss" scoped>
  .project-details {
    padding-bottom: $spacing;
    box-sizing: border-box;
    .scroll-view {
      flex: 1;
      overflow: hidden;
    }
    .items {
      .item {
        margin-bottom: $spacing;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
