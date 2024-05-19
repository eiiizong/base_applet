<template>
  <div class="page-scroll fund">
    <div class="total-wrapper">
      <FundTotal :render-data="totalInfo"></FundTotal>
    </div>

    <template v-if="queryResultData.list.length">
      <QueryResults :render-list="queryResultData.list"></QueryResults>
    </template>
    <template v-else>
      <ComponentProjectEmpty v-if="queryResultData.isRequestOver"></ComponentProjectEmpty>
    </template>
    <template v-if="queryResultData.list.length">
      <ComponentProjectDividerLoad :is-loaded="queryResultData.isLoaded"></ComponentProjectDividerLoad>
    </template>
  </div>
</template>
<script setup lang="ts">
  import ComponentProjectEmpty from '@/components/project/empty/empty.vue'
  import ComponentProjectDividerLoad from '@/components/project/divider-load/divider-load.vue'

  import FundTotal from './part/FundTotal.vue'
  import QueryResults from './part/QueryResults.vue'

  import type { GetSelfFundCollectDataApiSuccessResponse } from '@/server/types'

  import moment from 'moment'
  import { requestAppletGetSelfFundCollectData, requestAppletGetSubsidyDetailPageList } from '@/server/api'

  /**
   * 查询条件
   */
  const queryInfo = reactive({
    /**
     * 当前页数
     */
    pageNum: 1,
    /**
     * 每页请求条数
     */
    pageSize: 10,
    /**
     * 搜索关键字
     */
    year: moment().format('YYYY')
  })

  /**
   * 自定义请求结果数据
   */
  const queryResultData = reactive<{
    /**
     * 查询结果数据
     */
    list: any[]
    /**
     * 是否请求完成 控制 no-data 组件在未请求完成时不显示
     */
    isRequestOver: boolean
    /**
     * 当数据不止一页时是否加载完成
     */
    isLoaded: boolean
  }>({
    list: [1, 2, 3],
    isRequestOver: false,
    isLoaded: true
  })

  /**
   * 发放统计信息
   */
  const totalInfo = ref<GetSelfFundCollectDataApiSuccessResponse>({
    totalMoney: 0,
    totalTime: 0
  })

  /**
   * 查询当前年度汇总信息
   */
  const queryTotalInfo = () => {
    const { year } = queryInfo
    requestAppletGetSelfFundCollectData(year).then((res) => {
      totalInfo.value = { ...res }
    })
  }

  /**
   * 查询数据
   */
  const queryData = () => {
    const { year, pageNum, pageSize } = queryInfo
    requestAppletGetSubsidyDetailPageList(year, pageNum, pageSize)
      .then((res) => {
        console.log(res, 99)
      })
      .finally(() => {
        queryResultData.isRequestOver = true
      })
  }

  /**
   * 通过年度查询数据
   */
  const queryAllDataByYear = () => {
    queryInfo.pageNum = 1
    queryInfo.pageSize = 10
    queryResultData.isLoaded = false
    queryResultData.isRequestOver = false
    queryResultData.list = []
    queryTotalInfo()
    queryData()
  }
  /**
   * 页面上拉触底事件的处理函数 上拉加载更多
   */
  onReachBottom(() => {
    if (!queryResultData.isLoaded) {
      queryInfo.pageNum++
      queryData()
    }
  })

  onLoad(() => {
    queryAllDataByYear()
  })
</script>

<style lang="scss" scoped>
  .fund {
    width: 100%;
    .total-wrapper {
      padding: $spacing;
    }
  }
</style>
