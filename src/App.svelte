<script>
	import { ROGANISMS } from './words.js';
	import Select from './components/Select.svelte';

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

	let loremIpsum = {
		numParagraphs: 1,
		numSentences: 5,
	};

	let text = generateLoremIpsum(1, 5)

	function handleSubmit() {
		const { numParagraphs, numSentences } = loremIpsum;

		return text = generateLoremIpsum(numParagraphs, numSentences)
	}
</script>

<main>
	<div>
		<div class="form">

		<form on:submit|preventDefault={handleSubmit}>
			<Select 
				selectTitle="Number of paragraphs" 
				selectName="numParagraphs"
				bind:value={loremIpsum.numParagraphs}
			/>
			<Select 
				selectTitle="Number of sentences" 
				selectName="numSentences"
				bind:value={loremIpsum.numSentences}
			/>
			<div>
				<button type=submit>
					Give me elk meat
				</button>
			</div>			
		</form>

		</div>
		{#each text as textItem}
			<p>{textItem}</p>
		{/each}
	</div>
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