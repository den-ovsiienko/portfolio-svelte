<script>
	import HeroText from '$lib/components/HeroText.svelte';
</script>

<div class="section-container block min-h-screen lg:pt-1/10">
	<div
		class="flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row w-full justify-between items-center pt-4"
	>
		<div class="flex text-2xl sm:text-4xl flex-col gap-3">
			<p class="">Hi 👋. My name is</p>
			<h1 class="text-4xl sm:text-6xl font-bold font-eukrainehead">Denys Ovsiienko</h1>
			<div class="flex flex-col gap-5 lg:items-center lg:flex-row lg:gap-0 pt-1 sm:pt-3.5">
				<p class="pr-3">and I’m a</p>
				<HeroText />
			</div>
		</div>
		<img class="w-40 sm:w-72 xl:w-80" src="/images/avatar.svg" alt="Avatar" />
	</div>
</div>
