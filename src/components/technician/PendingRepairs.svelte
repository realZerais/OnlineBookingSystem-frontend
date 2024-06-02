<script>

  import { getCookieValue } from "../../hooks/auth"
  import Modal from '../../components/Modal.svelte';
  import { format } from 'date-fns';

  //props
  export let book_date;
  export let book_id;
  export let cellphone_model;
  export let issue_description;
  export let username;
  export let remark;

  //locals
  let repair_status = 'repairing';
  let progress_description = 'Repair started';

  function getCurrentDateTimeFormatted() {
    const now = new Date();
    const formattedDateTime = format(now, 'MMMM d, yyyy HH:mm:ss');
    return formattedDateTime;
  }

  let progress_time = getCurrentDateTimeFormatted();

  let showStart = false;


  let showModal = false;

  $: console.log(showModal)

  const viewBook = async () =>{
    showStart = false;
    showModal = true;
   
  }

  const showStartModal = () =>{
    showStart = true;
    showModal = true;

  }

  const closeModal = () =>{
    showModal = false;
    showStart = false;
  }

  const handleStart = async () =>{



    const editData = JSON.stringify({
            
      book_id,
      repair_status,
      progress_time,
      progress_description,


    })

    console.log(editData);

    try {
      const accessToken = getCookieValue('accessToken');

      const response = await fetch('http://localhost:9000/booking/updateRepairingBook', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: editData,
      }); 

      if (!response.ok) {
        const errorData = await response.json();
        const {message} = errorData;
        console.log(message);
        alert(message);
      }else{
        const messageResponse = await response.json();
        setTimeout(function(){
          const {message} = messageResponse;
          alert(message);
          location.reload();
        }, 1000); 
      }
      
    } catch (error) {
      console.error('Error:', error);
    }

  }
</script>

<div class="flex justify-between items-center w-[100%] h-[10vh] border border-main px-4 rounded-lg shadow-lg">


    <div class="h-[100%] p-4 w-1/6">
      <h1 class="block mb-2 text-sm font-medium text-black">booked by</h1>
      <p class="text-sm">{username}</p>
    </div>

    <div class="h-[100%] p-4 w-1/6">
      <h1 class="block mb-2 text-sm font-medium text-black">model</h1>
      <p class="text-sm">{cellphone_model}</p>
    </div>

    <div class="h-[100%] p-4 w-1/6">
      <h1 class="block mb-2 text-sm font-medium text-black">booked date</h1>
      <p class="text-sm">{book_date}</p>
    </div>

    <div>
      <button on:click={viewBook} class="text-sm py-2 px-6 rounded-lg text-black border border-black hover:bg-accent hover:text-main  ">View</button>
      <button on:click={showStartModal} class="text-sm py-2 px-6 rounded-lg border-black text-black border bg-secondary hover:bg-accent hover:text-main">Start Repair</button>  
    </div>
</div>


{#if showStart}
  <Modal bind:showModal>
    <h2 slot="header" class="text-center text-sm font-medium">
      Starting Repair
    </h2>

    <div class="grid gap-4 mb-4 sm:grid-cols-2 text-center">
      <div>
        <label for="name" class="block mb-2 text-sm font-medium text-black">PHONE MODEL</label>
        <h1   class="text-main font-semibold rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full ">
            {cellphone_model}
        </h1>
      </div>

      <div>
        <label for="name" class="block mb-2 text-sm font-medium text-black">ISSUE DESCRIPTION</label>
        <h1   class="text-main font-semibold rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full ">
            {issue_description}
        </h1>
      </div>
    </div>

    <div class="w-[100%] text-center mt-11">
      <h1 class="text-main font-semibold rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full">ARE YOU SURE YOU WANT TO START THE REPAIR?</h1>
    </div>

    <div class="flex justify-center items-center gap-64 mt-14 ">
      <button on:click={handleStart} class="text-sm py-2 px-6 rounded-lg border-black text-black border bg-secondary hover:bg-accent hover:text-main">Yes</button>  
      <button on:click={closeModal} class="text-sm py-2 px-6 rounded-lg text-white border border-black bg-red-700 hover:bg-red-900">No</button>    
    </div>
    
    
  </Modal>
{:else}
<Modal bind:showModal>

  <h2 slot="header" class="text-center text-sm font-medium">
		Repair Details
	</h2>


  <div class="grid gap-4 mb-4 sm:grid-cols-2">
    <div>
      <label for="name" class="block mb-2 text-sm font-medium text-black">BOOKED BY USER</label>
      <h1   class="text-main font-semibold rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full ">
          {username}
      </h1>
    </div>

    <div>
      <label for="name" class="block mb-2 text-sm font-medium text-black">BOOK ID</label>
      <h1   class="text-main font-semibold rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full ">
          {book_id}
      </h1>
    </div>

    <div>
      <label for="name" class="block mb-2 text-sm font-medium text-black">BOOKED DATE</label>
      <h1   class="text-main font-semibold rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full ">
        {book_date}
      </h1>
    </div>

    <div>
      <label for="name" class="block mb-2 text-sm font-medium text-black">PHONE MODEL</label>
      <h1   class="text-main font-semibold rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full ">
        {cellphone_model}
      </h1>
    </div>

  </div>

  <div>
    <label for="name" class="block mb-2 text-sm font-medium text-black">ISSUE DESCRIPTION</label>
    <h1   class="text-main font-semibold rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full ">
      {issue_description}
    </h1>
  </div>    

  <div>
    <label for="name" class="block my-2 text-sm font-medium text-black">STAFF REMARK</label>
    <h1   class="text-main font-semibold rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full ">
      {remark}
    </h1>
  </div>   



</Modal>
{/if}
