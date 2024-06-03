<template>
  <div class="page-scroll fund">
    <ComponentProjectCardInfo
      :main-text="name + '' + idCard"
      :footer-text="$t('page.fund.subtitle')"
    ></ComponentProjectCardInfo>

    <div class="toolbar uno-flex uno-justify-between">
      <div class="title">{{ $t('app.query.result.name') }}</div>
      <picker
        class="picker"
        fields="year"
        mode="date"
        start="2000"
        :end="moment().format('YYYY')"
        @change="onChangeYear"
      >
        <div class="picker-value" v-if="queryInfo.year">{{ queryInfo.year + $t('app.unit.year') }}</div>
        <div class="picker-placeholder" v-else>{{ $t('app.form.year.placeholder') }}</div>
        <div class="picker-icon iconimg iconimg-arrow-down"></div>
      </picker>
    </div>

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
  import ComponentProjectCardInfo from '@/components/project/card-info/card-info.vue'

  import FundTotal from './part/FundTotal.vue'
  import QueryResults from './part/QueryResults.vue'

  import type { GetSelfFundCollectDataApiSuccessResponse, GetSubsidyDetailPageListRow } from '@/server/types'

  import moment from 'moment'
  import { requestAppletGetSelfFundCollectData, requestAppletGetSubsidyDetailPageList } from '@/server/api'
  import { useStoreUserInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()
  const { name, idCard } = toRefs(storeUserInfo)
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
    list: GetSubsidyDetailPageListRow[]
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
   * 改变年份查询数据
   */
  const onChangeYear = (event: WechatMiniprogram.PickerChange) => {
    const { value } = event.detail
    if (typeof value === 'string') {
      const val = moment(value).format('YYYY')
      queryInfo.year = val
      queryAllDataByYear()
    }
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
    .toolbar {
      padding: $spacing;
      padding-top: $spacing - 14rpx;
      .title {
        line-height: 1;
        font-weight: 700;
        font-size: 32rpx;
        color: $color-text;
        padding-left: 20rpx;
        box-sizing: border-box;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 8rpx;
          height: 32rpx;
          background-color: $color-primary;
          border-radius: 2rpx;
          margin-right: 10rpx;
        }
      }
      .picker {
        box-sizing: border-box;
        position: relative;
        height: 40rpx;
        &-value,
        &-placeholder {
          font-size: 28rpx;
          line-height: 40rpx;
          padding-right: 30rpx;
        }
        &-value {
          color: $color-text;
          font-weight: 700;
          font-size: 32rpx;
        }
        &-icon {
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
        }
      }
    }
    .total-wrapper {
      padding: $spacing;
      padding-top: 0;
    }
  }
</style>
