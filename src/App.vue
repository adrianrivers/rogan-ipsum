<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { generateLoremIpsum } from '@/helpers/generateLoremIpsum'
import { VOCAB } from '@/constants'

import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'
import ButtonCopy from '@/components/ButtonCopy.vue'
import Input from '@/components/Input.vue'
import Select from '@/components/Select.vue'
import Toast from '@/components/Toast.vue'

const generatedLoremIpsumArr = ref<string[]>([])

const num = ref('1')
const type = ref<'Paragraphs' | 'Sentences'>('Paragraphs')
const generatedTextRef = ref<HTMLDivElement>()
const toastRef = ref<InstanceType<typeof Toast>>()

const handleGenerate = () => {
  const generated = generateLoremIpsum({
    num: parseInt(num.value),
    type: type.value,
    vocab: VOCAB,
  })

  generatedLoremIpsumArr.value = generated
}

const handleCopy = () => {
  const text = generatedTextRef.value?.innerHTML

  if (!text) return

  const plainText = text.replace(/(<([^>]+)>)/gi, '')

  navigator.clipboard
    .writeText(plainText)
    .then(() => {
      return toastRef.value!.toggle()
    })
    .catch((error) => {
      console.error(error)
    })
}

onMounted(() => {
  handleGenerate()
})
</script>

<template>
  <Header />
  <main class="m-auto h-full min-h-screen max-w-6xl p-3 font-mono md:p-12">
    <div class="grid grid-cols-12 gap-6 rounded-sm border-2 border-black p-6">
      <div class="col-span-2 md:col-span-1 md:col-start-1">
        <Input v-model="num" />
      </div>
      <div class="col-span-10 md:col-span-5">
        <div class="flex gap-6">
          <Select v-model="type" :options="['Paragraphs', 'Sentences']" />
          <Button @click="handleGenerate">Generate</Button>
        </div>
      </div>
      <div
        class="order-first col-span-12 col-start-1 md:-order-none md:col-span-2 md:col-start-11"
      >
        <ButtonCopy @click="handleCopy" class="w-full" text="Copy" />
      </div>
    </div>

    <div class="grid grid-cols-12 gap-6 border-x-2 border-b-2 border-black">
      <div class="col-span-full lg:col-span-8">
        <div class="bg-white p-6" ref="generatedTextRef">
          <p
            v-for="(paragraph, i) in generatedLoremIpsumArr"
            :key="i"
            :class="{
              inline: type === 'Sentences',
              'mt-6': i > 0,
            }"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>

    <Toast ref="toastRef">
      <p class="text-2xl">Copied to clipboard!</p>
    </Toast>
  </main>
</template>
