<script>
    import Calendar from "$components/Calendar.svelte";

    import {fetchAllBook} from "../../../../hooks/handleBook";
    import { onMount } from "svelte";
    import { format, parseISO } from 'date-fns'

    let scheduleArray = [];

    
    let books = [];
	onMount(async() =>{
		books = await fetchAllBook();
	
        // schedule = books;

        books.forEach(e => {
            let inputDate = e.booking_date;
            let parsedDate = parseISO(inputDate);
            const formattedDate = format(parsedDate, 'MMMM_dd_yyyy');
            const newDate = formattedDate.toString()
            scheduleArray.push(newDate)
         
        });
        console.log("schedule", scheduleArray)
        // console.log(schedule)


       
    });
   

  
  
</script>  

<div class="flex flex-col w-[93%] justify-start items-center"> 
    <div class="flex flex-col justify-start items-start w-[80%] my-4">
        
        <div class="text-2xl font-bold text-main">Booking</div> 
    </div>

    <Calendar/>
</div>
   
 









<style>
    

</style>