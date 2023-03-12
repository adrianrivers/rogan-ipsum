<template>
  <div class="border-b-2 border-black bg-water-blue">
    <nav class="mx-auto max-w-6xl p-3 md:px-12">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl">Rogan Ipsum</h1>
        </div>
        <Button @click="handleClick">
          <GitHubIcon />
        </Button>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
/// <reference types="vite-svg-loader" />
import GitHubIcon from '@/assets/github.svg?component'
import Button from '@/components/Button.vue'

const handleClick = () =>
  window.open('https://github.com/adrianrivers/rogan-ipsum', '_blank')
</script>
