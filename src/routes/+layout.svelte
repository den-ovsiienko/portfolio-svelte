<script>
	import Header from './Header.svelte';
	import '../app.css';
	import Footer from './Footer.svelte';
	import { crossfade } from 'svelte/transition';
	let totalHeight = 0;
	let scrollY = 0;
	let innerHeight = 0;
</script>

<svelte:window bind:scrollY bind:innerHeight />


<div class="app">
	<Header />
	<div
		class="fixed top-12 left-0 z-50 bg-black h-1 transition"
		style:width={`${(scrollY / (totalHeight + innerHeight)) * 100}%`}
	/>

	<main bind:clientHeight={totalHeight}>
		<slot />
	</main>

	<Footer />
</div>
