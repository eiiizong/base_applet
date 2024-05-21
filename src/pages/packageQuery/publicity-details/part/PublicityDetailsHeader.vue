<template>
  <div class="publicity-details-header">
    <image class="image bg" :src="imageBgHeader"></image>
    <div class="con-wrapper">
      <div class="con">
        <div class="main">
          <div class="cell">{{ chi031 }}</div>
        </div>
        <div class="footer">西藏自治区-那曲市-安多县</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import imageBgHeader from '../images/bg-header.png'

  const props = defineProps({
    chi031: {
      type: String,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .publicity-details-header {
    width: 100%;
    position: relative;
    padding: 0 14rpx;
    box-sizing: border-box;
    .bg {
      display: block;
      width: 722rpx;
      height: 206rpx;
      margin: 0 auto;
    }
    .con-wrapper {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      padding: 14rpx 30rpx;
      box-sizing: border-box;
      .con {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: $spacing;
        color: #fff;
        font-size: 28rpx;
        line-height: 1;
        font-weight: 400;
        position: relative;
        box-sizing: border-box;
        .main {
          .cell {
            display: flex;
            font-weight: 500;
            font-size: 28rpx;
            line-height: 1.4;
          }
        }

        .footer {
          line-height: 60rpx;
          padding: 0 $spacing;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          right: 0;
          font-size: 24rpx;
          opacity: 0.4;
        }
      }
    }
  }
</style>
