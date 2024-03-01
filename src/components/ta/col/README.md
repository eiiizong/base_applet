# Layout 布局

### 介绍

Layout 提供了`ta-row`和`ta-col`两个组件来进行行列布局。

> 文档创建人: Zengxm
> 文档创建时间: 2024-03-01 15:26:04
> 文档上次编辑人: Zengxm
> 文档上次编辑时间: 2024-03-01 15:26:04

### 引入

```js
import TaCol from '@/components/ta/col/index.vue'
import TaRow from '@/components/ta/row/index.vue'
```

## 代码演示

### 基本用法

Layout 组件提供了`24列栅格`，通过在`Col`上添加`span`属性设置列所占的宽度百分比。此外，添加`offset`属性可以设置列的偏移宽度，计算方式与 span 相同。

```vue
<ta-row>
  <ta-col span="8">span: 8</ta-col>
  <ta-col span="8">span: 8</ta-col>
  <ta-col span="8">span: 8</ta-col>
</ta-row>

<ta-row>
  <ta-col span="4">span: 4</ta-col>
  <ta-col span="10" offset="4">offset: 4, span: 10</ta-col>
</ta-row>

<ta-row>
  <ta-col offset="12" span="12">offset: 12, span: 12</ta-col>
</ta-row>
```

### 设置列元素间距

通过`gutter`属性可以设置列元素之间的间距，默认间距为 0。

```vue
<ta-row gutter="20">
  <ta-col span="8">span: 8</ta-col>
  <ta-col span="8">span: 8</ta-col>
  <ta-col span="8">span: 8</ta-col>
</ta-row>
```

## API

### Row Props

| 参数   | 说明                           | 类型               | 默认值 |
| ------ | ------------------------------ | ------------------ | ------ |
| gutter | 列元素之间的间距（单位为 rpx） | _string \| number_ | -      |

### Col Props

| 参数         | 说明             | 类型               | 默认值 |
| ------------ | ---------------- | ------------------ | ------ |
| span         | 列元素宽度       | _string \| number_ | -      |
| offset       | 列元素偏移距离   | _string \| number_ | -      |
| custom-class | 自定义根节点类名 | _string_           | -      |
| custom-style | 自定义根节点样式 | _string_           | -      |
