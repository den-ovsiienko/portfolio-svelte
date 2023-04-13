<script lang="ts">
	export let name: string;
	export let description: string;
	export let url: string = '';
	export let skills: string[] = [];

	const colors = ['blue-light', 'green-light', 'purple-light'];
</script>

{#if false}
	<div class="bg-blue-light bg-green-light bg-purple-light" />
{/if}

<div on:keydown class="flex-1 p-12 bg-purple flex flex-col h-full justify-between">
	<div class="">
		<h3 class="text-3xl font-normal mb-2">{name}</h3>
		<p class="text-xl mb-4">{description}</p>
		<div class="w-full">
			{#each skills as skill, i}
				<div class="bg-black py-2 px-4 mr-4 text-sm rounded-lg inline-block mb-2 text-white">
					{skill}
				</div>
			{/each}
		</div>
	</div>
	<div class="flex mt-4 justify-between">
		<a href={url} target="_blank" class="font-normal group"
			>Learn More <span class="group-hover:rotate-45 transition-transform">↗</span></a
		>
	</div>
</div>
