<script>
       import AdminBookButton from '$admin/AdminBookButton.svelte';
       const dashedLine = '<h1> - - - - -<h1>';

// let isBooked = true;

// $: {
//     const booked = document.getElementById('booked');
//     const notBooked = document.getElementById('notBooked');

//     if (!isBooked) {
//         notBooked?.classList.add('hidden');
//         booked?.classList.remove('hidden');
//     } else {
//         notBooked?.classList.remove('hidden');
//         booked?.classList.add('hidden');
//     }
// }
</script>

<div class="body">
	<div class="header flex flex-col self-start rounded-3xl w-[100%] h-[100%] p-8 pb-14 justify-center gap-y-5" >
		<strong class="text-6xl text-mainParagraph tracking-widest ml-[9%]">STATUS</strong>
		<hr class="border-t-2 border-accent w-6/12 ml-[9%]" />
	</div>

	<div class="content flex justify-center items-center row-span-2 w-[100%]">
		<div class="flex gap-x-10 justify-center items-center w-[80%] h-[90%] bg-mainProfile bg-mainParagraph border-black border-2 shadow-leftbottom ml-[3%]" >
			<!-----------------------------------BOOKING = FALSE ------------------------------------------>

			<div id="notBooked" class="flex flex-col w-[100%] h-[100%] items-center justify-center gap-y-7" >
				<div class="flex bg-accent w-[50%] h-[45%] items-center justify-center border-4 border-black" >
					<p class="text-4xl font-bakbak">You haven't booked yet.</p>
				</div>
				<AdminBookButton />
			</div>

			<!-----------------------------------BOOKING = TRUE ------------------------------------------>
			<!-- <div id="booked" class="flex hidden">
				<div class="flex flex-col justify-center items-center">
					<svg class="w-20 h-20" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" >
						<path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM96 75V64H288V75c0 19-5.6 37.4-16 53H112c-10.3-15.6-16-34-16-53zm16 309c3.5-5.3 7.6-10.3 12.1-14.9L192 301.3l67.9 67.9c4.6 4.6 8.6 9.6 12.1 14.9H112z" />
					</svg>
					<p>Waiting</p>
				</div>

				<div class="flex justify-center items-center w-25 h-20 text-4xl mb-5">
					{@html dashedLine}
				</div>

				<div class="flex flex-col justify-center items-center">
					<svg class="w-20 h-20" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" >
						<path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
					</svg>
					<p>In Progress</p>
				</div>

				<div class="flex justify-center items-center w-25 h-20 text-4xl mb-5">
					{@html dashedLine}
				</div>

				<div class="flex flex-col justify-center items-center">
					<svg class="w-20 h-20" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" >
						<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
					</svg>
					<p>Done</p>
				</div>
			</div> -->
		</div>
	</div>
</div>

<style>
	.body {
		display: grid;
		background-color: #004647;
		width: 100%;
		height: 100%;
		grid-template-columns: 1fr;
		grid-template-rows: 120px 1fr;
	}

	.header{
        visibility: hidden;
        margin-left: -20%;
        animation: to-right .3s linear forwards;
    }


	@keyframes to-right {
		0% {
			visibility: hidden;
		}
		100% {
			visibility: visible;
			margin-left: 0%;
		}
	}
</style>
