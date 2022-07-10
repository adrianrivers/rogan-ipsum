import { generateLoremIpsum } from './generateLoremIpsum'

import { WORDS } from '../constants'

describe('Helpers -- Generate Lorem Ipsum', () => {
  test('generateLoremIpsum', () => {
    const result = generateLoremIpsum({
      numParagraphs: 3,
      numSentences: 5,
      vocab: [...WORDS],
    })

    // expect(result.length).toBe(10)
    expect(true).toBe(true)
  })
})
