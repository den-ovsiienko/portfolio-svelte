<script lang="ts">
	import Button from './Button.svelte';

	export const waveHeight = 198;

	export let color: 'yellow' | 'purple';
	export let flip = false;
	export let showLearnMore = false;
  export let animate = false

	const onLearnMore = () => {
		window?.scrollTo({
			top: window.innerHeight,
			behavior: 'smooth'
		});
	};
</script>

{#if false}
	<div class="bg-wave-yellow bg-wave-purple h-[198px] bottom-[198px] -top-[198px]" />
{/if}

<div class="absolute overflow-hidden pt-[25px] left-0 right-0 {flip ? `bottom-0` : `-top-[${waveHeight}px]`}">
	<div class="relative w-full h-[{waveHeight}px]">
		<div class='{flip ? 'scale-100' : ''}'>
			<div class="{animate ? 'wave' : 'wave-static'} bg-wave-{color}" />
      {#if animate}
        <div class="wave bg-wave-{color}" />
      {/if}
		</div>
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
			{#if showLearnMore}
				<Button on:click={onLearnMore} animateIcon rightIcon="↘">Learn More</Button>
			{/if}
		</div>
	</div>
</div>

<style>
	.wave {
		position: absolute;
		top: 0;
		width: 6400px;
		height: 198px;
		animation: wave 30s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
	}

  .wave-static {
    position: absolute;
		top: 0;
		width: 100%;
		height: 198px;
  }

	.wave:nth-of-type(2) {
		top: 0;
		animation: wave 30s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
			swell 7s ease -1.25s infinite;
		opacity: 0.5;
	}

	@keyframes wave {
		0% {
			margin-left: 0;
		}
		100% {
			margin-left: -1600px;
		}
	}

	@keyframes swell {
		0%,
		100% {
			transform: translate3d(0, -25px, 0);
		}
		50% {
			transform: translate3d(0, 5px, 0);
		}
	}
</style>
