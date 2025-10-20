<!--
 @name: [:id].vue
 @description: 问卷详情
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/19 21:28
-->
<template>
  <div class="voc-detail">
    <div>{{ id }}</div>
    <el-button type="primary">Test Button</el-button>

    <voc-info title="问卷标题" description="问卷描述..." />

    <voc-title text="个人信息调研" :is-center="false" :level="1" />

    <voc-input title="你的姓名" placeholder="请输入姓名..." />

    <voc-radio title="单选标题" :is-vertical="false" :options="['选项1', '选项2', '选项3']" />

    <voc-paragraph text="一行段落1\n一行段落2" :is-center="false" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const id = route.params.id
</script>
<style scoped lang="scss"></style>
