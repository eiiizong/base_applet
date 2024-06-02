<template>
  <div class="query-criteria">
    <ComponentProjectPanel :title="$t('policy.query.title')">
      <div class="form">
        <label class="form-item" for="policyName">
          <div class="form-item-label">{{ $t('policy.query.name') }}</div>
          <div class="form-item-input-wrapper">
            <input
              v-model="form.policyName"
              class="form-item-input input"
              type="text"
              id="policyName"
              :placeholder="$t('policy.query.namePlaceholder')"
            />
          </div>
        </label>
        <label class="form-item" for="chi037">
          <div class="form-item-label">{{ $t('policy.query.department') }}</div>
          <div class="form-item-input-wrapper">
            <picker
              id="chi037"
              class="picker form-item-picker"
              :range="chi037Options"
              range-key="label"
              @change="onChangeChi037"
            >
              <div class="form-item-picker-value" v-if="form.chi037">{{ getDesc(chi037Options, form.chi037) }}</div>
              <div class="form-item-picker-placeholder" v-else>{{ $t('policy.query.departmentPlaceholder') }}</div>
              <div class="form-item-picker-icon">
                <ta-icon name="arrow" size="30rpx" />
              </div>
            </picker>
          </div>
        </label>
        <label class="form-item" for="chi031">
          <div class="form-item-label">{{ $t('policy.query.project') }}</div>
          <div class="form-item-input-wrapper">
            <picker
              id="chi031"
              class="picker form-item-picker"
              :class="[!form.chi037 ? 'disabled' : '']"
              :disabled="!form.chi037"
              :range="chi031List"
              @change="onChangeChi031"
              range-key="label"
            >
              <div class="form-item-picker-value" v-if="form.chi031">{{ getDesc(chi031List, form.chi031) }}</div>
              <div class="form-item-picker-placeholder" v-else>{{ $t('policy.query.projectPlaceholder') }}</div>
              <div class="form-item-picker-icon">
                <ta-icon name="arrow" size="30rpx" />
              </div>
            </picker>
          </div>
        </label>
        <div class="button-wrapper uno-flex uno-justify-center">
          <button class="button button-query" @click="onClickQuery">{{ $t('policy.query.button') }}</button>
          <button class="button button-query" @click="onClickReset">重置</button>
        </div>
      </div>
    </ComponentProjectPanel>
  </div>
</template>

<script setup lang="ts">
  import type { Option } from '@/server/types'

  import ComponentProjectPanel from '@/components/project/panel/panel.vue'
  import { requestAppletGetChi037AndChi031List } from '@/server/api'

  const emit = defineEmits(['query'])

  const form = ref({
    policyName: '',
    chi037: '',
    chi031: ''
  })

  /**
   * 业务局及其补贴项目数据
   */
  const chi037Options = ref<Option[]>([])

  const chi031List = computed(() => {
    let arr: Option[] = []
    const { chi037 } = form.value
    const data = chi037Options.value
    for (let i = 0; i < data.length; i++) {
      const item = data[i]
      if (chi037 === item.value) {
        arr = [...(item.children || [])]
      }
    }
    return arr
  })

  /**
   * 码值转文字
   */
  const getDesc = (arr: Option[], val: string) => {
    let str = ''
    for (let i = 0, len = arr.length; i < len; i++) {
      const item = arr[i]
      if (item.value === val) {
        str = item.label
        break
      }
    }
    return str
  }

  /**
   * 获取筛选条件渲染数据
   */
  const getData = () => {
    requestAppletGetChi037AndChi031List().then((res) => {
      const { chi037List } = res
      chi037Options.value = [...chi037List]
    })
  }

  const onChangeChi037 = (event: WechatMiniprogram.PickerChange) => {
    const { value } = event.detail

    if (typeof value === 'string') {
      const val = chi037Options.value[Number(value)].value
      if (val !== form.value.chi037) {
        form.value.chi037 = val
        form.value.chi031 = ''
      }
    }
  }

  const onChangeChi031 = (event: WechatMiniprogram.PickerChange) => {
    const { value } = event.detail

    if (typeof value === 'string') {
      const val = chi031List.value[Number(value)].value
      if (val !== form.value.chi037) {
        form.value.chi031 = val
      }
    }
  }

  const onClickQuery = () => {
    emit('query', form.value)
  }

  const onClickReset = () => {
    form.value.policyName = ''
    form.value.chi031 = ''
    form.value.chi037 = ''
    emit('query', form.value)
  }
  onMounted(() => {
    getData()
  })
</script>

<style lang="scss" scoped>
  .query-criteria {
    width: 100%;

    .items {
      display: flex;
      flex-direction: column;
    }
    .item {
      margin-bottom: $spacing;
    }
    .button-wrapper {
      width: 100%;

      .button {
        width: 40%;
        height: 64rpx;
        line-height: 64rpx;
        font-size: 24rpx;
        color: #fff;
        text-align: center;
        background-color: $color-primary;
        border-radius: 8rpx;
        margin-right: $spacing;
        box-sizing: border-box;
        font-weight: 500;
        &:last-child {
          margin-right: 0;
          background-color: #fff;
          color: $color-text;
          border: 1px solid rgba($color-text, 0.4);
        }
      }
    }
  }
</style>
