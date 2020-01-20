<script>
	import { ROGANISMS } from './words.js';

	const formatSentence = wordArr => {
		const sentence = `${wordArr.join(' ')}. `;
		
		return `${sentence[0].toUpperCase()}${sentence.slice(1)}`;
	}

	function generateWords(numWords) {
		let wordArr = [];

		for (let i = 0; i < numWords; i++) {
			const wordNum = Math.floor(Math.random() * ROGANISMS.length);

			wordArr.push(`${ROGANISMS[wordNum]}`);
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

	const state = {
		numParagraphs: 1,
		numSentences: 5,
		text: generateLoremIpsum(1, 3)
	};

</script>

<main>
	{#each state.text as item}
		<p>{item}</p>
	{/each}
</main>

<style>
main {
	text-align: center;
	padding: 1em;
	max-width: 240px;
	margin: 0 auto;
}

h1 {
	color: #ff3e00;
	text-transform: uppercase;
	font-size: 4em;
	font-weight: 100;
}

@media (min-width: 640px) {
	main {
		max-width: none;
	}
}
</style>