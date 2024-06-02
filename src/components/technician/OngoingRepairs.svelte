<script>
  import Modal from '../../components/Modal.svelte';
  import { getCookieValue } from "../../hooks/auth";
  import {fetchBookProgress} from "../../hooks/handleProgress"
  import { parseISO, format } from 'date-fns';

  //props
  export let book_date;
  export let book_id;
  export let cellphone_model;
  export let issue_description;
  export let username;
  

  //locals
  let bookProgress = '';
  let progress_description;

  let showLog = false;
  let showModal = false;
  
  function getCurrentDateTimeFormatted() {
    const now = new Date();
    const formattedDateTime = format(now, 'MMMM d, yyyy HH:mm:ss');
    return formattedDateTime;
  }

  let progress_time = getCurrentDateTimeFormatted();

 


  const update = async () =>{
    let repair_status = 'repairing';

    const editData = JSON.stringify({
            
      book_id,
      repair_status,
      progress_description,
      progress_time

    })

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

  const complete = async()=>{
    let repair_status = 'completed';
    progress_description = 'The phone is done and ready to be retrieved';
    
    const editData = JSON.stringify({
            
      book_id,
      repair_status,
      progress_description,
      progress_time

    })

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

  const handleLogs = async() =>{
    showLog = true;
    showModal = true;
    

    bookProgress = await fetchBookProgress(book_id);
    bookProgress.forEach(e => {
        let dateString = e.progress_time;
        const parsedDate = parseISO(dateString);
        const formattedDate = format(parsedDate, 'MMMM d, yyyy h:mm aa');
        e.progress_time = formattedDate;
        
      });
    console.log(bookProgress)
  }

  const handleUpdate = ()=>{
    showLog = false;
    showModal = true;    
  }

  const handleClose = () =>{
    showModal = false; 
    // showLog = false;
  

    // console.log(showLog, showModal)
  
  }

  
</script>
  
<div class="flex justify-between items-center w-[100%] h-[10vh] border border-main px-4 rounded-lg shadow-lg">
    <!-- <div class="h-[100%] p-4 w-1/6 ">
      <h1 class="block mb-2 text-sm font-medium text-black">id</h1>
      <p class="text-sm">{book_id}</p>
    </div>
  -->
    <div class="h-[100%] p-4 w-1/6">
      <h1 class="block mb-2 text-sm font-medium text-black">booked by</h1>
      <p class="text-sm">{username}</p>
    </div>

    <div class="h-[100%] p-4 w-1/6">
      <h1 class="block mb-2 text-sm font-medium text-black">model</h1>
      <p class="text-sm">{cellphone_model}</p>
    </div>

    <div class="h-[100%] p-4 w-1/6">
      <h1 class="block mb-2 text-sm font-medium text-black">book date</h1>
      <p class="text-sm">{book_date}</p>
    </div>

    <div class="h-[100%] p-4 w-1/6">
      <h1 class="block mb-2 text-sm font-medium text-black">issue</h1>
      <p class="text-sm">{issue_description}</p>
    </div>
    
    <div>
      <button on:click={handleLogs} class="text-sm py-2 px-6 rounded-lg text-black border border-black hover:bg-accent hover:text-main  ">View Logs</button>
      <button on:click={handleUpdate} class="text-sm py-2 px-6 rounded-lg border-black text-main border bg-secondary hover:bg-accent hover:text-main">Update</button>
    </div>
</div>


{#if !showLog }  <Modal bind:showModal>
  <h2 slot="header" class="text-center text-sm font-medium">
    Update Repair
  </h2>


  <div class="grid gap-4 mb-4 sm:grid-cols-1">
    <div class="h-[40vh]">
      <label for="name" class="block mb-2 text-sm font-medium text-black">Progress Description:</label>
      <textarea bind:value={progress_description} rows="5" class="text-slate-900 p-2 font-semibold border border-main rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full h-[80%]"></textarea>
    </div>
  </div>

<div class="flex justify-between">
  <div>
    <button on:click={update} class="text-sm py-2 px-6 rounded-lg border-black text-main border bg-secondary hover:bg-accent hover:text-main">Update</button>
    <button on:click={complete} class="text-sm py-2 px-6 rounded-lg border-black text-main border bg-accent hover:opacity-50 hover:text-main">Complete</button>
  </div>
 
    <button on:click={handleClose} class="text-sm py-2 px-6 rounded-lg text-white border border-black bg-red-700 hover:bg-red-900">CLOSE</button>
  </div>
</Modal>
  
{:else }
<Modal bind:showModal>
  <h2 slot="header" class="text-center text-sm font-medium">
    Book Progress logs
  </h2>

  
    {#each bookProgress as progress}
    
      <div class="flex justify-around my-4">
        <div>
          <h1>{progress.progress_time}</h1>
        </div>
        <div>

          <h1 class="text-slate-600">{progress.progress_description}</h1>
        </div>

      </div>

      
    {/each}

  
</Modal>
{/if}


