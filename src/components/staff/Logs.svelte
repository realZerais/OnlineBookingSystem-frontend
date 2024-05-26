<script>
  import {fetchApproveAppointments} from '../../hooks/handleBook';
  import { onMount } from "svelte";
  import { format } from 'date-fns';
  import { writable } from "svelte/store";


  let books = [];


  onMount(async() =>{
    books = await fetchApproveAppointments();
    books.forEach(e => {
      let dateString = e.booking_date;
      let parsedDate = new Date(dateString);
      const formattedDate = format(parsedDate, 'MMMM d, yyyy');
      e.booking_date = formattedDate;
      
    });
    
  })

</script>

<div class="flex flex-col w-[93%] justify-start items-center"> 
  <div class="flex flex-col justify-start items-start w-[80%] my-4">
   
    <div class="text-2xl font-bold text-main">Logs</div> 
  </div>
  
  <div class="flex flex-row justify-center items-start w-[80%] my-4">
   
    <div class="text-xl font-semibold text-main">Appointments</div> 
  </div>


  <!--LOGS TABLE-->
  <div class="flex items-center justify-center min-h-[450px] mb-4">
  
    <div class="overflow-x-auto overflow-y-auto  shadow-md rounded-sm w-[100%] h-[75vh] mt-2">
  
      <table class="min-w-full text-sm text-left text-primary">
        
        <thead class="text-xs text-white uppercase  bg-main ">
        
          <tr>
            <th scope="col" class="py-3 px-6">BOOK ID</th>
            <th scope="col" class="py-3 px-6">USER</th>
            <th scope="col" class="py-3 px-6">BOOKING DATE </th>
            <th scope="col" class="py-3 px-6">PHONE MODEL</th>
            <th scope="col" class="py-3 px-6">ISSUE DESCRIPTION</th>
            <th scope="col" class="py-3 px-6 overflow-y-auto">APPOINTMENT STATUS</th>
            <th scope="col" class="py-3 px-6"></th>
          </tr>
        </thead>

        <tbody>
          {#each books as book}
            <tr class="bg-white border-b">
              <td class="py-4 px-6 ">{book.booking_id}</td>
              <td class="py-4 px-6">{book.user_id}</td>
              <td class="py-4 px-6">{book.booking_date}</td>
              <td class="py-4 px-6">{book.cellphone_model}</td>
              <td class="py-4 px-6">{book.issue_description}</td>
              <td class="py-4 px-6"><span class=" rounded-full py-2 px-6 text-accent bg-main">{book.appointment_status}</span></td>
            </tr>
          {/each}
        </tbody>

      </table>
    </div>

  </div>


</div>
