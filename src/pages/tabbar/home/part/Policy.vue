<template>
  <div class="home-policy">
    <ComponentProjectPanel
      :title="$t('home.policy.name')"
      :more-text="policys.length ? $t('home.policy.moreText') : ''"
      @clickMore="onClickMore"
    >
      <div class="items" v-if="policys.length">
        <div class="item" v-for="(item, index) in policys" :key="index" @click="onClick(item)">
          <ComponentProjectCardPolicy :render-data="item"></ComponentProjectCardPolicy>
        </div>
      </div>
      <template v-else>
        <ComponentProjectEmpty v-if="isRequestOver"></ComponentProjectEmpty>
      </template>
      <div class="buttons-wrapper" v-if="policys.length">
        <button class="button" @click="onClickMore">{{ $t('home.policy.buttonText') }}</button>
      </div>
    </ComponentProjectPanel>
  </div>
</template>

<script setup lang="ts">
  import ComponentProjectEmpty from '@/components/project/empty/empty.vue'
  import ComponentProjectPanel from '@/components/project/panel/panel.vue'
  import ComponentProjectCardPolicy from '@/components/project/card-policy/card-policy.vue'

  import type { PolicyVo } from '@/server/types'
  import { navigateTo } from '@/utils/uni'
  import { requestAppletGetLatestPolicyList } from '@/server/api'

  const policys = ref<PolicyVo[]>([])
  const isRequestOver = ref(false)

  const onClick = (data: any) => {
    console.log(data)
  }

  const onClickMore = () => {
    navigateTo('policy', 'packageQuery')
  }

  /**
   * 获取政策数据
   */
  const getData = () => {
    isRequestOver.value = false
    requestAppletGetLatestPolicyList()
      .then((res) => {
        const { policyVoList } = res
        policys.value = [...policyVoList]
      })
      .finally(() => {
        isRequestOver.value = true
      })
  }

  onMounted(() => {
    getData()
  })
</script>

<style lang="scss" scoped>
  .home-policy {
    width: 100%;
    padding-top: $spacing;
    box-sizing: border-box;
    .items {
      display: flex;
      flex-direction: column;
    }
    .item {
      margin-bottom: $spacing;
    }
    .buttons-wrapper {
      width: 100%;

      .button {
        width: 100%;
        height: 80rpx;
        line-height: 80rpx;
        font-size: 30rpx;
        color: #fff;
        text-align: center;
        background-color: $color-primary;
        border-radius: 50px;
      }
    }
  }
</style>
