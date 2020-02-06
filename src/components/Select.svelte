<script>
  export let selectTitle;
	export let selectName;
	export let value;
</script>

<main>
	<legend>{selectTitle}</legend>
	  <select name={selectName} bind:value>
		{#each Array(5) as _, index}
			<option value={index + 1}>
				{index + 1}
			</option>
		{/each}
	</select>
</main>
