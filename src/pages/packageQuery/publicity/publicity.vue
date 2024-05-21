<template>
  <div class="page-scroll publicity">
    <PublicityHeader @query="onQuery"></PublicityHeader>
    <PublicityTotal :render-data="totalInfo"></PublicityTotal>
    <div class="wrapper">
      <PublicityMain :render-list="chi037List"></PublicityMain>
    </div>
  </div>
</template>
<script setup lang="ts">
  import PublicityHeader from './part/PublicityHeader.vue'
  import PublicityTotal from './part/PublicityTotal.vue'
  import PublicityMain from './part/PublicityMain.vue'

  import type { GetAllSummaryStatisticsBaseVo, GetAllSummaryStatisticsDepartCountVo } from '@/server/types'
  import { requestAppletGetAllSummaryStatistics } from '@/server/api'

  /**
   * 查询表单
   */
  const queryForm = ref({
    /**
     * 搜索关键词
     */
    queryName: '',
    /**
     * 区县
     */
    chb015: '',
    /**
     * 乡镇
     */
    chb017: '',
    /**
     * 期号
     */
    aae209: ''
  })

  /**
   * 业务局数据
   */
  const chi037List = ref<GetAllSummaryStatisticsDepartCountVo[]>([])

  /**
   * 统计信息
   */
  const totalInfo = ref<GetAllSummaryStatisticsBaseVo>({
    projectNum: 0,
    totalMoney: 0,
    totalPerson: 0
  })

  /**
   * 获取所有信息
   */
  const getData = () => {
    totalInfo.value.totalMoney = 0
    totalInfo.value.totalPerson = 0
    totalInfo.value.projectNum = 0
    chi037List.value = []

    const { queryName, chb015, chb017, aae209 } = queryForm.value
    requestAppletGetAllSummaryStatistics(queryName, chb015, chb017, aae209).then((res) => {
      const { totalMoney, totalPerson, projectNum, departCountVos } = res
      totalInfo.value.totalMoney = totalMoney
      totalInfo.value.totalPerson = totalPerson
      totalInfo.value.projectNum = projectNum
      chi037List.value = [...departCountVos]
    })
  }

  /**
   * 关键词搜索查询
   */
  const onQuery = (keyword: string) => {
    queryForm.value.queryName = keyword
    getData()
  }

  onLoad(() => {
    getData()
  })
</script>

<style lang="scss" scoped>
  .publicity {
    width: 100%;
    .wrapper {
      // flex: 1;
      overflow: auto;
    }
  }
</style>
