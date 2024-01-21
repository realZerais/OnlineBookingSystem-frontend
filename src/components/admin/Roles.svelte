<script>
  import { onMount } from "svelte";
  
  let username = 'test';

  const editRole = () =>{
    
  }
  
  onMount(async() =>{

  })
</script>

<div class="flex flex-col justify-start items-center p-2 ml-10 mt-4 gap-5">

  <div class="header flex items-center justify-center h-[10vh] w-[95%] rounded-sm  bg-slate-100 text-4xl">
    <h1>MANAGE ROLES</h1>
  </div>

  

  <div class="flex flex-col  items-start justify-start p-5  w-[95%] rounded-xl  bg-white text-4xl gap-2 ">
   

  
    <div class="flex items-center justify-around w-[100%] gap-2 mb-5 ">
      <h1>USERNAME</h1>
      <h1>ROLE</h1>
    </div>

    
    <div class="flex items-center justify-around h-[20vh] w-[100%] rounded-xl bg-main text-white gap-6 relative">
      <p >{username} </p>

      <div>
        <label for="cars">Role:</label>
        <select name="cars" id="cars">
          <option value="volvo">admin</option>
          <option value="saab">user</option>
          <option value="technician">Mercedes</option>
          <option value="staff">Audi</option>
        </select>

        <button class="bg-accent p-4 text-lg rounded-xl absolute" disabled on:click={editRole}>save changes</button>
      </div>
      
    </div>
 
    <div class="flex items-center justify-around h-[20vh] w-[100%] rounded-xl bg-main text-white ">
      <p >{username} </p>

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

    <div class="flex items-center justify-around h-[20vh] w-[100%] rounded-xl bg-main text-white gap-6 ">
      <p >{username} </p>

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

    <div class="flex items-center justify-around h-[20vh] w-[100%] rounded-xl bg-main text-white gap-6 ">
      <p >{username} </p>

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

    <div class="flex items-center justify-around h-[20vh] w-[100%] rounded-xl bg-main text-white gap-6 ">
      <p >{username} </p>

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