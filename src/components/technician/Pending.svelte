<script>
  import { onMount } from "svelte";
  import PendingRepairs from "./PendingRepairs.svelte";
  import { format } from 'date-fns';
  import {fetchPendingRepairs} from "../../hooks/handleBook"

  let pendingBooks = [];

  onMount(async() =>{
    pendingBooks = await fetchPendingRepairs();

    pendingBooks.forEach(e => {
        let dateString = e.book_date;
        let parsedDate = new Date(dateString);
        const formattedDate = format(parsedDate, 'MMMM d, yyyy');
        e.book_date = formattedDate;
        
      });
    // console.log(pendingBooks)
    
    
  })
</script> 


<div class="flex flex-col w-[93%] justify-start items-center">
  <div class="flex flex-col justify-start items-start w-[80%] my-4  gap-2 ">
    <div class="text-2xl font-bold text-main">Pending Repairs</div>
  </div>
  
  <div class="flex flex-col justify-start items-start w-[80%] my-4 gap-2">
    
    

    {#if pendingBooks == 0}
      <div class="text-lg font-semibold text-main">No Pending Repairs Yet...</div> 
    {:else}

      {#each pendingBooks as pendingBook}
        <PendingRepairs
          book_date = {pendingBook.book_date}
          book_id = {pendingBook.book_id}
          cellphone_model = {pendingBook.cellphone_model}
          issue_description = {pendingBook.issue_description}
          username = {pendingBook.username}
          remark = {pendingBook.remark}
        />
      {/each}
    {/if}

    
  </div>

</div>


<style>

    
  




</style>