<script>
  import {fetchAllBook} from "../../hooks/handleBook"
  import BookData from "./BookData.svelte"
  import { onMount } from "svelte";


  let books = [];

  onMount(async() =>{
    books = await fetchAllBook();

    console.log(books)
    
    
  })
</script>

<div class="flex flex-col w-[93%] justify-start items-center">
  <div class="w-[100%] text-center h-10 bg-blue-100">MANAGE BOOKINGS</div>

  <div class="flex items-center justify-center min-h-[450px] mb-4">
  
    <div class="overflow-x-auto overflow-y-auto  shadow-md rounded-sm w-[90%] h-[85vh] mt-2">
  
      <table class="min-w-full text-sm text-left text-primary">
        
          <thead class="text-xs text-white uppercase  bg-main ">
          
            <tr>
              <th scope="col" class="py-3 px-6">BOOKING ID</th>
              <th scope="col" class="py-3 px-6">USER</th>
              <th scope="col" class="py-3 px-6">BOOKING DATE </th>
              <th scope="col" class="py-3 px-6">PHONE MODEL</th>
           
              <th scope="col" class="py-3 px-6">ISSUE DESCRIPTION</th>
              <th scope="col" class="py-3 px-6 overflow-y-auto">REPAIR STATUS</th>
              <th scope="col" class="py-3 px-6"></th>
            </tr>
          </thead>

          <tbody>
            {#each books as book}
              <BookData 
                user_id = {book.user_id}
                booking_id = {book.booking_id}
                booking_date = {book.booking_date}
                cellphone_model = {book.cellphone_model}
                issue_description = {book.issue_description}
                repair_status = {book.repair_status}

              />
              
            {/each}
       
          </tbody>
      </table>
    </div>

  </div>

</div>


<style>


</style>