<script>
  import { onMount } from "svelte";
  import {fetchPendingAppointments} from "../../hooks/handleBook"
  import PendingAppointments from "./PendingAppointments.svelte";
  import { format } from 'date-fns';

  let pendingApts = [];

  onMount(async() =>{
    pendingApts = await fetchPendingAppointments();

    pendingApts.forEach(e => {
        let dateString = e.booking_date;
        let parsedDate = new Date(dateString);
        const formattedDate = format(parsedDate, 'MMMM d, yyyy');
        e.booking_date = formattedDate;
         
    });

    console.log(pendingApts)

  })
</script>

<div class="flex flex-col w-[93%] justify-start items-center"> 
  <div class="flex flex-col justify-start items-start w-[80%] my-4">
   
    <div class="text-2xl font-bold text-main">Appointments</div> 
  </div>

  

  {#if pendingApts.length == 0}

    <div class="flex flex-col justify-center items-center w-[80%] my-4 ">
   
      <div class="text-xl font-bold text-main">No Pending Appointments Yet...</div> 
    </div>
  {:else}
    <div class="flex flex-col justify-start items-start w-[80%] my-4 gap-2">
      {#each pendingApts as pendingApt}
        <PendingAppointments
          booking_date = {pendingApt.booking_date}
          booking_id = {pendingApt.booking_id}
          cellphone_model = {pendingApt.cellphone_model}
          issue_description = {pendingApt.issue_description}
          user_id = {pendingApt.user_id}
          repair_status = {pendingApt.repair_status}
        />
      {/each}
    </div>
    {/if}
</div>
<style>




</style>