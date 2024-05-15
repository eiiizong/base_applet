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
      <div class="aw-checkbox d-f">
        <checkbox-group @change="onChangeCheckbox">
          <checkbox value="1" class="checkbox" />
        </checkbox-group>
        <div class="cell">
          {{ $t('login.agreement.part01') }}
        </div>
        <div class="cell">
          <span>{{ $t('login.agreement.part02') }}</span>
          <span>《{{ $t('login.agreement.part03') }}》</span>
          <span>{{ $t('login.agreement.part04') }}</span>
          <span>《{{ $t('login.agreement.part05') }}》</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
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
  .form-wrapper {
    width: 100%;
    margin-top: 32rpx;

    .input-content {
      width: 100%;

      &:not(:first-child) {
        margin-top: 24rpx;
      }

      .label {
        display: flex;
        font-size: 28rpx;
        width: 100%;

        .required {
          font-weight: 400;
          color: #e50707;
        }

        .name {
          font-weight: 400;
          color: #333333;
          white-space: nowrap;
        }

        .zw {
          margin-left: 8rpx;
          color: #333333;
        }
      }

      .input-con {
        width: 100%;
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 12rpx;

        .input-style {
          width: 100%;
          display: block;
          height: 66rpx;
          background: #f6f9fe;
          border-radius: 8rpx;
          padding: 20rpx 24rpx;
          @include textOverflow(1);
        }

        .placeholder-style {
          font-size: 26rpx;
          font-weight: 400;
          color: #999999;
        }

        .btn-phone {
          width: 198rpx;
          background: #0063fe;
          border-radius: 8rpx;
          margin-left: 16rpx;
          line-height: 1;
          padding: 12rpx 8rpx;

          .zh {
            font-size: 26rpx;
            font-weight: 400;
            color: #ffffff;
          }

          .zw {
            font-size: 26rpx;
            color: #ffffff;
          }
        }
      }
    }
  }

  .agree-wrapper {
    width: 100%;
    margin-top: 32rpx;

    .aw-checkbox {
      width: 100%;

      .checkbox-style {
        transform: scale(0.7);
      }

      .awc-con {
        font-size: 24rpx;
        color: #999999;

        .zh {
          font-weight: 400;
        }

        .zw {
          font-size: 24rpx;
          color: #999999;
        }
      }
    }

    .view-service {
      width: 100%;
      line-height: 1;
      margin-top: 20rpx;
      padding-left: 58rpx;

      .zh {
        font-size: 24rpx;
        font-weight: 400;
        color: #999999;

        &:not(:first-child) {
          margin-top: 12rpx;
        }

        .zh-c {
          color: #0063fe;
        }
      }
    }
  }
</style>
