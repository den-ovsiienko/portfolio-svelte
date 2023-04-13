<script lang="ts">
	export let color: 'green-light' | 'blue-light' | 'purple-light';
	export let companyName: string;
	export let url: string = '';

	const onUrlClick = () => {
		window.open(url, '_blank')?.focus();
	};
</script>

{#if false}
	<div class="bg-green-light bg-blue-light bg-purple-light" />
{/if}

<div
	on:click={onUrlClick}
	on:keyup
	class="group bg-{color} p-5 flex justify-center font-normal text-lg cursor-pointer {$$restProps.class || ''}"
>
	<span>{companyName}</span>
	<span class="ml-2 group-hover:rotate-45 transition-transform">↗️</span>
</div>
