interface GenerateLoremIpsum {
  numParagraphs: number
  numSentences: number
  vocab: string[]
}

const formatSentence = (sentence: string[]): string => {
  const firstWord = sentence[0]
  const capitalisedFirstWord = firstWord[0].toUpperCase() + firstWord.slice(1)

  return `${[capitalisedFirstWord, ...sentence.slice(1)].join(' ')}.`
}

const generateSentences = (vocab: string[]): string => {
  const senctenceSlots = Math.floor(Math.random() * 10) + 1
  const sentence = []
  let index = 0

  while (index < senctenceSlots) {
    const randomVocabArrPos = Math.floor(Math.random() * vocab.length)
    sentence.push(vocab[randomVocabArrPos])
    index++
  }

  return formatSentence(sentence)
}

const generateParagraphs = (numSentences: number, vocab: string[]) => {
  const paragraph = []
  let index = 0

  while (index < numSentences) {
    paragraph.push(generateSentences(vocab))
    index++
  }

  return paragraph.join(' ')
}

export const generateLoremIpsum = ({
  numParagraphs,
  numSentences,
  vocab,
}: GenerateLoremIpsum): string[] => {
  const arr = Array.from(new Array(numParagraphs).fill([]))
  const paragraphs = arr.map(() => generateParagraphs(numSentences, vocab))

  return paragraphs
}
