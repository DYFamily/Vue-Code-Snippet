# defer

利用关键帧 `requestAnimationFrame` + `v-if` 优化白屏，使其可以逐步渲染

> 当页面中有很多组件时（例如一个列表页），使用该 `hook` 可以实现一帧渲染一个组件，而不是等待所有组件加载完之后才渲染，大大提高用户的体验，虽然总的渲染时间一样，但给用户带来了良好的体验

## api

- `maxFrameCount`: 最大检测的帧数，超过该数值则不会再监听
- `showInFrameCount`: 显示的帧数，实际帧数大于或等于该数值时，才会返回 `ture`

## 使用 demo：

```vue
<template>
  <div v-for="(item, i) in data">
    <template v-if="defer(i)"> {{ item }}</template>
  </div>
</template>

<script setup lang="ts">
import { useDefer } from "./useDefer"
const defer = useDefer()
</script>
```
