<script>
  import {fetchUserBooks} from '../../hooks/handleUser'
  import {fetchUserData} from '../../hooks/handleUser'
  import { onMount } from 'svelte';
  

  let books = '';
  let bookCount = 0;

  let user = '';

  onMount(async() =>{
    user = await fetchUserData();
    // console.log(user);
    books = await fetchUserBooks(user.user_id);  

    books.forEach(e => {
      bookCount++;
    });

  })
</script>




  <div class="h-[20vh] border-2 border-main bg-white p-4 gap-4 rounded-lg shadow-lg">
    <div class="flex w-[100%] h-1/4  justify-start items-start text-md text-main font-semibold capitalize rounded-md">
      BOOKS
    </div>

    <div class="flex w-[100%] h-3/4  justify-start items-center text-6xl text-main font-bold capitalize rounded-md">
      {bookCount}
    </div>
  </div>



<style>




</style>