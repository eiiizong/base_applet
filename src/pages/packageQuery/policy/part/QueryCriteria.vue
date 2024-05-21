<template>
  <div class="query-criteria">
    <ComponentProjectPanel :title="$t('policy.query.title')">
      <div class="form">
        <label class="form-item" for="name">
          <div class="form-item-label">{{ $t('policy.query.name') }}</div>
          <div class="form-item-input-wrapper">
            <input
              v-model="form.name"
              class="form-item-input input"
              type="text"
              id="name"
              :placeholder="$t('policy.query.namePlaceholder')"
            />
          </div>
        </label>
        <label class="form-item" for="name2">
          <div class="form-item-label">{{ $t('policy.query.department') }}</div>
          <div class="form-item-input-wrapper">
            <picker id="name2" class="picker form-item-picker">
              <div class="form-item-picker-value" v-if="form.name2"></div>
              <div class="form-item-picker-placeholder" v-else>{{ $t('policy.query.departmentPlaceholder') }}</div>
              <div class="form-item-picker-icon">
                <ta-icon name="arrow" size="30rpx" />
              </div>
            </picker>
          </div>
        </label>
        <label class="form-item" for="name3">
          <div class="form-item-label">{{ $t('policy.query.project') }}</div>
          <div class="form-item-input-wrapper">
            <picker id="name3" class="picker form-item-picker">
              <div class="form-item-picker-value" v-if="form.name3"></div>
              <div class="form-item-picker-placeholder" v-else>{{ $t('policy.query.projectPlaceholder') }}</div>
              <div class="form-item-picker-icon">
                <ta-icon name="arrow" size="30rpx" />
              </div>
            </picker>
          </div>
        </label>
        <button class="button button-query" @click="emit('query', form)">{{ $t('policy.query.button') }}</button>
      </div>
    </ComponentProjectPanel>
  </div>
</template>

<script setup lang="ts">
  import ComponentProjectPanel from '@/components/project/panel/panel.vue'

  const emit = defineEmits(['query'])

  const form = ref({
    name: '',
    name2: '',
    name3: ''
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
    .buttons-wrapper {
      width: 100%;

      .button {
        width: 100%;
        height: 64rpx;
        line-height: 64rpx;
        font-size: 24rpx;
        color: #fff;
        text-align: center;
        background-color: $color-primary;
        border-radius: 8rpx;
      }
    }
  }
</style>
