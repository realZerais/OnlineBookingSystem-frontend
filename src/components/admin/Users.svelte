<script>
  import { onMount } from "svelte";
  import {fetchAllUser} from "../../hooks/handleUser"
  import { getCookieValue } from "../../hooks/auth"
  import UserData from "./UserData.svelte";
  import { format } from 'date-fns';
  
  let users = [];

  
  onMount(async() =>{
    users = await fetchAllUser();
    users.forEach(e => {
            let dateString = e.registration_date;
            let parsedDate = new Date(dateString);
            const formattedDate = format(parsedDate, 'MMMM d, yyyy');
            e.registration_date = formattedDate;
         
        });
    // console.log(users)
    
   
  })
</script>
<div class="flex flex-col w-[93%] justify-start items-center">
  <div class="flex flex-col justify-start items-start w-[80%] my-4">
    <div class="text-2xl font-bold text-main">MANAGE USERS</div> 
  </div>

  <div class="flex items-center justify-center min-h-[450px] mb-4">
  
    <div class="overflow-x-auto overflow-y-auto shadow-md rounded-sm w-[100%] h-[85vh] mt-2">
  
      <table class="min-w-full text-sm text-left text-primary">
        
          <thead class="text-xs text-white uppercase  bg-main ">
          
            <tr>
              <th scope="col" class="py-3 px-6">User</th>
              <th scope="col" class="py-3 px-6">FULL NAME</th>
              <th scope="col" class="py-3 px-6">USER ID</th>
              <th scope="col" class="py-3 px-6">PHONE NUMBER</th>
              <th scope="col" class="py-3 px-6">REGISTERED DATE</th>
              <th scope="col" class="py-3 px-6 ">EMAIL</th>
              <th scope="col" class="py-3 px-6">ROLE</th>
              <th scope="col" class="py-3 px-6"></th>
            </tr>
          </thead>

          <tbody>
            {#each users as user}
              <UserData 
                username = {user.username} 
                full_name = {user.full_name} 
                user_id = {user.user_id}
                phone_number = {user.phone_number} 
                registration_date = {user.registration_date} 
                email = {user.email}
                user_role = {user.user_role}
              />
            {/each}
          </tbody>
      </table>
    </div>

  </div>

</div>





  



<style>



    @keyframes to-right {
       0% {
         visibility: hidden; /* Start with opacity 0 */
       }
       100% {
         visibility: visible;
         margin-left: 0%;
       }
     }


</style>