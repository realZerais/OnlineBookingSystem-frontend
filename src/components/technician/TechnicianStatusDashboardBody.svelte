<script>
    import { onMount } from 'svelte';
    import TechnicianDoneRepair from "$technician/TechnicianDoneRepair.svelte";

    let showModal = false;
 
    const dashedLine = '<h1> - - - - - <h1>';
    
  
       



    
    onMount(() => {

        let waiting = document.querySelector('#waiting');
        let inProgress = document.querySelector('#inProgress');
        let done = document.querySelector('#done');

        waiting.style.backgroundColor = "#f9bc60";
        document.querySelector('#waitingImage').setAttribute('fill', 'green');
        waiting.innerHTML = "CURRENT STATUS";
        inProgress.style.backgroundColor = "gray";
        done.style.backgroundColor = "gray";

        
            waiting.addEventListener('click', () => {
            waiting.style.backgroundColor = "#f9bc60";
            inProgress.style.backgroundColor = "gray";
            done.style.backgroundColor = "gray";
            waiting.innerHTML = "CURRENT STATUS";
            inProgress.innerHTML = "SET STATUS";
            done.innerHTML = "SET STATUS";
            document.querySelector('#waitingImage').setAttribute('fill', 'green');
            document.querySelector('#inProgressImage').setAttribute('fill', 'black');
            document.querySelector('#doneImage').setAttribute('fill', 'black');
        })

            inProgress.addEventListener('click', () => {
            waiting.style.backgroundColor = "gray";
            inProgress.style.backgroundColor = "#f9bc60";
            done.style.backgroundColor = "gray";
            waiting.innerHTML = "SET STATUS";
            inProgress.innerHTML = "CURRENT STATUS";
            done.innerHTML = "SET STATUS";
            document.querySelector('#waitingImage').setAttribute('fill', 'black');
            document.querySelector('#inProgressImage').setAttribute('fill', 'green');
            document.querySelector('#doneImage').setAttribute('fill', 'black');
        })    
        
        done.addEventListener('click', () => {
            waiting.style.backgroundColor = "gray";
            inProgress.style.backgroundColor = "gray";
            done.style.backgroundColor = "#f9bc60";
            waiting.innerHTML = "SET STATUS";
            inProgress.innerHTML = "SET STATUS";
            done.innerHTML = "CURRENT STATUS";
            document.querySelector('#waitingImage').setAttribute('fill', 'black');
            document.querySelector('#inProgressImage').setAttribute('fill', 'black');
            document.querySelector('#doneImage').setAttribute('fill', 'green');
        })     
    });

</script>

<div class="body">

 <div class="header flex flex-col self-start rounded-3xl w-[100%] h-[100%] p-8 pb-14 justify-center gap-y-5" >
     <strong class="text-6xl text-mainParagraph tracking-widest ml-[9%]">STATUS</strong>
     <hr class="border-t-2 border-accent w-6/12 ml-[9%]" />
 </div>


 <div class="content flex justify-center items-center row-span-2 w-[100%]">
    
<div class="flex justify-center items-center w-[100%] h-[100%]">
    <div class="flex justify-center items-center w-[80%] h-[90%] bg-mainProfile bg-mainParagraph border-black border-2 shadow-leftbottom ml-[3%]" >
        <div class="absolute top-40 w-[20%] h-[10%] flex  gap-x-10">CUSTOMER ID: <p>01234522</p></div> 
        
        <div class="flex">
             <div class="flex flex-col justify-center items-center">
                 <svg id="waitingImage" class="w-20 h-20" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" >
                     <path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM96 75V64H288V75c0 19-5.6 37.4-16 53H112c-10.3-15.6-16-34-16-53zm16 309c3.5-5.3 7.6-10.3 12.1-14.9L192 301.3l67.9 67.9c4.6 4.6 8.6 9.6 12.1 14.9H112z" />
                 </svg>
                 <p>Waiting</p>
                 <button id="waiting" class="w-[170px] h-[70px] p-5 mt-10 bg-accent rounded-3xl">SET STATUS</button>
             </div>

             <div class="flex justify-center items-center w-25 h-20 text-4xl mb-5">
                 {@html dashedLine}
             </div>

             <div class="flex flex-col justify-center items-center">
                 <svg id="inProgressImage" class="w-20 h-20" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" >
                     <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                 </svg>
                 <p>In Progress</p>
                 <button id="inProgress" class="w-[170px] h-[70px] p-5 mt-10 bg-accent rounded-3xl">SET STATUS</button>
             </div>

             <div class="flex justify-center items-center w-25 h-20 text-4xl mb-5">
                 {@html dashedLine}
             </div>

             <div class="flex relative flex-col justify-center items-center ml-3">
                 <svg id="doneImage" class="w-20 h-20" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" >
                     <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                 </svg>
                 <p>Done</p>
                 <button id="done" on:click={() => (showModal = true)} class="w-[170px] h-[70px] p-5 mt-10 bg-accent rounded-3xl">SET STATUS</button>
        
             </div>

             <TechnicianDoneRepair bind:showModal>
                <div name="start" class="flex flex-col w-[100%] h-[100%] divide-y">
                   
            
                    <div class="flex w-[100%] h-[80%] p-5 divide-x">
            
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
                        
                    </div>
            
                    <div class="flex w-[100%] h-[50%]">
            
                        <div class="flex flex-col items-center w-[50%] h-[100%]">
                            <label class="font-bakbak" for="fixed">FIXED</label>
                            <textarea id="input" class="w-[70%] border-2 border-black rounded text-center mb-10" type="text" placeholder="Enter repair details"></textarea>
                            <label class="font-bakbak" for="total">TOTAL</label>
                            <input class="w-[50%] h-[30%] border-2 border-black rounded text-center mb-10" type="number" placeholder="Enter total payment">
                        </div>
            
                        <div class="flex justify-center items-center w-[50%] h-[100%]">
                            
                                <button id="repairBtn" class="flex font-bakbak items-center bg-accent p-7 h-[10%] rounded-3xl">DONE REPAIR</button>
                               
                        </div>
                       
                    </div>
                    
            
                    
                    
                </div>
                    
                
            </TechnicianDoneRepair>
         </div>
     </div>
    </div>  

    <div>

    </div>
</div>



</div>

<style>
 .body {
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
