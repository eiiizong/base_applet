# Overlay 遮罩层

### 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

> 文档创建人: Zengxm
> 文档创建时间: 2024-03-01 15:26:04
> 文档上次编辑人: Zengxm
> 文档上次编辑时间: 2024-03-01 15:26:04

### 引入

```js
import TaOverlay from '@/components/ta/overlay/index.vue'
```

## 代码演示

### 基础用法

```html
<ta-button type="primary" @click="onClickShow">显示遮罩层</van-button>
<ta-overlay :show="show" @click="onClickHide" />
```

```vue
<script setup lang="ts">
  const show = ref(false)

  const onClickShow = () => {
    show.value = true
  }

  const onClickHide = () => {
    show.value = false
  }
</script>
```

### 嵌入内容

通过默认插槽可以在遮罩层上嵌入任意内容。

```html
<ta-button type="primary" @click="onClickShow">嵌入内容</ta-button>
<ta-overlay :show="show" @click="onClickHide">
  <view class="wrapper">
    <view class="block" @click.stop="noop" />
  </view>
</ta-overlay>
```

```vue
<script setup lang="ts">
  const show = ref(false)

  const onClickShow = () => {
    show.value = true
  }

  const onClickHide = () => {
    show.value = false
  }

  const noop = () => {
    //
  }
</script>
```

```css
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 240rpx;
  height: 240rpx;
  background-color: #fff;
}
```

### Props

| 参数         | 说明                                                                       | 类型                                         | 默认值  |
| ------------ | -------------------------------------------------------------------------- | -------------------------------------------- | ------- |
| show         | 是否展示遮罩层                                                             | _boolean_                                    | `false` |
| z-index      | z-index 层级                                                               | _string \| number_                           | `1`     |
| duration     | 动画时长，单位毫秒                                                         | _number \| { enter: number, leave: number }_ | `300`   |
| custom-class | 自定义类名                                                                 | _string_                                     | -       |
| custom-style | 自定义样式                                                                 | _string_                                     | -       |
| lock-scroll  | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动                           | _boolean_                                    | `true`  |
| root-portal  | 是否从页面中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= `2.25.2 ` | _boolean_                                    | `false` |

### Events

| 事件名 | 说明       | 回调参数 |
| ------ | ---------- | -------- |
| click  | 点击时触发 | -        |

### Slots

| 名称 | 说明                               |
| ---- | ---------------------------------- |
| -    | 默认插槽，用于在遮罩层上方嵌入内容 |
