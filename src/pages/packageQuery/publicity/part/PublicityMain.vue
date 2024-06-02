<template>
  <div class="publicity-main">
    <div class="title">{{ $t('publicity.queryTitle') }}</div>
    <div class="toolbar">
      <picker class="picker" @change="onChangeChb015" :range="addressData" range-key="chb015" mode="selector">
        <div class="picker-value" v-if="form.chb015">{{ form.chb015 }}</div>
        <div class="picker-placeholder" v-else>{{ $t('app.form.chb015-placeholder') }}</div>
        <div class="picker-icon iconimg iconimg-arrow-down"></div>
      </picker>
      <picker class="picker" :disabled="!form.chb015" :range="chb017List" @change="onChangeChb017">
        <div class="picker-value" v-if="form.chb017">{{ form.chb017 }}</div>
        <div class="picker-placeholder" v-else>{{ $t('app.form.chb017-placeholder') }}</div>
        <div class="picker-icon iconimg iconimg-arrow-down"></div>
      </picker>
      <picker
        class="picker"
        fields="month"
        mode="date"
        start="2000-01"
        :end="moment().format('YYYY-MM')"
        @change="onChangeAae209"
      >
        <div class="picker-value" v-if="form.aae209">{{ form.aae209 }}</div>
        <div class="picker-placeholder" v-else>{{ $t('app.form.aae209-placeholder') }}</div>
        <div class="picker-icon iconimg iconimg-arrow-down"></div>
      </picker>
    </div>
    <div class="main" v-if="renderList.length">
      <scroll-view class="scroll-view tool" scroll-y>
        <div
          class="item"
          v-for="(item, index) in renderList"
          :key="index"
          :class="[form.chi037 === item.chi037 ? 'checked' : '']"
          @click="form.chi037 = item.chi037"
        >
          <div class="text">{{ item.chi037 }}</div>
        </div>
      </scroll-view>
      <scroll-view class="scroll-view result" scroll-y>
        <div class="total">
          <div class="card">
            <div class="value">{{ curRenderData.totalMoney }}</div>
            <div class="unit">万元</div>
            <div class="key">涉及金额</div>
          </div>
          <div class="card">
            <div class="value">{{ curRenderData.totalPerson }}</div>
            <div class="unit">人</div>
            <div class="key">覆盖户(人数)</div>
          </div>
        </div>
        <div class="items">
          <div class="item" v-for="(item, index) in curRenderData.subsidyCountVoList" :key="index">
            <ComponentCardProjectTotal :render-data="item" @click="onClickJumpRoute"></ComponentCardProjectTotal>
          </div>
        </div>
      </scroll-view>
    </div>
    <template v-else>
      <ComponentProjectEmpty v-if="isRequestOver"></ComponentProjectEmpty>
    </template>
  </div>
</template>

<script setup lang="ts">
  import ComponentCardProjectTotal from '@/components/project/card-project-total/card-project-total.vue'
  import ComponentProjectEmpty from '@/components/project/empty/empty.vue'
  import type { PropType } from 'vue'
  import type { GetAllSummaryStatisticsDepartCountVo, GetChb015AndChb018ListChb015Vo } from '@/server/types'

  import { requestAppletGetChb015AndChb018List } from '@/server/api'
  import { navigateTo } from '@/utils/uni'
  import moment from 'moment'

  const emit = defineEmits(['queryChb015', 'queryChb017', 'queryAae209'])
  const props = defineProps({
    /**
     * 渲染数据
     */
    renderList: {
      type: Array as PropType<GetAllSummaryStatisticsDepartCountVo[]>,
      required: true
    },
    /**
     * 是否请求完成
     */
    isRequestOver: {
      type: Boolean,
      required: true
    }
  })

  /**
   * 查询表单信息
   */
  const form = ref({
    chi037: '',
    chb015: '',
    chb017: '',
    aae209: ''
  })

  /**
   * 区县乡镇数据
   */
  const addressData = ref<GetChb015AndChb018ListChb015Vo[]>([])

  /**
   * 获取当前渲染数据的业务局
   */
  const curRenderData = computed(() => {
    let res: GetAllSummaryStatisticsDepartCountVo = {
      chi037: '',
      projectNum: 0,
      totalMoney: 0,
      totalPerson: 0,
      subsidyCountVoList: []
    }
    const { renderList } = props
    const len = renderList.length
    const { chi037 } = form.value

    if (len) {
      for (let i = 0; i < len; i++) {
        const item = renderList[i]
        if (item.chi037 === chi037) {
          res = item
          break
        }
      }
    }

    return res
  })

  /**
   * 获取当前渲染数据的乡镇
   */
  const chb017List = computed(() => {
    let res: string[] = []
    const data = addressData.value
    const len = data.length
    const { chb015 } = form.value

    if (len) {
      for (let i = 0; i < len; i++) {
        const item = data[i]
        if (item.chb015 === chb015) {
          res = item.chb017List
          break
        }
      }
    }

    return res
  })

  /**
   * 初始化
   */
  const init = () => {
    const { renderList } = props
    if (renderList.length) {
      form.value.chi037 = renderList[0].chi037
    } else {
      form.value.chi037 = ''
    }
  }

  /**
   * 从服务器获取区县渲染数据
   */
  const getRenderData = () => {
    requestAppletGetChb015AndChb018List().then((res) => {
      const { chb015Vos } = res
      addressData.value = [...chb015Vos]
    })
  }

  /**
   * 区县改变触发的事件 通知重新查询
   */
  const onChangeChb015 = (event: WechatMiniprogram.PickerChange) => {
    const { value } = event.detail

    if (typeof value === 'string') {
      const val = addressData.value[Number(value)].chb015
      if (val !== form.value.chb015) {
        form.value.chb015 = val
        form.value.chb017 = ''
        emit('queryChb015', val)
      }
    }
  }

  /**
   * 乡镇改变触发的事件 通知重新查询
   */
  const onChangeChb017 = (event: WechatMiniprogram.PickerChange) => {
    const { value } = event.detail
    if (typeof value === 'string') {
      const val = chb017List.value[Number(value)]
      if (val !== form.value.chb017) {
        form.value.chb017 = val
        emit('queryChb017', val)
      }
    }
  }

  /**
   * 期号改变触发的事件 通知重新查询
   */
  const onChangeAae209 = (event: WechatMiniprogram.PickerChange) => {
    const { value } = event.detail
    if (typeof value === 'string') {
      form.value.aae209 = value
      emit('queryAae209', moment(value).format('YYYYMM'))
    }
  }

  const onClickJumpRoute = (chi031: string) => {
    navigateTo('publicity-details', 'packageQuery', { chi031, chb017: form.value.chb017 })
  }

  watch(
    () => props.renderList,
    () => {
      init()
    }
  )

  onMounted(() => {
    getRenderData()
  })
