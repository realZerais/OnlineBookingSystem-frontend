<script>
  import { onMount } from "svelte";
  import PendingRepairs from "./PendingRepairs.svelte";
  import { format } from 'date-fns';
  import {fetchPendingRepairs} from "../../hooks/handleBook"
  import { paginate, LightPaginationNav } from 'svelte-paginate'

  $: pendingBooks = [];

  $: items = pendingBooks;
  let currentPage = 1
  let pageSize = 7;
  let paginatedItems = [];

  $: updatePaginatedItems = () => {
    paginatedItems = paginate({ items, pageSize, currentPage });
  };

  $: {
    updatePaginatedItems();
  }

  const handleDelete = ( bookID) => {
    pendingBooks = pendingBooks.filter(pendingBook => pendingBook.book_id != bookID)
  }

  onMount(async() =>{
    pendingBooks = await fetchPendingRepairs();

    pendingBooks.forEach(e => {
        let dateString = e.book_date;
        let parsedDate = new Date(dateString);
        const formattedDate = format(parsedDate, 'MMMM d, yyyy');
        e.book_date = formattedDate;
        
      });
    // console.log(pendingBooks)
    updatePaginatedItems();
    
    
  })
</script> 


<div class="flex flex-col w-[93%] justify-between items-center h-[100vh] p-4">
  <div class="flex flex-col justify-start items-start w-[80%] my-4  gap-2 ">
    <div class="text-2xl font-bold text-main">Pending Repairs</div>
  </div>
  
  <div class="flex flex-col justify-start items-start w-[80%] my-4 gap-2">
    
    

    {#if pendingBooks == 0}
      <div class="text-lg font-semibold text-main">No Pending Repairs Yet...</div> 
    {:else}

      {#each paginatedItems as pendingBook}
        <PendingRepairs
          book_date = {pendingBook.book_date}
          book_id = {pendingBook.book_id}
          cellphone_model = {pendingBook.cellphone_model}
          issue_description = {pendingBook.issue_description}
          username = {pendingBook.username}
          remark = {pendingBook.remark}
          handleDelete = {handleDelete}
        />
      {/each}
    {/if}

    
  </div>

  <LightPaginationNav
        totalItems="{items.length}"
        pageSize="{pageSize}"
        currentPage="{currentPage}"
        limit="{1}"
        showStepOptions="{true}"
        on:setPage="{(e) => currentPage = e.detail.page}"
      />

</div>
