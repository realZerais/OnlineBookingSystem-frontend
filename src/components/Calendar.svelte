<script>
	import Modal from '$components/Modal.svelte';


	let showModal = false;
	let selectedDate;

	const selectDate = (e) =>{
        showModal = true;
		selectedDate = e.target.dataset.dateid;
		console.log(selectedDate)
    }

	let schedule = ['May_23_2024'];


	console.log("sched ->" + schedule);


	const date = new Date();
	
	const today = {
		dayNumber: date.getDate(),
		month: date.getMonth(),
		year: date.getFullYear(),
	}

	
	
	const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let monthIndex = date.getMonth();
	// const currentMonth = date.toLocaleString('en-US', { month: 'long' })
	$: month = monthNames[monthIndex];
	
	let year = date.getFullYear();
	
	$: firstDayIndex = new Date(year, monthIndex, 1).getDay();
	// const currentDay = date.getDate();
	$: numberOfDays = new Date(year, monthIndex+1, 0).getDate();
	
	$: calendarCellsQty = numberOfDays + firstDayIndex;
	
	const goToNextMonth = () => {
		if (monthIndex >= 11) {
			year += 1;
			return monthIndex = 0;
		}
		return monthIndex += 1;
	}
	
	const goToPrevMonth = () => {
		if (monthIndex <= 0) {
			year -= 1;
			return monthIndex = 11;
		}
		return monthIndex -= 1;
	}
	
	// $: console.log(`${month}, ${today.dayNumber}, ${year}, FIRST DAY index is ${firstDayIndex}, MONTH index is ${monthIndex}, No. of days: ${numberOfDays}`)


</script>

<div class="w-[50%] h-[60%] shadow-lg">
	<!-- MONTH -->
	<div class="month w-[100%] rounded-t-lg  bg-main p-10 text-center">
		<ul class="p-0 m-0">
			<button class="prev text-accent text-2xl" on:click={goToPrevMonth}>&#10094;</button>
			<button class="next text-accent text-2xl" on:click={goToNextMonth}>&#10095;</button>
			<li class="text-white text-lg uppercase tracking-widest ">{month}<br>
				<span class="text-white text-lg uppercase tracking-widest">{year}</span>
			</li>
		</ul>
	</div>

	<!-- WEEKDAYS -->

	<ul class="weekdays m-0 py-5 px-0  bg-zinc-00 ">
		<li>Su</li>
		<li>Mo</li>
		<li>Tu</li>
		<li>We</li>
		<li>Th</li>
		<li>Fr</li>
		<li>Sa</li>
	</ul>

	<!-- DAYS -->
	<div class="w-[100%] h-[67%] ">
		<ul class="days w-[100%] h-[100%] rounded-b-lg">
			{#each Array(calendarCellsQty) as _, i}
				{#if i < firstDayIndex || i >= numberOfDays+firstDayIndex  }
					<button class="disable pointer-events-none">&nbsp;</button>
				{:else}
					<button class="text-main" class:active={i === today.dayNumber+(firstDayIndex-1) &&
																monthIndex === today.month &&
																year === today.year}
					data-dateID={`${month}_${(i-firstDayIndex)+1}_${year}`}
					on:click={selectDate}
					class:has-appts={`${month}_${(i-firstDayIndex)+1}_${year}` in schedule}
					>
						{(i - firstDayIndex) + 1}
						
					</button>
				{/if}
			{/each}
		</ul>
	</div>
	

</div>
	
<Modal bind:showModal>

	<h2 slot="header" class="text-center text-sm font-medium">
		{selectedDate}
	</h2>

</Modal>

				
<style>
	ul {list-style-type: none;}


	/* Previous button inside month header */
	.month .prev {
		float: left;
		padding-top: 10px;
		cursor: pointer;
	}

	/* Next button */
	.month .next {
		float: right;
		padding-top: 10px;
		cursor: pointer;
	}

	/* Weekdays (Mon-Sun) */

	.weekdays li {
		display: inline-block;
		width: 13.6%;
		color: #666;
		text-align: center;
	}

	/* Days (1-31) */
	.days {
		padding: 10px 0;
		background: #eee;
		margin: 0;
	}

	.days button {
		list-style-type: none;
		display: inline-block;
		/* border: 1px solid black; */
		padding: 9px;
		width: 14.28%;
		text-align: center;
		font-size: 1.2rem;
		color: #777;
		cursor: pointer;
	}
	/* .days li {
		list-style-type: none;
		display: inline-block;
		border: 1px solid black;
		padding: 9px;
		width: 11.6%;
		text-align: center;
		margin-bottom: 1px;
		font-size: 1.2rem;
		color: #777;
		cursor: pointer;
	} */

	/* Highlight the "current" day */
	.active {
		padding: 5px;
		background: #1abc9c;
		color: white !important
	}

	.has-appts .days button {
		color: red;
		
	}
</style>


