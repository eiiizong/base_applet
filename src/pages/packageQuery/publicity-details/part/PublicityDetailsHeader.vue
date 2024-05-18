<template>
  <div class="publicity-details-header">
    <image class="image" :src="imageBgHeader"></image>
    <div class="con">
      <div class="cell">残疾人生活补贴和重度残疾人护理补贴</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import imageBgHeader from '../images/bg-header.png'
</script>

<style lang="scss" scoped>
  .publicity-details-header {
    width: 100%;
    position: relative;
    padding: 0 14rpx;
    .image {
      display: block;
      width: 722rpx;
      height: 206rpx;
      margin: 0 auto;
    }
    .con {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      padding: 0 30rpx;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .cell {
        display: flex;
        align-items: center;
        font-size: 28rpx;
        line-height: 1;
        font-weight: 400;
        color: #fff;
        padding: 0 $spacing;
        .idcard {
          margin-left: 30rpx;
        }
      }
    }
  }
</style>
