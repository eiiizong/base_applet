<template>
  <div class="demo-home">
    <view class="demo-home__title">
      <image mode="aspectFit" class="demo-home__image" src="https://img.yzcdn.cn/vant/logo.png" />
      <view class="demo-home__text">Ta Weapp</view>
    </view>
    <view class="demo-home__desc">轻量、可靠的小程序 UI 组件库</view>
    <view v-for="(item, index) in list" :key="index">
      <Nav :render-data="item" />
    </view>
  </div>
</template>

<script setup lang="ts">
  import type { NavItem } from './type'

  import Nav from './Nav.vue'

  const list = ref<NavItem[]>([
    {
      groupName: '基础组件',
      icon: 'https://img.yzcdn.cn/vant/basic-0401.svg',
      list: [
        {
          path: 'button',
          title: 'Button 按钮',
        },
        {
          path: 'cell',
          title: 'Cell 单元格',
        },
        {
          path: '',
          title: 'ConfigProvider 全局配置',
        },
        {
          path: 'icon',
          title: 'Icon 图标',
        },
        {
          path: '',
          title: 'Image 图片',
        },
        {
          path: 'col',
          title: 'Layout 布局',
        },
        {
          path: 'popup',
          title: 'Popup 弹出层',
        },
        {
          path: 'transition',
          title: 'Transition 动画',
        },
      ],
    },
    {
      groupName: '表单组件',
      icon: 'https://img.yzcdn.cn/vant/form-0401.svg',
      list: [
        {
          path: '',
          title: 'Calendar 日历',
        },
        {
          path: '',
          title: 'Cascader 级联选择',
        },
        {
          path: '',
          title: 'Checkbox 复选框',
        },
        {
          path: '',
          title: 'DatetimePicker 时间选择',
        },
        {
          path: '',
          title: 'Field 输入框',
        },
        {
          path: '',
          title: 'Picker 选择器',
        },
        {
          path: '',
          title: 'Radio 单选框',
        },
        {
          path: '',
          title: 'Rate 评分',
        },
        {
          path: '',
          title: 'Search 搜索',
        },
        {
          path: '',
          title: 'Slider 滑块',
        },
        {
          path: '',
          title: 'Stepper 步进器',
        },
        {
          path: '',
          title: 'Switch 开关',
        },
        {
          path: '',
          title: 'Uploader 文件上传',
        },
      ],
    },
    {
      groupName: '反馈组件',
      icon: 'passed',
      list: [
        {
          path: '',
          title: 'ActionSheet 动作面板',
        },
        {
          path: '',
          title: 'Dialog 弹出框',
        },
        {
          path: '',
          title: 'DropdownMenu 下拉菜单',
        },
        {
          path: 'loading',
          title: 'Loading 加载',
        },
        {
          path: '',
          title: 'Notify 消息通知',
        },
        {
          path: 'overlay',
          title: 'Overlay 遮罩层',
        },
        {
          path: '',
          title: 'ShareSheet 分享面板',
        },
        {
          path: '',
          title: 'SwipeCell 滑动单元格',
        },
        {
          path: '',
          title: 'Toast 轻提示',
        },
      ],
    },
    {
      groupName: '展示组件',
      icon: 'photo-o',
      list: [
        {
          path: '',
          title: 'Circle 进度条',
        },
        {
          path: '',
          title: 'Collapse 折叠面板',
        },
        {
          path: '',
          title: 'CountDown 倒计时',
        },
        {
          path: '',
          title: 'Divider 分割线',
        },
        {
          path: '',
          title: 'Empty 空状态',
        },
        {
          path: '',
          title: 'NoticeBar 通知栏',
        },
        {
          path: '',
          title: 'Panel 面板',
        },
        {
          path: '',
          title: 'Progress 进度条',
        },
        {
          path: '',
          title: 'Skeleton 骨架屏',
        },
        {
          path: '',
          title: 'Steps 步骤条',
        },
        {
          path: '',
          title: 'Sticky 粘性布局',
        },
        {
          path: 'tag',
          title: 'Tag 标记',
        },
        {
          path: '',
          title: 'TreeSelect 分类选择',
        },
      ],
    },
    {
      groupName: '导航组件',
      icon: 'https://img.yzcdn.cn/vant/nav-0401.svg',
      list: [
        {
          path: '',
          title: 'Grid 宫格',
        },
        {
          path: '',
          title: 'IndexBar 索引栏',
        },
        {
          path: '',
          title: 'Sidebar 侧边导航',
        },
        {
          path: '',
          title: 'NavBar 导航栏',
        },
        {
          path: '',
          title: 'Tab 标签页',
        },
        {
          path: '',
          title: 'Tabbar 标签栏',
        },
      ],
    },
    {
      groupName: '业务组件',
      icon: 'ellipsis',
      list: [
        {
          path: '',
          title: 'Area 省市区选择',
        },
        {
          path: '',
          title: 'Card 商品卡片',
        },
        {
          path: '',
          title: 'SubmitBar 提交订单栏',
        },
        {
          path: '',
          title: 'GoodsAction 商品导航',
        },
      ],
    },
  ])
</script>

<style lang="scss" scoped>
  .demo-home {
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    padding: 92rpx 40rpx 40rpx;
    background: #fff;
    &__title,
    &__desc {
      padding-left: 32rpx;
      font-weight: normal;
      line-height: 1;
      user-select: none;
    }
    &__title {
      margin: 0 0 32rpx;
      font-size: 64rpx;
    }
    &__desc {
      margin: 0 0 80rpx;
      color: rgba(69, 90, 100, 0.6);
      font-size: 28rpx;
    }
    &__image,
    &__text {
      display: inline-block;
      vertical-align: middle;
    }
    &__image {
      width: 64rpx;
      height: 64rpx;
    }
    &__text {
      margin-left: 32rpx;
      font-weight: 500;
    }
    &--small {
      font-size: 48rpx;
    }
  }
</style>
