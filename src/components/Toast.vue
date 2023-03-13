<template>
  <Transition
    enter-from-class="translate-y-40"
    enter-active-class="transition-all"
    enter-to-class="translate-y-0"
    leave-from-class="translate-y-0"
    leave-active-class="transition-all"
    leave-to-class="translate-y-40"
  >
    <div class="fixed left-0 bottom-0 w-full" v-if="show">
      <div
        class="mx-auto mt-2 w-fit rounded-sm border-2 border-black bg-blue-magenta p-6 text-center"
        :class="{
          '-translate-y-7': show,
        }"
      >
        <slot />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

export interface ToastProps {
  timeout?: number
}

export interface ToastExpose {
  toggle: () => void
}

const props = withDefaults(defineProps<ToastProps>(), {
  timeout: 3000,
})

const show = ref(false)
const timeoutHandle = ref<null | ReturnType<typeof setTimeout>>(null)

const resetTimeout = () => {
  if (timeoutHandle.value) clearTimeout(timeoutHandle.value)
  timeoutHandle.value = setTimeout(() => {
    show.value = false
  }, props.timeout)
}

const toggle = () => {
  show.value = true
  resetTimeout()
}

defineExpose<ToastExpose>({
  toggle,
})
</script>
