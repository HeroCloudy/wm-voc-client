<!--
 @name: [:id].vue
 @description: 问卷详情
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/19 21:28
-->
<template>
  <div class="voc-detail">
    <!--    <div>{{ id }}</div>-->
    <!--    <el-button type="primary">Test Button</el-button>-->
    <el-form :model="form" label-position="top" size="large">
      <div v-for="item in componentList" :key="item.fe_id">
        <el-form-item v-if="isUserInput(item.type)" :prop="item.fe_id">
          <component
            :is="getComponent(item.type)"
            v-bind="item.props || {}"
            v-model="form[item.fe_id]"
          />
        </el-form-item>
        <div v-else>
          <component :is="getComponent(item.type)" v-bind="item.props || {}" />
        </div>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { isUserInput, getComponent } from '~/config/voc'

const route = useRoute()
const id = route.params.id

const form = ref<Record<string, any>>({})

const componentList = ref<Record<string, any>>([])

const initDefaultValue = () => {
  componentList.value.forEach((item: any) => {
    const { fe_id, props = {} } = item
    if (props.value) {
      form.value[fe_id] = props.value
    }
  })
}

onMounted(() => {
  setTimeout(() => {
    componentList.value = [
      // Info
      {
        fe_id: 'c1', // 注意，由于统计页，左侧和中间需要数据完全一直，所以要写死 fe_id ，不能用 Random.id()
        type: 'info', // 组件类型，不能重复，前后端统一好
        title: '问卷信息',
        isHidden: false,
        isLocked: false,
        props: { title: '问卷标题', description: '问卷描述...' },
      },
      // Title
      {
        fe_id: 'c2',
        type: 'title', // 组件类型，不能重复，前后端统一好
        title: '标题',
        isHidden: false,
        isLocked: false,
        props: { text: '个人信息调研', level: 1, isCenter: false },
      },
      // Input
      {
        fe_id: 'c3',
        type: 'input',
        title: '输入框1',
        isHidden: false,
        isLocked: false,
        props: { title: '你的姓名', placeholder: '请输入姓名...' },
      },
      // Input
      {
        fe_id: 'c4',
        type: 'input',
        title: '输入框2',
        isHidden: false,
        isLocked: false,
        props: { title: '你的电话', placeholder: '请输入电话...' },
      },
      // Textarea
      {
        fe_id: 'c5',
        type: 'textarea',
        title: '多行输入',
        isHidden: false,
        isLocked: false,
        props: { title: '你的爱好', placeholder: '请输入...' },
      },
      // Paragraph
      {
        fe_id: 'c6',
        type: 'paragraph',
        title: '段落',
        isHidden: false,
        isLocked: false,
        props: { text: '一行段落1\n一行段落2', isCenter: false },
      },
      // Radio
      {
        fe_id: 'c7',
        type: 'radio',
        title: '单选',
        isHidden: false,
        isLocked: false,
        props: {
          title: '单选标题',
          isVertical: false,
          options: ['选项1', '选项2', '选项3'],
          value: '选项2',
        },
      },
      // Checkbox
      {
        fe_id: 'c8',
        type: 'checkbox',
        title: '多选',
        isHidden: false,
        isLocked: false,
        props: {
          title: '多选标题',
          isVertical: false,
          options: ['选项1', '选项2', '选项3'],
          value: ['选项2', '选项3'],
        },
      },
    ]

    initDefaultValue()
  }, 2000)
})
</script>
<style scoped lang="scss">
.voc-detail {
  @apply max-w-800px mx-auto;
  :deep(.el-form-item__content) {
    @apply w-full;
  }
}
</style>
