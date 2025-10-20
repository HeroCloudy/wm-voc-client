<!--
 @name: input.vue
 @description: 段落组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/19 21:53
-->
<template>
  <div class="voc-paragraph">
    <div :class="[isCenter ? 'text-center' : 'text-left', 'whitespace-pre-wrap!']">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
interface ParagraphProp {
  text?: string
  isCenter?: boolean
}
defineProps<ParagraphProp>()
</script>
<style scoped lang="scss">
.voc-paragraph {
  white-space: pre-wrap !important;
}
</style>
