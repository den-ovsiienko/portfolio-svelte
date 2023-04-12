<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Button from '$lib/components/Button.svelte';
	import Wave from '$lib/components/Wave.svelte';
	import TitleText from '$lib/components/TitleText.svelte';
</script>

<svelte:head>
	<title>Denys Ovsiienko | Portfolio</title>
	<meta name="description" content="Denys Ovsiienko's portfolio" />
</svelte:head>

<section class="">
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
		<Wave color="yellow" showLearnMore animate />
	</div>
</section>
<section class="bg-yellow" />
<section><Wave color="yellow" flip/></section>
<section />

<style>
</style>
