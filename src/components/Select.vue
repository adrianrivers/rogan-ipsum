<template>
  <select
    :name="name"
    class="block w-full rounded-lg border-2 border-fuchsia-700 px-2 py-1 focus:border-orange-700"
    @change="handleChange"
  >
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
</template>

<script setup lang="ts">
export interface SelectProps {
  name: string
  modelValue: number
}

defineProps<SelectProps>()

const emit = defineEmits(['update:modelValue'])

const handleChange = (e: Event) => {
  const target = e.target as HTMLSelectElement
  emit('update:modelValue', parseInt(target.value))
}
</script>
