<script>
  import {fetchCompletedBooks} from '../../hooks/handleBook';
  import {fetchBookProgress} from "../../hooks/handleProgress"
  import { onMount } from "svelte";
  import { format, parseISO } from 'date-fns';
  import { paginate, LightPaginationNav } from 'svelte-paginate'
  import Modal from '../../components/Modal.svelte';



  let books = [];
  let bookProgress = [];
  $: items = books;
  let currentPage = 1
  let pageSize = 8;
  let paginatedItems = [];

  $: updatePaginatedItems = () => {
    paginatedItems = paginate({ items, pageSize, currentPage });
  };

  $: {
    updatePaginatedItems();
  }

  let showLog = false;
  let showModal = false;
  
  onMount(async() =>{
    books = await fetchCompletedBooks();
    books.forEach(e => {
      let dateString = e.book_date;
      let parsedDate = new Date(dateString);
      const formattedDate = format(parsedDate, 'MMMM d, yyyy');
      e.book_date = formattedDate;
      
    });
    
    updatePaginatedItems();
  })

  const handleLogs = async(book_Id) =>{
    showLog = true;
    showModal = true;

    let prID = book_Id
    

    bookProgress = await fetchBookProgress(prID);
    bookProgress.forEach(e => {
        let dateString = e.progress_time;
        const parsedDate = parseISO(dateString);
        const formattedDate = format(parsedDate, 'MMMM d, yyyy h:mm aa');
        e.progress_time = formattedDate;
        
      });
    console.log(bookProgress)
  }
  
  </script>
  
  <div class="flex flex-col w-[93%] justify-start items-center"> 
    <div class="flex flex-col justify-start items-start w-[80%] my-4">
     
      <div class="text-2xl font-bold text-main">Repair Logs</div> 
    </div>
    

  
  
    <!--LOGS TABLE-->
    <div class="flex items-center justify-center min-h-[450px] w-[80%] mb-4">
    
      <div class="flex flex-col justify-between overflow-x-auto overflow-y-auto  shadow-md rounded-sm w-[100%] h-[79vh] mt-2">
    
        <table class="min-w-full text-sm text-left text-primary">
          
          <thead class="text-xs text-white uppercase  bg-main ">
          
            <tr>
              <th scope="col" class="py-3 px-6">BOOK ID</th>
              <th scope="col" class="py-3 px-6">USER</th>
              <th scope="col" class="py-3 px-6">BOOKING DATE </th>
              <th scope="col" class="py-3 px-6">PHONE MODEL</th>
              <th scope="col" class="py-3 px-6">ISSUE DESCRIPTION</th>
              <th scope="col" class="py-3 px-6">Progress Logs</th>
              <th scope="col" class="py-3 px-6 overflow-y-auto">REPAIR STATUS</th>
              <th scope="col" class="py-3 px-6"></th>
            </tr>
          </thead>
  
          {#if books.length == 0}
            <div class="text-lg font-semibold text-main">No Repairs Yet...</div> 

          {:else}
            <tbody>
                {#each books as book}
                <tr class="bg-white border-b">
                    <td class="py-4 px-6 ">{book.book_id}</td>
                    <td class="py-4 px-6">{book.username}</td>
                    <td class="py-4 px-6">{book.book_date}</td>
                    <td class="py-4 px-6">{book.cellphone_model}</td>
                    <td class="py-4 px-6">{book.issue_description}</td>
                    <td><button on:click={handleLogs(book.book_id)} class="text-sm py-2 px-6 rounded-lg text-black border border-black hover:bg-accent hover:text-main  ">View Logs</button></td>
         

                    <td class="py-4 px-6"><span class=" rounded-full py-2 px-6 text-accent bg-main">{book.repair_status }</span></td>

                </tr>
                {/each}
            </tbody>
          {/if}
         
  
        </table>

        <LightPaginationNav
        totalItems="{items.length}"
        pageSize="{pageSize}"
        currentPage="{currentPage}"
        limit="{1}"
        showStepOptions="{true}"
        on:setPage="{(e) => currentPage = e.detail.page}"
      />
      </div>
  
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