<template>
  <div class="home-policy">
    <ComponentProjectPanel
      :title="$t('home.policy.name')"
      :more-text="$t('home.policy.moreText')"
      @clickMore="onClickMore"
    >
      <div class="items">
        <div class="item" v-for="(item, index) in policys" :key="index" @click="onClick(item)">
          <ComponentProjectCardPolicy :render-data="item"></ComponentProjectCardPolicy>
        </div>
      </div>
      <div class="buttons-wrapper">
        <button class="button" @click="onClickMore">发现政策</button>
      </div>
    </ComponentProjectPanel>
  </div>
</template>

<script setup lang="ts">
  import ComponentProjectPanel from '@/components/project/panel/panel.vue'
  import ComponentProjectCardPolicy from '@/components/project/card-policy/card-policy.vue'

  import { navigateTo } from '@/utils/uni'

  const policys = ref([{}, {}])

  const onClick = (data: any) => {
    console.log(data)
  }

  const onClickMore = () => {
    navigateTo('policy', 'packageQuery')
  }
</script>

<style lang="scss" scoped>
  .home-policy {
    width: 100%;
    padding-top: $spacing;
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
