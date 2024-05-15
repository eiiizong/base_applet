<template>
  <div class="login-form">
    <div class="form-wrapper">
      <div class="form-item">
        <label class="label" for="name">{{ $t('login.form.name.label') }}</label>
        <div class="input-wrapper">
          <input v-model="form.name" id="name" type="text" :placeholder="$t('login.form.name.placeholder')" />
        </div>
      </div>
      <div class="form-item">
        <label class="label" for="idcard">{{ $t('login.form.idcard.label') }}</label>
        <div class="input-wrapper">
          <input v-model="form.idcard" id="idcard" type="idcard" :placeholder="$t('login.form.idcard.placeholder')" />
        </div>
      </div>
      <!-- #ifdef MP-WEIXIN -->
      <div class="form-item">
        <div class="label">{{ $t('login.form.tel.label') }}</div>
        <div class="input-wrapper flex">
          <input v-model="form.tel" disabled type="tel" :placeholder="$t('login.form.tel.placeholder')" />
          <button class="btn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
            {{ $t('login.form.tel.button') }}
          </button>
        </div>
      </div>
      <!-- #endif -->
    </div>
    <div class="agreement-wrapper">
      <checkbox-group @change="onChangeCheckbox">
        <checkbox value="1" id="agree" class="checkbox" />
      </checkbox-group>
      <label class="cells" for="agree">
        <div class="cell">
          {{ $t('login.agreement.part01') }}
        </div>
        <div class="cell">
          <span>{{ $t('login.agreement.part02') }}</span>
          <span>《{{ $t('login.agreement.part03') }}》</span>
          <span>{{ $t('login.agreement.part04') }}</span>
          <span>《{{ $t('login.agreement.part05') }}》</span>
        </div>
      </label>
    </div>
    <div class="button-wrapper">
      <button @click="emit('click', form)">{{ $t('login.button') }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['click'])

  const form = ref({
    name: '',
    idcard: '',
    tel: '',
    agree: false
  })

  const getPhoneNumber = (e: any) => {
    console.log(e, 99)
  }

  const onChangeCheckbox = (e: any) => {
    console.log(e, 99)
  }
</script>

<style lang="scss" scoped>
  .login-form {
    .form-wrapper {
      width: 100%;
      margin-top: 32rpx;

      .form-item {
        width: 100%;

        &:not(:first-child) {
          margin-top: 24rpx;
        }

        .label {
          display: flex;
          font-size: 28rpx;
          width: 100%;
        }

        .input-wrapper {
          width: 100%;
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-top: 12rpx;
        }
      }
    }

    .agreement-wrapper {
      width: 100%;
      margin-top: 32rpx;

      .aw-checkbox {
        width: 100%;
      }
    }
  }
</style>
