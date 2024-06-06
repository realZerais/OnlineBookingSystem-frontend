<script>
  import { onMount } from "svelte";
  import {fetchAllUser} from "../../hooks/handleUser"
  import {fetchSearchedUsers} from "../../hooks/handleUser"
  import UserData from "./UserData.svelte";
  import { format } from 'date-fns';
  import { paginate, LightPaginationNav } from 'svelte-paginate'


  let users = [];
  $: items = users;
  let currentPage = 1
  let pageSize = 6
  let paginatedItems = [];
  

  $: updatePaginatedItems = () => {
    paginatedItems = paginate({ items, pageSize, currentPage });
  };

  $: {
    updatePaginatedItems();
  }

 
  let searchTerm = "";

  const searchUser = async ()=>{
    users = await fetchSearchedUsers(searchTerm);
    users.forEach(e => {
        let dateString = e.registration_date;
        let parsedDate = new Date(dateString);
        const formattedDate = format(parsedDate, 'MMMM d, yyyy');
        e.registration_date = formattedDate;
      
    });

    // console.log(users);
    // items = users;
  }
  
  const reset = async() =>{
    searchTerm = "";
    users = await fetchAllUser();
    users.forEach(e => {
        let dateString = e.registration_date;
        let parsedDate = new Date(dateString);
        const formattedDate = format(parsedDate, 'MMMM d, yyyy');
        e.registration_date = formattedDate;
      
    });

    // items = users;
    updatePaginatedItems();
  }

  onMount(async() =>{
    users = await fetchAllUser();
    users.forEach(e => {
        let dateString = e.registration_date;
        let parsedDate = new Date(dateString);
        const formattedDate = format(parsedDate, 'MMMM d, yyyy');
        e.registration_date = formattedDate;
      
    });

    // items = users;
    updatePaginatedItems();

  
    
   
  })


</script>
<div class="flex flex-col w-[93%] justify-start items-center">
  <div class="flex flex-col justify-start items-start w-[80%] my-4">
    <div class="text-2xl font-bold text-main">MANAGE USERS</div> 
  </div>

  <div class="flex  flex-col justify-center items-start min-h-[450px] w-[80%] mb-4">

    <div class="flex gap-4">
      <input type="text" placeholder="username" class="border-2 p-2 border-secondary rounded-md" bind:value={searchTerm}>
      <button on:click={searchUser} class="rounded-lg border-2 p-2 border-secondary hover:bg-accent">Search</button>
      <button on:click={reset} class="rounded-lg border-2 p-2 border-accent hover:bg-secondary">Reset</button>
    </div>


    <div class="flex flex-col justify-between overflow-x-auto overflow-y-auto shadow-md rounded-sm w-[100%] h-[80vh] mt-2">
   
      <table class="min-w-full text-sm text-left text-primary">
          
          <thead class="text-xs text-white uppercase  bg-main ">
          
            <tr>
              <th scope="col" class="py-3 px-6">USERNAME</th>
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
            {#if users.length == 0}
              <h1 class="font-semibold text-xl m-9">no user found...</h1>
              
            {:else}

            {#each paginatedItems as user}
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
            {/if}


         
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