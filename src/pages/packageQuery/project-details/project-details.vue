<template>
  <div class="page-scroll project-details">
    <ProjectDetailsHeader :render-data="projectInfo" v-if="projectInfo.chm030"></ProjectDetailsHeader>
    <div class="items">
      <div class="item">
        <Card type="01" :chm031="projectInfo.chm031"></Card>
      </div>
      <div class="item">
        <Card type="02" :chm032="projectInfo.chm032"></Card>
      </div>
      <div class="item">
        <Card type="03" :chm037="projectInfo.chm037"></Card>
      </div>
      <div class="item">
        <Card type="04" :chm036="projectInfo.chm036"></Card>
      </div>
      <div class="item">
        <Card type="05" :policys="projectInfo.policys"></Card>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import ProjectDetailsHeader from './part/ProjectDetailsHeader.vue'
  import Card from './part/Card.vue'

  import type { PolicyVo } from '@/server/types'
  import { requestAppletGetSubsidyProjectDetail, requestAppletGetDepartPolicyList } from '@/server/api'

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
    /**
     * 审批流程
     */
    chm036: string[]
    /**
     * 申报材料
     */
    chm037: {
      aka131: string
      material: string[]
    }[]
    /**
     * 相关政策材料
     */
    policys: PolicyVo[]
  }>({
    chm030: '',
    chi031: '',
    chi037: '',
    updateTime: '',
    chm031: [],
    chm032: [],
    chm036: [],
    chm037: [],
    policys: []
  })

  /**
   * 获取数据
   */
  const getData = () => {
    const { chm030 } = projectInfo.value
    requestAppletGetSubsidyProjectDetail(chm030).then((res) => {
      const { chm031, chm032, chi031, chi037, updateTime, chm036, chm037 } = res
      projectInfo.value.chi031 = chi031
      projectInfo.value.chi037 = chi037
      projectInfo.value.updateTime = updateTime
      projectInfo.value.chm031 = [chm031]
      projectInfo.value.chm032 = [chm032]
      projectInfo.value.chm036 = JSON.parse(chm036)
      projectInfo.value.chm037 = JSON.parse(chm037)

      if (chi031) {
        requestAppletGetDepartPolicyList('', '', chi031, 1, 999).then((res) => {
          const { rows } = res
          projectInfo.value.policys = [...rows]
        })
      }
    })
  }

  onLoad((e) => {
    const { chm030 } = e || {}
    if (chm030) {
      projectInfo.value.chm030 = chm030
      getData()
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
