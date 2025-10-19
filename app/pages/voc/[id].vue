<!--
 @name: [:id].vue
 @description: 问卷详情
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/19 21:28
-->
<template>
  <div class="voc-detail">
    <div>voc detail</div>
    <div>{{ id }}</div>
    <el-button type="primary">Test Button</el-button>

    <voc-input title="你的姓名" placeholder="请输入姓名..." />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const id = route.params.id
</script>
<style scoped lang="scss"></style>
