<script>
  import {fetchAllBook} from "../../hooks/handleBook"
  import { onMount } from "svelte";
  import RepairCount from "./RepairCount.svelte";

  let pendingBooks = [];
  let pendingCount = 0;
  let repairingCount = 0;
  let doneCount = 0;

  onMount(async() =>{
    pendingBooks = await fetchAllBook();
    console.log(pendingBooks);

    pendingBooks.forEach(e => {
      if(e.repair_status == "Pending"){
        pendingCount++;
      }
      else if(e.repair_status == "Repairing"){
        repairingCount++;
      }
      else if(e.repair_status == "Done"){
        doneCount++;
      }
    });

  })
</script>

<div class="flex flex-col justify-start items-start w-[93%] ">
  <div class="w-[100%] text-center h-[10vh]  bg-blue-100">DASHBOARD</div>

  <div class="flex justify-center w-[100%] ">
    <RepairCount
      title = "PENDING REPAIRS"
      pendingCount = {pendingCount}
    />

    <RepairCount
      title = "ONGOING REPAIRS"
      repairingCount = {repairingCount}
    />

    <RepairCount
      title = "DONE REPAIRS"
      doneCount = {doneCount}
    />
  </div>
  
  


  

  
</div>


<style>


</style>