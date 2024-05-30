<script>
    import { getCookieValue } from "../../hooks/auth"
    import Modal from '../../components/Modal.svelte';

    export let book_date;
    export let book_id;
    export let cellphone_model;
    export let issue_description;
    export let repair_status;
    export let appointment_status;
    export let username;

    let showModal = false;

    const editBook = async () =>{
        showModal = true;
    }

    const validateDone = () => {
  
        if (!book_date || !book_id || !cellphone_model || !issue_description || !repair_status || !user_id) {
            alert('Please fill in all fields correctly.');
            return false;
        }
        else{
            return true
        }
    };

    const handleDone = async () =>{

        const validate = validateDone();

        if(!validate){
            return false;
        }

        const editData = JSON.stringify({
            booking_date,
            booking_id,
            cellphone_model,
            issue_description,
            repair_status,
            user_id,
            appointment_status,
        })

        try {   
            const accessToken = getCookieValue('accessToken');

            const response = await fetch('http://localhost:9000/booking/editBook', {
                method: 'PUT',
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

    const handleDelete = async() => {

        const deleteData =  JSON.stringify({
            booking_id
        })
        try {   
            const accessToken = getCookieValue('accessToken');

            const response = await fetch('http://localhost:9000/booking/deleteBook', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: deleteData,
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

<tr class="bg-white border-b">
    <td class="py-4 px-6 ">{book_id}</td>
    <td class="py-4 px-6">{username}</td>
    <td class="py-4 px-6">{book_date}</td>
    <td class="py-4 px-6">{cellphone_model}</td>
    <td class="py-4 px-6">{issue_description}</td>
    <td class="py-4 px-6"><span class=" rounded-full py-2 px-6 text-accent bg-main">{repair_status}</span></td>
    <td class="py-4 px-6"><span class=" rounded-full py-2 px-6 text-accent bg-main">{appointment_status}</span></td>
    <td class="py-4 px-6"><button on:click={editBook} class="rounded-sm py-2 px-6 text-main bg-secondary">Edit</button></td>
    
</tr>

<Modal bind:showModal>
	<h2 slot="header" class="text-center text-sm font-medium">
		EDIT USER
	</h2>

    

    <form on:submit={handleDone}>
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-black">BOOKED BY USER</label>
                <input type="text" bind:value={username}  class="bg-main border border-secondary text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
            </div>

            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-black">BOOKING DATE</label>
                <input type="text" bind:value={book_date}  class="bg-main border border-secondary text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
            </div>

            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-black">PHONE MODEL</label>
                <input type="text" bind:value={cellphone_model}  class="bg-main border border-secondary text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
            </div>

            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-black">REPAIR ISSUE</label>
                <input type="text" bind:value={issue_description}  class="bg-main border border-secondary text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
            </div>

         
          
            <div>
                <label for="category" class="block mb-2 text-sm font-medium text-black ">REPAIR STATUS</label>
                <select bind:value={repair_status} id="category" class="bg-main border border-secondary text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                    <option value="Pending">pending</option>
                    <option value="Repairing">repairing</option>
                    <option value="Done">completed</option>
                </select>
            </div>

            <div>
                <label for="category" class="block mb-2 text-sm font-medium text-black ">APPOINTMENT STATUS</label>
                <select bind:value={appointment_status} id="category" class="bg-main border border-secondary text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                    <option value="Pending">pending</option>
                    <option value="Approved">approved</option>
                    <option value="Rejected">rejected</option>
                </select>
            </div>

        </div>

        <div class="flex items-center justify-between space-x-4">
            <button type="submit"  class="text-black bg-secondary hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Save Changes
            </button>
            <button on:click={handleDelete} type="button" class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Delete Book
            </button>
        </div>
    </form>




</Modal>