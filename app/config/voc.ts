import Info from '~/components/voc/info.vue'
import Title from '~/components/voc/title.vue'
import Paragraph from '~/components/voc/paragraph.vue'
import Input from '~/components/voc/input.vue'
import Textarea from '~/components/voc/textarea.vue'
import Radio from '~/components/voc/radio.vue'
import Checkbox from '~/components/voc/checkbox.vue'

export const componentTypeMap: Record<string, Component> = {
  info: Info,
  title: Title,
  paragraph: Paragraph,
  input: Input,
  textarea: Textarea,
  radio: Radio,
  checkbox: Checkbox,
}

export const isUserInput = (type: string) => {
  return ['input', 'textarea', 'radio', 'checkbox'].includes(type)
}

export const getComponent = (type: string) => {
  return componentTypeMap[type]
}
