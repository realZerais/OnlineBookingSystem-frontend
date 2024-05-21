<script>

    import { getCookieValue } from "../../hooks/auth"

    export let username;
    export let full_name;
    export let user_id;
    export let phone_number;
    export let registration_date;
    export let email;
    export let user_role;
    
    import Modal from '../../components/Modal.svelte';

    let showModal = false;
 
    
 
    const editRole = async () =>{
        showModal = true;
    }
  
    const validateDone = () => {
  
        if (!username || !full_name || !email || !phone_number || !registration_date) {
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
            username,
            full_name,
            user_id,
            phone_number,
            registration_date,
            email,
            user_role
        })

        try {   
            const accessToken = getCookieValue('accessToken');

            const response = await fetch('http://localhost:9000/user/editUser', {
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

</script>

<tr class="bg-white border-b">
    <td class="py-4 px-6 ">{username}</td>
    <td class="py-4 px-6">{full_name}</td>
    <td class="py-4 px-6">{user_id}</td>
    <td class="py-4 px-6">{phone_number}</td>
    <td class="py-4 px-6">{registration_date}</td>
    <td class="py-4 px-6">{email}</td>
    <td class="py-4 px-6"><span class=" rounded-full py-2 px-6 text-accent bg-main">{user_role}</span></td>
    <td class="py-4 px-6"><button on:click={editRole} class="rounded-sm py-2 px-6 text-main bg-secondary">Edit</button></td>
    
</tr>


<Modal bind:showModal>
	<h2 slot="header" class="text-center text-sm font-medium">
		EDIT USER
	</h2>

    

    <form on:submit={handleDone}>
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-black">USERNAME</label>
                <input type="text" bind:value={username}  class="bg-main border border-secondary text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
            </div>

            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-black">FULL NAME</label>
                <input type="text" bind:value={full_name}  class="bg-main border border-secondary text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
            </div>

            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-black">PHONE NUMBER</label>
                <input type="text" bind:value={phone_number}  class="bg-main border border-secondary text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
            </div>

            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-black">EMAIL</label>
                <input type="text" bind:value={email}  class="bg-main border border-secondary text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
            </div>

            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-black">REGISTERED DATE</label>
                <input type="text" bind:value={registration_date}  class="bg-main border border-secondary text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
            </div>
          
            <div>
                <label for="category" class="block mb-2 text-sm font-medium text-black ">ROLE</label>
                <select bind:value={user_role} id="category" class="bg-main border border-secondary text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                    <option value="user">user</option>
                    <option value="staff">staff</option>
                    <option value="technician">technician</option>
                    <option value="admin">admin</option>
                </select>
            </div>

        </div>

        <div class="flex items-center justify-between space-x-4">
            <button type="submit"  class="text-black bg-secondary hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Save Changes
            </button>
            <button type="button" class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                Delete User
            </button>
        </div>
    </form>




</Modal>