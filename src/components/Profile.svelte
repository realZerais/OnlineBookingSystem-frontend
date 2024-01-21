<script>
  import { onMount } from "svelte";
  import {fetchUserData} from "../hooks/handleUser"

  let data = '';
  let longDate = '';

  onMount(async ()=>{
    data = await fetchUserData();
    const date = new Date(data.registration_date);
    longDate = date.toLocaleDateString();
  })
</script>

<div class="flex flex-col justify-start items-center ml-12 gap-5 h-[100vh]">
  
    <div class="header flex flex-col items-center justify-center h-[10%] w-[100%] rounded-sm text-4xl gap-2">
        <strong class="text-4xl text-mainParagraph tracking-widest ">PROFILE</strong>
        <hr class="border-t-2 border-accent w-6/12 ml-[10%]"> 
    </div>
    
    <!-- Content Container -->
    <div class="flex flex-col  h-[80%] w-[75%] rounded-xl  bg-white text-4xl gap-2 ml-5">
      
      <div class="w-[100%] bg-accent h-[30%] rounded-t-xl">

      </div>

      <!-- Info Container -->
      <div class="h-[100%] w-[100%] flex flex-col justify-center items-center  p-5 gap-2 ">
        <!-- Name Container -->
        <div class="flex flex-col w-[100%] items-center justify-center gap-4 ">
          <h1 class="text-5xl text-main"> {data.full_name}</h1>
          <p class="text-md text-main"> ({data.username})</p>
          
        </div>
        <!-- Contacts Container -->
        <div class="flex h-[100%] w-[100%] justify-around items-center gap-4 ">
          <div class="flex flex-col gap-4 ">
            <button  disabled class="bg-accent h-[75px] w-[200px]  text-2xl font-medium text-center rounded-md">EMAIL</button>
            <p class=" text-xl text-center text-main">{data.email}</p>
            
          </div>
          <div class="flex flex-col gap-4 ">
            <button  disabled class="bg-accent h-[75px] w-[200px] text-2xl font-medium text-center rounded-md">PHONE</button>
            <p class=" text-xl text-center text-main">{data.phone_number}</p>
          </div>
          <div class="flex flex-col gap-4 ">
            <button  disabled class="bg-accent h-[75px] w-[200px] text-2xl font-medium text-center rounded-md">ROLE</button>
            <p class="  text-xl text-center text-main">{data.user_role}</p>
          </div>
          
        </div>

        <div class="flex w-[100%] justify-end  mr-[10%]">
          <p class="text-xl text-main"> Date Created: {longDate}</p>
        </div>
        
    
      </div>
 
    </div>

</div>


<style>



.header{
  visibility: hidden;
  margin-left: -20%;
  animation: to-right .3s linear forwards;
}


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