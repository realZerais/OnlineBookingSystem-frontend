<script>
    
    import {fetchAllBook} from "../hooks/handleBook";
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


<div class="flex flex-col justify-start items-center ml-12 gap-5 h-[100vh] mt-2">
    <div class="flex flex-col  h-[90vh] w-[75%]   bg-white text-4xl gap-2 ml-5 gap-y-5 pb-7">

        <div class="flex flex-col h-[15%] w-[100%] items-center justify-center gap-4  bg-accent">
            <h1 class="text-center text-main font-bold">ALL BOOKED DATA</h1>
        </div>

        <table class="h-[85%]">
            <tr class="text-3xl font-bakbak">
              <th>ID</th>
              <th>DATE</th>
              <th>MODEL</th>
              <th>DESCRIPTION</th>
              <th>STATUS</th>
            </tr>
            {#each bookData as books}
            <tr class="text-center">
              <td>{books.booking_id}</td>
              <td>{books.booking_date} </td>
              <td>{books.cellphone_model}</td>
              <td>{books.issue_description}</td>
              <td>{books.repair_status}</td> 
            </tr>
            {/each}
        </table>
    </div>
    
</div>




<style>
    

</style>