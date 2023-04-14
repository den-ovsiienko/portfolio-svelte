<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import WaveNew from '$lib/components/WaveNew.svelte';

</script>

<section
	id="projects"
	class="flex bg-purple items-center mt-screen mb-screen"
>
	<WaveNew color="purple" />
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
  <WaveNew color="purple" flip animate/>
</section>
