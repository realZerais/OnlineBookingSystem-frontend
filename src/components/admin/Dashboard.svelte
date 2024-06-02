<script>
  import {userName} from '../../hooks/auth'
  import {fetchAllBook} from '../../hooks/handleBook'
  import {fetchAllUser} from '../../hooks/handleUser'
  import { onMount } from 'svelte';

  let bookCount = 0;
  let books = ''

  let userCount = 0;
  let users = '';
  onMount(async() =>{
    books = await fetchAllBook();

    books.forEach(e => {
      bookCount++;
    });


    users = await fetchAllUser();

    users.forEach(e => {
      userCount++;
    });

  })
</script>

<div class="flex flex-col justify-start items-center w-[93%] ">

  <div class="flex flex-col justify-start items-start w-[80%] my-4">
    <div class="font-mono font-semibold text-slate-700">Welcome {$userName}!</div>
    <div class="text-2xl font-bold text-main">Dashboard</div> 
  </div>
  

  <div class="flex justify-start items-center w-[80%] my-4 gap-8">
    <div class="w-[25%] h-[20vh] border-2 border-accent bg-main flex flex-col items-start justify-start p-4 gap-4 rounded-lg shadow-lg">
      <div class="flex w-[100%] h-1/4  justify-start items-start text-md text-slate-50 font-semibold capitalize rounded-md">
        USERS
      </div>

      <div class="flex w-[100%] h-3/4  justify-start items-center text-6xl text-slate-100 font-bold capitalize rounded-md">
        {userCount}
      </div>
    </div>

    <div class="w-[25%] h-[20vh] border-2 border-accent bg-main flex flex-col items-start justify-start p-4 gap-4 rounded-lg shadow-lg">
      <div class="flex w-[100%] h-1/4  justify-start items-start text-md text-slate-50 font-semibold capitalize rounded-md">
        BOOKS
      </div>

      <div class="flex w-[100%] h-3/4  justify-start items-center text-6xl text-slate-100 font-bold capitalize rounded-md">
        {bookCount}
      </div>
    </div>
    
  </div>



</div>



<style>


</style>