<script>
    import Booking from "$components/user/Booking.svelte";
    import AllBooked from "$components/AllBooked.svelte";
    import {fetchAllBook} from "../../../../hooks/handleBook";
    import { onMount } from "svelte";

    let bookData = '';
   
    onMount(async ()=>{
        bookData = await fetchAllBook();

        for(const bookDatas of bookData){
            // console.log(bookDatas);

            const date = new Date(bookDatas.booking_date);
            bookDatas.booking_date = date.toLocaleDateString();
            console.log(bookDatas.booking_date);
        }
        
       
    })
</script>  

<Booking/>
<AllBooked/>






<style>
    

</style>