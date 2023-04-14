<script>
	import ArrowIcon from '$lib/components/ArrowIcon.svelte';
	import Button from '$lib/components/Button.svelte';
	import HeroText from '$lib/components/HeroText.svelte';
	import Project from '$lib/components/Project.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import WorkExperience from '$lib/components/WorkExperience.svelte';
	import Footer from '../Footer.svelte';
	import WorkSection from '../WorkSection.svelte';
</script>

<svelte:head>
	<title>Denys Ovsiienko | Styleguide</title>
	<meta name="description" content="Denys Ovsiienko's styleguide" />
</svelte:head>

<section class="mt-8 min-h-fit">
	<h2 class="text-2xl border-b">Fonts</h2>
	<div class="gap-2 mt-2">
		<p class="text-5xl">Text 5XL</p>
		<p class="text-4xl">Text 4XL</p>
		<p class="text-3xl">Text 3XL</p>
		<p class="text-2xl">Text 2XL</p>
		<p class="text-xl">Text XL</p>
		<p class="text-lg">Text LG</p>
		<p class="text-base">Text Base</p>
		<p class="text-sm">Text SM</p>
		<p class="text-xs">Text XS</p>
	</div>
	<div class="mt-2 text-sm bg-yellow inline-block p-4 font-mono">
		{'<p class="text-5xl">Text 5XL</p>'}
		<br />
		{'<p class="text-4xl">Text 4XL</p>'}
		<br />
		{'<p class="text-3xl">Text 3XL</p>'}
		<br />
		{'<p class="text-2xl">Text 2XL</p>'}
		<br />
		{'<p class="text-xl">Text XL</p>'}
		<br />
		{'<p class="text-lg">Text LG</p>'}
		<br />
		{'<p class="text-base">Text Base</p>'}
		<br />
		{'<p class="text-sm">Text SM</p>'}
		<br />
		{'<p class="text-xs">Text XS</p>'}
	</div>
</section>

<section class="mt-8 min-h-fit">
	<h2 class="text-2xl border-b">Images</h2>
	<div class="flex flex-col xl:flex-row gap-5">
		<img class="w-40 sm:w-72 xl:w-80" src="/images/avatar.svg" alt="Avatar" />
		<img class="w-40 sm:w-72 xl:w-80" src="/images/avatar-big.svg" alt="Hero" />
	</div>
	<code class="mt-2 text-sm bg-yellow inline-block p-4 font-mono">
		{'<img class="w-40 sm:w-72 xl:w-80" src="/images/avatar.svg" alt="Avatar" />'}
		<br />
		{'<img class="w-40 sm:w-72 xl:w-80" src="/images/avatar-big.svg" alt="Hero" />'}
	</code>
</section>

<section class="mt-8 min-h-fit">
	<h2 class="text-2xl border-b">Hero Text</h2>
	<div class="flex flex-col xl:flex-row">
		<HeroText />
	</div>
	<code class="mt-2 text-sm bg-yellow inline-block p-4 font-mono">
		{'<HeroText />'}
	</code>
</section>

<section class="mt-8 min-h-fit">
	<h2 class="text-2xl border-b">Buttons</h2>
	<div>
		<Button class="mt-2">Primary</Button>
		<Button class="mt-2">Icon <ArrowIcon color="white" /></Button>
	</div>
	<code class="mt-2 text-sm bg-yellow inline-block p-4 font-mono">
		{'<Button>Primary</Button>'}
		<br />
		{'<Button>Icon <ArrowIcon color="white"/></Button>'}
	</code>
</section>

<section class="mt-8 min-h-fit">
	<h2 class="text-2xl border-b">Footer</h2>
	<div>
		<Footer />
	</div>
	<code class="mt-2 text-sm bg-yellow inline-block p-4 font-mono">
		{'<Footer />'}
	</code>
</section>

