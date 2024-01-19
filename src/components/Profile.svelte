<script>
  import { onMount } from "svelte";
  import {fetchUserData} from "../hooks/handleUser"

  let data = ''
  onMount(async ()=>{
    data = await fetchUserData();
    console.log(data)
  })
</script>

<div class="body">
  
    <div class="header flex flex-col self-start rounded-3xl w-[100%] h-[100%] p-8 pb-14 justify-center gap-y-5 ">
        <strong class="text-6xl text-mainParagraph tracking-widest ml-[9%]">PROFILE</strong>
        <hr class="border-t-2 border-accent w-6/12 ml-[9%]"> 
        
    </div>

    <div class="content flex justify-center items-center row-span-2 w-[100%]">
        <div class="flex flex-col justify-around items-center w-[80%] h-[90%] bg-mainParagraph  border-black border-2 shadow-leftbottom ml-[3%]">
                <h1 class="text-4xl">THIS IS PROFILE</h1>
                <h1>Username: {data.username}</h1>
                <h1>Full Name: {data.full_name}</h1>
                <h1>Email: {data.email}</h1>
                <h1>Contact Number: {data.phone_number}</h1>
                <h1>Registered On: {data.registration_date}</h1>
            
                
        </div>
    </div>

</div>


<style>

.body{
  display: grid;
  background-color: #004647;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 120px 1fr ;   
  
}

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