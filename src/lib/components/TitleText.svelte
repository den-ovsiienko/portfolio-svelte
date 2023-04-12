<script lang="ts">
	import { spring } from 'svelte/motion';
	import { fly } from 'svelte/transition';

	const titles = [
		'Software Engineer',
		'Front End Developer',
		'Back End Developer',
		'UI/UX Designer'
	];

	let ms = 5000;
	let currentIndex = 0;

	const updateIndex = () => {
		currentIndex = currentIndex + 1;
		if (currentIndex >= titles.length) currentIndex = 0;
	};

	let clear: NodeJS.Timer;
	$: {
		clearInterval(clear);
		clear = setInterval(updateIndex, ms);
	}
</script>

<div class="bg-black text-white text-4xl w-[28rem]">
	<div class="h-16 w-full relative overflow-hidden text-center">
		{#key currentIndex}
			<span
				class="absolute flex inset-0 justify-center items-center"
				in:fly={{ y: -50, opacity: 1 }}
				out:fly={{ y: 50, opacity: 1 }}
			>
				{titles[currentIndex]}
			</span>
		{/key}
	</div>
</div>
