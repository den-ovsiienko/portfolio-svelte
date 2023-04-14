<script>
	import Header from './Header.svelte';
	import '../app.css';
	let totalHeight = 0;
	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<div class="app">
	<Header />
	<div
		class="fixed top-12 left-0 z-50 bg-black h-1 transition"
		style:width={`${(scrollY / totalHeight) * 100}%`}
	/>

	<main bind:clientHeight={totalHeight}>
		<slot />
	</main>

	<!-- <footer>
		<p>Footer is here</p>
	</footer> -->
</div>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
