<script>
  import {fetchAllBook} from "../../hooks/handleBook"
  import { onMount } from "svelte";
  import RepairCount from "./RepairCount.svelte";
import { userName } from "../../hooks/auth"

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

<div class="flex flex-col justify-start items-center w-[93%] ">
  
  <div class="flex flex-col justify-start items-start w-[80%] my-4 gap-2">
    <div>Welcome !</div>
    <div class="text-4xl text-gray-500 font-bold">Dashboard</div> 
  </div>


  <div class="flex justify-between items-center w-[80%] my-4 ">
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