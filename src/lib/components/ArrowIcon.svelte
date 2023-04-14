<script lang="ts">
	export let direction: 'ne' | 'nw' | 'se' | 'sw' = 'se';
	export let color: 'black' | 'white' = 'black';
	export let strokeWidth: number = 0.75;
  export let rotateReverse: boolean = false;
</script>

<svg
	{...$$restProps}
	xmlns="http://www.w3.org/2000/svg"
	fill={color}
	viewBox="0 0 20 20"
	stroke={color}
	stroke-width={strokeWidth}
	class="w-5 h-5 {rotateReverse ? 'group-hover:-rotate-45' : 'group-hover:rotate-45'} transition-transform inline-block {$$restProps.class}"
>
	{#if direction === 'se'}
		<path
			fill-rule="evenodd"
			d="M6.28 5.22a.75.75 0 00-1.06 1.06l7.22 7.22H6.75a.75.75 0 000 1.5h7.5a.747.747 0 00.75-.75v-7.5a.75.75 0 00-1.5 0v5.69L6.28 5.22z"
			clip-rule="evenodd"
		/>
	{:else if direction === 'sw'}
		<path
			fill-rule="evenodd"
			d="M14.78 5.22a.75.75 0 00-1.06 0L6.5 12.44V6.75a.75.75 0 00-1.5 0v7.5c0 .414.336.75.75.75h7.5a.75.75 0 000-1.5H7.56l7.22-7.22a.75.75 0 000-1.06z"
			clip-rule="evenodd"
		/>
	{:else if direction === 'ne'}
		<path
			fill-rule="evenodd"
			d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
			clip-rule="evenodd"
		/>
	{:else if direction === 'nw'}
		<path
			fill-rule="evenodd"
			d="M14.78 14.78a.75.75 0 01-1.06 0L6.5 7.56v5.69a.75.75 0 01-1.5 0v-7.5A.75.75 0 015.75 5h7.5a.75.75 0 010 1.5H7.56l7.22 7.22a.75.75 0 010 1.06z"
			clip-rule="evenodd"
		/>
	{/if}
</svg>
