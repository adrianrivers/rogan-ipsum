<script setup lang="ts">
import { reactive, ref } from 'vue'
import { generateLoremIpsum } from '@/helpers/generateLoremIpsum'
import { VOCAB } from '@/constants'

import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'
import Select from '@/components/Select.vue'

const userInput = reactive({
  numParagraphs: 1,
  numSentences: 1,
})

const generatedLoremIpsumArr = ref<string[]>([])

const handleClick = () => {
  const { numParagraphs, numSentences } = userInput
  generatedLoremIpsumArr.value = generateLoremIpsum({
    numParagraphs,
    numSentences,
    vocab: VOCAB,
  })
}
</script>

<template>
  <Header></Header>
  <main class="m-auto max-w-6xl px-6">
    <div class="grid grid-cols-4 gap-6 md:grid-cols-12">
      <div class="col-span-full md:col-span-3">
        <div class="mb-3">
          <label for="paragraphs" class="block">Number of paragraphs</label>
          <Select name="numParagraphs" v-model="userInput.numParagraphs" />
        </div>
        <div class="mb-3">
          <label for="paragraphs" class="block">Number of sentences</label>
          <Select name="numSentences" v-model="userInput.numSentences" />
        </div>
        <div class="mt-3">
          <Button @click="handleClick"> Try DMT! </Button>
        </div>
      </div>
      <div class="col-span-full md:col-span-9">
        <p v-for="(paragraph, index) in generatedLoremIpsumArr" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </main>
</template>
