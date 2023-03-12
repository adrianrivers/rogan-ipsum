<template>
  <button class="group relative flex h-max grow-0 bg-black">
    <span
      class="inline-block h-full w-full border-2 border-black p-2.5 transition-all duration-75 ease-linear group-hover:translate-y-[-2px] group-hover:translate-x-[-2px]"
      :class="{
        'bg-yellow': variant === 'yellow',
        'bg-congo-pink': variant === 'pink',
      }"
    >
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
export interface ButtonProps {
  variant?: 'yellow' | 'pink'
}

withDefaults(defineProps<ButtonProps>(), {
  variant: 'yellow',
})
</script>
