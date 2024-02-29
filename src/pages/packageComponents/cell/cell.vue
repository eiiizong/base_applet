<template>
  <div class="demo-cell">
    <demo-block title="基础用法">
      <ta-cell-group>
        <ta-cell title="单元格" value="内容" />
        <ta-cell title="单元格" value="内容" label="描述信息" :border="false" />
      </ta-cell-group>
    </demo-block>

    <demo-block title="卡片风格">
      <ta-cell-group inset>
        <ta-cell title="单元格" value="内容" />
        <ta-cell title="单元格" value="内容" label="描述信息" />
      </ta-cell-group>
    </demo-block>

    <demo-block title="单元格大小">
      <ta-cell-group>
        <ta-cell title="单元格" value="内容" size="large" />
        <ta-cell title="单元格" value="内容" size="large" use-label-slot :border="false">
          <template #label>
            <view>描述信息</view>
          </template>
        </ta-cell>
      </ta-cell-group>
    </demo-block>

    <demo-block title="展示图标">
      <ta-cell title="单元格" value="内容" icon="location-o" :border="false" />
    </demo-block>

    <demo-block title="展示箭头">
      <ta-cell title="单元格" is-link />
      <ta-cell title="单元格" value="内容" is-link />
      <ta-cell title="单元格" is-link arrow-direction="down" value="内容" :border="false" />
    </demo-block>

    <demo-block title="页面跳转">
      <ta-cell title="单元格" is-link url="/pages/dashboard/index" />
      <ta-cell title="单元格" is-link url="/pages/dashboard/index" link-type="redirectTo" />
    </demo-block>

    <demo-block title="分组标题">
      <ta-cell-group title="分组 1">
        <ta-cell title="单元格" value="内容" />
      </ta-cell-group>
      <ta-cell-group title="分组 2">
        <ta-cell title="单元格" value="内容" />
      </ta-cell-group>
    </demo-block>

    <demo-block title="使用插槽">
      <ta-cell value="内容" icon="shop-o" is-link>
        <template #title>
          <view>
            <view class="title">单元格</view>
            <!-- <ta-tag type="danger">标签</ta-tag> -->
          </view>
        </template>
      </ta-cell>
      <ta-cell title="单元格" :border="false">
        <template #right-icon>
          <ta-icon name="search" />
        </template>
      </ta-cell>
    </demo-block>

    <demo-block title="垂直居中">
      <ta-cell center title="单元格" value="内容" label="描述信息" />
    </demo-block>
  </div>
</template>

<script setup lang="ts">
  import DemoBlock from '../components/demo-block/index.vue'
</script>

<style lang="scss" scoped>
  .demo-cell {
    background-color: #f6f6f6;
  }
  .title {
    margin-right: 5px;
    display: inline-block;
    vertical-align: middle;
  }
</style>
