<script>
  import { onMount } from "svelte";
  import OngoingRepairs from "./OngoingRepairs.svelte";

  import {fetchRepairingBook} from "../../hooks/handleBook"

  let repairingBooks = [];

  onMount(async() =>{
    repairingBooks = await fetchRepairingBook();

    console.log(repairingBooks)
    
    
  })
</script> 


<div class="flex flex-col justify-start items-center w-[93%] ">
  <div class="flex flex-col justify-start items-start w-[80%] my-4  gap-2 ">
    <div class="text-2xl font-bold text-main">Ongoing Repairs</div>
  </div>

  <div class="flex flex-col justify-start items-start w-[80%] my-4 gap-2">

    {#each repairingBooks as repairingBook}
    <OngoingRepairs
  
  
      booking_date = {repairingBook.booking_date}
      booking_id = {repairingBook.booking_id}
      cellphone_model = {repairingBook.cellphone_model}
      issue_description = {repairingBook.issue_description}
      user_id = {repairingBook.user_id}
      repair_status = {repairingBook.repair_status}
      />
    {/each}
  
  
  </div>
</div>







<style>


</style>