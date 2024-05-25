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
            let dateString = e.booking_date;
            let parsedDate = new Date(dateString);
            const formattedDate = format(parsedDate, 'MMMM d, yyyy');
            scheduleArray.push(formattedDate)
         
        });
        console.log("scheduleArray:", scheduleArray)
        // console.log(scheduleArray.includes('May_23_2024'))
        // console.log(schedule)


       
    });
   

  
  
</script>  

<div class="flex flex-col w-[93%] justify-start items-center"> 
    <div class="flex flex-col justify-start items-start w-[80%] my-4">
        
        <div class="text-2xl font-bold text-main">Booking</div> 
    </div>

    <Calendar
    scheduleArray = {scheduleArray}/>
</div>
   
 









<style>
    

</style>