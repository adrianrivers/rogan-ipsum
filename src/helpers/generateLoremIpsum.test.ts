import { generateLoremIpsum } from './generateLoremIpsum'

describe('Helpers -- generateLoremIpsum', () => {
  test('should return forma', () => {
    const result = generateLoremIpsum({
      num: 3,
      type: 'Paragraphs',
      vocab: ['test'],
    })

    console.log(result)

    expect(true)
  })

  // test('should return ', () => {
  //   const result = generateLoremIpsum({
  //     num: 5,
  //     type: 'Sentences',
  //     vocab: ['a', 'b', 'c'],
  //   })

  //   expect(true)
  // })
})
