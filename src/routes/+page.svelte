<script lang="ts">
	import HeroText from '$lib/components/HeroText.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import WaveNew from '$lib/components/WaveNew.svelte';
	import WorkExperience from '$lib/components/WorkExperience.svelte';
	import Project from '$lib/components/Project.svelte';
	import HeroSection from './HeroSection.svelte';
	import WorkSection from './WorkSection.svelte';
	import AboutMeSection from './AboutMeSection.svelte';
	import ProjectsSection from './ProjectsSection.svelte';
	import ContactSection from './ContactSection.svelte';
	let scroll: number = 0;
	let innerHeight: number = 1;
	let innerWidth: number = 1;
	$: section = Math.floor(scroll / innerHeight) + 1;

	const getStaticContentTransform = (section: number) => {
		if(section > 3 && innerWidth > 400 || section > 4) {
			return `translateY(-200vh)`
		}
		if(section > 1) {
			return `translateY(-100vh)`;
		} else {
			return `translateY(0)`;
		}
	};
</script>

<svelte:head>
	<title>Denys Ovsiienko | Portfolio</title>
	<meta name="description" content="Denys Ovsiienko's portfolio" />
</svelte:head>

<svelte:window bind:scrollY={scroll} bind:innerHeight bind:innerWidth />
<section
	class="fixed top-0 left-0 right-0 flex-col items-center"
	style:transform={getStaticContentTransform(section)}
>
	<HeroSection />
	<WorkSection />
	<ContactSection />
</section>

<AboutMeSection />
<div id="work" class="-translate-y-4" />

<ProjectsSection />
