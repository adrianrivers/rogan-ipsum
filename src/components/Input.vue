<template>
  <input
    @input="handleInput"
    class="block w-full border-2 border-black p-2.5"
    :value="modelValue"
  />
</template>

<script setup lang="ts">
export interface InputProps {
  modelValue: string
}

export interface InputEmit {
  (e: 'update:modelValue', value: string): void
}

defineProps<InputProps>()
const emit = defineEmits<InputEmit>()

const handleInput = (e: Event) => {
  const { value = '' } = e.target as HTMLSelectElement
  emit('update:modelValue', value)
}
</script>
