<script>
	import { onMount } from 'svelte';

	let todo = null;

	onMount(async () => {
		todo = await fetch('.../todos').then((res) => res.json());
	});
</script>
