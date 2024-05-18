<template>
  <div class="page-scroll fund">
    <div class="total-wrapper">
      <FundTotal></FundTotal>
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

  /**
   * 查询条件
   */
  const queryInfo = reactive({
    /**
     * 当前页数
     */
    pageNo: 1,
    /**
     * 每页请求条数
     */
    pageSize: 10,
    /**
     * 搜索关键字
     */
    keyword: ''
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
   * 查询数据
   */
  const queryData = () => {
    // const { keyword, pageNo, pageSize } = queryInfo
    // queryResultData.isRequestOver = false
    // requestW015(keyword, pageNo, pageSize)
    //   .then((res) => {
    //     //
    //   })
    //   .finally(() => {
    //     queryResultData.isRequestOver = true
    //   })
  }

  /**
   * 页面上拉触底事件的处理函数 上拉加载更多
   */
  onReachBottom(() => {
    if (!queryResultData.isLoaded) {
      queryInfo.pageNo++
      queryData()
    }
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
