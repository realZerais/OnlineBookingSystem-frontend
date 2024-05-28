<script>
  import {fetchAllBook} from "../../hooks/handleBook"
  import BookData from "./BookData.svelte"
  import { onMount } from "svelte";
  import { format } from 'date-fns';
  import { paginate, LightPaginationNav } from 'svelte-paginate'


  let books = [];
  let items = [];
  let currentPage = 1
  let pageSize = 2;
  let paginatedItems = [];

  $: updatePaginatedItems = () => {
    paginatedItems = paginate({ items, pageSize, currentPage });
  };

  $: {
    updatePaginatedItems();
  }

  let searchTerm = "";

  // $: searchedItems = books.filter((book) => {
  //   return book.booking_id.includes(searchTerm);
  // })

  // $: console.log(searchedItems);

  onMount(async() =>{
    books = await fetchAllBook();
    books.forEach(e => {
      let dateString = e.booking_date;
      let parsedDate = new Date(dateString);
      const formattedDate = format(parsedDate, 'MMMM d, yyyy');
      e.booking_date = formattedDate;
      
    });
    items = books;
    updatePaginatedItems();

    
    
  })
</script>

<div class="flex flex-col w-[93%] justify-start items-center">
  <div class="flex flex-col justify-start items-start w-[80%] my-4">
    <div class="text-2xl font-bold text-main">MANAGE BOOKINGS</div> 
  </div>

  <div class="flex  flex-col justify-center items-start min-h-[450px] w-[80%] mb-4">
    <input type="text" placeholder="search" class="border-2" bind:value={searchTerm}>
    <div class="flex flex-col justify-between overflow-x-auto overflow-y-auto  shadow-md rounded-sm w-[100%] h-[80vh] mt-2">
  
      <table class="min-w-full text-sm text-left text-primary">
        
          <thead class="text-xs text-white uppercase  bg-main ">
          
            <tr>
              <th scope="col" class="py-3 px-6">BOOKING ID</th>
              <th scope="col" class="py-3 px-6">USER</th>
              <th scope="col" class="py-3 px-6">BOOKING DATE </th>
              <th scope="col" class="py-3 px-6">PHONE MODEL</th>
              <th scope="col" class="py-3 px-6">ISSUE DESCRIPTION</th>
              <th scope="col" class="py-3 px-6 overflow-y-auto">REPAIR STATUS</th>
              <th scope="col" class="py-3 px-6 overflow-y-auto">APPOINTMENT STATUS</th>
              <th scope="col" class="py-3 px-6"></th>
            </tr>
          </thead>

          <tbody>
            {#each paginatedItems as book}
              <BookData 
                user_id = {book.user_id}
                booking_id = {book.booking_id}
                booking_date = {book.booking_date}
                cellphone_model = {book.cellphone_model}
                issue_description = {book.issue_description}
                repair_status = {book.repair_status}
                appointment_status = {book.appointment_status}

              />

              
              
            {/each}
       
          </tbody>
      </table>

      <LightPaginationNav
        totalItems="{items.length}"
        pageSize="{pageSize}"
        currentPage="{currentPage}"
        limit="{1}"
        showStepOptions="{true}"
        on:setPage="{(e) => currentPage = e.detail.page}"
      />
    </div>

  </div>

</div>


<style>


</style>