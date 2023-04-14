<script lang="ts">
	import HeroSection from './HeroSection.svelte';
	import WorkSection from './WorkSection.svelte';
	import AboutMeSection from './AboutMeSection.svelte';
	import ProjectsSection from './ProjectsSection.svelte';
	import ContactSection from './ContactSection.svelte';
	import { crossfade, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import HeroText from '$lib/components/HeroText.svelte';
	let scroll: number = 0;
	let innerHeight: number = 1;
	let innerWidth: number = 1;
	let showLoading: boolean = true;
	$: section = Math.floor(scroll / innerHeight) + 1;

	const getStaticContentTransform = (section: number) => {
		if ((section > 3 && innerWidth > 400) || section > 4) {
			return `translateY(-200vh)`;
		}
		if (section > 1) {
			return `translateY(-100vh)`;
		} else {
			return `translateY(0)`;
		}
	};

	// Animation
	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 1000),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

	setTimeout(() => {
		showLoading = false;
	}, 1000);
</script>

<svelte:head>
	<title>Denys Ovsiienko | Portfolio</title>
	<meta name="description" content="Denys Ovsiienko's portfolio" />
</svelte:head>

<svelte:window bind:scrollY={scroll} bind:innerHeight bind:innerWidth />
<svelte:body style:overflow={showLoading ? 'hidden' : 'auto'} />

{#if showLoading}
	<div
		on:keydown
		on:click={() => (showLoading = false)}
		out:fade
		class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-yellow"
	>
		<img
			out:send={{ key: 'avatar' }}
			class="animate-pulse w-40 sm:w-72 xl:w-80"
			src="/images/avatar.svg"
			alt="Avatar"
		/>
	</div>
{/if}

<section
	class="fixed top-0 left-0 right-0 flex-col items-center"
	style:transform={getStaticContentTransform(section)}
>
	<HeroSection {showLoading} {receive} />
	<WorkSection />
	<ContactSection />
</section>

<AboutMeSection />
<div id="work" class="-translate-y-4" />

<ProjectsSection />
<div id="contact" class="-translate-y-4" />

<style>
	:global(body) {
		overflow: hidden;
	}
</style>