<section class="mt-8 min-h-fit">
	<h2 class="text-2xl border-b">Work Experience Section</h2>
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
	<code class="mt-2 text-sm bg-yellow inline-block p-4 font-mono">
		{'<WorkExperience'}
		<br />
		{'color="green-light"'}
		<br />
		{'companyName="Discover My Franchise"'}
		<br />
		{'  url="https://www.discovermyfranchise.com/"'}
		<br />
		{'/>'}
		<br />
		{'<WorkExperience'}
		<br />
		{'color="blue-light"'}
		<br />
		{'companyName="Simon Fraser University"'}
		<br />
		{'  url="https://www.sfu.ca/"'}
		<br />
		{'/>'}
		<br />
		{'<WorkExperience'}
		<br />
		{'color="purple-light"'}
		<br />
		{'companyName="Guard RFID"'}
		<br />
		{'  url="https://www.guardrfid.com/"'}
		<br />
		{'/>'}
	</code>
</section>

<section class="mt-8 min-h-fit">
	<h2 class="text-2xl border-b">Work Experience Section</h2>
	<div class="flex flex-col xl:flex-row">
		<WorkExperience
			class="flex-1"
			color="green-light"
			companyName="dovsiien@gmail.com"
			url="mailto:dovsiien@gmail.com"
			iconType="email"
		/>
		<WorkExperience
			class="flex-1"
			color="blue-light"
			companyName="+1 647 819 4111"
			url="tel:+16478194111"
			iconType="phone"
		/>
		<WorkExperience
			class="flex-1"
			color="purple-light"
			companyName="LinkedIn Profile"
			url="https://www.linkedin.com/in/denys-ovsiienko-00a4671b6/"
			iconType="linkedin"
		/>
	</div>
	<code class="mt-2 text-sm bg-yellow inline-block p-4 font-mono">
		{'<WorkExperience'}
		<br />
		{'color="green-light"'}
		<br />
		{'companyName="dovsiien@gmail.com"'}
		<br />
		{'  url="mailto:dovsiien@gmail.com"'}
		<br />
		{'/>'}
		<br />
		{'<WorkExperience'}
		<br />
		{'color="blue-light"'}
		<br />
		{'companyName="+1 647 819 4111"'}
		<br />
		{'  url="tel:+16478194111"'}
		<br />
		{'/>'}
		<br />
		{'<WorkExperience'}
		<br />
		{'color="purple-light"'}
		<br />
		{'companyName="LinkedIn Profile"'}
		<br />
		{'  url="https://www.linkedin.com/in/denys-ovsiienko-00a4671b6/"'}
		<br />
		{'/>'}
	</code>
</section>

<section class="mt-8 min-h-fit">
	<h2 class="text-2xl border-b">Timeline</h2>
	<div class="flex flex-col xl:flex-row">
		<Timeline />
	</div>
	<code class="mt-2 text-sm bg-yellow inline-block p-4 font-mono">
		{'<Timeline />'}
	</code>
</section>

<section class="mt-8 min-h-fit">
	<h2 class="text-2xl border-b">Projecs</h2>
	<div>
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
		</div>
	</div>
	<code class="mt-2 text-sm bg-yellow inline-block p-4 font-mono">
		{'<div class="grid grid-cols-1 lg:grid-cols-2 bg-black py-1 gap-1">'}
		<br />
		{'<Project'}
		<br />
		{'name="GameList GG"'}
		<br />
		{'description="A web app to track your games."'}
		<br />
		{'skills={['}
		<br />
		{"'ReactJS',"}
		<br />
		{"'ExpressJS',"}
		<br />
		{"'MongoDB',"}
		<br />
		{"'MantineUI',"}
		<br />
		{"'Docker',"}
		<br />
		{"'DigitalOcean'"}
		<br />
		{']}'}
		<br />
		{'url="https://gamelist.gg"'}
		<br />
		{'/>'}
		<br />
		{'<Project'}
		<br />
		{'name="Coffee Bike Vancouver"'}
		<br />
		{'description="A mobile app for Coffee Bike Vancouver"'}
		<br />
		{'skills={['}
		<br />
		{"'Flutter',"}
		<br />
		{"'Firebase',"}
		<br />
		{"'Figma'"}
		<br />
		{']}'}
		<br />
		{'url="https://www.coffeebike.ca/"'}
		<br />
		{'/>'}
		<br />
		{'</div>'}
	</code>
</section>
