<template>
  <div
    class="group relative w-full bg-water-blue text-center text-black hover:cursor-pointer"
    @click="open = !open"
  >
    <div
      role="button"
      class="relative flex w-full items-center justify-between border-2 border-black p-2.5"
    >
      <span>{{ selected }}</span>
      <svg
        viewBox="0 0 8 6"
        height="8"
        width="6"
        class="transition-all duration-75 ease-linear"
        :class="{
          '-rotate-90': !open,
        }"
      >
        <path d="M4 6 .536 0h6.928L4 6Z" fill="currentColor" />
      </svg>
    </div>

    <ul
      class="absolute left-0 top-12 z-30 inline-block w-full bg-yellow text-left"
      v-if="open"
    >
      <li v-for="(option, i) in options" :key="i">
        <a
          href="#"
          class="relative block h-full w-full border-x-2 border-b-2 border-black p-2.5 text-left text-base transition-colors duration-300 ease-in-out"
          @click.prevent="handleClick(option)"
          v-if="selected !== option"
        >
          {{ option }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

export interface SelectProps {
  options: Array<string>
  modelValue: string
}

export interface SelectEmit {
  (e: 'update:modelValue', value: string): void
}

const props = defineProps<SelectProps>()
const emit = defineEmits<SelectEmit>()

const selected = ref(props.options.at(0))
const open = ref(false)

const handleClick = (option: string) => {
  selected.value = option
  emit('update:modelValue', option)
}
</script>
