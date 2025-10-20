<!--
 @name: input.vue
 @description: 问卷信息组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/19 21:53
-->
<template>
  <div class="voc-info">
    <div class="text-32px mb-2">{{ title }}</div>
    <div class="whitespace-pre-wrap text-gray-800">{{ description }}</div>
  </div>
</template>

<script setup lang="ts">
interface InfoProp {
  title?: string
  description?: string
}
const props = defineProps<InfoProp>()
</script>
<style scoped lang="scss">
.voc-info {
  @apply w-full  text-center my-3;
}
</style>
