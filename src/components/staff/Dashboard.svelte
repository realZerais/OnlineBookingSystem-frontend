<script>
  import {fetchAllBook} from "../../hooks/handleBook"
  import { onMount } from "svelte";
  import AppointmentCount from "./AppointmentCount.svelte";
  import { userName } from "../../hooks/auth"


  let pendingApts = [];
  let pendingCount = 0;
  let approvedCount = 0;

  onMount(async() =>{
    pendingApts = await fetchAllBook();

    pendingApts.forEach(e => {
      if(e.appointment_status == "Pending"){
        pendingCount++;
      }
      else if(e.appointment_status == "Approved"){
        approvedCount++;
      }
    });

  })
</script>

<div class="flex flex-col w-[93%] justify-start items-center"> 
  <div class="flex flex-col justify-start items-start w-[80%] my-4">
    <div class="font-mono font-semibold text-slate-700">Welcome {$userName}!</div>
    <div class="text-2xl font-bold text-main">Dashboard</div> 
  </div>

  <div class="flex justify-start items-center w-[80%] my-4 gap-8 ">
    <AppointmentCount
      title = "PENDING APPOINTMENTS"
      pendingCount = {pendingCount}
    />

    <AppointmentCount
      title = "APPROVED APPOINTMENTS"
      approvedCount = {approvedCount}
    />


  </div>



</div>
