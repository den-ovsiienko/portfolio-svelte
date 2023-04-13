<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import Button from '$lib/components/Button.svelte';
	import Wave from '$lib/components/Wave.svelte';
	import HeroText from '$lib/components/HeroText.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import WaveNew from '$lib/components/WaveNew.svelte';
	import WorkExperience from '$lib/components/WorkExperience.svelte';
	import Project from '$lib/components/Project.svelte';

	let scroll: number = 0;
	let innerHeight: number = 1;
	let workSectionHeight: number = 0;
	let timelineDashedWidth: number = 0;
	let bodyOffsetWidth: number = 0;
	$: dashesArray = Array(Math.floor(timelineDashedWidth / (16 + 4)));
	$: section = Math.floor(scroll / innerHeight) + 1;
	$: projectsSectionMargin = workSectionHeight * 3 + 200;
</script>

<svelte:head>
	<title>Denys Ovsiienko | Portfolio</title>
	<meta name="description" content="Denys Ovsiienko's portfolio" />
</svelte:head>

<svelte:window bind:scrollY={scroll} bind:innerHeight />
<section class="fixed top-0 left-0 right-0 flex items-center">
	<!-- First section start -->
	<div class="section-container h-screen lg:pt-1/10" style:display={section === 1 ? 'block' : 'none'}>
		<div class="flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row w-full justify-between items-center pt-4">
			<div class="flex text-2xl sm:text-4xl flex-col gap-3">
				<p class="">Hi 👋. My name is</p>
				<h1 class="text-4xl sm:text-6xl font-bold font-eukrainehead">Denys Ovsiienko</h1>
				<div class="flex flex-col gap-5 lg:items-center lg:flex-row lg:gap-0 pt-1 sm:pt-3.5">
					<p class="pr-3">and I’m a</p>
					<HeroText />
				</div>
			</div>
			<img class="" src="/images/avatar.svg" alt="Avatar" />
		</div>
	</div>
	<!-- First section end -->

	<!-- Third section start -->
	<div
		bind:clientHeight={workSectionHeight}
		class="section-container"
		style:display={section >= 2 ? 'block' : 'none'}
	>
		<SectionTitle>Where I’ve Worked</SectionTitle>
		<!-- REFACTOR START -->
		<div class="flex items-center w-full gap-2 h-20">
			<div class="w-1 bg-black h-1" />
			<div class="flex-1 flex gap-2 items-center">
				<div bind:clientWidth={timelineDashedWidth} class="flex-1 flex gap-2">
					{#if dashesArray.length > 0}
						{#each dashesArray as dash, i}
							<div class="flex-1 bg-black h-1" />
						{/each}
					{:else}
						<div class="flex-1 bg-black h-1" />
					{/if}
				</div>
				<div class="bg-black py-2 px-4 text-sm rounded-lg hidden sm:inline-block text-white">
					Now
				</div>
				<div class="h-1 rounded flex-1 bg-black" />
			</div>
			<div class="h-5 w-1 relative">
				<div class="h-full w-full bg-black rounded" />
				<div class="absolute -top-7 left-0 w-max -translate-x-1/2 text-sm ">Apr '22</div>
			</div>
			<div class="flex-1 h-1 rounded bg-black" />
			<div class="h-5 w-1 relative">
				<div class="h-full w-full bg-black rounded" />
				<div class="absolute -top-7 left-0 w-max -translate-x-1/2 text-sm ">Dec '21</div>
			</div>
			<div class="flex-1 h-1 rounded bg-black" />
			<div class="h-5 w-1 relative">
				<div class="h-full w-full bg-black rounded" />
				<div class="absolute -top-7 left-0 w-max -translate-x-1/2 text-sm ">Apr '21</div>
			</div>
		</div>
		<!-- REFACTOR END -->
		<div class="flex flex-col xl:flex-row">
			<WorkExperience
				class="flex-1"
				color="green-light"
				companyName="Discover My Franchise"
				url="https://www.discovermyfranchise.com/"
			/>
			<WorkExperience
				class="flex-1"
				color="blue-light"
				companyName="Simon Fraser University"
				url="https://www.sfu.ca/"
			/>
			<WorkExperience
				class="flex-1"
				color="purple-light"
				companyName="Guard RFID"
				url="https://www.guardrfid.com/"
			/>
		</div>
	</div>
	<!-- Third section ends -->
</section>

<section id="about" class="bg-yellow flex items-center mt-screen">
	<WaveNew color="yellow" showLearnMore animate />
	<div class="section-container">
		<div class="flex flex-col-reverse gap-12 lg:gap-0 lg:flex-row items-center w-full">
			<div class="flex-1">
				<SectionTitle>About Me</SectionTitle>
				<p class="text-justify text-lg">
					Hey there! I'm Denys Ovsiienko, a passionate guy in my last year at Simon Fraser
					University, where I'm studying Computer Science. Over the past 2 years, I've been rocking
					it as a part-time developer, and I'm all about solving problems and creating awesome
					stuff. I've got mad skills in various programming languages and love diving into new
					challenges to level up my game. With an eye for detail and a genuine love for tech, I'm
					always ready to learn and grow. If you're looking for someone with a zest for software
					development and a contagious enthusiasm, I'm your go-to person!
				</p>
			</div>
			<div class="flex-1 flex  justify-end">
				<img src="/images/avatar-big.svg" alt="Avatar" />
			</div>
		</div>
	</div>
</section>
<div id="work" />

<!-- <section class="flex items-center bg-white">
	<div class="section-container">
		<SectionTitle>Where I’ve Worked</SectionTitle>
		<div class="flex flex-col xl:flex-row">
			<WorkExperience
				class="flex-1"
				color="green-light"
				companyName="Discover My Franchise"
				url="https://www.discovermyfranchise.com/"
			/>
			<WorkExperience
				class="flex-1"
				color="blue-light"
				companyName="Simon Fraser University"
				url="https://www.sfu.ca/"
			/>
			<WorkExperience
				class="flex-1"
				color="purple-light"
				companyName="Guard RFID"
				url="https://www.guardrfid.com/"
			/>
		</div>
	</div>
</section> -->

<section
	id="projects"
	class="flex bg-purple items-center"
	style:margin-top={`${
		projectsSectionMargin > innerHeight ? innerHeight : projectsSectionMargin
	}px`}
>
	<WaveNew color="purple" animate />
	<div class="section-container">
		<SectionTitle>Some Things I’ve Built</SectionTitle>
		<div class="grid grid-cols-1 lg:grid-cols-2 bg-black py-1 gap-1">
			<Project
				name="GameList GG"
				description="A web app to track your games."
				skills={['ReactJS', 'ExpressJS', 'MongoDB', 'MantineUI', 'Docker', 'DigitalOcean']}
				url="https://gamelist.gg"
			/>
			<Project
				name="Coffee Bike Vancouver"
				description="A mobile app for Coffee Bike Vancouver"
				skills={['Flutter', 'Firebase', 'Figma']}
				url="https://www.coffeebike.ca/"
			/>
			<Project
				name="GameList GG"
				description="A web app to track your games."
				skills={['ReactJS', 'ExpressJS', 'MongoDB', 'MantineUI', 'Docker', 'DigitalOcean']}
				url="https://gamelist.gg"
			/>
			<Project
				name="Coffee Bike Vancouver"
				description="A mobile app for Coffee Bike Vancouver"
				skills={['Flutter', 'Firebase', 'Figma']}
				url="https://www.coffeebike.ca/"
			/>
		</div>
	</div>
</section>

<style>
</style>
