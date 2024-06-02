<script>
  import {fetchApprovedAppointment} from "../../hooks/handleBook"
  import { onMount } from "svelte";
  import RepairCount from "./RepairCount.svelte";
  import { userName } from "../../hooks/auth"

  let pendingBooks = [];
  let pendingCount = 0;
  let repairingCount = 0;
  let completedCount = 0;

  onMount(async() =>{
    pendingBooks = await fetchApprovedAppointment();
    console.log(pendingBooks);

    pendingBooks.forEach(e => {
      if(e.repair_status_id == 1){
        pendingCount++;
      }
      else if(e.repair_status_id == 2){
        repairingCount++;
      }
      else if(e.repair_status_id == 3){
        completedCount++;
      }
    });

  

  })
</script>

<div class="flex flex-col justify-start items-center w-[93%] ">
  
  <div class="flex flex-col justify-start items-start w-[80%] my-4">
    <div class="font-mono font-semibold text-slate-700">Welcome {$userName}!</div>
    <div class="text-2xl font-bold text-main">Dashboard</div> 
  </div>


  <div class="flex justify-start items-center w-[80%] my-4 gap-8">
    <RepairCount
      title = "PENDING REPAIRS"
      pendingCount = {pendingCount}
    />

    <RepairCount
      title = "ONGOING REPAIRS"
      repairingCount = {repairingCount}
    />

    <RepairCount
      title = "COMPLETED REPAIRS"
      completedCount = {completedCount}
    />
  </div>
  
  


  

  
</div>


<style>


</style>