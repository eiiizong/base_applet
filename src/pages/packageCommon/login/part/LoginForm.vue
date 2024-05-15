<template>
  <div class="login-form">
    <div class="form-wrapper">
      <div class="form-item">
        <label class="label" for="name">{{ $t('login.form.name.label') }}</label>
        <div class="input-wrapper">
          <input
            class="input"
            v-model="form.name"
            id="name"
            type="text"
            :placeholder="$t('login.form.name.placeholder')"
          />
        </div>
      </div>
      <div class="form-item">
        <label class="label" for="idcard">{{ $t('login.form.idcard.label') }}</label>
        <div class="input-wrapper">
          <input
            class="input"
            v-model="form.idcard"
            id="idcard"
            type="idcard"
            :placeholder="$t('login.form.idcard.placeholder')"
          />
        </div>
      </div>
      <!-- #ifdef MP-WEIXIN -->
      <div class="form-item">
        <div class="label">{{ $t('login.form.tel.label') }}</div>
        <div class="input-wrapper">
          <input v-model="form.tel" disabled class="input" type="tel" :placeholder="$t('login.form.tel.placeholder')" />
          <button class="button" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
            {{ $t('login.form.tel.button') }}
          </button>
        </div>
      </div>
      <!-- #endif -->
    </div>
    <div class="agreement-wrapper">
      <label for="agree" class="label">
        <checkbox-group @change="onChangeCheckbox">
          <checkbox value="1" id="agree" class="checkbox" />
        </checkbox-group>
        <div class="icon-checkbox" :class="[form.agree ? 'checked' : '']">
          <div class="icon"></div>
        </div>
        <div class="cells" for="agree">
          <div class="cell">
            {{ $t('login.agreement.part01') }}
          </div>
          <div class="cell">
            <span>{{ $t('login.agreement.part02') }}</span>
            <span class="link">《{{ $t('login.agreement.part03') }}》</span>
            <span>{{ $t('login.agreement.part04') }}</span>
            <span class="link">《{{ $t('login.agreement.part05') }}》</span>
          </div>
        </div>
      </label>
    </div>
    <div class="button-wrapper">
      <button class="button" :disabled="!isCanClickLogin" @click="emit('click', form)">{{ $t('login.button') }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['click'])

  /**
   * 登录信息表单
   */
  const form = ref({
    /**
     * 姓名
     */
    name: '',
    /**
     * 身份证号
     */
    idcard: '',
    /**
     * 手机号
     */
    tel: '',
    /**
     * 是否同意协议
     */
    agree: false
  })

  /**
   * 是否可以点击登录按钮
   */
  const isCanClickLogin = computed(() => {
    let res = true
    const { name, idcard, tel, agree } = form.value
    if (!name || !idcard || !tel || !agree) {
      res = false
    }
    return res
  })

  /**
   * 获取手机号回调
   */
  const getPhoneNumber = (event: WechatMiniprogram.ButtonGetPhoneNumber) => {
    console.log(event, 99)
  }

  /**
   * 用户同意/不同意协议触发的事件
   */
  const onChangeCheckbox = (event: WechatMiniprogram.CheckboxGroupChange) => {
    const { value } = event.detail
    if (value.length) {
      form.value = {
        ...form.value,
        agree: true
      }
    } else {
      form.value = {
        ...form.value,
        agree: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-form {
    padding: $spacing;
    .form-wrapper {
      width: 100%;
      margin-top: $spacing;
      .form-item {
        width: 100%;
        font-size: 28rpx;
        margin-bottom: 26rpx;
        .label {
          font-weight: 500;
          line-height: 32rpx;
          padding-bottom: 8rpx;
          color: rgba($color-text, 0.8);
        }

        .input-wrapper {
          width: 100%;
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-top: 12rpx;
          height: 80rpx;
          .input {
            flex: 1;
            overflow: hidden;
            background-color: rgba(#f0f2f5, 0.7);
            border-radius: 12rpx;
            line-height: 40rpx;
            height: 100%;
            padding: 20rpx;
            &[disabled] {
              opacity: 0.8;
            }
          }
          .button {
            width: auto;
            padding: 0 20rpx;
            line-height: 80rpx;
            font-size: 28rpx;
            border-radius: 8rpx;
            background-color: $color-primary;
            color: #fff;
            margin-left: $spacing;
          }
        }
      }
    }

    .agreement-wrapper {
      width: 100%;
      margin-top: $spacing;

      .label {
        display: flex;
      }
      .checkbox {
        display: none;
      }
      .icon-checkbox {
        $size: 30rpx;
        width: $size;
        height: $size;
        margin-right: 8rpx;
        border: 1px solid $color-border;
        border-radius: 2px;
        display: flex;
        margin-top: 8rpx;
        .icon {
          margin: auto;
          width: 20rpx;
          height: 10rpx;
          border: 4rpx solid #fff;
          border-radius: 1px;
          border-top: none;
          border-right: none;
          background: transparent;
          transform: rotate(-45deg);
          position: relative;
          top: -2rpx;
          opacity: 0;
          transition: all 0.3s;
        }
        &.checked {
          background-color: $color-primary;
          border: 0;

          .icon {
            opacity: 1;
          }
        }
      }

      .cells {
        flex: 1;
        overflow: hidden;
        .cell {
          color: $color-text-placeholder;
          font-size: 24rpx;
          line-height: 40rpx;
          .link {
            color: $color-primary;
          }
        }
      }
    }
    .button-wrapper {
      padding-top: $spacing * 2;
      .button {
        width: 100%;
        font-size: 30rpx;
        line-height: 80rpx;
        border-radius: 8rpx;
        color: #fff;
        background-color: $color-primary;
        &[disabled] {
          opacity: 0.6;
        }
      }
    }
  }
</style>
