<script>

    import { getCookieValue } from "../../hooks/auth"
  
    export let book_date;
    export let book_id;
    export let cellphone_model;
    export let issue_description;
    export let user_id;
    
    let repair_status = 'Done';
  
    const handleStart = async () =>{
  
      const editData = JSON.stringify({
              
        book_id,
        repair_status,
  
      })
  
      try {
        const accessToken = getCookieValue('accessToken');
  
        const response = await fetch('http://localhost:9000/booking/editRepairingBook', {
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
  
  <div class="flex justify-between items-center w-[100%] h-[15vh] border border-main px-4 rounded-lg shadow-lg">
      <div class="h-[100%] p-4 w-1/6 ">
        <h1 class="block mb-2 text-sm font-medium text-black">id</h1>
        <p class="text-sm">{book_id}</p>
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
        <p class="text-sm">{book_date}</p>
      </div>
  
      <div class="h-[100%] p-4 w-1/6">
        <h1 class="block mb-2 text-sm font-medium text-black">issue</h1>
        <p class="text-sm">{issue_description}</p>
      </div>
      
      <button on:click={handleStart} class="text-sm py-2 px-6 rounded-lg text-black border border-main hover:bg-accent hover:text-main  ">Finish Repair</button>
  </div>