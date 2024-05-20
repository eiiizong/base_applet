<template>
  <div class="page project">
    <ProjectHeader :scroll-view-id="scrollViewId" :render-list="chi031List" @query="onClickQuery"></ProjectHeader>
    <scroll-view class="scroll-view" scroll-y>
      <template v-if="chi031List.length">
        <QueryResults :render-list="chi031List"></QueryResults>
      </template>
      <template v-else>
        <ComponentProjectEmpty v-if="isRequestOver"></ComponentProjectEmpty>
      </template>
    </scroll-view>
  </div>
</template>
<script setup lang="ts">
  import ComponentProjectEmpty from '@/components/project/empty/empty.vue'
  import ProjectHeader from './part/ProjectHeader.vue'
  import QueryResults from './part/QueryResults.vue'

  import type { GetSubsidyProjectListRow } from '@/server/types'
  import { requestAppletGetSubsidyProjectList } from '@/server/api'

  /**
   * 查询关键词
   */
  const chi031 = ref('')
  /**
   * 是否查询完成
   */
  const isRequestOver = ref(false)
  /**
   * 当前滚动到顶部的id
   */
  const scrollViewId = ref('')

  /**
   * 查询结果数据
   */
  const chi031List = ref<
    {
      chi037: string
      chi037Desc: string
      list: GetSubsidyProjectListRow[]
    }[]
  >([])

  /**
   * 查询数据
   */
  const queryData = () => {
    isRequestOver.value = false
    chi031List.value = []
    requestAppletGetSubsidyProjectList(chi031.value)
      .then((res) => {
        const newList = []
        let index = 1
        for (let key in res) {
          if (res[key]) {
            newList.push({
              chi037: index + '',
              chi037Desc: key,
              list: res[key]
            })
            index++
          }
        }
        if (newList.length) {
          scrollViewId.value = newList[0].chi037
          chi031List.value = [...newList]
        }
      })
      .finally(() => {
        isRequestOver.value = true
      })
  }

  /**
   * 点击查询按钮查询
   */
  const onClickQuery = (keyord: string) => {
    chi031.value = keyord
    queryData()
  }

  onLoad(() => {
    queryData()
  })
</script>

<style lang="scss" scoped>
  .project {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .scroll-view {
      flex: 1;
      overflow: hidden;
    }
  }
</style>
