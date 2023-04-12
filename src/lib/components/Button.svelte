<script lang="ts">
	export let animateIcon: boolean = false;
	export let rightIcon: string | undefined;
	const animationClass = animateIcon
		? 'group-hover:rotate-45 inline-block transition-transform'
		: '';
	let restProps = { ...$$restProps };
	let className = restProps.class;
	delete restProps.class;
</script>

<button
	class={`hover:-translate-y-0.5 active:translate-y-0 transition-transform group px-10 py-6 bg-black text-white font-normal text-base rounded-3xl ${className}`}
	on:click
	{...restProps}
>
	<slot />
	{#if rightIcon && rightIcon.length > 0}
		<div class={animationClass}>{rightIcon}</div>
	{/if}
</button>
