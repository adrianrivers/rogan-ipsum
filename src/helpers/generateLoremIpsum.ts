interface GenerateLoremIpsum {
  num: number
  type: 'Paragraphs' | 'Sentences'
  vocab: string[]
}

const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const randomWord = (vocab: string[]): string => {
  const randomVocabArrPos = Math.floor(Math.random() * vocab.length)
  return vocab[randomVocabArrPos]
}

const formatSentence = (sentence: string[]): string => {
  const firstWord = sentence[0]
  const capitalisedFirstWord =
    firstWord.at(0)!.toUpperCase() + firstWord.slice(1)

  return `${[capitalisedFirstWord, ...sentence.slice(1)].join(' ')}. `
}

const generateSentences = (vocab: string[], num: number) => {
  let numWords: number
  let sentence: string[]
  const unformatted: string[][] = []

  for (let i = 0; i < num; i++) {
    sentence = []
    numWords = randomInteger(10, 25)

    for (let i = 0; i < numWords; i++) sentence.push(randomWord(vocab))

    unformatted.push(sentence)
  }

  const formatted = unformatted.map((sentence) => formatSentence(sentence))

  return formatted
}

const generateParagraphs = (vocab: string[], num: number): string[] => {
  const unformatted = []
  let numSentences: number

  for (let i = 0; i < num; i++) {
    numSentences = randomInteger(3, 8)
    unformatted.push(generateSentences(vocab, numSentences).join(''))
  }

  return unformatted
}

export const generateLoremIpsum = ({
  num,
  type,
  vocab,
}: GenerateLoremIpsum): string[] => {
  return type === 'Paragraphs'
    ? generateParagraphs(vocab, num)
    : generateSentences(vocab, num)
}
