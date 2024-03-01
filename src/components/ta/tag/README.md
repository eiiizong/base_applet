# Tag 标签

### 介绍

用于标记关键词和概括主要内容。

### 引入

```js
import TaTag from '@/components/ta/tag/index.vue'
```

## 代码演示

### 基础用法

通过 `type` 属性控制标签颜色，默认为灰色。

```vue
<ta-tag type="primary">标签</ta-tag>
<ta-tag type="success">标签</ta-tag>
<ta-tag type="danger">标签</ta-tag>
<ta-tag type="warning">标签</ta-tag>
```

### 空心样式

设置 `plain` 属性设置为空心样式。

```vue
<ta-tag plain type="primary">标签</ta-tag>
<ta-tag plain type="success">标签</ta-tag>
<ta-tag plain type="danger">标签</ta-tag>
<ta-tag plain type="warning">标签</ta-tag>
```

### 圆角样式

通过 `round` 设置为圆角样式。

```vue
<ta-tag round type="primary">标签</ta-tag>
<ta-tag round type="success">标签</ta-tag>
<ta-tag round type="danger">标签</ta-tag>
<ta-tag round type="warning">标签</ta-tag>
```

### 标记样式

通过 `mark` 设置为标记样式(半圆角)。

```vue
<ta-tag mark type="primary">标签</ta-tag>
<ta-tag mark type="success">标签</ta-tag>
<ta-tag mark type="danger">标签</ta-tag>
<ta-tag mark type="warning">标签</ta-tag>
```

### 自定义颜色

```vue
<ta-tag color="#f2826a">标签</ta-tag>
<ta-tag color="#7232dd">标签</ta-tag>
<ta-tag color="#7232dd" plain>标签</ta-tag>
<ta-tag color="#ffe1e1" text-color="#ad0000">标签</ta-tag>
```

### 标签大小

```vue
<ta-tag type="danger">标签</ta-tag>
<ta-tag type="danger" size="medium">标签</ta-tag>
<ta-tag type="danger" size="large">标签</ta-tag>
```

### 可关闭标签

添加 `closeable` 属性表示标签是可关闭的，关闭标签时会触发 `close` 事件，在 `close` 事件中可以执行隐藏标签的逻辑。

```vue
<ta-tag v-if="show.primary" closeable size="medium" type="primary" id="primary" @close="show.primary = false">
  标签
</ta-tag>
<ta-tag v-if="show.success" closeable size="medium" type="success" id="success" @close="show.success = false">
  标签
</ta-tag>
```

```vue
<script setup lang="ts">
  const show = ref({
    success: true,
    primary: true,
  })
</script>
```

## API

### Props

| 参数         | 说明                                                         | 类型      | 默认值    |
| ------------ | ------------------------------------------------------------ | --------- | --------- |
| type         | 类型，可选值为 `primary` `success` `danger` `warning` `default` | _string_  | `default` |
| size         | 大小, 可选值为 `large` `medium` `default`                    | _string_  | `default` |
| color        | 标签颜色                                                     | _string_  | -         |
| plain        | 是否为空心样式                                               | _boolean_ | `false`   |
| round        | 是否为圆角样式                                               | _boolean_ | `false`   |
| mark         | 是否为标记样式                                               | _boolean_ | `false`   |
| text-color   | 文本颜色，优先级高于 `color` 属性                            | _string_  | -         |
| closeable    | 是否为可关闭标签                                             | _boolean_ | `false`   |
| custom-class | 自定义根节点类名                                             | _string_  | -         |
| custom-style | 自定义根节点样式                                             | _string_  | -         |

### Slot

| 名称 | 说明                |
| ---- | ------------------- |
| -    | 自定义 Tag 显示内容 |

### Events

| 事件名 | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| close  | 关闭标签时触发 | -        |
