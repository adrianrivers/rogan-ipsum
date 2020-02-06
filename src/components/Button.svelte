<script>
export let buttonText;
</script>

<main>
	<button type=submit>
		{buttonText}
	</button>
</main>

<style>
button {
  margin-bottom: 8px;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  transition: background-color 0.1s, box-shadow 0.1s, color 0.1s, transform 0.1s;
  background-color: #000;
  border-radius: 2px;
  border: 2px solid #000;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  padding: 14px 30px;
  text-decoration: none;
}
</style>