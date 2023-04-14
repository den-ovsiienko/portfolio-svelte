<script>
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import WorkExperience from '$lib/components/WorkExperience.svelte';
  export let clientHeight = 0;

  let timelineDashedWidth = 0;

  $: dashesArray = Array(Math.floor(timelineDashedWidth / (16 + 4)));
</script>

<div
	bind:clientHeight
	class="section-container min-h-screen flex flex-col justify-center"
>
	<SectionTitle class="w-fit">Where I’ve Worked</SectionTitle>
	<!-- Timeline starts -->
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
			<div class="bg-black py-2 px-4 text-sm rounded-lg hidden sm:inline-block text-white">Now</div>
			<div class="h-1 rounded flex-1 bg-black" />
		</div>
		<div class="h-5 w-1 relative">
			<div class="h-full w-full bg-black rounded" />
			<div class="absolute -top-7 left-0 w-max -translate-x-1/2 text-sm">Apr '22</div>
		</div>
		<div class="flex-1 h-1 rounded bg-black" />
		<div class="h-5 w-1 relative">
			<div class="h-full w-full bg-black rounded" />
			<div class="absolute -top-7 left-0 w-max -translate-x-1/2 text-sm">Dec '21</div>
		</div>
		<div class="flex-1 h-1 rounded bg-black" />
		<div class="h-5 w-1 relative">
			<div class="h-full w-full bg-black rounded" />
			<div class="absolute -top-7 left-0 w-max -translate-x-1/2 text-sm">Apr '21</div>
		</div>
	</div>
	<!-- Timeline ends -->
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
