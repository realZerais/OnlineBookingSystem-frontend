<script>
    import Booking from "$components/user/Booking.svelte";
    import {fetchAllBook} from "../../../../hooks/handleBook"
    import { onMount } from "svelte";

    let bookData = '';
    onMount(async ()=>{
        bookData = await fetchAllBook();
        console.log(bookData);
    })
</script>  

<Booking/>

<div class="flex flex-col justify-start items-center ml-12 gap-5 h-[100vh] ">
   
    <!-- Content Container -->
    <div class="flex flex-col  h-[80%] w-[75%] rounded-xl  bg-white text-4xl gap-2 ml-5">
        <div class="flex flex-col h-[30%] w-[100%] items-center justify-center gap-4  bg-accent">
            <h1 class="text-center text-main">ALL BOOKED DATA</h1>
        </div>

        {#each bookData as books}
            <div class="flex flex-row w-[100%] items-center justify-center gap-2">
                <p class="text-xl text-main"> {books.booking_date} </p>
                <p class="text-xl text-main">  {books.cellphone_model} </p>
                <p class="text-xl text-main"> {books.booking_id} </p>
                <p class="text-xl text-main"> {books.issue_description} </p>
                <p class="text-xl text-main"> {books.repair_status} </p>
            </div>
        {/each}
    </div>
    
</div>



<style>
    

</style>