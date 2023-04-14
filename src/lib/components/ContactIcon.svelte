<script lang="ts">
	export let type: 'email' | 'phone' | 'linkedin';
	export let color: 'black' | 'white' = 'black';
	export let strokeWidth: number = 1.5;
</script>

<svg
	{...$$restProps}
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke={color}
	stroke-width={strokeWidth}
	class="w-6 h-6 inline-block {$$restProps.class}"
>
	{#if type === 'linkedin'}
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
		/>
	{:else if type === 'email'}
		<path
			stroke-linecap="round"
			d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
		/>
	{:else if type === 'phone'}
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
		/>
	{/if}
</svg>
