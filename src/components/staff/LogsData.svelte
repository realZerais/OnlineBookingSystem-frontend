<script>
    import Modal from '../Modal.svelte';

    export let book_id;
    export let user_id;
    export let book_date;
    export let cellphone_model;
    export let issue_description;
    export let appointment_status;
    export let remark;

    let showModal = false;

    const viewRemark = async()=>{
        showModal = true;
    }
    
</script>
<tr class="bg-white border-b">
    <td class="py-4 px-6 ">{book_id}</td>
    <td class="py-4 px-6">{user_id}</td>
    <td class="py-4 px-6">{book_date}</td>
    <td class="py-4 px-6">{cellphone_model}</td>
    <td class="py-4 px-6">{issue_description}</td>
    {#if appointment_status === 'rejected'}
      <td class="py-4 px-6"><span class=" rounded-full py-2 px-5 text-red-800 bg-secondary">{appointment_status}</span></td>
      {:else}
      <td class="py-4 px-6"><span class=" rounded-full py-2 px-5 text-accent bg-main">{appointment_status}</span></td>
    {/if}
   
    <td class="py-4 px-6"><button on:click={viewRemark} class="text-sm py-1 px-3 rounded-lg text-black border border-black hover:bg-accent hover:text-main  ">VIEW REMARK</button></td>
  </tr>

<Modal bind:showModal>
    <h2 slot="header" class="text-center text-sm font-medium">
        REMARK
    </h2>

    {remark}

</Modal>