<script>
	import Select from './components/Select.svelte';
	import Button from './components/Button.svelte';

	import { generateLoremIpsum } from './utils';

	let loremIpsum = {
		numParagraphs: 1,
		numSentences: 5,
	};

	let text = generateLoremIpsum(1, 5)

	function handleSubmit() {
		const { numParagraphs, numSentences } = loremIpsum;

		text = generateLoremIpsum(numParagraphs, numSentences)
	}
</script>

<main>
	<div class="content">

		<div class="item">
			<form on:submit|preventDefault={handleSubmit}>
				<Select 
					selectTitle="Number of paragraphs" 
					bind:value={loremIpsum.numParagraphs}
				/>
				<Select 
					selectTitle="Number of sentences" 
					bind:value={loremIpsum.numSentences}
				/>
				
				<Button buttonText="Try DMT!"/>
			</form>
		</div>


		<div class="item">
			<div class="text-area">
			{#each text as textItem}
				<p class="paragraph">{textItem}</p>
			{/each}
			</div>
		</div>

	</div>
</main>

<style>
.content {
	display: grid;
	grid-template-columns: 1, 1fr;
	grid-template-rows: 2, 1fr;
	grid-gap: 3em;
	grid-template-areas: 'slot1' 'slot2';
	padding: 2em;
}

@media (min-width: 640px) {
	.content {
		grid-template-areas: 'slot1 slot2';
	}
}

.paragraph:first-child {
	margin-top: 0;
}
</style>
