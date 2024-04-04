<script>

  import { getCookieValue } from "../../hooks/auth"

  export let booking_date;
  export let booking_id;
  export let cellphone_model;
  export let issue_description;
  export let user_id;

  const handleApprove = () =>{

  }
</script>

<div class="flex justify-between items-center w-[100%] h-[15vh] border border-main rounded-md px-4">
    <div class="h-[100%] p-4 w-1/6 ">
      <h1 class="block mb-2 text-sm font-medium text-black">id</h1>
      <p class="text-sm">{booking_id}</p>
    </div>

    <div class="h-[100%] p-4 w-1/6">
      <h1 class="block mb-2 text-sm font-medium text-black">booked by</h1>
      <p class="text-sm">{user_id}</p>
    </div>

    <div class="h-[100%] p-4 w-1/6">
      <h1 class="block mb-2 text-sm font-medium text-black">model</h1>
      <p class="text-sm">{cellphone_model}</p>
    </div>

    <div class="h-[100%] p-4 w-1/6">
      <h1 class="block mb-2 text-sm font-medium text-black">date</h1>
      <p class="text-sm">{booking_date}</p>
    </div>

    <div class="h-[100%] p-4 w-1/6">
      <h1 class="block mb-2 text-sm font-medium text-black">issue</h1>
      <p class="text-sm">{issue_description}</p>
    </div>
    
    <button on:click={handleApprove} class="text-sm py-2 px-6 rounded-lg text-black border border-main hover:bg-accent hover:text-main  ">approve</button>
</div>