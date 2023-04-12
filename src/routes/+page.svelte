<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Button from '$lib/components/Button.svelte';
	import Wave from '$lib/components/Wave.svelte';
	import TitleText from '$lib/components/TitleText.svelte';

	const onLearnMore = () => {
		window?.scrollTo({
			top: window.innerHeight,
			behavior: 'smooth'
		});
	};
</script>

<svelte:head>
	<title>Denys Ovsiienko | Portfolio</title>
	<meta name="description" content="Denys Ovsiienko's portfolio" />
</svelte:head>

<section class="relative overflow-hidden">
	<div class="section-container mt-1/10">
		<div class="flex w-full justify-between items-center pt-4">
			<div class="flex flex-col gap-2">
				<p class="text-4xl">Hi 👋. My name is</p>
				<h1 class="text-6xl font-bold font-eukrainehead">Denys Ovsiienko</h1>
				<div class="flex items-center pt-2">
					<p class="text-4xl pr-3">and I’m a</p>
					<TitleText />
				</div>
			</div>
			<img class="hidden md:block" src="/images/avatar.svg" alt="Avatar" />
		</div>
		<div class="absolute left-0 right-0 bottom-0">
			<div class="relative w-full h-[198px]">
				<!-- <div class="bg-wave-yellow h-[198px] w-full" /> -->
				<Wave />
				<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<Button on:click={onLearnMore} animateIcon rightIcon="↘">Learn More</Button>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="bg-yellow" />
<section />
<section />

<style>
</style>
