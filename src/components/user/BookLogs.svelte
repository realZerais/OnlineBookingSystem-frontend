<script>
    import {fetchUserBooks} from '../../hooks/handleUser';
    import {fetchUserData} from '../../hooks/handleUser'
    import { onMount } from "svelte";
    import { format } from 'date-fns';

    let books = [];
    let user = '';
  
  
  onMount(async() =>{
    user = await fetchUserData();
    books = await fetchUserBooks(user.user_id);

    books.forEach(e => {
      let dateString = e.book_date;
      let parsedDate = new Date(dateString);
      const formattedDate = format(parsedDate, 'MMMM d, yyyy');
      e.book_date = formattedDate;
      
    });

    console.log(books)
    
  })
</script>

<!--LOGS TABLE-->
<div class="flex items-center justify-center min-h-[450px] mb-4 ">

<div class="overflow-x-auto overflow-y-auto  shadow-md rounded-sm w-[100%] h-[75vh] mt-2">

  <table class="min-w-full text-sm text-left text-primary">
    
    <thead class="text-xs text-slate-800 uppercase bg-secondary border-2 border-main rounded-md ">
    
      <tr>
        <th scope="col" class="py-3 px-6">BOOK ID</th>
        <th scope="col" class="py-3 px-6">USER</th>
        <th scope="col" class="py-3 px-6">BOOKING DATE </th>
        <th scope="col" class="py-3 px-6">PHONE MODEL</th>
        <th scope="col" class="py-3 px-6">ISSUE DESCRIPTION</th>
        <th scope="col" class="py-3 px-6 overflow-y-auto">REPAIR STATUS</th>
        <th scope="col" class="py-3 px-6"></th>
      </tr>
    </thead>

    {#if books.length == 0}
      <div class="text-lg font-semibold text-main">No Repairs Yet...</div> 

    {:else}
      <tbody>
          {#each books as book}
          <tr class="bg-white border-b">
              <td class="py-4 px-6 ">{book.book_id}</td>
              <td class="py-4 px-6">{book.user_id}</td>
              <td class="py-4 px-6">{book.book_date}</td>
              <td class="py-4 px-6">{book.cellphone_model}</td>
              <td class="py-4 px-6">{book.issue_description}</td>
              <td class="py-4 px-6"><span class=" rounded-full py-2 px-6 text-accent bg-main">{book.repair_status}</span></td>
          </tr>
          {/each}
      </tbody>
    {/if}
    

  </table>
</div>

</div>



<style>




</style>