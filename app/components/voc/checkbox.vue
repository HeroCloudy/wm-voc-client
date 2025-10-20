<!--
 @name: input.vue
 @description: 复选框组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/19 21:53
-->
<template>
  <div class="voc-checkbox">
    <div class="title">{{ title }}</div>
    <el-checkbox-group v-model="value">
      <el-space :direction="isVertical ? 'vertical' : 'horizontal'" alignment="stretch">
        <el-checkbox v-for="item in options" :key="item" :value="item" :label="item" />
      </el-space>
    </el-checkbox-group>
  </div>
</template>

<script setup lang="ts">
interface CheckboxProp {
  title?: string
  isVertical?: boolean
  options?: string[]
}
defineProps<CheckboxProp>()

const value = defineModel()
</script>
<style scoped lang="scss">
.voc-checkbox {
  @apply w-full my-2;
  .title {
    @apply my-2 text-16px font-bold;
  }

  .el-space--horizontal {
    @apply flex-wrap;
  }
  :deep(.el-space__item) {
    @apply mr-12px;
  }
}
</style>
