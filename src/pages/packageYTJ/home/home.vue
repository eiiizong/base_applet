<template>
  <YtjPageWrapper>
    <!-- <view class="home">
      <Statistics :service-num="appServiceNum" :query-num="appQueryNum" />
      <Navs />
      <div class="wrapper">
        <QR />
        <Robot />
      </div>
    </view> -->
    <!-- <ComponentProjectPopupUpdateApp v-model="isCanUpdateApp" :version-info="newVersionInfo" /> -->
  </YtjPageWrapper>
</template>

<script setup lang="ts">
  import YtjPageWrapper from '@/components/project/ytj-page-wrapper/ytj-page-wrapper.vue'

  // import ComponentProjectPopupUpdateApp from '@/components/project/popup-update-app/popup-update-app.vue'
  // import Statistics from './Statistics.vue'
  // import Navs from './Navs.vue'
  // import QR from './QR.vue'
  // import Robot from './Robot.vue'

  // import { useCheckAppUpdate, useUpdateRoute } from '@/hooks/project'
  // import { requestQueryYtjAccessTimeTotal } from '@/server/api'
  // import { useStoreDeviceInfo } from '@/stores/modules'

  // import type { ApiResponseResult } from '@/server/types'

  // const storeDeviceInfo = useStoreDeviceInfo()
  // const { deviceInfo } = toRefs(storeDeviceInfo)
  /**
   * 是否可以升级
   */
  // const isCanUpdateApp = ref(false)

  /**
   * 新版本信息
   */
  // const newVersionInfo = ref<ApiResponseResult.QueryYtjVersion | null>(null)

  /**
   * 服务次数
   */
  // const appServiceNum = ref(0)

  /**
   * 查询次数
   */
  // const appQueryNum = ref(0)

  /**
   * 服务统计数据查询
   */
  // const queryYtjAccessTimeTotal = () => {
  //   // 未注册设备不调用接口
  //   const { hostid } = deviceInfo.value || {}
  //   if (!hostid) {
  //     return
  //   }
  //   requestQueryYtjAccessTimeTotal().then((res) => {
  //     const { loginTimes, searchTimes } = res
  //     appServiceNum.value = Number(loginTimes || 0)
  //     appQueryNum.value = Number(searchTimes || 0)
  //   })
  // }

  onShow(() => {
    // useUpdateRoute()
    // queryYtjAccessTimeTotal()
    // useCheckAppUpdate().then((res) => {
    //   isCanUpdateApp.value = true
    //   newVersionInfo.value = res
    // })
  })

  onHide(() => {
    //
  })

  // watch(
  //   () => deviceInfo.value?.hostid,
  //   (val) => {
  //     if (val) {
  //       queryYtjAccessTimeTotal()
  //     }
  //   }
  // )
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    padding: 2.75rem 2rem;
    .wrapper {
      padding-top: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
