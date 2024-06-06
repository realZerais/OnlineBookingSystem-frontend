<script>
  import Modal from '../../components/Modal.svelte';
  import {fetchBookProgress} from "../../hooks/handleProgress"
  import { parseISO, format } from 'date-fns';

  //props
  export let book_date;
  export let book_id;
  export let cellphone_model;
  export let issue_description;
  export let repair_status;
  export let appointment_status;


  let showModal = false;
  let showLog = false;

  let bookProgress = [];

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
    // console.log(bookProgress)
  }


</script>

<div class="flex justify-between items-center w-[100%] border border-main px-4 rounded-lg shadow-lg">

    <div class="h-[100%] p-4 w-1/6 hidden md:block lg:block">
      <h1 class="block mb-2 text-sm font-medium text-black">model</h1>
      <p class="text-sm">{cellphone_model}</p>
    </div>

    <div class="h-[100%] p-4 w-1/6">
      <h1 class="block mb-2 text-sm font-medium text-black">book date</h1>
      <p class="text-sm">{book_date}</p>
    </div>

    <div class="h-[100%] p-4 w-1/6 hidden md:block lg:block">
      <h1 class="block mb-2 text-sm font-medium text-black">issue</h1>
      <p class="text-sm">{issue_description}</p>
    </div>

    <div class="h-[100%] p-4 w-1/6">
        <h1 class="block mb-2 text-sm font-medium text-black">repair status</h1>
        {#if repair_status == 'pending'}
            <p class="text-sm text-accent">{repair_status}</p>
        {:else if repair_status == 'completed'}
            <p class="text-sm text-main">{repair_status}</p>
        {:else if repair_status == 'repairing'}
            <p class="text-sm text-secondary">{repair_status}</p>
        {/if}
        
    </div>

    <div class="h-[100%] p-4 w-1/6">
        <h1 class="block mb-2 text-sm font-medium text-black">appointment status</h1>
        {#if appointment_status == 'pending'}
            <p class="text-sm text-accent">{appointment_status}</p>
        {:else if appointment_status == 'approved'}
            <p class="text-sm text-main">{appointment_status}</p>
        {:else if appointment_status == 'rejected'}
            <p class="text-sm text-red-700">{appointment_status}</p>
        {/if}
    </div>
    
    <div>
      <button on:click={handleLogs} class="text-sm p-2 rounded-lg text-black border border-black hover:bg-accent hover:text-main  ">View Logs</button>
    </div>
</div>

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