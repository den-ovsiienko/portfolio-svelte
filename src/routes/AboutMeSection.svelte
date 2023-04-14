<script>
	import SectionTitle from '$lib/components/SectionTitle.svelte';

	import WaveNew from '$lib/components/WaveNew.svelte';
</script>

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
			<div class="flex-1 flex justify-end">
				<img src="/images/avatar-big.svg" alt="Avatar" />
			</div>
		</div>
	</div>
	<WaveNew color="yellow" flip />
</section>
