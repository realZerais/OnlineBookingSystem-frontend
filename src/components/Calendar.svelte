<script>
	import Modal from '$components/Modal.svelte';
    import { onMount } from 'svelte';
	import { getCookieValue } from "../hooks/auth"
	import { fetchUserData } from '../hooks/handleUser';

	import { toast } from '@zerodevx/svelte-toast'
  	import {fail} from '../lib/index'

	let user = '';
	//props 
	export let scheduleArray = [];




	//modal
	let showModal = false;
	let showBookModal = false;
	let book_date;

	

	const selectDate = (e) =>{
		showBookModal = true;
        showModal = true;
		book_date = e.target.dataset.dateid;
    }

	const closeModal = () =>{
		showModal = false;
		showBookModal = false;
	}


	const date = new Date();
	
	const today = {
		dayNumber: date.getDate(),
		month: date.getMonth(),
		year: date.getFullYear(),
	}

	
	
	const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let monthIndex = date.getMonth();

	$: month = monthNames[monthIndex];
	
	let year = date.getFullYear();
	
	$: firstDayIndex = new Date(year, monthIndex, 1).getDay();

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

	let issue_description;
	let cellphone_model;
	let user_id;

	
	
	const handleSubmit = async(event) =>{
		event.preventDefault();
		const accessToken = getCookieValue('accessToken');

		const bookingData = JSON.stringify({
			user_id,
			book_date,
			cellphone_model,
			issue_description
		});
	

		try {   
            const response = await fetch('http://localhost:9000/booking/addBook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
					'Authorization': `Bearer ${accessToken}`
                },
                body: bookingData,
			
            }); 

            if (!response.ok) {
                const errorData = await response.json();
                const {message} = errorData;
                console.log(message);
				closeModal();
                toast.push(message, {theme: $fail});
            }else{
                const messageResponse = await response.json();
				const {message} = messageResponse;
				closeModal();
                toast.push(message); 
            }

            
        } catch (error) {
            console.error('Error:', error);
			toast.push(error, {theme: $fail});
			closeModal();
        }finally {
            closeModal();
        }
	}

	onMount(async ()=>{
		
		user = await fetchUserData();
		user_id = user.user_id;

	})
</script>

<div class="col-span-1 lg:col-span-2 shadow-md h-[70vh] bg-white border-main border-2 rounded-md">
	<!-- MONTH -->
	<div class="month w-[100%] rounded-t-sm bg-secondary  p-5 text-center ">
		<ul class="p-0 m-0">
			<button class="prev text-main text-2xl" on:click={goToPrevMonth}>&#10094;</button>
			<button class="next text-main text-2xl" on:click={goToNextMonth}>&#10095;</button>
			<li class="text-slate-700 text-lg uppercase tracking-widest ">{month}<br>
				<span class="text-slate-700 text-lg uppercase tracking-widest">{year}</span>
			</li>
		</ul>
	</div>

	<!-- WEEKDAYS -->

	<ul class="weekdays m-0 py-5  bg-zinc-00 grid grid-cols-7 bg-main text-white">
		<li>Su</li>
		<li>Mo</li>
		<li>Tu</li>
		<li>We</li>
		<li>Th</li>
		<li>Fr</li>
		<li>Sa</li>
	</ul>

	<!-- DAYS -->
	<div class="w-[100%] h-[100%] ">
		<ul class="days w-[100%]  rounded-b-md grid grid-cols-7">
			{#each Array(calendarCellsQty) as _, i}
				{#if i < firstDayIndex || i >= numberOfDays+firstDayIndex  }
					<button class="disable pointer-events-none">&nbsp;</button>

				
					

				{:else}
					<!--TAKEN DAYS-->
					{#if scheduleArray.includes(`${month} ${(i-firstDayIndex)+1}, ${year}`) }
						
						<button class="text-accent cursor-not-allowed disabled" 
							
							data-dateID={`${month}_${(i-firstDayIndex)+1}_${year}`} 
							
							title="This day is booked! "
							
							
						>

						{(i - firstDayIndex) + 1} <!--display the day-->
					
						</button>

					<!--DAY HAVE PASSED-->
					{:else if	(year < today.year) || 
								((monthIndex < today.month && year <= today.year)) ||
								((monthIndex <= today.month) && (year == today.year) && ((i - firstDayIndex) + 1) < today.dayNumber) 
					
					}
						<button class="text-main opacity-25 cursor-not-allowed disabled m-0" 
							
							
							data-dateID={`${month}_${(i-firstDayIndex)+1}_${year}`} 
							title="This day has passed! "
					
					
						>

						{(i - firstDayIndex) + 1} <!--display the day-->
			
						</button>

					<!--AVAILABLE DAYS-->
					{:else}
						<button class="text-main hover:opacity-50 " 
							
						
							data-dateID={`${month} ${(i-firstDayIndex)+1}, ${year}`} 
							on:click={selectDate}
							
						>

						{(i - firstDayIndex) + 1} <!--display the day-->
						
						</button>
					{/if}
				{/if}
			{/each}
		</ul>
	</div>
	

</div>
	
{#if showBookModal}
<Modal bind:showModal>

	<h2 slot="header" class="text-center text-sm font-medium">
		{book_date}
	</h2>

	<form on:submit={handleSubmit}>
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
			
			<div>
				<label for="name" class="block mb-2 text-lg font-bold text-black">ISSUE</label>
				<!-- <input type="text-area" bind:value={issue_description}  class="bg-main h-[20vh] border border-secondary text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"> -->
				<textarea bind:value={issue_description} rows="5" class="bg-main border border-secondary text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"></textarea>
			</div>

			<div>
				<label for="name" class="block mb-2 text-lg font-bold text-black">PHONE MODEL</label>
				<select bind:value={cellphone_model} class="bg-main border border-secondary text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
					<option value="Apple">Apple</option>
                    <option value="ASUS">ASUS</option>
                    <option value="Cherry Mobile">Cherry Mobile</option>
					<option value="Huawei">Huawei</option>
                    <option value="Infinix">Infinix</option>
                    <option value="LG">LG</option>
					<option value="Motorola">Motorola</option>
                    <option value="Nokia">Nokia</option>
                    <option value="OPPO">OPPO</option>
					<option value="Realme">Realme</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Tecno">Tecno</option>
					<option value="Torque">Torque</option>
					<option value="Vivo">Vivo</option>
					<option value="Xiaomi">Xiaomi</option>
                    <option value="Other">Other</option>
				</select>



			</div>

			<div class="flex items-center justify-between space-x-4">
				<button type="submit"  class="text-black bg-secondary hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
					Make Appointment
				</button>
				
			</div>

        </div>

    
    </form>

</Modal>
{/if}


				
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
		/* display: inline-block; */
		/* width: 13.6%; */
		/* color: #666; */
		text-align: center;
	}

	/* Days (1-31) */
	.days {
		padding: 10px 0;
		/* background: #eee; */
		margin: 0;
	}

	.days button {
		list-style-type: none;
		/* display: inline-block; */
		/* border: 1px solid black; */
		padding: 9px;
		/* width: 14.28%; */
		text-align: center;
		font-size: 1.2rem;
		
	}
	

	/* Highlight the "current" day */
	/* .active {
		padding: 5px;
		background: #1abc9c;
	} */


</style>


