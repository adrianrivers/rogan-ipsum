<template>
  <button class="group relative flex h-max grow-0 bg-black">
    <div
      class="flex h-full w-full justify-between border-2 border-black bg-congo-pink py-2.5 px-3 transition-all duration-75 ease-linear group-hover:translate-y-[-2px] group-hover:translate-x-[-2px]"
    >
      <span> Copy </span>
      <CopyIcon />
    </div>
  </button>
</template>

<script setup lang="ts">
/// <reference types="vite-svg-loader" />
import CopyIcon from '@/assets/copy.svg?component'
</script>
