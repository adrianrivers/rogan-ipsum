
	import { WORD_PHRASE_LIST } from './words.js';
  
  const formatSentence = wordArr => {
		const sentence = `${wordArr.join(' ')}. `;
		
		return `${sentence[0].toUpperCase()}${sentence.slice(1)}`;
	}

	function generateWords(numWords) {
		let wordArr = [];

		for (let i = 0; i < numWords; i++) {
			const wordNum = Math.floor(Math.random() * WORD_PHRASE_LIST.length);

			wordArr.push(`${WORD_PHRASE_LIST[wordNum]}`);
		}

		return formatSentence(wordArr);
	}

	function generateParagraph(numSentences) {
		let sentence = '';

		for (let i = 0; i < numSentences; i++) {
			const numWords = Math.floor(Math.random() * 6 + 5);
	
			sentence += generateWords(numWords);
		}

		return sentence;
	};

	function generateLoremIpsum(numParagraphs, numSentences) {
		let text = [];

		for (let i = 0; i < numParagraphs; i++) {
			let paragraph = generateParagraph(numSentences);
	
			text.push(paragraph);
		}

		return text;
  };
  
  export { generateLoremIpsum };
