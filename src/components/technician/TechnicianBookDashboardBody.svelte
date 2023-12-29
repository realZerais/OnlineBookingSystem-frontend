<script>
    import TechnicianStartRepair from "$technician/TechnicianStartRepair.svelte";

    let showModal = false;
 

</script>

<div class="body">

    <div class="header flex flex-col self-start rounded-3xl w-[100%] h-[100%] p-8 pb-14 justify-center gap-y-5 ">
        <strong class="text-6xl text-mainParagraph tracking-widest ml-[9%]">BOOKING</strong>
        <hr class="border-t-2 border-accent w-6/12 ml-[9%]"> 
    </div>

    <div class="content flex justify-center items-center row-span-2 w-[100%]">
        <div class="flex justify-center  items-center w-[80%] h-[90%] bg-mainParagraph  border-black border-2 shadow-leftbottom ml-[3%]">
            <button on:click={() => (showModal = true)} class="bg-black text-white p-[10px] ">SAMPLE_BOOKED_DATE</button>
            

<TechnicianStartRepair bind:showModal>
    <div name="start" class="flex flex-col w-[100%] h-[100%] divide-y">
       

        <dif class="flex w-[100%] h-[80%] p-5 divide-x">

            <div class="flex flex-col w-[50%] h-[100%] ">
                <h2 class="flex  justify-center font-bakbak">
                    CLIENT DETAILS
                </h2>
                
                <div class="flex flex-col w-[100%] h-[100%] pl-[50px] pt-[20px]">
                    <h1 class="flex justify-self-start gap-x-[40px]">Name: <p>Ricky Dave Nene</p></h1>
                    <h1 class="flex justify-self-start gap-x-[40px]">Email: <p>gerald143@gmail.com</p></h1>
                    <h1 class="flex justify-self-start gap-x-[30px]">Phone: <p>+63 1234567</p></h1> 
                    <h1 class="flex justify-self-start gap-x-[30px]">User ID: <p>01</p></h1> 
                </div>
            </div>
    
            <div class="flex flex-col items-center w-[50%] h-[100%] ">
                <h2 class="flex  justify-center font-bakbak">
                    DEVICE DETAILS
                </h2>
                
                <div class="flex flex-col w-[100%] h-[100%] pl-[65px] pt-[20px]">
                    <h1 class="flex justify-self-start gap-x-[40px]">Brand: <p>Apple</p></h1>
                    <h1 class="flex justify-self-start gap-x-[40px]">Model: <p>iPhone 15 Pro Max</p></h1>
                    <h1 class="flex justify-self-start gap-x-[45px]">Issue: <p>Broken LCD</p></h1>    
                </div>
            </div>
            
        </dif>

        <div class="flex w-[100%] h-[20%] ">

            <div class="flex flex-col   items-center w-[50%] h-[100%]">
                <label class="font-bakbak" for="name">TECHNICIAN</label>
                <input id="input" class="w-[70%] border-2 border-black rounded text-center " type="text" placeholder="Enter name">
            </div>

            <div class="flex justify-center items-center w-[50%] h-[100%]">
                <a href="/DashboardPage/technicianDashboardPage/Dashboard/status">
                    <button on:click={() => (showModal = true)} id="repairBtn" class="flex font-bakbak items-center bg-accent p-3 h-[10%] rounded-3xl">START REPAIR</button>
                </a>    
            </div>
           
        </div>
        

        
        
    </div>
        
       
           

    
    
	

	
</TechnicianStartRepair>
        </div>
    </div>

</div>


<style>

    .body{
        display: grid;
        background-color: #004643;
      width: 100%;
      height: 100%;
      grid-template-columns: 1fr;
      grid-template-rows: 120px 1fr;
    }

    .header{
        visibility: hidden;
        margin-left: -20%;
        animation: to-right .3s linear forwards;
    }



    @keyframes to-right {
       0% {
         visibility: hidden; /* Start with opacity 0 */
       }
       100% {
         visibility: visible;
         margin-left: 0%;
       }
     }

</style>