<!--
 @name: input.vue
 @description: 单选框组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/19 21:53
-->
<template>
  <div class="voc-radio">
    <div class="title">{{ title }}</div>
    <el-radio-group v-model="value">
      <el-space :direction="isVertical ? 'vertical' : 'horizontal'" alignment="stretch">
        <el-radio v-for="item in options" :key="item" :value="item" :label="item" />
      </el-space>
    </el-radio-group>
  </div>
</template>

<script setup lang="ts">
interface RadioProp {
  title?: string
  isVertical?: boolean
  options?: string[]
}
defineProps<RadioProp>()

const value = defineModel()
</script>
<style scoped lang="scss">
.voc-radio {
  @apply my-2;
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