</script>

<style lang="scss" scoped>
  $color1: #436efe;
  $color2: #ff6853;
  .publicity-main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 32rpx;
      line-height: 1;
      color: $color-text;
      padding-left: $spacing;
      padding-bottom: $spacing;
      font-weight: 700;
      box-sizing: border-box;
    }
    .toolbar {
      background-color: rgba($color-primary, 0.6);
      background-image: linear-gradient(to bottom, rgba($color-primary, 0.4), $color-bg);
      border-top-left-radius: 32rpx;
      border-top-right-radius: 32rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: $spacing;
      box-sizing: border-box;
      .picker {
        width: 210rpx;
        line-height: 1;
        background-color: #fff;
        border-radius: 8rpx;
        position: relative;
        &-value,
        &-placeholder {
          width: 100%;
          line-height: 40rpx;
          padding: 10rpx 12rpx;
          font-size: 26rpx;
          padding-right: 40rpx;
          box-sizing: border-box;
          @include textOverflow(1);
        }
        &-icon,
        &-placeholder {
          color: rgba($color-text, 0.6);
        }
        &-icon {
          position: absolute;
          top: 50%;
          right: 4rpx;
          transform: translateY(-50%);
        }
      }
    }
    .main {
      flex: 1;
      overflow: hidden;
      display: flex;
      .tool {
        width: 220rpx;
        background-color: #fff;
        padding: $spacing;

        .item {
          width: 100%;
          text-align: center;
          padding: 12rpx 10rpx;
          border-radius: 8rpx;
          box-sizing: border-box;
          margin-bottom: 8rpx;
          transition: all 0.3s;
          background-color: transparent;
          color: $color-text;
          .text {
            max-width: 100%;
            display: inline-block;
            font-size: 28rpx;
            line-height: 1.2;
            text-align: left;
            transition: all 0.3s;
          }
          &:last-child {
            margin-bottom: 0;
          }
          &.checked {
            background-color: $color-primary;
            color: #fff;
          }
        }
      }
      .result {
        padding-left: $spacing;
        padding-top: $spacing;

        .total {
          display: flex;
          align-items: center;
          font-size: 28rpx;
          padding-right: $spacing;
          .card {
            flex: 1;
            overflow: hidden;
            background-color: rgba($color2, 0.8);
            padding: $spacing;
            border-radius: 8rpx;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 24rpx;
            line-height: 1;
            margin-right: 20rpx;
            .value {
              font-size: 32rpx;
              font-weight: 700;
            }
            .unit {
              width: 100rpx;
              line-height: 40rpx;
              text-align: center;
              margin: 20rpx 0;
              background-color: rgba(#fff, 0.2);
              font-size: 24rpx;
              border-radius: 50px;
            }
            .key {
              font-size: 26rpx;
              line-height: 1;
            }
            &:last-child {
              margin-right: 0;
              background-color: rgba($color1, 0.8);
            }
          }
        }
        .items {
          padding-right: $spacing;
          padding-top: 20rpx;
          .item {
            margin-bottom: 20rpx;
          }
        }
      }
      .scroll-view {
        height: 100%;
        overflow: hidden;
        box-sizing: border-box;
        &.result {
          flex: 1;
        }
      }
    }
  }
</style>
