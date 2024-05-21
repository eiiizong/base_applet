<template>
  <div class="page-scroll publicity-details">
    <PublicityDetailsHeader :chi031="queryInfo.chi031" :chb017="queryInfo.chb017"></PublicityDetailsHeader>
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

  import PublicityDetailsHeader from './part/PublicityDetailsHeader.vue'
  import QueryResults from './part/QueryResults.vue'

  import type { GetAllQueryDetailRow } from '@/server/types'
  import { requestAppletGetAllQueryDetaila } from '@/server/api'

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
     * 补贴项目名称
     */
    chi031: '',
    /**
     * 乡镇
     */
    chb017: ''
  })

  /**
   * 自定义请求结果数据
   */
  const queryResultData = reactive<{
    /**
     * 查询结果数据
     */
    list: GetAllQueryDetailRow[]
    /**
     * 是否请求完成 控制 no-data 组件在未请求完成时不显示
     */
    isRequestOver: boolean
    /**
     * 当数据不止一页时是否加载完成
     */
    isLoaded: boolean
  }>({
    list: [],
    isRequestOver: false,
    isLoaded: true
  })

  /**
   * 查询数据
   */
  const queryData = () => {
    const { chi031, pageNum, pageSize } = queryInfo
    requestAppletGetAllQueryDetaila(chi031, pageNum, pageSize)
      .then((res) => {
        const { rows, total } = res

        // 还未加载完成
        if (total > pageSize * pageNum) {
          queryResultData.isLoaded = false
        } else {
          // 加载完成
          queryResultData.isLoaded = true
        }
        queryResultData.list = [...queryResultData.list, ...rows]
      })
      .catch(() => {
        queryInfo.pageNum = 1
        queryInfo.pageSize = 10
        queryResultData.list = []
        queryResultData.isLoaded = false
      })
      .finally(() => {
        queryResultData.isRequestOver = true
      })
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

  onLoad((e) => {
    const { chi031, chb017 } = e || {}
    if (chi031) {
      queryInfo.chi031 = chi031
      queryData()
    }
    if (chb017) {
      queryInfo.chb017 = chb017
    }
  })
</script>

<style lang="scss" scoped>
  .publicity-details {
    width: 100%;
    padding-top: 16rpx;
  }
</style>
