# Loading 加载

### 介绍

加载图标，用于表示加载中的过渡状态。

> 文档创建人: Zengxm
> 文档创建时间: 2024-03-05 15:26:04
> 文档上次编辑人: Zengxm
> 文档上次编辑时间: 2024-03-05 15:26:04

### 引入

```js
import TaLoading from '@/components/ta/loading/index.vue'
```

## 代码演示

### 加载类型

```html
<ta-loading />
<ta-loading type="spinner" />
```

### 自定义颜色

```html
<ta-loading color="#1989fa" />
<ta-loading type="spinner" color="#1989fa" />
```

### 加载文案

```html
<ta-loading size="24px">加载中...</ta-loading>
```

### 垂直排列

```html
<ta-loading size="24px" vertical>加载中...</ta-loading>
```

## API

### Props

| 参数         | 说明                           | 类型               | 默认值     |
| ------------ | ------------------------------ | ------------------ | ---------- |
| color        | 颜色                           | _string_           | `#c9c9c9`  |
| type         | 类型，可选值为 `spinner`       | _string_           | `circular` |
| size         | 加载图标大小，默认单位为 `rpx` | _string \| number_ | `60rpx`    |
| text-size    | 文字大小，默认单位为为 `rpx`   | _string \| number_ | `28rpx`    |
| vertical     | 是否垂直排列图标和文字内容     | _boolean_          | `false`    |
| custom-class | 根节点样式类                   | _string_           | -          |
| custom-style | 根节点样式                     | _string_           | -          |

### Slots

| 名称 | 说明     |
| ---- | -------- |
| -    | 加载文案 |
