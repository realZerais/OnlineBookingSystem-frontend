<script>
  import { onMount } from "svelte";
  import {fetchAllUser} from "../../hooks/handleUser"
  import { getCookieValue } from "../../hooks/auth"
  
  let users = [];

  let user_role = '';
  let username = '';

  function handleUserRoleChange(event) {
    user_role = event.target.value;
    console.log(user_role);
  }
  function handleUserNameChange(event){
    username = event.target.innerHTML;
    console.log(username)
  }

  const editRole = async () =>{
    const data = JSON.stringify({
      username,
      user_role,
      
    })
    try {
        const accessToken = getCookieValue('accessToken');
        const apiUrl = 'http://localhost:9000/user/editUserRole';

        const response = await fetch(apiUrl, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`
          },
          body: data,
        });

        if (!response.ok) {
            const errorData = await response.json();
            const { error } = errorData;
            console.log(error);
            alert(error);
            location.reload()
            // throw new Error('Network response was not ok');
        }

        // Handle the data
        location.reload()

    } catch (error) {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  onMount(async() =>{
    users = await fetchAllUser();
  
    console.log(users)
    
   
  })
</script>

<div class="flex flex-col justify-start items-center ml-12 gap-5 pb-10 pt-5 ">
  

  <div class="header flex flex-col items-center justify-center h-[10%] w-[100%] rounded-sm text-4xl gap-2">
    <strong class="text-4xl text-mainParagraph tracking-widest ml-[10%]">Manage Roles</strong>
    <hr class="border-t-2 border-accent w-6/12 ml-[10%]"> 
  </div>

  

  <div class="flex flex-col  h-[80%] w-[75%] rounded-xl  bg-white text-4xl gap-4 ml-5">
   

    <!-- HEADER CONTAINER -->
    <div class="flex justify-around items-center h-[20%] w-[100%] rounded-t-xl  bg-accent gap-4  p-4 text-2xl text-main font-semibold text-center">
      
      <h1 class="w-[40%] ml-5 ">USERNAME</h1>
      <h1 class="w-[20%] ">ROLE</h1>
      <div class="w-[20%] "></div>
    
    
    </div>

     <!-- CONTENT CONTAINER -->
    <div class="flex flex-col w-[100%] justify-around items-center gap-4 p-4 mb-4">
      {#each users as user}
        <div class="flex h-[15vh] w-[100%] justify-around items-center bg-main rounded-lg">
          <div class="w-[40%]">
            <h1 bind:innerHTML={user.username} on:change={handleUserNameChange} contenteditable="false" class="text-center text-2xl text-white font-semibold">{user.username}</h1>
          </div>
          <select bind:value={user.user_role} on:change={handleUserRoleChange} class=" w-[40%]rounded-lg text-center text-2xl text-main font-semibold rounded-md ">
            
              <!-- <option value="{user.user_role}" selected disabled hidden>{user.user_role}</option> -->
              <option  value="admin">admin</option>
              <option  value="user">user</option>   
              <option  value="staff">staff</option>
              <option  value="technician">technician</option>
            
          </select>

          <div class="w-[20%]">
            <button on:click={editRole}  class="cursor-pointer transition-all bg-accent text-main text-lg font-bold px-6 py-2 rounded-lg border-secondary border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" >
              Save Change
            </button>
          </div>
        
        
        </div>
      {/each}
      
    </div>
    
    
    <!-- <div class="flex items-center justify-around h-[20vh] w-[100%] rounded-xl bg-main text-white gap-6 relative">
      <p >{username} </p>

      
      
    </div> -->

    </div>
      
    
    
    

    

    
    


</div>
<style>

  .header{
      visibility: hidden;
      margin-left: -20%;
      animation: to-right .5s linear forwards;
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