<script>

	import SectionTitle from "$lib/components/SectionTitle.svelte";
	import WorkExperience from "$lib/components/WorkExperience.svelte";

</script>
<div
	class="section-container min-h-screen flex flex-col justify-center"
>
	<SectionTitle class="w-fit">How to Contact Me</SectionTitle>
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
</div>