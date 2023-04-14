<script lang="ts">
	import ArrowIcon from './ArrowIcon.svelte';
	import ContactIcon from './ContactIcon.svelte';

	type IconType = 'phone' | 'email' | 'linkedin' | undefined;

	export let color: 'green-light' | 'blue-light' | 'purple-light';
	export let companyName: string;
	export let url: string = '';
	export let iconType: IconType = undefined;

	const onUrlClick = () => {
		let target = url.includes('https://') ? '_blank' : '_self';
		window.open(url, target)?.focus();
	};
</script>

{#if false}
	<div class="bg-green-light bg-blue-light bg-purple-light" />
{/if}

<div
	on:click={onUrlClick}
	on:keyup
	class="group bg-{color} p-5 flex justify-center items-center font-normal text-lg cursor-pointer {$$restProps.class ||
		''}"
>
	{#if iconType}
		<ContactIcon class="mr-1" type={iconType} />
	{/if}
	<span class="group-hover:underline underline-offset-8">{companyName}</span>
	{#if !iconType}
		<ArrowIcon class="ml-1" direction="ne" />
	{/if}
</div>
