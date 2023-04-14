<script>
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import WorkExperience from '$lib/components/WorkExperience.svelte';
  export let clientHeight = 0;

</script>

<div
	bind:clientHeight
	class="section-container min-h-screen flex flex-col justify-center"
>
	<SectionTitle class="w-fit">Where I’ve Worked</SectionTitle>
	<Timeline />
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
