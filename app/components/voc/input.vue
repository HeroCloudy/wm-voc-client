<!--
 @name: input.vue
 @description: 输入框组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/19 21:53
-->
<template>
  <div class="voc-input">
    <div class="title">{{ title }}</div>
    <div>
      <el-input v-model="value" :placeholder="placeholder" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  placeholder?: string
}>()

const value = defineModel()
</script>
<style scoped lang="scss">
.voc-input {
  @apply w-full my-2;
  .title {
    @apply my-2 text-16px font-bold;
  }
}
</style>
