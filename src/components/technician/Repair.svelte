<script>
  import { onMount } from "svelte";
  import PendingRepairs from "./PendingRepairs.svelte";

  import {fetchPendingBook} from "../../hooks/handleBook"

  let pendingBooks = [];

  onMount(async() =>{
    pendingBooks = await fetchPendingBook();

    console.log(pendingBooks)
    
    
  })
</script> 


<div class="flex flex-col w-[93%] justify-start items-center">
  <div class="flex flex-col justify-start items-start w-[80%] my-4 gap-2">
    <div class="text-4xl text-gray-500 font-bold capitalize">Pending Repairs</div> 
  </div>
  
  <div class="flex flex-col justify-start items-start w-[80%] my-4 gap-2">
    

    {#each pendingBooks as pendingBook}
      <PendingRepairs
        booking_date = {pendingBook.booking_date}
        booking_id = {pendingBook.booking_id}
        cellphone_model = {pendingBook.cellphone_model}
        issue_description = {pendingBook.issue_description}
        user_id = {pendingBook.user_id}
        repair_status = {pendingBook.repair_status}
      />
    {/each}
  </div>

</div>


<style>

    
  




</style>