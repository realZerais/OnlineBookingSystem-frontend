<script>
  import { onMount } from "svelte";
  import {fetchPendingAppointments} from "../../hooks/handleBook"
  import PendingAppointments from "./PendingAppointments.svelte";
  import { format } from 'date-fns';
  import { paginate, LightPaginationNav } from 'svelte-paginate'



  $: pendingApts = [];

  $: items = pendingApts;
  let currentPage = 1
  let pageSize = 7;
  let paginatedItems = [];

  $: updatePaginatedItems = () => {
    paginatedItems = paginate({ items, pageSize, currentPage });
  };

  $: {
    updatePaginatedItems();
  }

  

  $: console.log(pendingApts)
  const handleDelete = ( bookID) => {
    pendingApts = pendingApts.filter(pendingApt => pendingApt.book_id != bookID)
  }

  onMount(async() =>{
    pendingApts = await fetchPendingAppointments();

    pendingApts.forEach(e => {
        let dateString = e.book_date;
        let parsedDate = new Date(dateString);
        const formattedDate = format(parsedDate, 'MMMM d, yyyy');
        e.book_date = formattedDate;
         
    });

    // console.log(pendingApts)
    updatePaginatedItems();

  })
</script>

<div class="flex flex-col w-[93%] justify-between items-center h-[100vh] p-4"> 
  <div class="flex flex-col justify-start items-start w-[80%] my-4">
   
    <div class="text-2xl font-bold text-main">Appointments</div> 
  </div>


  

  {#if pendingApts.length == 0}

    <div class="flex flex-col justify-center items-start w-[80%] my-4 ">
   
      <div class="text-xl font-bold text-main">No Pending Appointments Yet...</div> 
    </div>
  {:else}
    <div class="flex flex-col justify-start items-start w-[80%] my-4 gap-2">

      {#each paginatedItems as pendingApt}
        <PendingAppointments
          username = {pendingApt.username}
          book_date = {pendingApt.book_date}
          book_id = {pendingApt.book_id}
          cellphone_model = {pendingApt.cellphone_model}
          issue_description = {pendingApt.issue_description}
          handleDelete = {handleDelete}
        />
      {/each}
    </div>

     
  {/if}
  <LightPaginationNav
        totalItems="{items.length}"
        pageSize="{pageSize}"
        currentPage="{currentPage}"
        limit="{1}"
        showStepOptions="{true}"
        on:setPage="{(e) => currentPage = e.detail.page}"
      /> 
</div>


<style>




</style>