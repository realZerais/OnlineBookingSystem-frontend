<script>
  import { onMount } from "svelte";
  import {fetchUserData} from "../hooks/handleUser"
  import { format } from 'date-fns';

  let user = '';
  let longDate = '';

  onMount(async ()=>{
    user = await fetchUserData();
    let dateString = user.registration_date;
    let parsedDate = new Date(dateString);
    const formattedDate = format(parsedDate, 'MMMM d, yyyy');
    user.registration_date = formattedDate;

    console.log(user);
  })
</script>


<div class="flex flex-col justify-start items-center w-[93%] ">
 

  <div class="flex flex-col justify-start items-start w-[80%] my-4  gap-2 ">
    <div class="text-2xl font-bold text-main">Profile</div>
  </div>

  <div class="flex flex-col justify-start items-start w-[80%] my-4  gap-2 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900 capitalize ">
        {user.full_name}
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        Account Details
      </p>
    </div>

    
    <div class="flex items-center bg-secondary px-4 py-5 w-[100%] h-[10vh]">
      <dt class="w-1/2 text-sm font-medium text-gray-800">
        Username
      </dt>
      <dd class="w-1/2 mt-1 text-sm text-gray-900 ">
        {user.username}
      </dd>
    </div>

    <div class="flex items-center bg-white px-4 py-5 w-[100%] h-[10vh]">
        <dt class="w-1/2 text-sm font-medium text-gray-800">
          Role
        </dt>
        <dd class="w-1/2  mt-1 text-sm text-accent ">
          {user.user_role}
        </dd>
    </div>

    <div class="flex items-center bg-secondary px-4 py-5 w-[100%] h-[10vh]">
        <dt class="w-1/2 text-sm font-medium text-gray-800">
          Email address
        </dt>
        <dd class="w-1/2 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {user.email}
        </dd>
    </div>

    <div class="flex bg-white px-4 py-5 w-[100%]">
        <dt class="w-1/2  text-sm font-medium text-gray-800">
          Phone Number
        </dt>
        <dd class="w-1/2  mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {user.phone_number}
        </dd>
    </div>
    <div class="flex items-center bg-secondary px-4 py-5 w-[100%]  h-[10vh]">
        <dt class=" w-1/2 text-sm font-medium text-gray-800">
          Date Created
        </dt>
        <dd class="w-1/2 mt-1 text-sm text-gray-900 ">
          {user.registration_date}
        </dd>
    </div>
  

  </div>
</div>
