<script>
    import Calendar from "$components/Calendar.svelte";

    import {fetchAllBook} from "../../../../hooks/handleBook";
    import { onMount } from "svelte";
    import { format } from 'date-fns';
    import { writable } from "svelte/store";

    let scheduleArray = writable([]);
    let allBooks = [];

    
    let books = [];

    async function fetchAllBookData() {

        books = await fetchAllBook();
	
        // schedule = books;

        books.forEach(e => {
            let dateString = e.booking_date;
            let parsedDate = new Date(dateString);
            const formattedDate = format(parsedDate, 'MMMM d, yyyy');
            allBooks.push(formattedDate)
         
        });

        scheduleArray.set(allBooks);
        console.log("scheduleArray:", scheduleArray)
        // console.log(scheduleArray.includes('May_23_2024'))
        // console.log(schedule)

   
    }

	onMount(async() =>{
		
        fetchAllBookData();
       
    });

    
   

  
  
</script>  

<div class="flex flex-col w-[93%] justify-start items-center"> 
    <div class="flex flex-col justify-start items-start w-[80%] my-4">
        
        <div class="text-2xl font-bold text-main">Booking</div> 
    </div>

    {#await $scheduleArray}
        <h1>
            loading calendar...
        </h1>
    {:then $scheduleArray} 
        <Calendar
        scheduleArray = {$scheduleArray}/>
    {:catch error}
        <p>Error fetching data: {error.message}</p>
    {/await}


</div>
   
 









<style>
    

</style>