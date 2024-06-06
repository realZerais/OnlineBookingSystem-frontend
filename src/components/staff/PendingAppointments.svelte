<script>

  import Modal from '../../components/Modal.svelte';
  import RejectModal from '../../components/Modal.svelte'
  import { getCookieValue } from "../../hooks/auth"
  import { toast } from '@zerodevx/svelte-toast'
  import {fail} from '../../lib/index'

  export let book_date;
  export let book_id;
  export let cellphone_model;
  export let issue_description;
  export let handleDelete;
  // export let user_id;
  export let username;

  let remark;
    
  // $: console.log(remark);

  let showModal = false;
  let showRejectModal = false;
  let showApproveModal = false;

  const viewBook = async () =>{
    showRejectModal = false;
    showApproveModal = false;
    showModal = true;
   
  }

  const viewRejectBook = async () =>{
    showRejectModal = true;
    showApproveModal = false;
    showModal = true;
  }

  const viewApprove = async () =>{
    showApproveModal = true;
    showRejectModal = false;
    showModal = true;
  }

  const closeModal = async () =>{
    showApproveModal = false;
    showModal = false;
    showRejectModal = false;
  }


  let appointment_status;

  const handleApprove = async () =>{
  
    appointment_status = 'approved';
    remark = 'Book Approved!'

    const editData = JSON.stringify({
            
      book_id,
      appointment_status,
      remark,
    
    })
    
    try {
        const accessToken = getCookieValue('accessToken');

        const response = await fetch('http://localhost:9000/booking/editPendingAppointment', {
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
        toast.push(message, {theme: $fail});
    }else{
        const messageResponse = await response.json();
        const {message} = messageResponse;
        toast.push(message);
        handleDelete(book_id)
    }
    
    } catch (error) {
    console.error('Error:', error);
    }

    closeModal();
  }

  const handleReject = async () =>{
    appointment_status = 'rejected';

    if(remark == null || remark == ''){
      remark = 'Appointment Rejected!';
    }

    const editData = JSON.stringify({
      
      book_id,
      appointment_status,
      remark,
    
    })
    
    try {
        const accessToken = getCookieValue('accessToken');

        const response = await fetch('http://localhost:9000/booking/editPendingAppointment', {
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
        toast.push(message, {theme: $fail});
    }else{
      const messageResponse = await response.json();
      const {message} = messageResponse;
      toast.push(message);
      handleDelete(book_id)
    
    }
    
    } catch (error) {
      console.error('Error:', error);
      toast.push(`Operation failed! error: ${error.message}`, {theme: $fail});
    }

    closeModal();
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
      <h1 class="block mb-2 text-sm font-medium text-black">date</h1>
      <p class="text-sm">{book_date}</p>
    </div>

    <div>
      <button on:click={viewBook} class="text-sm py-2 px-6 rounded-lg text-black border border-black hover:bg-accent hover:text-main  ">View</button>
      <button on:click={viewApprove} class="text-sm py-2 px-6 rounded-lg border-black text-black border bg-secondary hover:bg-accent hover:text-main">Approve</button>
      <button on:click={viewRejectBook} class="text-sm py-2 px-6 rounded-lg text-white border border-black bg-red-700 hover:bg-red-900">Reject</button>  
    </div>
   

  </div>

{#if showRejectModal }
<RejectModal bind:showModal>

  <h2 slot="header" class="text-center text-sm font-medium">
    REJECT REMARK
  </h2>
  <div class="grid gap-4 mb-4 sm:grid-cols-1">
    <div class="h-[40vh]">
      <textarea bind:value={remark} rows="5" class="text-slate-900 p-2 font-semibold border border-main rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full h-[80%]"></textarea>
    </div>
  </div>

  <div class="flex justify-center">
    <button on:click={handleReject} class="text-sm py-2 px-6 rounded-lg text-white border border-black bg-red-700 hover:bg-red-900">REJECT</button>
  </div>


</RejectModal>
{:else if showApproveModal}
<Modal bind:showModal>

  <h2 slot="header" class="text-center text-sm font-medium">
		ARE YOU SURE YOU WANT TO APPROVE?
	</h2>


  <div class="flex justify-around">
    <div class="flex justify-center">
      <button on:click={handleApprove} class="text-sm py-2 px-6 rounded-lg border-black text-black border bg-secondary hover:bg-accent hover:text-main">YES</button>
    </div>

    <div class="flex justify-center">
      <button on:click={closeModal} class="text-sm py-2 px-6 rounded-lg text-white border border-black bg-red-700 hover:bg-red-900">NO</button>
    </div>
  </div>
    


</Modal>

{:else}
<Modal bind:showModal>

  <h2 slot="header" class="text-center text-sm font-medium">
		Appointment Details
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



</Modal>

{/if}


