import { generateLoremIpsum } from './generateLoremIpsum'

describe('Helpers -- Generate Lorem Ipsum', () => {
  test('generateLoremIpsum', () => {
    const result = generateLoremIpsum({
      numParagraphs: 2,
      numSentences: 1,
      vocab: ['test1', 'test2', 'test3'],
    })

    expect(result[0].at(-1)).toBe('.')
    expect(result[1].at(-1)).toBe('.')
    expect(true).toBe(true)
  })
})
