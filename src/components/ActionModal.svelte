<script>
    import Modal from '../../components/Modal.svelte';
    let showModal = false;

export const viewBook = async () =>{
    showModal = true;
}

</script>
<Modal bind:showModal>

</Modal>