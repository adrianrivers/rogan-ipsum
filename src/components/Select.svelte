<script>
  export let selectTitle;
	export let value;
</script>

<main>
	<legend>{selectTitle}</legend>
	  <select bind:value>
		{#each Array(5) as _, index}
			<option value={index + 1}>
				{index + 1}
			</option>
		{/each}
	</select>
</main>

<style>
	select {
		width: 100%;
		margin-top: 1em;
		margin-bottom: 2em;
	}
</style>