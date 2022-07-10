const formatSentence = (sentence: string[]) => {
  const firstWord = sentence[0]
  const capitalisedFirstWord = firstWord[0].toUpperCase() + firstWord.slice(1)

  return [capitalisedFirstWord, ...sentence.slice(1)].join(' ')
}

function generateSentences(vocab: string[]) {
  const senctenceSlots = Math.floor(Math.random() * 10) + 1
  const sentence = []
  let index = 0

  while (index < senctenceSlots) {
    const randomVocabArrPos = Math.floor(Math.random() * vocab.length)
    sentence.push(vocab.at(randomVocabArrPos) ?? '')
    index++
  }

  return formatSentence(sentence)
}

function generateParagraphs(numSentences: number, vocab: string[]) {
  const paragraph = []
  let index = 0

  while (index < numSentences) {
    paragraph.push(generateSentences(vocab))
    index++
  }

  return paragraph.join('. ')
}

export function generateLoremIpsum({
  numParagraphs,
  numSentences,
  vocab,
}: {
  numParagraphs: number
  numSentences: number
  vocab: string[]
}): string[] {
  const arr = Array.from(new Array(numParagraphs).fill([]))
  const paragraphs = arr.map(() => generateParagraphs(numSentences, vocab))

  console.log(paragraphs)
  return paragraphs
}
