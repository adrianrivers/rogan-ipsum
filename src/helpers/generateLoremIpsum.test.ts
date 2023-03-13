import { generateLoremIpsum } from './generateLoremIpsum'

describe('Helpers -- generateLoremIpsum', () => {
  test('should return array of paragraphs', () => {
    const result = generateLoremIpsum({
      num: 3,
      type: 'Paragraphs',
      vocab: ['test'],
    })

    expect(result.length).toBe(3)

    result.forEach((paragraph) => {
      expect(paragraph.at(-1)).toBe(' ')
      expect(paragraph.at(-2)).toBe('.')
      expect(paragraph.at(0)).toBe('T')
    })
  })

  test('should return array of sentences', () => {
    const result = generateLoremIpsum({
      num: 3,
      type: 'Sentences',
      vocab: ['test'],
    })

    console.log(result)

    expect(result.length).toBe(3)

    result.forEach((paragraph) => {
      expect(paragraph.at(-1)).toBe(' ')
      expect(paragraph.at(-2)).toBe('.')
      expect(paragraph.at(0)).toBe('T')
    })
  })
})
