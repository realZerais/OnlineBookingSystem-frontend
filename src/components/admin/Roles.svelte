<script>
  import { onMount } from "svelte";
  
  let username = 'test';

  const editRole = () =>{
    
  }
  
  onMount(async() =>{

  })
</script>

<div class="flex flex-col justify-start items-center p-2 ml-10 mt-4 gap-4">

  <div class="header flex items-center justify-center h-[10vh] w-[95%] rounded-sm  bg-slate-100 text-4xl">
    <h1>MANAGE ROLES</h1>
  </div>

  

  <div class="flex flex-col  items-start justify-start p-5  w-[95%] rounded-xl  bg-white text-4xl gap-5">
   
    <div class="flex items-center justify-between w-[100%] gap-2 p-6">
      <h1 class=" text-left">USERS:</h1>
      <button on:click={editRole}>save changes</button>
    </div>
  

    
    <div class="flex items-center justify-around h-[20vh] w-[100%] bg-amber-200">
      <p>username: {username} </p>

      <div>
        <label for="cars">Role:</label>
        <select name="cars" id="cars">
          <option value="volvo">admin</option>
          <option value="saab">user</option>
          <option value="technician">Mercedes</option>
          <option value="staff">Audi</option>
        </select>
      </div>
      
    </div>
 
    <div class="flex items-center justify-around h-[20vh] w-[100%] bg-amber-200">
      <p>username: {username} </p>

      <div>
        <label for="cars">Role:</label>
        <select name="cars" id="cars">
          <option value="volvo">admin</option>
          <option value="saab">user</option>
          <option value="technician">Mercedes</option>
          <option value="staff">Audi</option>
        </select>
      </div>
      
    </div>

    <div class="flex items-center justify-around h-[20vh] w-[100%] bg-amber-200">
      <p>username: {username} </p>

      <div>
        <label for="cars">Role:</label>
        <select name="cars" id="cars">
          <option value="volvo">admin</option>
          <option value="saab">user</option>
          <option value="technician">Mercedes</option>
          <option value="staff">Audi</option>
        </select>
      </div>
      
    </div>

    <div class="flex items-center justify-around h-[20vh] w-[100%] bg-amber-200">
      <p>username: {username} </p>

      <div>
        <label for="cars">Role:</label>
        <select name="cars" id="cars">
          <option value="volvo">admin</option>
          <option value="saab">user</option>
          <option value="technician">Mercedes</option>
          <option value="staff">Audi</option>
        </select>
      </div>
      
    </div>

    <div class="flex items-center justify-around h-[20vh] w-[100%] bg-amber-200">
      <p>username: {username} </p>

      <div>
        <label for="cars">Role:</label>
        <select name="cars" id="cars">
          <option value="volvo">admin</option>
          <option value="saab">user</option>
          <option value="technician">Mercedes</option>
          <option value="staff">Audi</option>
        </select>
      </div>
      
    </div>
    
    

    

    
    
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