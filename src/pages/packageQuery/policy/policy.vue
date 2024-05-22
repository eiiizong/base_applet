<template>
  <div class="page-scroll policy">
    <QueryCriteria @query="onClickQuery"></QueryCriteria>
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
  import QueryCriteria from './part/QueryCriteria.vue'
  import QueryResults from './part/QueryResults.vue'

  import type { PolicyVo } from '@/server/types'
  import { requestAppletGetDepartPolicyList } from '@/server/api'

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
     * 政策名称
     */
    policyName: '',
    /**
     * 政策名称
     */
    chi031: '',
    /**
     * 政策名称
     */
    chi037: ''
  })

  /**
   * 自定义请求结果数据
   */
  const queryResultData = reactive<{
    /**
     * 查询结果数据
     */
    list: PolicyVo[]
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
    queryResultData.isRequestOver = false
    queryResultData.list = []
    queryResultData.isLoaded = false

    const { policyName, chi031, chi037, pageNum, pageSize } = queryInfo
    requestAppletGetDepartPolicyList(policyName, chi037, chi031, pageNum, pageSize)
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
   * 点击查询按钮查询
   */
  const onClickQuery = (form: any) => {
    const { policyName, chi031, chi037 } = form
    queryInfo.policyName = policyName
    queryInfo.chi031 = chi031
    queryInfo.chi037 = chi037
    queryInfo.pageNum = 1
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
    queryData()
  })
</script>

<style lang="scss" scoped>
  .policy {
    width: 100%;
    padding-top: $spacing;
  }
</style>
